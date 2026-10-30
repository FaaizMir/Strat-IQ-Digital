// Single source of truth for all case studies shown across services and on individual detail pages.
// ProjectTemplate.js renders these with consistent layout and styles.

export const projects = [
  // =========================================================================
  // 1. AMAZON PPC (Live / Real Projects)
  // =========================================================================
  {
    slug: "pentagon-games",
    route: "/casestudy/amazon-ppc-management-services/pentagon-games",
    metaTitle: "Pentagon Games Case Study | Web3 Website Design",
    title: "Pentagon Games",
    client: "Pentagon Games",
    category: "Website Design",
    services: ["UI/UX Design", "Web Experience", "Creative Direction"],
    subtitle:
      "Designing a Web3 experience that feels as advanced as the technology behind it.",
    year: "26",
    cardImage: "/images/uploads/Project-1-scaled.jpg",
    heroImage: "/images/uploads/Project-1-1st-Image-1.jpg",
    gallery: [
      { src: "/images/uploads/Project-1-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-4th-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-1st-Image-1.jpg", full: true },
      { src: "/images/uploads/Project-1-2nd-scaled.jpg", full: true },
    ],
    challenge: {
      label: "Project Overview",
      heading: "Web3 is complex.",
      paragraphs: [
        "AI, AR, blockchain, tokens — all powerful, but hard to explain. Most platforms either overwhelm users or oversimplify the product.",
        "Pentagon Games needed a digital experience that could do both:",
      ],
      bullets: ["Feel futuristic", "Still make sense instantly"],
    },
    approach: {
      label: "The Challenges",
      heading: "We focused on clarity through design.",
      paragraphs: [
        "Instead of explaining everything, we designed an interface that lets users feel it. Everything built to guide, not confuse.",
      ],
      bullets: [
        "Structured content flow",
        "Visual hierarchy for complex systems",
        "Clean navigation across multiple layers",
        "Strong, immersive aesthetic",
      ],
    },
    design: {
      label: "Wins",
      heading: "The Design",
      bullets: [
        "Dark-mode interface with high contrast",
        "Futuristic visual direction aligned with Web3 space",
        "Smooth transitions between sections",
        "Clear separation between product, ecosystem, and token layers",
      ],
      closing: "The goal was simple: Make complexity feel intuitive.",
    },
    change: {
      label: "Strategies",
      before: ["Disconnected information", "Overwhelming structure", "Weak visual hierarchy"],
      after: ["Clear ecosystem presentation", "Guided user journey", "Strong, consistent visual language"],
    },
    otherWorks: ["raysz", "cleverman"],
  },

  {
    slug: "raysz",
    route: "/casestudy/amazon-ppc-management-services/raysz",
    metaTitle: "Raysz Case Study | Athletic Wear Brand Identity",
    title: "Raysz",
    client: "Raysz",
    category: "Branding",
    services: [
      "Branding & Creative Direction",
      "Design Strategy",
      "Visual Identity Development",
      "Creative Systems",
    ],
    subtitle:
      "Building a stronger athletic wear brand through strategic creative direction and modern brand positioning.",
    year: "25",
    cardImage: "/images/uploads/Project-2-scaled.jpg",
    heroImage: "/images/uploads/Project-2-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-2-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-2-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/01c1c4236835079.68f41039d5926.gif", full: false },
      { src: "/images/uploads/Project-2-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "The Challenge",
      paragraphs: ["The brand needed a stronger identity to compete in a crowded athletic wear market."],
      bullets: [
        "Inconsistent visual direction",
        "Weak brand positioning",
        "Lack of creative consistency",
        "Need for a more premium customer perception",
      ],
      closing: "The goal was building a recognizable brand customers would remember.",
    },
    approach: {
      label: "The Approach",
      paragraphs: [
        "We focused on building a clean, performance-driven brand identity designed for long-term growth and stronger customer connection.",
        "Every section had one goal: Move the user closer to purchase",
      ],
      bullets: [
        "Creative direction aligned with audience positioning",
        "Modern athletic wear branding system",
        "Consistent visual language across assets",
        "Performance-focused design strategy",
      ],
    },
    design: {
      label: "Results",
      bullets: [
        "Unified design direction across touchpoints",
        "Stronger visual recognition",
        "Scalable branding system for future campaigns",
      ],
    },
    change: {
      label: "What this means",
      before: null,
      after: [
        "The brand became more recognizable",
        "Creative assets felt more premium and consistent",
        "The foundation was built for long-term scalable growth",
      ],
    },
    otherWorks: ["pentagon-games", "harrier-hardware"],
  },

  {
    slug: "harrier-hardware",
    route: "/casestudy/amazon-ppc-management-services/harrier-hardware",
    metaTitle: "Harrier Hardware Case Study | Web Design & Marketing",
    title: "Harrier Hardware",
    client: "Harrier Hardware",
    category: "Web Design",
    services: ["Web Design", "Marketing"],
    subtitle: "Turning a dated hardware brand into a bold, modern presence built to convert.",
    year: "24",
    cardImage: "/images/uploads/Project-3-1-scaled.jpg",
    heroImage: "/images/uploads/Project-3-1-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
      { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "The Challenge",
      paragraphs: [
        "Harrier Hardware had solid products but a website stuck in the past, one that undersold the brand and buried the catalog.",
      ],
      bullets: [
        "Dated, cluttered site design",
        "Weak brand presence online",
        "Unclear product presentation",
        "No consistent path from browsing to buying",
      ],
    },
    approach: {
      label: "The Approach",
      paragraphs: [
        "We rebuilt the site around confidence: bolder visuals, clearer structure, and marketing built to match.",
      ],
      bullets: [
        "Modern web design aligned with brand tone",
        "Simplified product categorization",
        "Marketing strategy built around the new site",
        "Consistent messaging across every touchpoint",
      ],
    },
    design: {
      label: "The Design",
      bullets: [
        "Rugged, industrial-but-modern visual direction",
        "Clear product categorization and navigation",
        "Strong, confident typography",
        "Consistent brand presence across every page",
      ],
      closing: "The goal was simple: make the brand feel as tough and capable as its tools.",
    },
    change: {
      label: "What Changed",
      before: ["Dated, cluttered design", "Weak brand presence", "Unclear product paths"],
      after: ["Bold, modern visual identity", "Clear product categorization", "Confident, consistent brand presence"],
    },
    otherWorks: ["raysz", "cleverman"],
  },

  {
    slug: "cleverman",
    route: "/casestudy/amazon-ppc-management-services/cleverman",
    metaTitle: "CleverMan Case Study | Ecommerce UX & Conversion Design",
    title: "CleverMan",
    client: "CleverMan",
    category: "Ecommerce",
    services: ["UI/UX Design", "Conversion Optimization", "Creative Direction"],
    subtitle: "Rebuilding a friction-heavy ecommerce store around one goal: turning visitors into buyers.",
    year: "24",
    cardImage: "/images/uploads/Project-4-scaled.jpg",
    heroImage: "/images/uploads/Project-4-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "The Challenge",
      paragraphs: ["The brand had a strong product but the website wasn't helping it sell."],
      bullets: ["Too much friction", "Weak product clarity", "Lack of creative consistency", "No clear buying flow"],
      closing: "Visitors were landing but not converting.",
    },
    approach: {
      label: "The Approach",
      paragraphs: [
        "We didn't redesign the site. We rebuilt the experience around conversion.",
        "Every section had one goal: Move the user closer to purchase",
      ],
      bullets: ["Clear product messaging", "Strong visual hierarchy", "Simplified navigation", "Reduced decision fatigue"],
      closing: "No distractions. Just direction.",
    },
    design: {
      label: "Conversion Design",
      bullets: [
        "Clean product sections with focused messaging",
        "Clear CTAs at the right moments",
        "Structured flow from discovery → trust → purchase",
        "Visual storytelling to support decisions",
      ],
      closing: "Everything built around how users actually buy.",
    },
    change: {
      label: "What improved",
      before: null,
      after: [
        "Faster understanding of the product",
        "Stronger first impression",
        "Clear path to purchase",
        "Reduced confusion across pages",
        "Better alignment between design and user intent",
      ],
    },
    otherWorks: ["pentagon-games", "harrier-hardware"],
  },

  // =========================================================================
  // 2. META ADS (Test Data)
  // =========================================================================
  {
    slug: "meta-test-project-1",
    route: "/casestudy/meta-instagram-ads-services/meta-test-project-1",
    metaTitle: "[Test Data] Meta Ads Scale Campaign | Case Study",
    title: "[Test Data] Meta Growth Campaign 01",
    client: "[Test Data] Apparel Brand Client",
    category: "Meta Ads",
    services: ["[Test Data] Paid Social Strategy", "[Test Data] Meta Ad Creatives", "[Test Data] Scale Funnel"],
    subtitle: "[Test Data] Scaling profitable customer acquisition across Instagram and Facebook with high-velocity creative testing.",
    year: "25",
    cardImage: "/images/uploads/Project-1-scaled.jpg",
    heroImage: "/images/uploads/Project-1-1st-Image-1.jpg",
    gallery: [
      { src: "/images/uploads/Project-1-1st-Image-1.jpg", full: true },
      { src: "/images/uploads/Project-1-2nd-scaled.jpg", full: true },
      { src: "/images/uploads/Project-1-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      heading: "[Test Data] Rising CPAs and creative fatigue.",
      paragraphs: [
        "[Test Data] The brand had hit a plateau on Meta ad spend, experiencing rapid fatigue on hero creatives and declining ROAS.",
        "[Test Data] Broad audiences were inefficient, and retargeting pools had exhausted their incremental lift.",
      ],
      bullets: [
        "[Test Data] Cost per acquisition increased by 45%",
        "[Test Data] Creative production was too slow to sustain testing",
        "[Test Data] High ad spend concentration in a single failing ad set",
      ],
      closing: "[Test Data] The objective was to rebuild the account structure and reignite profitable scale.",
    },
    approach: {
      label: "[Test Data] The Approach",
      heading: "[Test Data] Structured creative diversification and automated bidding.",
      paragraphs: [
        "[Test Data] We implemented a weekly creative testing sprint targeting fresh problem-aware customer segments.",
        "[Test Data] Combined Advantage+ campaigns with strict cost caps to protect blended efficiency.",
      ],
      bullets: [
        "[Test Data] 8 new creative concepts deployed weekly",
        "[Test Data] UGC hooks combined with high-polish motion graphics",
        "[Test Data] Dedicated landing pages for top product categories",
      ],
      closing: "[Test Data] Systematized iteration produced steady winners week over week.",
    },
    design: {
      label: "[Test Data] Results",
      heading: "[Test Data] Measurable ROAS and volume expansion.",
      bullets: [
        "[Test Data] 3.6x Blended ROAS across entire account",
        "[Test Data] 34% Reduction in customer acquisition cost",
        "[Test Data] 2.4x Increase in monthly tracked sales",
      ],
      closing: "[Test Data] Predictable acquisition engine operating at peak efficiency.",
    },
    change: {
      label: "[Test Data] Performance Shift",
      before: ["[Test Data] Ad fatigue within 7 days", "[Test Data] High blended CPA", "[Test Data] Unstable daily return"],
      after: ["[Test Data] Consistent evergreen creative library", "[Test Data] 34% Lower CPA baseline", "[Test Data] Predictable, scalable revenue"],
    },
    otherWorks: ["meta-test-project-2", "meta-test-project-3"],
  },

  {
    slug: "meta-test-project-2",
    route: "/casestudy/meta-instagram-ads-services/meta-test-project-2",
    metaTitle: "[Test Data] Meta Ads Direct Response | Case Study",
    title: "[Test Data] Meta Direct-to-Consumer Sprint",
    client: "[Test Data] Wellness & Nutrition Co.",
    category: "Meta Ads",
    services: ["[Test Data] UGC Video Direction", "[Test Data] Campaign Structuring", "[Test Data] Retargeting Strategy"],
    subtitle: "[Test Data] Unlocking rapid customer acquisition with native storytelling and dynamic catalog ads.",
    year: "25",
    cardImage: "/images/uploads/Project-2-scaled.jpg",
    heroImage: "/images/uploads/Project-2-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-2-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-2-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-2-4th-Image.jpg", full: false },
      { src: "/images/uploads/01c1c4236835079.68f41039d5926.gif", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Generic product ads failed to differentiate the brand in an overcrowded wellness market."],
      bullets: [
        "[Test Data] Low click-through rate under 0.8%",
        "[Test Data] Ineffective brand storytelling in paid channels",
        "[Test Data] Customer skepticism regarding product ingredients",
      ],
      closing: "[Test Data] Direct response creative needed authentic proof points.",
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: [
        "[Test Data] We shifted from static product images to creator-led testimonials and third-party validation clips.",
        "[Test Data] Streamlined conversion journeys directly to optimized bundles.",
      ],
      bullets: [
        "[Test Data] Authentic unboxing and routine video ads",
        "[Test Data] Direct comparison charts in Instagram Stories",
        "[Test Data] Rapid post-click bundle checkouts",
      ],
    },
    design: {
      label: "[Test Data] Key Wins",
      bullets: [
        "[Test Data] CTR increased from 0.8% to 2.3%",
        "[Test Data] Conversion rate jumped by 62%",
        "[Test Data] Record sales recorded during seasonal campaigns",
      ],
      closing: "[Test Data] High emotional resonance generated immediate customer trust.",
    },
    change: {
      label: "[Test Data] Key Metrics",
      before: ["[Test Data] Low user engagement", "[Test Data] Unprofitable first-order margins"],
      after: ["[Test Data] High engagement UGC engine", "[Test Data] Profitable initial order basket size"],
    },
    otherWorks: ["meta-test-project-1", "meta-test-project-4"],
  },

  {
    slug: "meta-test-project-3",
    route: "/casestudy/meta-instagram-ads-services/meta-test-project-3",
    metaTitle: "[Test Data] Meta Ads Retargeting & LTV | Case Study",
    title: "[Test Data] Meta Retention & Retargeting Engine",
    client: "[Test Data] Premium Footwear Brand",
    category: "Meta Ads",
    services: ["[Test Data] Audience Segmentation", "[Test Data] Dynamic Ads", "[Test Data] VIP Retention"],
    subtitle: "[Test Data] Increasing customer lifetime value through hyper-segmented Meta audience journeys.",
    year: "25",
    cardImage: "/images/uploads/Project-3-1-scaled.jpg",
    heroImage: "/images/uploads/Project-3-1-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
      { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] High acquisition volume was not translating into repeatable repeat purchases."],
      bullets: [
        "[Test Data] 85% one-and-done buyers",
        "[Test Data] Retargeting creative identical to prospecting ads",
        "[Test Data] Underutilized customer data in Meta pixel",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] We engineered multi-stage post-purchase ad funnels delivering timely cross-sell recommendations."],
      bullets: [
        "[Test Data] Product-specific care guide and accessory ads",
        "[Test Data] VIP early access creative drops",
        "[Test Data] LTV-optimized lookalike audiences",
      ],
    },
    design: {
      label: "[Test Data] Results",
      bullets: [
        "[Test Data] 45% Increase in 60-day repeat order rate",
        "[Test Data] 4.8x ROAS specifically on retargeting sets",
        "[Test Data] Substantial expansion of average customer value",
      ],
    },
    change: {
      label: "[Test Data] Long-Term Value",
      before: ["[Test Data] Isolated acquisition without retention strategy"],
      after: ["[Test Data] Fully integrated lifecycle ad journey producing recurring revenue"],
    },
    otherWorks: ["meta-test-project-1", "meta-test-project-2"],
  },

  {
    slug: "meta-test-project-4",
    route: "/casestudy/meta-instagram-ads-services/meta-test-project-4",
    metaTitle: "[Test Data] Meta Ads Global Expansion | Case Study",
    title: "[Test Data] Meta International Expansion",
    client: "[Test Data] Modern Electronics Studio",
    category: "Meta Ads",
    services: ["[Test Data] International Meta Ads", "[Test Data] Localization Strategy", "[Test Data] Creative Testing"],
    subtitle: "[Test Data] Scaling consumer hardware into European and UK markets with localized Meta creative sets.",
    year: "25",
    cardImage: "/images/uploads/Project-4-scaled.jpg",
    heroImage: "/images/uploads/Project-4-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Domestic success in North America was stalling when simply duplicating ads into overseas markets."],
      bullets: [
        "[Test Data] Lack of language and cultural nuance in visuals",
        "[Test Data] Discrepancies in checkout behavior across territories",
        "[Test Data] Poor currency and shipping clarity in ads",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Built custom regional ad libraries featuring local creators, local pricing, and market-specific value propositions."],
      bullets: [
        "[Test Data] Multi-language voiceovers and on-screen text",
        "[Test Data] Local payment badge integrations in carousels",
        "[Test Data] Segmented country-specific testing clusters",
      ],
    },
    design: {
      label: "[Test Data] Results",
      bullets: [
        "[Test Data] Successfully opened 4 new international revenue streams",
        "[Test Data] Account-wide spend grew by 210% at stable efficiency",
        "[Test Data] International sales accounted for 38% of total brand revenue",
      ],
    },
    change: {
      label: "[Test Data] Market Reach",
      before: ["[Test Data] 100% reliant on single domestic market"],
      after: ["[Test Data] Diversified global customer acquisition pipeline"],
    },
    otherWorks: ["meta-test-project-1", "meta-test-project-3"],
  },

  // =========================================================================
  // 3. GOOGLE ADS (Test Data)
  // =========================================================================
  {
    "slug": "lanes-car-products",
    "route": "/casestudy/google-ads-management-services/lanes-car-products",
    "metaTitle": "Lane’s Car Products | Google Ads & Shopping Case Study",
    "title": "Turning a 23,000+ Product Catalog into Profitable Google Ads Growth",
    "client": "Lane’s Car Products",
    "category": "Google Ads",
    "services": [
      "Google Shopping",
      "Performance Max",
      "Feed Optimization"
    ],
    "subtitle": "Big catalog. Bigger potential. How we restructured campaigns, optimized product feeds, and maximized ROAS for a 23,000+ SKU car care retailer.",
    "year": "26",
    "cardImage": "/images/uploads/lanes-car-products-card.jpg",
    "heroImage": "/images/uploads/lanes-car-products-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/lanes-car-products-1.jpg", "full": true },
      { "src": "/images/uploads/lanes-car-products-2.jpg", "full": true },
      { "src": "/images/uploads/lanes-car-products-3.jpg", "full": false },
      { "src": "/images/uploads/lanes-car-products-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "A Shopify sync had quietly broken the account, and the catalog’s size made every problem bigger. Spend was flowing, but much of it wasn’t reaching the products or people that mattered."
      ],
      "bullets": [
        "Campaigns still targeting old product IDs, leaving key products 'not eligible' with zero impressions",
        "22,000+ steering wheel covers exceeding Google’s 20,000 product group limit, many with generic images",
        "Weak product data, with over half of titles missing terms shoppers actually search",
        "Broad campaigns mixing unrelated product lines, hiding what was driving sales",
        "Ads showing on irrelevant searches and low-quality apps and sites"
      ]
    },
    "approach": {
      "label": "Strategies",
      "paragraphs": [
        "The goal was simple: make a massive catalog work like a focused one through a complete Shopping rebuild and feed optimization overhaul."
      ],
      "bullets": [
        "Restored eligibility by matching every campaign to current Shopify and Merchant Center IDs",
        "Split the account into category-focused campaigns",
        "Rewrote titles, descriptions, product types, and categories for 22,000+ steering wheel covers, 170 seat cover towels, and 124 detailing equipment products",
        "Wrote category-specific Performance Max creative aligned with products and landing pages",
        "Cut wasted spend with negative keywords, placement exclusions, and content suitability settings"
      ]
    },
    "design": {
      "label": "Wins & Results",
      "bullets": [
        "394 Purchases generated",
        "$28.4K Revenue driven",
        "331% ROAS achieved on $8.57K Ad Spend",
        "Seat cover towels campaign hit 458% ROAS in two weeks against a 400% target",
        "Orders now arriving through free listings due to upgraded product feeds"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Products excluded from auctions",
        "One broad, unfocused setup",
        "Generic product data"
      ],
      "after": [
        "Full catalog eligible and serving",
        "Category campaigns with clear budgets",
        "Keyword-first feeds built on real search behavior"
      ]
    },
    "otherWorks": [
      "google-test-project-2",
      "google-test-project-3"
    ]
  },

  {
    "slug": "advanage-the-wonder-cleaner",
    "route": "/casestudy/google-ads-management-services/advanage-the-wonder-cleaner",
    "metaTitle": "ADVANAGE The Wonder Cleaner | Google Ads & Shopping Case Study",
    "title": "From Launch to a 305% ROAS in Two Months",
    "client": "ADVANAGE The Wonder Cleaner",
    "category": "Google Ads",
    "services": [
      "Google Shopping",
      "Performance Max",
      "Brand Search",
      "Feed Optimization"
    ],
    "subtitle": "One product. Endless uses. Putting an ultra-concentrated cleaner in front of high-intent searchers to drive profitable ecommerce growth.",
    "year": "26",
    "cardImage": "/images/uploads/advanage-cleaner-card.jpg",
    "heroImage": "/images/uploads/advanage-cleaner-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/advanage-cleaner-1.jpg", "full": true },
      { "src": "/images/uploads/advanage-cleaner-2.jpg", "full": true },
      { "src": "/images/uploads/advanage-cleaner-3.jpg", "full": false },
      { "src": "/images/uploads/advanage-cleaner-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "The product could clean almost anything, but its listings didn’t say so. Meanwhile, budget was leaking into junk placements and searches that would never convert."
      ],
      "bullets": [
        "Titles led with scent and near-identical wording, so ads mostly showed for brand searches",
        "About 40% of Performance Max impressions went to mobile game apps and low-quality sites",
        "Shopping matched hundreds of unrelated searches, with some single clicks costing over $13",
        "Marketplaces bid on the brand name, leaving the Brand campaign in only about 30% of brand searches despite 10/10 Quality Scores"
      ]
    },
    "approach": {
      "label": "Strategies",
      "paragraphs": [
        "The goal was simple: patience in month one, profit in month two, using a search-intent playbook to target specific use cases."
      ],
      "bullets": [
        "Rebuilt all 40 listings with use-case titles from Keyword Planner data (e.g., kitchen degreaser, carpet stain remover, bathroom cleaner)",
        "Added 900+ negative keywords, removed 400+ junk apps and sites, and set content suitability controls",
        "Strengthened the Brand campaign with sitelinks, callouts, and structured snippets to lift ad rank without raising bids",
        "Rewrote product titles, meta titles, and meta descriptions for all 38 product pages to support organic search too"
      ]
    },
    "design": {
      "label": "Wins & Results",
      "bullets": [
        "ROAS increased from 195% to 305% in month two",
        "Purchases grew by 75% (12 to 21 purchases)",
        "Revenue scaled from $2.5K to $3.5K on 10% less spend ($1.28K down to $1.15K)",
        "Impression share expanded from 8% to 14% in just 26 days"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Scent-led, near-identical listings",
        "40% of impressions in junk placements",
        "Losing brand searches to marketplaces"
      ],
      "after": [
        "Use-case titles built on real searches",
        "Brand-safe, buyer-focused traffic",
        "Stronger brand ads without higher bids"
      ]
    },
    "otherWorks": [
      "lanes-car-products",
      "google-test-project-3"
    ]
  },

  {
    "slug": "stellar-chemical-corp",
    "route": "/casestudy/google-ads-management-services/stellar-chemical-corp",
    "metaTitle": "Stellar Chemical Corp. | Google Ads & Conversion Tracking Case Study",
    "title": "Fixing the Data First, Then Growing the Return on Ad Spend 2.7x",
    "client": "Stellar Chemical Corp.",
    "category": "Google Ads",
    "services": [
      "Google Search",
      "Conversion Tracking",
      "Brand Search",
      "Campaign Optimization"
    ],
    "subtitle": "Strong dashboard. Weak sales. Fixing conversion measurement and optimizing campaigns based on real purchase data for a specialty chemical retailer.",
    "year": "26",
    "cardImage": "/images/uploads/stellar-chemical-card.jpg",
    "heroImage": "/images/uploads/stellar-chemical-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/stellar-chemical-1.jpg", "full": true },
      { "src": "/images/uploads/stellar-chemical-2.jpg", "full": true },
      { "src": "/images/uploads/stellar-chemical-3.jpg", "full": false },
      { "src": "/images/uploads/stellar-chemical-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "The numbers were lying. Google Ads was counting page views, cart adds, and checkout steps as sales, making every decision based on inflated data while non-performing campaigns stayed hidden."
      ],
      "bullets": [
        "Dashboard reported $96,992 conversion value in June against only ~$2,600 in real revenue",
        "Reported 2,493% ROAS ($25 per $1) was actually around $1.13 in real returns",
        "Shopify lacked conversion visibility to show which campaign drove each sale",
        "Automated search expansion wasted budget on irrelevant searches while ads routed to generic collection pages"
      ]
    },
    "approach": {
      "label": "Strategies",
      "paragraphs": [
        "The goal was simple: you can’t grow what you can’t measure. We executed a full measurement reset and focused budget strictly on profitable campaigns."
      ],
      "bullets": [
        "Set purchases as the sole conversion action so every report reflects real orders and revenue",
        "Implemented UTM tracking for complete campaign-level traffic and sales visibility in Shopify",
        "Refined keywords, aligned ad copy with real search intent, stopped wasted spend, and routed ads directly to specific product pages",
        "Launched a targeted Brand Search campaign that generated $4,456 in sales from just $32 in spend",
        "Paused unprofitable campaigns while reallocating budget toward top performers returning $4.36 to $5.50 per $1"
      ]
    },
    "design": {
      "label": "Wins & Results",
      "bullets": [
        "Return per $1 spent grew 2.7x from $1.13 to $3.01",
        "Monthly order volume doubled from ~17 to ~34 orders",
        "Generated 64 total orders and $14.8K revenue on $4.91K ad spend",
        "Core campaigns achieved $4.36 to $5.50 return per $1 spent post-optimization"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Page views and cart adds counted as sales",
        "No idea which campaign drove sales",
        "Spend spread across every campaign"
      ],
      "after": [
        "Purchases only, real revenue in every report",
        "Campaign-level visibility in Shopify",
        "Budget focused on campaigns that pay back"
      ]
    },
    "otherWorks": [
      "lanes-car-products",
      "advanage-the-wonder-cleaner"
    ]
  },

  {
    "slug": "perf-moto",
    "route": "/casestudy/google-ads-management-services/perf-moto",
    "metaTitle": "Perf-Moto | Google Ads & Feed Optimization Case Study",
    "title": "Unblocking a Stalled Account, Then Turning 180 Products into a 334% Return",
    "client": "Perf-Moto",
    "category": "Google Ads",
    "services": [
      "Google Shopping",
      "Performance Max",
      "Feed Optimization",
      "Account Troubleshooting"
    ],
    "subtitle": "380,000 products. Zero impressions. Resolving critical account blocks and optimizing feed data for high-intent powersports buyers.",
    "year": "26",
    "cardImage": "/images/uploads/perf-moto-card.jpg",
    "heroImage": "/images/uploads/perf-moto-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/perf-moto-1.jpg", "full": true },
      { "src": "/images/uploads/perf-moto-2.jpg", "full": true },
      { "src": "/images/uploads/perf-moto-3.jpg", "full": false },
      { "src": "/images/uploads/perf-moto-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "For three to four weeks, both Standard Shopping and Performance Max served nothing, with zero impressions or clicks. Underneath, the catalog was too big, messy, and exceeding Google limits."
      ],
      "bullets": [
        "Product group bids were automatically resetting to $0.01 even under automated bidding",
        "66,020 items (42% of the catalog) were missing product categories, shipping weights, or item group IDs",
        "Exceeded Google's Shopping product quota limit, causing rejected quota requests",
        "36,450 out-of-stock products remained listed as purchasable",
        "Empty page titles and meta descriptions across 141,413 products, plus missing cost prices on 27,697 apparel SKUs"
      ]
    },
    "approach": {
      "label": "Strategies",
      "paragraphs": [
        "The goal was simple: make sure the account can spend before optimizing anything. We escalated the backend suspension issue and streamlined the catalog to proven sellers."
      ],
      "bullets": [
        "Escalated the case until Google removed a hidden Daily Spending Limit from an account review, restoring auction eligibility",
        "Rewrote product titles for top 180 sellers (increasing average length from 52 to 101 characters) and added manufacturer part numbers to 148 items",
        "Assigned verified Google product categories and structured product types to all 180 core items",
        "Segmented the 180 products into 20 distinct themes labeled by product group, price band, sales tier, and target audience"
      ]
    },
    "design": {
      "label": "Wins & Results",
      "bullets": [
        "Return per $1 spent went from $0 to $3.35 (335% ROAS / 334% return)",
        "Generated 44 orders and $4.79K revenue on $1.43K ad spend",
        "Captured the first order on the very first day campaigns went live",
        "Achieved a $108.86 Average Order Value (AOV) with a $32.50 Cost Per Order (CPO)"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Campaigns live but blocked from every auction",
        "380,000 entries from four conflicting feeds",
        "No way to direct budget"
      ],
      "after": [
        "Restriction found, removed, and ads serving",
        "180 proven sellers with clean, verified data",
        "20 labeled themes ready to target"
      ]
    },
    "otherWorks": [
      "lanes-car-products",
      "advanage-the-wonder-cleaner"
    ]
  },

  // =========================================================================
  // 4. SHOPIFY DEVELOPMENT (Test Data)
  // =========================================================================
  {
    "slug": "advanage-shopify-migration",
    "route": "/casestudy/shopify-development-services/advanage-shopify-migration",
    "metaTitle": "Advanage | Shopify Migration & UX/UI Redesign Case Study",
    "title": "Migrating a Cleaning Brand Trusted Since 1980 from Miva Merchant to Shopify",
    "client": "Advanage",
    "category": "Ecommerce (Home & Industrial Cleaning)",
    "services": [
      "Shopify Migration",
      "UX/UI Improvements",
      "Conversion Optimization"
    ],
    "subtitle": "A proven product on an outdated platform. Rebuilding a legacy Miva Merchant store into a high-converting, modern Shopify experience.",
    "year": "26",
    "cardImage": "/images/uploads/advanage-shopify-card.jpg",
    "heroImage": "/images/uploads/advanage-shopify-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/advanage-shopify-1.jpg", "full": true },
      { "src": "/images/uploads/advanage-shopify-2.jpg", "full": true },
      { "src": "/images/uploads/advanage-shopify-3.jpg", "full": false },
      { "src": "/images/uploads/advanage-shopify-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "Customers found it, but the store made them work to buy it. Moving a 40+ year brand off a legacy platform required rebuilding a complex catalog without losing data, SEO rankings, or brand identity."
      ],
      "bullets": [
        "Migrating catalog, URLs, and customer data seamlessly from Miva Merchant to Shopify",
        "Rebuilding a complex size, scent, and bundle structure inside Shopify's variant model",
        "Mapping Miva's legacy structure into clean, logical Shopify collections",
        "Modernizing design while preserving established brand equity and trust"
      ]
    },
    "approach": {
      "label": "The Approach",
      "paragraphs": [
        "The goal was simple: make it easier to find the right product and buy it. We executed a full Shopify build designed around customer purchasing behavior."
      ],
      "bullets": [
        "Full migration to Shopify with structured navigation across Quarts, Gallons, Drums, Specials, and Accessories",
        "Designed a mega menu with seamless scent and size switching on product pages without page reloads",
        "Created consistent product detail pages featuring use-case titles, reviews, and trust badges",
        "Engineered starter kits, value bundles, and promotional banners to accelerate first-time purchases",
        "Integrated trust sections highlighting 45+ years of history, 40M+ customers, and eco-friendly formulas along with built-in FAQs, loyalty programs, and shipping thresholds"
      ]
    },
    "design": {
      "label": "Key Wins",
      "bullets": [
        "Seamless migration of historical customer data, legacy catalog, and URL structures",
        "Streamlined variant switching for scents and sizes without reloading pages",
        "Created a frictionless customer journey from landing page to checkout",
        "Empowered the internal marketing team to manage and scale promotions without developer bottlenecks"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Rigid Miva Merchant storefront",
        "Hard-to-navigate sizes, scents, and bundles",
        "A store that made buyers work"
      ],
      "after": [
        "A Shopify store the team can manage and scale without developer bottlenecks",
        "Clear discovery from menu to product page",
        "A clear path from landing page to checkout"
      ]
    },
    "otherWorks": [
      "lanes-car-products",
      "perf-moto"
    ]
  },

  {
    "slug": "woofleys-shopify-store",
    "route": "/casestudy/shopify-development-services/woofleys-shopify-store",
    "metaTitle": "Woofley’s | Brand-Led Shopify Store & UX Design Case Study",
    "title": "Building a Dog Chew Brand’s First Website Around Its Story, Not Just Its Catalog",
    "client": "Woofley’s",
    "category": "Ecommerce (Pet / Natural Dog Chews)",
    "services": [
      "Shopify Development",
      "Brand-Led UX/UI Design",
      "Conversion Optimization",
      "Creative Direction"
    ],
    "subtitle": "A great product with nowhere to live. Building a brand-first Shopify storefront with guided shopping experiences for natural dog chew buyers.",
    "year": "26",
    "cardImage": "/images/uploads/woofleys-card.jpg",
    "heroImage": "/images/uploads/woofleys-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/woofleys-1.jpg", "full": true },
      { "src": "/images/uploads/woofleys-2.jpg", "full": true },
      { "src": "/images/uploads/woofleys-3.jpg", "full": false },
      { "src": "/images/uploads/woofleys-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "Starting from zero in a sea of product grids. There was no existing site, traffic, or brand assets to build on, and competitors all led with generic product-grid layouts."
      ],
      "bullets": [
        "Launching with no existing site, traffic, or brand assets",
        "Standing out in a category dominated by uninspired product-grid stores",
        "Making bully sticks, collagen, beef, and lamb chews easy to navigate and choose between",
        "Balancing rich brand storytelling with an efficient, clear path to checkout"
      ]
    },
    "approach": {
      "label": "The Approach",
      "paragraphs": [
        "The goal was simple: brand first, products second. We built a personality-driven storefront that engages customers from the first screen to checkout."
      ],
      "bullets": [
        "Designed a brand-first homepage centered around 'Simple Ingredients. Serious Chewing.' and core company values",
        "Created a three-chapter visual story narrative paired with 'We Don’t Do Gimmicks' sections addressing ingredient safety and digestion",
        "Developed an interactive 'Find Their Chew' selector categorizing by chewer type (from Little Nibbler to Power Chewer)",
        "Implemented 'Shop by Chew' collections and a 'Chew 101' guide with toughness ratings for first-time buyers",
        "Incorporated customer reviews near add-to-cart buttons, free-shipping progress indicators, FAQs, and satisfaction guarantees"
      ]
    },
    "design": {
      "label": "Key Wins",
      "bullets": [
        "Established a complete digital brand identity and direct-to-consumer storefront from scratch",
        "Simplified chew selection with guided chewer-type navigation and Chew 101 ratings",
        "Differentiated the brand in a crowded market through custom visual assets and storytelling",
        "Reduced purchase hesitation with strategic trust signals, FAQs, and clear shipping thresholds"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "No website or online presence",
        "A wide chew range with no guidance",
        "Nothing to separate it from other sellers"
      ],
      "after": [
        "A brand-led Shopify store",
        "Shopping by chewer type and chew guide",
        "A distinct identity in a crowded category"
      ]
    },
    "otherWorks": [
      "advanage-shopify-migration",
      "lanes-car-products"
    ]
  },

  {
    "slug": "stellar-chemical-shopify-redesign",
    "route": "/casestudy/shopify-development-services/stellar-chemical-shopify-redesign",
    "metaTitle": "Stellar Chemical Corp. | Shopify UI/UX Redesign & Catalog Case Study",
    "title": "Redesigning a Complex Chemical Catalog for B2B & Retail Buyers",
    "client": "Stellar Chemical Corp.",
    "category": "Ecommerce (Chemicals, Food Ingredients, Lab & Industrial Supplies)",
    "services": [
      "UI/UX Design",
      "Shopify Development",
      "Conversion Optimization"
    ],
    "subtitle": "Chemical buyers know what they need. Streamlining a vast B2B/B2C ingredient and chemical catalog so customers can find specs and check out with confidence.",
    "year": "26",
    "cardImage": "/images/uploads/stellar-chemical-redesign-card.jpg",
    "heroImage": "/images/uploads/stellar-chemical-redesign-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/stellar-chemical-redesign-1.jpg", "full": true },
      { "src": "/images/uploads/stellar-chemical-redesign-2.jpg", "full": true },
      { "src": "/images/uploads/stellar-chemical-redesign-3.jpg", "full": false },
      { "src": "/images/uploads/stellar-chemical-redesign-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "Visitors could explore the catalog but struggled to find the right grade, size, and quantity quickly. With buyers ranging from home users to industrial purchasers, one storefront had to serve everyone clearly."
      ],
      "bullets": [
        "Organizing an extensive technical catalog without overwhelming prospective buyers",
        "Handling multi-category crossover products like propylene glycol and castor oil effectively",
        "Serving both individual retail customers and commercial bulk purchasers on a single platform",
        "Keeping long, technical product titles scannable, clear, and trustworthy"
      ]
    },
    "approach": {
      "label": "The Approach",
      "paragraphs": [
        "The goal was simple: less searching, more buying. We redesigned the user experience around how chemical buyers navigate and evaluate technical specifications."
      ],
      "bullets": [
        "Reorganized catalog navigation by buyer industry: food, industrial, pharma, oils, pet, and reagents",
        "Designed a high-converting homepage featuring key offers like free shipping thresholds ($75+) and featured bulk products",
        "Standardized product grid cards to showcase grade, purity level, and starting price at a glance",
        "Created technical product pages highlighting container sizes, volume pricing, and key specs upfront",
        "Built dedicated bulk ordering pathways for tote and high-volume industrial purchases",
        "Developed a mobile-friendly, cohesive design system applied uniformly across collection pages, product pages, and checkout"
      ]
    },
    "design": {
      "label": "Key Wins",
      "bullets": [
        "Transformed navigation into intent-based buyer categories",
        "Improved product card scannability with immediate grade and purity visibility",
        "Established efficient purchasing routes for both small-pack retail and tote-level bulk buyers",
        "Streamlined UX/UI consistency across mobile and desktop devices"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Products scattered across many categories",
        "Grade and purity buried in long titles",
        "One path for every buyer"
      ],
      "after": [
        "Navigation organized by buyer need",
        "Key specs visible on every card and page",
        "Clear routes for retail and bulk orders"
      ]
    },
    "otherWorks": [
      "advanage-shopify-migration",
      "woofleys-shopify-store"
    ]
  },

  {
    "slug": "lanes-car-products-shopify-migration",
    "route": "/casestudy/shopify-development-services/lanes-car-products-shopify-migration",
    "metaTitle": "Lane’s Car Products | BigCommerce to Shopify Migration Case Study",
    "title": "Migrating a Large Auto Care Catalog from BigCommerce to Shopify",
    "client": "Lane’s Car Products",
    "category": "Ecommerce (Automotive Detailing & Car Care)",
    "services": [
      "BigCommerce to Shopify Migration",
      "UI/UX Design",
      "Conversion Optimization"
    ],
    "subtitle": "The catalog outgrew the platform. Rebuilding a massive automotive detailing store to serve both retail car owners and professional detailers.",
    "year": "26",
    "cardImage": "/images/uploads/lanes-shopify-migration-card.jpg",
    "heroImage": "/images/uploads/lanes-shopify-migration-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/lanes-shopify-migration-1.jpg", "full": true },
      { "src": "/images/uploads/lanes-shopify-migration-2.jpg", "full": true },
      { "src": "/images/uploads/lanes-shopify-migration-3.jpg", "full": false },
      { "src": "/images/uploads/lanes-shopify-migration-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "Thousands of listings. Two very different buyers. Moving a large vehicle-specific catalog meant rebuilding its whole structure without losing data, while creating a storefront that worked for both weekend car owners and dealership detailers."
      ],
      "bullets": [
        "Migrating a large vehicle-specific catalog without losing historical data",
        "Rebuilding complex BigCommerce categories and product attributes inside Shopify",
        "Keeping fitment-based shopping simple across thousands of custom listings",
        "Serving both retail consumers and high-volume professional buyers on one storefront"
      ]
    },
    "approach": {
      "label": "The Approach",
      "paragraphs": [
        "The goal was simple: complex catalog, simple path. We executed a full platform migration focused on intuitive navigation and vehicle fitment matching."
      ],
      "bullets": [
        "Full migration of products, collections, and URLs with comprehensive 301 redirects mapped from BigCommerce to Shopify",
        "Designed an intuitive mega menu covering interior care, scents, exterior washing, waxing/polishing, tools, and auto wheels",
        "Integrated an 'Add your vehicle' fitment prompt and collection counts to easily navigate thousands of vehicle-specific listings",
        "Engineered high-converting homepage sections featuring Best Sellers, Bundles, 'Top picks under $25,' deal countdowns, and sale badges",
        "Enhanced product cards with Quick View, Wishlist, Product Compare, stock level indicators, and dynamic pricing displays",
        "Surfaced trust bars, professional proof points, military discounts, financing, bulk purchasing, and dropshipping options"
      ]
    },
    "design": {
      "label": "Key Wins",
      "bullets": [
        "Seamless platform migration with zero loss of product data or URL equity",
        "Streamlined fitment-based navigation across thousands of vehicle-specific SKUs",
        "Unified shopping experience catering to both DIY car owners and professional detailers",
        "Empowered internal team with an easily updates-and-scalable Shopify backend"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "A catalog that outgrew BigCommerce",
        "Hard to find the right product for your car",
        "One experience for every buyer"
      ],
      "after": [
        "A Shopify store the team can update and grow without platform limits",
        "Fitment-based shopping and clear navigation",
        "Built for car owners and professionals alike"
      ]
    },
    "otherWorks": [
      "advanage-shopify-migration",
      "stellar-chemical-shopify-redesign"
    ]
  },

  // =========================================================================
  // 5. SEO & CONTENT (Test Data)
  // =========================================================================
  {
    "slug": "max-berger-real-estate-seo",
    "route": "/casestudy/seo-content-strategy-services/max-berger-real-estate-seo",
    "metaTitle": "Max Berger Compass | Los Angeles Real Estate & AI Search SEO Case Study",
    "title": "Making a Los Angeles Multifamily Broker the Go-To Resource on Google & AI Search",
    "client": "Max Berger, Compass",
    "category": "SEO (Real Estate / Multifamily)",
    "services": [
      "Technical SEO",
      "Content Strategy",
      "Location & Service Pages",
      "Listing Pages",
      "Link Building",
      "Google Business Profile",
      "AI Search Visibility",
      "LinkedIn & Reddit"
    ],
    "subtitle": "Built to be found, and recommended. Positioning a top LA apartment broker at the top of Google Search, Google Maps, and AI tools like ChatGPT.",
    "year": "26",
    "cardImage": "/images/uploads/max-berger-seo-card.jpg",
    "heroImage": "/images/uploads/max-berger-seo-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/max-berger-seo-1.jpg", "full": true },
      { "src": "/images/uploads/max-berger-seo-2.jpg", "full": true },
      { "src": "/images/uploads/max-berger-seo-3.jpg", "full": false },
      { "src": "/images/uploads/max-berger-seo-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "Strong rankings, weak results. Valuable core pages were hidden or buried, while competitors with fresher proof and more Google reviews dominated Map-packs and AI responses."
      ],
      "bullets": [
        "1031 exchange page was hidden from Google, RSO selling guide sat on page 5, and listings page was buried on page 4",
        "Organic broker searches lost clicks to Google Maps local packs sitting above website results",
        "Generic page titles and meta descriptions failed to draw search clicks",
        "Competitors held 5x more Google reviews and newer closing data cited by AI models",
        "Less than 1% of web form submissions were valid owner inquiries, with technical plugin errors causing site downtime"
      ]
    },
    "approach": {
      "label": "The Approach",
      "paragraphs": [
        "The goal was simple: become the resource owners trust, and AI will recommend you. We built a comprehensive broker authority engine across search, maps, and AI platforms."
      ],
      "bullets": [
        "Resolved indexing blocks on core service pages and built strategic internal links to elevate ranking positions",
        "Rewrote meta titles and descriptions around key buyer and seller search intent to maximize click-through rate",
        "Optimized Google Business Profile and executed review acquisition campaigns to expand map presence",
        "Created structured neighborhood guides, closed-deal posts, and updated market data for AI models to index and cite",
        "Fixed website technical glitches, form submission routing, and plugin stability"
      ]
    },
    "design": {
      "label": "Results & Impact",
      "bullets": [
        "#1 ranking on Google for 6 core keywords, including 'multifamily agent los angeles' and 'best multifamily broker los angeles'",
        "+44% Increase in search click-through rate and +39% growth in organic search sessions",
        "Recommended by ChatGPT in 100% of tested LA neighborhood queries and included in 100% of captured Google AI Overviews",
        "+141% Increase in Google Business Profile views and +115% increase in direction requests with 100% 5-star reviews (+22% new reviews)",
        "Cap rates guide impressions grew 150x, with the RSO guide climbing into Google's top 10"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Key pages hidden or buried in search",
        "Rankings that didn’t earn clicks",
        "Competitors winning AI with fresher proof"
      ],
      "after": [
        "Indexed pages climbing to page 1, backed by internal links and backlinks",
        "Titles and descriptions built around searchers’ answers",
        "Neighborhood pages, closed-deal posts, and ongoing content AI can cite"
      ]
    },
    "otherWorks": [
      "lanes-car-products",
      "advanage-shopify-migration"
    ]
  },

  {
    "slug": "perf-moto-seo",
    "route": "/casestudy/seo-content-strategy-services/perf-moto-seo",
    "metaTitle": "Perf-Moto | Ecommerce SEO & Content Strategy Case Study",
    "title": "Turning a Massive Powersports Catalog into an Organic Search Sales Engine",
    "client": "Perf-Moto",
    "category": "SEO (Ecommerce / Powersports)",
    "services": [
      "Technical SEO",
      "Structured Data",
      "Content Strategy",
      "Custom Blog Template",
      "Internal Linking",
      "Search Analytics Setup"
    ],
    "subtitle": "Turning a massive powersports catalog with no organic foundation into a site that ranks, earns clicks, and sells.",
    "year": "26",
    "cardImage": "/images/uploads/perf-moto-seo-card.jpg",
    "heroImage": "/images/uploads/perf-moto-seo-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/perf-moto-seo-1.jpg", "full": true },
      { "src": "/images/uploads/perf-moto-seo-2.jpg", "full": true },
      { "src": "/images/uploads/perf-moto-seo-3.jpg", "full": false },
      { "src": "/images/uploads/perf-moto-seo-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "Blocked, unmeasured, and buried in duplicates. Search and AI crawlers were locked out, nothing was being measured, and the catalog looked identical to hundreds of competing resellers."
      ],
      "bullets": [
        "robots.txt blocked Bing and every AI crawler, including GPTBot, ClaudeBot, and PerplexityBot",
        "No Search Console, GA4, or Tag Manager active, with an invalid sitemap submitted to Google",
        "Duplicated manufacturer copy across 150,000 products, with only 24% of top-brand products carrying real GTINs",
        "No blog content, and high-intent category pages earning impressions with minimal clicks",
        "BigCommerce native blog limitations restricting custom fields, sidebars, FAQs, or summary features",
        "Duplicate product URLs splitting ranking signals and diluting click-through rates"
      ]
    },
    "approach": {
      "label": "The Approach",
      "paragraphs": [
        "The goal was simple: focus on what sells, then make it easy to find. We unblocked search crawlers, established proper analytics, and built high-intent content hubs around core revenue drivers."
      ],
      "bullets": [
        "Removed crawler blocks and implemented GA4, Google Tag Manager, and a validated sitemap structure",
        "Prioritized technical SEO and structured data optimization for the top 14% of products driving 80% of sales",
        "Implemented schema markup for rich result eligibility (merchant listings, ratings, availability)",
        "Built a custom BigCommerce blog framework with sidebars, custom fields, and product embeds for buyer-intent comparison guides",
        "Consolidated duplicate product URLs to focus search authority and clean up crawl efficiency"
      ]
    },
    "design": {
      "label": "Results & Impact",
      "bullets": [
        "65% of the top 1,000 tracked queries ranked on page 1, with 18% in the top 3 positions",
        "Rich results drove 56% of all organic clicks, with merchant listings averaging position 1.3 at double the site's average CTR",
        "Overall organic click-through rate increased by +41%",
        "Brand search keywords achieved a 55–62% click-through rate",
        "Buyer guide content expanded organically, achieving top 4 rankings for major brand comparison keywords"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Crawlers blocked and no tracking in place",
        "150,000 generic products treated the same",
        "No content and no path from search to product"
      ],
      "after": [
        "Full crawler access, a clean sitemap, and Search Console, GA4, and GTM live",
        "SEO focused on the 14% of products driving 80% of sales",
        "Buyer-intent guides on a custom template that links straight to products"
      ]
    },
    "otherWorks": [
      "max-berger-real-estate-seo",
      "lanes-car-products"
    ]
  },

  {
    "slug": "advanage-seo-migration",
    "route": "/casestudy/seo-content-strategy-services/advanage-seo-migration",
    "metaTitle": "ADVANAGE | Ecommerce SEO & Platform Migration Case Study",
    "title": "Taking a Decades-Old Cleaning Brand Through a Full Migration & Scaling Organic Search",
    "client": "Advanage Diversified Products, Inc.",
    "category": "SEO (Ecommerce / Home & Industrial Cleaning)",
    "services": [
      "Migration SEO",
      "Technical SEO",
      "Keyword Research",
      "Topical Mapping",
      "Content Strategy",
      "Performance Analysis"
    ],
    "subtitle": "A proven product with no search history on a fresh domain. Executing a seamless platform migration to Shopify while driving a 9.6x increase in organic clicks.",
    "year": "26",
    "cardImage": "/images/uploads/advanage-seo-card.jpg",
    "heroImage": "/images/uploads/advanage-seo-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/advanage-seo-1.jpg", "full": true },
      { "src": "/images/uploads/advanage-seo-2.jpg", "full": true },
      { "src": "/images/uploads/advanage-seo-3.jpg", "full": false },
      { "src": "/images/uploads/advanage-seo-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "Two platforms, hundreds of URLs, one fresh start. Every legacy page had to find a new home without losing its value inside Shopify's fixed URL structure while capturing search traffic across common brand misspellings."
      ],
      "bullets": [
        "Migrating legacy storefront from Miva Merchant and blog from WordPress into Shopify's fixed URL architecture",
        "Mapping hundreds of legacy URLs with an incomplete blog sitemap and mixed HTTP/HTTPS URLs",
        "Blank or placeholder meta descriptions, misaligned commercial page titles, and thin category copy",
        "Branded search intent fragmented across terms like 'Advantage', 'Vanish', and 'Wonder Cleaner'",
        "Over-reliance on basic informational content with a lack of decision-stage buying guides or comparisons"
      ]
    },
    "approach": {
      "label": "The Approach",
      "paragraphs": [
        "The goal was simple: lose nothing in the move, then win the searches that sell. We managed 1:1 redirect mappings and optimized decision-stage search content."
      ],
      "bullets": [
        "Mapped every legacy URL 1:1 with permanent 301 redirects into Shopify to retain domain authority",
        "Optimized meta descriptions, titles, and category copy to address both retail and commercial search intent",
        "Captured branded misspellings (e.g., 'advantage wonder cleaner') through targeted page structures",
        "Published decision-stage content, including head-to-head competitor comparisons, product reviews, and commercial buying guides",
        "Structured product pages for rich snippet and merchant listing eligibility in search results"
      ]
    },
    "design": {
      "label": "Results & Impact",
      "bullets": [
        "9.6x Increase in organic clicks and 3.4x growth in organic search impressions",
        "2.8x Increase in click-through rate with average ranking position jumping from 11.2 (Page 2) to 5.9 (Top 6)",
        "56% of tracked search queries ranking in the top 10 positions and 24% in the top 3",
        "Ranked position 1.9 for primary misspelled brand searches like 'advantage wonder cleaner'",
        "SDS Sheets page converting trust-seeking shoppers at an 18% click-through rate"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Two platforms and hundreds of legacy URLs",
        "Informational content that earned no sales",
        "Branded searches scattered across misspellings"
      ],
      "after": [
        "Every URL mapped 1:1 with permanent redirects into Shopify",
        "Reviews, comparisons, and buying guides built for decision-stage shoppers",
        "Pages built around every way people search for the brand"
      ]
    },
    "otherWorks": [
      "perf-moto-seo",
      "max-berger-real-estate-seo"
    ]
  },

  {
    "slug": "lanes-car-products-seo-migration",
    "route": "/casestudy/seo-content-strategy-services/lanes-car-products-seo-migration",
    "metaTitle": "Lane’s Car Products | Ecommerce SEO & Platform Migration Case Study",
    "title": "Protecting Search Visibility Through a Full Platform Migration & Rebuilding Organic Growth",
    "client": "Lane’s Car Products",
    "category": "SEO (Ecommerce / Automotive Detailing & Car Care)",
    "services": [
      "Migration SEO",
      "Indexing & Crawl Health",
      "On-Page SEO",
      "Keyword Research",
      "Topical Mapping",
      "Content Strategy",
      "AI Search Readiness"
    ],
    "subtitle": "Years of rankings, one risky move. Protecting search authority through a 23,000+ SKU BigCommerce to Shopify migration and expanding organic revenue.",
    "year": "26",
    "cardImage": "/images/uploads/lanes-seo-card.jpg",
    "heroImage": "/images/uploads/lanes-seo-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/lanes-seo-1.jpg", "full": true },
      { "src": "/images/uploads/lanes-seo-2.jpg", "full": true },
      { "src": "/images/uploads/lanes-seo-3.jpg", "full": false },
      { "src": "/images/uploads/lanes-seo-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "paragraphs": [
        "Tens of thousands of URLs changing overnight. Moving a 23,000+ product catalog from BigCommerce to Shopify risked wiping out decades of search history while Google recrawled and reranked the new domain structure."
      ],
      "bullets": [
        "Over 67,000 legacy URLs changing simultaneously across a site with established ranking history",
        "Erroneous noindex tags blocking key pages and outdated BigCommerce sitemaps still being crawled",
        "115+ collection pages launched with placeholder titles and missing meta descriptions",
        "Thin product descriptions and duplicate FAQ schema repeated site-wide",
        "Content strategy misaligned with actual user search query data",
        "Offline top-sellers generating 404 errors while major category pages sat buried on pages 2–5"
      ]
    },
    "approach": {
      "label": "The Approach",
      "paragraphs": [
        "The goal was simple: protect what the site had earned, then grow from it. We implemented a precise technical migration protocol and overhauled high-intent content."
      ],
      "bullets": [
        "Mapped every legacy URL 1:1 to its closest Shopify equivalent using permanent 301 redirects",
        "Resolved indexing blocks, removed outdated sitemaps, and resubmitted clean XML sitemaps in priority order",
        "Optimized titles, descriptions, and on-page content for over 115 collection and category pages",
        "Realigned topical mapping and content strategy using live Search Console and historical sales data",
        "Implemented structured data schema to maximize rich snippet and merchant listing eligibility",
        "Published targeted buyer guides (e.g., tire dressing guides) to capture non-branded search volume"
      ]
    },
    "design": {
      "label": "Results & Impact",
      "bullets": [
        "+63% Increase in organic clicks and +57% growth in search impressions post-launch",
        "Average ranking position improved from 17.7 to 14.5 across the catalog",
        "Product snippets drive 58% of all organic clicks, with merchant listings averaging position 2.1",
        "Page 1 rankings for competitive terms like 'best tire shine' and #2 for model-specific steering wheel queries",
        "Over 25% of Page 1 keywords now rank in Top 3 positions, with flagship products driving organic sales with zero ad spend"
      ]
    },
    "change": {
      "label": "Transformation",
      "before": [
        "Tens of thousands of old URLs at risk",
        "Noindex tags and old sitemaps blocking discovery",
        "A content plan that missed real demand"
      ],
      "after": [
        "Every old URL mapped 1:1 to its closest new page with a permanent redirect",
        "Clean sitemap, noindex errors fixed, and key pages indexed in priority order",
        "Topics re-ranked with Search Console and sales data, built around buyer intent"
      ]
    },
    "otherWorks": [
      "perf-moto-seo",
      "advanage-seo-migration"
    ]
  },

  // =========================================================================
  // 6. CREATIVE STRATEGY (Test Data)
  // =========================================================================
  {
    slug: "creative-test-project-1",
    route: "/casestudy/creative-strategy-services/creative-test-project-1",
    metaTitle: "[Test Data] High-Converting Ad Creative Engine | Case Study",
    title: "[Test Data] High-Velocity Ad Creative Engine",
    client: "[Test Data] Direct-to-Consumer Beauty",
    category: "Creative Strategy",
    services: ["[Test Data] Video Hook Ideation", "[Test Data] UGC Scripting", "[Test Data] Motion Graphics & Iteration"],
    subtitle: "[Test Data] Systematic creative production testing 20+ bespoke ad variations weekly to break through fatigue.",
    year: "25",
    cardImage: "/images/uploads/Project-1-scaled.jpg",
    heroImage: "/images/uploads/Project-1-1st-Image-1.jpg",
    gallery: [
      { src: "/images/uploads/Project-1-1st-Image-1.jpg", full: true },
      { src: "/images/uploads/Project-1-2nd-scaled.jpg", full: true },
      { src: "/images/uploads/Project-1-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Beautiful studio photography was winning design awards but failing to convert on paid social feeds."],
      bullets: [
        "[Test Data] Ad click-through rates below 0.6%",
        "[Test Data] Production cycles took 6 weeks per creative concept",
        "[Test Data] Creative team disconnected from ad account data",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Re-engineered creative production around modular frameworks: swapping hooks, bodies, and CTAs dynamically."],
      bullets: [
        "[Test Data] Direct response scripts built on consumer pain points",
        "[Test Data] Real user creator network producing authentic smartphone footage",
        "[Test Data] 48-Hour turnaround from performance data to creative iteration",
      ],
    },
    design: {
      label: "[Test Data] Wins",
      bullets: [
        "[Test Data] 3.2x Average ROAS on newly launched creative batches",
        "[Test Data] Hook retention rate increased from 14% to 38%",
        "[Test Data] 5 Evergreen winner creatives identified that spent over $500K profitably",
      ],
    },
    change: {
      label: "[Test Data] Creative Output",
      before: ["[Test Data] Slow, expensive studio shoots with zero performance feedback"],
      after: ["[Test Data] Rapid iterative creative machine driving relentless ad performance"],
    },
    otherWorks: ["creative-test-project-2", "creative-test-project-3"],
  },

  {
    slug: "creative-test-project-2",
    route: "/casestudy/creative-strategy-services/creative-test-project-2",
    metaTitle: "[Test Data] Brand Positioning & Visual Strategy | Case Study",
    title: "[Test Data] Brand Visual & Voice Transformation",
    client: "[Test Data] Sustainable Activewear",
    category: "Creative Strategy",
    services: ["[Test Data] Brand Positioning", "[Test Data] Tone of Voice Guidelines", "[Test Data] Campaign Art Direction"],
    subtitle: "[Test Data] Elevating an activewear label from generic workout gear to an iconic cultural lifestyle movement.",
    year: "25",
    cardImage: "/images/uploads/Project-2-scaled.jpg",
    heroImage: "/images/uploads/Project-2-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-2-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-2-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-2-4th-Image.jpg", full: false },
      { src: "/images/uploads/01c1c4236835079.68f41039d5926.gif", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] The brand message was getting lost in commoditized fitness advertising."],
      bullets: [
        "[Test Data] Competitors copying aesthetics and marketing angles",
        "[Test Data] Weak emotional bond with target fitness community",
        "[Test Data] Low customer brand recall after first purchase",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Developed a bold, rebellious creative manifesto centered on resilience, raw authenticity, and community pride."],
      bullets: [
        "[Test Data] Distinctive typography and high-contrast color palette",
        "[Test Data] Documentary-style athlete spotlight video series",
        "[Test Data] Cohesive visual system across packaging, web, and ads",
      ],
    },
    design: {
      label: "[Test Data] Results",
      bullets: [
        "[Test Data] Social engagement rates increased by 4x",
        "[Test Data] Sellout of signature collection within 72 hours of launch",
        "[Test Data] Organic word-of-mouth mentions multiplied across communities",
      ],
    },
    change: {
      label: "[Test Data] Brand Perception",
      before: ["[Test Data] Seen as just another gym clothing vendor"],
      after: ["[Test Data] Recognized as an aspirational, authentic lifestyle brand"],
    },
    otherWorks: ["creative-test-project-1", "creative-test-project-4"],
  },

  {
    slug: "creative-test-project-3",
    route: "/casestudy/creative-strategy-services/creative-test-project-3",
    metaTitle: "[Test Data] 3D Animation & Product Visualization | Case Study",
    title: "[Test Data] 3D Product Renders & Motion Visuals",
    client: "[Test Data] Acoustic Tech Hardware",
    category: "Creative Strategy",
    services: ["[Test Data] 3D Modeling & CAD Rendering", "[Test Data] Exploded View Animations", "[Test Data] Interactive Product Pages"],
    subtitle: "[Test Data] Explaining intricate acoustic engineering through photorealistic 3D visuals and immersive motion.",
    year: "25",
    cardImage: "/images/uploads/Project-3-1-scaled.jpg",
    heroImage: "/images/uploads/Project-3-1-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
      { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Customers could not appreciate the $400 price tag without understanding the internal audio engineering."],
      bullets: [
        "[Test Data] Physical prototypes were slow and expensive to shoot",
        "[Test Data] Complex internal drivers were invisible in regular photography",
        "[Test Data] High bounce rate on technical specifications page",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Created cinematic 3D animations displaying acoustic soundwaves, titanium drivers, and magnetic seals."],
      bullets: [
        "[Test Data] Seamless 360-degree interactive product viewer",
        "[Test Data] Micro-animations highlighting premium tactile materials",
        "[Test Data] Cutaway motion clips repurposed for paid ad hooks",
      ],
    },
    design: {
      label: "[Test Data] Impact",
      bullets: [
        "[Test Data] Conversion rate on flagship product increased by 52%",
        "[Test Data] Average time on page jumped from 45s to 3m 12s",
        "[Test Data] 3D Ad creatives produced 2.8x higher CTR than standard photo ads",
      ],
    },
    change: {
      label: "[Test Data] Visual Quality",
      before: ["[Test Data] Flat 2D photographs failing to justify premium value"],
      after: ["[Test Data] Cinematic 3D storytelling validating premium positioning"],
    },
    otherWorks: ["creative-test-project-1", "creative-test-project-2"],
  },

  {
    slug: "creative-test-project-4",
    route: "/casestudy/creative-strategy-services/creative-test-project-4",
    metaTitle: "[Test Data] Omnichannel Creative Campaign Launch | Case Study",
    title: "[Test Data] Omnichannel Launch Campaign",
    client: "[Test Data] Premium Snack Foods",
    category: "Creative Strategy",
    services: ["[Test Data] Integrated Launch Strategy", "[Test Data] Packaging Design", "[Test Data] Influencer Seeding Assets"],
    subtitle: "[Test Data] Generating nationwide retail buzz and viral online demand for a retail-first snack launch.",
    year: "25",
    cardImage: "/images/uploads/Project-4-scaled.jpg",
    heroImage: "/images/uploads/Project-4-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Securing shelf placement in national grocery chains required proven consumer velocity and demand proof."],
      bullets: [
        "[Test Data] Retail buyers demanding evidence of direct customer demand",
        "[Test Data] Highly crowded snack food aisles",
        "[Test Data] Need for tight coordination between online ads and physical store rollouts",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Rolled out a geo-targeted creative blitz notifying local shoppers within 5 miles of newly stocking store locations."],
      bullets: [
        "[Test Data] Eye-catching neon packaging designs with QR gamification",
        "[Test Data] Influencer taste-test challenge videos on TikTok and Reels",
        "[Test Data] Store-locator dynamic ad units offering free in-store vouchers",
      ],
    },
    design: {
      label: "[Test Data] Results",
      bullets: [
        "[Test Data] Initial production run sold out nationwide within 3 weeks",
        "[Test Data] Secured distribution expansion into 2,400 additional retail doors",
        "[Test Data] Generated over 14 million organic impressions on launch weekend",
      ],
    },
    change: {
      label: "[Test Data] Retail Trajectory",
      before: ["[Test Data] Struggling to convince store buyers to stock the product"],
      after: ["[Test Data] Retailers actively requesting reorders to meet customer demand"],
    },
    otherWorks: ["creative-test-project-1", "creative-test-project-3"],
  },

  // =========================================================================
  // 7. CONVERSION OPTIMISATION (Test Data)
  // =========================================================================
  {
    slug: "conversion-test-project-1",
    route: "/casestudy/conversion-optimization-services/conversion-test-project-1",
    metaTitle: "[Test Data] Checkout Funnel CRO & Friction Reduction | Case Study",
    title: "[Test Data] Checkout Friction & Drop-Off Elimination",
    client: "[Test Data] Specialty Kitchenware",
    category: "Conversion Optimisation",
    services: ["[Test Data] UX Heatmap Audits", "[Test Data] A/B Split Testing", "[Test Data] Checkout Flow Redesign"],
    subtitle: "[Test Data] Eliminating checkout bottlenecks to reclaim abandoned carts and boost revenue per visitor.",
    year: "25",
    cardImage: "/images/uploads/Project-1-scaled.jpg",
    heroImage: "/images/uploads/Project-1-1st-Image-1.jpg",
    gallery: [
      { src: "/images/uploads/Project-1-1st-Image-1.jpg", full: true },
      { src: "/images/uploads/Project-1-2nd-scaled.jpg", full: true },
      { src: "/images/uploads/Project-1-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] High traffic volume was arriving at checkout but failing to complete payment due to unnecessary input fields."],
      bullets: [
        "[Test Data] 68% cart abandonment rate on mobile",
        "[Test Data] Hidden shipping fees revealed too late in flow",
        "[Test Data] Confusing discount code application",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Deployed a streamlined single-page accordion checkout with upfront delivery estimates and Apple Pay express."],
      bullets: [
        "[Test Data] One-click express checkout options placed above the fold",
        "[Test Data] Live free shipping threshold progress tracker",
        "[Test Data] Exit-intent save cart modal with personalized incentive",
      ],
    },
    design: {
      label: "[Test Data] Results",
      bullets: [
        "[Test Data] Checkout completion rate jumped from 42% to 61%",
        "[Test Data] +$420,000 in recovered revenue in first 90 days",
        "[Test Data] Zero drop-off on mobile payment method selection",
      ],
    },
    change: {
      label: "[Test Data] Funnel Health",
      before: ["[Test Data] High cart abandonment leaving substantial money on table"],
      after: ["[Test Data] High-velocity friction-free checkout path"],
    },
    otherWorks: ["conversion-test-project-2", "conversion-test-project-3"],
  },

  {
    slug: "conversion-test-project-2",
    route: "/casestudy/conversion-optimization-services/conversion-test-project-2",
    metaTitle: "[Test Data] Product Detail Page (PDP) CRO | Case Study",
    title: "[Test Data] High-Converting Product Detail Page",
    client: "[Test Data] Ergonomic Office Brand",
    category: "Conversion Optimisation",
    services: ["[Test Data] PDP Layout Architecture", "[Test Data] Social Proof Systems", "[Test Data] Microcopy Optimization"],
    subtitle: "[Test Data] Re-architecting the product detail page to address objections and accelerate buying decisions.",
    year: "25",
    cardImage: "/images/uploads/Project-2-scaled.jpg",
    heroImage: "/images/uploads/Project-2-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-2-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-2-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-2-4th-Image.jpg", full: false },
      { src: "/images/uploads/01c1c4236835079.68f41039d5926.gif", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Buyers hesitated on high-ticket ergonomic chairs because key dimension and warranty information was buried."],
      bullets: [
        "[Test Data] Average 3 visits needed before customer added to cart",
        "[Test Data] High volume of pre-sale support tickets",
        "[Test Data] Unconvincing customer review widget presentation",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Restructured the PDP hierarchy with sticky buy bars, interactive size visualizer, and verified video reviews."],
      bullets: [
        "[Test Data] Prominent guarantee and 30-day risk-free trial badges",
        "[Test Data] Height & weight interactive sizing recommendation tool",
        "[Test Data] Sticky mobile CTA bar with real-time stock alert",
      ],
    },
    design: {
      label: "[Test Data] Wins",
      bullets: [
        "[Test Data] Add-to-cart rate increased by 38%",
        "[Test Data] Pre-sale support inquiries dropped by 55%",
        "[Test Data] Average time-to-purchase decreased from 14 days to 4 days",
      ],
    },
    change: {
      label: "[Test Data] Page Effectiveness",
      before: ["[Test Data] Confusing product specs causing visitor hesitation"],
      after: ["[Test Data] Transparent, confidence-inspiring product page experience"],
    },
    otherWorks: ["conversion-test-project-1", "conversion-test-project-4"],
  },

  {
    slug: "conversion-test-project-3",
    route: "/casestudy/conversion-optimization-services/conversion-test-project-3",
    metaTitle: "[Test Data] Mobile Navigation & Search CRO | Case Study",
    title: "[Test Data] Mobile Navigation & Site Search",
    client: "[Test Data] Streetwear Apparel Co.",
    category: "Conversion Optimisation",
    services: ["[Test Data] Mobile UX Audit", "[Test Data] Predictive Search UI", "[Test Data] Filter UX Redesign"],
    subtitle: "[Test Data] Re-engineering mobile browsing pathways to help users find and purchase products in fewer clicks.",
    year: "25",
    cardImage: "/images/uploads/Project-3-1-scaled.jpg",
    heroImage: "/images/uploads/Project-3-1-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
      { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] 82% of shoppers visited on mobile devices, but the desktop-oriented menu made product discovery frustrating."],
      bullets: [
        "[Test Data] Site search usage had a 40% zero-results rate",
        "[Test Data] Cluttered hamburger navigation with too many nesting levels",
        "[Test Data] Difficult filter clearing on small screen sizes",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Designed a native app-like mobile experience with sticky bottom navigation and visual predictive search."],
      bullets: [
        "[Test Data] Instant search displaying product thumbnails and live price",
        "[Test Data] Quick-tag category chips along the top of collection pages",
        "[Test Data] Thumb-friendly filter drawer with single-tap apply",
      ],
    },
    design: {
      label: "[Test Data] Results",
      bullets: [
        "[Test Data] Search conversion rate increased by 2.4x",
        "[Test Data] Product discovery time cut by 60%",
        "[Test Data] Overall mobile revenue jumped by 34%",
      ],
    },
    change: {
      label: "[Test Data] Mobile Journey",
      before: ["[Test Data] Desktop-first navigation translated poorly to mobile screens"],
      after: ["[Test Data] Ultra-smooth app-like mobile discovery experience"],
    },
    otherWorks: ["conversion-test-project-1", "conversion-test-project-2"],
  },

  {
    slug: "conversion-test-project-4",
    route: "/casestudy/conversion-optimization-services/conversion-test-project-4",
    metaTitle: "[Test Data] Post-Purchase Upsell & AOV Maximization | Case Study",
    title: "[Test Data] Post-Purchase Upsell Architecture",
    client: "[Test Data] Clean Skincare Brand",
    category: "Conversion Optimisation",
    services: ["[Test Data] 1-Click Upsell Design", "[Test Data] Cart Drawer In-App Offers", "[Test Data] Threshold Rewards"],
    subtitle: "[Test Data] Deploying frictionless post-purchase and in-cart upsells without interrupting initial buyer intent.",
    year: "25",
    cardImage: "/images/uploads/Project-4-scaled.jpg",
    heroImage: "/images/uploads/Project-4-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Rising ad costs required higher revenue per customer to maintain healthy acquisition profitability."],
      bullets: [
        "[Test Data] Static single-item order average of $45",
        "[Test Data] Intrusive pre-checkout popups causing checkout abandonment",
        "[Test Data] Low take rate on related accessory products",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Implemented 1-click post-purchase upsell offers right after payment completion, plus dynamic in-cart cross-sells."],
      bullets: [
        "[Test Data] Native thank-you page product addons with no re-entering card info",
        "[Test Data] Intelligent companion product suggestions based on cart contents",
        "[Test Data] Tiered free shipping and gift unlocks",
      ],
    },
    design: {
      label: "[Test Data] Revenue Lift",
      bullets: [
        "[Test Data] Average Order Value grew from $45 to $68.50 (+52%)",
        "[Test Data] 22% of all purchasers accepted the post-purchase upsell",
        "[Test Data] Zero negative impact on primary checkout completion rate",
      ],
    },
    change: {
      label: "[Test Data] Monetization",
      before: ["[Test Data] Low basket sizes limiting advertising profitability"],
      after: ["[Test Data] High-value customer carts driving record profit margins"],
    },
    otherWorks: ["conversion-test-project-1", "conversion-test-project-3"],
  },

  // =========================================================================
  // 8. BRANDING & CREATIVE DESIGN (Test Data)
  // =========================================================================
  {
    slug: "branding-test-project-1",
    route: "/casestudy/branding-and-design-services/branding-test-project-1",
    metaTitle: "[Test Data] Complete Brand Identity & Design System | Case Study",
    title: "[Test Data] Modern Brand Identity System",
    client: "[Test Data] Artisanal Coffee Roasters",
    category: "Branding & Creative Design",
    services: ["[Test Data] Logo & Mark Design", "[Test Data] Brand Guidelines", "[Test Data] Packaging Architecture"],
    subtitle: "[Test Data] Crafting a timeless, tactile visual identity that bridges heritage craftsmanship with contemporary minimalism.",
    year: "25",
    cardImage: "/images/uploads/Project-1-scaled.jpg",
    heroImage: "/images/uploads/Project-1-1st-Image-1.jpg",
    gallery: [
      { src: "/images/uploads/Project-1-1st-Image-1.jpg", full: true },
      { src: "/images/uploads/Project-1-2nd-scaled.jpg", full: true },
      { src: "/images/uploads/Project-1-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Existing branding felt dated and failed to convey the premium, single-origin quality of the coffee."],
      bullets: [
        "[Test Data] Fragmented fonts and colors across retail bags and web",
        "[Test Data] Weak brand recognition on crowded cafe shelves",
        "[Test Data] Lack of clear design standards for marketing collateral",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Built a grounded brand identity featuring custom serif typography, earthy bespoke textures, and distinct roast badges."],
      bullets: [
        "[Test Data] Custom embossed icon symbolizing origins and flame",
        "[Test Data] Sustainable, matte-finish compostable packaging system",
        "[Test Data] 80-Page comprehensive brand bible and design assets",
      ],
    },
    design: {
      label: "[Test Data] Brand Impact",
      bullets: [
        "[Test Data] 150% Increase in wholesale retail placements",
        "[Test Data] Featured in prominent design and packaging publications",
        "[Test Data] Customer loyalty and merchandise sales reached all-time high",
      ],
    },
    change: {
      label: "[Test Data] Brand Presence",
      before: ["[Test Data] Inconsistent generic packaging lost in the market noise"],
      after: ["[Test Data] Iconic, recognizable brand presence commanding premium pricing"],
    },
    otherWorks: ["branding-test-project-2", "branding-test-project-3"],
  },

  {
    slug: "branding-test-project-2",
    route: "/casestudy/branding-and-design-services/branding-test-project-2",
    metaTitle: "[Test Data] Tech Rebrand & Design System | Case Study",
    title: "[Test Data] Enterprise Tech Rebrand",
    client: "[Test Data] Cybersecurity Platform",
    category: "Branding & Creative Design",
    services: ["[Test Data] Rebrand Strategy", "[Test Data] UI Component Library", "[Test Data] Iconography System"],
    subtitle: "[Test Data] Rebranding a complex cybersecurity tool into an approachable, high-trust enterprise solution.",
    year: "25",
    cardImage: "/images/uploads/Project-2-scaled.jpg",
    heroImage: "/images/uploads/Project-2-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-2-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-2-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-2-4th-Image.jpg", full: false },
      { src: "/images/uploads/01c1c4236835079.68f41039d5926.gif", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] The company was preparing for Series B funding but its visual presence looked like an amateur open-source utility."],
      bullets: [
        "[Test Data] Lack of executive polish required by Fortune 500 CISOs",
        "[Test Data] Heavy, gloomy dark aesthetics that intimidated enterprise buyers",
        "[Test Data] Disjointed product interface and marketing site",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Developed an authoritative, clean brand system based on precision geometry, crisp typography, and luminous accent hues."],
      bullets: [
        "[Test Data] Custom vector iconography set with 120+ unique symbols",
        "[Test Data] Figma design token system synced directly with development",
        "[Test Data] Executive slide deck and white paper templates",
      ],
    },
    design: {
      label: "[Test Data] Wins",
      bullets: [
        "[Test Data] Successfully closed $32M Series B funding round",
        "[Test Data] Enterprise sales cycle length shortened by 30%",
        "[Test Data] High praise from enterprise security evaluation teams",
      ],
    },
    change: {
      label: "[Test Data] Market Standing",
      before: ["[Test Data] Viewed as an unproven, niche developer utility"],
      after: ["[Test Data] Established as a trusted industry-standard security platform"],
    },
    otherWorks: ["branding-test-project-1", "branding-test-project-4"],
  },

  {
    slug: "branding-test-project-3",
    route: "/casestudy/branding-and-design-services/branding-test-project-3",
    metaTitle: "[Test Data] Packaging Design & Unboxing Experience | Case Study",
    title: "[Test Data] Luxury Packaging & Unboxing Suite",
    client: "[Test Data] Fine Fragrance House",
    category: "Branding & Creative Design",
    services: ["[Test Data] Structural Packaging", "[Test Data] Material Sourcing", "[Test Data] Custom Bottle Graphics"],
    subtitle: "[Test Data] Engineering an unforgettable tactile unboxing experience that turns customers into brand advocates.",
    year: "25",
    cardImage: "/images/uploads/Project-3-1-scaled.jpg",
    heroImage: "/images/uploads/Project-3-1-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
      { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Selling $180 perfumes online requires physical packaging that justifies the price the moment the delivery box is opened."],
      bullets: [
        "[Test Data] Previous bottles suffered from breakage in transit",
        "[Test Data] Lightweight generic boxes lacked luxury hand-feel",
        "[Test Data] Unboxing was unmemorable with no social sharing",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Custom heavy rigid drawer boxes with magnetic closures, gold foil stamping, and customized paper inserts."],
      bullets: [
        "[Test Data] Weighted zamak metal caps with engraved crest",
        "[Test Data] Velvet-touch interior mold cradling the glass bottle safely",
        "[Test Data] Personalized wax-sealed scent description card",
      ],
    },
    design: {
      label: "[Test Data] Results",
      bullets: [
        "[Test Data] Over 4,000 organic unboxing videos posted on TikTok and IG",
        "[Test Data] Transit shipping breakage rate reduced to 0.02%",
        "[Test Data] Customer reorder rate grew by 48%",
      ],
    },
    change: {
      label: "[Test Data] Physical Touchpoint",
      before: ["[Test Data] Fragile, generic packaging providing zero emotional delight"],
      after: ["[Test Data] Museum-grade tactile packaging creating viral unboxing moments"],
    },
    otherWorks: ["branding-test-project-1", "branding-test-project-2"],
  },

  {
    slug: "branding-test-project-4",
    route: "/casestudy/branding-and-design-services/branding-test-project-4",
    metaTitle: "[Test Data] Sustainable Brand System & Retail Identity | Case Study",
    title: "[Test Data] Sustainable Consumer Goods Brand",
    client: "[Test Data] Zero-Waste Home Goods",
    category: "Branding & Creative Design",
    services: ["[Test Data] Eco-Branding Strategy", "[Test Data] Retail Shelf Presence", "[Test Data] Illustration Suite"],
    subtitle: "[Test Data] Creating an optimistic, playful brand identity that makes sustainable living accessible to everyday shoppers.",
    year: "25",
    cardImage: "/images/uploads/Project-4-scaled.jpg",
    heroImage: "/images/uploads/Project-4-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Most eco-friendly products looked drab, dull, and preachy, turning away mainstream retail consumers."],
      bullets: [
        "[Test Data] Over-reliance on boring kraft paper and plain green tones",
        "[Test Data] Perception that eco-friendly meant inferior product efficacy",
        "[Test Data] Difficulty communicating refill instructions quickly",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Built a joyful, vibrant brand world with bold typography, expressive character illustrations, and clean refill graphics."],
      bullets: [
        "[Test Data] High-energy color palette proving clean living is exciting",
        "[Test Data] Step-by-step pictorial instructions on durable aluminum containers",
        "[Test Data] Retail endcap display concepts engineered for Target and Whole Foods",
      ],
    },
    design: {
      label: "[Test Data] Impact",
      bullets: [
        "[Test Data] Onboarded to 1,200 retail doors across North America",
        "[Test Data] Won Dieline Best Sustainable Brand award",
        "[Test Data] Tripled DTC subscriptions within the first quarter",
      ],
    },
    change: {
      label: "[Test Data] Category Perception",
      before: ["[Test Data] Dull, ascetic packaging that looked like a chore to use"],
      after: ["[Test Data] Cheerful, premium brand that shoppers proudly display on countertops"],
    },
    otherWorks: ["branding-test-project-1", "branding-test-project-3"],
  },

  // =========================================================================
  // 9. UI/UX DESIGN (Test Data)
  // =========================================================================
  {
    slug: "uiux-test-project-1",
    route: "/casestudy/ui-ux-design-services/uiux-test-project-1",
    metaTitle: "[Test Data] SaaS Dashboard & Web App UX | Case Study",
    title: "[Test Data] Enterprise Cloud Analytics UI/UX",
    client: "[Test Data] Data Infrastructure SaaS",
    category: "UI/UX Design Services",
    services: ["[Test Data] Web Application Design", "[Test Data] User Research & Journeys", "[Test Data] Design Systems"],
    subtitle: "[Test Data] Streamlining dense, complex database administration into an intuitive and responsive SaaS dashboard.",
    year: "25",
    cardImage: "/images/uploads/Project-1-scaled.jpg",
    heroImage: "/images/uploads/Project-1-1st-Image-1.jpg",
    gallery: [
      { src: "/images/uploads/Project-1-1st-Image-1.jpg", full: true },
      { src: "/images/uploads/Project-1-2nd-scaled.jpg", full: true },
      { src: "/images/uploads/Project-1-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Engineers were overwhelmed by hundreds of configuration toggles and cryptic monitoring charts."],
      bullets: [
        "[Test Data] Onboarding time took an average of 4 weeks",
        "[Test Data] High frequency of critical human configuration mistakes",
        "[Test Data] Zero mobile or tablet responsiveness for on-call engineers",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Designed a hierarchical dashboard with intelligent default states, customizable widget grids, and natural-language query tools."],
      bullets: [
        "[Test Data] Dark and light mode high-contrast visualization themes",
        "[Test Data] Keyboard-driven command palette (Cmd+K) for rapid navigation",
        "[Test Data] Real-time latency alerts with single-click rollback buttons",
      ],
    },
    design: {
      label: "[Test Data] User Satisfaction",
      bullets: [
        "[Test Data] User onboarding time dropped from 4 weeks to 2 days",
        "[Test Data] Support tickets regarding configuration dropped by 72%",
        "[Test Data] System Usability Scale (SUS) score reached 88/100",
      ],
    },
    change: {
      label: "[Test Data] Software Usability",
      before: ["[Test Data] Cluttered, stressful interface causing operator fatigue"],
      after: ["[Test Data] Clean, empowering user experience beloved by engineering teams"],
    },
    otherWorks: ["uiux-test-project-2", "uiux-test-project-3"],
  },

  {
    slug: "uiux-test-project-2",
    route: "/casestudy/ui-ux-design-services/uiux-test-project-2",
    metaTitle: "[Test Data] Mobile App iOS & Android UX | Case Study",
    title: "[Test Data] Personal Wealth & Investment App",
    client: "[Test Data] FinTech Startup",
    category: "UI/UX Design Services",
    services: ["[Test Data] Native iOS & Android Design", "[Test Data] Micro-Interactions", "[Test Data] User Testing"],
    subtitle: "[Test Data] Demystifying automated algorithmic investing through delightful micro-interactions and transparent UI.",
    year: "25",
    cardImage: "/images/uploads/Project-2-scaled.jpg",
    heroImage: "/images/uploads/Project-2-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-2-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-2-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-2-4th-Image.jpg", full: false },
      { src: "/images/uploads/01c1c4236835079.68f41039d5926.gif", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Novice investors felt intimidated by traditional stock charts and complex financial jargon."],
      bullets: [
        "[Test Data] 60% of new signups failed to fund their account",
        "[Test Data] High anxiety regarding market volatility",
        "[Test Data] Clunky identity verification process",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Created a warm, human-centered mobile interface featuring narrative progress bars and calm visual animations."],
      bullets: [
        "[Test Data] Gamified milestone celebrations upon reaching savings goals",
        "[Test Data] Plain-English summaries of portfolio asset allocations",
        "[Test Data] Frictionless 2-minute KYC identity verification flow",
      ],
    },
    design: {
      label: "[Test Data] Metrics",
      bullets: [
        "[Test Data] Account funding rate increased from 40% to 81%",
        "[Test Data] App Store rating improved from 3.4 to 4.9 stars",
        "[Test Data] 350,000 Active monthly transacting users onboarded",
      ],
    },
    change: {
      label: "[Test Data] User Relationship",
      before: ["[Test Data] Stressful financial charts inducing investor anxiety"],
      after: ["[Test Data] Calm, trustworthy financial co-pilot encouraging good habits"],
    },
    otherWorks: ["uiux-test-project-1", "uiux-test-project-4"],
  },

  {
    slug: "uiux-test-project-3",
    route: "/casestudy/ui-ux-design-services/uiux-test-project-3",
    metaTitle: "[Test Data] Multi-Platform Design System | Case Study",
    title: "[Test Data] Unified Multi-Platform Design System",
    client: "[Test Data] Telehealth Network",
    category: "UI/UX Design Services",
    services: ["[Test Data] Design System Architecture", "[Test Data] WCAG 2.1 Accessibility", "[Test Data] Developer Handoff"],
    subtitle: "[Test Data] Building an enterprise-grade accessible design system unifying web, iOS, Android, and clinical portals.",
    year: "25",
    cardImage: "/images/uploads/Project-3-1-scaled.jpg",
    heroImage: "/images/uploads/Project-3-1-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
      { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] 5 different product teams were building with conflicting UI components, creating massive technical debt."],
      bullets: [
        "[Test Data] 14 Variations of button styles across patient apps",
        "[Test Data] WCAG accessibility failures affecting visually impaired patients",
        "[Test Data] Developer handoff required weeks of back-and-forth review",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Built a centralized tokenized design system in Figma with automated synchronization to React and React Native."],
      bullets: [
        "[Test Data] 100% WCAG AAA compliant color contrasts and focus indicators",
        "[Test Data] Exhaustive state documentation (hover, pressed, loading, error)",
        "[Test Data] Storybook component library with interactive test runners",
      ],
    },
    design: {
      label: "[Test Data] Efficiency",
      bullets: [
        "[Test Data] Feature delivery speed increased by 3.5x across engineering",
        "[Test Data] 100% Pass rate on external healthcare accessibility audits",
        "[Test Data] 40% Reduction in UI-related customer bug reports",
      ],
    },
    change: {
      label: "[Test Data] Design Operations",
      before: ["[Test Data] Fragmented UI components slowing development to a crawl"],
      after: ["[Test Data] Cohesive, battle-tested design tokens powering all platforms"],
    },
    otherWorks: ["uiux-test-project-1", "uiux-test-project-2"],
  },

  {
    slug: "uiux-test-project-4",
    route: "/casestudy/ui-ux-design-services/uiux-test-project-4",
    metaTitle: "[Test Data] Marketplace Booking UX | Case Study",
    title: "[Test Data] Luxury Rental Marketplace Platform",
    client: "[Test Data] Private Aviation Exchange",
    category: "UI/UX Design Services",
    services: ["[Test Data] Marketplace UX Flow", "[Test Data] Interactive Maps", "[Test Data] High-Value Checkout"],
    subtitle: "[Test Data] Crafting a white-glove booking experience for on-demand private jet charter and concierge services.",
    year: "25",
    cardImage: "/images/uploads/Project-4-scaled.jpg",
    heroImage: "/images/uploads/Project-4-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Booking a charter flight involved opaque broker phone calls and slow quote generation cycles."],
      bullets: [
        "[Test Data] High-net-worth clients demanded instant pricing transparency",
        "[Test Data] Clunky multi-leg route configurations on desktop",
        "[Test Data] Low trust during wire transfer and escrow checkout",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Engineered a real-time availability flight search with interactive route globes and instant aircraft specifications."],
      bullets: [
        "[Test Data] Detailed 3D aircraft cabin previews and baggage capacity checks",
        "[Test Data] Instant quote comparison across Light, Midsize, and Heavy jets",
        "[Test Data] White-glove concierge checkout with secure escrow integration",
      ],
    },
    design: {
      label: "[Test Data] Results",
      bullets: [
        "[Test Data] $14M in charter bookings transacted in first 6 months",
        "[Test Data] Average booking time reduced from 2 days to 6 minutes",
        "[Test Data] 98% Client satisfaction rate on post-flight concierge check-in",
      ],
    },
    change: {
      label: "[Test Data] Industry Standard",
      before: ["[Test Data] Slow, manual broker phone tag with zero pricing clarity"],
      after: ["[Test Data] Seamless, transparent digital luxury booking experience"],
    },
    otherWorks: ["uiux-test-project-1", "uiux-test-project-3"],
  },

  // =========================================================================
  // 10. SYSTEM INTEGRATION (Test Data)
  // =========================================================================
  {
    slug: "integration-test-project-1",
    route: "/casestudy/system-integration-services/integration-test-project-1",
    metaTitle: "[Test Data] ERP, CRM & Shopify Sync | Case Study",
    title: "[Test Data] Automated Multi-System Synchronization",
    client: "[Test Data] Omnichannel Retail Brand",
    category: "System Integration Services",
    services: ["[Test Data] Custom API Middleware", "[Test Data] NetSuite ERP Integration", "[Test Data] Real-Time Webhooks"],
    subtitle: "[Test Data] Eliminating manual data entry by connecting Shopify Plus, NetSuite ERP, and Salesforce CRM seamlessly.",
    year: "25",
    cardImage: "/images/uploads/Project-1-scaled.jpg",
    heroImage: "/images/uploads/Project-1-1st-Image-1.jpg",
    gallery: [
      { src: "/images/uploads/Project-1-1st-Image-1.jpg", full: true },
      { src: "/images/uploads/Project-1-2nd-scaled.jpg", full: true },
      { src: "/images/uploads/Project-1-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Operations teams spent 25 hours a week manually re-keying online orders into the warehouse ERP."],
      bullets: [
        "[Test Data] 4% Human error rate causing incorrect item fulfillment",
        "[Test Data] Delayed inventory updates leading to overselling backorders",
        "[Test Data] Siloed customer data preventing holistic CRM insights",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Built a fault-tolerant Node.js serverless integration layer processing orders, inventory, and returns in real-time."],
      bullets: [
        "[Test Data] Bi-directional webhook queues with automatic retry mechanics",
        "[Test Data] Instant stock allocation updates across retail and online",
        "[Test Data] Consolidated customer lifetime profiles in Salesforce",
      ],
    },
    design: {
      label: "[Test Data] Operational Gains",
      bullets: [
        "[Test Data] 100% Automated order flow with zero manual re-entry",
        "[Test Data] Stock sync latency reduced from 6 hours to under 2 seconds",
        "[Test Data] Annual operational savings exceeding $180,000",
      ],
    },
    change: {
      label: "[Test Data] Operations",
      before: ["[Test Data] Manual spreadsheets, delayed updates, and fulfillment errors"],
      after: ["[Test Data] Fully automated, resilient real-time enterprise data pipeline"],
    },
    otherWorks: ["integration-test-project-2", "integration-test-project-3"],
  },

  {
    slug: "integration-test-project-2",
    route: "/casestudy/system-integration-services/integration-test-project-2",
    metaTitle: "[Test Data] Warehouse 3PL & Fulfillment Automation | Case Study",
    title: "[Test Data] Global 3PL & Fulfillment Automation",
    client: "[Test Data] Consumer Electronics Brand",
    category: "System Integration Services",
    services: ["[Test Data] Multi-Warehouse Routing", "[Test Data] EDI & API Middleware", "[Test Data] Tracking & Customs Sync"],
    subtitle: "[Test Data] Intelligent multi-warehouse order routing lowering fulfillment costs and slashing shipping transit times.",
    year: "25",
    cardImage: "/images/uploads/Project-2-scaled.jpg",
    heroImage: "/images/uploads/Project-2-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-2-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-2-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-2-4th-Image.jpg", full: false },
      { src: "/images/uploads/01c1c4236835079.68f41039d5926.gif", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Orders were routed blindly to a single central warehouse, resulting in high cross-country shipping fees."],
      bullets: [
        "[Test Data] 5-day average delivery times frustrating buyers",
        "[Test Data] Manual split-shipment management for backordered items",
        "[Test Data] High customs documentation delay on cross-border packages",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Engineered an intelligent order routing engine that dispatches from the closest facility with in-stock availability."],
      bullets: [
        "[Test Data] Dynamic postage rate shopping among major shipping carriers",
        "[Test Data] Automated customs invoice and duty tax calculations",
        "[Test Data] Instant customer SMS tracking notifications on carrier scan",
      ],
    },
    design: {
      label: "[Test Data] Key Wins",
      bullets: [
        "[Test Data] Average delivery transit time dropped from 5 days to 1.8 days",
        "[Test Data] 24% Reduction in shipping and logistics expenditure",
        "[Test Data] 40% Drop in 'Where is my order?' customer support tickets",
      ],
    },
    change: {
      label: "[Test Data] Logistics",
      before: ["[Test Data] Rigid single-hub shipping with painful delays and high costs"],
      after: ["[Test Data] Dynamic multi-node fulfillment maximizing speed and margins"],
    },
    otherWorks: ["integration-test-project-1", "integration-test-project-4"],
  },

  {
    slug: "integration-test-project-3",
    route: "/casestudy/system-integration-services/integration-test-project-3",
    metaTitle: "[Test Data] Custom CDP & Attribution Pipeline | Case Study",
    title: "[Test Data] Customer Data Platform & Attribution",
    client: "[Test Data] Subscription Box Service",
    category: "System Integration Services",
    services: ["[Test Data] Segment & BigQuery Setup", "[Test Data] Server-Side Conversions API", "[Test Data] Reverse ETL"],
    subtitle: "[Test Data] Unifying customer journey touchpoints into a centralized data warehouse to power accurate attribution.",
    year: "25",
    cardImage: "/images/uploads/Project-3-1-scaled.jpg",
    heroImage: "/images/uploads/Project-3-1-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
      { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] iOS privacy changes destroyed client-side tracking, leaving paid media managers blind to ad efficiency."],
      bullets: [
        "[Test Data] 35% Discrepancy between ad platform sales and bank revenue",
        "[Test Data] Inability to track churn indicators before cancellation",
        "[Test Data] Duplicate attribution claims by Google and Meta",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Built a robust server-side Conversions API pipeline feeding directly from checkout webhooks to Google, Meta, and BigQuery."],
      bullets: [
        "[Test Data] First-party cookie tracking resilient to browser blocking",
        "[Test Data] Multi-touch Shapley attribution model running in dbt",
        "[Test Data] Automated churn alert webhooks to Klaviyo for retention offers",
      ],
    },
    design: {
      label: "[Test Data] Impact",
      bullets: [
        "[Test Data] 99.4% Event match quality on Meta Conversions API",
        "[Test Data] Identified $240,000 in misallocated ad spend to reassign",
        "[Test Data] Churn prediction model reduced subscriber cancellations by 18%",
      ],
    },
    change: {
      label: "[Test Data] Data Integrity",
      before: ["[Test Data] Guesswork and disjointed attribution tracking reports"],
      after: ["[Test Data] Pristine first-party data pipeline delivering single source of truth"],
    },
    otherWorks: ["integration-test-project-1", "integration-test-project-2"],
  },

  {
    slug: "integration-test-project-4",
    route: "/casestudy/system-integration-services/integration-test-project-4",
    metaTitle: "[Test Data] Automated Marketing & Omnichannel CRM | Case Study",
    title: "[Test Data] Klaviyo, SMS & POS Unified Architecture",
    client: "[Test Data] National Athleisure Chain",
    category: "System Integration Services",
    services: ["[Test Data] Omnichannel POS Integration", "[Test Data] Klaviyo Flow Architecture", "[Test Data] Unified Loyalty Logic"],
    subtitle: "[Test Data] Connecting physical in-store POS transactions with digital customer profiles to trigger tailored retention flows.",
    year: "25",
    cardImage: "/images/uploads/Project-4-scaled.jpg",
    heroImage: "/images/uploads/Project-4-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] In-store retail shoppers were treated as strangers online, with no connection between physical receipts and digital marketing."],
      bullets: [
        "[Test Data] Physical store customers receiving irrelevant intro discounts",
        "[Test Data] Loyalty reward points could only be spent in physical stores",
        "[Test Data] Siloed POS database requiring manual weekly exports",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Integrated Shopify POS with online store databases and Klaviyo, allowing instant digital receipts and unified rewards."],
      bullets: [
        "[Test Data] In-store customer phone lookup syncing purchase history immediately",
        "[Test Data] Automated post-purchase fit guide SMS based on specific SKU bought in store",
        "[Test Data] Unified wallet loyalty balance redeemable online or offline",
      ],
    },
    design: {
      label: "[Test Data] Business Impact",
      bullets: [
        "[Test Data] 38% of physical store buyers made an online purchase within 45 days",
        "[Test Data] Omnichannel customer LTV was 2.8x higher than single-channel buyers",
        "[Test Data] Zero manual database syncing required by retail store staff",
      ],
    },
    change: {
      label: "[Test Data] Retail & Online",
      before: ["[Test Data] Disconnected retail stores operating in a separate silo"],
      after: ["[Test Data] Unified omnichannel retail ecosystem with seamless customer journeys"],
    },
    otherWorks: ["integration-test-project-1", "integration-test-project-3"],
  },

  // =========================================================================
  // 11. END-TO-END DIGITAL SERVICES (Test Data)
  // =========================================================================
  {
    slug: "ecommerce-test-project-1",
    route: "/casestudy/full-service-ecommerce-marketing/ecommerce-test-project-1",
    metaTitle: "[Test Data] Full-Funnel Brand Scaling & Growth | Case Study",
    title: "[Test Data] 0 to $10M Full-Service Brand Scaling",
    client: "[Test Data] Premium Pet Wellness",
    category: "End-to-End Digital Services",
    services: ["[Test Data] Full Strategy Execution", "[Test Data] Paid Media & Creative", "[Test Data] Shopify Engineering & SEO"],
    subtitle: "[Test Data] Operating as a full-service growth partner: managing paid media, creative production, and technical architecture.",
    year: "25",
    cardImage: "/images/uploads/Project-1-scaled.jpg",
    heroImage: "/images/uploads/Project-1-1st-Image-1.jpg",
    gallery: [
      { src: "/images/uploads/Project-1-1st-Image-1.jpg", full: true },
      { src: "/images/uploads/Project-1-2nd-scaled.jpg", full: true },
      { src: "/images/uploads/Project-1-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Managing 5 different disconnected agencies caused finger-pointing, slow execution, and stagnant growth."],
      bullets: [
        "[Test Data] Creative agency was producing ads that media buyers couldn't convert",
        "[Test Data] Developers blamed marketers for slow site performance",
        "[Test Data] Blended marketing efficiency ratio (MER) fell below breakeven",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Replaced the fragmented agencies with our single unified team handling strategy, media, creative, web, and retention."],
      bullets: [
        "[Test Data] Unified weekly growth sprints aligning creative with live ad metrics",
        "[Test Data] Complete headless storefront rebuild boosting mobile conversion",
        "[Test Data] Cross-channel budget allocation shifting spend dynamically to winning channels",
      ],
    },
    design: {
      label: "[Test Data] Transformation",
      bullets: [
        "[Test Data] Scaled from $1.8M to $10.4M annual run-rate in 18 months",
        "[Test Data] Blended Marketing Efficiency Ratio improved from 2.1 to 3.8",
        "[Test Data] Client saved $120,000 annually by consolidating vendor retainers",
      ],
    },
    change: {
      label: "[Test Data] Agency Experience",
      before: ["[Test Data] 5 Disconnected vendors arguing over blame and attribution"],
      after: ["[Test Data] Single unified high-performance growth team driving results"],
    },
    otherWorks: ["ecommerce-test-project-2", "ecommerce-test-project-3"],
  },

  {
    slug: "ecommerce-test-project-2",
    route: "/casestudy/full-service-ecommerce-marketing/ecommerce-test-project-2",
    metaTitle: "[Test Data] Omnichannel Turnaround & Brand Relaunch | Case Study",
    title: "[Test Data] Heritage Brand Turnaround & Relaunch",
    client: "[Test Data] Classic American Footwear",
    category: "End-to-End Digital Services",
    services: ["[Test Data] Brand Repositioning", "[Test Data] Omnichannel Paid Media", "[Test Data] Retention & Community"],
    subtitle: "[Test Data] Modernizing a 30-year-old footwear brand for younger demographics while maintaining core customer loyalty.",
    year: "25",
    cardImage: "/images/uploads/Project-2-scaled.jpg",
    heroImage: "/images/uploads/Project-2-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-2-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-2-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-2-4th-Image.jpg", full: false },
      { src: "/images/uploads/01c1c4236835079.68f41039d5926.gif", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] Traditional catalog sales were drying up and the brand lacked any meaningful connection with next-generation buyers."],
      bullets: [
        "[Test Data] 70% of customer base over 55 years old",
        "[Test Data] Outdated website navigation burying heritage product lines",
        "[Test Data] Declining quarterly wholesale purchase orders",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Executed an end-to-end digital relaunch: refreshed editorial art direction, modern Shopify theme, and TikTok storytelling."],
      bullets: [
        "[Test Data] Archival classic collection relaunch celebrating craftsmanship",
        "[Test Data] Creator collaboration campaign reaching 8M+ millennial shoppers",
        "[Test Data] High-converting email welcome and anniversary flows",
      ],
    },
    design: {
      label: "[Test Data] Results",
      bullets: [
        "[Test Data] Average customer age dropped by 18 years",
        "[Test Data] Online DTC revenue grew by 140% in year one",
        "[Test Data] Revitalized interest allowed opening 80 new premium boutique accounts",
      ],
    },
    change: {
      label: "[Test Data] Brand Trajectory",
      before: ["[Test Data] Aging catalog customer base with declining sales"],
      after: ["[Test Data] Cult cultural status with vibrant multi-generational audience"],
    },
    otherWorks: ["ecommerce-test-project-1", "ecommerce-test-project-4"],
  },

  {
    slug: "ecommerce-test-project-3",
    route: "/casestudy/full-service-ecommerce-marketing/ecommerce-test-project-3",
    metaTitle: "[Test Data] Global DTC Launch & Scaling | Case Study",
    title: "[Test Data] Global Consumer Brand Launch",
    client: "[Test Data] Innovative Kitchen Appliances",
    category: "End-to-End Digital Services",
    services: ["[Test Data] Go-to-Market Strategy", "[Test Data] Kickstarter & DTC Scaling", "[Test Data] Amazon & Retail Sync"],
    subtitle: "[Test Data] From initial prototype crowdfunding to a category-leading omnichannel consumer kitchen brand.",
    year: "25",
    cardImage: "/images/uploads/Project-3-1-scaled.jpg",
    heroImage: "/images/uploads/Project-3-1-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
      { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] The inventor had an exceptional patented product but zero digital marketing infrastructure or audience."],
      bullets: [
        "[Test Data] No pre-launch email waitlist",
        "[Test Data] High retail price point requiring deep educational storytelling",
        "[Test Data] Risk of competitors copying technology before market capture",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Orchestrated a phased go-to-market plan: high-converting VIP reservation funnel, viral PR, and rapid DTC scaling."],
      bullets: [
        "[Test Data] Built a 45,000-subscriber VIP pre-order list with $1 reservation deposits",
        "[Test Data] Funded over $1.2M on day one of official campaign launch",
        "[Test Data] Smooth transition into evergreen Shopify and Amazon storefronts",
      ],
    },
    design: {
      label: "[Test Data] Impact",
      bullets: [
        "[Test Data] Over $6M in total sales generated in the inaugural year",
        "[Test Data] Won Best New Kitchen Gadget award at major trade expo",
        "[Test Data] Established profitable recurring revenue via subscription accessories",
      ],
    },
    change: {
      label: "[Test Data] Launch Success",
      before: ["[Test Data] Solitary patent with no marketing or commercial traction"],
      after: ["[Test Data] Multi-million dollar household brand operating at scale"],
    },
    otherWorks: ["ecommerce-test-project-1", "ecommerce-test-project-2"],
  },

  {
    slug: "ecommerce-test-project-4",
    route: "/casestudy/full-service-ecommerce-marketing/ecommerce-test-project-4",
    metaTitle: "[Test Data] Enterprise Profitability & Unit Economics CRO | Case Study",
    title: "[Test Data] Unit Economics & Margin Optimization",
    client: "[Test Data] Clean Beauty & Wellness Brand",
    category: "End-to-End Digital Services",
    services: ["[Test Data] Financial Funnel Modeling", "[Test Data] Supply Chain Optimization", "[Test Data] VIP Retention Strategy"],
    subtitle: "[Test Data] Restructuring high-topline ad spend to unlock true net profitability and cash flow self-sustainability.",
    year: "25",
    cardImage: "/images/uploads/Project-4-scaled.jpg",
    heroImage: "/images/uploads/Project-4-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "[Test Data] The Challenge",
      paragraphs: ["[Test Data] The company was doing $15M in revenue but losing money every month due to out-of-control ad acquisition costs."],
      bullets: [
        "[Test Data] Heavy discounts masking unprofitable customer acquisition",
        "[Test Data] High return and chargeback rates on impulse ad purchases",
        "[Test Data] Cash flow shortages preventing timely inventory reorders",
      ],
    },
    approach: {
      label: "[Test Data] The Approach",
      paragraphs: ["[Test Data] Ruthlessly audited contribution margin per order: eliminating unprofitable discounts, trimming ad sets, and boosting LTV."],
      bullets: [
        "[Test Data] Removed sitewide coupons in favor of bundle threshold rewards",
        "[Test Data] Reallocated budget strictly to products with high 90-day repeat rates",
        "[Test Data] Revamped email and SMS retention sequences to drive free repeat orders",
      ],
    },
    design: {
      label: "[Test Data] Financial Turnaround",
      bullets: [
        "[Test Data] Swung from -$40,000 monthly loss to +$180,000 monthly net profit",
        "[Test Data] Blended contribution margin increased from 14% to 32%",
        "[Test Data] Brand became completely self-funding with no outside debt needed",
      ],
    },
    change: {
      label: "[Test Data] Financial Health",
      before: ["[Test Data] Burning cash for vanity revenue metrics"],
      after: ["[Test Data] Highly profitable, cash-generative ecommerce powerhouse"],
    },
    otherWorks: ["ecommerce-test-project-1", "ecommerce-test-project-3"],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
