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
    "Full-stack engineer with 2+ years building a US digital bank's mobile banking platform at Accenture: Java, Spring Boot and GraphQL services, Kafka event pipelines, and React Native features used by 50,000+ customers.",
  current: { company: "Accenture", client: "Varo Bank" },
  location: "Bengaluru, India",
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
  { value: 150, suffix: "+", label: "merge requests shipped under code review" },
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
    title: "Software Engineer",
    promotion: "Aug 2026, from Associate Software Engineer (Jul 2024 – Jul 2026)",
    company: "Accenture",
    client: "Client: Varo Bank, a US digital bank",
    location: "Bengaluru, India",
    date: "Jul 2024 – Present",
    current: true,
    monogram: "A",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    points: [
      "Designed the event-driven push-notification pipeline: events flow through Kafka topics and AWS SNS manages device tokens and topic fan-out, delivering **1M+ notifications a month**. Also built token registration and notification handling in the app.",
      "Designed GraphQL schemas and resolvers in Spring Boot, exposed through Apollo GraphOS to the React Native app; restructured queries and set up Apollo Client caching, cutting over-fetching by **30%**.",
      "Reworked onboarding's account-funding step with a pub-sub design so it runs in the background and completes only after confirmation; delivered both the backend event flow and the multi-step screens, reducing drop-off.",
      "Integrated Plaid (bank linking) and Pinwheel (income verification), used by **50,000+ customers**, meeting compliance and security requirements for financial data.",
      "Released features behind Statsig flags and ran A/B experiments across **3+ concurrent rollouts**, tracking adoption with Segment and Amplitude.",
      "Resolved **15+ production incidents** using Grafana monitoring and shipped **150+ merge requests** under strict code review; wrote Kotlin for Android-specific needs.",
    ],
    tech: ["Java", "Spring Boot", "GraphQL", "Apollo", "Kafka", "AWS SNS", "gRPC", "React Native", "TypeScript", "Kotlin", "Statsig", "Grafana"],
  },
  {
    title: "Software Engineering Trainee",
    company: "Newgen Software",
    client: "Client: Bank of The Bahamas",
    location: "Noida, India",
    date: "Jan 2024 – Jul 2024",
    monogram: "N",
    gradient: "linear-gradient(135deg,#22d3ee,#3b82f6)",
    points: [
      "Led development of an appointment-scheduling web application that streamlined the account-opening and retail-loan journeys.",
      "Automated booking and rescheduling, raising process efficiency by **20%** by removing manual steps and errors.",
      "Integrated the scheduler with the bank's existing platforms over REST APIs, contributing to a **15%** reduction in customer dissatisfaction.",
    ],
    tech: ["Java", "JavaScript", "MSSQL", "REST APIs", "Agile"],
  },
  {
    title: "SDE Intern",
    company: "NextSolutions",
    client: "Remote",
    location: "Faridabad, India",
    date: "May 2023 – Jul 2023",
    monogram: "NS",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    points: [
      "Developed Property24*7, a web app for property brokers to list properties with full details and track interested buyers.",
      "Built the back end with Node.js, Express and MongoDB REST APIs and integrated it with the React front end.",
      "Developed, tested and debugged features across the MERN stack and connected the app to third-party services.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Java", "TypeScript", "JavaScript", "Kotlin", "Python", "C++", "SQL"] },
  { title: "Backend", items: ["Spring Boot", "GraphQL", "gRPC", "REST APIs", "Apache Kafka", "Node.js", "Express", "Microservices"] },
  { title: "Frontend & Mobile", items: ["React Native", "React", "Next.js", "Redux Toolkit", "Apollo Client", "Tailwind CSS", "Material UI"] },
  { title: "Cloud & Data", items: ["AWS (SNS)", "MySQL", "MongoDB", "Oracle SQL", "MSSQL", "Prisma", "SQLite"] },
  { title: "AI", items: ["LLM agents (Claude)", "Gemini Nano", "ONNX Runtime", "Speech-to-text", "Text-to-speech"] },
  { title: "Testing & Tools", items: ["Jest", "Vitest", "GitHub Actions", "GitLab", "Postman", "Statsig", "Amplitude", "Segment", "Grafana", "Braze", "Figma"] },
];

// Words that orbit in the 3D skill sphere
export const sphereSkills = [
  "Java", "Spring Boot", "Kotlin", "GraphQL", "Kafka", "AWS", "React Native", "TypeScript",
  "React", "Next.js", "Node.js", "gRPC", "Apollo", "MongoDB", "MySQL", "Redux", "Tailwind",
  "Python", "C++", "Prisma", "Jest", "Express", "SNS", "REST", "Statsig",
  "Grafana", "Claude", "Gemini Nano", "ONNX", "Vitest",
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
      "A hands-free voice interviewer for Ubuntu that plans timed rounds (15 min to 2 hr) across resume, theory, DSA, machine coding, system design and behavioral, then asks follow-ups and reviews your code. Local speech-to-text with NVIDIA Parakeet (9.2% WER vs 9.8% for Whisper small.en, about 8x faster), a natural Kokoro voice and OpenCV eye-contact analysis. Only reasoning goes to Claude; audio, video and data stay on device.",
    image: interviewGym,
    tags: ["Python", "PySide6", "Claude", "ONNX Runtime", "OpenCV"],
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
      "Published on the Chrome Web Store. A Manifest V3 extension that pauses every YouTube video in Study Mode and classifies it before playback: lectures play, distractions are blocked, unclear videos ask you. Classification runs fully on-device with keyword scoring and Chrome's built-in Gemini Nano. 32 Vitest test files and GitHub Actions CI.",
    image: studyGate,
    tags: ["TypeScript", "Manifest V3", "Gemini Nano", "Vitest"],
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
      "An accommodation booking platform with a dynamic property showcase, an end-to-end booking flow and login with Google, GitHub or email. Google sign-in lifted new registrations by 20%.",
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
  { title: "Hacktoberfest", detail: "Open-source contributor two years running", date: "2021 – 2022", icon: "🎃" },
  { title: "Problem solving", detail: "1,000+ problems solved across platforms", date: "Ongoing", icon: "🧠" },
];
