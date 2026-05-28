export const SITE = {
  name: "Sai Ranju Welfare Society",
  image: "/image/logo.png",
  headlineLead: "Transforming lives through care.",
  headlineSub: "From healthcare to emergency relief — we stand with every family, every step of the way.",
  tagline: "Seva. Sahayata. Samriddhi.",
  description:
    "A registered welfare society dedicated to uplifting underprivileged communities through healthcare support, skill development, and sustainable livelihood programs across India.",
  establishedYear: "2020",
  registrationNo: "S/RS/2020/12345",
  regType: "Registered under Societies Registration Act, 1860",
  taxExemption: "80G & 12A Certified (Income Tax Department)",
  website: "www.sairanjuwelfare.org",
  vision: "To create a society where every individual has access to basic necessities, education, healthcare, and opportunities to lead a life of dignity.",
  mission: "To empower underprivileged communities through sustainable development programs focused on education, health, livelihood, and social welfare.",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#donate", label: "Donate" },
  { href: "#volunteer", label: "Volunteers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#blog", label: "Blog" },
  { href: "/image/SCAN.pdf", label: "R&R Work", external: true },
  { href: "#contact", label: "Contact" },
] as const;

export const CONTACT = {
  email: "contact@sairanjuwelfare.org",
  helpline: "+91 9792434641",
  helplineHours: "Monday–Saturday 9:00 a.m.–6:00 p.m. IST",
  donationsPhone: "+91 98765 43210",
  donationsHours: "Monday–Friday 10:00 a.m.–5:00 p.m. IST",
  whatsapp: "+919792434641",
  address: "283/6, Harchandpur, Garhi Kanaura, Manak Nagar, Lucknow UP-226011, India",
  mapEmbed: "https://www.google.com/maps?q=283/6+Harchandpur+Garhi+Kanaura+Manak+Nagar+Lucknow+Uttar+Pradesh+226011&output=embed",
  bankDetails: {
    name: "Sai Ranju Welfare Society",
    bank: "Central Bank of India",
    accountNo: "3885821665",
    ifsc: "CBIN0280140",
    branch: "Alambagh Branch, Lucknow - 226005",
  },
} as const;

export const IMPACT_STATS = [
  { number: 10000, suffix: "+", label: "Children Helped", prefix: "" },
  { number: 500, suffix: "+", label: "Active Volunteers", prefix: "" },
  { number: 120, suffix: "+", label: "Villages Supported", prefix: "" },
  { number: 50, suffix: "L+", label: "Donations Raised", prefix: "₹" },
] as const;

export const PROGRAMS = [
  {
    title: "Education Support",
    description: "Providing quality education, school supplies, and scholarships to underprivileged children to build a brighter future.",
    icon: "graduation-cap",
    color: "blue",
  },
  {
    title: "Women Empowerment",
    description: "Skill development, financial literacy, and self-defense training programs to empower women in rural communities.",
    icon: "users",
    color: "green",
  },
  {
    title: "Divyang Welfare",
    description: "Providing care, support, and rehabilitation programs for differently-abled individuals to help them lead dignified lives.",
    icon: "wheelchair",
    color: "blue",
  },
  {
    title: "Food Distribution",
    description: "Regular food drives, nutrition programs, and mid-day meal initiatives for vulnerable families and children.",
    icon: "utensils",
    color: "accent",
  },
  {
    title: "Healthcare Camps",
    description: "Free medical check-ups, eye tests, medicine distribution, and health awareness campaigns in underserved areas.",
    icon: "heart-pulse",
    color: "emerald",
  },
  {
    title: "Child Protection",
    description: "Safe shelter, counseling, legal aid, and rehabilitation programs for children in need of care and protection.",
    icon: "shield",
    color: "blue",
  },
  {
    title: "Rural Development",
    description: "Infrastructure development, sanitation projects, and sustainable livelihood programs for rural communities.",
    icon: "tree-pine",
    color: "green",
  },
] as const;

