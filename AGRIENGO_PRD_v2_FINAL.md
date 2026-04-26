# AGRIENGO™
**The Agri Engineer Organic Farms**

agriengo.com | agriengo.in

**PRODUCT REQUIREMENTS DOCUMENT**
**Website Design & Development — v2.0**
Premium Vermi Compost — Grade-A NPK Enriched
Complete Brand Guidelines + Tech Stack + Site Architecture

**Document Version:** 2.0 — Final Brainstorm Edition
**Proprietor:** Pradeep Nagar
**Trademark:** Application No. 7673426, Class 1
**Primary Domain:** agriengo.in (301 from agriengo.com)
**Tech Stack:** Astro v5 + Bun + Tailwind CSS v4
**Animation:** Motion v11 + Motion Plus + GSAP v3 + Lenis
**Hosting:** Cloudflare Pages (full ecosystem)
**Icons:** design.dev (SVG inline)
**Date:** April 2026
**Status:** APPROVED FOR DEVELOPMENT

---

## Table of Contents

### 1. Executive Summary
AGRIENGO™ — The Agri Engineer Organic Farms is a registered trademark brand (Application No. 7673426, Class 1) owned by Pradeep Nagar. This PRD v2.0 is the definitive, consolidated document combining all product information, brand guidelines, technology decisions, site architecture, animation philosophy, AI scrapability strategy, and content planning discussed across all brainstorming sessions.

The website is a premium static showcase — not an e-commerce store. No prices are displayed anywhere. The goal is to build brand authority, educate the customer, and direct purchase intent to Amazon, Flipkart, Blinkit, Zepto, Big Basket, and Swiggy Instamart.

*"The website should feel like walking into a premium organic farm store that is also run by scientists who deeply love the earth."*

---

### 2. Brand Identity & Guidelines

#### 2.1 Brand Overview
- **Brand Name:** AGRIENGO™
- **Tagline:** The Agri Engineer Organic Farms
- **Core Promise:** Healthy soil is the foundation of a healthier planet
- **Personality:** Scientific · Trustworthy · Natural · Premium · Sustainable
- **Voice:** Knowledgeable yet approachable. Fact-driven. Earthy and organic.
- **Trademark:** Application No. 7673426, Class 1 — Vienna Codification Stage
- **Social Handle:** @agriengo — Instagram, Facebook, YouTube
- **Consumer Cell:** +91 7753827648
- **Email:** contact@agriengo.in
- **Website:** www.agriengo.in

**Important:** The TM symbol MUST appear after every instance of AGRIENGO across the website, packaging, and all communications until registration is confirmed.

#### 2.2 Brand Story
"At AGRIENGO, we believe healthy soil is the foundation of a healthier planet. Formulated with the precision of agricultural engineering and the purity of nature, our Grade-A Vermicompost is more than just a fertiliser — it is a bio-active soil superfood. We use a time-tested, 100% organic process to transform pure cow dung into a rich, slow-release nutrient blend. Packed with essential enzymes and beneficial microbes, AGRIENGO naturally restores soil vitality, ensuring stronger roots, vibrant blooms, and a sustainable harvest."

#### 2.3 Colour Palette
Derived from the product label and packaging. These values are locked — do not alter.

| Swatch | Role | HEX | Usage |
| :--- | :--- | :--- | :--- |
| Forest Green | Primary Dark | `#2D4A27` | Nav, Footer, Hero Overlay, Primary CTAs, H1 |
| Sage Green | Primary Light | `#4A7C59` | Section H2, Hover States, Secondary Accents |
| Harvest Gold | Secondary | `#C9A84C` | Dividers, Badges, CTA Buttons, Highlights |
| Warm Cream | Background | `#F5E6C8` | Page BG, Card BG, Section Alternates |
| Soil Brown | Accent | `#6B4226` | Sub-headings, Icon fills, Earthy elements |
| Deep Charcoal| Text Primary | `#1A1A1A` | All body text, paragraphs |
| Medium Grey | Text Secondary| `#555555` | Captions, Labels, Metadata |
| Pure White | Base | `#FFFFFF` | Cards, Text on dark bg, Section BG |

#### 2.4 Colour Background Rules
| Background | Logo / Text Version | Use For |
| :--- | :--- | :--- |
| White `#FFFFFF` | Full colour logo — PRIMARY | Product cards, content sections, forms |
| Warm Cream `#F5E6C8` | Full colour logo — SECONDARY | Page background, hero overlays |
| Forest Green `#2D4A27` | White / reverse logo ONLY | Nav, footer, dark section CTAs |
| Photography | White logo ONLY — never full colour | Hero banners with photo backgrounds |
| Any other colour | Monochrome version only | B&W print, embossed, stamps |

