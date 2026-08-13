/**
 * Google Gemini Flash Multimodal Intelligence Service
 * Handles plant identification, agricultural profiling, and plant defect & disease diagnosis
 * Powered by Gemini Flash (2.5 / 2.0 / 1.5) with structured JSON generation and multi-language (Egyptian Arabic & English) support.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import { synthesizeAgriProfile, AUTHORITATIVE_SOURCES } from './agriKnowledgeService.js';

dotenv.config();

// Allowed models in order of priority
const FLASH_MODELS = [
  process.env.GEMINI_MODEL || 'gemini-3.6-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash',
  'gemini-2.0-flash',
  'gemini-1.5-flash'
];

/**
 * Check if a valid API key is present
 */
function hasGenerativeKey(apiKeyOverride = null) {
  const key = apiKeyOverride || process.env.GEMINI_API_KEY;
  return Boolean(key && key.trim() !== '');
}

/**
 * Helper to generate content with fallback to other models if the primary one fails
 */
async function generateContentWithFallback(apiKey, promptOrParts) {
  const key = apiKey || process.env.GEMINI_API_KEY;
  if (!key || key.trim() === '') {
    throw new Error('Gemini API Key is required.');
  }

  const genAI = new GoogleGenerativeAI(key.trim());
  const modelsToTry = [...new Set(FLASH_MODELS.map(m => m ? m.trim() : '').filter(Boolean))];

  let lastError = null;
  for (const modelName of modelsToTry) {
    try {
      console.log(`🤖 Attempting Gemini call with model: ${modelName}`);
      const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.2
        }
      });
      const result = await model.generateContent(promptOrParts);
      const text = result.response.text();
      return { text, modelName };
    } catch (err) {
      console.warn(`⚠️ Model ${modelName} failed:`, err.message);
      lastError = err;
    }
  }

  throw lastError || new Error('All Gemini model attempts failed.');
}

/**
 * Convert Buffer to Generative Part for Multimodal Vision
 */
function bufferToGenerativePart(buffer, mimeType = 'image/jpeg') {
  return {
    inlineData: {
      data: buffer.toString('base64'),
      mimeType: mimeType || 'image/jpeg'
    }
  };
}

/**
 * 1. Search Plant By Name - Returns full agricultural profile
 */
