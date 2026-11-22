import { interviewGym, studyGate, priceScoutIcon } from "../assets";

export const profile = {
  name: "Rahul Singh Gurjar",
  firstName: "Rahul",
  roles: [
    "Full-Stack Software Engineer",
    "Spring Boot · GraphQL · Kafka",
    "React Native & TypeScript",
    "Builder of AI-powered tools",
  ],
  tagline:
    "I build fintech-grade backends and polished mobile and web apps. Right now I'm shipping GraphQL APIs, event-driven systems and React Native features for Varo Bank at Accenture.",
  current: { company: "Accenture", client: "Varo Bank" },
  location: "Bangalore, India",
  email: "reachrahulgurjar24@gmail.com",
  resume: "/Rahul_Singh_Gurjar_Resume.pdf",
  socials: {
    github: "https://github.com/rahulsg98",
    linkedin: "https://in.linkedin.com/in/rahul-singh-gurjar",
    leetcode: "https://leetcode.com/u/rahul_9_8/",
  },
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const stats = [
  { value: 1, suffix: "M+", label: "push notifications delivered every month" },
  { value: 70, suffix: "+", label: "merge requests shipped to production" },
  { value: 50, suffix: "K+", label: "users on Plaid & Pinwheel flows I built" },
  { value: 1000, suffix: "+", label: "DSA problems solved" },
];

export const education = {
  school: "Madhav Institute of Technology & Science, Gwalior",
  degree: "B.Tech, Information Technology",
  date: "2020 – 2024",
  score: "CGPA 8.54",
};

export const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    client: "Client: Varo Bank (US)",
    location: "Bangalore, Karnataka",
    date: "Jul 2024 – Present",
    current: true,
    monogram: "A",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    points: [
      "Designed the GraphQL schema and resolvers end-to-end (Spring Boot → Apollo GraphOS → React Native), cutting over-fetching by **30%** with optimised queries and client-side caching.",
      "Architected a push-notification pipeline on Kafka topics with an AWS SNS delivery service (device tokens, topic fan-out), reliably delivering **1M+ notifications a month**.",
      "Built a pub-sub flow for account funding so users can background the step and resume later, improving reliability and reducing drop-off in multi-step onboarding.",
      "Integrated Plaid and Pinwheel for bank linking and income verification for **50,000+ users**, meeting compliance and data-security requirements.",
      "Shipped **70+ merge requests** across backend services, event-driven systems and mobile UI; resolved **15+ production incidents** across APIs, caching, messaging and rendering.",
    ],
    tech: ["Spring Boot", "Kotlin", "GraphQL", "gRPC", "Apollo GraphOS", "Kafka", "AWS SNS", "React Native", "TypeScript"],
  },
  {
    title: "Software Engineering Trainee",
    company: "Newgen Software",
    client: "Client: top US-based bank",
    location: "Noida, Uttar Pradesh",
    date: "Jan 2024 – Jul 2024",
    monogram: "N",
    gradient: "linear-gradient(135deg,#22d3ee,#3b82f6)",
    points: [
      "Led development of an appointment-scheduling app that streamlined account opening and retail loan processes.",
      "Introduced automated booking and rescheduling, improving efficiency by **20%** and reducing manual errors.",
      "Integrated the scheduler with the bank's existing platforms for smooth data flow, cutting customer dissatisfaction by **15%**.",
    ],
    tech: ["Java", "JavaScript", "MSSQL", "REST APIs", "Agile"],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Java", "Kotlin", "TypeScript", "JavaScript", "C++", "Python", "SQL"] },
  { title: "Backend", items: ["Spring Boot", "GraphQL", "gRPC", "Kafka", "Node.js", "Express", "REST"] },
  { title: "Frontend & Mobile", items: ["React", "React Native", "Next.js", "Redux Toolkit", "Tailwind", "Three.js"] },
  { title: "Cloud & Data", items: ["AWS", "SNS", "Apollo GraphOS", "MySQL", "MongoDB", "Oracle SQL", "Prisma"] },
  { title: "Tools", items: ["Git", "Jest", "Vitest", "Postman", "Figma", "Claude API"] },
];

// Words that orbit in the 3D skill sphere
export const sphereSkills = [
  "Java", "Spring Boot", "Kotlin", "GraphQL", "Kafka", "AWS", "React Native", "TypeScript",
  "React", "Next.js", "Node.js", "gRPC", "Apollo", "MongoDB", "MySQL", "Redux", "Tailwind",
  "Three.js", "C++", "Python", "Prisma", "Jest", "Express", "SNS", "REST", "Git",
  "Figma", "Postman", "Claude", "SQL",
];

