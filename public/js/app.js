/**
 * Plant Farming App - Frontend Application Logic
 * Supports Dark/Light Theme with Auto-Detect & Persistence
 * Full Egyptian Arabic (العامية الزراعية المصرية) & English i18n
 */

function initApp() {
  const appTranslations = window.translations || {};

  // App State with Theme & Language Persistence
  const savedLang = localStorage.getItem('plant_farming_lang') || 'en';
  const savedTheme = localStorage.getItem('plant_farming_theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  const state = {
    activeTab: 'tab-farming',
    cameraStream: null,
    cameraFacingMode: 'environment',
    cameraTargetContext: 'farming', // 'farming' | 'doctor'
    capturedImageBase64: null,
    doctorSelectedImageBase64: null,
    sessionData: { plants: [], diagnoses: [] },
    lang: savedLang, // 'en' | 'ar'
    theme: savedTheme // 'dark' | 'light'
  };

  // DOM Elements - Theme, Language & Settings Toggles
  const btnLangToggle = document.getElementById('btn-lang-toggle');
  const langIndicator = document.getElementById('lang-indicator');
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const btnSettingsToggle = document.getElementById('btn-settings-toggle');

  // DOM Elements - Settings Modal
  const settingsModal = document.getElementById('settings-modal');
  const btnCloseSettings = document.getElementById('btn-close-settings');
  const btnCancelSettings = document.getElementById('btn-cancel-settings');
  const btnSaveSettings = document.getElementById('btn-save-settings');
  const inputApiKey = document.getElementById('input-api-key');
  const btnToggleApiKeyVisibility = document.getElementById('btn-toggle-api-key-visibility');
  const apiKeyVisibilityIcon = document.getElementById('api-key-visibility-icon');
  const settingsStatusBox = document.getElementById('settings-status-box');
  const iconServerKey = document.getElementById('icon-server-key');
  const iconSessionKey = document.getElementById('icon-session-key');
  const settingsActiveModelName = document.getElementById('settings-active-model-name');

  // DOM Elements - Navigation
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const sessionCountBadge = document.getElementById('session-count-badge');

  // DOM Elements - Farming Hub
  const formPlantSearch = document.getElementById('form-plant-search');
  const inputPlantName = document.getElementById('input-plant-name');
  const btnOpenCamFarming = document.getElementById('btn-open-camera-farming');
  const fileUploadFarming = document.getElementById('file-upload-farming');
  const quickChips = document.querySelectorAll('.chip-item');
  const farmingLoading = document.getElementById('farming-loading');
  const farmingResults = document.getElementById('farming-results');
  const btnPrintGuide = document.getElementById('btn-print-guide');

  // DOM Elements - Farming Results Fields
  const cropFamily = document.getElementById('crop-family');
  const cropClimate = document.getElementById('crop-climate');
  const cropCommonName = document.getElementById('crop-common-name');
  const cropScientificName = document.getElementById('crop-scientific-name');
  const agriSowingWindow = document.getElementById('agri-sowing-window');
  const agriSoilTemp = document.getElementById('agri-soil-temp');
  const agriDaysMaturity = document.getElementById('agri-days-maturity');
  const agriHarvestPeriod = document.getElementById('agri-harvest-period');
  const agriGrowthCycle = document.getElementById('agri-growth-cycle');
  const agriDepth = document.getElementById('agri-depth');
  const agriSpacing = document.getElementById('agri-spacing');
  const agriGermination = document.getElementById('agri-germination');
  const agriTransplanting = document.getElementById('agri-transplanting');
  const agriSupport = document.getElementById('agri-support');
  const agriPhBadge = document.getElementById('agri-ph-badge');
  const phIndicator = document.getElementById('ph-indicator');
  const agriTexture = document.getElementById('agri-texture');
  const agriOrganicMatter = document.getElementById('agri-organic-matter');
  const agriDrainage = document.getElementById('agri-drainage');
  const agriIrrigationMethod = document.getElementById('agri-irrigation-method');
  const agriIrrigationFreq = document.getElementById('agri-irrigation-frequency');
  const agriIrrigationCrit = document.getElementById('agri-irrigation-critical');
  const agriIrrigationDrought = document.getElementById('agri-irrigation-drought');
  const agriNpkRatio = document.getElementById('agri-npk-ratio');
  const agriFertSchedule = document.getElementById('agri-fert-schedule');
  const agriFertOrganic = document.getElementById('agri-fert-organic');
  const agriFertMicro = document.getElementById('agri-fert-micro');
  const agriPestsList = document.getElementById('agri-pests-list');
  const agriOrganicPesticidesList = document.getElementById('agri-organic-pesticides-list');
  const agriChemicalPesticidesList = document.getElementById('agri-chemical-pesticides-list');
  const agriIpmPractices = document.getElementById('agri-ipm-practices');
  const agriSourcesTags = document.getElementById('agri-sources-tags');

  // DOM Elements - Plant Doctor & Defect Lab
  const doctorDropzone = document.getElementById('doctor-dropzone');
  const doctorDropzoneEmpty = document.getElementById('doctor-dropzone-empty');
  const doctorPreviewContainer = document.getElementById('doctor-preview-container');
  const doctorPreviewImage = document.getElementById('doctor-preview-image');
  const btnRemoveDoctorImage = document.getElementById('btn-remove-doctor-image');
  const fileUploadDoctor = document.getElementById('file-upload-doctor');
  const btnOpenCamDoctor = document.getElementById('btn-open-camera-doctor');
  const doctorSymptomsInput = document.getElementById('doctor-symptoms-input');
  const symTags = document.querySelectorAll('.sym-tag');
  const btnDiagnoseSubmit = document.getElementById('btn-diagnose-submit');
  const doctorLoading = document.getElementById('doctor-loading');
  const doctorResults = document.getElementById('doctor-results');

  // DOM Elements - Doctor Results Fields
  const diagSeverity = document.getElementById('diag-severity');
  const diagConfidence = document.getElementById('diag-confidence');
  const diagDefectName = document.getElementById('diag-defect-name');
  const diagHostPlant = document.getElementById('diag-host-plant');
  const diagPathogenType = document.getElementById('diag-pathogen-type');
  const diagAffectedParts = document.getElementById('diag-affected-parts');
  const diagSymptomsAnalysis = document.getElementById('diag-symptoms-analysis');
  const diagCausesList = document.getElementById('diag-causes-list');
  const diagTriageSteps = document.getElementById('diag-triage-steps');
  const diagOrganicList = document.getElementById('diag-organic-list');
  const diagChemicalList = document.getElementById('diag-chemical-list');
  const diagPreventionGrid = document.getElementById('diag-prevention-grid');

  // DOM Elements - Session Tab
  const statPlantsCount = document.getElementById('stat-plants-count');
  const statDiagCount = document.getElementById('stat-diag-count');
  const sessionEmptyState = document.getElementById('session-empty-state');
  const sessionTimeline = document.getElementById('session-timeline');
  const btnPrintSession = document.getElementById('btn-print-session');
  const btnClearSession = document.getElementById('btn-clear-session');

  // DOM Elements - Camera Modal
  const cameraModal = document.getElementById('camera-modal');
  const cameraVideo = document.getElementById('camera-video');
  const cameraCanvas = document.getElementById('camera-canvas');
  const snapshotPreview = document.getElementById('snapshot-preview');
  const snapshotImg = document.getElementById('snapshot-img');
  const btnCloseCamera = document.getElementById('btn-close-camera');
  const btnCancelCamera = document.getElementById('btn-cancel-camera');
  const btnSwitchCamera = document.getElementById('btn-switch-camera');
  const btnTakeSnapshot = document.getElementById('btn-take-snapshot');
  const btnRetakePhoto = document.getElementById('btn-retake-photo');
  const btnUsePhoto = document.getElementById('btn-use-photo');
  const cameraControlsLive = document.getElementById('camera-controls-live');
  const cameraControlsReview = document.getElementById('camera-controls-review');

  // API Base Configuration
  const API_BASE = (window.location.protocol === 'file:' || !window.location.origin || window.location.origin === 'null')
    ? 'http://localhost:3000'
    : '';

  // =========================================================================
  // THEME MANAGEMENT (Dark / Light with System Preference & Persistence)
  // =========================================================================
  function applyTheme(themeName) {
    state.theme = themeName;
    const isLight = themeName === 'light';
    document.body.classList.toggle('theme-light', isLight);
    document.body.classList.toggle('theme-botanical', !isLight);

    if (themeIcon) {
      themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', isLight ? '#f0f7f3' : '#070d0a');
    }

    localStorage.setItem('plant_farming_theme', themeName);
  }

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
    });
  }

  // Listen to OS theme changes if user hasn't explicitly locked one
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      if (!localStorage.getItem('plant_farming_theme')) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  // =========================================================================
  // LANGUAGE & I18N MANAGEMENT (English / Egyptian Arabic)
  // =========================================================================
  function applyLanguage(lang) {
    state.lang = lang;
    const dict = appTranslations[lang] || appTranslations.en || {};
    const isArabic = lang === 'ar';

    // Document HTML level attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    // Update Language Toggle Button Label
    if (langIndicator) {
      langIndicator.textContent = isArabic ? '🇺🇸 English' : '🇪🇬 عربي';
    }
    if (btnLangToggle) {
      btnLangToggle.title = isArabic ? 'Switch to English' : 'تغيير إلى العامية المصرية';
    }

    // Translate all [data-i18n] text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Translate all [data-i18n-ph] input placeholder elements
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Quick Chips Update
    quickChips.forEach(chip => {
      const chipKey = chip.getAttribute('data-i18n');
      if (chipKey && dict[chipKey]) {
        chip.textContent = dict[chipKey];
      }
    });

    // Symptom Tags Update
    symTags.forEach(tag => {
      const tagKey = tag.getAttribute('data-i18n');
      if (tagKey && dict[tagKey]) {
        tag.textContent = dict[tagKey];
      }
    });

    localStorage.setItem('plant_farming_lang', lang);
  }

  if (btnLangToggle) {
    btnLangToggle.addEventListener('click', () => {
      const nextLang = state.lang === 'ar' ? 'en' : 'ar';
      applyLanguage(nextLang);
      showToast(nextLang === 'ar' ? 'تم تحويل التطبيق إلى اللغة العربية المصرية' : 'Switched to English', 'success');
    });
  }

  // Helper Translation Getter
  function t(key, fallback = '') {
    const dict = appTranslations[state.lang] || appTranslations.en || {};
    return dict[key] || fallback || key;
  }

  // Toast Notification Helper
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-circle-exclamation';
    if (type === 'warning') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = state.lang === 'ar' ? 'translateX(-100%)' : 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Tab Navigation Handler
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  function switchTab(targetId) {
    navTabs.forEach(t => {
      const isActive = t.getAttribute('data-tab') === targetId;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === targetId);
    });

    state.activeTab = targetId;

    if (targetId === 'tab-session') {
      fetchSessionHistory();
    }
  }

  // Quick Chips Handler
  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cropName = (state.lang === 'ar' && chip.getAttribute('data-crop-ar'))
        ? chip.getAttribute('data-crop-ar')
        : chip.getAttribute('data-crop');
      if (inputPlantName) {
        inputPlantName.value = cropName;
      }
      searchPlant(cropName);
    });
  });

  // Search Form Submit
  if (formPlantSearch) {
    formPlantSearch.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = inputPlantName ? inputPlantName.value.trim() : '';
      if (query) {
        searchPlant(query);
      }
    });
  }

  // 1. Search Plant API
  async function searchPlant(plantName) {
    if (farmingLoading) farmingLoading.classList.remove('hidden');
    if (farmingResults) farmingResults.classList.add('hidden');

    try {
      const response = await fetch(`${API_BASE}/api/plant/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          plantName,
          lang: state.lang 
        })
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to search plant data.');
      }

      renderFarmingGuide(result.data);
      showToast(`${t('toastCropLoaded')} ${result.data.commonName}`, 'success');
      fetchSessionHistory(); // Update counter
    } catch (error) {
      const errorMsg = error.message === 'Failed to fetch' 
        ? t('toastNetworkError')
        : error.message;
      showToast(errorMsg, 'error');
    } finally {
      if (farmingLoading) farmingLoading.classList.add('hidden');
    }
  }

  // Render Farming Guide Data to DOM
  function renderFarmingGuide(data) {
    if (!data) return;
    if (cropCommonName) cropCommonName.textContent = data.commonName || 'Plant';
    if (cropScientificName) cropScientificName.textContent = data.scientificName || '';
    if (cropFamily) cropFamily.textContent = data.family || (state.lang === 'ar' ? 'نباتي' : 'Botanical');
    if (cropClimate) cropClimate.textContent = data.climateCategory || (state.lang === 'ar' ? 'زراعي' : 'Agricultural');

    // Season
    if (agriSowingWindow) agriSowingWindow.textContent = data.season?.sowingWindow || '-';
    if (agriSoilTemp) agriSoilTemp.textContent = data.season?.soilTemperature || '-';
    if (agriDaysMaturity) agriDaysMaturity.textContent = data.season?.daysToMaturity || '-';
    if (agriHarvestPeriod) agriHarvestPeriod.textContent = data.season?.harvestPeriod || '-';
    if (agriGrowthCycle) agriGrowthCycle.textContent = data.season?.growthCycle || '-';

    // Planting
    if (agriDepth) agriDepth.textContent = data.plantingMethod?.depth || '-';
    if (agriSpacing) agriSpacing.textContent = data.plantingMethod?.spacing || '-';
    if (agriGermination) agriGermination.textContent = data.plantingMethod?.germinationDays || '-';
    if (agriTransplanting) agriTransplanting.textContent = data.plantingMethod?.transplanting || '-';
    if (agriSupport) agriSupport.textContent = data.plantingMethod?.support || '-';

    // Soil & pH Gauge
    const idealPH = data.soil?.idealPH || '6.0 - 7.0';
    if (agriPhBadge) agriPhBadge.textContent = idealPH;
    if (agriTexture) agriTexture.textContent = data.soil?.texture || '-';
    if (agriOrganicMatter) agriOrganicMatter.textContent = data.soil?.organicMatter || '-';
    if (agriDrainage) agriDrainage.textContent = data.soil?.drainage || '-';

    // Calculate pH indicator percentage on 4.0 - 9.0 scale
    let minPh = parseFloat(data.soil?.minPH) || 6.0;
    let maxPh = parseFloat(data.soil?.maxPH) || 7.0;
    const avgPh = (minPh + maxPh) / 2;
    const phPercent = Math.min(Math.max(((avgPh - 4.0) / (9.0 - 4.0)) * 100, 5), 95);
    if (phIndicator) phIndicator.style.left = `${phPercent}%`;

    // Irrigation
    if (agriIrrigationMethod) agriIrrigationMethod.textContent = data.irrigation?.method || '-';
    if (agriIrrigationFreq) agriIrrigationFreq.textContent = data.irrigation?.frequency || '-';
    if (agriIrrigationCrit) agriIrrigationCrit.textContent = data.irrigation?.criticalStages || '-';
    if (agriIrrigationDrought) agriIrrigationDrought.textContent = data.irrigation?.droughtTolerance || '-';

    // Fertilizers
    if (agriNpkRatio) agriNpkRatio.textContent = data.fertilizers?.npkRatio || '-';
    if (agriFertSchedule) agriFertSchedule.textContent = data.fertilizers?.applicationSchedule || '-';
    if (agriFertOrganic) agriFertOrganic.textContent = data.fertilizers?.organicOptions || '-';
    if (agriFertMicro) agriFertMicro.textContent = data.fertilizers?.micronutrients || '-';

    // IPM & Pesticides
    if (agriPestsList) renderList(agriPestsList, data.pesticidesAndIPM?.commonPests || []);
    if (agriOrganicPesticidesList) renderList(agriOrganicPesticidesList, data.pesticidesAndIPM?.organicPesticides || []);
    if (agriChemicalPesticidesList) renderList(agriChemicalPesticidesList, data.pesticidesAndIPM?.chemicalPesticides || []);
    if (agriIpmPractices) agriIpmPractices.textContent = data.pesticidesAndIPM?.ipmPractices || '-';

    // Authoritative Sources
    if (agriSourcesTags) {
      agriSourcesTags.innerHTML = '';
      const sources = data.sources || (state.lang === 'ar' 
        ? ['مركز البحوث الزراعية والإرشاد الزراعي', 'بروتوكولات إدارة الآفات المتكاملة UC Davis IPM', 'دليل المحاصيل والإنتاج النباتي FAO EcoCrop']
        : ['USDA Agricultural Research Service', 'UC Davis IPM', 'Cornell Extension']);
      sources.forEach(src => {
        const tag = document.createElement('span');
        tag.className = 'source-tag';
        tag.innerHTML = `<i class="fa-solid fa-check-double"></i> ${src}`;
        agriSourcesTags.appendChild(tag);
      });
    }

    if (farmingResults) {
      farmingResults.classList.remove('hidden');
      farmingResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function renderList(targetElement, items) {
    if (!targetElement) return;
    targetElement.innerHTML = '';
    if (!items || items.length === 0) {
      targetElement.innerHTML = `<li>${state.lang === 'ar' ? 'لا توجد تسجيلات' : 'None recorded'}</li>`;
      return;
    }
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      targetElement.appendChild(li);
    });
  }

  // 2. Identify Plant from Image File Upload (Farming Tab)
  if (fileUploadFarming) {
    fileUploadFarming.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        identifyPlantFile(file);
      }
    });
  }

  async function identifyPlantFile(file) {
    if (farmingLoading) farmingLoading.classList.remove('hidden');
    if (farmingResults) farmingResults.classList.add('hidden');

    const formData = new FormData();
    formData.append('image', file);
    formData.append('lang', state.lang);

    try {
      const response = await fetch(`${API_BASE}/api/plant/identify`, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || result.error || 'Plant identification failed.');
      }

      renderFarmingGuide(result.data.agriProfile);
      showToast(`${t('toastIdentified')} ${result.data.identification.identifiedName} (${result.data.identification.confidence}% ${state.lang === 'ar' ? 'نسبة تأكد' : 'confidence'})`, 'success');
      fetchSessionHistory();
    } catch (error) {
      const errorMsg = error.message === 'Failed to fetch' 
        ? t('toastNetworkError')
        : error.message;
      showToast(errorMsg, 'error');
    } finally {
      if (farmingLoading) farmingLoading.classList.add('hidden');
    }
  }

  // 3. Plant Doctor - Dropzone & File Handling
  if (doctorDropzone) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      doctorDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      doctorDropzone.addEventListener(eventName, () => doctorDropzone.classList.add('dragover'));
    });

    ['dragleave', 'drop'].forEach(eventName => {
      doctorDropzone.addEventListener(eventName, () => doctorDropzone.classList.remove('dragover'));
    });

    doctorDropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      if (dt.files && dt.files[0]) {
        handleDoctorImageSelected(dt.files[0]);
      }
    });
  }

  if (fileUploadDoctor) {
    fileUploadDoctor.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleDoctorImageSelected(e.target.files[0]);
      }
    });
  }

  function handleDoctorImageSelected(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setDoctorImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  function setDoctorImagePreview(base64Data) {
    state.doctorSelectedImageBase64 = base64Data;
    if (doctorPreviewImage) doctorPreviewImage.src = base64Data;
    if (doctorDropzoneEmpty) doctorDropzoneEmpty.classList.add('hidden');
    if (doctorPreviewContainer) doctorPreviewContainer.classList.remove('hidden');
    if (btnDiagnoseSubmit) btnDiagnoseSubmit.removeAttribute('disabled');
  }

  if (btnRemoveDoctorImage) {
    btnRemoveDoctorImage.addEventListener('click', (e) => {
      e.stopPropagation();
      state.doctorSelectedImageBase64 = null;
      if (doctorPreviewImage) doctorPreviewImage.src = '';
      if (doctorPreviewContainer) doctorPreviewContainer.classList.add('hidden');
      if (doctorDropzoneEmpty) doctorDropzoneEmpty.classList.remove('hidden');
      if (btnDiagnoseSubmit) btnDiagnoseSubmit.setAttribute('disabled', 'true');
      if (fileUploadDoctor) fileUploadDoctor.value = '';
    });
  }

  // Symptom Quick Tags
  symTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const tagText = (state.lang === 'ar' && tag.getAttribute('data-tag-ar'))
        ? tag.getAttribute('data-tag-ar')
        : tag.getAttribute('data-tag');
      if (doctorSymptomsInput) {
        const current = doctorSymptomsInput.value.trim();
        if (!current.includes(tagText)) {
          doctorSymptomsInput.value = current ? `${current}، ${tagText}` : tagText;
          tag.classList.add('active');
        }
      }
    });
  });

  // 4. Plant Doctor - Submit Diagnosis
  if (btnDiagnoseSubmit) {
    btnDiagnoseSubmit.addEventListener('click', async () => {
      if (!state.doctorSelectedImageBase64) {
        showToast(t('toastPhotoRequired'), 'warning');
        return;
      }

      if (doctorLoading) doctorLoading.classList.remove('hidden');
      if (doctorResults) doctorResults.classList.add('hidden');

      const symptoms = doctorSymptomsInput ? doctorSymptomsInput.value.trim() : '';

      try {
        const response = await fetch(`${API_BASE}/api/plant/diagnose`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            imageBase64: state.doctorSelectedImageBase64,
            symptoms,
            lang: state.lang
          })
        });

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message || result.error || 'Diagnosis failed.');
        }

        renderDiagnosisReport(result.data);
        showToast(`${t('toastDiagnosed')} ${result.data.defectName}`, 'success');
        fetchSessionHistory();
      } catch (error) {
        const errorMsg = error.message === 'Failed to fetch' 
          ? t('toastNetworkError')
          : error.message;
        showToast(errorMsg, 'error');
      } finally {
        if (doctorLoading) doctorLoading.classList.add('hidden');
      }
    });
  }

  // Render Diagnosis Report
  function renderDiagnosisReport(data) {
    if (!data) return;
    if (diagDefectName) diagDefectName.textContent = data.defectName || (state.lang === 'ar' ? 'تشخيص المرض' : 'Diagnosed Defect');
    if (diagHostPlant) diagHostPlant.textContent = `${state.lang === 'ar' ? 'المحصول العائل:' : 'Host Crop:'} ${data.plantSuspected || (state.lang === 'ar' ? 'نبات تم فحصه' : 'Identified Plant')}`;
    if (diagPathogenType) diagPathogenType.innerHTML = `<i class="fa-solid fa-virus"></i> ${data.pathogenType || (state.lang === 'ar' ? 'مسبب مرضي' : 'Pathogen')}`;

    // Severity & Confidence
    const severity = data.severity || 'Moderate';
    if (diagSeverity) {
      diagSeverity.textContent = state.lang === 'ar' ? `درجة الخطورة: ${severity}` : `${severity} Severity`;
      diagSeverity.className = 'severity-pill';
      const sevLower = severity.toLowerCase();
      if (sevLower.includes('crit') || sevLower.includes('sev') || sevLower.includes('شديد') || sevLower.includes('حرج')) {
        // default ruby style
      } else if (sevLower.includes('mod') || sevLower.includes('متوسط')) {
        diagSeverity.classList.add('moderate');
      } else {
        diagSeverity.classList.add('low');
      }
    }

    if (diagConfidence) diagConfidence.textContent = `${state.lang === 'ar' ? 'نسبة التأكد:' : 'Confidence:'} ${data.confidenceScore || 90}%`;

    // Affected parts
    if (diagAffectedParts) {
      diagAffectedParts.innerHTML = '';
      const parts = data.affectedParts || (state.lang === 'ar' ? ['المجموع الخضري', 'السيقان'] : ['Foliage', 'Stems']);
      parts.forEach(part => {
        const span = document.createElement('span');
        span.className = 'affected-tag';
        span.textContent = part;
        diagAffectedParts.appendChild(span);
      });
    }

    // Symptoms & Causes
    if (diagSymptomsAnalysis) diagSymptomsAnalysis.textContent = data.symptomsAnalysis || '-';
    if (diagCausesList) renderList(diagCausesList, data.probableCauses || []);

    // Triage steps
    if (diagTriageSteps) {
      diagTriageSteps.innerHTML = '';
      const triage = data.immediateTreatment || [];
      triage.forEach((step, idx) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'triage-step';
        stepDiv.innerHTML = `
          <div class="triage-num">${idx + 1}</div>
          <div class="triage-text">${step}</div>
        `;
        diagTriageSteps.appendChild(stepDiv);
      });
    }

    // Organic remedies
    if (diagOrganicList) {
      diagOrganicList.innerHTML = '';
      const organic = data.organicRemedies || [];
      organic.forEach(item => {
        const li = document.createElement('li');
        li.className = 'remedy-item';
        li.innerHTML = `
          <i class="fa-solid fa-leaf remedy-icon"></i>
          <div class="remedy-desc">${item}</div>
        `;
        diagOrganicList.appendChild(li);
      });
    }

    // Chemical controls
    if (diagChemicalList) {
      diagChemicalList.innerHTML = '';
      const chemicals = data.chemicalControls || [];
      chemicals.forEach(item => {
        const li = document.createElement('li');
        li.className = 'remedy-item';
        li.innerHTML = `
          <i class="fa-solid fa-spray-can-sparkles remedy-icon"></i>
          <div class="remedy-desc">${item}</div>
        `;
        diagChemicalList.appendChild(li);
      });
    }

    // Prevention plan
    if (diagPreventionGrid) {
      diagPreventionGrid.innerHTML = '';
      const prevItems = data.preventionPlan || [];
      prevItems.forEach(item => {
        const pDiv = document.createElement('div');
        pDiv.className = 'prevention-item';
        pDiv.innerHTML = `<p><i class="fa-solid fa-circle-check text-green"></i> ${item}</p>`;
        diagPreventionGrid.appendChild(pDiv);
      });
    }

    if (doctorResults) {
      doctorResults.classList.remove('hidden');
      doctorResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // =========================================================================
  // 5. LIVE CAMERA INTEGRATION
  // =========================================================================
  if (btnOpenCamFarming) btnOpenCamFarming.addEventListener('click', () => openCameraModal('farming'));
  if (btnOpenCamDoctor) btnOpenCamDoctor.addEventListener('click', () => openCameraModal('doctor'));

  async function openCameraModal(context = 'farming') {
    state.cameraTargetContext = context;
    if (cameraModal) cameraModal.classList.remove('hidden');
    if (cameraControlsLive) cameraControlsLive.classList.remove('hidden');
    if (cameraControlsReview) cameraControlsReview.classList.add('hidden');
    if (snapshotPreview) snapshotPreview.classList.add('hidden');

    try {
      await startCameraStream();
    } catch (err) {
      showToast(state.lang === 'ar' ? 'تعذر فتح الكاميرا: ' + err.message : 'Could not access camera: ' + err.message, 'error');
      closeCameraModal();
    }
  }

  async function startCameraStream() {
    if (state.cameraStream) {
      state.cameraStream.getTracks().forEach(track => track.stop());
    }

    const constraints = {
      video: {
        facingMode: state.cameraFacingMode,
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    };

    state.cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
    if (cameraVideo) cameraVideo.srcObject = state.cameraStream;
  }

  function closeCameraModal() {
    if (state.cameraStream) {
      state.cameraStream.getTracks().forEach(track => track.stop());
      state.cameraStream = null;
    }
    if (cameraModal) cameraModal.classList.add('hidden');
    state.capturedImageBase64 = null;
  }

  if (btnCloseCamera) btnCloseCamera.addEventListener('click', closeCameraModal);
  if (btnCancelCamera) btnCancelCamera.addEventListener('click', closeCameraModal);

  if (btnSwitchCamera) {
    btnSwitchCamera.addEventListener('click', async () => {
      state.cameraFacingMode = state.cameraFacingMode === 'environment' ? 'user' : 'environment';
      try {
        await startCameraStream();
      } catch (e) {
        showToast(e.message, 'error');
      }
    });
  }

  if (btnTakeSnapshot) {
    btnTakeSnapshot.addEventListener('click', () => {
      if (!cameraVideo || !cameraCanvas) return;
      cameraCanvas.width = cameraVideo.videoWidth || 640;
      cameraCanvas.height = cameraVideo.videoHeight || 480;
      const ctx = cameraCanvas.getContext('2d');
      ctx.drawImage(cameraVideo, 0, 0, cameraCanvas.width, cameraCanvas.height);

      const base64Image = cameraCanvas.toDataURL('image/jpeg', 0.92);
      state.capturedImageBase64 = base64Image;

      if (snapshotImg) snapshotImg.src = base64Image;
      if (snapshotPreview) snapshotPreview.classList.remove('hidden');
      if (cameraControlsLive) cameraControlsLive.classList.add('hidden');
      if (cameraControlsReview) cameraControlsReview.classList.remove('hidden');
    });
  }

  if (btnRetakePhoto) {
    btnRetakePhoto.addEventListener('click', () => {
      if (snapshotPreview) snapshotPreview.classList.add('hidden');
      if (cameraControlsLive) cameraControlsLive.classList.remove('hidden');
      if (cameraControlsReview) cameraControlsReview.classList.add('hidden');
      state.capturedImageBase64 = null;
    });
  }

  if (btnUsePhoto) {
    btnUsePhoto.addEventListener('click', () => {
      const photo = state.capturedImageBase64;
      closeCameraModal();

      if (!photo) return;

      if (state.cameraTargetContext === 'farming') {
        identifyPlantBase64(photo);
      } else {
        setDoctorImagePreview(photo);
        switchTab('tab-doctor');
      }
    });
  }

  async function identifyPlantBase64(imageBase64) {
    if (farmingLoading) farmingLoading.classList.remove('hidden');
    if (farmingResults) farmingResults.classList.add('hidden');

    try {
      const response = await fetch(`${API_BASE}/api/plant/identify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          imageBase64,
          lang: state.lang 
        })
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || result.error || 'Plant identification failed.');
      }

      renderFarmingGuide(result.data.agriProfile);
      showToast(`${t('toastIdentified')} ${result.data.identification.identifiedName}`, 'success');
      fetchSessionHistory();
    } catch (error) {
      const errorMsg = error.message === 'Failed to fetch' 
        ? t('toastNetworkError')
        : error.message;
      showToast(errorMsg, 'error');
    } finally {
      if (farmingLoading) farmingLoading.classList.add('hidden');
    }
  }

  // =========================================================================
  // 6. SESSION HISTORY & LOGS
  // =========================================================================
  async function fetchSessionHistory() {
    try {
      const response = await fetch(`${API_BASE}/api/session/history`);
      const result = await response.json();
      if (result.success && result.data) {
        state.sessionData = result.data;
        renderSessionTab();
      }
    } catch (error) {
      console.error('Session fetch error:', error);
    }
  }

  function renderSessionTab() {
    const plants = state.sessionData.plants || [];
    const diagnoses = state.sessionData.diagnoses || [];
    const totalCount = plants.length + diagnoses.length;

    if (sessionCountBadge) sessionCountBadge.textContent = totalCount;
    if (statPlantsCount) statPlantsCount.textContent = plants.length;
    if (statDiagCount) statDiagCount.textContent = diagnoses.length;

    if (totalCount === 0) {
      if (sessionEmptyState) sessionEmptyState.classList.remove('hidden');
      if (sessionTimeline) sessionTimeline.classList.add('hidden');
      return;
    }

    if (sessionEmptyState) sessionEmptyState.classList.add('hidden');
    if (sessionTimeline) {
      sessionTimeline.classList.remove('hidden');
      sessionTimeline.innerHTML = '';
    }

    // Merge & sort records by timestamp descending
    const allRecords = [
      ...plants.map(p => ({ ...p, category: 'plant' })),
      ...diagnoses.map(d => ({ ...d, category: 'diagnosis' }))
    ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    allRecords.forEach(rec => {
      const card = document.createElement('div');
      card.className = 'timeline-card';

      const timeFormatted = new Date(rec.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (rec.category === 'plant') {
        const cropName = rec.profile?.commonName || rec.query || (state.lang === 'ar' ? 'سجل محصول' : 'Crop Record');
        card.innerHTML = `
          <div class="timeline-main">
            <div class="timeline-icon crop"><i class="fa-solid fa-wheat-awn"></i></div>
            <div>
              <h4 class="timeline-title">${cropName}</h4>
              <p class="timeline-sub">${state.lang === 'ar' ? 'تم استخراج وتوثيق الدليل الزراعي' : 'Agronomic farming profile researched'}</p>
            </div>
          </div>
          <span class="timeline-time">${timeFormatted}</span>
        `;
        card.addEventListener('click', () => {
          renderFarmingGuide(rec.profile);
          switchTab('tab-farming');
        });
      } else {
        const defectName = rec.diagnosis?.defectName || (state.lang === 'ar' ? 'تشخيص مرضي' : 'Disease Diagnosis');
        const hostPlant = rec.diagnosis?.plantSuspected || (state.lang === 'ar' ? 'محصول' : 'Crop');
        card.innerHTML = `
          <div class="timeline-main">
            <div class="timeline-icon doctor"><i class="fa-solid fa-stethoscope"></i></div>
            <div>
              <h4 class="timeline-title">${defectName}</h4>
              <p class="timeline-sub">${hostPlant} · ${state.lang === 'ar' ? 'الشدة:' : 'Severity:'} ${rec.diagnosis?.severity || (state.lang === 'ar' ? 'مكتمل' : 'Diagnosed')}</p>
            </div>
          </div>
          <span class="timeline-time">${timeFormatted}</span>
        `;
        card.addEventListener('click', () => {
          renderDiagnosisReport(rec.diagnosis);
          switchTab('tab-doctor');
        });
      }

      if (sessionTimeline) sessionTimeline.appendChild(card);
    });
  }

  // Clear Session
  if (btnClearSession) {
    btnClearSession.addEventListener('click', async () => {
      const confirmMsg = state.lang === 'ar' 
        ? 'هل أنت متأكد من رغبتك في مسح جميع سجلات الجلسة الحالية؟' 
        : 'Are you sure you want to clear all session records?';
      if (!confirm(confirmMsg)) return;

      try {
        const response = await fetch(`${API_BASE}/api/session/clear`, { method: 'POST' });
        const result = await response.json();
        if (result.success) {
          showToast(t('toastSessionCleared'), 'success');
          fetchSessionHistory();
        }
      } catch (e) {
        showToast(e.message, 'error');
      }
    });
  }

  // =========================================================================
  // 7. SETTINGS MODAL & API CONFIG INTEGRATION
  // =========================================================================
  async function updateSettingsStatus() {
    try {
      const response = await fetch(`${API_BASE}/api/config`);
      const result = await response.json();
      
      const hasServerKey = Boolean(result.hasServerKey);
      const hasSessionKey = Boolean(result.hasSessionKey);
      const configured = Boolean(result.configured);

      // Server key indicator
      if (iconServerKey) {
        iconServerKey.className = hasServerKey 
          ? 'fa-solid fa-circle-check text-green' 
          : 'fa-solid fa-circle-xmark text-red';
      }

      // Session key indicator
      if (iconSessionKey) {
        iconSessionKey.className = hasSessionKey 
          ? 'fa-solid fa-circle-check text-green' 
          : 'fa-solid fa-circle-xmark text-red';
      }

      // Configured badge/box style
      if (settingsStatusBox) {
        settingsStatusBox.classList.toggle('configured', configured);
      }

      // Active model display
      if (settingsActiveModelName) {
        settingsActiveModelName.textContent = result.defaultModel || 'gemini-3.6-flash';
      }

      // If we don't have a session key saved, clear the input.
      // But if we DO have a session key, we can show a placeholder indicating it's active.
      if (inputApiKey && !hasSessionKey) {
        inputApiKey.value = '';
      }
    } catch (error) {
      console.error('Error fetching API configuration status:', error);
    }
  }

  if (btnSettingsToggle) {
    btnSettingsToggle.addEventListener('click', () => {
      if (settingsModal) settingsModal.classList.remove('hidden');
      updateSettingsStatus();
    });
  }

  function closeSettingsModal() {
    if (settingsModal) settingsModal.classList.add('hidden');
    // Hide password characters again
    if (inputApiKey) inputApiKey.type = 'password';
    if (apiKeyVisibilityIcon) {
      apiKeyVisibilityIcon.className = 'fa-solid fa-eye-slash';
    }
  }

  if (btnCloseSettings) btnCloseSettings.addEventListener('click', closeSettingsModal);
  if (btnCancelSettings) btnCancelSettings.addEventListener('click', closeSettingsModal);

  // Close modal when clicking outside card
  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) {
        closeSettingsModal();
      }
    });
  }

  // Toggle API Key visibility
  if (btnToggleApiKeyVisibility) {
    btnToggleApiKeyVisibility.addEventListener('click', () => {
      if (!inputApiKey || !apiKeyVisibilityIcon) return;
      const isPassword = inputApiKey.type === 'password';
      inputApiKey.type = isPassword ? 'text' : 'password';
      apiKeyVisibilityIcon.className = isPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
    });
  }

  // Save Settings
  if (btnSaveSettings) {
    btnSaveSettings.addEventListener('click', async () => {
      if (!inputApiKey) return;
      const apiKey = inputApiKey.value.trim();

      try {
        const response = await fetch(`${API_BASE}/api/config`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ apiKey })
        });

        const result = await response.json();
        if (response.ok && result.success) {
          showToast(apiKey ? t('toastSettingsSaved') : t('toastSettingsCleared'), 'success');
          closeSettingsModal();
          // Trigger a session refresh to update any context
          fetchSessionHistory();
        } else {
          throw new Error(result.error || 'Failed to save settings.');
        }
      } catch (error) {
        showToast(t('toastSettingsFailed') + ': ' + error.message, 'error');
      }
    });
  }

  // Print Handlers
  if (btnPrintGuide) btnPrintGuide.addEventListener('click', () => window.print());
  if (btnPrintSession) btnPrintSession.addEventListener('click', () => window.print());

  // Initial Boot - Apply persisted Theme and Language
  applyTheme(state.theme);
  applyLanguage(state.lang);
  fetchSessionHistory();
}

// Ensure execution whether DOM is already loaded or still loading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