export async function getPlantAgriProfile(plantName, apiKey = null, lang = 'en') {
  if (!hasGenerativeKey(apiKey)) {
    // Return high-quality synthesis from authoritative local engine
    return synthesizeAgriProfile(plantName, null, lang);
  }

  const isArabic = (lang === 'ar');
  const langInstruction = isArabic 
    ? 'CRITICAL LANGUAGE INSTRUCTION: All descriptions, recommendations, advice, schedules, and names MUST be written in natural, fluent Egyptian Arabic agricultural terminology (اللغة العربية بأسلوب ولهجة الإرشاد الزراعي المصري المعتمد: العروات، الري بالتنقيط، التسميد، المبيدات، المكافحة). Keep scientific names in standard Latin/binomial format.'
    : 'Language: English.';

  const prompt = `You are a world-class agronomist and horticulturist referencing authoritative sources (USDA ARS, UC Davis IPM, Cornell Agronomy Extension, FAO EcoCrop, Egyptian Agricultural Research Center ARC). DO NOT use or cite Wikipedia. Provide precise, actionable, scientific and practical agricultural data for the plant: "${plantName}".

${langInstruction}

Return STRICTLY a JSON object with this exact structure:
{
  "commonName": "${isArabic ? 'اسم المحصول بالعربي' : 'Common name of plant'}",
  "scientificName": "Binomial scientific name (Latin)",
  "family": "${isArabic ? 'العائلة النباتية' : 'Botanical family'}",
  "climateCategory": "${isArabic ? 'التصنيف المناخي والعروة' : 'Climate classification'}",
  "season": {
    "sowingWindow": "${isArabic ? 'ميعاد الزراعة والعروة المناسبة' : 'Precise sowing / planting calendar window'}",
    "soilTemperature": "${isArabic ? 'درجة حرارة التربة المثالية' : 'Optimal soil germination and growth temperature'}",
    "daysToMaturity": "${isArabic ? 'مدة النضج وعمر المحصول بالأيام' : 'Number of days to harvest'}",
    "harvestPeriod": "${isArabic ? 'موسم وفترة الحصاد' : 'Seasonal harvest timeframe'}",
    "growthCycle": "${isArabic ? 'دورة النمو (حولي / ذو حولين / معمر)' : 'Annual / Biennial / Perennial'}"
  },
  "plantingMethod": {
    "depth": "${isArabic ? 'عمق وضع البذور أو الشتلات' : 'Recommended planting depth'}",
    "spacing": "${isArabic ? 'مسافات الزراعة بين النباتات والخطوط' : 'Spacing between plants and rows'}",
    "germinationDays": "${isArabic ? 'مدة الإنبات بالأيام' : 'Expected germination duration'}",
    "transplanting": "${isArabic ? 'طريقة الشتل ومعاملات التقسية' : 'Transplanting guidelines'}",
    "support": "${isArabic ? 'التدعيم والتربيط أو الخدمة الحقلية' : 'Trellising or staking recommendations'}"
  },
  "soil": {
    "idealPH": "6.0 - 6.8",
    "minPH": 6.0,
    "maxPH": 6.8,
    "texture": "${isArabic ? 'نوع وقوام التربة المناسبة' : 'Ideal soil texture'}",
    "organicMatter": "${isArabic ? 'نسبة المادة العضوية والسماد البلدي' : 'Organic matter percentage'}",
    "drainage": "${isArabic ? 'جودة الصرف والتهوية' : 'Drainage requirements'}"
  },
  "irrigation": {
    "method": "${isArabic ? 'طريقة ونظام الري الموصى به (تنقيط / غمر / رش)' : 'Recommended irrigation technique'}",
    "frequency": "${isArabic ? 'جدول ومعدلات الري' : 'Water frequency and weekly volume'}",
    "criticalStages": "${isArabic ? 'الفترات الحرجة لاحتياج المياه' : 'Critical moisture stress stages'}",
    "droughtTolerance": "${isArabic ? 'مدى تحمل العطش والجفاف' : 'Drought tolerance level'}"
  },
  "fertilizers": {
    "npkRatio": "${isArabic ? 'نسب N-P-K الموصى بها لمراحل النمو' : 'Recommended N-P-K formulation'}",
    "applicationSchedule": "${isArabic ? 'جدول ومواعيد دفعات التسميد' : 'Application timing and schedule'}",
    "organicOptions": "${isArabic ? 'أسمدة عضوية وكمبوست ومخصبات حيوية' : 'Organic fertilizers and amendments'}",
    "micronutrients": "${isArabic ? 'العناصر الصغرى الهامة (كالسيوم، مغنيسيوم، زنك، حديد)' : 'Key trace micronutrients'}"
  },
  "pesticidesAndIPM": {
    "commonPests": ["${isArabic ? 'أهم الآفات والأمراض المنتشرة' : 'List 3-5 major pests and diseases'}"],
    "organicPesticides": ["${isArabic ? 'مبيدات حيوية وعضوية (مثل زيت النيم، باسيلس، كبريت ميكروني)' : 'List 3-4 organic bio-pesticides'}"],
    "chemicalPesticides": ["${isArabic ? 'مبيدات كيميائية موجهة مع فترات الأمان' : 'List 2-3 targeted chemical options'}"],
    "ipmPractices": "${isArabic ? 'الممارسات الزراعية الوقائية والمكافحة المتكاملة' : 'Integrated pest management practices'}"
  },
  "sources": [
    "${isArabic ? 'مركز البحوث الزراعية والإرشاد الزراعي' : 'USDA Agricultural Research Service (ARS)'}",
    "${isArabic ? 'بروتوكولات إدارة الآفات المتكاملة UC Davis IPM' : 'UC Davis Integrated Pest Management (IPM)'}",
    "${isArabic ? 'دليل المحاصيل والإنتاج النباتي FAO EcoCrop' : 'Cornell Cooperative Extension'}"
  ]
}`;

  try {
    const { text } = await generateContentWithFallback(apiKey, prompt);
    const parsed = JSON.parse(text);
    return synthesizeAgriProfile(plantName, parsed, lang);
  } catch (error) {
    console.error('Gemini search error (falling back to authoritative engine):', error.message);
    return synthesizeAgriProfile(plantName, null, lang);
  }
}

