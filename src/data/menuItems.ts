// Menu Item Images - Local Assets
import champaranHandiMutton1 from '@/assets/menu/champaran-handi-mutton-1.webp';
import champaranHandiMutton2 from '@/assets/menu/champaran-handi-mutton-2.webp';
import champaranHandiChicken from '@/assets/menu/champaran-handi-chicken.jpg';
import champaranHandiFamily1 from '@/assets/menu/champaran-handi-family-1.jpg';
import champaranHandiFamily2 from '@/assets/menu/champaran-handi-family-2.jpg';
import kadhaiChicken from '@/assets/menu/kadhai-chicken.jpg';
import chickenSeekh from '@/assets/menu/chicken-seekh-kebab.jpg';
import tandooriMurgh1 from '@/assets/menu/tandoori-murgh-1.jpg';
import tandooriMurgh2 from '@/assets/menu/tandoori-murgh-2.jpg';
import chickenDoubleLeg1 from '@/assets/menu/chicken-double-leg-1.jpg';
import chickenDoubleLeg2 from '@/assets/menu/chicken-double-leg-2.jpg';
import muttonHandiThali from '@/assets/menu/mutton-handi-thali.jpg';
import chickenHandiThali1 from '@/assets/menu/chicken-handi-thali-1.jpg';
import chickenHandiThali2 from '@/assets/menu/chicken-handi-thali-2.jpg';
import kadhaiChickenThali1 from '@/assets/menu/kadhai-chicken-thali-1.jpg';
import kadhaiChickenThali2 from '@/assets/menu/kadhai-chicken-thali-2.jpg';
import butterChickenThali1 from '@/assets/menu/butter-chicken-thali-1.jpg';
import butterChickenThali2 from '@/assets/menu/butter-chicken-thali-2.jpg';
import muttonBiryani from '@/assets/menu/mutton-biryani.jpg';
import chickenBiryani from '@/assets/menu/chicken-biryani.jpg';
import tawaRoti from '@/assets/menu/tawa-roti.jpg';
import butterRoti from '@/assets/menu/butter-roti.jpg';
import desiGheeLitti from '@/assets/menu/desi-ghee-litti.jpg';
import litti from '@/assets/menu/litti.jpg';
import lacchaParatha from '@/assets/menu/laccha-paratha.jpg';
import rumaliRoti from '@/assets/menu/rumali-roti.jpg';
import rice from '@/assets/menu/rice.jpg';
import water from '@/assets/menu/water.jpg';
import coldDrinks from '@/assets/menu/cold-drinks.jpg';

export type PricingType = 'per-kg' | 'per-piece' | 'per-unit' | 'full-half' | 'thali' | 'simple';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameHi: string;
  descriptionEn: string;
  descriptionHi: string;
  price: number;
  halfPrice?: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  image: string;
  image2?: string;
  isVeg: boolean;
  isSpecial?: boolean;
  spiceLevel?: 1 | 2 | 3;
  pricingType: PricingType;
  includes?: {
    en: string[];
    hi: string[];
  };
}

export const categories = [
  { id: 'all', nameEn: 'All', nameHi: 'सभी' },
  { id: 'handi-specials', nameEn: 'Handi Specials', nameHi: 'हांडी स्पेशल' },
  { id: 'starters', nameEn: 'Starters', nameHi: 'स्टार्टर्स' },
  { id: 'main-course', nameEn: 'Main Course', nameHi: 'मेन कोर्स' },
  { id: 'biryani', nameEn: 'Biryani', nameHi: 'बिरयानी' },
  { id: 'breads', nameEn: 'Breads', nameHi: 'रोटियां' },
  { id: 'rice', nameEn: 'Rice', nameHi: 'चावल' },
  { id: 'beverages', nameEn: 'Beverages', nameHi: 'पेय' },
];

