// ============================================================
// AGRIENGO™ — Site-wide Constants
// ============================================================

export const BRAND = {
  name: 'AGRIENGO™',
  fullName: 'The Agri Engineer Organic Farms',
  tagline: 'Healthy soil for a healthier planet.',
  trademark: 'Trademark Application No. 7673426',
  site: 'https://www.agriengo.in',
};

export const CONTACT = {
  phone: '+91 7753827648',
  email: 'contact@agriengo.in',
  website: 'www.agriengo.in',
  cellLabel: 'Consumer Wellness Cell',
};

export const SOCIAL = [
  {
    name: 'Instagram',
    handle: '@agriengo',
    url: 'https://instagram.com/agriengo',
    icon: 'instagram',
  },
  {
    name: 'Facebook',
    handle: '@agriengo',
    url: 'https://facebook.com/agriengo',
    icon: 'facebook',
  },
  {
    name: 'YouTube',
    handle: '@agriengo',
    url: 'https://youtube.com/@agriengo',
    icon: 'youtube',
  },
];

export const NAV_LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'Products',   href: '/products' },
  { label: 'How to Use', href: '/how-to-use' },
  { label: 'Blog',       href: '/blog' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
];

export const PRODUCTS = [
  {
    id: 'vermicompost-1kg',
    name: 'AGRIENGO Premium Vermi Compost',
    weight: '1 KG',
    tag: 'Starter',
    tagIcon: 'leaf',
    slug: 'vermicompost-1kg',
    description:
      'Perfect for home gardeners and indoor plants. Premium Grade-A NPK enriched vermicompost for healthy soil and thriving plants.',
    benefits: [
      'Enriches Soil Structure',
      'Promotes Seed Germination',
      'Enhances Root Health',
      'Boosts Microbial Activity',
      'Rich in Nutrients',
    ],
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com',
    },
  },
  {
    id: 'vermicompost-2kg',
    name: 'AGRIENGO Premium Vermi Compost',
    weight: '2 KG',
    tag: 'Most Popular',
    tagIcon: 'leaf',
    slug: 'vermicompost-2kg',
    description:
      'Our best-selling size — ideal for kitchen gardens, terrace farms, and potted plants. Trusted by thousands of organic gardeners.',
    benefits: [
      'Enriches Soil Structure',
      'Promotes Seed Germination',
      'Enhances Root Health',
      'Boosts Microbial Activity',
      'Rich in Nutrients',
    ],
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com',
    },
  },
  {
    id: 'vermicompost-5kg',
    name: 'AGRIENGO Premium Vermi Compost',
    weight: '5 KG',
    tag: 'Best Value',
    tagIcon: 'lightning',
    slug: 'vermicompost-5kg',
    description:
      'Maximum value for serious gardeners and small farms. Long-lasting supply of premium organic fertiliser at the best price per kg.',
    benefits: [
      'Enriches Soil Structure',
      'Promotes Seed Germination',
      'Enhances Root Health',
      'Boosts Microbial Activity',
      'Rich in Nutrients',
    ],
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com',
    },
  },
];

export const MARKETPLACES = [
  {
    name: 'Amazon',
    type: 'ecommerce',
    url: 'https://amazon.in',
    description: 'Free delivery with Prime',
    icon: 'cart',
  },
  {
    name: 'Flipkart',
    type: 'ecommerce',
    url: 'https://flipkart.com',
    description: 'Easy returns & fast shipping',
    icon: 'cart',
  },
  {
    name: 'Blinkit',
    type: 'quick',
    url: 'https://blinkit.com',
    description: 'Delivered in 10 minutes',
    icon: 'lightning',
  },
  {
    name: 'Zepto',
    type: 'quick',
    url: 'https://www.zepto.com',
    description: 'Ultra-fast delivery',
    icon: 'lightning',
  },
  {
    name: 'BigBasket',
    type: 'quick',
    url: 'https://bigbasket.com',
    description: 'Fresh & organic delivery',
    icon: 'cart',
  },
  {
    name: 'Swiggy Instamart',
    type: 'quick',
    url: 'https://swiggy.com/instamart',
    description: 'Minutes away from you',
    icon: 'lightning',
  },
];

export const TRUST_BADGES = [
  { label: 'Lab Tested',    icon: 'beaker' },
  { label: '100% Organic',  icon: 'leaf' },
  { label: 'Grade-A NPK',   icon: 'shield' },
];

export const FOOTER_LINKS = {
  explore: [
    { label: 'Home',       href: '/' },
    { label: 'Products',   href: '/products' },
    { label: 'How to Use', href: '/how-to-use' },
    { label: 'Blog',       href: '/blog' },
    { label: 'About Us',   href: '/about' },
  ],
  support: [
    { label: 'Where to Buy',  href: '/where-to-buy' },
    { label: 'Contact Us',    href: '/contact' },
    { label: 'FAQ',           href: '/how-to-use#faq' },
  ],
  legal: [
    { label: 'Terms & Conditions',    href: '/legal/terms-and-conditions' },
    { label: 'Privacy Policy',        href: '/legal/privacy-policy' },
    { label: 'Trademark Notice',      href: '/legal/trademark-notice' },
    { label: 'Shipping & Returns',    href: '/legal/shipping-returns' },
  ],
};