/**
 * 2. Identify Plant from Image
 */
export async function identifyPlantFromImage(imageBuffer, mimeType = 'image/jpeg', apiKey = null, lang = 'en') {
  if (!hasGenerativeKey(apiKey)) {
    return {
      success: false,
      message: lang === 'ar' 
        ? 'مفتاح Gemini API مطلوب للتعرف على النباتات بالصور. يرجى إضافته في ملف .env' 
        : 'Gemini API Key is required for multimodal photo identification in .env file.'
    };
  }

  const isArabic = (lang === 'ar');
  const langInstruction = isArabic
    ? 'CRITICAL: Provide the identifiedName, visualFeatures, and briefSummary strictly in Egyptian Arabic (اللغة العربية الزراعية المصرية).'
    : 'Language: English.';

  const imagePart = bufferToGenerativePart(imageBuffer, mimeType);
  const prompt = `Analyze this plant photo as an expert botanist. Identify the plant with high confidence. DO NOT cite Wikipedia.
${langInstruction}

Return STRICTLY a JSON object with:
{
  "identifiedName": "${isArabic ? 'اسم النبات باللغة العربية' : 'Common name of the plant'}",
  "scientificName": "Binomial scientific name",
  "family": "${isArabic ? 'العائلة النباتية' : 'Botanical family'}",
  "confidence": 95,
  "visualFeatures": ["${isArabic ? 'السمات المورفولوجية المميزة في الصورة' : 'Key distinguishing traits observed in photo'}"],
  "briefSummary": "${isArabic ? 'ملخص زراعي موجز عن هذا المحصول' : 'A concise agronomic summary of this plant.'}"
}`;

  try {
    const { text } = await generateContentWithFallback(apiKey, [prompt, imagePart]);
    const identification = JSON.parse(text);

    // Fetch full agricultural guide for the identified plant
    const agriProfile = await getPlantAgriProfile(identification.identifiedName || identification.scientificName, apiKey, lang);

    return {
      success: true,
      identification,
      agriProfile
    };
  } catch (error) {
    console.error('Plant identification error:', error.message);
    throw new Error('Failed to identify plant image: ' + error.message);
  }
}

/**
 * 3. Diagnose Plant Defect / Disease from Image and Symptoms
 */
