export interface Service {
  id: string;
  title: string;
  titleAr?: string;
  shortDesc: string;
  shortDescAr?: string;
  fullDesc: string;
  icon: string;
  category: string;
  features: string[];
  color: string;
  basePrice: number;
  /** Pakistan price in PKR per month. */
  pricePkr: number;
  /** International price in USD per month. */
  priceUsd: number;
  results?: string;
}

export const SERVICES: Service[] = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    titleAr: "إعلانات ميتا",
    shortDesc: "Hyper-targeted Facebook & Instagram campaigns that turn ad spend into real leads and sales.",
    shortDescAr: "حملات إعلانية دقيقة الاستهداف على فيسبوك وإنستغرام تحوّل الإنفاق إلى عملاء ومبيعات حقيقية.",
    fullDesc: "Ratech Global runs Meta Ads (Facebook and Instagram) for businesses in the UAE, Saudi Arabia, Qatar and Pakistan: audience research, ad creative, campaign setup, A/B testing, retargeting and regular ROAS optimization, with clear reporting on cost per lead and sales.",
    icon: "🎯",
    category: "Paid Ads",
    features: ["Audience Research","Ad Creative Design","Campaign Setup","A/B Testing","Retargeting","Pixel Setup","Catalog Ads","Weekly Reports"],
    color: "from-red-500 to-rose-700",
    basePrice: 399,
    pricePkr: 15000,
    priceUsd: 54,
    results: "ROI-focused campaigns",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    titleAr: "إعلانات جوجل",
    shortDesc: "Capture high-intent buyers at the exact moment they search.",
    shortDescAr: "اجذب المشترين المهتمين في اللحظة المناسبة عند البحث.",
    fullDesc: "Ratech Global manages Google Search, Display, Shopping and YouTube campaigns for businesses in the UAE, Saudi Arabia, Qatar and Pakistan, with precision targeting, smart bidding and conversion tracking so you can see the cost of every lead. We do not promise guaranteed results, but we report clearly on what your budget produces.",
    icon: "📊",
    category: "Paid Ads",
    features: ["Search Campaigns","Display Ads","Shopping Ads","YouTube Ads","Smart Bidding","Conversion Tracking","Remarketing","Performance Max"],
    color: "from-orange-400 to-red-500",
    basePrice: 399,
    pricePkr: 25000,
    priceUsd: 91,
    results: "High-intent conversions",
  },
  {
    id: "seo",
    title: "SEO Services",
    titleAr: "خدمات تحسين محركات البحث",
    shortDesc: "Dominate search rankings and drive organic traffic that converts.",
    shortDescAr: "تصدّر نتائج البحث واجذب زيارات عضوية تتحول إلى عملاء.",
    fullDesc: "Ratech Global provides expert SEO services for businesses in the UAE, Saudi Arabia, Qatar and Pakistan — combining technical SEO, keyword research, authoritative content and precision link-building to rank your business on Google and drive organic traffic that converts. As dedicated SEO experts, we focus on local and national rankings that bring real, long-term leads.",
    icon: "🔍",
    category: "Marketing",
    features: ["Keyword Research","On-Page SEO","Technical Audit","Link Building","Local SEO","Schema Markup","Core Web Vitals","Monthly Reports"],
    color: "from-red-400 to-red-700",
    basePrice: 299,
    pricePkr: 35000,
    priceUsd: 127,
    results: "Sustainable organic growth",
  },
    {
    id: "ai-search-optimization",
    title: "AI Search Optimization",
    titleAr: "تحسين الظهور في بحث الذكاء الاصطناعي",
    shortDesc: "Get your brand understood and cited by ChatGPT, Gemini, Perplexity and Google AI answers.",
    shortDescAr: "اجعل علامتك التجارية مفهومة ومذكورة في إجابات ChatGPT وGemini وPerplexity وبحث جوجل.",
    fullDesc: "We help businesses in the UAE, Saudi Arabia, Qatar and beyond prepare for AI search. We combine answer engine optimization (AEO) and generative engine optimization (GEO) with solid technical SEO: clear brand and service pages, structured data, question-and-answer content, an llms.txt file, and bilingual English and Arabic content, so AI assistants and search engines can understand your business and mention it when customers ask. We do not promise guaranteed rankings or citations; we focus on the work that makes your business easier to find, understand and trust.",
    icon: "🤖",
    category: "Marketing",
    features: ["AEO & GEO Strategy","Schema Markup","FAQ & Q&A Content","llms.txt Setup","Entity & Brand Clarity","Technical SEO Audit","Arabic & English Content","Monthly Reports"],
    color: "from-violet-400 to-purple-700",
    basePrice: 299,
    pricePkr: 35000,
    priceUsd: 127,
    results: "Visibility in AI answers",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    titleAr: "إدارة وسائل التواصل الاجتماعي",
    shortDesc: "Build an engaged community and amplify your brand voice.",
    shortDescAr: "ابنِ مجتمعًا متفاعلاً وعزّز صوت علامتك التجارية.",
        fullDesc: "Ratech Global manages social media for businesses in the UAE, Saudi Arabia, Qatar and Pakistan. We plan content, design posts, schedule them and handle community management across Facebook, Instagram, TikTok and LinkedIn.",
    icon: "📱",
    category: "Marketing",
    features: ["Content Calendar","Custom Graphics","Reels & Stories","Community Management","Growth Strategy","Analytics","Hashtag Research","Competitor Analysis"],
    color: "from-pink-400 to-rose-600",
    basePrice: 299,
    pricePkr: 30000,
    priceUsd: 109,
    results: "Higher engagement & reach",
  },
  {
    id: "youtube-automation",
    title: "YouTube Automation",
    titleAr: "أتمتة قناة يوتيوب",
    shortDesc: "Build a passive income YouTube channel on complete autopilot.",
    shortDescAr: "أنشئ قناة منتجة تحقق دخلاً سلبيًا وتنمو تلقائيًا.",
        fullDesc: "Ratech Global helps businesses and creators set up and run YouTube channels, from niche research and scriptwriting to video editing, thumbnails, SEO optimization and monetization planning. We serve clients in Pakistan, the UAE, Saudi Arabia and Qatar.",
    icon: "▶️",
    category: "Technology",
    features: ["Channel Setup","Niche Research","Script Writing","Video Editing","Thumbnail Design","SEO Optimization","Monetization","Analytics"],
    color: "from-red-500 to-rose-600",
    basePrice: 499,
    pricePkr: 40000,
    priceUsd: 145,
    results: "Built to grow your channel",
  },
  {
    id: "web-development",
    title: "Web Development",
    titleAr: "تطوير المواقع",
    shortDesc: "Blazing-fast, conversion-optimized websites built to impress.",
    shortDescAr: "مواقع سريعة وحديثة محسّنة لتحويل الزوار إلى عملاء.",
    fullDesc: "Ratech Global builds fast, mobile-first websites with Next.js and React for businesses in the UAE, Saudi Arabia, Qatar and Pakistan, from corporate sites to web applications, with SEO and clear contact paths built in from the start.",
    icon: "💻",
    category: "Technology",
    features: ["Custom Design","Next.js / React","Mobile-First","SEO Optimized","CMS Integration","Performance Optimization","Contact Forms","Analytics Setup"],
    color: "from-cyan-400 to-blue-600",
    basePrice: 999,
    pricePkr: 80000,
    priceUsd: 291,
    results: "100% mobile-optimized",
  },
  {
    id: "shopify",
    title: "Shopify Store",
    titleAr: "متجر شوبيفاي",
    shortDesc: "Premium eCommerce stores engineered to sell 24/7.",
    shortDescAr: "متجر إلكتروني احترافي جاهز للبيع مع تكامل كامل.",
    fullDesc: "Ratech Global builds and optimizes Shopify stores for businesses in the UAE, Saudi Arabia, Qatar and Pakistan: product setup, theme customization, payment gateway and app integration, and conversion optimization.",
    icon: "🛍️",
    category: "Technology",
    features: ["Custom Theme","Product Setup","Payment Gateway","Inventory System","App Integration","Funnel Optimization","Mobile Optimization","Analytics"],
    color: "from-green-400 to-emerald-700",
    basePrice: 799,
    pricePkr: 25000,
    priceUsd: 91,
    results: "Built to grow online sales",
  },
  {
    id: "branding",
    title: "Branding & Design",
    titleAr: "الهوية والتصميم",
    shortDesc: "Craft a brand identity that commands attention and builds trust.",
    shortDescAr: "هوية بصرية متكاملة تُميز علامتك التجارية وتلهم الثقة.",
    fullDesc: "Ratech Global builds brand identities for businesses in the UAE, Saudi Arabia, Qatar and Pakistan, including logo design, colors, typography, brand guidelines and a consistent look across your website and social media.",
    icon: "✨",
    category: "Design",
    features: ["Logo Design","Brand Strategy","Color System","Typography","Brand Guidelines","Stationery Design","Social Kit","Brand Assets"],
    color: "from-amber-400 to-orange-500",
    basePrice: 499,
    pricePkr: 50000,
    priceUsd: 182,
    results: "Professional brand identity",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    titleAr: "أتمتة الذكاء الاصطناعي",
    shortDesc: "Automate business workflows and scale with intelligent AI.",
    shortDescAr: "روبوتات وأنظمة ذكية توفر الوقت وتزيد التحويلات.",
    fullDesc: "Ratech Global helps businesses in the UAE, Saudi Arabia, Qatar and Pakistan save time with AI automation, such as chatbots, automated replies, lead follow-up and workflow tools that handle repetitive tasks.",
    icon: "🤖",
    category: "Technology",
    features: ["Chatbot Development","Workflow Automation","CRM Integration","Lead Nurturing","Email Sequences","WhatsApp Bot","Data Pipelines","AI Tools"],
    color: "from-violet-500 to-purple-700",
    basePrice: 1499,
    pricePkr: 80000,
    priceUsd: 291,
    results: "Less repetitive manual work",
  },
  {
    id: "content-writing",
    title: "Content Writing",
    titleAr: "كتابة المحتوى",
    shortDesc: "SEO-optimized words that rank, resonate, and drive action.",
    shortDescAr: "محتوى يجذب الجمهور ويعزز ترتيبك في محركات البحث.",
    fullDesc: "Ratech Global writes website copy, blog posts, product descriptions and social media content in English for businesses in the UAE, Saudi Arabia, Qatar and Pakistan, written to be clear for readers and useful for search engines and AI assistants.",
    icon: "✍️",
    category: "Content",
    features: ["SEO Blog Writing","Website Copy","Email Sequences","Ad Copywriting","Social Media Copy","Content Strategy","Product Descriptions","Press Releases"],
    color: "from-teal-400 to-cyan-600",
    basePrice: 199,
    pricePkr: 30000,
    priceUsd: 109,
    results: "Content built to rank",
  },
  {
    id: "tiktok-ads",
    title: "TikTok Ads",
    titleAr: "إعلانات تيك توك",
    shortDesc: "Viral-ready TikTok campaigns that explode brand awareness.",
    shortDescAr: "محتوى فيروسي يصل إلى ملايين المشاهدات بميزانية ذكية.",
        fullDesc: "Ratech Global plans and runs TikTok ad campaigns for businesses in the UAE, Saudi Arabia, Qatar and Pakistan, including creative ideas, targeting, budget setup and regular performance reports.",
    icon: "🎬",
    category: "Paid Ads",
    features: ["Video Ad Creation","In-Feed Ads","Brand Takeover","TikTok Pixel","Audience Targeting","Creator Marketplace","Hashtag Challenges","Analytics"],
    color: "from-pink-500 to-fuchsia-700",
    basePrice: 349,
    pricePkr: 15000,
    priceUsd: 54,
    results: "Built for viral reach",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    titleAr: "التصميم الجرافيكي",
    shortDesc: "Visually stunning designs that communicate and convert.",
    shortDescAr: "تصاميم احترافية للسوشيال ميديا والمطبوعات تجذب الانتباه.",
    fullDesc: "Ratech Global designs social media posts, banners, flyers, brochures and other marketing graphics for businesses in the UAE, Saudi Arabia, Qatar and Pakistan, in a style that matches your brand.",
    icon: "🎨",
    category: "Design",
    features: ["Social Media Graphics","Marketing Materials","Infographics","Presentation Design","Print Design","Ad Creatives","Digital Assets","Packaging"],
    color: "from-amber-400 to-orange-500",
    basePrice: 199,
    pricePkr: 10000,
    priceUsd: 36,
    results: "Premium quality designs",
  },
];

