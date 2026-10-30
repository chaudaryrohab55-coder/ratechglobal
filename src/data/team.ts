/**
 * Team roster.
 *
 * This is the STATIC fallback shown on the public /team page before Supabase
 * is connected (and as SEO-friendly server-rendered content). Once the admin
 * dashboard is live, the public page reads live rows from Supabase and this
 * list is used only to seed the database the first time.
 *
 * ORDER:
 * 1. Muhammad Haseeb – Co-Founder & Director of Operations
 * 2. Mirza Shahzad Saleem – leads 
 * 4. Malaika Farooq
 * 5. Arooba Shafique
 * 6. Nafia Aziz
 * 7–12. Placeholders
 */
export type TeamLevel = "Junior" | "Mid" | "Senior" | "Lead";

export interface TeamMember {
  slug: string;
  full_name: string;
  title: string;        // job role
  level: TeamLevel;
  bio: string;
  photo_url: string;    // /team/... or remote
  email?: string;
  linkedin?: string;
  skills: string[];
  stars: number;        // 0–5 (admin-set)
  is_public: boolean;
  // ── Optional rich-profile fields (safe to omit; profile page adapts) ──────
  photo_position?: string;   // object-position for framing, e.g. "top" | "center"
  tagline?: string;          // one-line headline under the name
  location?: string;         // e.g. "Faisalabad, Pakistan"
  experience?: string;       // e.g. "5+ years"
  stats?: { label: string; value: string }[];  // achievement counters
  expertise?: { title: string; detail: string }[]; // what they do, expanded
  projects?: string[];       // notable work / clients
  quote?: string;            // a personal line, shown as a pull-quote
  languages?: string[];      // spoken languages
}

