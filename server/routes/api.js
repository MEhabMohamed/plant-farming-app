/**
 * API Routes for Plant Farming Application
 */

import express from 'express';
import multer from 'multer';
import { getPlantAgriProfile, identifyPlantFromImage, diagnosePlantDisease } from '../services/geminiService.js';
import { SessionStoreService } from '../services/sessionStore.js';

const router = express.Router();

// Configure Multer for in-memory image uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

/**
 * Helper to get active API key (from session, body, or environment)
 */
function resolveApiKey(req) {
  if (req.body && req.body.apiKey && req.body.apiKey.trim() !== '') {
    return req.body.apiKey.trim();
  }
  if (req.session && req.session.customApiKey) {
    return req.session.customApiKey;
  }
  return process.env.GEMINI_API_KEY || null;
}

/**
 * Helper to get image buffer and mimetype from either multipart upload or base64
 */
function extractImageFromRequest(req) {
  if (req.file) {
    return {
      buffer: req.file.buffer,
      mimeType: req.file.mimetype
    };
  }

  if (req.body && req.body.imageBase64) {
    const base64Data = req.body.imageBase64;
    const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (matches && matches.length === 3) {
      return {
        buffer: Buffer.from(matches[2], 'base64'),
        mimeType: matches[1]
      };
    } else {
      return {
        buffer: Buffer.from(base64Data, 'base64'),
        mimeType: req.body.mimeType || 'image/jpeg'
      };
    }
  }

  return null;
}

/**
 * 1. Search Plant by Name
 * POST /api/plant/search
 */
router.post('/plant/search', async (req, res) => {
  try {
    const { plantName, lang } = req.body;
    if (!plantName || plantName.trim() === '') {
      return res.status(400).json({ error: 'Plant name is required.' });
    }

    const apiKey = resolveApiKey(req);
    const profile = await getPlantAgriProfile(plantName.trim(), apiKey, lang || 'en');

    // Save to session history
    const record = SessionStoreService.addPlantRecord(req, {
      query: plantName.trim(),
      type: 'name_search',
      profile
    });

    return res.json({
      success: true,
      data: profile,
      recordId: record.id
    });
  } catch (error) {
    console.error('API Error in /plant/search:', error);
    return res.status(500).json({ error: error.message || 'Internal server error processing plant search.' });
  }
});

/**
 * 2. Identify Plant from Image
 * POST /api/plant/identify
 */
router.post('/plant/identify', upload.single('image'), async (req, res) => {
  try {
    const imageData = extractImageFromRequest(req);
    if (!imageData) {
      return res.status(400).json({ error: 'No image provided. Please upload or capture an image.' });
    }

    const apiKey = resolveApiKey(req);
    const lang = req.body.lang || req.query.lang || 'en';
    const result = await identifyPlantFromImage(imageData.buffer, imageData.mimeType, apiKey, lang);

    if (!result.success) {
      return res.status(400).json(result);
    }

    // Save to session history
    const record = SessionStoreService.addPlantRecord(req, {
      query: result.identification.identifiedName,
      type: 'photo_identify',
      identification: result.identification,
      profile: result.agriProfile
    });

    return res.json({
      success: true,
      data: result,
      recordId: record.id
    });
  } catch (error) {
    console.error('API Error in /plant/identify:', error);
    return res.status(500).json({ error: error.message || 'Error identifying plant from image.' });
  }
});

/**
 * 3. Diagnose Plant Defect / Disease
 * POST /api/plant/diagnose
 */
router.post('/plant/diagnose', upload.single('image'), async (req, res) => {
  try {
    const imageData = extractImageFromRequest(req);
    if (!imageData) {
      return res.status(400).json({ error: 'Defective plant image is required for pathology analysis.' });
    }

    const symptoms = req.body.symptoms || '';
    const lang = req.body.lang || req.query.lang || 'en';
    const apiKey = resolveApiKey(req);

    const result = await diagnosePlantDisease(imageData.buffer, imageData.mimeType, symptoms, apiKey, lang);

    if (!result.success) {
      return res.status(400).json(result);
    }

    // Save to session history
    const record = SessionStoreService.addDiagnosisRecord(req, {
      type: 'disease_diagnosis',
      symptomsUser: symptoms,
      diagnosis: result.diagnosis
    });

    return res.json({
      success: true,
      data: result.diagnosis,
      recordId: record.id
    });
  } catch (error) {
    console.error('API Error in /plant/diagnose:', error);
    return res.status(500).json({ error: error.message || 'Error diagnosing plant defect.' });
  }
});

/**
 * 4. Get Current Session History
 * GET /api/session/history
 */
router.get('/session/history', (req, res) => {
  const sessionData = SessionStoreService.getSessionData(req);
  return res.json({
    success: true,
    data: sessionData
  });
});

/**
 * 5. Clear Current Session
 * POST /api/session/clear
 */
router.post('/session/clear', (req, res) => {
  const result = SessionStoreService.clearSession(req);
  return res.json(result);
});

/**
 * 6. Get Config / API Key Status
 * GET /api/config
 */
router.get('/config', (req, res) => {
  const serverKeyExists = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 5);
  const sessionKeyExists = Boolean(req.session && req.session.customApiKey);
  
  return res.json({
    configured: serverKeyExists || sessionKeyExists,
    hasServerKey: serverKeyExists,
    hasSessionKey: sessionKeyExists,
    defaultModel: process.env.GEMINI_MODEL || 'gemini-2.5-flash'
  });
});

/**
 * 7. Save Custom Session API Key
 * POST /api/config
 */
router.post('/config', (req, res) => {
  const { apiKey } = req.body;
  if (!req.session) {
    return res.status(500).json({ error: 'Session not initialized' });
  }

  if (apiKey && apiKey.trim().length > 5) {
    req.session.customApiKey = apiKey.trim();
    return res.json({ success: true, message: 'Gemini API Key saved for active session.' });
  } else {
    req.session.customApiKey = null;
    return res.json({ success: true, message: 'Custom session API key cleared.' });
  }
});

export default router;