/**
 * A short, direct "quick answer" paragraph for AEO -- structured so AI
 * Overviews, ChatGPT and featured snippets can lift a clean, quotable
 * summary of the service straight from the page. Auto-generated from
 * existing service data (no separate content to keep in sync).
 */
export function serviceQuickAnswer(svc: Service): string {
  const priceLine = `Plans start from PKR ${svc.pricePkr.toLocaleString()}/month in Pakistan (from $${svc.priceUsd}/month internationally).`;
return `${svc.fullDesc} ${priceLine}`;
}

/**
 * AEO/GEO — generates snippet-ready FAQs per service.
 * -------------------------------------------------------------
 * 2026 answer-engine best practice: question-format headings + concise,
 * definitive 40–60 word answers that AI Overviews / People Also Ask can
 * extract directly. Built from each service's real data so every one of the
 * 12 service pages ships unique, factual Q&A (and FAQPage structured data).
 */
export function serviceFaqs(svc: Service): { q: string; a: string }[] {
    if (svc.id === "ai-search-optimization") {
    return [
      {
        q: "What is AI search optimization (GEO and AEO)?",
        a: "AI search optimization is the work of making your business easy for AI assistants and AI search features, such as ChatGPT, Gemini, Perplexity and Google AI Overviews, to understand and mention. GEO (generative engine optimization) focuses on being cited in AI-written answers, while AEO (answer engine optimization) focuses on giving clear, direct answers to customer questions.",
      },
      {
        q: "How is AI search optimization different from traditional SEO?",
        a: "Traditional SEO helps your pages rank in a list of links. AI search optimization builds on that base and adds clear business information, structured data, question-and-answer content and an llms.txt file, so AI tools can summarize and cite your business accurately. Strong technical SEO is still the foundation, so we do both together.",
      },
      {
        q: "Can you guarantee my business will appear in ChatGPT or Google AI answers?",
        a: "No. No honest agency can guarantee citations or rankings, because AI systems and search engines make their own decisions and change often. We improve the signals you control: clear content, structured data, consistent business information and technical health, and we report what changes over time.",
      },
      {
        q: "Do you work with businesses in the UAE, Saudi Arabia and Qatar?",
        a: "Yes. Ratech Global is based in Sahiwal, Pakistan and works remotely with clients in the UAE, Saudi Arabia, Qatar, the UK, the USA and Pakistan. We can prepare content in English and Arabic, and we stay in touch by WhatsApp, email and video calls across time zones.",
      },
      {
        q: "What do you do in the first month?",
        a: "We start with an audit of your website, your competitors and how AI tools currently describe your brand. Then we fix technical issues, set up structured data and an llms.txt file, improve your key service pages and FAQ content, and set up tracking so progress can be measured.",
      },
      {
        q: "How long does it take to see results?",
        a: "Technical and content improvements can be picked up within weeks, but visibility in AI answers usually builds over three to six months and depends on your industry and competition. We set realistic expectations in the free consultation and share regular progress updates.",
      },
    ];
  }
  const title = svc.title.replace(/ Services?$/i, "");
  const resultLine = svc.results ? ` Clients typically see results like ${svc.results.toLowerCase()}.` : "";
  return [
    {
      q: `How much does ${title} cost?`,
      a: `${title} at Ratech Global starts from PKR ${svc.pricePkr.toLocaleString()}/month for businesses in Pakistan (around $${svc.priceUsd}/month for clients in the UAE, Saudi Arabia, Qatar and elsewhere), plus any ad budget. The exact price depends on your goals and scope — book a free consultation for a tailored quote.`,
    },
    {
      q: `What does your ${title} service include?`,
      a: `Our ${title} service covers ${svc.features.slice(0, 5).join(", ")} and more. Everything is managed by specialists and reported regularly, so you always know exactly what's being done and what results it's driving.${resultLine}`,
    },
    {
      q: `How long until I see results from ${title}?`,
      a: svc.category === "Paid Ads"
        ? `Paid campaigns like ${title} usually show measurable results within 2–4 weeks as we test and optimise. We share a clear timeline and regular performance reports from the start.`
        : `${title} builds over time — typically meaningful results in 1–3 months, with SEO and organic work compounding over 3–6 months. We set clear expectations before we begin.`,
    },
    {
      q: `Do you offer ${title} for international clients?`,
      a: `Yes. Ratech Global is based in Sahiwal, Pakistan and delivers ${title} to clients across Pakistan, the UAE, Qatar, Saudi Arabia, the UK and the USA. Everything is managed remotely with fast communication across time zones.`,
    },
    {
      q: `Why choose Ratech Global for ${title}?`,
      a: `We combine international-level expertise with ROI-focused execution — every ${title} campaign is data-backed and optimised for real business growth, not vanity metrics. We've served businesses and report on the KPIs that actually matter to you.`,
    },
  ];
}
