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
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Generative AI Specialist",
    icon: mobile,
  },
  {
    title: "Backend & Cloud Developer",
    icon: backend,
  },
  {
    title: "MLOps Expert",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Python",
    icon: javascript, // Placeholder for Python
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "LangChain",
    icon: redux, // Placeholder
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: figma, // Placeholder for AWS
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "AI/ML Engineer",
    company_name: "FolderWave",
    icon: starbucks, // Placeholder
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Architected and operated production ML pipelines for an enterprise automation platform built on Apache Kafka.",
      "Real-time ETL processing 1000+ events/second with sub-100ms latency, deployed on AWS (ECS, Lambda, Kinesis).",
      "Designed and maintained DevOps/MLOps infrastructure with enterprise-grade CI/CD pipelines (GitHub Actions) and Docker.",
      "Built LLM-based AI systems with Pinecone vector database, achieving 95% retrieval accuracy with RAG pipelines.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "IdeaBytes",
    icon: tesla, // Placeholder
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Jan 2022",
    points: [
      "Built and operated production data infrastructure serving 10,000+ concurrent users with 400+ REST API endpoints.",
      "Implemented OAuth2 authentication, async processing, and rate limiting with comprehensive monitoring.",
      "Managed large-scale data processing workflows using Apache Spark and Hadoop ETL workflows.",
      "Deployed on AWS (EC2, S3, RDS, Lambda) with automated CI/CD and ELK Stack logging.",
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
    name: "Social Media Automation SaaS",
    description:
      "Architected production LLM infrastructure integrating Claude API and Stability AI for generative capabilities, built RAG pipelines using Pinecone and Weaviate.",
    tags: [
      {
        name: "Claude API",
        color: "blue-text-gradient",
      },
      {
        name: "Pinecone",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/ajay-automates",
    live_site_link: "https://github.com/ajay-automates",
  },
  {
    name: "Job Application Automation",
    description:
      "Developed ML data extraction pipeline processing 100+ job application types with 92% accuracy using Selenium and BeautifulSoup.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "Vector DB",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/ajay-automates",
    live_site_link: "https://github.com/ajay-automates",
  },
  {
    name: "AI Voice Agent",
    description:
      "Built a production real-time streaming data system with WebSocket communication, achieving sub-100ms end-to-end latency.",
    tags: [
      {
        name: "WebSockets",
        color: "blue-text-gradient",
      },
      {
        name: "Audio Codecs",
        color: "green-text-gradient",
      },
      {
        name: "AsyncIO",
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