export const projectFilters = ["All", "AI", "Extensions", "Full Stack", "Mobile"];

export const projects = [
  {
    name: "Interview Gym",
    featured: true,
    category: ["AI", "Full Stack"],
    year: "2026",
    tagline: "An AI mock interviewer that listens, pushes back and grades you",
    description:
      "A hands-free voice interview coach for Ubuntu. The interviewer plans an agenda from your resume, asks follow-ups, sets traps, watches the code you type and writes feedback, a report and study notes after every round. Includes a company-specific Round Builder and a progress dashboard. Speech, voice and data stay on device.",
    image: interviewGym,
    tags: ["Python", "Claude", "Speech-to-Text", "TTS", "Computer Vision"],
    github: "https://github.com/rahulsg98/Interview-Gym",
    accent: "#a855f7",
  },
  {
    name: "StudyGate",
    featured: true,
    category: ["Extensions"],
    year: "2026",
    tagline: "Study Mode for YouTube",
    description:
      "A Manifest V3 Chromium extension that only lets study lectures play while Study Mode is on. Videos are classified on-device, with a calm overlay for blocked or uncertain videos and a deliberate flow to switch the mode off.",
    image: studyGate,
    tags: ["TypeScript", "Manifest V3", "Vitest", "Chrome APIs"],
    github: "https://github.com/rahulsg98/study-gate",
    accent: "#6366f1",
  },
  {
    name: "PriceScout",
    featured: true,
    category: ["Extensions"],
    year: "2026",
    tagline: "Compare prices across Amazon, Flipkart and Croma",
    description:
      "A Chrome extension that detects the product you're viewing, searches the other stores and shows prices side by side with savings and a match-confidence score. Fuzzy matching penalises wrong variants, storage sizes and accessories.",
    icon: priceScoutIcon,
    tags: ["TypeScript", "Chrome Extension", "Fuzzy Matching", "Node test"],
    github: "https://github.com/rahulsg98/pricescout",
    accent: "#22c55e",
  },
  {
    name: "TourPulse",
    category: ["Full Stack"],
    year: "2023",
    tagline: "Location-based stay booking",
    description:
      "An accommodation booking platform with Google sign-in (+20% new sign-ups), dynamic property listings and a smooth booking flow.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    github: "https://github.com/rahulsg98/TourPulse",
    live: "https://tour-pulse.vercel.app/",
    accent: "#f43f5e",
    glyph: "✈",
  },
  {
    name: "TrendFeed",
    category: ["Mobile", "Full Stack"],
    year: "2023",
    tagline: "React Native social feed",
    description:
      "A React Native app with its own TypeScript backend for posting and browsing trending content.",
    tags: ["React Native", "TypeScript", "Node.js"],
    github: "https://github.com/rahulsg98/TrendFeed",
    accent: "#06b6d4",
    glyph: "◎",
  },
  {
    name: "IntelliNews AI",
    category: ["AI", "Full Stack"],
    year: "2023",
    tagline: "Voice-controlled news reader",
    description:
      "Reads the latest headlines from News API and lets you browse and open articles by voice using Alan AI.",
    tags: ["React", "Alan AI", "News API"],
    github: "https://github.com/rahulsg98/IntelliNewsAIApp",
    accent: "#f59e0b",
    glyph: "◉",
  },
  {
    name: "Librify",
    category: ["Full Stack"],
    year: "2023",
    tagline: "Community platform for readers",
    description: "Explore books, discover authors and engage with a community of readers.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/rahulsg98/Librify",
    accent: "#ec4899",
    glyph: "❖",
  },
  {
    name: "ProdSpot",
    category: ["Full Stack"],
    year: "2023",
    tagline: "Product listing marketplace",
    description: "A product listing website with a separate REST backend for products, comments and upvotes.",
    tags: ["React", "Express", "MongoDB"],
    github: "https://github.com/rahulsg98/prod-spot-frontend",
    accent: "#8b5cf6",
    glyph: "▲",
  },
];

export const achievements = [
  { title: "CodeChef SnackDown", detail: "Top 2% among 75,000 participants", date: "2021", icon: "🏆" },
  { title: "LeetCode", detail: "Peak contest rating 1600", date: "2023", icon: "⚡", link: "https://leetcode.com/u/rahul_9_8/" },
  { title: "Hacktoberfest", detail: "Two-time contributor, recognised for impactful open-source PRs", date: "2022", icon: "🎃" },
  { title: "Problem solving", detail: "1,000+ problems solved across platforms", date: "Ongoing", icon: "🧠" },
];
