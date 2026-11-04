// Single source of truth for all case studies shown across services and on individual detail pages.
// ProjectTemplate.js renders these with consistent layout and styles.

export const projects = [
  // =========================================================================
  // 1. AMAZON PPC (Live / Real Projects)
  // =========================================================================
  {
    "slug": "amazon-account-turnaround",
    "route": "/casestudy/amazon-ppc-management-services/amazon-account-turnaround",
    "metaTitle": "Amazon Account Turnaround | Amazon PPC Case Study",
    "title": "Amazon Account Turnaround",
    "client": "Amazon Brand (Confidential)",
    "category": "Amazon PPC",
    "services": [
      "Listing SEO",
      "Main Image Optimization",
      "A/B Testing",
      "Amazon PPC Management"
    ],
    "subtitle": "From 54% to 34% ACOS: turning a declining Amazon account around in five months.",
    "year": "26",
    "cardImage": "/images/uploads/amazon-turnaround-card.jpg",
    "heroImage": "/images/uploads/amazon-turnaround-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/amazon-turnaround-1.jpg", "full": true },
      { "src": "/images/uploads/amazon-turnaround-2.jpg", "full": true },
      { "src": "/images/uploads/amazon-turnaround-3.jpg", "full": false },
      { "src": "/images/uploads/amazon-turnaround-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "Project Overview",
      "heading": "Every ad dollar was buying less.",
      "paragraphs": [
        "This established Amazon brand came to us in a clear and accelerating decline. In the three months before onboarding, total sales fell 31% while ad spend rose to its highest point of the quarter.",
        "The client’s margins allowed an ACOS ceiling of 50%, but the real business KPI was TACOS, with a 20% target, which meant the account had to grow organically, not just through paid traffic. Rather than cutting bids and starving the account, we fixed the conversion problem at the listing level."
      ],
      "bullets": []
    },
    "approach": {
      "label": "The Challenges",
      "heading": "Rising costs, falling sales.",
      "paragraphs": [
        "Efficiency had collapsed, and organic sales weren’t strong enough to carry the account. The ACOS ceiling had already been breached, and TACOS was moving further away from the target every month."
      ],
      "bullets": [
        "Total sales down 31% in three months, while ad spend reached its quarterly high",
        "ACOS climbed from 32.1% to 53.9%, breaching the client’s 50% ceiling",
        "TACOS nearly doubled, from 14.6% to 27.0%, against a 20% target",
        "Organic sales too weak to offset rising ad costs"
      ]
    },
    "design": {
      "label": "Wins",
      "heading": "The Listing-First Turnaround",
      "bullets": [
        "ACOS dropped every month for five straight months, from 53.9% to 34.0%, a 20-point cut and 16 points under the client’s ceiling",
        "TACOS fell below the 20% KPI in the fourth month and reached 19.0% in the fifth",
        "ROAS improved 59%, from 1.85 to 2.94",
        "Total sales up 27%, peaking at 38% above the pre-onboarding month, with organic sales up 25%",
        "10.5% less ad spend than before onboarding, while ad sales grew 28.7%",
        "$186K in ad spend avoided compared with pre-onboarding efficiency, and $139K kept under the client’s 50% ACOS allowance"
      ],
      "closing": "The goal was simple: fix the listing, and the ads get cheaper."
    },
    "change": {
      "label": "Strategies",
      "before": [
        "Listings ranking for the wrong queries",
        "Main images losing the click in search",
        "Paid and organic traffic working separately"
      ],
      "after": [
        "Titles, bullets, and backend terms rebuilt around high-converting keywords",
        "Redesigned images, A/B tested in Manage Your Experiments",
        "Advertised keywords matched to ranked keywords, so each reinforces the other"
      ]
    },
    "otherWorks": [
      "amazon-scaling-account",
      "amazon-off-season-account"
    ]
  },

  {
    "slug": "amazon-scaling-account",
    "route": "/casestudy/amazon-ppc-management-services/amazon-scaling-account",
    "metaTitle": "Amazon Scaling Account | Amazon PPC Case Study",
    "title": "Amazon Scaling Account",
    "client": "Amazon Brand (Confidential)",
    "category": "Amazon PPC",
    "services": [
      "Listing SEO",
      "Main Image Testing",
      "Full Image Stack Design",
      "Amazon PPC Management"
    ],
    "subtitle": "Scale with profitability: 32% more ad sales in two months, inside every margin target.",
    "year": "26",
    "cardImage": "/images/uploads/amazon-scaling-card.jpg",
    "heroImage": "/images/uploads/amazon-scaling-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/amazon-scaling-1.jpg", "full": true },
      { "src": "/images/uploads/amazon-scaling-2.jpg", "full": true },
      { "src": "/images/uploads/amazon-scaling-3.jpg", "full": false },
      { "src": "/images/uploads/amazon-scaling-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "Project Overview",
      "heading": "Growth without giving up margin.",
      "paragraphs": [
        "This $400K-per-month Amazon business had stopped growing, with daily revenue flat at about $13,200. The brief was clear: scale with profitability.",
        "The client wanted more revenue, but every dollar of growth had to stay inside an ACOS target of 45% and a TACOS target of 15%, with a goal of $18,000 in daily sales. More budget alone would have pushed ACOS further out of range, so we fixed the listings first and let the ad spend work harder."
      ],
      "bullets": []
    },
    "approach": {
      "label": "The Challenges",
      "heading": "Paying more to sell less.",
      "paragraphs": [
        "Advertising was getting more expensive without producing more sales. Conversion, not budget, was the real limit on scaling."
      ],
      "bullets": [
        "Ad spend rose 23% in a single month while ad sales fell slightly",
        "ACOS jumped from 42.1% to 52.4%, well above the 45% ceiling",
        "ROAS dropped to 1.91",
        "Total sales and daily revenue had flatlined"
      ]
    },
    "design": {
      "label": "Wins",
      "heading": "The Profitable Scale Build",
      "bullets": [
        "ACOS came down two months in a row, landing at 43.6%, under the 45% target",
        "TACOS stayed under the 15% ceiling every month, finishing at 13.2%",
        "Ad sales grew 31.7% on just 9.5% more ad spend, and ROAS improved 20%",
        "Total sales up 14%, orders up 18.5%, and units up 18%, reaching the highest month in the period",
        "Organic sales grew 7.7% to their highest month, still driving about 70% of total revenue",
        "$19.7K in ad spend saved compared with the onboarding month’s efficiency, with ad cost per order down 7.5%"
      ],
      "closing": "The goal was simple: scale profitably by starting with the listing, not the budget."
    },
    "change": {
      "label": "STRATEGIES",
      "before": [
        "More budget buying fewer sales",
        "Listings not built to convert paid clicks",
        "Weak images on top-revenue products"
      ],
      "after": [
        "Ad sales up 31.7% on 9.5% more spend",
        "SEO-rebuilt titles, bullets, and backend terms matched to advertised keywords",
        "Tested main images and a full image stack rebuild on best-selling ASINs"
      ]
    },
    "otherWorks": [
      "amazon-account-turnaround",
      "amazon-off-season-account"
    ]
  },

  {
    "slug": "amazon-off-season-account",
    "route": "/casestudy/amazon-ppc-management-services/amazon-off-season-account",
    "metaTitle": "Amazon Off-Season Account | Amazon PPC Case Study",
    "title": "Amazon Off-Season Account",
    "client": "Amazon Brand (Confidential)",
    "category": "Amazon PPC",
    "services": [
      "Listing SEO",
      "Main Image Redesign",
      "Secondary Image Revamp",
      "Amazon PPC Management"
    ],
    "subtitle": "Same budget, better returns: cutting ACOS 27% in the off-season.",
    "year": "26",
    "cardImage": "/images/uploads/amazon-offseason-card.jpg",
    "heroImage": "/images/uploads/amazon-offseason-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/amazon-offseason-1.jpg", "full": true },
      { "src": "/images/uploads/amazon-offseason-2.jpg", "full": true },
      { "src": "/images/uploads/amazon-offseason-3.jpg", "full": false },
      { "src": "/images/uploads/amazon-offseason-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "Project Overview",
      "heading": "No extra budget. No easy season.",
      "paragraphs": [
        "This Amazon brand sells a product that peaks in winter, and we took over the account at the start of its off-season. Sales were slipping and ACOS was rising.",
        "The client set one firm condition: no increase in ad spend. With the budget locked at about $1,200 a month, every improvement had to come from efficiency, so we focused on making the listing convert every click the existing budget bought."
      ],
      "bullets": []
    },
    "approach": {
      "label": "The Challenges",
      "heading": "Slowing demand on a fixed budget.",
      "paragraphs": [
        "Seasonal demand was dropping, and the account couldn’t spend its way out of it. Any gains had to come from the listing itself."
      ],
      "bullets": [
        "Total sales falling as the off-season began",
        "ACOS rising from 16.7% to 19.4%",
        "Ad spend locked at about $1,200 a month, with no room to add traffic",
        "Organic sales dipping during the product’s slowest months"
      ]
    },
    "design": {
      "label": "Wins",
      "heading": "The Off-Season Efficiency Play",
      "bullets": [
        "ACOS dropped two months in a row to 14.2%, a 27% reduction and lower than before onboarding",
        "ROAS rose 37%, from 5.17 to 7.06, so each ad dollar returned $1.89 more in sales",
        "Ad sales grew 12.5% while ad spend fell 18%, staying under budget every month",
        "Ad cost per order down 24%, and 27.7% of ad spend saved compared with onboarding-month efficiency",
        "TACOS stayed under the 7% target every month, finishing at 5.2%",
        "Organic sales rebounded 16.6% in the second month, making up 63% of revenue, with orders up 22% month over month"
      ],
      "closing": "The goal was simple: make every click count when the budget can’t grow."
    },
    "change": {
      "label": "STRATEGIES",
      "before": [
        "A fixed budget buying less each month",
        "Listing keywords not matched to ads",
        "Images not answering buyer questions"
      ],
      "after": [
        "Ad sales up 12.5% on 18% less spend",
        "Titles, bullets, and backend terms rebuilt around high-intent keywords",
        "A redesigned main image and secondary images covering features, uses, and benefits"
      ]
    },
    "otherWorks": [
      "amazon-account-turnaround",
      "amazon-scaling-account"
    ]
  },

  {
    "slug": "amazon-competitive-niche-account",
    "route": "/casestudy/amazon-ppc-management-services/amazon-competitive-niche-account",
    "metaTitle": "Amazon Competitive Niche Account | Amazon PPC Case Study",
    "title": "Amazon Competitive Niche Account",
    "client": "Amazon Brand (Confidential)",
    "category": "Amazon PPC",
    "services": [
      "Listing SEO",
      "Main Image Redesign",
      "Amazon PPC Management"
    ],
    "subtitle": "From ready to quit Amazon to target ACOS in a hyper-competitive niche.",
    "year": "26",
    "cardImage": "/images/uploads/amazon-competitive-card.jpg",
    "heroImage": "/images/uploads/amazon-competitive-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/amazon-competitive-1.jpg", "full": true },
      { "src": "/images/uploads/amazon-competitive-2.jpg", "full": true },
      { "src": "/images/uploads/amazon-competitive-3.jpg", "full": false },
      { "src": "/images/uploads/amazon-competitive-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "Project Overview",
      "heading": "Out-convert, don’t outspend.",
      "paragraphs": [
        "This client came to us ready to leave Amazon. The product competes in one of the platform’s most crowded niches, where large sellers drive up click costs and dominate the top of search.",
        "With two-thirds of every ad-driven sale going back to Amazon in ad costs, advertising was costing more than the account could sustain. The goal was to make Amazon worth staying on, and in a niche this competitive, that meant winning on conversion rather than budget."
      ],
      "bullets": []
    },
    "approach": {
      "label": "The Challenges",
      "heading": "Two-thirds of every sale was lost to ad costs.",
      "paragraphs": [
        "Large competitors made it impossible to win by spending more. Every click was expensive, and the listing wasn’t converting enough of them to pay back."
      ],
      "bullets": [
        "ACOS at 66.8%, well above the client’s 50% target",
        "TACOS at 37.2%, against a goal of under 25%",
        "ROAS of just 1.50",
        "A search page crowded with near-identical competitors, all bidding on the same terms"
      ]
    },
    "design": {
      "label": "Wins",
      "heading": "The Competitive Niche Turnaround",
      "bullets": [
        "After a rollout month to launch the new listing and images, ACOS dropped to 49.1%, under the 50% target",
        "ROAS up 36%, from 1.50 to 2.04",
        "Ad sales grew 28.1% on 5.7% less ad spend",
        "Cost per click down 9.7% and ad cost per order down 11.2%, in a niche where costs usually only rise",
        "Total sales up 13.7%, with TACOS falling from 37.2% to 30.9%",
        "35.9% of ad spend saved in the second month compared with onboarding-month efficiency"
      ],
      "closing": "The goal was simple: you can’t outspend the big sellers, so out-convert them."
    },
    "change": {
      "label": "STRATEGIES",
      "before": [
        "Ad costs eating two-thirds of every sale",
        "A listing competing on generic terms",
        "A main image lost among near-identical competitors"
      ],
      "after": [
        "ACOS under the 50% target",
        "Titles, bullets, and backend terms rebuilt around keywords it can win",
        "A redesigned main image built to stand out and win the click"
      ]
    },
    "otherWorks": [
      "amazon-account-turnaround",
      "amazon-scaling-account"
    ]
  },
  {
    "slug": "investor-backed-amazon-brand",
    "route": "/casestudy/amazon-ppc-management-services/investor-backed-amazon-brand",
    "metaTitle": "Investor-Backed Amazon Brand | Amazon PPC Case Study",
    "title": "Investor-Backed Amazon Brand",
    "client": "Amazon Brand (Confidential)",
    "category": "Amazon PPC",
    "services": [
      "Listing SEO",
      "Main & Secondary Image Revamp",
      "Pricing Tests",
      "Amazon PPC Management"
    ],
    "subtitle": "Delivering the sales growth investors needed: +62% average monthly revenue and a $121K peak month.",
    "year": "26",
    "cardImage": "/images/uploads/investor-amazon-card.jpg",
    "heroImage": "/images/uploads/investor-amazon-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/investor-amazon-1.jpg", "full": true },
      { "src": "/images/uploads/investor-amazon-2.jpg", "full": true },
      { "src": "/images/uploads/investor-amazon-3.jpg", "full": false },
      { "src": "/images/uploads/investor-amazon-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "Project Overview",
      "heading": "Growth that funding depends on.",
      "paragraphs": [
        "This investor-backed brand needed one thing to secure its next round of funding: sales growth. When we onboarded the account, it was buying its sales at a loss, with ad spend higher than ad sales and only 32% of revenue coming from organic search.",
        "The product’s strong margins allowed a 70% ACOS ceiling and a 30% TACOS target, but growth still had to stand up to investor scrutiny. We worked on the three things that decide whether a shopper buys: how the listing ranks, how it looks, and what it costs."
      ],
      "bullets": []
    },
    "approach": {
      "label": "The Challenges",
      "heading": "Every ad dollar returned less than a dollar.",
      "paragraphs": [
        "The account wasn’t just inefficient, it was losing money on every paid sale. Spending more would only have deepened the loss."
      ],
      "bullets": [
        "ACOS at 101%, with ad spend exceeding ad sales",
        "TACOS at 68.5%, more than double the 30% target",
        "Only 32% of revenue coming from organic sales",
        "A higher-priced product where buyers need confidence before they commit"
      ]
    },
    "design": {
      "label": "Wins",
      "heading": "The Investor-Ready Growth Build",
      "bullets": [
        "Average monthly sales up 62%, with every managed month above the onboarding baseline and a peak month up 163% to $121K",
        "ACOS cut from 101% to 53%, under the 70% target every month after onboarding",
        "TACOS down from 68.5% to 21.1%, under the 30% target for the last three months",
        "Average monthly organic sales up 173%, with organic share rising from 32% to 60.5% of revenue",
        "Ad spend down 66% while total sales stayed higher, with ad cost per order cut 71%",
        "$62.4K in ad spend saved compared with onboarding-month efficiency, plus pricing tests that showed how price drives volume and revenue"
      ],
      "closing": "The goal was simple: turn paid sales at a loss into growth built on organic demand."
    },
    "change": {
      "label": "STRATEGIES",
      "before": [
        "Buying sales at a loss",
        "A mostly paid account",
        "No data on how price affects sales"
      ],
      "after": [
        "Every ad dollar returning $1.81 in ad sales",
        "A majority-organic account built to keep growing",
        "Tested price points showing the volume vs. revenue trade-off"
      ]
    },
    "otherWorks": [
      "amazon-account-turnaround",
      "amazon-scaling-account"
    ]
  },
  {
    "slug": "amazon-inventory-constrained-account",
    "route": "/casestudy/amazon-ppc-management-services/amazon-inventory-constrained-account",
    "metaTitle": "Amazon Inventory-Constrained Account | Amazon PPC Case Study",
    "title": "Amazon Inventory-Constrained Account",
    "client": "Amazon Brand (Confidential)",
    "category": "Amazon PPC",
    "services": [
      "Account Structure Overhaul",
      "Listing SEO & Consolidation",
      "Image Revamp",
      "A+ Premium Content",
      "Brand Store",
      "Amazon PPC Management"
    ],
    "subtitle": "Growing through inventory constraints: +48% sales and a 5.65 ROAS.",
    "year": "26",
    "cardImage": "/images/uploads/amazon-inventory-card.jpg",
    "heroImage": "/images/uploads/amazon-inventory-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/amazon-inventory-1.jpg", "full": true },
      { "src": "/images/uploads/amazon-inventory-2.jpg", "full": true },
      { "src": "/images/uploads/amazon-inventory-3.jpg", "full": false },
      { "src": "/images/uploads/amazon-inventory-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "Project Overview",
      "heading": "Making every available unit count.",
      "paragraphs": [
        "When we onboarded this Amazon account, advertising was barely working. Ads contributed just 9% of monthly sales, and each ad dollar returned only $1.65. On top of that, the client faced major inventory problems throughout the engagement, which limited how hard campaigns could push and suppressed organic rank whenever products went out of stock.",
        "With stock unreliable, we rebuilt the account from the foundation up so every available unit had the best chance to sell at an efficient cost."
      ],
      "bullets": []
    },
    "approach": {
      "label": "The Challenges",
      "heading": "Weak ads and unreliable stock.",
      "paragraphs": [
        "The campaigns weren’t converting, and inventory gaps made steady growth even harder. Out-of-stock products lost rank, and the account structure couldn’t react quickly enough to shift budget."
      ],
      "bullets": [
        "ACOS at 60.6%, well above the 40% target",
        "Ads driving only 9% of total sales",
        "Ongoing stock problems limiting campaign reach and suppressing organic rank",
        "Fragmented listings splitting reviews, sales history, and ranking strength across duplicate pages"
      ]
    },
    "design": {
      "label": "Wins",
      "heading": "The Full Account Rebuild",
      "bullets": [
        "ACOS cut from 60.6% to 17.7%, well under the 40% target, and ROAS more than tripled to 5.65",
        "Total sales up 47.7% and orders up 39.1%, delivering the account’s best month despite inventory constraints",
        "Ad sales grew 389% on 43% more ad spend, with ads growing from 9% to 30% of revenue",
        "TACOS held under the 15% target every month, finishing at 5.4%",
        "Organic sales reached their highest month, up 13.1% from onboarding",
        "46.7% less ad spend compared with onboarding-month efficiency, and a new A+ Premium and Brand Store experience in place"
      ],
      "closing": "The goal was simple: when stock is limited, make every sale count."
    },
    "change": {
      "label": "STRATEGIES",
      "before": [
        "A structure that couldn’t react to stock changes",
        "Duplicate listings splitting ranking strength",
        "Basic listing content"
      ],
      "after": [
        "Campaigns controlled by product and intent, shifting spend to in-stock products",
        "Consolidated listings with rebuilt SEO",
        "Revamped images, A+ Premium content, and a new Brand Store"
      ]
    },
    "otherWorks": [
      "amazon-account-turnaround",
      "amazon-scaling-account"
    ]
  },
  {
    "slug": "amazon-self-managed-account",
    "route": "/casestudy/amazon-ppc-management-services/amazon-self-managed-account",
    "metaTitle": "Amazon Self-Managed Account | Amazon PPC Case Study",
    "title": "Amazon Self-Managed Account",
    "client": "Amazon Brand (Confidential)",
    "category": "Amazon PPC",
    "services": [
      "Campaign Structure Rebuild",
      "Listing SEO",
      "Main Image Testing",
      "Amazon PPC Management"
    ],
    "subtitle": "He said 70% ACOS was the floor. We hit 37% in two months.",
    "year": "26",
    "cardImage": "/images/uploads/amazon-selfmanaged-card.jpg",
    "heroImage": "/images/uploads/amazon-selfmanaged-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/amazon-selfmanaged-1.jpg", "full": true },
      { "src": "/images/uploads/amazon-selfmanaged-2.jpg", "full": true },
      { "src": "/images/uploads/amazon-selfmanaged-3.jpg", "full": false },
      { "src": "/images/uploads/amazon-selfmanaged-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "Project Overview",
      "heading": "Two years of “tried everything.”",
      "paragraphs": [
        "This seller had managed his own Amazon account for two years and came to us with a challenge. His view was firm: his ACOS could not go below 70%, because he had already tried everything.",
        "More than half of all revenue was going back into advertising, and only 28% of sales were organic. While he had spent two years adjusting bids and budgets, we looked at what sits underneath them: how the campaigns were built, and whether the listing converted the clicks it paid for."
      ],
      "bullets": []
    },
    "approach": {
      "label": "The Challenges",
      "heading": "Paying more than half of revenue for ads.",
      "paragraphs": [
        "The account was locked into high costs, and bid changes alone weren’t moving it. Midway through the engagement, a listing deactivation and a stock shortage added a second challenge outside advertising."
      ],
      "bullets": [
        "ACOS at 72.8%, far above the 50% target",
        "TACOS at 52.2%, against a 25% target",
        "Only 28% of sales coming from organic search",
        "The main listing deactivated over a certification issue, while remaining listings ran on very low inventory"
      ]
    },
    "design": {
      "label": "Wins",
      "heading": "The 70% Floor Breakthrough",
      "bullets": [
        "ACOS cut from 72.8% to 37.2% in two months, nearly half the seller’s supposed floor, and ROAS up 96%",
        "Total sales up 115% and orders up 109% in the first managed month, the best month of the year",
        "TACOS cut by more than half, to 25.8%, within one point of target, with organic sales up 106%",
        "Ad cost per order down 45%",
        "ACOS stayed under 70% every month, even with the best-selling listing offline",
        "Once the listing was reinstated, sales rebounded 136% in a single month, and $21.1K in ad spend was saved across six months"
      ],
      "closing": "The goal was simple: fix what sits underneath the bids."
    },
    "change": {
      "label": "STRATEGIES",
      "before": [
        "Two years of bid and budget tweaks",
        "Budget flowing to terms that didn’t convert",
        "A listing that didn’t convert paid clicks"
      ],
      "after": [
        "A rebuilt structure controlled by product and intent",
        "Proven traffic separated from research and discovery traffic",
        "Rebuilt SEO and tested main images built to win the click"
      ]
    },
    "otherWorks": [
      "amazon-account-turnaround",
      "amazon-scaling-account"
    ]
  },
  {
    "slug": "amazon-2800-product-catalog",
    "route": "/casestudy/amazon-ppc-management-services/amazon-2800-product-catalog",
    "metaTitle": "Amazon 2,800-Product Catalog | Amazon PPC Case Study",
    "title": "Amazon 2,800-Product Catalog",
    "client": "Amazon Brand (Confidential)",
    "category": "Amazon PPC",
    "services": [
      "Campaign Restructure",
      "Catalog-Wide Campaign Build",
      "Bid & Budget Management",
      "Amazon PPC Management"
    ],
    "subtitle": "Waking up a 2,800-product catalog: +154% ad sales at a stable ACOS.",
    "year": "26",
    "cardImage": "/images/uploads/amazon-catalog-card.jpg",
    "heroImage": "/images/uploads/amazon-catalog-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/amazon-catalog-1.jpg", "full": true },
      { "src": "/images/uploads/amazon-catalog-2.jpg", "full": true },
      { "src": "/images/uploads/amazon-catalog-3.jpg", "full": false },
      { "src": "/images/uploads/amazon-catalog-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "Project Overview",
      "heading": "One campaign, 2,800 products.",
      "paragraphs": [
        "This Amazon brand sells a large catalog of about 2,800 low-priced products, with average sales per order item under $10, and was doing more than $339,000 a month. Its advertising ran on a single catch-all campaign that was profitable but couldn’t scale.",
        "The brief had two parts: grow sales, and do it without letting ACOS rise, since margins this thin leave little room. We replaced the catch-all setup with a structured account built to reach the wider catalog."
      ],
      "bullets": []
    },
    "approach": {
      "label": "The Challenges",
      "heading": "Profitable, but stuck.",
      "paragraphs": [
        "The single campaign kept ACOS low, but most of the catalog never got a chance to sell. With 2,800 products competing for one budget, spend piled onto a small group of winners."
      ],
      "bullets": [
        "One catch-all campaign managing 2,800 products",
        "Spend concentrated on a handful of ASINs while most of the catalog sat idle",
        "Ad sales flat at about $19,400 a month, just 5.7% of revenue",
        "Thin margins that left no room for ACOS to rise as the account scaled"
      ]
    },
    "design": {
      "label": "Wins",
      "heading": "The Catalog Activation Build",
      "bullets": [
        "Ad sales up 154% at peak and still 80% higher by the fourth month",
        "$77.7K in additional ad sales over four months compared with the onboarding run rate",
        "ACOS held stable at 14.1% blended (vs. 13.9% before), reaching a low of 12.0%",
        "TACOS under the 2% target every month",
        "Clicks up 135% as new campaigns reached products the old setup never touched",
        "ROAS up 16% to 8.36, with ad sales per click up 12.5%"
      ],
      "closing": "The goal was simple: grow the catalog without growing the cost of each sale."
    },
    "change": {
      "label": "STRATEGIES",
      "before": [
        "One catch-all campaign",
        "Spend stuck on a few winners",
        "Most of the catalog invisible"
      ],
      "after": [
        "A structured account with separate products, keywords, and budgets",
        "Dedicated budgets and bid control for proven products",
        "New campaigns giving visibility to the wider catalog"
      ]
    },
    "otherWorks": [
      "amazon-account-turnaround",
      "amazon-scaling-account"
    ]
  },
  // =========================================================================
  // 2. META ADS (Test Data)
  // =========================================================================
  {
    "slug": "us-medical-spa-meta-ads",
    "route": "/casestudy/meta-instagram-ads-services/us-medical-spa-meta-ads",
    "metaTitle": "U.S. Medical Spa | Meta Ads & Creative Testing Case Study",
    "title": "Using Creative Testing to Find the Ad That Drove Most of the Leads",
    "client": "U.S. Medical Spa (Confidential)",
    "category": "Meta Ads",
    "services": [
      "Lead Generation",
      "Creative Testing",
      "Campaign Optimization"
    ],
    "subtitle": "Finding the ad that actually converts. Reallocating Meta Ads budget toward proven high-performing creatives for a U.S. medical spa.",
    "year": "26",
    "cardImage": "/images/uploads/metaads/us-medical-spa-feature-image.jpg",
    // "heroImage": "/images/uploads/us-medical-spa-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/metaads/us-medical-spa-feature-image.jpg", "full": true },

      { "src": "/images/uploads/metaads/us-medical-spa-image-2.jpg", "full": true },
      { "src": "/images/uploads/metaads/us-medical-spa-image-3.jpg", "full": false },
      { "src": "/images/uploads/metaads/us-medical-spa-image-4.jpg", "full": false },
    ],
    "challenge": {
      "label": "The Challenges",
      "heading": "Not every ad pulls its weight.",
      "paragraphs": [
        "This U.S. medical spa used Meta lead ads to bring new clients through the door. Several ad creatives ran side by side, each with a different message and visual.",
        "With four creatives running, performance varied widely, and one ad barely delivered at all. Without testing, the budget would have been spread evenly across ads that weren’t equally effective."
      ],
      "bullets": [
        "Cost per lead varied by up to 30% between ad creatives",
        "One creative produced just 1% of total leads generated",
        "Lead quality and cost depended heavily on the specific message and visual used",
        "Budget needed to flow toward proven performers rather than being split evenly"
      ],
      "closing": "The objective was to keep lead costs low while finding which creative clients actually responded to, so the budget could work harder."
    },
    "approach": {
      "label": "The Approach",
      "heading": "Systematic ad testing and budget reallocation.",
      "paragraphs": [
        "We executed a creative testing playbook running side-by-side variations of copy and imagery to isolate top-performing assets.",
        "Once clear conversion data emerged, spend was channeled directly into the winning messaging angles."
      ],
      "bullets": [
        "Ran four distinct creative variations side by side to measure performance",
        "Tracked cost per lead and conversion efficiency per message angle",
        "Cut waste on underperforming creatives that drove low volume or high CPL",
        "Focused ad spend behind the top two performing creatives"
      ],
      "closing": "The goal was simple: test fast, then let the winners do the work."
    },
    "design": {
      "label": "Key Wins",
      "heading": "Measurable lead cost reductions and volume concentration.",
      "bullets": [
        "$6.54 average cost per lead across all ad creatives",
        "Identified one top ad creative that delivered 61% of total leads",
        "Winning ad operated at a 23% lower cost per lead than the weakest ad",
        "Top two creatives combined to produce 88% of total client leads"
      ],
      "closing": "Built a highly efficient lead acquisition engine driven by validated audience data."
    },
    "change": {
      "label": "Performance Shift",
      "before": [
        "Untested creatives competing for budget",
        "Lead costs varying by ad",
        "Guesswork on what clients respond to"
      ],
      "after": [
        "A clear winning creative identified",
        "Lowest cost per lead on the top performer",
        "Data showing which message converts"
      ]
    },
    "otherWorks": [
      "lanes-car-products",
      "advanage-the-wonder-cleaner"
    ]
  },

  {
    "slug": "us-lead-generation-meta-ads",
    "route": "/casestudy/meta-instagram-ads-services/us-lead-generation-meta-ads",
    "metaTitle": "U.S. Lead Generation Account | Meta Ads Case Study",
    "title": "Cutting Cost Per Lead by 80% While Generating More Leads on a Fraction of the Budget",
    "client": "U.S. Service Business (Confidential)",
    "category": "Meta Ads",
    "services": [
      "Campaign Restructure",
      "Audience Targeting",
      "Lead Generation"
    ],
    "subtitle": "Paying too much for every lead. Rebuilding a Meta Ads campaign to drastically lower CPL while boosting total lead volume.",
    "year": "26",
    "cardImage": "/images/uploads/metaads/us-lead-generation-feature-image.jpg",
    // "heroImage": "/images/uploads/us-lead-gen-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/metaads/us-lead-generation-feature-image.jpg", "full": true },
      { "src": "/images/uploads/metaads/us-lead-generation-image-2.jpg", "full": true },
      { "src": "/images/uploads/metaads/us-lead-generation-image-3.jpg", "full": false },
      { "src": "/images/uploads/metaads/us-lead-generation-4.jpg", "full": false }
    ],
    "challenge": {
      "label": "The Challenges",
      "heading": "High spend, low efficiency.",
      "paragraphs": [
        "This U.S. business relied on Meta Ads to generate leads, but its existing campaign was costing $22.94 for every lead. Spend was high and returns weren’t keeping up.",
        "The original campaign was spending heavily but showing ads repeatedly to the same audience. Each lead cost far more than it should have, and adding budget would only have made it worse."
      ],
      "bullets": [
        "Cost per lead sat at an unsustainable $22.94",
        "Cost per 1,000 impressions (CPM) was high at ~$44",
        "Excessive ad frequency with users seeing the same ad almost 4 times on average",
        "Low acquisition efficiency with fewer than 8 leads generated per 1,000 people reached"
      ],
      "closing": "The goal was to rebuild the campaign so every dollar reached more of the right people and turned into more leads, not just impressions."
    },
    "approach": {
      "label": "The Approach",
      "heading": "Audience re-targeting and structural campaign rebuild.",
      "paragraphs": [
        "We restructured the account architecture to eliminate audience fatigue, manage impression frequency, and capture high-intent localized prospects.",
        "By controlling frequency and refining targeting parameters, spend was reallocated toward net-new prospective customers."
      ],
      "bullets": [
        "Rebuilt the campaign structure around an optimized daily spend budget",
        "Refined geo-targeting parameters to reach a focused local audience efficiently",
        "Controlled ad frequency cap to reduce repetition and expand audience reach",
        "Optimized lead forms and ad delivery for conversion intent"
      ],
      "closing": "The goal was simple: spend less, reach the right people, get more leads."
    },
    "design": {
      "label": "Key Wins",
      "heading": "Significant cost reductions and volume expansion.",
      "bullets": [
        "Cost per lead dropped 80%, from $22.94 down to $4.48",
        "12% more leads generated on 78% less total ad spend",
        "Cost per 1,000 impressions (CPM) cut by 52%",
        "Leads per 1,000 people reached increased by 56%",
        "Ad frequency reduced from ~4 to 2.5, driving efficient reach among fresh audiences"
      ],
      "closing": "Transformed a high-cost acquisition setup into a highly profitable local lead engine."
    },
    "change": {
      "label": "Key Metrics",
      "before": [
        "A broad campaign spending heavily",
        "Ads repeating to the same audience",
        "$22.94 per lead"
      ],
      "after": [
        "A rebuilt campaign on a tight daily budget",
        "A focused local audience reached efficiently",
        "$4.48 per lead"
      ]
    },
    "otherWorks": [
      "us-medical-spa-meta-ads",
      "lanes-car-products"
    ]
  },

  // {
  //   slug: "meta-test-project-3",
  //   route: "/casestudy/meta-instagram-ads-services/meta-test-project-3",
  //   metaTitle: "[Test Data] Meta Ads Retargeting & LTV | Case Study",
  //   title: "[Test Data] Meta Retention & Retargeting Engine",
  //   client: "[Test Data] Premium Footwear Brand",
  //   category: "Meta Ads",
  //   services: ["[Test Data] Audience Segmentation", "[Test Data] Dynamic Ads", "[Test Data] VIP Retention"],
  //   subtitle: "[Test Data] Increasing customer lifetime value through hyper-segmented Meta audience journeys.",
  //   year: "25",
  //   cardImage: "/images/uploads/Project-3-1-scaled.jpg",
  //   heroImage: "/images/uploads/Project-3-1-scaled.jpg",
  //   gallery: [
  //     { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
  //     { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
  //     { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
  //     { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
  //   ],
  //   challenge: {
  //     label: "[Test Data] The Challenge",
  //     paragraphs: ["[Test Data] High acquisition volume was not translating into repeatable repeat purchases."],
  //     bullets: [
  //       "[Test Data] 85% one-and-done buyers",
  //       "[Test Data] Retargeting creative identical to prospecting ads",
  //       "[Test Data] Underutilized customer data in Meta pixel",
  //     ],
  //   },
  //   approach: {
  //     label: "[Test Data] The Approach",
  //     paragraphs: ["[Test Data] We engineered multi-stage post-purchase ad funnels delivering timely cross-sell recommendations."],
  //     bullets: [
  //       "[Test Data] Product-specific care guide and accessory ads",
  //       "[Test Data] VIP early access creative drops",
  //       "[Test Data] LTV-optimized lookalike audiences",
  //     ],
  //   },
  //   design: {
  //     label: "[Test Data] Results",
  //     bullets: [
  //       "[Test Data] 45% Increase in 60-day repeat order rate",
  //       "[Test Data] 4.8x ROAS specifically on retargeting sets",
  //       "[Test Data] Substantial expansion of average customer value",
  //     ],
  //   },
  //   change: {
  //     label: "[Test Data] Long-Term Value",
  //     before: ["[Test Data] Isolated acquisition without retention strategy"],
  //     after: ["[Test Data] Fully integrated lifecycle ad journey producing recurring revenue"],
  //   },
  //   otherWorks: ["meta-test-project-1", "meta-test-project-2"],
  // },

  // {
  //   slug: "meta-test-project-4",
  //   route: "/casestudy/meta-instagram-ads-services/meta-test-project-4",
  //   metaTitle: "[Test Data] Meta Ads Global Expansion | Case Study",
  //   title: "[Test Data] Meta International Expansion",
  //   client: "[Test Data] Modern Electronics Studio",
  //   category: "Meta Ads",
  //   services: ["[Test Data] International Meta Ads", "[Test Data] Localization Strategy", "[Test Data] Creative Testing"],
  //   subtitle: "[Test Data] Scaling consumer hardware into European and UK markets with localized Meta creative sets.",
  //   year: "25",
  //   cardImage: "/images/uploads/Project-4-scaled.jpg",
  //   heroImage: "/images/uploads/Project-4-scaled.jpg",
  //   gallery: [
  //     { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
  //     { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
  //     { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
  //     { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
  //   ],
  //   challenge: {
  //     label: "[Test Data] The Challenge",
  //     paragraphs: ["[Test Data] Domestic success in North America was stalling when simply duplicating ads into overseas markets."],
  //     bullets: [
  //       "[Test Data] Lack of language and cultural nuance in visuals",
  //       "[Test Data] Discrepancies in checkout behavior across territories",
  //       "[Test Data] Poor currency and shipping clarity in ads",
  //     ],
  //   },
  //   approach: {
  //     label: "[Test Data] The Approach",
  //     paragraphs: ["[Test Data] Built custom regional ad libraries featuring local creators, local pricing, and market-specific value propositions."],
  //     bullets: [
  //       "[Test Data] Multi-language voiceovers and on-screen text",
  //       "[Test Data] Local payment badge integrations in carousels",
  //       "[Test Data] Segmented country-specific testing clusters",
  //     ],
  //   },
  //   design: {
  //     label: "[Test Data] Results",
  //     bullets: [
  //       "[Test Data] Successfully opened 4 new international revenue streams",
  //       "[Test Data] Account-wide spend grew by 210% at stable efficiency",
  //       "[Test Data] International sales accounted for 38% of total brand revenue",
  //     ],
  //   },
  //   change: {
  //     label: "[Test Data] Market Reach",
  //     before: ["[Test Data] 100% reliant on single domestic market"],
  //     after: ["[Test Data] Diversified global customer acquisition pipeline"],
  //   },
  //   otherWorks: ["meta-test-project-1", "meta-test-project-3"],
  // },

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
    "cardImage": "/images/uploads/googleAdsImages/lanes-car-feature-image.jpg",
    // "heroImage": "/images/uploads/lanes-car-products-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/googleAdsImages/lanes-car-feature-image.jpg", "full": true },
      { "src": "/images/uploads/googleAdsImages/lanes-car-image-2.jpg", "full": true },
      { "src": "/images/uploads/googleAdsImages/lanes-car-image-3.jpg", "full": false },
      { "src": "/images/uploads/googleAdsImages/lanes-car-image-4.jpg", "full": false }
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
    "cardImage": "/images/uploads/googleAdsImages/advange-feature-image.jpg",
    // "heroImage": "/images/uploads/advanage-cleaner-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/googleAdsImages/advange-feature-image.jpg", "full": true },
      { "src": "/images/uploads/googleAdsImages/advanage-image-2.jpg", "full": true },
      { "src": "/images/uploads/googleAdsImages/advange-image-3.jpg", "full": false },
      { "src": "/images/uploads/googleAdsImages/advanage-image-4.jpg", "full": false }
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
    "cardImage": "/images/uploads/googleAdsImages/steallar-feature-image.jpg",
    // "heroImage": "/images/uploads/stellar-chemical-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/googleAdsImages/steallar-feature-image.jpg", "full": true },
      { "src": "/images/uploads/googleAdsImages/steallar-image-2.jpg", "full": true },
      { "src": "/images/uploads/googleAdsImages/stellar-image-3.jpg", "full": false },
      { "src": "/images/uploads/googleAdsImages/stellar-image-4.jpg", "full": false }
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
    "cardImage": "/images/uploads/googleAdsImages/perf-moto-feature-image.jpg",
    // "heroImage": "/images/uploads/googleAdsImages/perf-moto-feature-image.jpg",
    "gallery": [
      { "src": "/images/uploads/googleAdsImages/perf-moto-feature-image.jpg", "full": true },
      { "src": "/images/uploads/googleAdsImages/perf-moto-image-2.jpg", "full": true },
      { "src": "/images/uploads/googleAdsImages/perf-moto-image-3.jpg", "full": false },
      { "src": "/images/uploads/googleAdsImages/perf-moto-image-4.jpg", "full": false }
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
    "cardImage": "/images/uploads/1st .webp",
    // "heroImage": "/images/uploads/advanage-shopify-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/1st .webp", "full": true },
      { "src": "/images/uploads/2nd.webp", "full": true },
      { "src": "/images/uploads/3rd.webp", "full": true },
      { "src": "/images/uploads/4th.webp", "full": true }
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
    "cardImage": "/images/uploads/woofley-1.webp",
    // "heroImage": "/images/uploads/woofleys-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/woofley-1.webp", "full": true },
      { "src": "/images/uploads/woofley-2.webp", "full": true },
      { "src": "/images/uploads/woofley-3.webp", "full": false },
      { "src": "/images/uploads/woofley-4.webp", "full": false },

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
    "cardImage": "/images/uploads/stellar-1.webp",
    // "heroImage": "/images/uploads/stellar-chemical-redesign-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/stellar-1.webp", "full": true },
      { "src": "/images/uploads/stellar-2.webp", "full": true },
      { "src": "/images/uploads/stellar-3.webp", "full": false },
      { "src": "/images/uploads/stellar-4.webp", "full": false }
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
    "cardImage": "/images/uploads/lanes-4th-img.webp",
    // "heroImage": "/images/uploads/lanes-shopify-migration-hero.jpg",
    "gallery": [
      { "src": "/images/uploads/lanes-4th-img.webp", "full": true },
      { "src": "/images/uploads/lanes-2nd-img.webp", "full": true },
      { "src": "/images/uploads/lanes-3rd-img.webp", "full": false },
      { "src": "/images/uploads/lanes-1st-img.webp", "full": false }
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
