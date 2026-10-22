# Fia Florals — website

Bespoke florist website for Fia Florals (Sophia, Manchester). Built with [Astro](https://astro.build), hosted on Netlify (free plan allows commercial sites), payments through Stripe Payment Links, workshop tickets through Ticket Tailor.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Homepage — every service, shop preview, workshops, wedding date checker, enquiry form |
| `/shop` | All products |
| `/shop/hand-tied-bouquet`, `/shop/vase-arrangement`, `/shop/flower-subscription`, `/shop/gift-voucher` | Product pages with size / colour / frequency choice → Stripe checkout |
| `/weddings` | Wedding date checker + wedding enquiry form |
| `/workshops` | Upcoming workshops (Ticket Tailor) + private workshop enquiry |
| `/funeral-flowers` | Funeral tributes + gentle enquiry form |
| `/events-business` | Weekly business flowers, events, client gifts |
| `/christmas-wreaths` | Seasonal landing page |
| `/about`, `/contact`, `/delivery-faqs`, `/privacy`, `/terms` | |

SEO built in: unique titles and descriptions per page, canonical URLs, Open Graph images, `sitemap-index.xml`, `robots.txt`, and structured data (Florist local business on every page, Product, Event, FAQPage, BreadcrumbList).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Go live (one-off setup)

1. **Netlify** — app.netlify.com → Add new site → Import from GitHub → this repo. Build settings come from `netlify.toml`. Deploy.
2. **Domain** — Netlify → Domain management → add Sophia's domain and follow the DNS instructions. Canonical links and the sitemap follow the primary domain automatically on the next deploy.
3. **Forms** — go to web3forms.com, enter `fiafloralsbysophia@gmail.com`, copy the access key into `forms.web3formsKey` in `src/data/site.ts`. Until then every form opens the visitor's email app with their answers filled in.
4. **Stripe** — in Sophia's Stripe account create one Payment Link per option and paste each into `src/data/products.ts` (see below). Until a link is added, that option's button says "Order on WhatsApp" with the choice pre-filled.
5. **Google** — verify her Google Business Profile, add the website, then paste the "Ask for reviews" link into `googleReviewUrl` in `src/data/site.ts`. Submit `https://her-domain/sitemap-index.xml` in Google Search Console.

### Stripe Payment Links — settings for each link

Stripe dashboard → Payment Links → New:

- **Bouquets and vase arrangements** (one link per size): one-off price. Turn on *Collect customers' addresses* (shipping), *Collect phone number*, and add custom fields:
  1. Dropdown — "Delivery or collection" (Delivery / Collection)
  2. Text — "Date you need them"
  3. Text — "Card message"
- **Subscriptions** (one link per size × frequency, 9 in total): recurring price (weekly / every 2 weeks / monthly). Custom fields: "Hand-tied or vase", "Delivery or collection", "Start date".
- **Gift voucher**: one link using *Let customers choose what to pay*. Custom field: "Recipient's name".
- After payment: *Don't show confirmation page* → redirect to `https://her-domain/thank-you` is optional; Stripe's own confirmation page is fine.

The website adds `client_reference_id` to each link (e.g. `hand-tied-bouquet_medium_soft-pastels`) so Sophia sees the chosen colour palette on the payment in Stripe.

Optionally set a `price` label (e.g. `'£45'`) next to each link to show prices on the site. The amount charged is always the one in Stripe.

## Everyday edits

All content Sophia is likely to change lives in `src/data/`:

| File | What's in it |
| --- | --- |
| `site.ts` | Phone, email, socials, the announcement bar, form key, Google review link |
| `products.ts` | Products, sizes, Stripe links, price labels, photos |
| `content.ts` | Workshop dates, wedding dates already booked, reviews, FAQs |

Commit to `main` and Netlify redeploys automatically in about a minute. Past workshop dates hide themselves.

## Before launch — check with Sophia

- Prices for every size (for the price labels) and her Stripe account
- Delivery area and charges, collection point, order cut-off → add to `/delivery-faqs`
- Wedding dates already booked → `bookedWeddingDates` in `content.ts`
- Permission from Becca, Jack and Sophie to show their reviews
- The funeral tribute list on `/funeral-flowers` and the draft terms on `/terms`
- Full-resolution original photos to replace the Instagram copies in `src/assets/photos/`