export const DONATION_AMOUNTS = [
  { label: "₹500", value: "500" },
  { label: "₹1,000", value: "1000" },
  { label: "₹2,000", value: "2000" },
  { label: "₹5,000", value: "5000" },
  { label: "₹10,000", value: "10000" },
  { label: "Custom", value: "custom" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Donor",
    image: "",
    content: "Donating to Sai Ranju Welfare Society has been the most rewarding experience. I can see the direct impact of my contribution in the smiles of children.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Volunteer",
    image: "",
    content: "Volunteering here has changed my perspective on life. The dedication of the team towards community service is truly inspiring.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    role: "Beneficiary",
    image: "",
    content: "When everyone left us, Sai Ranju Welfare Society showed us a new path. They supported my children's education and gave us hope.",
    rating: 5,
  },
  {
    name: "Rahul Kumar",
    role: "Community Partner",
    image: "",
    content: "Working alongside this organization has shown me what true commitment to social welfare looks like. Their transparency is commendable.",
    rating: 5,
  },
  {
    name: "Meena Gupta",
    role: "Beneficiary",
    image: "",
    content: "The skill development program transformed my life. I now run my own tailoring business and employ 3 other women from my village.",
    rating: 5,
  },
] as const;

export const BLOG_POSTS = [
  {
    date: "May 5, 2026",
    category: "Campaign",
    title: "Annual Health Camp Reaches 2,000+ Rural Families",
    excerpt: "Our largest health camp this year provided free check-ups, medicines, and health awareness sessions across 15 villages.",
    image: "",
    author: "Team SRWS",
  },
  {
    date: "April 28, 2026",
    category: "Education",
    title: "New Scholarship Program for Meritorious Students",
    excerpt: "We are proud to announce our new scholarship initiative supporting 100 underprivileged students in higher education.",
    image: "",
    author: "Team SRWS",
  },
  {
    date: "April 15, 2026",
    category: "Event",
    title: "Women's Empowerment Workshop: A Grand Success",
    excerpt: "Over 500 women participated in our 3-day workshop featuring self-defense training, financial literacy, and skill sessions.",
    image: "",
    author: "Team SRWS",
  },
  {
    date: "April 2, 2026",
    category: "Awareness",
    title: "Building a Sustainable Future: Our Green Initiative",
    excerpt: "We planted 5,000 saplings this monsoon season as part of our commitment to environmental sustainability.",
    image: "",
    author: "Team SRWS",
  },
] as const;

export const STORIES = [
  {
    name: "Devanand's Success",
    beneficiary: "Mr. Devanand",
    detail: "Completed vocational training, now runs his own tailoring business and employs 5 people from his community.",
    before: "Unemployed with limited skills",
    after: "Owns a successful tailoring business",
    image: "",
  },
  {
    name: "Mrs. Ranju's Recovery",
    beneficiary: "Mrs. Ranju",
    detail: "Received critical healthcare support during illness; now advocates for community health awareness in her village.",
    before: "Suffered from severe health issues with no access to treatment",
    after: "Fully recovered and leads health awareness campaigns",
    image: "",
  },
] as const;