#### 2.5 Logo Rules — Do's and Don'ts
**DO — Correct Usage**
- Use on White or Warm Cream backgrounds
- Use White version on Forest Green backgrounds
- Maintain clear space = 1× logo height all sides
- Minimum digital width: 120px
- Always use SVG or high-res PNG files
- Always show TM symbol after AGRIENGO

**DON'T — Prohibited**
- Never change brand colours
- Never stretch, squish, or skew the logo
- Never place full-colour logo on dark backgrounds
- Never add drop shadows or glow effects
- Never use logo on photo backgrounds (use white version)
- Never use low-resolution or rasterised logo files

#### 2.6 Typography System
| Element | Font Family | Weight | Size (Desktop) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| Hero Headline | Playfair Display | Bold 700 | 64–72px | One-line hero statements |
| H1 — Page Title | Playfair Display | Bold 700 | 44–48px | Page titles |
| H2 — Section | Playfair Display | SemiBold 600 | 30–36px | Section headings |
| H3 — Sub-section| Lato / Inter | SemiBold 600 | 22–26px | Card titles, sub-headings |
| Body Text | Lato / Inter | Regular 400 | 16–18px | All body paragraphs |
| Captions | Lato / Inter | Regular 400 | 13–14px | Metadata, footnotes, labels |
| CTA Buttons | Lato / Inter | Bold 700 | 15–16px CAPS| Button text |
| Navigation | Lato / Inter | SemiBold 600 | 15px | Nav links |
| Data / Numbers | Lato / Inter | Bold 700 | 24–32px | NPK stats, highlight data |

*Note: Use Fontsource (self-hosted) instead of Google Fonts CDN. Packages: `@fontsource-variable/playfair-display` and `@fontsource/lato`. Faster for India — no external DNS lookup.*

#### 2.7 Brand Mascots
- Two illustrated characters — a young boy and girl holding shovels with a thriving plant — are the AGRIENGO brand mascots
- Extracted from the product label (kraft bag 3D render) — these are core brand assets
- Style: Flat vector illustration, warm earthy tones matching the brand palette
- Usage: Homepage hero, How to Use page, Blog post headers, Social media
- Always shown in a positive, nurturing, gardening context
- The 3D kraft bag pack shot (transparent PNG background) is the primary product visual
*Note: Flat label scan = reference only. Use the 3D pack shot renders for all web and digital applications.*

#### 2.8 Iconography — design.dev
- **Source:** design.dev icon library — all icons used as inline SVG
- **Format:** SVG inline (not icon font, not img tag) — allows CSS colour control and Motion animation
- **Required Icons from design.dev**
  - **Navigation & UI:** Menu, Close, Arrow Right, Arrow Up-Right, Check, External Link (Nav, CTAs, Links)
  - **Product Benefits:** Leaf, Beaker/Flask, Shield, Droplet, Globe, Seedling (Benefit strip, product page)
  - **Marketplace:** Cart/Bag, Lightning bolt, Clock, Location pin (Where to Buy section)
  - **Social:** Instagram, Facebook, YouTube, Share (Footer, Contact page)
  - **Data:** Chart bar, Molecule, Microscope (NPK section, lab data)

*Note: Render all icons as inline SVG in Astro components. Use `currentColor` to inherit brand colours from CSS. Animatable with Motion and GSAP.*

---

### 3. Product Information

#### 3.1 Product Identity
- **Product Name:** Premium Vermi Compost
- **Grade:** Grade-A NPK Enriched
- **Composition:** 100% Organic | Lab Tested
- **Raw Material:** Pure Cow Dung — 100% organic transformation process
- **Certifications:** Organic Product 100% | Lab Tested
- **Available SKUs:** 1 KG | 2 KG | 5 KG
- **Shelf Life:** Use within 2 years from date of manufacture
- **Brand & Formulation:** AGRIENGO™
- **Manufactured By:** AGRIENGO — The Agri Engineer Organic Farms

#### 3.2 SKU Details
| SKU | Pack Size | Target User | Primary Sales Channel |
| :--- | :--- | :--- | :--- |
| SKU-01 | 1 KG | Home gardeners, urban plant parents, Blinkit buyers | All 6 platforms |
| SKU-02 | 2 KG | Terrace gardens, small nurseries | Amazon, Flipkart, Big Basket |
| SKU-03 | 5 KG | Small farmers, serious gardeners, nursery owners | Amazon, Flipkart |

#### 3.3 Scientific NPK Composition
Lab-tested values — must be displayed as a trust-building element on the website in plain HTML text (not as an image).

