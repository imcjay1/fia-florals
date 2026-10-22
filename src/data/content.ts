// ─────────────────────────────────────────────────────────────
// Workshops, wedding dates, reviews and FAQs.
// ─────────────────────────────────────────────────────────────

import wreathPhoto from '../assets/photos/wreath-workshop.jpg';
import pumpkinPhoto from '../assets/photos/pumpkin-workshop.jpg';

// Upcoming public workshops. Past dates hide themselves automatically.
// `date` and `endTime` use 24-hour time; `tickets` is the Ticket Tailor (or venue) booking link.
export const workshops = [
  {
    id: 'festive-wreath-3sixty-2026',
    name: 'Festive Wreath Workshop',
    date: '2026-11-19T18:30',
    endTime: '20:00',
    venue: '3SIXTY Sky Bar & Restaurant',
    town: 'Newcastle upon Tyne',
    address: '27 Rutherford Street', postcode: 'NE4 5BJ',
    price: '£50',
    priceValue: 50,
    blurb: 'Twenty-six floors above Newcastle. A festive cocktail on arrival, all materials included, and a fresh wreath to take home.',
    tickets: 'https://www.tickettailor.com/events/fiaflorals/2488556',
    image: wreathPhoto,
    imageAlt: 'Two guests holding the fresh Christmas wreaths they made',
  },
];

// Workshops already run — shown as proof on the Workshops page.
export const pastWorkshops = [
  { name: 'Summer Floral Workshop', where: 'Hatters Food Hall, Denton', when: 'August 2026' },
  { name: 'Pumpkin Floral Workshop', where: 'Hatters Food Hall, Denton', when: 'October 2026' },
];

export const privateWorkshopPhoto = { src: pumpkinPhoto, alt: 'Workshop guests behind the pumpkin floral centrepieces they made' };

// Wedding dates Sophia is already fully booked on (YYYY-MM-DD).
// The date checker on /weddings marks these as booked; every other date shows as available to enquire.
export const bookedWeddingDates: string[] = [];

// Reviews. Only publish quotes the customer has agreed to share.
export const reviews = [
  { quote: 'I love how every bunch is so unique, but you can still see your style in them all.', name: 'Becca', source: 'Instagram' },
  { quote: 'Exceptional personal service.', name: 'Jack', source: 'Facebook' },
  { quote: 'Beautiful, and full of so much love with each arrangement.', name: 'Sophie', source: 'Instagram' },
];

export const businessQuote = {
  quote: 'Every arrangement is made by Fia Florals, another small local business. So each bouquet supports two local businesses, not just one.',
  name: 'LM Stone Creative',
  context: 'weekly showroom flowers, Hyde',
};

// Frequently asked questions — only answers Sophia has confirmed.
export const faqs = [
  {
    q: 'Do you deliver or can I collect?',
    a: 'Both. Choose delivery or collection when you order, and pick the date you need your flowers.',
  },
  {
    q: 'Can I choose the flowers in my bouquet?',
    a: "Tell me the occasion and the colours you love and I'll design around them using the best seasonal stems of the week. Every bouquet is made to order, so no two are the same.",
  },
  {
    q: 'How do flower subscriptions work?',
    a: 'Choose a hand-tied bouquet or a vase arrangement, pick your size, then weekly, fortnightly or monthly, and delivery or collection. With a vase subscription the vase is swapped at every delivery.',
  },
  {
    q: 'Do I need any experience for a workshop?',
    a: 'None at all. I guide you through every step and you take home what you make.',
  },
  {
    q: 'Can you run a private workshop for my group?',
    a: "Yes — at your home, your workplace or on a weekend away. Send a private workshop enquiry with your date and group size and I'll come back to you.",
  },
  {
    q: 'Do you do wedding flowers?',
    a: 'Yes, from bridal bouquets and buttonholes to table and ceremony flowers. My diary is open for weddings all year round — check your date on the weddings page.',
  },
  {
    q: 'Can I add a card message?',
    a: 'Yes. Add your message at checkout and it goes in with the flowers.',
  },
];