export const TEAM: TeamMember[] = [
  /* ──────────────────────── 1. FOUNDER ──────────────────────── */
  {
    slug: "rohab-abdullah",
    full_name: "Rohab Abdullah",
    title: "Founder & CEO",
    level: "Lead",
    bio: "Rohab Abdullah is a digital entrepreneur and the CEO of Ragoods.store, specialising in digital marketing, lead generation, brand growth and eCommerce. He helps businesses attract high-quality leads, increase sales, and build a strong online presence through data-driven marketing strategies. His work spans Meta Ads, social media and performance marketing, Shopify and WordPress development, sales-funnel optimisation and brand strategy — all pointed at one outcome: helping businesses grow faster, generate consistent revenue, and build brands that stand out in a crowded digital marketplace.",
    photo_url: "/team/rohab-abdullah.png",
    photo_position: "top",
    tagline: "Building growth systems that turn ad spend into real revenue.",
    location: "Sahiwal, Pakistan",
    experience: "5+ years (Agency since 2025)",
    email: "ratechglobal@gmail.com",
    skills: ["Growth Strategy", "Paid Ads", "Team Leadership", "Client Success", "Meta Ads", "Google Ads"],
    stats: [
      { label: "Businesses Served", value: "40+" },
      { label: "Countries", value: "6" },
      { label: "Client Revenue Driven", value: "$50K+" },
    ],
    expertise: [
      { title: "Growth Strategy", detail: "Maps the full funnel — from first ad impression to closed sale — and builds the system to move people through it profitably." },
      { title: "Paid Advertising", detail: "Plans and scales Meta & Google Ads campaigns focused on ROAS, not reach, across multiple international markets." },
      { title: "Team Leadership", detail: "Leads a multidisciplinary team of developers, marketers and designers to deliver work that clients actually come back for." },
    ],
    projects: ["40+ businesses across Pakistan, UAE, Qatar, KSA, UK & USA", "eCommerce & Shopify scaling campaigns", "Lead-generation systems for service businesses"],
    quote: "Marketing isn't about being everywhere — it's about the right message reaching the right buyer at the right moment.",
    languages: ["English", "Urdu"],
    stars: 5,
    is_public: true,
  },
  /* ──────────────────────── 2. CO-FOUNDER ──────────────────────── */
  {
   slug: "muhammad-haseeb",
    full_name: "Muhammad Haseeb",
    title: "Co-Founder",
    level: "Lead",
    bio: "Muhammad Haseeb has been working in digital marketing since 2018 — first building hands-on experience solo, then co-founding Ratech Global in 2025 as a full-service agency with a growing, dedicated team. He leads growth strategy, client success, and the team behind campaigns that have delivered measurable results for businesses across Pakistan, the UAE, Qatar, Saudi Arabia, the UK and the USA. His approach is simple: understand the client's real business goal first, then engineer the marketing and technology to hit it — no vanity metrics, just outcomes that show up in revenue.",
    photo_url: "/team/muhammad-haseeb.png",
    photo_position: "top",
    tagline: "Building growth systems that turn ad spend into real revenue.",
    location: "Sahiwal, Pakistan",
    experience: "8+ years (Agency since 2025)",
    email: "ratechglobal@gmail.com",
    skills: ["Growth Strategy", "Paid Ads", "Team Leadership", "Client Success", "Meta Ads", "Google Ads"],
    stats: [
      { label: "Businesses Served", value: "40+" },
      { label: "Countries", value: "6" },
      { label: "Client Revenue Driven", value: "$500K+" },
    ],
    expertise: [
      { title: "Growth Strategy", detail: "Maps the full funnel — from first ad impression to closed sale — and builds the system to move people through it profitably." },
      { title: "Paid Advertising", detail: "Plans and scales Meta & Google Ads campaigns focused on ROAS, not reach, across multiple international markets." },
      { title: "Team Leadership", detail: "Leads a multidisciplinary team of developers, marketers and designers to deliver work that clients actually come back for." },
    ],
    projects: ["40+ businesses across Pakistan, UAE, Qatar, KSA, UK & USA", "eCommerce & Shopify scaling campaigns", "Lead-generation systems for service businesses"],
    quote: "Marketing isn't about being everywhere — it's about the right message reaching the right buyer at the right moment.",
    languages: ["English", "Urdu"],
    stars: 5,
    is_public: true,
    /* ──────────────────────── 4. Mirza shahzad saleem ──────────────────────── */
  },
  slug: "mirza-shahzad-saleem",
    full_name: "Mirza Shahzad Saleem",
    title: "Lead Generation Specialist",
    level: "Senior",
    bio: "Over two decades of deep industry insight, combining strong technical foundations with modern digital strategy. At Ratech Global he focuses on lead generation — using Meta Ads and performance marketing to attract high-quality leads for clients, and optimising the workflows and digital storefronts (Shopify) that turn those leads into revenue. His strategic vision helps businesses enhance their brand visibility and build a steady, scalable pipeline of customers.",
    photo_url: "/team/mirza-shahzad-saleem.webp",
    photo_position: "top",
    tagline: "Two decades of experience — turning ad spend into a steady flow of quality leads.",
    location: "Pakistan",
    experience: "20+ years",
    email: "haadinglobal@gmail.com",
    skills: ["Lead Generation", "Meta Ads", "Performance Marketing", "Funnel Optimisation", "Shopify", "Business Strategy"],
    stats: [
      { label: "Experience", value: "20+" },
      { label: "Focus", value: "Lead Generation" },
      { label: "Specialty", value: "Meta Ads" },
    ],
    expertise: [
      { title: "Lead Generation", detail: "Builds campaigns and funnels that bring in high-quality leads for clients, focused on buyers who are ready to talk, not just clicks." },
      { title: "Performance Marketing", detail: "Manages Meta Ads and paid media with a focus on ROI-driven campaigns and sustainable revenue growth." },
      { title: "Funnel Optimisation", detail: "Streamlines the path from first enquiry to closed sale, including storefront and landing page optimisation, so more leads turn into customers." },
    ],
    projects: ["Lead-generation campaigns for service businesses", "Meta Ads performance marketing", "Shopify storefront optimisation"],
    quote: "A good lead isn't a click — it's a real buyer who wants to hear from you.",
    languages: ["English", "Urdu"],
    stars: 5,
    is_public: true,
  },
  /* ──────────────────────── 4. MALAIKA ──────────────────────── */
  {
    slug: "malaika-farooq",
    full_name: "Malaika Farooq",
    title: "Relationship Manager",
    level: "Senior",
    bio: "Malaika Farooq is the relationship engine of Ratech Global. She owns client onboarding and long-term account health — managing follow-ups, sourcing strategic leads, coordinating client meetings, mentoring the team, and keeping the agency's day-to-day operations running smoothly. Clients stay with Ratech Global because Malaika makes sure they feel heard, updated, and looked after at every step.",
    photo_url: "/team/malaika-farooq.jpeg",
    photo_position: "top",
    tagline: "The reason clients feel looked after — and stay for the long run.",
    location: "Sahiwal, Pakistan",
    experience: "Client Relations & Operations",
    email: "malaikafarooq381@gmail.com",
    skills: ["Client Management", "Lead Generation", "Operations", "Team Coordination", "Onboarding", "Account Handling"],
    stats: [
      { label: "Client Retention Focus", value: "100%" },
      { label: "Accounts Managed", value: "Multi" },
      { label: "Response Time", value: "Fast" },
    ],
    expertise: [
      { title: "Client Onboarding", detail: "Turns a new signup into a confident, well-informed client with a smooth, structured onboarding experience." },
      { title: "Relationship Management", detail: "Keeps every account warm — proactive follow-ups, clear updates, and a real relationship rather than transactional contact." },
      { title: "Operations & Coordination", detail: "Coordinates meetings, keeps projects moving, and mentors the team so nothing slips through the cracks." },
    ],
    projects: ["End-to-end client onboarding & account handling", "Strategic lead sourcing", "Team coordination & agency operations"],
    quote: "A happy client isn't the one who paid — it's the one who felt taken care of the whole way through.",
    languages: ["English", "Urdu"],
    stars: 5,
    is_public: true,
  },
  /* ──────────────────────── 5. AROOBA ──────────────────────── */
  {
    slug: "arooba-shafique",
    full_name: "Arooba Shafique",
    title: "Full-Stack Developer",
    level: "Mid",
    bio: "Arooba Shafique is a full-stack developer with a portfolio of real, shipped products — from a complete ISP management system to professional websites deployed for international businesses. She's focused on clean, reliable delivery: code that works, scales, and doesn't come back to haunt the client three months later. Whether it's the front-end a customer sees or the database logic behind it, Arooba builds the whole stack.",
    photo_url: "/team/arooba-shafique.jpeg",
    photo_position: "top",
    tagline: "Ships clean, reliable products across the entire stack.",
    location: "Sahiwal, Pakistan",
    experience: "Full-Stack Development",
    email: "aroobas2004@gmail.com",
    linkedin: "https://linkedin.com/in/arooba-shafique",
    skills: ["Full-Stack Development", "Web Apps", "Databases", "Deployment", "React", "APIs"],
    stats: [
      { label: "Systems Built", value: "Multiple" },
      { label: "Focus", value: "Full-Stack" },
      { label: "Delivery", value: "Reliable" },
    ],
    expertise: [
      { title: "Full-Stack Web Apps", detail: "Builds complete applications end to end — user-facing interfaces plus the server logic and databases that power them." },
      { title: "Systems Engineering", detail: "Delivered a full ISP management system — real, complex software handling real business operations." },
      { title: "Deployment & Delivery", detail: "Takes projects from local code to live, deployed products for international clients." },
    ],
    projects: ["Complete ISP management system", "Professional websites for international businesses", "Database-driven web applications"],
    quote: "Good software is invisible — it just works, so the business can get on with business.",
    languages: ["English", "Urdu"],
    stars: 5,
    is_public: true,
  },
  /* ──────────────────────── 6. NAFIA ──────────────────────── */
  {
    slug: "nafia-aziz",
    full_name: "Nafia Aziz",
    title: "Full-Stack Developer",
    level: "Mid",
    bio: "Nafia Aziz is a full-stack developer who has built and delivered professional websites for international clients — including Royal Painters Dubai — alongside ISP management systems and business catalogues. She pairs technical skill with a strong focus on quality and client satisfaction: the goal isn't just to finish a build, it's to hand over something the client is genuinely proud to put their name on.",
    photo_url: "/team/nafia-aziz.jpeg",
    photo_position: "top",
    tagline: "Delivers polished websites international clients are proud of.",
    location: "Sahiwal, Pakistan",
    experience: "Full-Stack Development",
    email: "nafiaaziz.500@gmail.com",
    linkedin: "https://linkedin.com/in/nafia-aziz059",
    skills: ["Full-Stack Development", "Client Websites", "eCommerce", "UI Development", "React", "Web Design"],
    stats: [
      { label: "Intl. Clients", value: "Delivered" },
      { label: "Focus", value: "Quality" },
      { label: "Stack", value: "Full" },
    ],
    expertise: [
      { title: "Client Websites", detail: "Builds professional, production-ready websites for real international businesses from the ground up." },
      { title: "eCommerce & Catalogues", detail: "Develops online stores and business catalogues that are clean, usable, and built to convert." },
      { title: "UI Development", detail: "Turns designs into responsive, polished interfaces that look right on every screen." },
    ],
    projects: ["Royal Painters Dubai — website delivery", "ISP management systems", "Business catalogues & eCommerce sites"],
    quote: "Every project carries my name too — so it ships only when it's something I'd be proud of.",
    languages: ["English", "Urdu"],
    stars: 5,
    is_public: true,
  },
  // ── Placeholder members (edit/remove from the admin dashboard) ───────────
  ph("ahmed-raza", "Ahmed Raza", "SEO Specialist", "Mid", ["SEO", "Technical SEO", "Content"]),
  ph("hina-malik", "Hina Malik", "Social Media Manager", "Mid", ["Social Media", "Community", "Content Calendar"]),
  ph("bilal-khan", "Bilal Khan", "Google Ads Specialist", "Senior", ["Google Ads", "PPC", "Analytics"]),
  ph("sana-tariq", "Sana Tariq", "Graphic Designer", "Junior", ["Graphic Design", "Branding", "Social Creatives"]),
  ph("usman-ali", "Usman Ali", "Meta Ads Specialist", "Mid", ["Meta Ads", "Creative Testing", "Retargeting"]),
  ph("ayesha-noor", "Ayesha Noor", "Content Writer", "Junior", ["Copywriting", "SEO Writing", "Email"]),
];

function ph(slug: string, name: string, title: string, level: TeamLevel, skills: string[]): TeamMember {
  return {
    slug,
    full_name: name,
    title,
    level,
    bio: `${name} is part of the Ratech Global team, contributing to client work across ${title.toLowerCase()} projects. This is placeholder content — update it from the admin dashboard.`,
    photo_url: "/logo-small.png",
    skills,
    stars: 4,
    is_public: true,
  };
}

export function getMember(slug: string) {
  return TEAM.find((m) => m.slug === slug);
}