| Parameter | Value (Approx.) | Benefit | Scientific Significance |
| :--- | :--- | :--- | :--- |
| Nitrogen (N) | 1.5% – 2.5% | Better Leaf Growth | Drives chlorophyll production for vibrant foliage |
| Phosphorus (P)| 1.0% – 1.5% | Stronger Roots | Stimulates ATP for deep root network formation |
| Potassium (K) | 1.0% – 2.0% | Disease Resistance | Regulates stomata, strengthens cell walls |
| Organic Carbon| 18% – 25% | Improves Soil Texture | Long-chain carbon feeds soil microbiome |
| C:N Ratio | < 20:1 | Fast Nutrient Release| Optimal ratio ensures rapid plant uptake |
| Moisture Content| 25% – 35% | Keeps Microbes Alive| Sustains active microbial ecosystem |
| pH Value | 6.5 – 7.5 | Neutral & Safe for Plants| Ideal range for nutrient bioavailability |

#### 3.4 Application Guide
| Plant Type | Dosage | Frequency / Timing | Application Method |
| :--- | :--- | :--- | :--- |
| Indoor & Potted Plants | 150g – 200g per pot | Every 30 days | Mix into top 2 inches of soil, water after |
| Flowering & Fruit Plants| 250g – 500g per plant | During growing season | Apply around drip line, water in |
| Lawn & Garden Beds | 0.5-inch even layer | Before sowing or planting| Spread evenly, rake in, water thoroughly |
| Seedling Trays | Mix 1:3 with Coco-peat | At sowing time | Blend thoroughly before filling trays |

#### 3.5 Key Benefits (Label Icons)
- **Enriches Soil Structure** — Improves porosity, water retention, and aeration
- **Promotes Seeds Germination** — Boosts germination rate and early seedling vigour
- **Enhances Root Health** — Deeper, stronger roots through microbial activity
- **Boosts Microbial Activity** — Billions of beneficial microbes per gram
- **Rich in Nutrients** — Complete NPK + organic carbon for sustained nourishment

---

### 4. Technology Stack — Definitive
*"Every layer of the AGRIENGO tech stack has been chosen to deliver the fastest possible experience for Indian users, at zero hosting cost, with world-class animation quality."*

#### 4.1 Core Framework Layer
| Layer | Technology | Reason |
| :--- | :--- | :--- |
| Framework | Astro v5 | Zero-JS by default, Lighthouse 100, built for content/showcase sites |
| Runtime / Build| Bun | 3–10× faster than npm; replaces node + npm in single binary |
| Styling | Tailwind CSS v4 | Utility-first, tiny CSS output, no unused styles shipped |
| Language | TypeScript | Type safety for Astro components and animation configs |

#### 4.2 Animation Layer — 3 Tools, Each with a Purpose
*Note: Do NOT use all three animation tools everywhere. Use each for what it does best.*

| Tool | Version | Best Used For |
| :--- | :--- | :--- |
| Motion | v11 | UI transitions, scroll-triggered reveals, layout animations, page transitions |
| Motion Plus | Latest | Spring physics, gesture interactions, number count-up, advanced springs |
| GSAP + ScrollTrigger| v3 | Hero timeline sequences, worm path animation, rich parallax storytelling |
| Lenis | Latest | Global smooth scroll — invisible but felt, pairs with GSAP ScrollTrigger |

**Animation Assignment per Website Element**
| Element | Tool | Effect |
| :--- | :--- | :--- |
| Hero section headline reveal | GSAP | Sequenced word-by-word stagger timeline |
| Worm crawl illustration | GSAP MotionPath | SVG path animation — worm moves through soil |
| Section scroll fade-ins | Motion | Scroll-triggered opacity + translateY reveal |
| Benefit icons stagger | Motion | Sequential icon reveal with delay cascade |
| Product pack shot float | Motion Plus | Infinite spring float + hover scale interaction |
| NPK number counters | Motion Plus | Count-up from 0 to final value on scroll enter |
| Parallax hero depth | GSAP ScrollTrigger | Multi-layer depth parallax on hero bg |
| Platform card hover | Motion | Lift + shadow on hover, spring easing |
| Nav scroll transition | Motion | Transparent to solid Forest Green on scroll |
| Page transitions | Motion | Smooth fade exit + enter between routes |
| Global scroll feel | Lenis | Buttery smooth momentum scroll — always on |

**Animation Philosophy**
- GSAP: 2–3 hero moments only. Worm crawl. Headline reveal. Make them count.
- Motion: Everything scroll-triggered. Sections breathing into view.
- Lenis: Always on. Invisible but felt. This is what makes the site feel premium.
- Motion Plus: NPK counters. Product float. Spring micro-interactions.
- *Rule: If the user notices the animation, it is too much. If the page feels premium without knowing why, that is perfect.*

