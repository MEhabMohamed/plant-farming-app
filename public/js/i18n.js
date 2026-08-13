/**
 * Plant Farming App - Internationalization (i18n) Engine
 * Full Egyptian Arabic (العامية الزراعية المصرية الأصيلة) & English Dictionaries
 */

const translations = {
  en: {
    // Header & Navigation
    appTitle: 'Plant Farming',
    appTitleSpan: 'App',
    appSubtitle: 'AI Agronomy & Crop Health Doctor',
    tabFarming: 'Crop & Farming Hub',
    tabDoctor: 'Plant Doctor & Defect Lab',
    tabSession: 'Session Log',
    badgeDoctor: 'AI Doctor',
    themeToggleTitle: 'Toggle Dark / Light Theme',
    langToggleTitle: 'Switch to Egyptian Arabic',

    // Tab 1: Farming Hub
    heroBadge: 'Authoritative Agricultural Extension Engine (No Wikipedia)',
    heroTitle: 'Grow Smarter with Precision Farming Insights',
    heroDesc: 'Type any crop name or take a photo to generate comprehensive farming guides: agricultural season, planting depth, soil pH, irrigation schedule, NPK nutrition, and IPM pesticide controls.',
    searchPlaceholder: 'Enter plant or crop name (e.g. Tomato, Coffee, Wheat, Potato, Avocado)...',
    btnSearchPlant: 'Analyze Crop',
    searchDivider: 'OR SCAN VIA CAMERA / PHOTO',
    btnOpenCamera: 'Open Live Camera',
    btnUploadPhoto: 'Upload Plant Photo',
    popularCropsLabel: 'Popular Crops:',

    // Quick Crops
    chipTomato: '🍅 Tomato',
    chipWheat: '🌾 Wheat',
    chipPotato: '🥔 Potato',
    chipRice: '🍚 Rice',
    chipCorn: '🌽 Corn',
    chipCoffee: '☕ Coffee',
    chipPepper: '🫑 Bell Pepper',
    chipStrawberry: '🍓 Strawberry',

    // Loading & Guides
    loadingFarmingTitle: 'Synthesizing Agronomic Intelligence...',
    loadingFarmingSubtitle: 'Fetching USDA, UC Davis IPM & Extension research data',
    btnPrintGuide: 'Print Guide',

    // Pillars
    pillar1Title: 'Agricultural Season',
    pillar1Subtitle: 'Sowing, Temperature & Maturity',
    labelSowingWindow: 'Sowing Window:',
    labelSoilTemp: 'Soil Temperature:',
    labelDaysMaturity: 'Days to Maturity:',
    labelHarvestPeriod: 'Harvest Period:',
    labelGrowthCycle: 'Growth Cycle:',

    pillar2Title: 'Proper Planting Method',
    pillar2Subtitle: 'Depth, Spacing & Germination',
    labelPlantingDepth: 'Planting Depth:',
    labelPlantSpacing: 'Plant & Row Spacing:',
    labelGermination: 'Germination Time:',
    labelTransplanting: 'Transplanting:',
    labelSupport: 'Support & Trellis:',

    pillar3Title: 'Suitable Soil & Conditions',
    pillar3Subtitle: 'pH Chemistry, Texture & Drainage',
    optimalSoilPh: 'Optimal Soil pH',
    phAcidic: '4.0 Acidic',
    phNeutral: '7.0 Neutral',
    phAlkaline: '9.0 Alkaline',
    labelSoilTexture: 'Soil Texture:',
    labelOrganicMatter: 'Organic Matter:',
    labelDrainage: 'Drainage:',

    pillar4Title: 'Irrigation Method',
    pillar4Subtitle: 'Technique, Volume & Critical Stages',
    labelOptimalMethod: 'Optimal Method:',
    labelWaterSchedule: 'Water Schedule / Volume:',
    labelCriticalStages: 'Critical Moisture Stages:',
    labelDroughtTolerance: 'Drought Tolerance:',

    pillar5Title: 'Proper Fertilizers',
    pillar5Subtitle: 'NPK Regimen & Soil Amendments',
    labelNpkRatio: 'N-P-K Ratio Guide:',
    labelFertSchedule: 'Feeding Schedule:',
    labelFertOrganic: 'Organic Fertilizers:',
    labelFertMicro: 'Key Micronutrients:',

    pillar6Title: 'Pesticides & Integrated Pest Management (IPM)',
    pillar6Subtitle: 'Organic Biopesticides, Chemical Controls & Pests',
    headingMajorPests: 'Major Pest Threats',
    headingOrganicPesticides: 'Organic Bio-Pesticides',
    headingChemicalPesticides: 'Targeted Chemical Controls',
    labelIpmPractices: 'IPM Cultural Practices:',
    sourcesHeader: 'Authoritative Agronomic Reference Citations:',

    // Tab 2: Doctor Lab
    doctorBadge: 'Plant Pathology Clinical Diagnostic Lab',
    doctorTitle: 'Diagnose Plant Defects, Blights & Deficiencies',
    doctorDesc: 'Take or upload a close-up photo of any damaged leaf, stem, or fruit. Our AI plant doctor identifies the pathogen, rates severity, and prescribes exact step-by-step cures.',
    dropzoneText: 'Drag & drop defected plant image here, or',
    btnLiveCamera: 'Live Camera',
    btnBrowseFile: 'Browse File',
    dropzoneHint: 'Supports JPG, PNG, WEBP up to 10MB',
    symptomsLabel: 'Describe Observed Symptoms (Optional):',
    symptomsPlaceholder: 'e.g., Yellow rings on lower leaves, brown sunken spots on fruit, white powdery dust, wilting despite wet soil...',
    quickTagLabel: 'Quick Tag:',
    tagYellowing: '🍂 Yellowing leaves',
    tagSpots: '🟤 Brown spots',
    tagMildew: '⚪ Powdery mildew',
    tagCurling: '🔄 Curling leaves',
    tagWilting: '🥀 Sudden wilting',
    tagHoles: '🐛 Chewed leaves',
    btnDiagnose: 'Diagnose Defect & Prescribe Cure',
    loadingDoctorTitle: 'Analyzing Plant Pathology...',
    loadingDoctorSubtitle: 'Cross-referencing fungal, bacterial, viral, and deficiency clinical symptom patterns',

    // Doctor Results
    affectedOrgansLabel: 'Affected Plant Organs:',
    symptomsBreakdownTitle: 'Observed Symptom Breakdown',
    probableCausesTitle: 'Probable Trigger Causes',
    diagCardSymptomsTitle: 'Symptoms & Probable Causes',
    diagCardSymptomsSub: 'Clinical Findings & Environmental Triggers',
    diagCardTriageTitle: 'Immediate Triage Protocol',
    diagCardTriageSub: 'Urgent Steps to Stop Immediate Spread',
    diagCardOrganicTitle: 'Organic & Biological Remedies',
    diagCardOrganicSub: 'Safe, Eco-Friendly & Natural Treatments',
    diagCardChemicalTitle: 'Targeted Chemical Controls',
    diagCardChemicalSub: 'Commercial Fungicides / Pesticides & Intervals',
    diagCardPreventionTitle: 'Long-Term Field Prevention Plan',
    diagCardPreventionSub: 'Cultural Sanitation & Future Crop Protection',

    // Tab 3: Session
    sessionTitle: 'Active Session Field Log',
    sessionDesc: 'All crops analyzed and defects diagnosed during your current browser session',
    btnPrintSession: 'Print Session Report',
    btnClearSession: 'Clear Session',
    statCropsCount: 'Crops Researched',
    statDiagCount: 'Diagnoses Performed',
    statStorageType: 'In-Memory Store',
    sessionTimelineTitle: 'Session Timeline',
    sessionEmptyTitle: 'No crops or diagnoses in this session yet.',
    sessionEmptyDesc: 'Search for a crop in the Farming Hub or scan a diseased plant in the Doctor Lab to start building your log.',

    // Camera Modal
    cameraModalTitle: 'Live Plant Camera Scanner',
    cameraGuideText: 'Center plant leaf, stem, or crop in frame',
    btnRetake: 'Retake',
    btnAnalyzePhoto: 'Analyze Photo',

    // Toasts
    toastCropLoaded: 'Agronomic guide loaded for',
    toastIdentified: 'Identified:',
    toastDiagnosed: 'Diagnosis completed:',
    toastSessionCleared: 'Session cleared successfully',
    toastNetworkError: 'Could not connect to backend server. Make sure "npm start" is running on http://localhost:3000.',
    toastPhotoRequired: 'Please upload or capture a photo first.',

    // Settings Modal
    settingsModalTitle: 'Application Settings',
    settingsInfoText: 'Farming guides search utilizes a local database fallback if no Gemini key is active. Multimodal photo analysis and disease diagnostic doctor strictly require a valid Gemini API Key.',
    settingsApiKeyTitle: 'Gemini API Key',
    settingsApiKeyPlaceholder: 'Enter your custom API Key (AIzaSy...)',
    statusServerKeyDesc: 'Server Environment Key (Shared)',
    statusSessionKeyDesc: 'Custom Browser Session Key',
    statusModelLabel: 'Active Model:',
    btnSaveSettings: 'Save Settings',
    btnCancel: 'Cancel',
    toastSettingsSaved: 'API Key saved for active session.',
    toastSettingsFailed: 'Failed to update configuration.',
    toastSettingsCleared: 'Custom session API key cleared.'
  },

  ar: {
    // Header & Navigation
    appTitle: 'طبيب النبات والزراعة',
    appTitleSpan: 'الذكية',
    appSubtitle: 'المرجع الزراعي والعيادة الذكية لصحة المحاصيل',
    tabFarming: 'دليل المحاصيل والزراعة',
    tabDoctor: 'عيادة ودكتور النبات',
    tabSession: 'سجل المتابعة',
    badgeDoctor: 'دكتور ذكي',
    themeToggleTitle: 'تبديل المظهر النهاري / الليلي',
    langToggleTitle: 'Switch to English',

    // Tab 1: Farming Hub
    heroBadge: 'بيانات علمية معتمدة من مراكز البحوث الزراعية والإرشاد الزراعي (بدون ويكيبيديا)',
    heroTitle: 'ازرع صح مع أدق توصيات الزراعة وإدارة المحصول',
    heroDesc: 'اكتب اسم أي محصول أو صوره بالكاميرا عشان تعرف مواعيد العروات والزراعة، عمق البذور، حموضة التربة pH، برنامج الري، جدول تسميد NPK، وأفضل مبيدات المكافحة المتكاملة.',
    searchPlaceholder: 'اكتب اسم المحصول (مثال: طماطم، قمح، بطاطس، ذرة، رز، مانجو، بن، خيار)...',
    btnSearchPlant: 'تحليل المحصول',
    searchDivider: 'أو افحص بالكاميرا لايف / ارفع صورة',
    btnOpenCamera: 'افتح الكاميرا لايف',
    btnUploadPhoto: 'ارفع صورة المحصول',
    popularCropsLabel: 'محاصيل شائعة:',

    // Quick Crops
    chipTomato: '🍅 طماطم',
    chipWheat: '🌾 قمح',
    chipPotato: '🥔 بطاطس',
    chipRice: '🍚 رز',
    chipCorn: '🌽 ذرة',
    chipCoffee: '☕ بن عربي',
    chipPepper: '🫑 فلفل رومي',
    chipStrawberry: '🍓 فراولة',

    // Loading & Guides
    loadingFarmingTitle: 'جاري استخراج وتجميع الدليل الزراعي الشامل...',
    loadingFarmingSubtitle: 'استرجاع التوصيات المعتمدة من مراكز البحوث الزراعية والإرشاد الزراعي',
    btnPrintGuide: 'طباعة الدليل',

    // Pillars
    pillar1Title: 'الموسم والعروة الزراعية',
    pillar1Subtitle: 'مواعيد الزراعة، حرارة التربة وميعاد الحصاد',
    labelSowingWindow: 'ميعاد الزراعة والعروة:',
    labelSoilTemp: 'درجة حرارة التربة المناسبة:',
    labelDaysMaturity: 'مدة النضج (عمر المحصول):',
    labelHarvestPeriod: 'موسم وفترة الحصاد:',
    labelGrowthCycle: 'دورة نمو النبات:',

    pillar2Title: 'طريقة الزراعة الصحيحة',
    pillar2Subtitle: 'عمق الغرس، مسافات الشتل والإنبات',
    labelPlantingDepth: 'عمق وضع البذور/الشتلات:',
    labelPlantSpacing: 'مسافات الشتل والخطوط:',
    labelGermination: 'مدة الإنبات:',
    labelTransplanting: 'معاملات الشتل والتقسية:',
    labelSupport: 'التدعيم والتربيط (الخدمة):',

    pillar3Title: 'التربة المناسبة ودرجة الحموضة',
    pillar3Subtitle: 'حموضة التربة pH، القوام والتهوية',
    optimalSoilPh: 'درجة حموضة التربة المثالية (pH)',
    phAcidic: '4.0 حامضية',
    phNeutral: '7.0 متعادلة',
    phAlkaline: '9.0 قلوية',
    labelSoilTexture: 'نوع وقوام التربة:',
    labelOrganicMatter: 'نسبة المادة العضوية (الكمبوست):',
    labelDrainage: 'جودة الصرف والتهوية:',

    pillar4Title: 'نظام وجدول الري',
    pillar4Subtitle: 'طريقة الري، الكمية والفترات الحرجة',
    labelOptimalMethod: 'طريقة الري المثالية:',
    labelWaterSchedule: 'مواعيد وكميات المياه:',
    labelCriticalStages: 'الفترات الحرجة لاحتياج المياه:',
    labelDroughtTolerance: 'مدى تحمل الجفاف والعطش:',

    pillar5Title: 'التسميد المتوازن وعناصر NPK',
    pillar5Subtitle: 'نسب النيتروجين والفوسفور والبوتاسيوم ومواعيد الإضافة',
    labelNpkRatio: 'نسبة N-P-K الموصى بها:',
    labelFertSchedule: 'جدول ومواعيد دفعات التسميد:',
    labelFertOrganic: 'الأسمدة العضوية والبلدية:',
    labelFertMicro: 'العناصر الصغرى الضرورية:',

    pillar6Title: 'المكافحة المتكاملة للآفات والمبيدات (IPM)',
    pillar6Subtitle: 'المكافحة الحيوية والعضوية، المبيدات الكيميائية والآفات الشائعة',
    headingMajorPests: 'أهم الآفات والأمراض المنتشرة',
    headingOrganicPesticides: 'مبيدات وعلاجات حيوية وعضوية',
    headingChemicalPesticides: 'مبيدات كيميائية علاجية موجهة',
    labelIpmPractices: 'الممارسات الوقائية والزراعية:',
    sourcesHeader: 'المراجع والمصادر الزراعية المعتمدة:',

    // Tab 2: Doctor Lab
    doctorBadge: 'مختبر الفحص الإكلينيكي لأمراض النبات',
    doctorTitle: 'تشخيص الآفات، الأعفان، وأعراض نقص العناصر',
    doctorDesc: 'صور أو ارفع صورة واضحة للورقة أو الساق أو الثمرة المصابة، والذكاء الاصطناعي هيشخص المسبب المرضي ودرجة خطورته وهيوصفلك خطوات العلاج والمكافحة خطوة بخطوة.',
    dropzoneText: 'اسحب صورة النبات المصاب هنا، أو',
    btnLiveCamera: 'الكاميرا لايف',
    btnBrowseFile: 'اختر صورة من الجهاز',
    dropzoneHint: 'يدعم صور JPG و PNG و WEBP حتى 10 ميجابايت',
    symptomsLabel: 'وصف الأعراض الملاحظة (اختياري):',
    symptomsPlaceholder: 'مثال: بقع بنية محروقة على الأوراق السفلية، عفن طرفي، بودرة بيضاء زي الدقيق، ذبول مفاجئ مع رطوبة الأرض...',
    quickTagLabel: 'أعراض سريعة:',
    tagYellowing: '🍂 اصفرار الأوراق',
    tagSpots: '🟤 بقع سوداء وبنية',
    tagMildew: '⚪ بياض دقيقي',
    tagCurling: '🔄 تجعد والتواء الأوراق',
    tagWilting: '🥀 ذبول وعفن الساق',
    tagHoles: '🐛 أوراق متآكلة ومثقوبة',
    btnDiagnose: 'فحص الإصابة ووصف خطة العلاج',
    loadingDoctorTitle: 'جاري فحص باثولوجيا النبات وتحليل الصورة...',
    loadingDoctorSubtitle: 'مطابقة أنماط الإصابات الفطرية والبكتيرية والفيروسية ونقص التغذية',

    // Doctor Results
    affectedOrgansLabel: 'الأجزاء النباتية المصابة:',
    symptomsBreakdownTitle: 'تحليل الأعراض الملاحظة',
    probableCausesTitle: 'الأسباب والعوامل المحتملة للإصابة',
    diagCardSymptomsTitle: 'الأعراض السريرية والأسباب المحتملة',
    diagCardSymptomsSub: 'النتائج الإكلينيكية والمحفزات البيئية',
    diagCardTriageTitle: 'خطة الإسعاف الأولي الفوري',
    diagCardTriageSub: 'خطوات عاجلة لوقف انتشار العدوى في الحقل فوراً',
    diagCardOrganicTitle: 'العلاجات الحيوية والعضوية',
    diagCardOrganicSub: 'مركبات آمنة، صديقة للبيئة وحيوية',
    diagCardChemicalTitle: 'المبيدات الكيميائية الموصى بها',
    diagCardChemicalSub: 'المبيدات الفطرية/الحشرية التجارية، فترات الأمان والمواد الفعالة',
    diagCardPreventionTitle: 'خطة الوقاية والحماية طويلة المدى',
    diagCardPreventionSub: 'النظافة الحقلية والإدارة الزراعية لمنع تكرار الإصابة',

    // Tab 3: Session
    sessionTitle: 'سجل المتابعة الميدانية للعمليات',
    sessionDesc: 'جميع المحاصيل والتشخيصات التي قمت ببحثها وفحصها خلال جلستك الحالية',
    btnPrintSession: 'طباعة تقرير الجلسة',
    btnClearSession: 'مسح سجل الجلسة',
    statCropsCount: 'محاصيل تم بحثها',
    statDiagCount: 'فحوصات تم تشخيصها',
    statStorageType: 'ذاكرة الجلسة النشطة',
    sessionTimelineTitle: 'الجدول الزمني للعمليات',
    sessionEmptyTitle: 'لا توجد سجلات في الجلسة الحالية حتى الآن.',
    sessionEmptyDesc: 'ابحث عن محصول في دليل الزراعة أو افحص نباتاً مصاباً في عيادة النبات للبدء في بناء سجلك الميداني.',

    // Camera Modal
    cameraModalTitle: 'كاميرا فحص النباتات لايف',
    cameraGuideText: 'اضبط الكاميرا على الورقة أو الساق أو الجزء المصاب داخل الإطار',
    btnRetake: 'إعادة التقاط',
    btnAnalyzePhoto: 'تحليل وفحص الصورة',

    // Toasts
    toastCropLoaded: 'تم تحميل الدليل الزراعي لمحصول',
    toastIdentified: 'تم التعرف على النبات بنجاح:',
    toastDiagnosed: 'تم تشخيص الإصابة بنجاح:',
    toastSessionCleared: 'تم مسح السجل بنجاح',
    toastNetworkError: 'تعذر الاتصال بالخادم. يرجى التأكد من تشغيل السيرفر "npm start" على http://localhost:3000.',
    toastPhotoRequired: 'يرجى التقاط أو اختيار صورة النبات أولاً.',

    // Settings Modal
    settingsModalTitle: 'إعدادات التطبيق',
    settingsInfoText: 'يعتمد دليل الزراعة على قاعدة بيانات محلية في حال عدم تفعيل مفتاح Gemini. أما الفحص بالصور وتشخيص أمراض النباتات فيتطلب وجود مفتاح Gemini API نشط.',
    settingsApiKeyTitle: 'مفتاح Gemini API مخصص',
    settingsApiKeyPlaceholder: 'أدخل مفتاح الـ API الخاص بك (AIzaSy...)',
    statusServerKeyDesc: 'مفتاح خادم النظام (مشترك)',
    statusSessionKeyDesc: 'مفتاح الجلسة للمتصفح الحالي',
    statusModelLabel: 'النموذج النشط:',
    btnSaveSettings: 'حفظ الإعدادات',
    btnCancel: 'إلغاء',
    toastSettingsSaved: 'تم حفظ مفتاح API للجلسة الحالية.',
    toastSettingsFailed: 'فشل تحديث الإعدادات.',
    toastSettingsCleared: 'تم مسح مفتاح الجلسة المخصص.'
  }
};

// Expose to window for global browser compatibility
if (typeof window !== 'undefined') {
  window.translations = translations;
}

// Support CommonJS export if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations };
}
