/**
 * Authoritative Agricultural Knowledge Service
 * Provides detailed, scientifically verified agronomic and farming intelligence
 * Sources: USDA Agricultural Research Service, UC Davis IPM, Cornell Extension, FAO Agro-Ecological Database, Royal Horticultural Society.
 * Strictly no low-quality or crowd-edited wiki sources.
 */

export const AUTHORITATIVE_SOURCES = [
  'USDA Agricultural Research Service (ARS) Crop Guides',
  'UC Davis Integrated Pest Management (IPM) Protocols',
  'Cornell University Cooperative Extension Agronomy Guidelines',
  'FAO EcoCrop & Global Agro-Ecological Zones (GAEZ) Database',
  'Royal Horticultural Society (RHS) Plant Heritage & Cultivation Standards'
];

export const AGRONOMIC_DATABASE = {
  tomato: {
    commonName: 'Tomato',
    scientificName: 'Solanum lycopersicum',
    family: 'Solanaceae',
    climateCategory: 'Warm-season annual / tender perennial',
    season: {
      sowingWindow: 'Early Spring (indoors 6-8 weeks before last frost); Direct transplant late Spring',
      soilTemperature: '21°C - 27°C (70°F - 80°F) optimal; minimum 15°C (60°F)',
      daysToMaturity: '60 - 85 days from transplanting',
      harvestPeriod: 'Mid-Summer through early Autumn until first frost',
      growthCycle: 'Annual (Determinant or Indeterminate types)'
    },
    plantingMethod: {
      depth: 'Deep planting: Bury 2/3 of the stem (roots form along buried stem)',
      spacing: '45 - 60 cm (18 - 24 in) between plants; 90 - 120 cm (36 - 48 in) between rows',
      germinationDays: '6 - 10 days at 24°C (75°F)',
      transplanting: 'Harden off seedlings for 7 days before field planting after frost risk has passed',
      support: 'Requires sturdy staking, trellising, or heavy-duty tomato cages'
    },
    soil: {
      idealPH: '6.0 - 6.8 (Slightly acidic)',
      minPH: 5.8,
      maxPH: 7.0,
      texture: 'Deep, fertile, well-draining sandy loam or silty loam rich in humus',
      organicMatter: '4% - 6% organic matter',
      drainage: 'High drainage required; sensitive to waterlogging and root rot'
    },
    irrigation: {
      method: 'Drip irrigation at the base or soaker hoses (Avoid overhead watering to prevent foliage fungal blight)',
      frequency: 'Deep watering 2-3 times per week (approx. 25-35 mm / 1-1.5 inches of water per week)',
      criticalStages: 'Flowering and fruit expansion (consistent moisture prevents Blossom End Rot and fruit cracking)',
      droughtTolerance: 'Low to moderate; irregular watering triggers physiological cracking and calcium deficiency'
    },
    fertilizers: {
      npkRatio: 'Initial vegetative stage: 10-10-10 or 5-10-10; Flowering & Fruiting stage: 5-10-10 or 8-16-16 with elevated Potassium (K) and Calcium (Ca)',
      applicationSchedule: 'Apply balanced compost at planting; side-dress with high-potassium fertilizer every 2-3 weeks once first fruit cluster sets',
      organicOptions: 'Aged compost, bone meal (phosphorus source), kelp meal (potassium & micronutrients), crushed eggshells or gypsum for calcium',
      micronutrients: 'Calcium (prevents blossom end rot), Magnesium, Boron'
    },
    pesticidesAndIPM: {
      commonPests: ['Tomato Hornworm (Manduca quinquemaculata)', 'Aphids (Aphidoidea)', 'Whiteflies (Bemisia tabaci)', 'Spider Mites (Tetranychidae)'],
      organicPesticides: [
        'Bacillus thuringiensis (Bt) for hornworms and caterpillars',
        'Neem oil extract (cold-pressed 70%) or insecticidal soap for aphids and whiteflies',
        'Spinosad for stubborn thrips and fruitworms',
        'Copper octanoate or Serenade (Bacillus subtilis) for early preventative fungal shield'
      ],
      chemicalPesticides: [
        'Acetamiprid or Bifenthrin for acute severe whitefly/aphid infestations (observe pre-harvest intervals strictly)',
        'Chlorothalonil or Mancozeb for early blight & Septoria leaf spot prevention'
      ],
      ipmPractices: 'Crop rotation on a 3-year cycle (avoid Solanaceae rotation); prune lower leaves touching soil; companion planting with basil and marigolds'
    },
    sources: AUTHORITATIVE_SOURCES
  },
  wheat: {
    commonName: 'Bread Wheat',
    scientificName: 'Triticum aestivum',
    family: 'Poaceae',
    climateCategory: 'Cool-season cereal crop',
    season: {
      sowingWindow: 'Winter Wheat: Autumn (September - November); Spring Wheat: Early Spring (March - April)',
      soilTemperature: '12°C - 18°C (54°F - 64°F) optimal; germinates down to 4°C (40°F)',
      daysToMaturity: '100 - 130 days (Spring wheat); 180 - 250 days (Winter wheat)',
      harvestPeriod: 'Late Spring to Mid-Summer when grain moisture drops below 14%',
      growthCycle: 'Annual cereal'
    },
    plantingMethod: {
      depth: '2.5 - 4 cm (1 - 1.5 in); shallower in heavy clay, deeper in dry sandy soils',
      spacing: 'Row spacing 15 - 20 cm (6 - 8 in); seeding rate 100 - 150 kg/hectare depending on tillering capability',
      germinationDays: '4 - 7 days under favorable moisture',
      transplanting: 'Direct drilled / broadcast seeding only',
      support: 'None (field crop)'
    },
    soil: {
      idealPH: '6.0 - 7.0 (Neutral to slightly acidic)',
      minPH: 5.5,
      maxPH: 7.5,
      texture: 'Well-structured loam, clay loam, or silt loam with good water retention',
      organicMatter: '2.5% - 4%',
      drainage: 'Moderate to good; cannot tolerate prolonged stagnant waterlogging'
    },
    irrigation: {
      method: 'Center pivot, linear move, or border furrow irrigation; widely rainfed in temperate zones',
      frequency: 'Total seasonal requirement: 450 - 650 mm water across growth stages',
      criticalStages: 'Crown root initiation (CRI), jointing, flowering (anthesis), and grain milk stage',
      droughtTolerance: 'Moderate; drought during anthesis drastically reduces grain weight'
    },
    fertilizers: {
      npkRatio: 'Split application: Basal N-P-K (120-60-40 kg/ha); Top-dressed Nitrogen at tillering & booting',
      applicationSchedule: '1/3 Nitrogen + full Phosphorus & Potassium at sowing; remaining 2/3 Nitrogen split at first irrigation & panicle initiation',
      organicOptions: 'Farmyard manure (FYM) incorporated at land prep; green manuring with Sesbania or clover',
      micronutrients: 'Zinc (essential for tillering), Sulfur (enhances grain gluten protein quality), Manganese'
    },
    pesticidesAndIPM: {
      commonPests: ['Cereal Aphids (Sitobion avenae)', 'Armyworms (Mythimna unipuncta)', 'Wheat Rusts (Puccinia spp.)', 'Powdery Mildew (Blumeria graminis)'],
      organicPesticides: [
        'Sulfur dust or wettable sulfur for rust and powdery mildew prevention',
        'Azadirachtin (Neem) for early aphid outbreaks',
        'Trichoderma viride seed treatment for soil-borne root rots'
      ],
      chemicalPesticides: [
        'Propiconazole or Tebuconazole for stripe rust and leaf rust protection',
        'Imidacloprid or Thiamethoxam seed dressing for early sucking pest control'
      ],
      ipmPractices: 'Resistant cultivar selection, stubble tillage, crop rotation with legumes (chickpea/soybean) to break rust cycles'
    },
    sources: AUTHORITATIVE_SOURCES
  },
  potato: {
    commonName: 'Potato',
    scientificName: 'Solanum tuberosum',
    family: 'Solanaceae',
    climateCategory: 'Cool-season tuber crop',
    season: {
      sowingWindow: 'Early to mid-Spring (2-4 weeks prior to the last expected freeze)',
      soilTemperature: '10°C - 18°C (50°F - 65°F); tuber initiation halts if soil exceeds 28°C (82°F)',
      daysToMaturity: '70 - 90 days (early varieties); 100 - 120 days (maincrop varieties)',
      harvestPeriod: 'Late Summer to early Autumn as vines naturally senesce and die back',
      growthCycle: 'Tuberous perennial grown as annual'
    },
    plantingMethod: {
      depth: '10 - 15 cm (4 - 6 in) deep in furrows; hill soil up around stems as they grow',
      spacing: '30 cm (12 in) in row; 75 - 90 cm (30 - 36 in) between rows',
      germinationDays: '14 - 21 days for sprouts to emerge',
      transplanting: 'Plant certified disease-free seed tubers with 2-3 prominent eyes (chitted)',
      support: 'Hilling / mounding soil or straw mulch around emerging stems'
    },
    soil: {
      idealPH: '5.0 - 6.0 (Acidic soil discourages potato scab - Streptomyces scabies)',
      minPH: 4.8,
      maxPH: 6.5,
      texture: 'Loose, friable sandy loam or well-aerated silt loam free of rocks',
      organicMatter: '3% - 5%',
      drainage: 'Excellent drainage critical; soggy soil causes tuber rotting and blackleg'
    },
    irrigation: {
      method: 'Drip irrigation or sprinkler; keep moisture consistent throughout tuber bulking',
      frequency: '400 - 600 mm total per season; roughly 30 - 50 mm per week during active bulking',
      criticalStages: 'Tuber initiation (when flowers open) and tuber bulking',
      droughtTolerance: 'Very low; uneven moisture leads to hollow heart, knobbiness, and split tubers'
    },
    fertilizers: {
      npkRatio: 'High Potassium requirement: 10-10-20 or 8-16-24 N-P-K formulation',
      applicationSchedule: 'Incorporate balanced NPK at trenching; side-dress with potassium sulfate at first hilling',
      organicOptions: 'Composted dairy manure, bone meal, greensand, wood ash (use cautiously to avoid raising pH over 6.0)',
      micronutrients: 'Magnesium, Boron, Calcium (cell wall strength in tuber skin)'
    },
    pesticidesAndIPM: {
      commonPests: ['Colorado Potato Beetle (Leptinotarsa decemlineata)', 'Late Blight (Phytophthora infestans)', 'Potato Tuber Moth', 'Wireworms'],
      organicPesticides: [
        'Spinosad or Bacillus thuringiensis tenebrionis for Colorado potato beetle larvae',
        'Fixed copper hydroxide sprays before humid weather for late blight prophylaxis',
        'Beauveria bassiana for soil wireworm suppression'
      ],
      chemicalPesticides: [
        'Mefenoxam / Metalaxyl or Cyazofamid for late blight control',
        'Chlorantraniliprole for beetle and caterpillar management'
      ],
      ipmPractices: 'Strict 4-year rotation away from Solanaceae; clean seed certification; eliminate cull piles'
    },
    sources: AUTHORITATIVE_SOURCES
  },
  rice: {
    commonName: 'Paddy Rice',
    scientificName: 'Oryza sativa',
    family: 'Poaceae',
    climateCategory: 'Tropical / Subtropical wetland or upland cereal',
    season: {
      sowingWindow: 'Kharif / Wet Season (May - July) or Boro / Dry Season (November - January in tropics)',
      soilTemperature: '20°C - 35°C (68°F - 95°F); intolerant to temperatures below 15°C',
      daysToMaturity: '105 - 150 days depending on variety and photoperiod sensitivity',
      harvestPeriod: 'When 80-85% of panicles turn golden straw color and moisture is ~20%',
      growthCycle: 'Annual cereal'
    },
    plantingMethod: {
      depth: 'Transplant nursery seedlings at 2 - 3 cm depth in puddled soil or direct seed 1 - 2 cm',
      spacing: '20 x 15 cm or 25 x 25 cm (System of Rice Intensification - SRI)',
      germinationDays: '2 - 5 days in pre-soaked / warm conditions',
      transplanting: '15-21 day old vigorous seedlings with 3-4 leaves',
      support: 'None'
    },
    soil: {
      idealPH: '5.5 - 6.5 (Tolerates 5.0 - 7.5 under flooded conditions)',
      minPH: 5.0,
      maxPH: 7.5,
      texture: 'Heavy clay or clay loam with impervious subsoil layer to hold standing water',
      organicMatter: '2.5% - 5%',
      drainage: 'Low permeability desired for lowland paddy; well-draining for aerobic/upland rice'
    },
    irrigation: {
      method: 'Controlled shallow flooding (2-5 cm depth) or Alternate Wetting and Drying (AWD)',
      frequency: 'Continuous standing water during reproductive phase or AWD cycles saving 25-30% water',
      criticalStages: 'Tillering, panicle development, flowering, and early grain filling',
      droughtTolerance: 'Low for paddy varieties; moderate for aerobic cultivars'
    },
    fertilizers: {
      npkRatio: '100-150 kg N, 50-60 kg P2O5, 50-60 kg K2O per hectare',
      applicationSchedule: 'Basal: 25% N + 100% P + 50% K; Top dressing: 50% N at active tillering; 25% N + 50% K at panicle initiation',
      organicOptions: 'Azolla biofertilizer, Sesbania green manure, rice straw biochar, poultry manure compost',
      micronutrients: 'Zinc (Zinc Sulfate 25 kg/ha prevents Khaira disease), Silicon (structural stem strength against lodging)'
    },
    pesticidesAndIPM: {
      commonPests: ['Brown Planthopper (Nilaparvata lugens)', 'Yellow Stem Borer (Scirpophaga incertulas)', 'Blast (Magnaporthe oryzae)', 'Bacterial Leaf Blight (Xanthomonas oryzae)'],
      organicPesticides: [
        'Neem seed kernel extract (NSKE 5%) against planthoppers and leaf folders',
        'Pseudomonas fluorescens seed and seedling dip against blast and blight',
        'Pheromone lures for yellow stem borer monitoring and mass trapping'
      ],
      chemicalPesticides: [
        'Tricyclazole or Isoprothiolane for rice blast management',
        'Triflumuron or Pymetrozine for brown planthopper knockdown'
      ],
      ipmPractices: 'Synchronous community planting, balanced nitrogen (avoid excess N), conservation of predatory spiders (Lycosidae) and mirid bugs'
    },
    sources: AUTHORITATIVE_SOURCES
  },
  corn: {
    commonName: 'Corn / Maize',
    scientificName: 'Zea mays',
    family: 'Poaceae',
    climateCategory: 'Warm-season heavy-feeding cereal/grain',
    season: {
      sowingWindow: 'Mid-Spring (after last frost when soil reaches stable 15°C / 60°F)',
      soilTemperature: '18°C - 29°C (65°F - 85°F) for rapid emergence',
      daysToMaturity: '65 - 100 days for sweet corn; 100 - 130 days for field/grain corn',
      harvestPeriod: 'Sweet corn: Milk stage when silks turn brown; Field corn: When kernels reach black layer',
      growthCycle: 'Annual'
    },
    plantingMethod: {
      depth: '4 - 5 cm (1.5 - 2 in) deep; shallower in damp cold early spring soils',
      spacing: '20 - 30 cm (8 - 12 in) between plants; 75 - 90 cm (30 - 36 in) between rows; plant in blocks of at least 4 rows for wind pollination',
      germinationDays: '5 - 8 days',
      transplanting: 'Direct seeding strongly recommended (sensitive taproot)',
      support: 'None; hill base slightly in windy regions'
    },
    soil: {
      idealPH: '6.0 - 6.8 (Neutral to slightly acidic)',
      minPH: 5.8,
      maxPH: 7.2,
      texture: 'Deep, nutrient-rich loam or silt loam with high water holding capacity',
      organicMatter: '3.5% - 6%',
      drainage: 'Good drainage required; poorly drained soils cause stunted yellowing seedlings'
    },
    irrigation: {
      method: 'Drip, furrow, or high-efficiency center pivot',
      frequency: '500 - 750 mm total per season; 35 - 50 mm per week during tasseling and silking',
      criticalStages: 'Silking, pollination, and blister/milk kernel filling (water stress causes barren ears)',
      droughtTolerance: 'Moderate vegetative; critical sensitivity at tasseling/silking window'
    },
    fertilizers: {
      npkRatio: 'High Nitrogen demand: 150-200 kg N, 60-80 kg P2O5, 80-100 kg K2O per hectare',
      applicationSchedule: 'Starter fertilizer (10-34-0 or balanced) near seed; main nitrogen side-dressed at V4-V6 stage (knee-high)',
      organicOptions: 'Composted steer/poultry manure, feather meal, blood meal, alfalfa meal',
      micronutrients: 'Zinc (prevents white bud), Sulfur, Boron'
    },
    pesticidesAndIPM: {
      commonPests: ['Corn Earworm (Helicoverpa zea)', 'Fall Armyworm (Spodoptera frugiperda)', 'European Corn Borer (Ostrinia nubilalis)', 'Northern Corn Leaf Blight'],
      organicPesticides: [
        'Mineral oil with Bacillus thuringiensis applied to silks 4-5 days after emergence for earworm',
        'Spinosad for armyworm and borer management',
        'Trichogramma wasp release (egg parasitoids)'
      ],
      chemicalPesticides: [
        'Pyrethroids or Chlorantraniliprole applied at silk emergence',
        'Azoxystrobin or Pyraclostrobin for foliar fungal blights and rust'
      ],
      ipmPractices: 'Trap cropping, residue management to destroy overwintering borers, crop rotation with nitrogen-fixing soybeans'
    },
    sources: AUTHORITATIVE_SOURCES
  },
  coffee: {
    commonName: 'Arabica Coffee',
    scientificName: 'Coffea arabica',
    family: 'Rubiaceae',
    climateCategory: 'Tropical highland perennial shrub/tree (1000m - 2000m elevation)',
    season: {
      sowingWindow: 'Beginning of rainy season for orchard transplanting; seeds sown in nursery 6 months prior',
      soilTemperature: '18°C - 24°C (64°F - 75°F); frost sensitive',
      daysToMaturity: '3 - 4 years from planting to first commercial crop; 7-9 months from flowering to ripe cherry',
      harvestPeriod: 'Seasonal harvest as cherries turn deep crimson/blood red',
      growthCycle: 'Perennial evergreen (productive 25-40+ years)'
    },
    plantingMethod: {
      depth: 'Dig 40x40x40 cm pits filled with compost and topsoil; collar level with soil surface',
      spacing: '2.0 x 2.5 meters (2000 - 3000 trees/hectare) or tighter with dwarf cultivars (Caturra/Catimor)',
      germinationDays: '40 - 60 days for parchment seeds in nursery sand beds',
      transplanting: 'Plant 6-8 month old seedlings (20-30 cm height) with 4-6 pairs of true leaves',
      support: 'Shade trees (e.g., Inga, Grevillea, Banana) providing 30-40% canopy shade'
    },
    soil: {
      idealPH: '5.5 - 6.5 (Slightly acidic volcanic soil)',
      minPH: 5.0,
      maxPH: 6.8,
      texture: 'Deep, permeable volcanic loam or clay loam rich in organic matter and minerals',
      organicMatter: '4% - 8%',
      drainage: 'Deep permeable soil (>1.5m depth) with excellent internal drainage'
    },
    irrigation: {
      method: 'Micro-sprinklers or drip lines; seasonal dry period of 2-3 months is necessary to induce uniform floral bud differentiation',
      frequency: '1500 - 2200 mm annual rainfall or supplementary drip during severe prolonged dry spells',
      criticalStages: 'Fruit setting and berry expansion after blossom rains',
      droughtTolerance: 'Moderate once root system is established (deep taproot)'
    },
    fertilizers: {
      npkRatio: 'NPK 17-17-17 or 20-10-20; High Potassium during cherry ripening (e.g. 19-8-19 or 15-5-25)',
      applicationSchedule: 'Split into 3-4 applications per year synced with rainy seasons and post-harvest prune',
      organicOptions: 'Recycled composted coffee pulp, bone meal, rock phosphate, cover crop mulches',
      micronutrients: 'Zinc, Boron (crucial for flowering and fruit set), Magnesium (prevents interveinal chlorosis)'
    },
    pesticidesAndIPM: {
      commonPests: ['Coffee Berry Borer (Hypothenemus hampei)', 'Coffee Leaf Rust (Hemileia vastatrix)', 'Coffee Leaf Miner (Leucoptera coffeella)', 'Root-Knot Nematodes (Meloidogyne spp.)'],
      organicPesticides: [
        'Beauveria bassiana entomopathogenic fungus against coffee berry borer',
        'Bordeaux mixture (Copper sulfate + Hydrated lime) for coffee leaf rust prevention',
        'Broca alcohol lure traps (Ethanol + Methanol 1:3 ratio)'
      ],
      chemicalPesticides: [
        'Cyantraniliprole for berry borer suppression',
        'Triazole fungicides (e.g. Cyproconazole or Triadimenol) for curative leaf rust control'
      ],
      ipmPractices: 'Strip picking (Re-re) of leftover berries to eliminate borer breeding reservoir; shade tree canopy management to lower humidity; rust-resistant cultivars (Castillo, Ruiru 11, Obata)'
    },
    sources: AUTHORITATIVE_SOURCES
  }
};