#### 4.3 Cloudflare — Full Ecosystem
100% of AGRIENGO digital infrastructure lives on Cloudflare. One vendor. One dashboard. One login.

| Cloudflare Product | What It Does | Cost |
| :--- | :--- | :--- |
| Cloudflare Pages | Hosts the static Astro build — auto-deploys on git push | Free — unlimited bandwidth |
| Cloudflare CDN | Global CDN with Mumbai, Delhi, Bengaluru, Chennai PoPs | Free — built-in |
| Cloudflare DNS | Manages agriengo.in and agriengo.com records | Free |
| Cloudflare SSL | Auto HTTPS on both domains | Free — always on |
| Cloudflare Workers | Contact form backend → forwards to contact@agriengo.in | Free — 100k req/day |
| Cloudflare Email Routing | Free email forwarding on @agriengo.in domain | Free |
| Cloudflare Web Analytics | Privacy-first analytics — no cookie banner needed | Free |
| Cloudflare Images / Polish| Auto WebP, auto-compress, responsive images | Free tier |
| DDoS Protection | Enterprise-grade attack protection | Free — built-in |

*Note: Cloudflare Pages has direct Astro integration. Push to GitHub main branch → Cloudflare auto-builds with Bun → Live in 30 seconds.*

#### 4.4 Asset Layer Packages
| Package | What It Does | Install |
| :--- | :--- | :--- |
| `@unpic/astro` | Universal image component — WebP, lazy load, blur placeholder | `bun add @unpic/astro` |
| `@fontsource-variable/playfair-display`| Self-hosted Playfair Display — faster than Google CDN| `bun add @fontsource-variable/playfair-display` |
| `@fontsource/lato` | Self-hosted Lato — no Google DNS lookup | `bun add @fontsource/lato` |
| `astro-seo` | Meta tags, OG tags, Twitter cards — one component | `bun add astro-seo` |
| `@astrojs/sitemap` | Auto-generates sitemap.xml on every build | `bun add @astrojs/sitemap` |
| `@astrojs/cloudflare` | Official Cloudflare adapter for Astro | `bun add @astrojs/cloudflare` |
| `astro-embed` | Lightweight YouTube embed — loads only on click | `bun add astro-embed` |
| design.dev icons | SVG icon library — used as inline SVG components | Copy SVG directly |

#### 4.5 Graphifyy Integration
Graphifyy will be integrated into the NPK Data section and product composition visualisation. Pending URL/library confirmation from the client.

| Planned Use | Section | Visual Type |
| :--- | :--- | :--- |
| NPK Composition Chart | Product page / Home NPK section | Animated bar or radial chart |
| Soil Health Comparison | About or Product page | Before/After comparison visual |
| Benefits Distribution | Home page | Donut or bubble chart |

*Important: Confirm Graphifyy package name/URL before development begins. Integration approach depends on whether it is a React, vanilla JS, or web component library.*

#### 4.6 One-Command Setup
Run this to scaffold the full AGRIENGO project:
```bash
bun create astro@latest agriengo --template minimal
bun add tailwindcss @tailwindcss/vite motion gsap lenis @unpic/astro @fontsource-variable/playfair-display @fontsource/lato astro-seo @astrojs/sitemap @astrojs/cloudflare astro-embed
```

---

### 5. Site Architecture & Navigation

#### 5.1 Navigation Bar
**Primary Nav — Desktop (Left to Right)**
| Position | Label | URL | Type |
| :--- | :--- | :--- | :--- |
| Left | AGRIENGO™ logo | `/` | Logo — links to home |
| Centre 1 | Home | `/` | Text link |
| Centre 2 | Products | `/products` | Text link |
| Centre 3 | How to Use | `/how-to-use` | Text link |
| Centre 4 | Blog | `/blog` | Text link |
| Centre 5 | About | `/about` | Text link |
| Centre 6 | Contact | `/contact` | Text link |
| Right CTA | Where to Buy → | `/where-to-buy` | Gold button — purchase intent |

*Note: Where to Buy is a CTA button (Gold bg, Forest Green text) — NOT a plain text link. This visually separates the purchase action from informational links.*

**Nav Behaviour**
- Sticky nav — follows on scroll
- Transparent at page top → solid Forest Green (`#2D4A27`) on scroll (Motion transition)
- Active page: Gold (`#C9A84C`) underline indicator
- Mobile: Hamburger icon → full-screen Forest Green overlay with all links

