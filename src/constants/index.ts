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
    icon: javascript, // Placeholder
  },
  {
    name: "Meta Quest 3",
    icon: typescript, // Placeholder
  },
  {
    name: "Llama 3",
    icon: reactjs, // Placeholder
  },
  {
    name: "LangGraph",
    icon: redux, // Placeholder
  },
  {
    name: "Ollama",
    icon: tailwind, // Placeholder
  },
  {
    name: "Python",
    icon: nodejs, // Placeholder
  },
  {
    name: "Vector DBs",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "LangChain",
    icon: git, // Placeholder
  },
  {
    name: "Hugging Face",
    icon: figma, // Placeholder
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
    icon: starbucks, // Placeholder
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
    icon: tesla, // Placeholder
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
    name: "IdeaBytes Team",
    designation: "Client",
    company: "Hyderabad, India",
    image: user2,
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
] as const;
