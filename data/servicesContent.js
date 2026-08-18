// Per-page body copy for the 11 individual service routes.
// Keyed by slug — must match the slugs in `data/services.js` exactly.
//
// Shape of each entry:
//   metaTitle, metaDescription        -> route <metadata>
//   heroHeadline, heroSubhead         -> hero
//   stats: [{ value, label }]         -> 4 hero stat tiles
//   ctaPrimary, ctaSecondary          -> button labels, both link to /contact
//                                        (reused for the hero AND the closing band)
//   whoItsFor: [{ title, body }]      -> 4 "Who Is This Service For?" cards
//   whySectionHeading                 -> heading above the 5 "Why Strat IQ" blocks
//   whyStratIQ: [{ title, body }]     -> 5 "Why Strat IQ" blocks
//   process: [{ title, body }]        -> 4 numbered process steps
//   faq: [{ q, a }]                   -> 6 FAQ accordion items
//   closingTag, closingHeading, closingBody -> closing CTA band copy
//
// Inline-link convention: where verbatim copy contains a link to another
// service page, the linked phrase is marked in the text with a "[[LINK]]"
// token, and the object carries `linkText` + `linkHref`. The template
// (ServiceTemplate.js) replaces the token with a real <Link>.

const STATS = [
  { value: "$10M+", label: "Revenue Generated" },
  { value: "200+", label: "Projects Delivered" },
  { value: "15 yrs", label: "Collective Experience" },
  { value: "17K+", label: "Leads Captured" },
];