#### 5.2 Complete Site Map
| # | Page | URL | Purpose |
| :--- | :--- | :--- | :--- |
| P-01 | Home | `/` (default) | Hero, benefits, product showcase, NPK preview, buy links |
| P-02 | Products | `/products` | All 3 SKUs, full NPK table, certifications, lab data, buy CTA |
| P-03 | How to Use | `/how-to-use` | Visual application guide by plant type, FAQ, storage tips |
| P-04 | Blog | `/blog` | Knowledge hub — SEO content, gardening guides |
| P-05 | About | `/about` | Brand story, founder, mission, trademark info, science |
| P-06 | Contact | `/contact` | Form, phone, email, social, consumer complaint cell |
| P-07 | Where to Buy | `/where-to-buy` | All 6 platform cards with buy links + UTM tracking |
| P-08 | Blog Post | `/blog/[slug]` | Individual blog article pages (Astro Content Collections) |
| P-09 | Privacy Policy | `/privacy-policy` | Legal — footer link only |
| P-10 | Terms & Conditions | `/terms-and-conditions` | Legal — footer link only |
| P-11 | Trademark Notice | `/trademark-notice` | TM application details — footer link |
| P-12 | Lab Reports | `/lab-reports` (Phase 2)| Upload actual lab test PDFs — trust signal |

#### 5.3 Footer Architecture
**Footer Layout — 4 Columns**
- **Column 1 — Brand:** AGRIENGO™ | The Agri Engineer Organic Farms | "Healthy soil for a healthier planet." | Lab Tested | 100% Organic | Grade-A | TM App No. 7673426
- **Column 2 — Explore:** Home, Products, How to Use, Blog, About Us
- **Column 3 — Support & Legal:** Where to Buy, Contact Us, Consumer Wellness Cell, FAQ | **LEGAL:** Terms & Conditions, Privacy Policy, Trademark Notice
- **Column 4 — Connect:** Instagram — @agriengo, Facebook — @agriengo, YouTube — @agriengo | Consumer Wellness Cell: +91 7753827648 | contact@agriengo.in | www.agriengo.in

**Footer Bottom Bar**
© 2026 AGRIENGO™ — The Agri Engineer Organic Farms | All Rights Reserved | Trademark App. No. 7673426 | Made with in India

---

### 6. Page-by-Page Specifications

#### 6.1 P-01: Home (`/`)
- **Section 1 — Hero:** Full viewport height (100vh). Background: Rich dark soil photography OR lush green garden. Overlay: Forest Green gradient left-to-right at 70% opacity. Left 55%: Text block \| Right 45%: 3D pack shot PNG, slight -5° tilt. GSAP timeline: Logo fades in → headline animates word by word → subheadline slides up → CTAs appear → badges pop in. H1: 'Nourish the Earth. Grow Something Beautiful.' Sub: 'Grade-A Vermi Compost — 100% Organic, Lab Tested, NPK Enriched'. CTA Row: [Shop on Amazon] (Gold) + [Shop on Flipkart] (White outline). Trust badge row: Lab Tested \| 100% Organic \| Grade-A NPK.
- **Section 2 — Benefits Strip:** Dark Green full-width strip — 5 benefit icons from design.dev. White outline icons (40px) + Bold White label + Grey one-line description. Gold vertical dividers \| Motion stagger animation on scroll enter.
- **Section 3 — Product Spotlight:** Cream background — all 3 SKU pack shots side by side. Motion Plus: pack shots float with spring physics. 'Available in 1 KG \| 2 KG \| 5 KG' — no prices ever.
- **Section 4 — NPK Data:** Graphifyy animated chart OR styled HTML table. Motion Plus count-up on scroll: numbers animate from 0 to final values. 'Lab Tested' badge.
- **Section 5 — Brand Story:** Cream + subtle soil texture background. Left: Brand story paragraphs \| Right: Mascot illustration. GSAP worm crawl path animation through the section.
- **Section 6 — Application Guide Preview:** 4 cards — one per plant type with icon, name, dosage. CTA: [See Full Guide →] links to `/how-to-use`.
- **Section 7 — Where to Buy Banner:** Dark Green section: 'Find AGRIENGO Near You'. Row 1: Amazon + Flipkart — large white cards. Row 2: Blinkit + Zepto + Big Basket + Swiggy Instamart — 4 smaller cards. All buttons with UTM tracking \| No prices displayed.
- **Section 8 — Trust Footer:** Lab Tested + Trademark Applied + @agriengo social proof strip.

#### 6.2 P-02: Products (`/products`)
- **Hero:** Product name, Grade-A badge, Organic badge, Lab Tested badge
- **Content:** 3 SKU cards with 3D pack shot, weight label, brief description — no prices
- **Data:** Full NPK Composition Table — all 7 parameters. Graphifyy chart: NPK visual composition breakdown.
- **Trust:** Certifications section: Organic Product 100% \| Lab Tested badges
- **Application:** Application guide mini-section with plant type icons
- **CTA:** [Find on Amazon] [Find on Flipkart] (Gold buttons)
*Note: Individual product pages should be added in Phase 2 for improved SEO.*

