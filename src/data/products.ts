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

import handTied from '../assets/photos/hardy-bouquet.jpg';
import twoBouquets from '../assets/photos/two-bouquets.jpg';
import dahlia from '../assets/photos/sophia-dahlia.jpg';
import wild from '../assets/photos/wild-bouquet.jpg';
import orchid from '../assets/photos/orchid-vase.jpg';
import peony from '../assets/photos/sophia-peony.jpg';
import cream from '../assets/photos/sophia-bouquet-cream.jpg';
import wreath from '../assets/photos/wreath-workshop.jpg';

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
    summary: "Florist's choice of the best seasonal stems, wrapped in kraft and blush.",
    description: [
      "Tell me the occasion and the colours they love, and I'll design a bouquet just for them from the best seasonal stems of the week.",
      'Every bouquet is hand-tied to order and wrapped in kraft and blush paper with a Fia Florals card.',
    ],
    images: [
      { src: handTied, alt: 'Cream rose, peony and eucalyptus bouquet wrapped in kraft paper' },
      { src: twoBouquets, alt: 'Two pink hydrangea bouquets in blush wrap with Fia Florals boxes' },
      { src: dahlia, alt: 'Dahlia and purple hydrangea bouquet in clear wrap' },
      { src: wild, alt: 'Wild, garden-style bouquet with sweet peas and eucalyptus' },
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
      'A statement arrangement designed in a vase, so it goes straight onto the table, the mantelpiece or the reception desk.',
      'Perfect for gifts, offices and anyone who would rather not arrange flowers themselves.',
    ],
    images: [
      { src: orchid, alt: 'Pink orchid, anthurium and eucalyptus arrangement in a green glass vase' },
      { src: cream, alt: 'Large bouquet of calla lilies, hydrangea and amaranthus' },
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
      { src: peony, alt: 'Sophia holding a peony, gerbera and sea lavender bouquet' },
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