export const servicesContent = {
  // ────────────────────────────────────────────────────────────────────
  "amazon-ppc-management-services": {
    metaTitle: `Amazon PPC Management Services & Account Strategy | Strat IQ Digital`,
    metaDescription: `Grow your business with the best Amazon PPC agency. 15 years of expert Amazon account management and listing optimization. See you at the market.`,
    heroImage: `/images/uploads/Services-Banner-scaled.jpg`,
    heroHeadline: `Amazon PPC & Account Management`,
    heroSubhead: [
      `Most sellers are stuck — flat sales, rising ad costs, and tools that auto-pilot to nowhere. At Strat IQ Digital, we use `,
      { text: "15 years of experience", href: "/about" },
      ` to find exactly why your brand isn't at its ceiling. Then we fix it.`,
    ],
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free Audit`,
    whoItsFor: [
      {
        title: `Sales Have Hit a Wall`,
        body: `You have a good product, but your sales have hit a wall. You need an Amazon PPC management agency that can find new ways to scale and break through the ceiling once and for all.`,
      },
      {
        title: `Just Getting Started`,
        body: `You're launching and need an Amazon FBA setup service to make sure you go live correctly and get seen by customers immediately — not month three.`,
      },
      {
        title: `Ad Costs Are Eating Profit`,
        body: `You're tired of high ACoS. You need Amazon PPC management experts who know how to lower your Advertising Cost of Sales while actually increasing your net profit at the same time.`,
      },
      {
        title: `Too Complex to Handle Alone`,
        body: `You're doing high volume but your account has become too complex to manage alone. You need a full-service Amazon agency to take the weight completely off your shoulders.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our Amazon Services`,
    whatsIncludedIntro: `We provide everything you need to run a profitable Amazon business — not just ads, but the health of your entire account.`,
    whatsIncluded: [
      {
        title: `Amazon PPC Management`,
        body: `We handle all your advertising: keyword research, campaign setup, and daily bidding. Our team uses paid account management strategies to make sure your ads show up for the right customers, plus custom audience targeting to bring back people who looked but didn't buy yet.`,
      },
      {
        title: `Amazon SEO & Listing Optimization`,
        body: `Getting the click is only half the battle — you need people to actually buy. We rewrite your titles, bullets, and descriptions with the right keywords, improving both your search ranking and how easy the copy is to read and convert.`,
      },
      {
        title: `Account Management & Support`,
        body: `Running an Amazon store is a full-time job. We handle the boring but critical stuff — dealing with Amazon support, managing inventory alerts, and protecting your brand — so you can focus on making great products.`,
      },
      {
        title: `Store & FBA Setup`,
        body: `If you're new, we provide full store setup and FBA setup so your shipping and storage are handled correctly from day one. We make sure your digital storefront looks professional and builds trust with buyers immediately.`,
      },
      {
        title: `Enhanced Visual Conversion Strategy`,
        body: [
          `We don't just drive traffic — we make sure it converts. Our team creates and optimizes high-impact listing images, hero shots, lifestyle graphics, and infographics, working hand-in-hand with our `,
          { text: "creative strategy services", href: "/creative-strategy-services" },
          ` and `,
          { text: "conversion optimization", href: "/conversion-optimization-services" },
          ` approach.`,
        ],
      },
    ],
    whySectionHeading: `Data Over Guesswork`,
    whyStratIQ: [
      {
        title: `Profit Over Sales`,
        body: `We don't chase vanity numbers. We focus on actual net profit — lowering ACoS and managing margins carefully so growth is real and sustainable.`,
      },
      {
        title: `The Flywheel Effect`,
        body: `Smart PPC boosts organic rank. Our goal is to keep your brand at the top even when you stop paying for ads. That's how real brands win on Amazon.`,
      },
      {
        title: `Listing Mastery`,
        body: `Traffic is useless if no one buys. We fix your titles, images, and descriptions so every click has the best possible chance of converting.`,
      },
      {
        title: `Full Account Safety`,
        body: `From inventory alerts to brand protection and hijacker monitoring, we keep your account healthy and your brand shielded from competitors.`,
      },
      {
        title: `Battle-Tested Logic`,
        body: `15 years through every algorithm update. We know what works now and how to prepare your brand for what's next. No guessing. Ever.`,
      },
    ],
    process: [
      {
        title: `The Account Audit`,
        body: `First, we look at your current Amazon PPC and SEO. We find out exactly where you're wasting money and where you're missing out on easy sales — building a clear picture of your account's full opportunity before we touch a single setting.`,
      },
      {
        title: `Fixing the Foundation`,
        body: `Before we spend more on ads, we make sure your listings are perfect. Our team fixes your images, rewrites your copy, and structures your catalog correctly. There's no point driving traffic to a listing that won't close.`,
      },
      {
        title: `Strategic Ad Launch`,
        body: `We start running ads based on high-intent keywords — not just the most expensive ones. We look for the best deals that bring in the most profit, with a structure built to scale as the account matures.`,
      },
      {
        title: `Weekly Optimization`,
        body: `The Amazon market changes every day. We stay on top of your account by reviewing data every week, adjusting bids, expanding winning keywords, and pruning waste to keep you ahead of the competition.`,
      },
    ],
    faq: [
      {
        q: `What's the benefit of hiring an Amazon PPC management agency?`,
        a: `An Amazon PPC management agency has the time and tools to watch your ads around the clock. We make sure you're not overspending and that your ads are actively helping your organic rank grow — not just generating short-term clicks.`,
      },
      {
        q: `Can you help with my organic ranking?`,
        a: `Yes. We use Amazon SEO optimization to help your products show up higher in search results without paying for every click. PPC and SEO work together in our strategy — we treat them as one flywheel that keeps spinning long after the ads stop.`,
      },
      {
        q: `Do you offer full-service management?`,
        a: `Absolutely. We handle everything from PPC and SEO to full account management and customer support escalations. You get one team responsible for the entire health and growth of your Amazon presence.`,
      },
      {
        q: `How do you lower my ad costs?`,
        a: `We find negative keywords that are draining your budget, improve listing relevance so your ads qualify for lower CPCs, and continuously refine targeting. Lower cost-per-click plus better conversion rates — both sides of the efficiency equation.`,
      },
      {
        q: `Is the Amazon FBA setup service only for beginners?`,
        a: `It's for anyone — new sellers, those migrating from other platforms, or established brands restructuring their FBA operations. We build the right foundation regardless of where you're starting from and make the transition smooth.`,
      },
      {
        q: `How long before I see results?`,
        a: `Paid campaigns typically show clear movement within the first 30 days. SEO and organic ranking improvements compound over 3–6 months. We set honest expectations from our first call — no inflated promises, ever.`,
      },
    ],
    closingTag: `See you at the top of the market`,
    closingHeading: `Get Your Brand Where It Belongs.`,
    closingBody: `Your brand has potential. We have the data, strategy, and experience to help you reach it. Stop guessing — start growing.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "meta-instagram-ads-services": {
    metaTitle: `Meta Ads Agency — Facebook & Instagram Advertising Services | Strat IQ Digital`,
    metaDescription: `Find your customers before your competitors. Strat IQ Digital is a results-driven Meta ads agency running Facebook and Instagram campaigns that convert.`,
    heroImage: `/images/uploads/Services-Banner-1-scaled.jpg`,
    heroHeadline: `Meta & Instagram Advertising`,
    heroSubhead: `Most brands spend thousands on Facebook and Instagram and get likes — not sales. The problem is never the platform. It's the lack of strategy. At Strat IQ Digital, we use 15 years of experience to find your ideal customers and build the campaigns that actually make them buy — with creative that stands out in a crowded feed and a growth engine built to scale.`,
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free Audit`,
    whoItsFor: [
      {
        title: `The E-commerce Founder`,
        body: `You have a great product but need a Facebook and Instagram advertising agency to help you reach new people and grow your daily sales beyond word of mouth.`,
      },
      {
        title: `The Scaling Brand`,
        body: `You're already running ads but you've hit a wall. You need an expert team to lower your costs, find new audiences, and build a system that scales without the ROAS collapsing.`,
      },
      {
        title: `The Content Creator`,
        body: `You want to use Facebook Reels and Instagram Stories to build a real community and drive high-quality traffic to your store — not just rack up views that go nowhere.`,
      },
      {
        title: `The Local or Global Player`,
        body: `Whether you need to dominate your local area or run campaigns across multiple countries, we build the right account structure for your scale and budget.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our Meta Services`,
    whatsIncludedIntro: `We handle the creative, the technical setup, and the daily management — everything you need to win on Facebook and Instagram.`,
    whatsIncluded: [
      {
        title: `Full-Funnel Facebook Advertising`,
        body: `We don't run one ad — we build a system. Campaigns for every stage of the journey: awareness ads to find new people, retargeting to bring back the ones who didn't buy the first time, and carousel ads to tell your brand's story across multiple products.`,
      },
      {
        title: `Instagram Ads Management`,
        body: `Instagram is where your brand comes to life. We focus on high-quality visuals that stop the scroll — Stories, Reels, or feed posts — and stay on top of best practices so your budget never gets wasted on low-performing formats.`,
      },
      {
        title: `Advanced Targeting & Tracking`,
        body: [
          `To get real results you need to know who's clicking. We set up advanced tracking — Meta Pixel and Conversions API — so we can see exactly which ads are making you money. This integrates directly with our `,
          { text: "conversion optimization", href: "/conversion-optimization-services" },
          ` services for a complete picture of your funnel.`,
        ],
      },
      {
        title: `Creative Strategy & Content`,
        body: [
          `Good ads need to look good. Our full `,
          { text: "creative strategy", href: "/creative-strategy-services" },
          ` services cover everything from Reels to high-converting static images — creative that gets people to stop scrolling and start shopping.`,
        ],
      },
    ],
    whySectionHeading: `Sales Over Likes`,
    whyStratIQ: [
      {
        title: `Sales Over Likes`,
        body: `We don't care about impressions or follower counts. We focus on return on ad spend and actual sales — the numbers that move your business forward.`,
      },
      {
        title: `Creative Excellence`,
        body: `We know what makes people click. Our team builds ads that feel like content, not commercials — stopping the scroll and turning curiosity into conversions.`,
      },
      {
        title: `Rapid Testing`,
        body: `The market moves fast. We continuously test headlines, images, and audiences to find the winners quickly and cut the losers before they drain your budget.`,
      },
      {
        title: `Full Transparency`,
        body: `You'll always know exactly where your money is going. Clear reports, honest numbers, and no smoke and mirrors — ever.`,
      },
      {
        title: `15 Years of Data`,
        body: `We've managed millions in ad spend. That experience means your brand avoids the costly mistakes most businesses make in the first six months of paid social.`,
      },
    ],
    process: [
      {
        title: `The Market Audit`,
        body: `We start by examining your current ad performance, your competitors, and what kind of creative your customers actually respond to. This gives us a clear picture of the opportunity before we spend a single dollar.`,
      },
      {
        title: `Strategy & Setup`,
        body: `We build a custom plan for your brand — full-funnel campaign architecture, audience segmentation, pixel and Conversions API setup, and a clean account structure built to scale from day one.`,
      },
      {
        title: `Launch & Optimize`,
        body: `We launch your campaigns and watch them closely. Budget moves daily to the ads performing best — whether it's feed placements, Stories, or Reels — so you're never wasting spend on formats that aren't delivering.`,
      },
      {
        title: `Scaling the Winners`,
        body: `Once we find ads that work, we scale them deliberately. We grow your spend without letting costs spiral out of control — protecting your ROAS as we push for the next revenue ceiling.`,
      },
    ],
    faq: [
      {
        q: `Why hire a Meta ads agency instead of doing it myself?`,
        a: `A professional agency navigates the complex targeting and tracking rules that trip most brands up. We save you months of trial and error and thousands in wasted ad spend — getting you to profitable campaigns far faster.`,
      },
      {
        q: `Do you manage Instagram ads as well?`,
        a: `Yes. Instagram is a core part of every Meta campaign we run. We optimize across Reels, Stories, and feed placements to find where your specific audience is most active and most likely to convert.`,
      },
      {
        q: `How do you handle account access?`,
        a: `You stay in full control of your ad account at all times. We work as an authorized partner — we never ask for ownership, and you can revoke access at any point. Your account, your data, always.`,
      },
      {
        q: `What is a Meta carousel ad?`,
        a: `Carousel ads let you show up to 10 images or videos in a single ad unit. They're especially powerful for e-commerce brands that want to showcase a full product range or walk customers through a story before they click.`,
      },
      {
        q: `Can you run ads on Facebook Reels?`,
        a: `Absolutely. Reels placements are one of the fastest-growing ways to reach new audiences right now. We create short, high-retention videos built specifically for this format — not just repurposed feed content.`,
      },
      {
        q: `How long before I see results?`,
        a: `Most campaigns show clear directional data within the first 2–4 weeks. Meaningful ROAS improvements typically come in 30–60 days as we accumulate data and tighten targeting. We set honest expectations from the first call.`,
      },
    ],
    closingTag: `Stop wasting money on ads that don't convert`,
    closingHeading: `Your Customers Are Already There.`,
    closingBody: `They're on Facebook and Instagram right now. We can help you find them — and convince them to buy. Let's build the campaign that actually works.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "google-ads-management-services": {
    metaTitle: `Google Ads Management Agency | Certified PPC & Search Experts | Strat IQ Digital`,
    metaDescription: `Drive high-intent traffic with a certified Google Ads agency. Benefit from a decade of experience in PPC management, Shopping ads, and Performance Max.`,
    heroImage: `/images/uploads/Services-Banner-scaled.jpg`,
    heroHeadline: `Google Ads & PPC Management`,
    heroSubhead: [
      `Google is the first place people go when they're ready to buy. Most businesses waste that opportunity on broad keywords that generate clicks and zero sales. At Strat IQ Digital, we bridge the gap between search and sale — using 15 years of performance data, and our own `,
      { text: "conversion optimization", href: "/conversion-optimization-services" },
      ` process, to make sure every click turns into revenue.`,
    ],
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free Audit`,
    whoItsFor: [
      {
        title: `Losing Market Share`,
        body: `Your competitors are showing up for your brand name and your top products. You need to reclaim your territory and make sure ready buyers see you first — not the brand that showed up and undercut you.`,
      },
      {
        title: `High-Intent Products`,
        body: `You sell something people actively search for when they have a problem. You need search campaigns that capture that demand at the exact second the query is typed — before your competitors get the click.`,
      },
      {
        title: `Tired of Wasted Spend`,
        body: `You've tried Google Ads before but the leads were low quality and the costs kept climbing. You need a clean account rebuild — focused budget, high-intent keywords only, and zero spend on terms that never convert.`,
      },
      {
        title: `Ready for Rapid Growth`,
        body: `You have a high-performing store and need Shopping and Performance Max campaigns to push your products in front of a massive, qualified audience — at scale, without your ROAS collapsing.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our Google Ads Services`,
    whatsIncludedIntro: `We offer a full-scale approach to paid search — from initial strategy to daily bid management.`,
    whatsIncluded: [
      {
        title: `Full-Scale PPC Management`,
        body: `We take over the technical side of your account entirely: keyword research, ad copywriting, and conversion tracking across Search, YouTube, and the Display network — so your brand is seen everywhere your customers spend time.`,
      },
      {
        title: `Google Shopping Ads Management`,
        body: `If you sell products, you need to win the visual search. We optimize your product feed to ensure your items show up with the right price and images, focused on maximizing ROAS through smart bidding and product grouping.`,
      },
      {
        title: `Performance Max & Display Advertising`,
        body: [
          `Modern search needs modern tools. As a `,
          { text: "performance-driven", href: "/conversion-optimization-services" },
          ` team, we use Google's AI-driven campaigns to find customers across every Google platform, plus visual display ads that build brand awareness and stay top-of-mind for your target audience.`,
        ],
      },
      {
        title: `Retargeting Advertising`,
        body: `Most people don't buy on the first visit. Our retargeting campaigns follow your visitors after they leave your site, showing relevant ads that bring them back to finish their purchase and stay in front of high-potential leads until they convert.`,
      },
    ],
    whySectionHeading: `Intent Over Volume`,
    whyStratIQ: [
      {
        title: `Intent-Driven Strategy`,
        body: `We don't bid on generic words. We focus on buying-intent keywords that lead to actual sales — so your budget is never wasted on traffic that was never going to convert.`,
      },
      {
        title: `Certified Expertise`,
        body: `As a certified Google Ads agency, we have direct access to the latest tools and beta features. We stay ahead of the curve so your campaigns never fall behind the platform's own changes.`,
      },
      {
        title: `Total Transparency`,
        body: `No hidden data, no vanity dashboards. You see exactly how much you spent and exactly how much revenue the campaigns generated — every week, every month.`,
      },
      {
        title: `15 Years of Spend`,
        body: `We've managed millions in Google spend across every industry. That history means we avoid the expensive mistakes most brands make in the first six months and get you profitable faster.`,
      },
      {
        title: `Integrated Marketing`,
        body: `We don't look at Google in isolation. Your search ads are built to work in harmony with your SEO strategy and social campaigns — one complete growth system, not three disconnected ones.`,
      },
    ],
    process: [
      {
        title: `The Search Audit`,
        body: `We start by analysing your competitors and your current account performance. We identify the missed opportunities — searches where people are looking for exactly what you sell but finding someone else — and build a clear roadmap before we touch a single setting.`,
      },
      {
        title: `Campaign Engineering`,
        body: `We build your account structure for long-term scale — not just quick wins. High-converting ad copy, airtight keyword groupings, negative keyword lists, and conversion tracking set up to measure every cent of revenue your campaigns generate.`,
      },
      {
        title: `Daily Optimization`,
        body: `We don't set and forget. Our team checks your account daily — adjusting bids, testing new headlines, expanding winning keywords, and cutting waste before it compounds. The Google Ads market changes constantly, and so do we.`,
      },
      {
        title: `Scaling & Performance Max`,
        body: `Once we've found the winning strategy, we scale it. We use Google's AI-driven Performance Max campaigns to find even more qualified customers across Search, Shopping, YouTube, and Display — pushing your brand into every channel your buyers use.`,
      },
    ],
    faq: [
      {
        q: `Why hire a Google Ads agency instead of doing it myself?`,
        a: `Google's default campaign settings are optimized to spend your budget fast, not efficiently. A professional agency knows exactly which settings to turn off, which match types to use, and how to build a structure that makes you money instead of just generating clicks.`,
      },
      {
        q: `What is Performance Max and do I need it?`,
        a: `Performance Max is Google's AI-driven campaign type that places your ads across Search, Shopping, YouTube, Gmail, and Display from a single campaign. For e-commerce brands in 2026, it's one of the most efficient ways to scale reach while keeping ROAS healthy — when set up correctly.`,
      },
      {
        q: `Do you run Google Ads for small businesses?`,
        a: `Yes. Smaller budgets require even more precision. We make sure every dollar is allocated to the highest-intent keywords possible — no broad match waste, no irrelevant placements, no spending on terms that were never going to convert.`,
      },
      {
        q: `How do your Google Shopping campaigns work?`,
        a: `We optimize your product feed so Google knows exactly when to show your products — right title, right price, right category. A clean, well-structured feed leads to higher-quality clicks, lower cost-per-click, and a meaningfully better ROAS across your entire catalog.`,
      },
      {
        q: `How quickly will I see results?`,
        a: `Unlike SEO, paid search results are fast. You can start seeing qualified traffic and sales within 24–48 hours of campaigns going live. Meaningful optimization data accumulates in the first 2–4 weeks, after which we make our biggest performance improvements.`,
      },
      {
        q: `Do you handle retargeting on Google as well?`,
        a: `Yes. Most visitors don't buy on the first visit. We run Google remarketing campaigns that follow your site visitors with relevant ads — bringing them back to finish the purchase and ensuring your brand stays visible to high-potential leads until they convert.`,
      },
    ],
    closingTag: `Stop losing customers to your competitors`,
    closingHeading: `If You're Not at the Top, You Don't Exist.`,
    closingBody: `Your customers are searching right now. We make sure your brand is the first thing they find — and the obvious choice when they're ready to buy.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "shopify-development-services": {
    metaTitle: `Shopify Development Agency | Strat IQ Digital`,
    metaDescription: `Custom Shopify development services that build stores designed to convert. Strat IQ Digital creates fast, clean Shopify stores that do one thing well: sell.`,
    heroImage: `/images/uploads/Services-Banner-1-scaled.jpg`,
    heroHeadline: `Shopify Design & Development`,
    heroSubhead: [
      `Building a store is easy. Building one that actually sells is hard. Every second your site takes to load, you're losing money to your competitors — and that's `,
      { text: "marketing budget", href: "/full-service-ecommerce-marketing" },
      ` being wasted. At Strat IQ Digital, we use 15 years of e-commerce experience to find exactly what's stopping your store from converting — then we fix it.`,
    ],
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free Audit`,
    whoItsFor: [
      {
        title: `The Established Brand`,
        body: `You're already making sales, but your current site feels cheap or limited. You need a Shopify development agency that can create a professional, high-end look that truly matches your brand's quality.`,
      },
      {
        title: `The High-Volume Seller`,
        body: `You're moving thousands of units and need a Shopify Plus development partner to handle enterprise selling, international markets, and high-traffic launches without your store breaking a sweat.`,
      },
      {
        title: `The Custom Merchant`,
        body: `You have a unique product that needs unique features. You need custom Shopify development to build something that doesn't exist in a standard theme — built fast, built clean, built to sell.`,
      },
      {
        title: `The Frustrated Founder`,
        body: `You're tired of slow developers who don't understand marketing. You need a partner that speaks the language of ROI and conversion — not just code.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our Shopify Services`,
    whatsIncludedIntro: `We provide a full range of Shopify eCommerce web development services — we handle the tech so you can focus on your brand.`,
    whatsIncluded: [
      {
        title: `Shopify Design & Development`,
        body: `We believe design should serve a purpose. We create layouts that guide the customer toward the buy button, and make sure your store looks great on desktop, tablet, and especially mobile — where most of your customers actually shop.`,
      },
      {
        title: `Shopify Plus Enterprise Solutions`,
        body: `If you're an enterprise-level brand, you need more than a standard store. We help you unlock the full power of Shopify Plus — custom checkouts, advanced automation, and a build that feels simple and fast even at serious scale.`,
      },
      {
        title: `Custom Theme & App Creation`,
        body: `Don't get stuck using the same theme as everyone else. We build custom Shopify themes from scratch for speed, and when you need a specific tool for your store, our team can build the custom app to match.`,
      },
      {
        title: `Reliable Maintenance Packages`,
        body: `A website needs constant care to stay fast and secure. Our maintenance packages mean you never have to worry about your site going down or slowing — regular updates, speed checks, and support whenever you need it.`,
      },
    ],
    whySectionHeading: `Built to Sell`,
    whyStratIQ: [
      {
        title: `Built to Sell`,
        body: `Every layout decision, every button placement, every image is designed to guide the customer toward checkout. We build stores that convert, not just impress.`,
      },
      {
        title: `Top Speed`,
        body: `A slow store loses rankings and sales. We keep your site fast — optimized images, clean code, no unnecessary apps dragging you down.`,
      },
      {
        title: `Clean Code`,
        body: `We don't pile on heavy third-party apps. We build custom features that keep your store light, stable, and maintainable for the long run.`,
      },
      {
        title: `Scale Ready`,
        body: `Whether you're on standard Shopify or Shopify Plus, we build with growth in mind. Your store will handle traffic spikes and catalog expansion without breaking.`,
      },
      {
        title: `15 Years of Data`,
        body: `We use a decade and a half of e-commerce and marketing data to make sure your store works as hard as your ads. No guessing. Ever.`,
      },
    ],
    process: [
      {
        title: `Business Logic & Planning`,
        body: `Before we touch a single design file, we look at your sales data, your customer behaviour, and what makes visitors leave. We plan your store structure around these facts — not assumptions.`,
      },
      {
        title: `High-End Design`,
        body: `We create a visual look that builds instant trust. Your store will look like a market leader from the very first click — fully mobile-first, since that's where most of your customers are shopping.`,
      },
      {
        title: `Expert Development`,
        body: `Our team builds your store using clean, fast code. Whether it's a custom theme from scratch, a Shopify Plus integration, or a bespoke app, we make sure everything works together perfectly — no shortcuts.`,
      },
      {
        title: `Performance & Launch`,
        body: `We optimize every image and script for speed before going live. Then we handle the full migration of your products, data, and customers — zero downtime, zero lost sales, a completely smooth handover.`,
      },
    ],
    faq: [
      {
        q: `How much does a Shopify development service cost?`,
        a: `Every project is different. We offer custom quotes based on whether you need a simple setup or a fully bespoke store with custom features. Contact us for a free audit and quote — no commitment needed.`,
      },
      {
        q: `Can you help me upgrade to Shopify Plus?`,
        a: `Yes. We specialize in Shopify Plus development and can migrate your store to the enterprise level without losing any data, orders, or SEO ranking. The transition is smooth — you won't miss a single sale.`,
      },
      {
        q: `Do you build custom Shopify apps?`,
        a: `Absolutely. If you need a feature that doesn't exist in the app store, we build it from scratch. Custom apps for inventory, subscriptions, custom checkouts, loyalty programs — whatever your business needs.`,
      },
      {
        q: `Will my store be mobile-friendly?`,
        a: `Always. We design mobile-first, since the majority of e-commerce traffic is on phones. Your store will look and work perfectly on every screen — desktop, tablet, and mobile.`,
      },
      {
        q: `Do you offer ongoing maintenance?`,
        a: `Yes. We offer Shopify maintenance packages to keep your store fast, secure, and up to date. Regular speed checks, technical support, and updates — so you never have to worry about your site going down.`,
      },
      {
        q: `Do you handle SEO during the build?`,
        a: `Yes. SEO best practices are built into every project — clean URL structure, optimized page speed, proper metadata, and schema markup. Your store launches ready to rank, not needing to be fixed later.`,
      },
    ],
    closingTag: `Your store should be an asset, not a headache`,
    closingHeading: `Get Your Store Where It Belongs.`,
    closingBody: `We have the 15 years of experience needed to build you a world-class Shopify store. Stop leaving revenue on the table — start converting.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "Seo-content-strategy-services": {
    metaTitle: `Search Engine Optimization Agency | SEO Content Strategy | Strat IQ Digital`,
    metaDescription: `Rank higher on Google and Amazon without paying for every click. Strat IQ delivers ecommerce SEO services and content strategy that build lasting organic visibility.`,
    heroImage: `/images/uploads/Services-Banner-scaled.jpg`,
    heroHeadline: `SEO & Content Strategy`,
    heroSubhead: `Most brands either treat SEO as a technical chore or dump money into blog posts nobody reads. Neither works. At Strat IQ Digital, we bridge technical search requirements with human psychology — building a content strategy that compounds over time and makes your brand the only logical answer when customers go looking.`,
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free SEO Audit`,
    whoItsFor: [
      {
        title: `The E-commerce Store`,
        body: `You run an online store and need specialized e-commerce SEO to make sure your products appear at the top of search results — not buried on page four where no one looks.`,
      },
      {
        title: `The Content-Driven Brand`,
        body: `You know you have a story to tell but need an SEO content strategy that actually converts readers into buyers — not just articles that rack up views and produce nothing.`,
      },
      {
        title: `The Shopify Merchant`,
        body: `You need a Shopify SEO partner that understands the platform's unique technical quirks — collection pages, duplicate content, navigation structure — and knows how to fix them all.`,
      },
      {
        title: `The Brand That Wants to Last`,
        body: `You want organic growth that builds lasting value — traffic and rankings that keep working long after your ad spend stops, compounding month after month.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our SEO Services`,
    whatsIncludedIntro: `We don't just focus on one area — we optimize your entire digital footprint for organic growth.`,
    whatsIncluded: [
      {
        title: `Data-Driven Content Strategy`,
        body: `We don't write for keywords, we write for intent. Every piece of content on your site serves a specific purpose — either attracting a new visitor or closing a sale.`,
      },
      {
        title: `Technical & Organic SEO`,
        body: [
          `A great story is useless if Google can't find it. We handle the complex technical side, from `,
          { text: "site speed", href: "/conversion-optimization-services" },
          ` — which is also a conversion factor — to sitemaps and schema markup, building a clean, fast, healthy site that search engines love to rank.`,
        ],
      },
      {
        title: `Content Creation & Auditing`,
        body: `We write high-end content that matches your brand's voice while hitting every SEO requirement, and we audit your existing pages to find old or weak content holding you back — refreshing, rewriting, and redirecting until every page is a winner.`,
      },
      {
        title: `Specialized Shopify SEO`,
        body: `If you sell on Shopify, you need an agency that knows the platform's quirks. We optimize your collection pages, product descriptions, and navigation to make your store easy for both Google and your customers to navigate.`,
      },
    ],
    whySectionHeading: `Authority Over Tricks`,
    whyStratIQ: [
      {
        title: `ROI Over Traffic`,
        body: `We don't chase empty traffic numbers. We rank you for the keywords that actually drive sales — high-intent searches from people who are ready to buy.`,
      },
      {
        title: `Authority Building`,
        body: `We make your brand the trusted expert in your niche. Content that answers real questions, builds genuine trust, and earns links that lift your entire domain.`,
      },
      {
        title: `Technical Precision`,
        body: `We fix the hidden errors most brands don't know they have — site speed, crawlability, schema markup, mobile performance — everything that holds a site back from ranking.`,
      },
      {
        title: `Compounding Value`,
        body: `Paid ads stop the moment you stop paying. Our organic SEO work keeps delivering traffic and revenue for years after the content goes live.`,
      },
      {
        title: `15 Years of Experience`,
        body: `We've survived every major Google algorithm update. We know how to build strategies that last through changes — not ones that collapse the moment Google shifts.`,
      },
    ],
    process: [
      {
        title: `The SEO Audit`,
        body: `We start by looking under the hood. We find the technical errors, content gaps, and cannibalization issues that are stopping you from ranking — giving us a clear roadmap before we write a single word or change a single setting.`,
      },
      {
        title: `Market & Intent Research`,
        body: `We don't just look for high-volume keywords — we look for high-intent ones. The words your customers use when they're ready to buy, not just browse. This is the foundation every piece of content is built on.`,
      },
      {
        title: `Content Deployment`,
        body: `Our content team creates the pages, guides, and articles needed to capture the market. Everything is built to be the single best answer on the web for that topic — not just keyword-stuffed filler that ranks for a week and disappears.`,
      },
      {
        title: `Continuous Optimization`,
        body: `The search market changes constantly. We monitor your rankings and competitors daily — refreshing content, adjusting internal linking, and responding to algorithm shifts to keep you at the top long after the initial push.`,
      },
    ],
    faq: [
      {
        q: `How do I find the right SEO agency for my business?`,
        a: `Look for an agency that talks about ROI, not just rankings. The right partner understands your business goals and builds a strategy around them — not one that sends you monthly keyword reports and calls it done.`,
      },
      {
        q: `Do you offer specialized Shopify SEO?`,
        a: `Yes. We know exactly how to handle Shopify's technical structure — collection page indexing, duplicate content from filter parameters, URL hierarchy, and more. It's also fully integrated with our [[LINK]].`,
        linkText: `Shopify development services`,
        linkHref: `/shopify-development-services`,
      },
      {
        q: `What's the benefit of local SEO?`,
        a: `If you serve a specific area, local SEO ensures you show up when nearby customers search for what you offer. It's the most efficient way to win your local market against national competitors with bigger budgets.`,
      },
      {
        q: `How long does SEO take to work?`,
        a: `Technical fixes can show movement quickly. A full content and organic SEO strategy typically takes 3–6 months to show significant compounding growth — and continues to compound long after that. It's a long-term investment, not a quick fix.`,
      },
      {
        q: `Is your content written by humans or AI?`,
        a: `Our strategy is led by experienced SEO professionals. While we use tools for data and research, the content itself is written to build genuine human-to-human authority — the kind that earns trust and actually ranks long term.`,
      },
      {
        q: `Do you also handle content audits on existing sites?`,
        a: `Yes. We audit existing content to find pages that are underperforming, cannibalizing each other, or dragging down your domain. We then refresh, rewrite, or redirect — turning weak pages into assets instead of liabilities.`,
      },
    ],
    closingTag: `Stop being invisible in search results`,
    closingHeading: `Your Customers Are Searching Now.`,
    closingBody: `They're looking for exactly what you offer. We make sure your brand is the first thing they find — and the only one they need.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "creative-strategy-services": {
    metaTitle: `Creative Strategy Agency | Ad Creative & Content Marketing Services | Strat IQ Digital`,
    metaDescription: `Grow your brand with Strat IQ Digital. Get unmatched expertise in creative strategy, ad design, and brand storytelling. We turn visuals into revenue.`,
    heroImage: `/images/uploads/Services-Banner-1-scaled.jpg`,
    heroHeadline: `Creative Strategy Services`,
    heroSubhead: [
      `In 2026, beauty alone isn't enough. If your visuals don't have a strategy behind them, they're just noise — pretty assets with low click-through rates and no revenue to show for it. At Strat IQ Digital, we combine art with logic, bridging the gap between "looking good" and performing well in your `,
      { text: "sales funnel", href: "/conversion-optimization-services" },
      `. This applies to every `,
      { text: "Meta ads", href: "/meta-instagram-ads-services" },
      ` and `,
      { text: "Google Ads", href: "/google-ads-management-services" },
      ` creative we produce.`,
    ],
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free Audit`,
    whoItsFor: [
      {
        title: `Your Ads Are Being Ignored`,
        body: `You're spending on traffic but nobody's clicking. You need visuals engineered to catch the eye and force people to stop mid-scroll — creative that competes, not blends in.`,
      },
      {
        title: `Your Message is Confusing`,
        body: `You have a great product but people don't "get it" fast enough. You need brand messaging and storytelling that simplifies your offer and makes it impossible to scroll past without understanding exactly why they need it.`,
      },
      {
        title: `You Need Content at Scale`,
        body: `You're running ads across Meta, TikTok, and YouTube and you're burning through ideas. You need a steady pipeline of fresh, high-performing creative concepts that keeps your campaigns from going stale.`,
      },
      {
        title: `Your Brand Looks Inconsistent`,
        body: `Your website, social media, and ads look like they belong to three different companies. You need a unified visual language that builds trust and recognition at every single touchpoint.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our Creative Strategy Services`,
    whatsIncludedIntro: `We handle everything from the big idea to final production — a total solution for your brand's visual and messaging needs.`,
    whatsIncluded: [
      {
        title: `Data-Driven Creative Strategy`,
        body: `We start with the "why." We research your audience to find out what actually moves them, then build a plan outlining exactly what images, videos, and words will get the best results for your specific market.`,
      },
      {
        title: `Ad Creative & Social Production`,
        body: [
          `We produce the assets that power your growth — high-energy videos and scroll-stopping images built for modern platforms, used across your `,
          { text: "Meta advertising", href: "/meta-instagram-ads-services" },
          ` and `,
          { text: "Google display campaigns", href: "/google-ads-management-services" },
          `.`,
        ],
      },
      {
        title: `Content Marketing & SEO Strategy`,
        body: [
          `Content should be useful and findable. We create everything from long-form guides to blog content, with `,
          { text: "SEO strategy", href: "/Seo-content-strategy-services" },
          ` logic built in — so your content doesn't just look great, it also helps you rank higher on organic search.`,
        ],
      },
      {
        title: `Brand Identity & Storytelling`,
        body: [
          `We help you find your voice. Our `,
          { text: "branding & design", href: "/branding-and-design-services" },
          ` framework tells your customers who you are, what you stand for, and why they should choose you over anyone else.`,
        ],
      },
    ],
    whySectionHeading: `Art That Earns`,
    whyStratIQ: [
      {
        title: `Performance-First Mindset`,
        body: `We don't make art for art's sake. Every visual decision is made with your ROAS in mind — because creative that doesn't convert is just an expensive decoration.`,
      },
      {
        title: `Rapid Concept Development`,
        body: `We don't bet everything on one idea. We develop and test multiple angles simultaneously — finding what resonates with your specific audience fast, before wasted budget tells you the wrong way.`,
      },
      {
        title: `Total Consistency`,
        body: `We ensure your brand looks and feels identical at every touchpoint. That consistency is what turns a first-time buyer into someone who comes back, refers friends, and never considers switching.`,
      },
      {
        title: `High-End Production`,
        body: `Whether it's a quick social video or a full brand campaign, we maintain a premium standard that positions your brand as a market leader — not just another option in the feed.`,
      },
      {
        title: `15 Years of Experience`,
        body: `We know what worked five years ago and what works today. That history keeps your brand ahead of the creative trends — not scrambling to catch up once they've already peaked.`,
      },
    ],
    process: [
      {
        title: `Creative Discovery & Audit`,
        body: `We start by reviewing your current assets and your competitors' creative. We identify the visual gaps — where your brand can stand out, what your audience responds to, and what the market is completely ignoring that you can own.`,
      },
      {
        title: `Concept Development`,
        body: `We develop 3–5 distinct creative angles for your campaign — each addressing a different customer pain point or desire. Multiple angles means we test what actually resonates rather than gambling the budget on a single direction.`,
      },
      {
        title: `Production & Design`,
        body: `We bring the winning concepts to life — filming, editing, graphic design, and copywriting all handled in-house. Every asset is built to spec for the platform it's running on, whether that's a 6-second Reel or a full YouTube pre-roll.`,
      },
      {
        title: `Testing & Iteration`,
        body: `We don't stop at launch. We monitor performance data and iterate on the creative based on how real audiences are actually engaging. The best campaigns get better over time — and we make sure yours does too.`,
      },
    ],
    faq: [
      {
        q: `What does a creative strategy agency actually do?`,
        a: `We bridge the gap between marketing goals and visual design — making sure every image, video, and piece of copy is created with a specific business objective in mind, not just to look nice in a portfolio.`,
      },
      {
        q: `Do you produce video content?`,
        a: `Yes. Video is the most powerful creative format right now. We handle everything from TikTok and Instagram Reels to high-end brand films and YouTube ad formats — scripted, filmed, and edited to perform on each specific platform.`,
      },
      {
        q: `Why do I need brand messaging strategy?`,
        a: `If you can't explain why you're better than your competitors in five seconds, you're losing sales. Brand messaging strategy makes your value proposition clear and compelling to every visitor — before they have a chance to look elsewhere.`,
      },
      {
        q: `How is a digital creative agency different from a traditional one?`,
        a: `A digital creative agency designs for how people actually consume content — fast, on phones, mid-scroll. We prioritize engagement speed and direct-response results, not traditional "billboard" aesthetics that were built for a different era.`,
      },
      {
        q: `Can creative strategy help with SEO content too?`,
        a: `Yes. We create high-quality long-form content, guides, and articles that search engines rank and real people actually read. Creative strategy and [[LINK]] aren't separate disciplines — good content needs to be both findable and worth finding.`,
        linkText: `SEO`,
        linkHref: `/Seo-content-strategy-services`,
      },
      {
        q: `How often do you refresh the creative?`,
        a: `Ad fatigue is real — audiences tune out the same creative quickly. We monitor performance signals and rotate or refresh assets before they start dragging down your results, keeping campaigns consistently strong without blowing the budget on unnecessary production.`,
      },
    ],
    closingTag: `Stop blending into the background`,
    closingHeading: `Creative That Actually Sells.`,
    closingBody: `If your creative isn't moving the needle, it's costing you more than you think. Let's build a visual strategy that turns attention into revenue.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "conversion-optimization-services": {
    metaTitle: `Conversion Rate Optimization Agency | Funnel & CRO Services | Strat IQ Digital`,
    metaDescription: `Turn the traffic you're already paying for into revenue. Strat IQ Digital's conversion optimization and funnel services fix friction points and lift your conversion rate fast.`,
    heroImage: `/images/uploads/Services-Banner-scaled.jpg`,
    heroHeadline: `Conversion Optimization & Funnels`,
    heroSubhead: [
      `If you're spending thousands on `,
      { text: "ads", href: "/google-ads-management-services" },
      ` but sales aren't growing, you don't have a traffic problem — you have a conversion problem. Most websites are leaky buckets. At Strat IQ Digital, we stop the leaks. We use 15 years of data to find exactly where visitors drop off, and we fix it so the traffic you already have turns into the revenue you deserve.`,
    ],
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free Audit`,
    whoItsFor: [
      {
        title: `The Growing Brand`,
        body: `You have a good product and steady traffic, but sales have hit a wall. You need someone to find the friction points — the exact moments where visitors decide to leave instead of buy.`,
      },
      {
        title: `The Margin-Focused Operator`,
        body: `You're tired of high customer acquisition costs. You need funnel optimization that increases your conversion rate so you make more money from the same amount of ad spend — without touching your budget.`,
      },
      {
        title: `The Complex Sales Business`,
        body: `You deal with high-ticket items or B2B leads and need systems to nurture prospects and close deals faster — without your team spending hours on manual follow-up for every inquiry.`,
      },
      {
        title: `The High-Volume Store`,
        body: `You're doing serious volume but losing sales at the cart or checkout. You need a streamlined user journey and a higher average order value — both of which conversion optimization delivers directly.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our Conversion Services`,
    whatsIncludedIntro: `We look at every step of your customer's journey, from the first click to the final thank-you page.`,
    whatsIncluded: [
      {
        title: `Data-Driven Funnel Optimization`,
        body: `We don't guess what works, we test it. A/B testing on your headlines, buttons, and layouts, plus heatmaps and session recordings that show exactly where people get frustrated and leave.`,
      },
      {
        title: `Ecommerce & B2B Funnel Strategy`,
        body: `Every business needs a different flow. Quick, frictionless checkouts for ecommerce stores, or lead-capture systems and nurture sequences for service businesses that qualify prospects before they ever talk to your team.`,
      },
      {
        title: `CRM & Sales Automation`,
        body: [
          `Efficiency is key to conversion. We provide `,
          { text: "CRM integration", href: "/system-integration-services" },
          ` so leads are tracked and nurtured automatically — workflows that follow up on abandoned carts or newsletter signups, so no opportunity is missed.`,
        ],
      },
      {
        title: `Landing Page Engineering`,
        body: [
          `Your `,
          { text: "ads", href: "/meta-instagram-ads-services" },
          ` deserve a destination that sells. We design and build high-converting `,
          { text: "landing pages", href: "/ui-ux-design-services" },
          ` that match your ad messaging perfectly — fast, mobile-friendly, and highly persuasive.`,
        ],
      },
    ],
    whySectionHeading: `Logic Over Guesswork.`,
    whyStratIQ: [
      {
        title: `Logic Over Guesswork`,
        body: `We use real user data and 15 years of experience to make decisions. Every change is backed by heatmaps, recordings, and A/B test results — not gut feel.`,
      },
      {
        title: `Full Funnel Focus`,
        body: `We don't just fix a button. We audit your entire system — from ad copy to checkout — to ensure a consistent, persuasive message at every single step.`,
      },
      {
        title: `Automation Driven`,
        body: `We set up CRM integrations and automated workflows that close sales while you sleep — cart abandonment sequences, lead nurture flows, and follow-up systems that run themselves.`,
      },
      {
        title: `Immediate Impact`,
        body: `Conversion optimization is often the fastest way to increase profit. We find the low-hanging fruit that can move the needle in weeks — not the months SEO requires.`,
      },
      {
        title: `Performance Obsessed`,
        body: `We treat your budget like our own. Our goal is always to maximize ROI and lower your cost per acquisition — not just report on metrics that don't move revenue.`,
      },
    ],
    process: [
      {
        title: `The Friction Audit`,
        body: `We use heatmaps, session recordings, and analytics to watch how real users move through your site. We pinpoint exactly where people drop off and which pages are hemorrhaging the most revenue — before we touch a single thing.`,
      },
      {
        title: `Strategy & Hypothesis`,
        body: `Once we know the problems, we prioritize by impact. We build a clear action plan — which changes will move the bottom line the most, in which order, and what we expect each fix to deliver before we implement it.`,
      },
      {
        title: `Implementation & Testing`,
        body: `We roll out changes and run A/B tests to prove they work before committing fully. Whether it's a redesigned checkout, a new landing page, or a CRM automation sequence, everything is tracked and measured precisely.`,
      },
      {
        title: `Review & Scale`,
        body: `We analyse the results and double down on the winners. As your traffic grows, we keep refining your funnel to protect your conversion rate — so scaling your ads doesn't mean watching your returns collapse.`,
      },
    ],
    faq: [
      {
        q: `What does a sales funnel agency actually do?`,
        a: `We look at every step a customer takes from first landing on your site to completing a purchase — and optimize each one to make sure as many people as possible complete the journey without dropping off.`,
      },
      {
        q: `How is this different from just web design?`,
        a: `Design is about how a site looks. Conversion optimization is about how it works. We focus on the psychology and data that lead to a sale — not just aesthetics. A site can look great and still convert terribly.`,
      },
      {
        q: `Why do I need sales automation?`,
        a: `Automation sets up systems that sell for you around the clock — cart abandonment emails, lead nurture sequences, CRM workflows. It keeps your brand in front of customers without your team doing hours of manual follow-up.`,
      },
      {
        q: `Can you help with B2B lead generation?`,
        a: `Yes. We build structured B2B funnel strategies that capture higher-quality leads and move them through a defined sales process — so your team spends time closing deals, not chasing cold prospects.`,
      },
      {
        q: `How quickly can I see results?`,
        a: `Unlike SEO, conversion changes can show results almost immediately. Once we fix a major friction point on a high-traffic page, the difference shows up in your sales data within days — not months.`,
      },
      {
        q: `Do you work with our existing tools and platforms?`,
        a: `Yes. We integrate with your existing CRM, email platform, and analytics stack — whether that's Shopify, HubSpot, Klaviyo, or custom setups. We work within what you have and extend it, not rip it out and start over.`,
      },
    ],
    closingTag: `Stop wasting the traffic you're already paying for`,
    closingHeading: `Fix the Leaks. Grow the Revenue.`,
    closingBody: `The traffic is already there. We help you convert more of it — with data-driven funnel fixes that show up in your revenue within weeks, not months.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "branding-and-design-services": {
    metaTitle: `Branding & Design Agency | Visual Identity Services | Strat IQ Digital`,
    metaDescription: `Build a brand that looks like it already won. Strat IQ Digital delivers branding and design services that create trust, consistency, and higher-converting creative.`,
    heroImage: `/images/uploads/Services-Banner-1-scaled.jpg`,
    heroHeadline: `Branding & Design Services`,
    heroSubhead: [
      `Even a huge `,
      { text: "ad budget", href: "/google-ads-management-services" },
      ` can't save a brand that looks unprofessional. In a crowded market, your visual identity is your first and last chance to build trust. At Strat IQ Digital, we don't just make things look good — we build visual authority from the ground up, using 15 years of market data to create identities that make your brand look like it already won.`,
    ],
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Brand Audit`,
    whoItsFor: [
      {
        title: `The Growing Brand`,
        body: `You've outgrown your original logo and starter look. You need a professional identity that matches the quality of your products and signals to customers that you're the real deal.`,
      },
      {
        title: `The New Launch`,
        body: `You're launching something new and need to look established from day one — not like a brand that'll disappear in six months. First impressions close sales before you even say a word.`,
      },
      {
        title: `The Ad-Driven Business`,
        body: `Your ads are being ignored because they blend in. You need scroll-stopping creative that catches the eye, builds instant recognition, and makes people want to click — not scroll past.`,
      },
      {
        title: `The Professional Services Brand`,
        body: `You're in B2B or professional services and need design that communicates authority, reliability, and expertise — the kind of brand that corporate decision-makers trust without hesitation.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our Branding Services`,
    whatsIncludedIntro: `We make sure that every time a customer sees your brand — on a website, an ad, or social media — they see a consistent, professional image.`,
    whatsIncluded: [
      {
        title: `Brand Identity & Foundation`,
        body: `We create the foundation of your brand: professional logo design, color palettes, and typography. A style guide so everything you create in the future stays consistent and instantly recognizable.`,
      },
      {
        title: `Digital & Ad Creative Design`,
        body: [
          `Your ads are often the first thing a customer sees. We design ads and `,
          { text: "creative strategy", href: "/creative-strategy-services" },
          ` — social banners and video assets that aren't just beautiful, they're engineered to get clicks and sales.`,
        ],
      },
      {
        title: `Graphic Design & Collateral`,
        body: `Beyond just a logo, we handle the day-to-day design needs of your business — pitch decks, brochures, email templates — so your brand's voice and look are never diluted.`,
      },
      {
        title: `Website Design & Branding`,
        body: [
          `Your website is your brand's home. We make sure your online presence is fast, modern, and aligned with your overall identity — with `,
          { text: "user experience", href: "/ui-ux-design-services" },
          ` as sharp as the visual design.`,
        ],
      },
    ],
    whySectionHeading: `Design With Purpose.`,
    whyStratIQ: [
      {
        title: `Design with Purpose`,
        body: `We don't follow trends that go out of style in a year. We build timeless identities grounded in your business goals and the psychology of your specific customer.`,
      },
      {
        title: `Consistency is Key`,
        body: `A brand is only powerful if it stays consistent everywhere. We ensure your ads, website, and social media all speak the same visual language — no mixed signals.`,
      },
      {
        title: `Performance Minded`,
        body: `Unlike typical design studios, we understand performance marketing. We build assets specifically designed to improve ad click-through rates and lower your cost per acquisition.`,
      },
      {
        title: `High-End Aesthetic`,
        body: `We specialize in the "less is more" approach — the clean, premium look that the world's top brands use to command higher prices and attract better customers.`,
      },
      {
        title: `15 Years of Experience`,
        body: `We've helped hundreds of brands find their voice. We know which colors, shapes, and visual cues move people to take action — and which ones send them the other way.`,
      },
    ],
    process: [
      {
        title: `Brand Discovery`,
        body: `We start by learning who you are, who your customers are, and what your competitors look like. We don't start designing until we fully understand the "why" behind your business — because strategy always comes before aesthetics.`,
      },
      {
        title: `Strategy & Concepts`,
        body: `We present different visual directions — showing you how your brand can stand out from the competition while staying completely true to your values and the audience you're speaking to. No guessing, no subjective "vibes."`,
      },
      {
        title: `Visual Engineering`,
        body: `Once a direction is chosen, we build everything — logo files, color palettes, typography systems, and a full brand style guide. Every asset is high-resolution and ready to use across every platform, channel, and format.`,
      },
      {
        title: `Implementation`,
        body: `We help you roll out your new identity across all platforms — website, ad creative, social media, email templates, and beyond. The transition is seamless so your brand launches looking polished from every angle, all at once.`,
      },
    ],
    faq: [
      {
        q: `Why do I need a professional branding service?`,
        a: `Branding is how people perceive you before they ever speak to you. A professional identity ensures that perception is positive, trustworthy, and aligned with your pricing — making every other part of your marketing work harder.`,
      },
      {
        q: `Is branding different for B2B companies?`,
        a: `Yes. B2B branding focuses on trust, authority, and long-term credibility rather than impulse appeal. The design needs to be clean and precise — built to impress corporate decision-makers who are scrutinizing every detail.`,
      },
      {
        q: `Can you help small businesses with branding?`,
        a: `Absolutely. We love helping a local favourite become a nationally recognized brand through professional identity work. Great branding isn't reserved for enterprise companies — it's often what gets you there.`,
      },
      {
        q: `Can you handle website design and branding together?`,
        a: `Yes — and we prefer it. Website design and branding work best when planned in parallel, so your site becomes the perfect digital expression of your brand rather than something bolted on after the fact.`,
      },
      {
        q: `What are digital branding services?`,
        a: `Digital branding covers how your brand looks and feels across every online touchpoint — social media, digital ads, email, and mobile. It ensures your identity is consistent and compelling wherever your customers encounter you.`,
      },
      {
        q: `Will my new branding work for paid ads?`,
        a: `That's a core part of how we design. Unlike standard design agencies, we build every asset with performance marketing in mind — ad creatives, banners, and visual systems specifically engineered to get clicks and lower your cost per acquisition.`,
      },
    ],
    closingTag: `Stop blending in. Start standing out.`,
    closingHeading: `Your Brand Deserves to Look the Part.`,
    closingBody: `Your work is professional. Your brand should say the same thing. Let's build the visual authority that makes every marketing dollar work harder.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "ui-ux-design-services": {
    metaTitle: `UI/UX Design Agency | Conversion-Focused Web Design | Strat IQ Digital`,
    metaDescription: `Turn visitors into buyers with data-driven UI/UX design. Strat IQ Digital engineers interfaces built on real user behaviour, not guesswork.`,
    heroImage: `/images/uploads/Services-Banner-scaled.jpg`,
    heroHeadline: `UI/UX Design Services`,
    heroSubhead: [
      `A website can look beautiful and still fail to make money. If visitors can't find what they need in three seconds, they leave — and you've just paid for an `,
      { text: "ad", href: "/meta-instagram-ads-services" },
      ` to send someone to a dead end. At Strat IQ Digital, we engineer interfaces that guide users toward the checkout button, using 15 years of data on exactly how customers actually behave.`,
    ],
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free UX Audit`,
    whoItsFor: [
      {
        title: `The Growing Brand`,
        body: `You have a functional site, but you know it could be better. You need someone to look at the data and fix the friction points that are quietly killing your conversion rate every single day.`,
      },
      {
        title: `The Custom Store Owner`,
        body: `You're tired of cookie-cutter templates that look like everyone else's store. You need a bespoke ecommerce experience that reflects your unique brand and makes the buying journey feel effortless.`,
      },
      {
        title: `The High-Traffic, Low-Sales Brand`,
        body: `Your traffic numbers look great but your sales don't match. You need conversion-focused UX design to simplify navigation and make buying from you as frictionless as humanly possible.`,
      },
      {
        title: `The Technical Product Business`,
        body: `You have a complex offer or a SaaS product and need your interface to feel intuitive to the average user — not just someone who already understands how it works.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our UI/UX Services`,
    whatsIncludedIntro: `We offer a full range of research and design solutions to make sure your digital presence is world-class.`,
    whatsIncluded: [
      {
        title: `Strategic UX Research & Auditing`,
        body: `We don't make guesses. We use heatmaps and data to see exactly where your current site is failing, then build a plan that fixes those leaks — no changes made on gut feeling alone.`,
      },
      {
        title: `Ecommerce User Experience Design`,
        body: [
          `Selling online requires specific logic. As a `,
          { text: "Shopify development", href: "/shopify-development-services" },
          ` and UX partner, we know how to optimize product pages, carts, and checkouts so the path to purchase is short, fast, and satisfying for every customer.`,
        ],
      },
      {
        title: `Wireframing & Prototyping`,
        body: `Before we focus on visuals, we build the bones. Wireframes and prototypes let you see and click through your site's structure before it's built — saving time and keeping the process focused on the user journey.`,
      },
      {
        title: `Interaction Design & Usability Testing`,
        body: [
          `Digital design should be interactive. We combine `,
          { text: "conversion optimization", href: "/conversion-optimization-services" },
          ` with interaction design to make your site feel alive and responsive, then watch real people use it to make sure the final product is truly user-friendly.`,
        ],
      },
    ],
    whySectionHeading: `Data Over Opinions.`,
    whyStratIQ: [
      {
        title: `Data Over Opinions`,
        body: `We don't care about trends. We care about what works. Every layout, button, and flow is based on UX research and real user behaviour — not guesswork or personal taste.`,
      },
      {
        title: `Performance Minded`,
        body: `We think like marketers, not just designers. Every element we place is chosen to lower your bounce rate, increase time on site, and push more visitors toward the purchase.`,
      },
      {
        title: `Mobile-First Logic`,
        body: `Most of your customers are on their phones. We design mobile-first, every time — ensuring your site looks and feels better on a small screen than it does on a desktop.`,
      },
      {
        title: `Fast & Efficient`,
        body: `A heavy design is a slow design. We build lightweight, clean layouts that keep your site speed high — because every second of load time is costing you conversions.`,
      },
      {
        title: `15 Years of Experience`,
        body: `We've watched the web evolve through every major shift. We use that history to predict how users will react to your interface — saving you months of costly trial and error.`,
      },
    ],
    process: [
      {
        title: `UX Discovery & Research`,
        body: `We start by studying your users, your analytics, and your current site's failure points. We interview stakeholders and examine the data to make sure we fully understand the problem we're solving before we propose any solution.`,
      },
      {
        title: `Wireframing & Structure`,
        body: `We build the blueprint of your site first — mapping out the complete user flow so every page has a clear goal and a clear next step. Structure always comes before visuals, because a beautiful page with bad architecture still fails.`,
      },
      {
        title: `Visual UI Design`,
        body: `Once the structure is locked, we apply high-end visual design — aligned with your brand, optimized for usability, and built to feel premium at every touchpoint. Form follows function, but both have to be exceptional.`,
      },
      {
        title: `Prototyping & Testing`,
        body: `We create a live, clickable prototype of your site and run it through real usability testing before final handoff. Real people, real behaviour — so what we deliver is proven to work, not just approved in a design review.`,
      },
    ],
    faq: [
      {
        q: `What is the difference between UI and UX?`,
        a: `UX (User Experience) is how a site works and feels — the logic, flow, and journey. UI (User Interface) is how it looks — the colours, typography, and visual elements. We handle both, because a site needs to be beautiful and functional to actually convert.`,
      },
      {
        q: `Why hire a UX agency instead of a regular web designer?`,
        a: `A regular designer focuses on aesthetics. A UX agency focuses on user behaviour. We use research and data to ensure the design actually leads to more sales — not just more compliments from the team.`,
      },
      {
        q: `Do you offer Shopify UX design?`,
        a: `Yes. We specialize in ecommerce UX and know Shopify's platform inside out. We optimize product pages, collection layouts, cart flows, and checkouts to create a buying experience that removes every possible reason to leave.`,
      },
      {
        q: `Can I hire you for a one-off project?`,
        a: `Yes. You can engage us for a specific project — a single landing page, a full site redesign, or a standalone UX audit. We're flexible on scope and will scope exactly what you need rather than packaging things you don't.`,
      },
      {
        q: `How does UX research help my business?`,
        a: `User research takes the guesswork out of every design decision. It tells you exactly what your customers want, where they get frustrated, and what stops them from buying — so you stop building things they won't use and start fixing things that cost you money.`,
      },
      {
        q: `How long does a UI/UX project take?`,
        a: `A UX audit can be completed in 1–2 weeks. A full design project — research, wireframes, UI, and prototyping — typically runs 4–8 weeks depending on scope. We set clear timelines at the start and stick to them.`,
      },
    ],
    closingTag: `Stop frustrating your customers`,
    closingHeading: `Build a Site People Love to Use.`,
    closingBody: `A confusing website is the fastest way to lose a sale you already paid for. Let us engineer an experience your customers actually enjoy — and one that converts.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "system-integration-services": {
    metaTitle: `System Integration & Workflow Automation Agency | Strat IQ Digital`,
    metaDescription: `Connect your ads, CRM, and store into one unified system. Strat IQ Digital delivers system integration and workflow automation built to scale with you.`,
    heroImage: `/images/uploads/Services-Banner-1-scaled.jpg`,
    heroHeadline: `System Integration Services`,
    heroSubhead: [
      `Most businesses don't have a lack of tools — they have a lack of communication between them. When your `,
      { text: "ads", href: "/google-ads-management-services" },
      `, your CRM, and your `,
      { text: "ecommerce store", href: "/shopify-development-services" },
      ` don't talk to each other, you lose data, waste hours on manual work, and miss sales that should have been automatic. At Strat IQ Digital, we build the digital glue that holds your operation together.`,
    ],
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free Tech Audit`,
    whoItsFor: [
      {
        title: `Drowning in Manual Work`,
        body: `You spend hours every week moving leads between platforms or syncing inventory by hand. You need workflow automation that handles these tasks 24/7 — without errors, without delays, without anyone touching it.`,
      },
      {
        title: `Data All Over the Place`,
        body: `You can't tell which ads are actually making money because your tracking isn't connected to your sales data. You need data integration that gives you a single, accurate view of your actual ROI across every platform.`,
      },
      {
        title: `Ready for Enterprise Efficiency`,
        body: `You're growing fast and need your ERP, CRM, and marketing tools connected so your team can handle 10x the volume without 10x the stress — and without anything falling through the cracks.`,
      },
      {
        title: `Using Stitched-Together Tools`,
        body: `You have 20 different apps that barely work together. You need a clean tech stack audit and a reliable automated workflow — one that actually holds together when your business grows.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our Integration Services`,
    whatsIncludedIntro: `We handle everything from simple API connections to complex business automations.`,
    whatsIncluded: [
      {
        title: `CRM & Marketing Automation`,
        body: [
          `Your CRM should be the heart of your business. We make sure every lead from your `,
          { text: "ads", href: "/google-ads-management-services" },
          ` is instantly tracked, tagged, and followed up with — and that your email and SMS tools work perfectly with your sales data.`,
        ],
      },
      {
        title: `API & Workflow Automation`,
        body: `If an app doesn't have a direct connection, we build one. Using platforms like Zapier and Make, we turn multi-step manual processes into one-click — or zero-click — workflows.`,
      },
      {
        title: `Ecommerce & Platform Integration`,
        body: [
          `Your store shouldn't be an island. We connect your `,
          { text: "Shopify store", href: "/shopify-development-services" },
          ` to your accounting, shipping, and inventory tools, so when a sale happens, every other part of your business knows about it instantly.`,
        ],
      },
      {
        title: `Business Process Automation`,
        body: [
          `We look at your entire operation to find efficiency opportunities, reducing human error and speeding up fulfillment. This is also critical for `,
          { text: "conversion optimization", href: "/conversion-optimization-services" },
          `, since automated follow-ups keep potential buyers engaged.`,
        ],
      },
    ],
    whySectionHeading: `Systems That Scale With You.`,
    whyStratIQ: [
      {
        title: `Logic-First Architecture`,
        body: `We design your integration around how your business actually operates — not just what the software documentation suggests. Real-world workflows, not textbook flowcharts.`,
      },
      {
        title: `Data Integrity`,
        body: `We ensure your data stays clean and accurate across every connected system. No duplicates, no dropped records, no conflicting reports — just a single source of truth you can actually trust.`,
      },
      {
        title: `Scalable Solutions`,
        body: `We build for where you're going, not just where you are. Our integrations are designed to grow with your business so you're not rebuilding the system every time you add a new tool or channel.`,
      },
      {
        title: `Platform Agnostic`,
        body: `We work with the tools that are best for your business — not the ones that pay us the highest referral commission. Salesforce, HubSpot, Shopify, custom APIs — we work with whatever you have.`,
      },
      {
        title: `15 Years of Tech Experience`,
        body: `We've seen every type of software conflict and integration failure. That history means we build systems that are stable, secure, and built to last — not ones that break the moment something updates.`,
      },
    ],
    process: [
      {
        title: `The Tech Stack Audit`,
        body: `We start by mapping every tool in your operation — what it does, what it talks to, and where the bottlenecks are. We identify exactly where data is getting lost, duplicated, or delayed before we propose a single solution.`,
      },
      {
        title: `Workflow Engineering`,
        body: `We design the new data flow for your business — mapping every trigger, action, and condition that will automate your processes. You see the full picture before a single line of code is written or a single connection is made.`,
      },
      {
        title: `Development & Testing`,
        body: `We build the API connections and automation workflows, then run exhaustive tests before anything goes live. We make sure a change in one app doesn't break another — so the rollout is smooth and nothing gets dropped in production.`,
      },
      {
        title: `Handoff & Optimization`,
        body: `We train your team on the new system and provide full documentation. Then we continue monitoring post-launch — catching any edge cases early and optimizing the automation as your business evolves and new tools get added.`,
      },
    ],
    faq: [
      {
        q: `What exactly are system integration services?`,
        a: `System integration connects your different software tools — your website, CRM, email platform, and store — so they share data and work together automatically. Instead of moving information manually between apps, everything syncs in real time without anyone touching it.`,
      },
      {
        q: `Why do I need a specialist for CRM setup?`,
        a: `Large CRM platforms like Salesforce and HubSpot are powerful but complex. Getting the setup wrong from the start leads to messy data, broken automations, and expensive fixes later. A specialist ensures it's done correctly the first time — with a structure that actually matches how your sales team works.`,
      },
      {
        q: `Can you help with Zapier and Make.com automations?`,
        a: `Yes. We use Zapier and Make.com to connect thousands of apps quickly and affordably — even tools that don't have a direct native integration. If two apps exist, there's almost always a way to make them talk to each other.`,
      },
      {
        q: `What is business process automation?`,
        a: `Business process automation uses technology to execute repetitive tasks without human involvement — order confirmations, lead routing, cart abandonment follow-ups, inventory alerts. It reduces errors, speeds up your operation, and frees your team for work that actually requires thinking.`,
      },
      {
        q: `Do you offer Shopify integration for third-party tools?`,
        a: `Absolutely. We connect Shopify to ERPs, custom warehouses, fulfillment providers, accounting platforms, and any third-party tool that isn't available in the standard app store — via custom API builds or automation platforms depending on what fits best.`,
      },
      {
        q: `Will the integrations break when apps update?`,
        a: `We build with stability in mind and monitor post-launch to catch any breaks early. We also document everything clearly so if an update causes an issue, it can be diagnosed and fixed fast — rather than sitting broken for weeks while someone figures out what changed.`,
      },
    ],
    closingTag: `Stop being a slave to your software`,
    closingHeading: `Work On Your Business, Not In It.`,
    closingBody: `The tools you already have should be doing more of the work. Let us build the systems that give you your time back — and let your business run without you holding it together.`,
  },

  // ────────────────────────────────────────────────────────────────────
  "full-service-ecommerce-marketing": {
    metaTitle: `Full-Service E-commerce Marketing Agency | Strat IQ Digital`,
    metaDescription: `One team, every channel. Strat IQ Digital is your end-to-end performance marketing partner — ads, SEO, design, and automation working as a single growth engine.`,
    heroImage: `/images/uploads/Services-Banner-scaled.jpg`,
    heroHeadline: `End-to-End Performance Marketing`,
    heroSubhead: [
      `Most brands hire one person for `,
      { text: "SEO", href: "/Seo-content-strategy-services" },
      `, another for `,
      { text: "ads", href: "/google-ads-management-services" },
      `, and a third for `,
      { text: "design", href: "/branding-and-design-services" },
      ` — then wonder why nothing connects. Fragmented teams produce fragmented results. At Strat IQ Digital, we are the unified engine your brand has been missing.`,
    ],
    stats: STATS,
    ctaPrimary: `Book a Strategy Call →`,
    ctaSecondary: `Get a Free Audit`,
    whoItsFor: [
      {
        title: `Ready to Grow to 8-Figures`,
        body: `You have a winning product but can't reach the next level alone. You need a performance marketing team to take the wheel, manage serious ad spend, and aggressively grow your market share without losing control of the numbers.`,
      },
      {
        title: `Want a Set-and-Forget Growth Team`,
        body: `You're tired of managing five different freelancers who don't talk to each other. You need one team that handles everything — from Google Ads to email automation — so you can focus on actually building your company.`,
      },
      {
        title: `A High-Growth D2C Brand`,
        body: `You sell directly to consumers and need a partner that understands CAC, LTV, and contribution margin — not just "brand awareness." You need someone who speaks the language of profit and optimizes for it every single day.`,
      },
      {
        title: `Need an Omnichannel Presence`,
        body: `You want to be everywhere your customers are — Facebook, Google, TikTok, and Search — with a brand message that stays consistent and powerful across every screen, every platform, every time.`,
      },
    ],
    whatsIncludedHeading: `What's Included in Our All-in-One Services`,
    whatsIncludedIntro: `We act as your internal marketing department, providing the experts and the execution needed to win.`,
    whatsIncluded: [
      {
        title: `Performance Marketing & Revenue Growth`,
        body: [
          `We drive the numbers that matter. We manage your `,
          { text: "paid media", href: "/google-ads-management-services" },
          ` across all major platforms, building a framework focused on finding the most profitable customers for your brand and keeping them coming back.`,
        ],
      },
      {
        title: `eCommerce Growth & Strategy`,
        body: [
          `Selling online is a complex puzzle. We optimize your `,
          { text: "Shopify store", href: "/shopify-development-services" },
          `, your pricing strategy, and your product positioning — covering everything from `,
          { text: "conversion rate optimization", href: "/conversion-optimization-services" },
          ` to high-end creative production.`,
        ],
      },
      {
        title: `360 Degree Digital Strategy`,
        body: [
          `We look at your brand from every angle, making sure your `,
          { text: "SEO and Content", href: "/Seo-content-strategy-services" },
          ` and Paid Ads work in total harmony — every dollar spent on ads also helps your organic rankings, creating a flywheel effect for your growth.`,
        ],
      },
      {
        title: `Full Service Ecommerce Support`,
        body: [
          `From technical site maintenance to `,
          { text: "email marketing flows", href: "/system-integration-services" },
          ` and `,
          { text: "brand design", href: "/branding-and-design-services" },
          `, we cover the entire spectrum — so your digital storefront is always open, fast, and ready to sell.`,
        ],
      },
    ],
    whySectionHeading: `One Team. One Goal.`,
    whyStratIQ: [
      {
        title: `Single Point of Accountability`,
        body: `No more finger-pointing between different agencies. We take total responsibility for your growth and your results — one team, one contract, one set of numbers to hit.`,
      },
      {
        title: `Data-Driven Synergy`,
        body: `We use data from your ads to improve your SEO, and data from your site to improve your ads. This cross-platform intelligence is why integrated marketing consistently outperforms fragmented teams.`,
      },
      {
        title: `Speed of Execution`,
        body: `Because our designers, developers, and media buyers work as one team, we launch and pivot faster than any fragmented agency structure could ever match. Decisions happen in hours, not weeks.`,
      },
      {
        title: `Profit First`,
        body: `We don't care about design awards or vanity metrics. If a channel, campaign, or creative isn't moving your bottom line, we cut it — and redirect every dollar to what is.`,
      },
      {
        title: `Decades of Market Logic`,
        body: `We've built and scaled brands across almost every niche. That depth of experience lets us predict market shifts and position your brand ahead of the curve — not scrambling to catch up after it.`,
      },
    ],
    process: [
      {
        title: `The 360° Business Audit`,
        body: `We start by examining your entire business — not just your ads. We find the hidden bottlenecks in your funnel, your tech stack, and your messaging that are silently capping your growth before we propose a single solution.`,
      },
      {
        title: `Integrated Growth Roadmap`,
        body: `We build a custom growth plan mapped to your revenue goals — outlining exactly which channels, creative strategies, and technical fixes we'll deploy, in which order, and what each milestone looks like before we start executing.`,
      },
      {
        title: `Full-Scale Implementation`,
        body: `The full team goes to work simultaneously. Ads rebuilt, site optimized, content strategy launched — all at once, all aligned. Not a staggered rollout where one piece waits on another while the budget runs.`,
      },
      {
        title: `Continuous Revenue Optimization`,
        body: `We monitor the numbers daily and treat your budget like our own. Resources shift constantly to whatever is generating the highest return — so your growth compounds month over month instead of plateauing after the launch spike.`,
      },
    ],
    faq: [
      {
        q: `What is a full service digital marketing agency?`,
        a: `A full service agency handles every aspect of your online presence — ads, SEO, content, design, website, and automation — acting as your complete outsourced marketing department. One team, one strategy, one unified push toward your revenue goals.`,
      },
      {
        q: `Why hire an ecommerce growth agency instead of just an ads person?`,
        a: `An ads person only looks at clicks. An ecommerce growth agency looks at your profit margins, conversion rate, and customer retention — growing the whole business, not just the traffic. Clicks without conversion is just expensive entertainment.`,
      },
      {
        q: `What does a performance marketing agency focus on?`,
        a: `Every dollar tracked to a measurable result — leads, sales, and ROI. We don't run campaigns for awareness or vanity metrics. Every spend is tied to a revenue outcome, and we kill anything that doesn't deliver one.`,
      },
      {
        q: `Is end-to-end marketing right for smaller brands?`,
        a: `Yes. Even growing brands benefit from integrated marketing — it stops budget waste, creates consistent messaging across channels, and builds a growth flywheel much faster than piecemeal efforts ever could. You don't need to be at 8-figures to think like you're going there.`,
      },
      {
        q: `How does integrated marketing improve ROI?`,
        a: `When your marketing is integrated, every channel strengthens the others. Your SEO makes your ads cheaper. Your ads accelerate your SEO. Your content feeds your email. Your email feeds your retention. The compounding effect is what makes integrated marketing the highest-ROI approach available.`,
      },
      {
        q: `How long before we see results?`,
        a: `Paid channels show movement within weeks. SEO and content compound over 3–6 months. Full flywheel momentum — where all channels are reinforcing each other — typically kicks in around months 4–6. We set clear milestones from day one so you always know what to expect and when.`,
      },
    ],
    closingTag: `You have the product. We have the engine.`,
    closingHeading: `Let's Build Your Empire Together.`,
    closingBody: `Stop managing freelancers and start leading a market-dominant brand. One team, one strategy, one goal — your revenue, growing every month.`,
  },
};

export function getServiceContent(slug) {
  return servicesContent[slug];
}