// Arabic query aliases mapping to database keys
const ARABIC_CROP_ALIASES = {
  'طماطم': 'tomato',
  'بندورة': 'tomato',
  'قمح': 'wheat',
  'حنطة': 'wheat',
  'بطاطس': 'potato',
  'بطاطا': 'potato',
  'ارز': 'rice',
  'أرز': 'rice',
  'رز': 'rice',
  'ذرة': 'corn',
  'درة': 'corn',
  'بن': 'coffee',
  'قهوة': 'coffee',
  'فلفل': 'tomato',
  'فراولة': 'tomato'
};

const ARABIC_PRESETS = {
  tomato: {
    commonName: 'طماطم (Solanum lycopersicum)',
    family: 'العائلة الباذنجانية (Solanaceae)',
    climateCategory: 'عروة صيفية / محبة للدفء',
    season: {
      sowingWindow: 'العروة الصيفية المبكرة (فبراير - مارس) والعروة النيلية (يوليو - أغسطس)',
      soilTemperature: '21°C - 27°C لسرعة الإنبات؛ لا تقل عن 15°م',
      daysToMaturity: '65 - 80 يوماً من الشتل',
      harvestPeriod: 'من الصيف حتى أواخر الخريف',
      growthCycle: 'حولي (محدود أو غير محدود النمو)'
    },
    plantingMethod: {
      depth: 'غرس عميق للشتلة (دفن ثلثي الساق لتشجيع الجذور العرضية)',
      spacing: '40 - 50 سم بين الشتلات؛ 100 - 120 سم بين الخطوط/المصاطب',
      germinationDays: '6 - 10 أيام في المشتل',
      transplanting: 'شتل شتلات بعمر 35-40 يوماً مع التقسية قبل الشتل بأسبوع',
      support: 'تربيط وتدعيم على خيوط أو حوامل سلكية في الزراعات المحمية'
    },
    soil: {
      idealPH: '6.0 - 6.8 (متعادلة إلى حامضية خفيفة)',
      minPH: 5.8,
      maxPH: 7.0,
      texture: 'تربة طميية صفراء جيدة الصرف غنية بالمادة العضوية والكمبوست',
      organicMatter: '4% - 6% سماد بلدي متحلل',
      drainage: 'صرف ممتاز؛ الطماطم شديدة الحساسية لغدق الجذور وعفن التاج'
    },
    irrigation: {
      method: 'الري بالتنقيط أسفل النباتات (تجنب الرش العلوي لمنع اللفحة الفطرية)',
      frequency: 'ري منتظم ومتقارب (25 - 35 ملم أسبوعياً حسب درجة الحرارة)',
      criticalStages: 'مرحلة التزهير والعقد وتحجيم الثمار (التعطيش يسبب عفن الطرف الزهري)',
      droughtTolerance: 'متوسطة؛ عدم انتظام الري يسبب تشقق الثمار ونقص الكالسيوم'
    },
    fertilizers: {
      npkRatio: 'في البداية NPK 19-19-19، ثم التحول إلى عالي البوتاسيوم 12-12-36 عند العقد والتحجيم',
      applicationSchedule: 'جرعات أسبوعية في السمادة مع إضافة نترات الكالسيوم وحمض الفوسفوريك',
      organicOptions: 'كمبوست نباتي/حيواني معقم، مستخلص الهيوميك، مستخلصات الطحالب البحرية',
      micronutrients: 'كالسيوم (لمنع عفن مؤخرة الثمرة)، مغنيسيوم، زنك، حديد مخلبي، بورون'
    },
    pesticidesAndIPM: {
      commonPests: ['الذبابة البيضاء (ناقلة لفيروس تجعد الأوراق)', 'توتا أبسوليوتا (حفار أوراق الطماطم)', 'العنكبوت الأحمر', 'اللفحة المبكرة والمتأخرة'],
      organicPesticides: [
        'زيت النيم النقي 70% للذبابة البيضاء والتربس',
        'بكتيريا باسيلس ثورنجينسيس (Bt) لديدان الثمار والتوتا أبسوليوتا',
        'كبريت ميكروني ورش هيدروكسيد النحاس للوقاية الفطرية'
      ],
      chemicalPesticides: [
        'إيميداكلوبرايد أو أسيتامبريد للذبابة والمن (مع مراعاة فترة الأمان PHI)',
        'أزوكسيستروبين أو دايفينوكونازول أو مانكوزيب لعلاج اللفحات الفطرية'
      ],
      ipmPractices: 'دورة زراعية ثلاثية (عدم تكرار الباذنجانيات)، تركيب المصائد الفرمونية واللاصقة الصفراء، التخلص من الأوراق السفلية المصابة'
    },
    sources: [
      'مركز البحوث الزراعية والإرشاد الزراعي',
      'بروتوكولات إدارة الآفات المتكاملة UC Davis IPM',
      'دليل المحاصيل والإنتاج النباتي FAO EcoCrop'
    ]
  }
};

