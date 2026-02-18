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
  chatgpt,
  claude,
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
    link: "https://github.com/ajay-automates",
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
  {
    name: "ChatGPT",
    icon: chatgpt,
  },
  {
    name: "Claude",
    icon: claude,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "AI Automation & DevOps Engineer",
    company_name: "FolderWave",
    icon: folderwave,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Architecting end-to-end data pipelines and automation systems for an EdTech SaaS platform serving 10,000+ schools — handling API integrations, ETL workflows, and production database operations at scale.",
      "Building autonomous scheduling and orchestration systems with Java, Python, and PowerShell across distributed infrastructure, achieving 99.9% reliability with zero manual intervention.",
      "Developing real-time monitoring dashboards and secure cross-server tooling tracking 500K+ records and 12+ production workflows with automated alerting and encrypted credential management.",
      "Reducing operational overhead by 80%+ through intelligent automation while leveraging AI-assisted development (Copilot, Claude) to accelerate engineering velocity by 40%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "IdeaBytes",
    icon: ideabytes,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Dec 2021",
    points: [
      "Built and shipped 15+ production web applications end-to-end — React.js and Next.js frontends, Spring Boot and Node.js backends, MySQL databases — owning the full stack from design to deployment.",
      "Engineered scalable REST APIs with auth, validation, and optimized queries, improving response times by 30% and reducing bugs by 40% through automated testing with Selenium and Cucumber.",
      "Integrated payment gateways, social platform APIs, and external services while implementing CI/CD pipelines with Git and Jenkins for streamlined deployments.",
      "Delivered 5+ major client projects with 95% satisfaction rate, building dashboards, e-commerce platforms, and data visualization tools across cross-functional teams.",
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
    source_code_link: "https://github.com/ajay-automates/job-application-automator-mcp",
    live_site_link: "https://github.com/ajay-automates/job-application-automator-mcp",
  },
  {
    name: "InterviewTwin",
    description:
      "AI-powered interview prep platform. Face a professional AI interviewer for real-time feedback or practice with your AI twin to master articulation. Powered by Tavus CVI.",
    tags: [
      {
        name: "Tavus",
        color: "blue-text-gradient",
      },
      {
        name: "AI Interview",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://interview-twin.vercel.app/",
    live_site_link: "https://interview-twin.vercel.app/",
  },
  {
    name: "AI Voice assistant",
    description:
      "Intelligent call screening system utilizing AI to screen calls, manage schedules, and make decisions based on real-time conversation analysis.",
    tags: [
      {
        name: "Tavus",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/ajay-automates/ai-call-assistant",
    live_site_link: "https://github.com/ajay-automates/ai-call-assistant",
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
