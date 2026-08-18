// Single source of truth for the 3 seed blog posts shown on /blog and on
// each /post/[slug] detail page.
//
// `body` is an ordered array of simple content blocks so the detail page
// can render it generically without caring which post it belongs to:
//   { type: "h4", text }
//   { type: "p",  text }
//   { type: "ul", items: [...] }
//
// Keep this the only place post copy lives -- the listing page and the
// detail page both read from here.

export const posts = [
  {
    slug: "ecommerce-ad-accounts-set-up-to-fail",
    title: "Why Most E-Commerce Ad Accounts Are Set Up to Fail From Day One",
    date: "2026-06-02",
    coverImage: "/images/webflow/699ed6f18aceafc086e38c13_blog-1.webp",
    excerpt:
      "Bad account structure doesn't show up as an error message. It shows up as a CPA that never gets better, no matter how much you spend.",
    body: [
      {
        type: "p",
        text: "Most e-commerce brands don't lose money on ads because the product is wrong or the market is bad. They lose money because the account was built wrong on day one, and nobody ever went back to fix the foundation. We audit a lot of accounts before we take them on. The pattern is always the same.",
      },
      {
        type: "h4",
        text: "The account was built for launch day, not for scale",
      },
      {
        type: "p",
        text: "Someone — an agency, a freelancer, a founder at 11pm — set up campaigns to get the store live. That's a reasonable first step. The problem is that structure never gets revisited once revenue starts coming in. Six months later you've got a Frankenstein account: overlapping campaigns bidding against each other, audiences that were never refreshed, and a catalog feed that hasn't matched the actual product line in months.",
      },
      {
        type: "p",
        text: "None of this throws an error. Google and Meta will happily keep spending your budget on a broken structure forever. That's what makes it dangerous — there's no red flag, just a CPA that quietly creeps upward.",
      },
      {
        type: "h4",
        text: "Five signs your account structure is the problem, not your product",
      },
      {
        type: "ul",
        items: [
          "Multiple campaigns are targeting the same audience and competing against each other in the auction",
          "Your \"best sellers\" campaign hasn't been touched since it was created, while the rest of the catalog gets no dedicated budget",
          "Conversion tracking counts the same purchase across more than one channel or campaign",
          "You're running broad match or Advantage+ with no negative keyword or exclusion strategy underneath it",
          "Nobody on your team could explain, in one sentence, why the account is structured the way it is",
        ],
      },
      {
        type: "h4",
        text: "Attribution is lying to you before optimization ever gets a chance",
      },
      {
        type: "p",
        text: "We see brands make big budget decisions off last-click, in-platform reporting that gives every channel credit for the same sale. Meta says it drove the purchase. Google says it drove the purchase. Your email platform says it drove the purchase. All three can't be true, and if you're allocating spend based on whichever platform shouts the loudest, you're optimizing against a fiction, not your actual business.",
      },
      {
        type: "p",
        text: "Fixing this isn't glamorous. It means setting up real attribution — even something as simple as consistent UTM discipline and a source-of-truth dashboard outside the ad platforms — before you touch a single bid.",
      },
      {
        type: "h4",
        text: "What a rebuild actually looks like",
      },
      {
        type: "p",
        text: "When we take over an account, we don't start by turning knobs. We start by mapping what's actually running, what it's actually costing, and what it's actually returning — outside of platform-reported numbers. From there, the rebuild usually follows the same order:",
      },
      {
        type: "ul",
        items: [
          "Consolidate overlapping campaigns into a structure with one clear job per campaign",
          "Rebuild the product feed so it matches current inventory, pricing, and margins",
          "Put tracking on a single source of truth before making any spend decisions",
          "Rebuild audiences around actual customer data, not platform defaults",
          "Set a testing cadence for creative and offers instead of \"set and forget\"",
        ],
      },
      {
        type: "p",
        text: "The goal isn't to spend more. Most of the time, we spend the same budget or less in the first month of a rebuild. The difference is that every dollar is now working inside a structure that was actually designed for where the brand is today, not where it was on launch day.",
      },
      {
        type: "p",
        text: "If you've been increasing spend and watching your CPA drift the wrong direction, the account structure is the first place to look — not the creative, not the offer, not the market. Fix the foundation and the rest of your optimization actually has something to build on.",
      },
    ],
  },
  {
    slug: "real-cost-of-ignoring-cro",
    title: "The Real Cost of Ignoring Conversion Rate Optimization",
    date: "2026-06-18",
    coverImage: "/images/webflow/699ed6f18aceafc086e38c2a_blog-2.webp",
    excerpt:
      "You don't have a traffic problem. You have a conversion problem wearing a traffic problem's clothes — and it's quietly taxing every dollar you spend on ads.",
    body: [
      {
        type: "p",
        text: "Ask most brand owners what's wrong with performance and they'll say the same thing: \"we need more traffic.\" That's rarely the actual gap. If your site converts at 1.2% when it should convert at 2.5%, more traffic doesn't fix anything — it just buys you more visitors who leave without buying, at a media cost that keeps climbing every quarter as auctions get more competitive.",
      },
      {
        type: "h4",
        text: "CRO isn't a redesign. It's a tax cut on every dollar you already spend",
      },
      {
        type: "p",
        text: "Here's the math brands skip. If you're spending $50,000 a month on ads and your site converts at 1.5%, doubling your conversion rate to 3% doesn't just double your sales — it effectively halves your customer acquisition cost, because the traffic cost didn't change. That's not a marketing win, that's a structural one. It compounds every month, on every channel, forever. Nothing else in performance marketing gives you that kind of leverage for the same spend.",
      },
      {
        type: "h4",
        text: "Where conversion actually leaks (and it's rarely the homepage)",
      },
      {
        type: "p",
        text: "Brand owners obsess over the homepage because it's the page they look at most. The homepage is rarely where the money is lost. The real leaks happen further down the funnel, where fewer people are paying attention:",
      },
      {
        type: "ul",
        items: [
          "Product pages that answer marketing questions instead of the buyer's actual objections (shipping time, fit, return policy, \"will this actually work for me\")",
          "Checkout flows with unnecessary form fields, forced account creation, or shipping costs that appear for the first time at the last step",
          "Mobile experiences that were designed on a desktop monitor and never actually tested on a phone",
          "Page speed on category and product pages, which quietly kills mobile conversion before a visitor even sees your offer",
          "Zero post-purchase upsell or bundle logic, leaving average order value flat while acquisition costs rise",
        ],
      },
      {
        type: "h4",
        text: "Why brands avoid CRO even when they know the leak exists",
      },
      {
        type: "p",
        text: "It's slower and less visible than a new ad creative. Launching a campaign feels like progress — there's a new ad, a new hook, a number to watch climb. Fixing checkout friction feels invisible by comparison, even though it's usually worth more. CRO also requires admitting the site itself might be the bottleneck, which is a harder conversation than \"the algorithm just needs more time.\"",
      },
      {
        type: "p",
        text: "The brands that actually grow past a plateau treat CRO as a permanent function, not a one-time project. That means:",
      },
      {
        type: "ul",
        items: [
          "Running structured A/B tests on high-traffic pages instead of guessing based on opinion",
          "Watching session recordings and heatmaps monthly, not once a year",
          "Treating checkout as a product to be maintained, not a page to be built once and forgotten",
          "Tying every CRO change back to a specific hypothesis and a specific metric, so you actually learn something either way",
        ],
      },
      {
        type: "h4",
        text: "The takeaway",
      },
      {
        type: "p",
        text: "Every dollar you spend on traffic passes through your conversion rate before it becomes revenue. If that rate is weak, you are paying an invisible tax on every campaign, every channel, and every optimization you make upstream. Fix the leak before you add more water — it's the only lever in performance marketing that makes your existing budget worth more without spending a cent more to get it.",
      },
    ],
  },
  {
    slug: "when-your-brand-is-ready-to-scale-past-diy",
    title: "How to Know When Your Brand Is Ready to Scale Past DIY Marketing",
    date: "2026-07-01",
    coverImage: "/images/webflow/699ed6f18aceafc086e38c41_Sleek-Container-Set.webp",
    excerpt:
      "DIY got you to your first real revenue. It's also the thing quietly capping how much further you can go. Here's how to tell the difference between a rough patch and a ceiling.",
    body: [
      {
        type: "p",
        text: "Every brand we work with started DIY. Someone learned Meta Ads from YouTube, ran their own email flows, taught themselves just enough Google Ads to get a campaign live. That's not a knock — it's how almost every real e-commerce brand gets off the ground, and it works, for a while. The problem is knowing when \"for a while\" is over.",
      },
      {
        type: "h4",
        text: "DIY has a ceiling, and it's lower than most founders think",
      },
      {
        type: "p",
        text: "DIY marketing is built around one person's bandwidth and one person's knowledge. That works when you're running one or two campaigns and checking in once a week. It stops working the moment your business needs more channels running at once than one person can actually watch — which, for most brands, happens well before they expect it.",
      },
      {
        type: "p",
        text: "The ceiling isn't about effort. Founders running DIY marketing are often working harder on it than a full agency team would. The ceiling is about specialization — one person cannot simultaneously be an expert media buyer, a conversion designer, an email strategist, and a creative director, while also running the actual business.",
      },
      {
        type: "h4",
        text: "Six signs you've hit the ceiling",
      },
      {
        type: "ul",
        items: [
          "Revenue has plateaued for two or more consecutive quarters despite consistent or increasing ad spend",
          "You're spending more hours per week managing marketing than you are running the rest of the business",
          "You know something is underperforming but don't have the time or specialized knowledge to diagnose why",
          "Every new campaign feels like it's competing with the last one for the same customers, instead of finding new ones",
          "You've stopped testing anything new because there's no time to build, launch, and analyze a real test",
          "Your gut says something is off, but your dashboards only tell you what happened — never why",
        ],
      },
      {
        type: "h4",
        text: "Scaling past DIY doesn't mean losing control",
      },
      {
        type: "p",
        text: "The biggest hesitation we hear from founders isn't budget — it's fear of losing visibility into their own marketing. That fear is usually justified, because a lot of agencies are built to obscure what they're doing, not clarify it. That's backwards. The right partner should make your marketing more transparent than it was when you were running it yourself, not less — clear reporting, plain-language explanations of what changed and why, and no vanity metrics dressed up as wins.",
      },
      {
        type: "h4",
        text: "What actually changes when you bring in a real team",
      },
      {
        type: "ul",
        items: [
          "Specialists run each channel instead of one generalist splitting attention six ways",
          "Testing becomes structured and continuous instead of whatever there's time for this week",
          "Creative, media buying, and conversion strategy are coordinated instead of built in isolation",
          "Reporting shifts from platform vanity metrics to actual net profit and customer economics",
          "You get your time back to run the business you built the marketing to support in the first place",
        ],
      },
      {
        type: "h4",
        text: "The takeaway",
      },
      {
        type: "p",
        text: "DIY marketing isn't a phase you should be embarrassed about — it's usually proof the brand and the offer actually work. But if you're seeing a plateau, spending more hours than the business can afford, and making decisions on gut feel because there's no time for real analysis, that's not a rough patch. That's a ceiling. Brands that scale past it treat bringing in specialized help as a growth decision, not an admission of failure — because it is one.",
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getOtherPosts(slug, limit = 2) {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