export const NEWS_ITEMS = [
  {
    date: "April 15, 2026",
    title: "Free health camp — this Saturday",
    body: "General check-ups, eye tests, and medicine distribution at our community center. Open for all — no registration needed.",
  },
  {
    date: "April 22, 2026",
    title: "New batch: Skill development for youth",
    body: "Computer literacy, tailoring, and mobile repair courses starting next month. Limited seats — enroll early.",
  },
  {
    date: "May 1, 2026",
    title: "Annual report 2025-26 now available",
    body: "See how your contributions impacted 2,000+ families across health, skill development, and livelihood programs.",
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/image/image8.png", category: "Education", title: "School Supplies Distribution" },
  { src: "/image/image9.png", category: "Healthcare", title: "Medical Camp" },
  { src: "/image/image10.png", category: "Community", title: "Community Event" },
  { src: "/image/image11.png", category: "Education", title: "Children in Classroom" },
  { src: "/image/image12.png", category: "Volunteer", title: "Volunteer Activity" },
  { src: "/image/image13.png", category: "Healthcare", title: "Health Check-up" },
  { src: "/image/image14.png", category: "Community", title: "Awareness Program" },
  { src: "/image/image1.png", category: "Volunteer", title: "Team Work" },
] as const;

export const PARTNER_LOGOS_DATA = [
  { name: "Ministry of Health", logo: "/image/image5.png" },
  { name: "State Govt. of UP", logo: "/image/image6.png" },
  { name: "NABARD", logo: "/image/image7.png" },
  { name: "CSR Partners", logo: "/image/image8.png" },
  { name: "Rotary Club", logo: "/image/image9.png" },
  { name: "Local Hospitals", logo: "/image/image10.png" },
] as const;

export const HERO_SPOTLIGHT = {
  quote: "Jab sabne saath chhod diya, tab Sai Ranju Welfare Society ne humein naya rasta dikhaya.",
  attribution: "Sunita Devi",
  role: "Beneficiary, Community Support Program",
} as const;

export const CAMPAIGN_FEATURE = {
  title: "Support a family in need today",
  body: "Your contribution helps provide food, healthcare, and shelter for families who need it most. Every rupee changes a life.",
  cta: "Donate now",
  storyName: "Anjali",
  storyRole: "Community member, welfare program recipient",
} as const;

export const EXPERT_ROWS = [
  {
    title: "Healthcare & Medical Aid",
    body: "Free health camps, hospital visit coordination, medicine support, and medical financial aid for families in need.",
    links: [
      { label: "Request medical help", href: "#contact" },
      { label: "Learn more", href: "#programs" },
    ],
  },
  {
    title: "Livelihood & Skill Development",
    body: "Vocational training, self-employment guidance, and micro-enterprise support for women and youth.",
    links: [
      { label: "Apply for training", href: "#contact" },
      { label: "Learn more", href: "#programs" },
    ],
  },
] as const;

export const VISION_PILLS = [
  { label: "About Us", href: "#about" },
  { label: "Our Programs", href: "#programs" },
  { label: "Get Involved", href: "#volunteer" },
  { label: "Donate", href: "#donate" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const EVENT_CARDS = [
  {
    title: "Diwali Mela 2026",
    body: "Cultural programs, food stalls, and fundraising for our community welfare programs. Bring your family!",
  },
  {
    title: "Tree plantation drive",
    body: "Join us in planting 5,000 saplings this monsoon. Community service with purpose.",
  },
  {
    title: "Women's empowerment workshop",
    body: "Self-defense training, financial literacy, and skill sharing sessions for women in the community.",
  },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Contact us", href: "#contact" },
  { label: "Privacy policy", href: "#" },
  { label: "Terms of use", href: "#" },
  { label: "Refund policy", href: "#" },
  { label: "Accessibility", href: "#" },
] as const;

export const VOLUNTEER_SKILLS = [
  "Teaching",
  "Healthcare",
  "Event Management",
  "Fundraising",
  "Social Media",
  "Photography",
  "Content Writing",
  "Legal Aid",
  "Counseling",
  "Administration",
] as const;

export const FAQ_DATA = [
  {
    q: "How can I donate to Sai Ranju Welfare Society?",
    a: "You can donate online through our secure Razorpay portal, via UPI, bank transfer, or by visiting our office. All donations are eligible for 80G tax exemption.",
  },
  {
    q: "Is my donation tax-exempt?",
    a: "Yes, Sai Ranju Welfare Society is registered under 80G and 12A of the Income Tax Act. All donations made to us are eligible for tax exemption.",
  },
  {
    q: "How can I become a volunteer?",
    a: "You can register as a volunteer through our online form. We welcome individuals with diverse skills and backgrounds to join our mission.",
  },
  {
    q: "Where does my donation go?",
    a: "95% of all donations go directly to our programs. We maintain complete transparency through annual reports and financial audits.",
  },
  {
    q: "Can I sponsor a child's education?",
    a: "Yes, we have a dedicated education sponsorship program. Contact us for more details on sponsoring a child's education.",
  },
] as const;