#### 6.3 P-03: How to Use (`/how-to-use`)
- **Hero:** 'Feed Your Plants Right' — mascot illustration prominent
- **Content:** 4 large plant-type cards — Illustrated + Plant type + Dosage + Method
- **Animation:** GSAP ScrollTrigger: cards animate in one by one as user scrolls
- **Extras:** Pro Tips section: Storage, mixing with coco-peat, watering after application. FAQ accordion — minimum 8 questions, Motion collapse/expand animation. Shelf life notice: 'Use within 2 years from date of manufacture'
- **CTA:** footer: [Buy Now on Amazon] [Buy Now on Flipkart]

#### 6.4 P-04: Blog (`/blog`)
Blog is the most powerful SEO weapon for AGRIENGO. Each article ranks for organic search terms that drive Amazon/Flipkart traffic.
- **Blog Architecture:** All blog posts written as Markdown files in `src/content/blog/`. Each post has frontmatter: title, description, date, tags, author, image. Astro auto-generates `/blog/[slug]` pages from Markdown. Blog listing page at `/blog`.
- **Initial Blog Content Plan:**
  - Complete Guide to Using Vermicompost at Home (High Priority)
  - Vermicompost vs Regular Compost — What's the Difference? (High Priority)
  - Best Organic Fertiliser for Tomatoes & Vegetables (High Priority)
  - How to Feed Indoor Plants Organically (High Priority)
  - Understanding NPK in Organic Fertilisers (Medium Priority)
  - Starting an Organic Kitchen Garden in India (Medium Priority)
  - What is Vermicompost? A Beginner's Guide (High Priority)
  - How Earthworms Transform Soil — The Science (Low Priority)

#### 6.5 P-05: About (`/about`)
- **Hero:** AGRIENGO brand wordmark full-screen, earthy background
- **Section:** Our Story — full brand story expanded beyond the label
- **Section:** The Science Behind Vermicompost — illustrated process flow. GSAP timeline: Cow dung → Worm composting → Finished product journey.
- **Section:** Our Mission — 'Healthy soil for a healthier planet'
- **Section:** Trademark & Legitimacy — Application No. 7673426, Class 1
- **Section:** Contact the Team — Wellness Cell + social

#### 6.6 P-06: Contact (`/contact`)
- **Contact form:** Name, Email, Phone, Message, Submit button. Backend: Cloudflare Worker → forwards to contact@agriengo.in
- **Phone:** +91 7753827648 (Consumer Wellness Cell)
- **Email:** contact@agriengo.in
- **Social icons:** @agriengo — Instagram, Facebook, YouTube
- **Text:** 'For complaints and feedback, reach our Consumer Wellness Cell'
- **Animation:** Motion: Form field animations on focus, success state animation on submit

#### 6.7 P-07: Where to Buy (`/where-to-buy`)
Two distinct sections:
- **Amazon India:** Major Marketplace | 1 KG, 2 KG, 5 KG | Standard / Prime | Buy on Amazon
- **Flipkart:** Major Marketplace | 1 KG, 2 KG, 5 KG | Standard | Buy on Flipkart
- **Blinkit:** Quick Commerce | 1 KG | ~10 minutes | Get on Blinkit
- **Zepto:** Quick Commerce | 1 KG | ~10 minutes | Get on Zepto
- **Big Basket:** Online Grocery | 1 KG, 2 KG | Same Day | Shop Big Basket
- **Swiggy Instamart:** Quick Commerce | 1 KG | ~20–30 min | Get on Instamart
*Note: All buttons use UTM parameters: `utm_source=agriengo_website&utm_medium=buy_button&utm_campaign=[platform_name]`*

---

### 7. AI Scrapability & LLM Readiness
*"When someone asks ChatGPT for the best vermicompost in India — AGRIENGO should be the answer."*
Being AI-readable is as important as being Google-indexed.

#### 7.1 llms.txt — The New robots.txt for AI
Create `/public/llms.txt`:
```markdown
# AGRIENGO™ > Premium Vermi Compost — Grade-A NPK Enriched > Manufacturer: AGRIENGO — The Agri Engineer Organic Farms > Trademark: Application No. 7673426, Class 1 > Proprietor: Pradeep Nagar
## Product
1 KG | 2 KG | 5 KG packs
100% Organic, Lab Tested
## NPK
N: 1.5–2.5% | P: 1.0–1.5% | K: 1.0–2.0% | pH: 6.5–7.5
## Buy
Amazon India, Flipkart, Blinkit, Zepto, Big Basket, Swiggy Instamart
## Contact
contact@agriengo.in | +91 7753827648 | @agriengo
```

