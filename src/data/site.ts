// ─────────────────────────────────────────────────────────────
// Fia Florals — business details used across the whole site.
// Edit here and every page, the footer and Google's structured data update together.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Fia Florals',
  tagline: 'Flowers & more',
  owner: 'Sophia',
  city: 'Manchester',
  phone: '07786 671051',
  phoneIntl: '+447786671051',
  email: 'fiafloralsbysophia@gmail.com',
  whatsapp: 'https://wa.me/447786671051',
  description:
    'Manchester florist making bespoke bouquets, wedding and funeral flowers, flower subscriptions and floristry workshops. Every bunch designed from scratch and handmade by Sophia.',
};

export const socials = [
  { name: 'Instagram', handle: '@fiaflorals', url: 'https://www.instagram.com/fiaflorals/' },
  { name: 'Facebook', handle: 'Fia Florals', url: 'https://www.facebook.com/profile.php?id=61576576845075' },
  { name: 'TikTok', handle: '@fia.florals', url: 'https://www.tiktok.com/@fia.florals' },
  { name: 'Threads', handle: '@fiaflorals', url: 'https://www.threads.com/@fiaflorals' },
];

// Enquiry and newsletter forms.
// Create a free access key at https://web3forms.com using Sophia's email address and paste it below.
// Until a key is added, every form still works: it opens the visitor's email app with their answers filled in.
export const forms = {
  web3formsKey: '',
  endpoint: 'https://api.web3forms.com/submit',
};

// Google review link — paste the "Ask for reviews" link from Sophia's Google Business Profile once it is verified.
// While empty, review buttons are hidden.
export const googleReviewUrl = '';

// Thin bar at the very top of every page. Set `show: false` to hide it.
export const announcement = {
  show: true,
  text: 'Christmas wreath workshops now booking — Thursday 19 November at 3SIXTY, Newcastle',
  linkText: 'Get tickets',
  href: '/workshops',
  // The bar hides itself automatically after this date.
  until: '2026-11-19',
};

export const nav = [
  { label: 'Shop', href: '/shop' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Funeral flowers', href: '/funeral-flowers' },
  { label: 'Subscriptions', href: '/shop/flower-subscription' },
  { label: 'About', href: '/about' },
];