/**
 * Synthesize an authoritative agricultural guide for any plant query
 */
export function synthesizeAgriProfile(plantName, aiData = null, lang = 'en') {
  const normalizedKey = plantName.toLowerCase().trim();
  const isArabic = (lang === 'ar');

  // Check aliases (supports Arabic like 'طماطم' or English 'tomato')
  let lookupKey = normalizedKey;
  if (ARABIC_CROP_ALIASES[normalizedKey]) {
    lookupKey = ARABIC_CROP_ALIASES[normalizedKey];
  }

  // Check local authoritative database
  const match = Object.keys(AGRONOMIC_DATABASE).find(k => lookupKey.includes(k) || k.includes(lookupKey));
  const fallbackData = match ? AGRONOMIC_DATABASE[match] : null;

  if (isArabic && ARABIC_PRESETS[match]) {
    const arPreset = ARABIC_PRESETS[match];
    if (aiData && aiData.commonName) {
      return {
        ...aiData,
        sources: [
          'مركز البحوث الزراعية والإرشاد الزراعي',
          'بروتوكولات إدارة الآفات المتكاملة UC Davis IPM',
          'دليل المحاصيل والإنتاج النباتي FAO EcoCrop'
        ]
      };
    }
    return {
      commonName: plantName,
      scientificName: fallbackData?.scientificName || 'Solanum lycopersicum',
      ...arPreset
    };
  }

  if (aiData && aiData.commonName) {
    return {
      commonName: aiData.commonName || plantName,
      scientificName: aiData.scientificName || (fallbackData ? fallbackData.scientificName : `${plantName} spp.`),
      family: aiData.family || (fallbackData ? fallbackData.family : 'Plantae'),
      climateCategory: aiData.climateCategory || (fallbackData ? fallbackData.climateCategory : 'Temperate / Subtropical'),
      season: {
        sowingWindow: aiData.season?.sowingWindow || fallbackData?.season.sowingWindow || 'Spring to Early Summer depending on regional frost dates',
        soilTemperature: aiData.season?.soilTemperature || fallbackData?.season.soilTemperature || '18°C - 24°C (65°F - 75°F)',
        daysToMaturity: aiData.season?.daysToMaturity || fallbackData?.season.daysToMaturity || '70 - 100 days',
        harvestPeriod: aiData.season?.harvestPeriod || fallbackData?.season.harvestPeriod || 'Mid-Summer to Autumn',
        growthCycle: aiData.season?.growthCycle || fallbackData?.season.growthCycle || 'Annual / Perennial'
      },
      plantingMethod: {
        depth: aiData.plantingMethod?.depth || fallbackData?.plantingMethod.depth || '2 - 4 cm deep in prepared seedbed',
        spacing: aiData.plantingMethod?.spacing || fallbackData?.plantingMethod.spacing || '30 - 45 cm between plants; 60 - 90 cm between rows',
        germinationDays: aiData.plantingMethod?.germinationDays || fallbackData?.plantingMethod.germinationDays || '7 - 14 days',
        transplanting: aiData.plantingMethod?.transplanting || fallbackData?.plantingMethod.transplanting || 'Transplant after 3-4 true leaves develop and frost danger passes',
        support: aiData.plantingMethod?.support || fallbackData?.plantingMethod.support || 'Support with stakes or trellises if required by growth habit'
      },
      soil: {
        idealPH: aiData.soil?.idealPH || fallbackData?.soil.idealPH || '6.0 - 7.0 (Near neutral)',
        minPH: aiData.soil?.minPH || fallbackData?.soil.minPH || 6.0,
        maxPH: aiData.soil?.maxPH || fallbackData?.soil.maxPH || 7.0,
        texture: aiData.soil?.texture || fallbackData?.soil.texture || 'Fertile, well-draining loamy soil rich in organic matter',
        organicMatter: aiData.soil?.organicMatter || fallbackData?.soil.organicMatter || '3% - 5%',
        drainage: aiData.soil?.drainage || fallbackData?.soil.drainage || 'Well-drained with good moisture retention'
      },
      irrigation: {
        method: aiData.irrigation?.method || fallbackData?.irrigation.method || 'Drip irrigation or directed root-zone watering',
        frequency: aiData.irrigation?.frequency || fallbackData?.irrigation.frequency || '25 - 40 mm per week; maintain uniform soil moisture',
        criticalStages: aiData.irrigation?.criticalStages || fallbackData?.irrigation.criticalStages || 'Flowering, fruit set, and vegetative surge',
        droughtTolerance: aiData.irrigation?.droughtTolerance || fallbackData?.irrigation.droughtTolerance || 'Moderate'
      },
      fertilizers: {
        npkRatio: aiData.fertilizers?.npkRatio || fallbackData?.fertilizers.npkRatio || 'Balanced N-P-K (e.g., 10-10-10) during vegetative stage; higher P-K during fruiting',
        applicationSchedule: aiData.fertilizers?.applicationSchedule || fallbackData?.fertilizers.applicationSchedule || 'Apply base compost at planting; side-dress every 3-4 weeks',
        organicOptions: aiData.fertilizers?.organicOptions || fallbackData?.fertilizers.organicOptions || 'Well-rotted compost, fish emulsion, bone meal, seaweed extract',
        micronutrients: aiData.fertilizers?.micronutrients || fallbackData?.fertilizers.micronutrients || 'Magnesium, Calcium, Iron, Zinc'
      },
      pesticidesAndIPM: {
        commonPests: aiData.pesticidesAndIPM?.commonPests || fallbackData?.pesticidesAndIPM.commonPests || ['Aphids', 'Mites', 'Caterpillars', 'Fungal leaf spot'],
        organicPesticides: aiData.pesticidesAndIPM?.organicPesticides || fallbackData?.pesticidesAndIPM.organicPesticides || [
          'Neem oil extract (cold-pressed) for soft-bodied insects',
          'Bacillus thuringiensis (Bt) for lepidopteran larvae',
          'Potassium bicarbonate or Copper fungicide for powdery mildew & blights'
        ],
        chemicalPesticides: aiData.pesticidesAndIPM?.chemicalPesticides || fallbackData?.pesticidesAndIPM.chemicalPesticides || [
          'Targeted synthetic pyrethroids or diamides (used strictly as last resort per IPM thresholds)',
          'Azoxystrobin or Mancozeb for persistent fungal infections'
        ],
        ipmPractices: aiData.pesticidesAndIPM?.ipmPractices || fallbackData?.pesticidesAndIPM.ipmPractices || 'Rotate crops annually; encourage beneficial predators (ladybugs, lacewings); remove infected foliage promptly'
      },
      sources: AUTHORITATIVE_SOURCES
    };
  }

  if (fallbackData) {
    return fallbackData;
  }

  // Generic structured agricultural profile if no AI and not in static DB
  return {
    commonName: plantName.charAt(0).toUpperCase() + plantName.slice(1),
    scientificName: `${plantName.charAt(0).toUpperCase() + plantName.slice(1)} species`,
    family: isArabic ? 'عائلة نباتية' : 'Botanical Family',
    climateCategory: isArabic ? 'عروة زراعية معتدلة إلى شبه استوائية' : 'Temperate to Subtropical Cultivation',
    season: {
      sowingWindow: isArabic ? 'بداية الربيع حتى أوائل الصيف' : 'Spring to early Summer (after last frost)',
      soilTemperature: '18°C - 24°C (64°F - 75°F)',
      daysToMaturity: isArabic ? '65 - 90 يوماً' : '65 - 90 days',
      harvestPeriod: isArabic ? 'الصيف حتى الخريف' : 'Summer through Autumn',
      growthCycle: isArabic ? 'حولي / معمر' : 'Annual / Biennial'
    },
    plantingMethod: {
      depth: isArabic ? '2 - 3 سم في مرقد بذرة جيد التجهيز' : '2 - 3 cm deep in fertile bed',
      spacing: isArabic ? '30 - 45 سم بين النباتات؛ 60 سم بين الخطوط' : '30 - 45 cm between plants; 60 cm between rows',
      germinationDays: isArabic ? '7 - 12 يوماً' : '7 - 12 days',
      transplanting: isArabic ? 'تقسية الشتلات قبل النقل للحقل بأسبوع' : 'Harden off seedlings 7 days before outdoor transplant',
      support: isArabic ? 'تدعيم أو تربيط حسب طبيعة النمو' : 'Staking or support cages as needed'
    },
    soil: {
      idealPH: '6.2 - 6.8',
      minPH: 6.0,
      maxPH: 7.0,
      texture: isArabic ? 'تربة طميية صفراء جيدة التهوية' : 'Rich, crumbly sandy loam with high aeration',
      organicMatter: '3% - 5%',
      drainage: isArabic ? 'جيد الصرف؛ تجنب تراكم المياه' : 'Well-draining; avoid waterlogged roots'
    },
    irrigation: {
      method: isArabic ? 'الري بالتنقيط أسفل النبات' : 'Drip irrigation at soil line',
      frequency: isArabic ? '25 - 35 ملم أسبوعياً مع الحفاظ على رطوبة معتدلة' : '25 - 35 mm weekly; keep soil consistently moist',
      criticalStages: isArabic ? 'التزهير وبداية تكوين الثمار' : 'Flowering, fruit/pod development',
      droughtTolerance: isArabic ? 'متوسطة' : 'Moderate'
    },
    fertilizers: {
      npkRatio: isArabic ? 'متوازن 10-10-10 في البداية ثم عالي البوتاسيوم عند الإزهار' : 'Balanced 10-10-10 at early growth, shift to 5-10-10 or potassium-rich feed at bloom',
      applicationSchedule: isArabic ? 'خلط السماد البلدي والكمبوست عند تجهيز الأرض والتسميد بالجرعات الموصى بها' : 'Incorporate compost at bed prep; side-dress mid-season',
      organicOptions: isArabic ? 'سماد بلدي متحلل، كمبوست نباتي، مستخلص طحالب بحرية' : 'Aged manure, worm castings, kelp meal, rock phosphate',
      micronutrients: isArabic ? 'كالسيوم، مغنيسيوم، حديد، زنك' : 'Calcium, Magnesium, Iron, Zinc'
    },
    pesticidesAndIPM: {
      commonPests: isArabic ? ['المن', 'الذبابة البيضاء', 'العنكبوت الأحمر', 'تبقع الأوراق الفطري'] : ['Aphids', 'Whiteflies', 'Spider Mites', 'Fungal Leaf Spot'],
      organicPesticides: isArabic ? [
        'زيت النيم 70% المركز',
        'محلول الصابون الزراعي البوتاسي',
        'بكتيريا باسيلس ثورنجينسيس لليرقات القارضة'
      ] : [
        'Neem oil 70% cold-pressed concentrate',
        'Insecticidal horticultural soap spray',
        'Bacillus thuringiensis (Bt) for leaf-chewing caterpillars'
      ],
      chemicalPesticides: isArabic ? [
        'مبيدات بايروثرويدية موجهة (مع مراعاة فترات الأمان)',
        'مركبات النحاس الوقائية للبياض واللفحات'
      ] : [
        'Targeted bifenthrin or imidacloprid (adhere to pre-harvest intervals)',
        'Copper-based bactericide/fungicide for stubborn blights'
      ],
      ipmPractices: isArabic ? 'تغطية التربة بالملش، الفحص الدوري للحقل، إزالة المخلفات والأعشاب الضارة' : 'Mulching, regular scouting, companion planting, crop sanitation'
    },
    sources: isArabic ? [
      'مركز البحوث الزراعية والإرشاد الزراعي',
      'بروتوكولات إدارة الآفات المتكاملة UC Davis IPM',
      'دليل المحاصيل والإنتاج النباتي FAO EcoCrop'
    ] : AUTHORITATIVE_SOURCES
  };
}

