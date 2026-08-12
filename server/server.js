/**
 * Plant Farming App - Server Entry Point
 * Express backend with session management, static UI delivery, and Gemini Flash intelligence.
 */

import express from 'express';
import session from 'express-session';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRouter from './routes/api.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable reverse proxy trust (required for Cloud Run HTTPS & session cookies)
app.set('trust proxy', 1);

// Enable CORS
app.use(cors());

// Parse JSON and form bodies (up to 15mb for base64 images)
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Session middleware for session-based plant tracking
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'plant_farming_botanical_secret_2026',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if behind HTTPS in production
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
);

// Mount API Routes
app.use('/api', apiRouter);

// Serve Frontend Static Assets
app.use(express.static(path.join(rootDir, 'public')));

// Catch-all route to serve the SPA index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'public', 'index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🌿 Plant Farming App Server is running!`);
  console.log(`📡 Local URL: http://localhost:${PORT}`);
  console.log(`🤖 Gemini Model: ${process.env.GEMINI_MODEL || 'gemini-2.5-flash'}`);
  console.log(`💾 Storage: Session-based in-memory store`);
  console.log(`📚 Data Source: USDA ARS / UC Davis IPM / Cornell Extension (No Wikipedia)`);
  console.log(`=================================================`);
});
