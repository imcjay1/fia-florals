// ─────────────────────────────────────────────────────────────
// Shop products.
//
// HOW PAYMENTS WORK
// Each option below has a `stripe` field. Paste the matching Stripe Payment Link
// (Stripe dashboard → Payment Links → New) and that button goes straight to checkout.
// Leave it empty and the button becomes "Order on WhatsApp" with the choice pre-filled,
// so the shop works from day one.
//
// `price` is only the label shown on the site (e.g. '£45'). Leave it empty to hide it.
// The amount actually charged is always the one set in Stripe.
// ─────────────────────────────────────────────────────────────

import dahlia from '../assets/photos/sophia-dahlia.jpg';
import orchid from '../assets/photos/orchid-vase.jpg';
import wreath from '../assets/photos/wreath-workshop.jpg';
import { photos as g } from './gallery';

export type Choice = { label: string; note?: string };
export type Option = { key: string; price: string; stripe: string };

export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string[];
  images: { src: ImageMetadata; alt: string }[];
  kind: 'one-off' | 'subscription' | 'voucher';
  /** First selector shown on the product page (usually Size). */
  primary: { legend: string; choices: Choice[] };
  /** Optional second selector (Frequency for subscriptions). */
  secondary?: { legend: string; choices: Choice[] };
  /** One entry per combination. Key = "Primary" or "Primary|Secondary". */
  options: Option[];
  showPalette: boolean;
  checkoutNote: string;
  seo: { title: string; description: string };
};

export const palettes = [
  { id: 'florists-choice', label: "Let Sophia choose", a: '#C48D88', b: '#C9D5B5' },
  { id: 'soft-pastels', label: 'Soft pastels', a: '#F4C2B9', b: '#E7DDF2' },
  { id: 'bold-bright', label: 'Bold & bright', a: '#D9365E', b: '#F2A23A' },
  { id: 'whites-greens', label: 'Whites & greens', a: '#F7F3EA', b: '#9DB58A' },
];

const sizes = [{ label: 'Small' }, { label: 'Medium' }, { label: 'Large' }];

