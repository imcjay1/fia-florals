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

// Enquiry and newsletter forms use Netlify Forms: submissions appear in Netlify → Forms
// and are emailed to Sophia (set under Forms → Form notifications).

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

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: 'Shop', href: '/shop' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Funeral flowers', href: '/funeral-flowers' },
  { label: 'Workshops', href: '/workshops' },
  {
    label: 'Flowers for',
    href: '/gallery',
    children: [
      { label: 'Events & business', href: '/events-business' },
      { label: 'Baby showers', href: '/baby-showers' },
      { label: 'Hen parties', href: '/hen-party-workshops' },
      { label: 'Floral dog collars', href: '/floral-dog-collars' },
      { label: 'Dried flowers', href: '/dried-flowers' },
      { label: 'Unique florals', href: '/unique-florals' },
      { label: 'Christmas & winter', href: '/christmas-wreaths' },
      { label: 'Flower subscriptions', href: '/shop/flower-subscription' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
];
