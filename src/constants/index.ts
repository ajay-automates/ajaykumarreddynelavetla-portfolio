// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  folderwave,
  ideabytes,
  openclaw,
  metaquest,
  llama,
  langgraph,
  ollama,
  python,
  langchain,
  vectordb,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  instagram,
  threads,
  whatsapp,
  calendly,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/sanidhyy/3d-portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Agentic AI Architect",
    icon: web,
  },
  {
    title: "XR & Spatial Computing",
    icon: mobile,
  },
  {
    title: "Local LLM Specialist",
    icon: backend,
  },
  {
    title: "AI Automation Expert",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "OpenClaw",
    icon: openclaw,
  },
  {
    name: "Meta Quest 3",
    icon: metaquest,
  },
  {
    name: "Llama 3",
    icon: llama,
  },
  {
    name: "LangGraph",
    icon: langgraph,
  },
  {
    name: "Ollama",
    icon: ollama,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Vector DBs",
    icon: vectordb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "Hugging Face",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Agentic AI Architect",
    company_name: "FolderWave",
    icon: folderwave,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Architecting autonomous multi-agent systems for enterprise automation using LangGraph and OpenClaw.",
      "Deploying local LLM inference engines with vLLM and Ollama for privacy-focused document processing.",
      "Building real-time RAG pipelines on AWS with sub-100ms latency for intelligent retrieval.",
      "Optimizing GenAI workflows for production, achieving 99.9% uptime with Kubernetes orchestration.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "IdeaBytes",
    icon: ideabytes,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Jan 2022",
    points: [
      "Built high-performance data infrastructure serving 10k+ users using Python and Distributed Systems.",
      "Implemented automated ETL workflows and real-time data streaming with Apache Kafka.",
      "Developed scalable REST APIs and microservices deployed on AWS Lambda and ECS.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Ajay's expertise in AI and multi-agent systems is truly exceptional. He delivered a production-grade system with incredible latency.",
    name: "FolderWave Team",
    designation: "Client",
    company: "Boston, MA",
    image: user1,
  },
  {
    testimonial:
      "A versatile developer who masters both backend infrastructure and cutting-edge AI technologies.",
    name: "Tarun Movva",
    designation: "Software Developer",
    company: "@Nvidia",
    image: user2,
  },
  {
    testimonial:
      "Exceptional AI engineer who deeply understands agentic systems and can architect complex autonomous workflows.",
    name: "Siddanth Emani",
    designation: "AI Engineer",
    company: "@Auditoria",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Agentic Job Hunter",
    description:
      "Autonomous multi-agent system that scrapes job boards, customizes resumes using local LLMs (Llama 3), and auto-applies with OpenClaw.",
    tags: [
      {
        name: "OpenClaw",
        color: "blue-text-gradient",
      },
      {
        name: "Llama 3",
        color: "green-text-gradient",
      },
      {
        name: "LangGraph",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/ajay-automates",
    live_site_link: "https://github.com/ajay-automates",
  },
  {
    name: "XR Spatial Interface",
    description:
      "Immersive mixed reality workspace for Meta Quest 3, allowing users to interact with 3D data visualizations and AI agents in real-time.",
    tags: [
      {
        name: "Meta Quest 3",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "WebXR",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/ajay-automates",
    live_site_link: "https://github.com/ajay-automates",
  },
  {
    name: "Local Brain API",
    description:
      "A privacy-first AI API server running local LLMs (Mistral, Gemma) via Ollama, integrated with a custom vector memory store.",
    tags: [
      {
        name: "Ollama",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Vector DB",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/ajay-automates",
    live_site_link: "https://github.com/ajay-automates",
  },
  {
    name: "EmailBlast",
    description:
      "Automated email campaign system that leverages AI to personalize and optimize email outreach at scale, increasing engagement and conversion rates.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "AI Automation",
        color: "green-text-gradient",
      },
      {
        name: "Email API",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/ajay-automates/EmailBlast",
    live_site_link: "https://email-blast.vercel.app/",
  },
  {
    name: "Social Media Automator",
    description:
      "Intelligent tool for automating social media content creation, scheduling, and posting across multiple platforms with AI-generated captions.",
    tags: [
      {
        name: "Social APIs",
        color: "blue-text-gradient",
      },
      {
        name: "LLM Integration",
        color: "green-text-gradient",
      },
      {
        name: "Task Automation",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/ajay-automates/social-media-automator",
    live_site_link: "https://socialmediaautomator.com/",
  },
  {
    name: "AI Automations",
    description:
      "A professional consultancy portfolio showcasing AI solutions, expertise in agentic systems, and case studies of successful client implementations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Web Design",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://ai-consultancy-portfolio.vercel.app/",
    live_site_link: "https://ai-consultancy-portfolio.vercel.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ajaykumarreddynelavetla/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/ajay-automates",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/ajay_kumar_reddie/",
  },
  {
    name: "Threads",
    icon: threads,
    link: "https://www.threads.com/@ajay_kumar_reddie",
  },
  {
    name: "WhatsApp",
    icon: whatsapp,
    link: "https://wa.me/18575761177",
  },
  {
    name: "Calendly",
    icon: calendly,
    link: "https://calendly.com/ajaykumarreddynelavetla/30min",
  },
] as const;