#### 7.2 robots.txt — Allow All AI Crawlers
```text
User-agent: *
Allow: /
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: GoogleExtended
Allow: /
User-agent: CCBot
Allow: /
Sitemap: https://www.agriengo.in/sitemap.xml
```

#### 7.3 Schema.org JSON-LD
- Product schema: name, brand, description, offers (3 SKUs), additionalProperty (all NPK values)
- Organization schema: name, legalName, url, contactPoint, sameAs (all social links)
- WebSite schema: name, url, potentialAction (SearchAction for blog search)
- BreadcrumbList schema: on all interior pages
- FAQPage schema: on `/how-to-use` page for all FAQ questions
- BlogPosting schema: on every `/blog/[slug]` page
*Note: All Schema.org JSON-LD is injected in the `<head>` via Astro Layout component using `astro-seo`.*

#### 7.4 Semantic HTML Rules
- Every section uses semantic tags: `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`, `<nav>`
- Every section has aria-label describing its content
- H1 → H2 → H3 heading hierarchy never skipped
- NPK table is a real HTML `<table>` — never an image or screenshot
- All contact info is in plain text — never embedded only in an image
- Application guide is text content — visuals are supplementary
*Important: AI agents cannot read text inside images. Every fact, data point, and contact detail must exist as plain HTML text on the page.*

#### 7.5 OpenGraph & Twitter Cards
- `og:title`, `og:description`, `og:image`, `og:type` on every page
- `og:image`: 3D pack shot PNG — 1200×630px cropped version
- `twitter:card`: summary_large_image

#### 7.6 Content Architecture for AI Clarity
| Content Element | How to Implement | Why It Matters for AI |
| :--- | :--- | :--- |
| NPK Data | HTML table with plain text values | AI scrapes table data directly |
| Product descriptions | Plain paragraph text | AI reads and summarises easily |
| FAQ answers | Accordion with visible text (not hidden) | AI indexes all FAQ content |
| Contact info | Plain text in footer AND contact page | AI can extract and cite contact details |
| Blog articles | Markdown-rendered HTML | AI sources and cites blog content |
| Application guide | Text + HTML table | AI answers 'How do I use vermicompost' queries |

---

### 8. AI Agent Skills — Design & Development Workflow
These are the AI tools used to BUILD the AGRIENGO website — not features on the website itself.

#### 8.1 Development AI Tools
- **Cursor AI:** Write Astro components, generate GSAP animations from description, fix Tailwind classes
- **v0.dev:** AI UI component generator
- **Galileo AI / Uizard:** AI mockup generator
- **Ideogram:** AI image generation (text in images)
- **Claude (Anthropic):** Write all website copy, generate code, write Schema.org JSON, create llms.txt
- **Midjourney:** AI image generation

#### 8.2 Cursor AI Prompt Examples for AGRIENGO
- 'Create an Astro component for the NPK data table with Forest Green headers and alternating cream/white rows'
- 'Write a GSAP ScrollTrigger animation that counts up nitrogen from 0 to 1.5-2.5% when the NPK section enters the viewport'
- 'Create a Motion Plus spring animation for the product pack shot that floats up and down infinitely'
- 'Generate a Cloudflare Worker that accepts form POST data and forwards it to contact@agriengo.in'
- 'Write Schema.org JSON-LD for AGRIENGO Premium Vermi Compost with all 3 SKUs and NPK properties'

#### 8.3 Ideogram Prompt Examples for AGRIENGO
- 'Rich dark vermicompost soil close-up, earthworms visible, green seedling emerging, warm earthy tones, Indian home garden, photorealistic, natural morning light, no text'
- 'Urban Indian terrace garden, healthy green plants in terracotta pots, bokeh background, warm afternoon light, clean and premium feel, no text'

#### 8.4 Future AI Feature — Plant Advisor (Phase 2)
- **Input:** User selects their plant type from a dropdown
- **Output:** Personalised AGRIENGO dosage and application guide
- **Tech:** Claude API or Gemini API
- **Placement:** How to Use page — 'Get a personalised dosage guide for your plant'
- **UI:** Simple select + submit → streamed text response

---

### 9. Performance & SEO Targets

#### 9.1 Performance Targets
| Metric | Target | How Achieved |
| :--- | :--- | :--- |
| Lighthouse Performance | 95–100 | Astro zero-JS, Cloudflare CDN India PoP, image optimisation |
| First Contentful Paint | < 1.5 sec | Static HTML, Cloudflare Mumbai edge, preloaded fonts |
| Largest Contentful Paint | < 2.5 sec | Priority hero image, no render-blocking resources |
| Cumulative Layout Shift | < 0.1 | Reserved image dimensions, Fontsource self-hosted |
| Total JS to Browser | < 20kb | Astro zero-JS + Motion only where needed |
| Mobile Lighthouse | 90+ | Mobile-first Tailwind, responsive images via Unpic |
| Lighthouse SEO | 100 | astro-seo, sitemap, robots.txt, Schema.org, semantic HTML |
| Lighthouse Accessibility | 95+ | WCAG 2.1 AA, ARIA labels, keyboard nav, contrast 4.5:1 |