export async function diagnosePlantDisease(imageBuffer, mimeType = 'image/jpeg', userSymptoms = '', apiKey = null, lang = 'en') {
  if (!hasGenerativeKey(apiKey)) {
    return {
      success: false,
      message: lang === 'ar' 
        ? 'مفتاح Gemini API مطلوب لتشخيص أمراض النباتات بالرؤية الحاسوبية في ملف .env' 
        : 'Gemini API Key is required for visual defect and disease diagnosis in .env file.'
    };
  }

  const isArabic = (lang === 'ar');
  const langInstruction = isArabic
    ? 'CRITICAL LANGUAGE INSTRUCTION: You MUST write the defect name, pathogen type, symptoms breakdown, probable causes, emergency triage steps, organic remedies, chemical controls, and long-term prevention plan STRICTLY in natural Egyptian Arabic agricultural plant pathology terminology (العامية والمصطلحات الإرشادية المصرية المعتمدة لعلاج أمراض النبات مثل: لفحة مبكرة، بياض دقيقي، دودة قارضة، نقص كالسيوم/عفن طرفي، رش نحاس، أكسي كلوريد النحاس، إزالة الأوراق المصابة وحرقها، تنظيم الري، سلفات، كبريت زراعي).'
    : 'Language: English.';

  const imagePart = bufferToGenerativePart(imageBuffer, mimeType);
  const prompt = `You are a plant pathologist and crop doctor. Analyze this plant photo for diseases, pest damage, fungal infections, bacterial blights, viral syndromes, physiological defects, or nutrient deficiencies.
${userSymptoms ? `User reported symptoms / context: "${userSymptoms}"` : ''}

Strictly reference authoritative agricultural plant pathology protocols (e.g. UC Davis IPM, Cornell Plant Disease Diagnostic Clinic, USDA ARS, Egyptian ARC). DO NOT use Wikipedia.
${langInstruction}

Return STRICTLY a JSON object with this exact structure:
{
  "plantSuspected": "${isArabic ? 'اسم المحصول المصاب' : 'Identified host plant name'}",
  "defectName": "${isArabic ? 'اسم المرض أو الآفة أو النقص بالعربي' : 'Specific name of the disease or defect'}",
  "pathogenType": "${isArabic ? 'فطري | بكتيري | فيروسي | حشري / آفة | نقص عناصر | إجهاد بيئي' : 'Fungal | Bacterial | Viral | Pest / Insect | Nutrient Deficiency | Environmental Stress'}",
  "severity": "${isArabic ? 'خفيف | متوسط | شديد | حرج' : 'Low | Moderate | Severe | Critical'}",
  "confidenceScore": 92,
  "affectedParts": ["${isArabic ? 'الأوراق' : 'Leaves'}", "${isArabic ? 'السيقان' : 'Stems'}", "${isArabic ? 'الثمار' : 'Fruit'}"],
  "symptomsAnalysis": "${isArabic ? 'وصف إكلينيكي مفصل للأعراض الظاهرة على النبات' : 'Detailed clinical description of visible symptoms'}",
  "probableCauses": [
    "${isArabic ? 'السبب 1 (مثل زيادة الرطوبة والري بالرش)' : 'Cause 1'}",
    "${isArabic ? 'السبب 2 (مثل جراثيم كامنة في بقايا المحصول السابق)' : 'Cause 2'}"
  ],
  "immediateTreatment": [
    "${isArabic ? 'خطوة 1: إجراء عاجل فوري (عزل النبات، تقليم وحرق الأوراق المصابة)' : 'Step 1: Immediate triage action'}",
    "${isArabic ? 'خطوة 2: تعديل نظام الري والتهوية' : 'Step 2: Moisture and aeration adjustment'}",
    "${isArabic ? 'خطوة 3: الرش العلاجي الفوري' : 'Step 3: Immediate remedial spray'}"
  ],
  "organicRemedies": [
    "${isArabic ? 'علاج حيوي/عضوي (مثل زيت النيم 70% أو بكتيريا باسيلس سوبتيلس أو كبريت ميكروني)' : 'Bio-fungicide or botanical organic remedy'}",
    "${isArabic ? 'معاملة عضوية مكملة (بيكربونات البوتاسيوم، مستخلص ثوم)' : 'Cultural organic remedy'}"
  ],
  "chemicalControls": [
    "${isArabic ? 'المبيد الكيميائي الموصى به والمادة الفعالة (مثل مانكوزيب، كلوروثالونيل، أزوكسيستروبين، دايفينوكونازول)' : 'Targeted active chemical ingredient'}",
    "${isArabic ? 'معدل الرش وفترة الأمان قبل الحصاد PHI' : 'Proper application interval and pre-harvest interval'}"
  ],
  "preventionPlan": [
    "${isArabic ? 'دورة زراعية ثلاثية وتطهير التربة' : 'Long-term crop rotation and soil sanitation'}",
    "${isArabic ? 'استخدام شتلات وبذور معتمدة مقاومة للأمراض' : 'Resistant cultivar selection'}",
    "${isArabic ? 'الاعتماد على الري بالتنقيط وتجنب بلل المجموع الخضري' : 'Drip irrigation management'}"
  ],
  "sources": [
    "${isArabic ? 'دليل العيادة الإكلينيكية لأمراض النبات UC Davis IPM' : 'UC Davis IPM Plant Pathology Guide'}",
    "${isArabic ? 'مركز البحوث الزراعية وقاية النبات' : 'Cornell Plant Disease Clinic'}",
    "${isArabic ? 'البرنامج القومي لحماية المحاصيل USDA ARS' : 'USDA ARS Crop Protection Program'}"
  ]
}`;

  try {
    const { text } = await generateContentWithFallback(apiKey, [prompt, imagePart]);
    const diagnosis = JSON.parse(text);
    return {
      success: true,
      diagnosis
    };
  } catch (error) {
    console.error('Plant disease diagnosis error:', error.message);
    throw new Error('Failed to diagnose plant defect: ' + error.message);
  }
}