export const products: Product[] = [
  {
    slug: 'hand-tied-bouquet',
    name: 'Hand-tied bouquet',
    eyebrow: "Florist's choice",
    summary: "Florist's choice of the best seasonal stems, layered in paper and set in a Fia Florals box or bag.",
    description: [
      "Tell me the occasion and the colours they love, and I'll design a bouquet just for them from the best seasonal stems of the week: big hydrangea heads, dahlias, roses, sea holly, delphinium, whatever is looking its best.",
      'Every bouquet is hand-tied to order and wrapped in layers of paper (kraft over blush, olive, lilac or ivory, depending on the flowers), then stood in a Fia Florals box or a gift bag with rope handles and finished with a round Fia Florals sticker.',
      'It comes with a card for your message and a card on caring for your flowers.',
    ],
    images: [
      { src: g.bqSophiaTwo.src, alt: g.bqSophiaTwo.alt },
      { src: g.bqDelphiniumBox.src, alt: g.bqDelphiniumBox.alt },
      { src: g.bqBrickBox.src, alt: g.bqBrickBox.alt },
      { src: g.bqWhiteBox.src, alt: g.bqWhiteBox.alt },
      { src: g.bqLilacSageBox.src, alt: g.bqLilacSageBox.alt },
      { src: g.bqRedRosesSageBox.src, alt: g.bqRedRosesSageBox.alt },
      { src: g.winterBox.src, alt: g.winterBox.alt },
      { src: g.bqWhiteCloseup.src, alt: g.bqWhiteCloseup.alt },
    ],
    kind: 'one-off',
    primary: { legend: 'Size', choices: sizes },
    options: [
      { key: 'Small', price: '', stripe: '' },
      { key: 'Medium', price: '', stripe: '' },
      { key: 'Large', price: '', stripe: '' },
    ],
    showPalette: true,
    checkoutNote: "At checkout you'll add the delivery address or choose collection, the date you need them and your card message.",
    seo: {
      title: 'Hand-tied bouquets — flower delivery in Manchester',
      description:
        'Bespoke hand-tied bouquets designed to order by Manchester florist Fia Florals. Choose your size and colours, then delivery or collection.',
    },
  },
  {
    slug: 'vase-arrangement',
    name: 'Vase arrangement',
    eyebrow: 'Ready to display',
    summary: 'Arrives ready to display — no trimming, no hunting for a vase.',
    description: [
      'A statement arrangement designed in a vase, so it goes straight onto the table, the mantelpiece or the reception desk: sunflowers and peonies in blue glass, yellow orchids in a pink glass bottle, or trailing amaranthus in a tall black vase.',
      'Perfect for gifts, offices and anyone who would rather not arrange flowers themselves.',
    ],
    images: [
      { src: g.bqSunflowerVase.src, alt: g.bqSunflowerVase.alt },
      { src: g.bqOrchidVase.src, alt: g.bqOrchidVase.alt },
      { src: g.bqAmaranthusVase.src, alt: g.bqAmaranthusVase.alt },
      { src: g.bqStripedVase.src, alt: g.bqStripedVase.alt },
      { src: orchid, alt: 'Pink orchid, anthurium and eucalyptus arrangement in a green glass vase' },
    ],
    kind: 'one-off',
    primary: { legend: 'Size', choices: sizes },
    options: [
      { key: 'Small', price: '', stripe: '' },
      { key: 'Medium', price: '', stripe: '' },
      { key: 'Large', price: '', stripe: '' },
    ],
    showPalette: true,
    checkoutNote: "At checkout you'll add the delivery address or choose collection, the date you need it and your card message.",
    seo: {
      title: 'Vase arrangements — Manchester florist',
      description:
        'Fresh flower arrangements delivered in a vase, ready to display. Designed to order by Fia Florals, Manchester.',
    },
  },
  {
    slug: 'flower-subscription',
    name: 'Flower subscription',
    eyebrow: 'Fresh flowers, on repeat',
    summary: 'Weekly, fortnightly or monthly, delivered or ready to collect.',
    description: [
      'Brighten your home or elevate a workspace with seasonal blooms in rotation — set it up once and I handle the rest.',
      'Choose a hand-tied bouquet, or a vase arrangement with the vase swapped at every delivery.',
    ],
    images: [
      { src: g.bqSophiaSeated.src, alt: g.bqSophiaSeated.alt },
      { src: g.bqHydrangeaWhite.src, alt: g.bqHydrangeaWhite.alt },
      { src: g.bqGardenBox.src, alt: g.bqGardenBox.alt },
      { src: dahlia, alt: 'Dahlia and purple hydrangea subscription bouquet' },
    ],
    kind: 'subscription',
    primary: { legend: 'Size', choices: sizes },
    secondary: {
      legend: 'How often',
      choices: [{ label: 'Weekly' }, { label: 'Fortnightly' }, { label: 'Monthly' }],
    },
    options: [
      { key: 'Small|Weekly', price: '', stripe: '' },
      { key: 'Small|Fortnightly', price: '', stripe: '' },
      { key: 'Small|Monthly', price: '', stripe: '' },
      { key: 'Medium|Weekly', price: '', stripe: '' },
      { key: 'Medium|Fortnightly', price: '', stripe: '' },
      { key: 'Medium|Monthly', price: '', stripe: '' },
      { key: 'Large|Weekly', price: '', stripe: '' },
      { key: 'Large|Fortnightly', price: '', stripe: '' },
      { key: 'Large|Monthly', price: '', stripe: '' },
    ],
    showPalette: false,
    checkoutNote:
      "At checkout you'll choose hand-tied or vase, delivery or collection, and your start date. Billing repeats automatically at the frequency you pick.",
    seo: {
      title: 'Flower subscription Manchester — weekly, fortnightly or monthly',
      description:
        'Seasonal flowers on repeat from Fia Florals. Hand-tied or vase arrangement, weekly, fortnightly or monthly, delivered or ready to collect in Manchester.',
    },
  },
  {
    slug: 'gift-voucher',
    name: 'Gift voucher',
    eyebrow: 'The gift of flowers',
    summary: 'For bouquets, subscriptions or a place at a workshop.',
    description: [
      'Let them choose — a Fia Florals gift voucher can be spent on bouquets, subscriptions or a floristry workshop.',
      'Choose the amount at checkout and the voucher is emailed to you to pass on.',
    ],
    images: [{ src: wreath, alt: 'Two friends holding the Christmas wreaths they made at a Fia Florals workshop' }],
    kind: 'voucher',
    primary: { legend: 'Voucher', choices: [{ label: 'Choose your amount', note: 'Set at checkout' }] },
    options: [{ key: 'Choose your amount', price: '', stripe: '' }],
    showPalette: false,
    checkoutNote: 'Enter the amount and the recipient’s name at checkout. Your voucher code arrives by email.',
    seo: {
      title: 'Flower & workshop gift vouchers — Fia Florals Manchester',
      description:
        'Gift vouchers for bespoke bouquets, flower subscriptions and floristry workshops from Fia Florals, Manchester.',
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

/** Lowest price label across a product's options, for "From £x" on cards. Empty when no prices set. */
export const fromPrice = (p: Product) => {
  const nums = p.options
    .map((o) => parseFloat(o.price.replace(/[^0-9.]/g, '')))
    .filter((n) => !Number.isNaN(n));
  return nums.length ? `From £${Math.min(...nums).toFixed(nums.some((n) => n % 1) ? 2 : 0)}` : '';
};