#### 9.2 SEO Strategy
- Primary domain: `agriengo.in` | 301 permanent redirect from `agriengo.com` → `agriengo.in`
- Canonical tags on every page
- Unique meta title + meta description per page
- Google Search Console submitted on launch day
- Google Analytics 4 setup (or Cloudflare Web Analytics)
- **Primary Target Keywords:** vermicompost india, buy vermicompost online india, how to use vermicompost, organic compost for plants, vermicompost vs compost, NPK organic fertiliser india, AGRIENGO, organic fertiliser for indoor plants

---

### 10. Legal & Compliance

#### 10.1 Trademark Notice
AGRIENGO™ is a brand owned by Pradeep Nagar. Trademark Application No. 7673426, Class 1 is currently in the Vienna Codification process with the Office of the Controller General of Patents, Designs & Trade Marks, Department for Promotion of Industry and Internal Trade, Government of India. The TM symbol must appear after every instance of AGRIENGO until registration is confirmed.

#### 10.2 Required Legal Pages
- **Privacy Policy** — Data via contact form, Cloudflare Analytics, UTM parameters
- **Terms & Conditions** — Website use, product disclaimers, trademark notice
- **Trademark Notice** — AGRIENGO™ ownership, application number, status

#### 10.3 Product Disclaimers on Website
- 'Results may vary based on soil conditions and plant type'
- 'Store in a cool, dry place away from direct sunlight'
- 'Expiry: Use within 2 years from date of manufacture'
- 'Manufactured and marketed by AGRIENGO — The Agri Engineer Organic Farms'
*Important: No prices to be shown anywhere on the website — not even placeholder text, not strikethrough prices, not 'starting from' text.*

---

### 11. Project Phases & Roadmap
| Phase | Name | Timeline | Deliverables |
| :--- | :--- | :--- | :--- |
| 1 | Foundation & Setup | Weeks 1–3 | Cloudflare setup, domains, Astro+Bun boilerplate, design tokens, Tailwind config, font setup |
| 2 | Design | Weeks 4–6 | Wireframes all pages, hi-fi mockups desktop + mobile, brand mascot assets, icon library, client approval |
| 3 | Development | Weeks 7–10 | All 10 pages coded, GSAP + Motion animations, Cloudflare Worker form, UTM tracking, Graphifyy charts |
| 4 | Content & SEO | Weeks 9–11 | All copy written, Schema.org added, llms.txt, robots.txt, sitemap, blog post 1 written |
| 5 | Testing & Launch | Weeks 12–13| Lighthouse audit, cross-browser QA, mobile QA, Search Console submission, 301 redirect |
| 6 | Post-Launch | Ongoing | Analytics review, new blog posts monthly, new SKU additions, Phase 2: lab reports + plant advisor |

---

### 12. Open Questions & Decisions Required
| # | Question | Options | Owner | Priority |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Graphifyy — exact package or URL? | Provide link or npm package name | Pradeep Nagar | HIGH |
| 2 | Marketplace listing URLs ready? | Amazon + Flipkart product URLs needed for buttons | AGRIENGO Team | HIGH |
| 3 | 3D Pack shots for 2kg and 5kg? | 1kg confirmed — 2kg and 5kg renders needed | AGRIENGO Team | HIGH |
| 4 | Logo in SVG / AI vector format? | Required for web quality — PNG alone not sufficient | AGRIENGO Team | HIGH |
| 5 | Blog content — self-written or AI? | Self-written vs Claude AI-assisted drafts | Pradeep Nagar | MEDIUM |
| 6 | Individual product pages Phase 1 or 2? | `/products/1kg`, `/products/2kg`, `/products/5kg` — better SEO | Dev decision | MEDIUM |
| 7 | Which quick commerce are currently live?| Confirm: Blinkit, Zepto, BB, Instamart listing status | AGRIENGO Team | MEDIUM |
| 8 | Google Analytics or Cloudflare Analytics? | GA4 (more data) vs Cloudflare (privacy-first, no cookie banner) | Pradeep Nagar | LOW |

---
*End of Product Requirements Document — Version 2.0*  
**AGRIENGO™ — The Agri Engineer Organic Farms**  
agriengo.com | agriengo.in | Version 2.0 | April 2026 | Confidential