export const menuItems: MenuItem[] = [
  // Handi Specials - Per KG pricing
  {
    id: 'champaran-handi-mutton',
    nameEn: 'Champaran Handi Mutton',
    nameHi: 'चम्पारण हांडी मटन',
    descriptionEn: 'Our signature dish! Authentic Champaran-style mutton slow-cooked in traditional clay pot with secret spices. Includes: Mutton, Gravy, Spices, Ghee',
    descriptionHi: 'हमारी विशेष डिश! पारंपरिक मिट्टी के बर्तन में गुप्त मसालों के साथ धीमी आंच पर पकाया गया प्रामाणिक चम्पारण स्टाइल मटन। शामिल: मटन, ग्रेवी, मसाले, घी',
    price: 1000,
    originalPrice: 1200,
    discount: 20,
    category: 'handi-specials',
    image: champaranHandiMutton1,
    image2: champaranHandiMutton2,
    isVeg: false,
    isSpecial: true,
    spiceLevel: 3,
    pricingType: 'per-kg',
    includes: {
      en: ['Fresh Mutton', 'Special Gravy', 'Secret Spices', 'Pure Ghee'],
      hi: ['ताजा मटन', 'स्पेशल ग्रेवी', 'गुप्त मसाले', 'शुद्ध घी'],
    },
  },
  {
    id: 'champaran-handi-chicken',
    nameEn: 'Champaran Handi Chicken',
    nameHi: 'चम्पारण हांडी चिकन',
    descriptionEn: 'Classic Champaran Handi Chicken - perfectly spiced and tender. Includes: Chicken, Gravy, Spices, Ghee',
    descriptionHi: 'क्लासिक चम्पारण हांडी चिकन - बिल्कुल सही मसालेदार और नरम। शामिल: चिकन, ग्रेवी, मसाले, घी',
    price: 600,
    originalPrice: 900,
    category: 'handi-specials',
    image: champaranHandiChicken,
    isVeg: false,
    isSpecial: true,
    spiceLevel: 2,
    pricingType: 'per-kg',
    includes: {
      en: ['Fresh Chicken', 'Special Gravy', 'Secret Spices', 'Pure Ghee'],
      hi: ['ताजा चिकन', 'स्पेशल ग्रेवी', 'गुप्त मसाले', 'शुद्ध घी'],
    },
  },
  {
    id: 'champaran-handi-mutton-family',
    nameEn: 'Champaran Handi Mutton Family Pack',
    nameHi: 'चम्पारण हांडी मटन फैमिली पैक',
    descriptionEn: 'Large portion perfect for family gatherings. Serves 4-5 people. Includes: 2kg Mutton, Rich Gravy, Premium Spices, Extra Ghee',
    descriptionHi: 'परिवार के लिए बड़ा पोर्शन। 4-5 लोगों के लिए। शामिल: 2 किलो मटन, रिच ग्रेवी, प्रीमियम मसाले, एक्स्ट्रा घी',
    price: 1200,
    originalPrice: 1500,
    discount: 15,
    category: 'handi-specials',
    image: champaranHandiFamily1,
    image2: champaranHandiFamily2,
    isVeg: false,
    isSpecial: true,
    spiceLevel: 3,
    pricingType: 'per-kg',
    includes: {
      en: ['2kg Fresh Mutton', 'Rich Gravy', 'Premium Spices', 'Extra Ghee'],
      hi: ['2 किलो ताजा मटन', 'रिच ग्रेवी', 'प्रीमियम मसाले', 'एक्स्ट्रा घी'],
    },
  },
  {
    id: 'kadhai-chicken-handi',
    nameEn: 'Kadhai Chicken',
    nameHi: 'कढ़ाई चिकन',
    descriptionEn: 'Tender chicken pieces cooked in handi style with aromatic spices. Includes: Chicken, Bell Peppers, Tomatoes, Spices',
    descriptionHi: 'सुगंधित मसालों के साथ हांडी स्टाइल में पकाए गए नरम चिकन के टुकड़े। शामिल: चिकन, शिमला मिर्च, टमाटर, मसाले',
    price: 500,
    category: 'handi-specials',
    image: kadhaiChicken,
    isVeg: false,
    spiceLevel: 2,
    pricingType: 'per-kg',
    includes: {
      en: ['Fresh Chicken', 'Bell Peppers', 'Tomatoes', 'Aromatic Spices'],
      hi: ['ताजा चिकन', 'शिमला मिर्च', 'टमाटर', 'सुगंधित मसाले'],
    },
  },

  // Starters - Per Piece pricing
  {
    id: 'chicken-seekh-kebab',
    nameEn: 'Chicken Seekh Kebab',
    nameHi: 'चिकन सीख कबाब',
    descriptionEn: 'Juicy minced chicken kebabs grilled to perfection on skewers.',
    descriptionHi: 'सीख पर ग्रिल किए गए रसीले कीमा चिकन कबाब।',
    price: 100,
    category: 'starters',
    image: chickenSeekh,
    isVeg: false,
    spiceLevel: 2,
    pricingType: 'per-piece',
  },
  {
    id: 'tandoori-murgh-full',
    nameEn: 'Tandoori Murgh Full',
    nameHi: 'तंदूरी मुर्ग फुल',
    descriptionEn: 'Full chicken marinated overnight and roasted in tandoor with special spices.',
    descriptionHi: 'रात भर मैरीनेट किया हुआ पूरा चिकन तंदूर में भुना हुआ।',
    price: 500,
    category: 'starters',
    image: tandooriMurgh1,
    image2: tandooriMurgh2,
    isVeg: false,
    spiceLevel: 2,
    pricingType: 'per-piece',
  },
  {
    id: 'chicken-double-leg',
    nameEn: 'Chicken Stick Double Leg',
    nameHi: 'चिकन स्टिक डबल लेग',
    descriptionEn: 'Double leg portion marinated and roasted in clay oven.',
    descriptionHi: 'मिट्टी के ओवन में भुना हुआ डबल लेग पोर्शन।',
    price: 150,
    category: 'starters',
    image: chickenDoubleLeg1,
    image2: chickenDoubleLeg2,
    isVeg: false,
    spiceLevel: 2,
    pricingType: 'per-piece',
  },

  // Main Course - Thali with includes
  {
    id: 'mutton-handi-thali',
    nameEn: 'Mutton Handi Thali',
    nameHi: 'मटन हांडी थाली',
    descriptionEn: 'Complete thali with mutton curry and accompaniments.',
    descriptionHi: 'मटन करी और साइड डिश के साथ पूरी थाली।',
    price: 300,
    category: 'main-course',
    image: muttonHandiThali,
    isVeg: false,
    spiceLevel: 2,
    pricingType: 'thali',
    includes: {
      en: ['Mutton Curry', '4 Roti', 'Rice', 'Salad', 'Pickle'],
      hi: ['मटन करी', '4 रोटी', 'चावल', 'सलाद', 'अचार'],
    },
  },
  {
    id: 'chicken-handi-thali',
    nameEn: 'Chicken Handi Thali',
    nameHi: 'चिकन हांडी थाली',
    descriptionEn: 'Home-style chicken curry thali with all accompaniments.',
    descriptionHi: 'घर जैसी चिकन करी थाली सभी साइड डिश के साथ।',
    price: 200,
    category: 'main-course',
    image: chickenHandiThali1,
    image2: chickenHandiThali2,
    isVeg: false,
    spiceLevel: 2,
    pricingType: 'thali',
    includes: {
      en: ['Chicken Curry', '4 Roti', 'Rice', 'Salad', 'Pickle'],
      hi: ['चिकन करी', '4 रोटी', 'चावल', 'सलाद', 'अचार'],
    },
  },
  {
    id: 'kadhai-chicken-thali',
    nameEn: 'Kadhai Chicken Thali',
    nameHi: 'कढ़ाई चिकन थाली',
    descriptionEn: 'Spicy kadhai chicken thali with bell peppers and tomatoes.',
    descriptionHi: 'शिमला मिर्च और टमाटर के साथ मसालेदार कढ़ाई चिकन थाली।',
    price: 130,
    category: 'main-course',
    image: kadhaiChickenThali1,
    image2: kadhaiChickenThali2,
    isVeg: false,
    spiceLevel: 3,
    pricingType: 'thali',
    includes: {
      en: ['Kadhai Chicken', '3 Roti', 'Rice', 'Salad', 'Green Chutney'],
      hi: ['कढ़ाई चिकन', '3 रोटी', 'चावल', 'सलाद', 'हरी चटनी'],
    },
  },
  {
    id: 'butter-chicken-thali',
    nameEn: 'Butter Chicken Thali',
    nameHi: 'बटर चिकन थाली',
    descriptionEn: 'Creamy butter chicken thali with tender chicken pieces.',
    descriptionHi: 'नरम चिकन के टुकड़ों के साथ क्रीमी बटर चिकन थाली।',
    price: 200,
    category: 'main-course',
    image: butterChickenThali1,
    image2: butterChickenThali2,
    isVeg: false,
    spiceLevel: 1,
    pricingType: 'thali',
    includes: {
      en: ['Butter Chicken', '4 Roti', 'Rice', 'Raita', 'Pickle'],
      hi: ['बटर चिकन', '4 रोटी', 'चावल', 'रायता', 'अचार'],
    },
  },

  // Biryani - Full/Half plate pricing
  {
    id: 'mutton-biryani',
    nameEn: 'Mutton Biryani',
    nameHi: 'मटन बिरयानी',
    descriptionEn: 'Aromatic basmati rice layered with spiced mutton and dum-cooked.',
    descriptionHi: 'मसालेदार मटन के साथ परत में सुगंधित बासमती चावल और दम पर पकाया गया।',
    price: 180,
    halfPrice: 100,
    category: 'biryani',
    image: muttonBiryani,
    isVeg: false,
    spiceLevel: 2,
    pricingType: 'full-half',
  },
  {
    id: 'chicken-biryani',
    nameEn: 'Chicken Biryani',
    nameHi: 'चिकन बिरयानी',
    descriptionEn: 'Fragrant biryani with succulent chicken pieces.',
    descriptionHi: 'रसीले चिकन के टुकड़ों के साथ सुगंधित बिरयानी।',
    price: 120,
    halfPrice: 70,
    category: 'biryani',
    image: chickenBiryani,
    isVeg: false,
    spiceLevel: 2,
    pricingType: 'full-half',
  },

  // Breads - Per Unit pricing
  {
    id: 'tawa-roti',
    nameEn: 'Tawa Roti',
    nameHi: 'तवा रोटी',
    descriptionEn: 'Fresh whole wheat bread cooked on tawa.',
    descriptionHi: 'तवे पर पकी ताजी गेहूं की रोटी।',
    price: 6,
    category: 'breads',
    image: tawaRoti,
    isVeg: true,
    pricingType: 'per-unit',
  },
  {
    id: 'butter-roti',
    nameEn: 'Butter Roti',
    nameHi: 'बटर रोटी',
    descriptionEn: 'Soft roti brushed with butter.',
    descriptionHi: 'मक्खन से सजी नरम रोटी।',
    price: 10,
    category: 'breads',
    image: butterRoti,
    isVeg: true,
    pricingType: 'per-unit',
  },
  {
    id: 'desi-ghee-litti',
    nameEn: 'Desi Ghee Litti',
    nameHi: 'देसी घी लिट्टी',
    descriptionEn: 'Traditional Bihari litti served with pure desi ghee.',
    descriptionHi: 'शुद्ध देसी घी के साथ परोसी गई पारंपरिक बिहारी लिट्टी।',
    price: 15,
    category: 'breads',
    image: desiGheeLitti,
    isVeg: true,
    pricingType: 'per-unit',
  },
  {
    id: 'litti',
    nameEn: 'Litti',
    nameHi: 'लिट्टी',
    descriptionEn: 'Traditional Bihari stuffed wheat balls.',
    descriptionHi: 'पारंपरिक बिहारी भरवां गेहूं के गोले।',
    price: 10,
    category: 'breads',
    image: litti,
    isVeg: true,
    pricingType: 'per-unit',
  },
  {
    id: 'laccha-paratha',
    nameEn: 'Laccha Paratha',
    nameHi: 'लच्छा पराठा',
    descriptionEn: 'Multi-layered flaky paratha.',
    descriptionHi: 'बहु-परत वाला खस्ता पराठा।',
    price: 20,
    category: 'breads',
    image: lacchaParatha,
    isVeg: true,
    pricingType: 'per-unit',
  },
  {
    id: 'rumali-roti',
    nameEn: 'Rumali Roti',
    nameHi: 'रुमाली रोटी',
    descriptionEn: 'Thin and soft handkerchief bread.',
    descriptionHi: 'पतली और मुलायम रुमाली रोटी।',
    price: 10,
    category: 'breads',
    image: rumaliRoti,
    isVeg: true,
    pricingType: 'per-unit',
  },

  // Rice - Full/Half plate pricing
  {
    id: 'steamed-rice',
    nameEn: 'Steamed Rice',
    nameHi: 'स्टीम्ड राइस',
    descriptionEn: 'Plain steamed basmati rice.',
    descriptionHi: 'सादा उबला बासमती चावल।',
    price: 40,
    halfPrice: 25,
    category: 'rice',
    image: rice,
    isVeg: true,
    pricingType: 'full-half',
  },
  {
    id: 'jeera-rice',
    nameEn: 'Jeera Rice',
    nameHi: 'जीरा राइस',
    descriptionEn: 'Basmati rice tempered with cumin seeds.',
    descriptionHi: 'जीरे के साथ तड़का लगाया बासमती चावल।',
    price: 50,
    halfPrice: 30,
    category: 'rice',
    image: rice,
    isVeg: true,
    pricingType: 'full-half',
  },

  // Beverages - Simple pricing
  {
    id: 'water',
    nameEn: 'Mineral Water',
    nameHi: 'मिनरल वाटर',
    descriptionEn: 'Packaged drinking water.',
    descriptionHi: 'पैकेज्ड पीने का पानी।',
    price: 20,
    category: 'beverages',
    image: water,
    isVeg: true,
    pricingType: 'simple',
  },
  {
    id: 'cold-drinks',
    nameEn: 'Cold Drinks',
    nameHi: 'कोल्ड ड्रिंक्स',
    descriptionEn: 'Assorted cold beverages.',
    descriptionHi: 'विभिन्न ठंडे पेय।',
    price: 30,
    category: 'beverages',
    image: coldDrinks,
    isVeg: true,
    pricingType: 'simple',
  },
];
