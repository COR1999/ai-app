import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 15,
    title: "Open Source Model Tracker",
    shortDescription: "A free dashboard that checks which AI models are actually working right now — so developers stop guessing when providers quietly change the list.",
    fullDescription: "Companies like NVIDIA offer a menu of free AI models developers can build on, but they regularly add, remove, and retire them without any announcement. That leaves developers guessing which ones still work. This dashboard removes the guesswork: it quietly sends a small test to every free model and shows you, at a glance, what's working, what's down, and what's newly appeared. You can compare models side by side, see how reliable each one has been over the past week, and share a snapshot of the current status with others. It runs its own check automatically every morning, so the information is always fresh. Built and released as free, open-source software after one too many run-ins with broken links and out-of-date documentation.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NVIDIA NIM API", "OpenCode API", "Vercel"],
    features: [
      "Live status check for every free model, so you can see what's actually working before you rely on it",
      "Side-by-side comparison of up to three models — speed, reliability, and capabilities at a glance",
      "A running history of which models were added or removed over the past 30 days",
      "Reliability tracking that shows how dependable each model has been over the past week",
      "Filters to quickly find the right kind of model — chat, code, image, or audio",
      "Highlights for brand-new models that have appeared since your last visit",
      "A dark and light mode, and a layout that works just as well on a phone",
      "Shareable links so you can send someone the current status without them signing up",
      "An automatic daily check every morning, keeping the dashboard up to date on its own"
    ],
    image: "/images/projects/open-source-model-tracker.png",
    imageAlt: "Open Source Model Tracker Dashboard",
    githubLink: "https://github.com/COR1999/opensource-model-tracker",
    demoLink: "https://opensource-model-tracker.vercel.app",
    status: "completed",
    featured: false,
    showDetails: true
  },
  {
    id: 14,
    title: "Agent Workbench",
    shortDescription: "A free toolkit that helps AI coding assistants work more consistently — by saving the good habits and lessons learned so they carry over from one project to the next.",
    fullDescription: "When you use an AI assistant to help write software, it starts fresh each time and tends to repeat the same mistakes across different projects. Agent Workbench is a free, open-source toolkit that fixes that. It gives the assistant a shared memory of proven ways of working and a written record of lessons learned, so the good habits travel with you from one project to another instead of being lost. It also comes with simple setup scripts that drop this guidance into a new project in a few steps. Think of it less as an app you open and more as a rulebook and toolkit that makes an AI assistant more reliable, easier to check, and consistent across everything you build. It's actively being developed and improved.",
    technologies: ["AI Agents", "Skills", "Lessons", "Templates", "Shell Scripting", "Agent Workflows", "Versioning", "Project Adoption"],
    features: [
      "A written record of lessons learned, so mistakes get fixed once instead of repeated on every project",
      "A library of reusable, ready-made routines the AI assistant can follow for common tasks",
      "Simple setup scripts that add this guidance to a new project in just a few steps",
      "Everything is versioned and written down, so guidance stays current and easy to review rather than going stale",
      "Designed to travel between projects, so proven ways of working aren't tied to a single codebase",
      "Free, open-source, and actively being improved"
    ],
    image: "/images/projects/agent-workbench-system-design.png",
    imageAlt: "Agent Workbench system design diagram",
    githubLink: "https://github.com/COR1999/Agent-Workbench",
    status: "in-progress",
    featured: true,
    showDetails: true
  },
  {
    id: 12,
    title: "Senus Board Report",
    shortDescription: "AI-native board reporting platform that extracts financial metrics from a company's PDF filings and presents them as an executive dashboard with AI-generated commentary.",
    fullDescription: "An AI-native board reporting platform: upload a company's financial filing (PDF), and it extracts structured financial metrics, computes the ratios a board actually asks about, and presents them as an executive dashboard with AI commentary. Built as a graduate technical assessment for Assiduous Corp, using real public filings from Senus PLC (an Irish natural-capital/MRV SaaS company listed on Euronext Access Dublin) rather than synthetic data. Extraction is deterministic-first (a context-aware regex/table parser over native-text PDFs) with Gemini used only as a fallback for gaps and for narrative commentary, backed by a transparent point-based confidence score that gates whether a document's data ever reaches the dashboard.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "PyMuPDF", "Google Gemini", "Recharts", "Vercel", "Railway"],
    features: [
      "PDF upload with deterministic regex/table extraction of financial metrics",
      "Gemini LLM fallback for gaps, plus vision-based extraction for scanned filings",
      "Transparent point-based confidence score gating auto-accept / needs-review / rejected",
      "Executive dashboard covering Growth & Revenue, Profitability, Cash & Liquidity, Solvency & Leverage, and Returns",
      "AI-generated board insights (positive / risk / opportunity commentary) from computed metrics",
      "Period selector to compare filings with different reporting cadences without blending trend lines",
      "Review-and-approve workflow for needs-review and rejected documents",
      "Investor-relations API integration to import newly published filings on demand",
      "Light/dark theme with a fixed-palette branded sidebar",
      "244 backend (pytest) + 236 frontend (Vitest) tests, validated against the live deployed system"
    ],
    image: "/images/projects/senusboardreport.png",
    imageAlt: "Senus Board Report Executive Dashboard",
    demoLink: "https://senus-board-report.vercel.app",
    githubLink: "https://github.com/COR1999/senus-board-report",
    videoLink: "https://youtu.be/fpC68-ZhlA8",
    status: "completed",
    featured: true,
    interviewProject: true,
    showDetails: true
  },
  {
    id: 13,
    title: "Mama Amaya's",
    shortDescription: "Production website and e-commerce platform built for a real client — an artisan East African-inspired hot sauce brand — live at mamaamayas.com.",
    fullDescription: "A full production web platform built and shipped for an actual paying client: Mama Amaya's, an artisan East African-inspired hot sauce brand. The public marketing site is live now, covering product storytelling, a recipe/journal blog, and brand content, all driven by a file-based content system so the client can add products and posts without touching code. Behind that sits a complete, tested e-commerce build: cart, guest checkout, Stripe-hosted payments, and an authenticated admin hub for order management, inventory, and pricing — currently feature-complete and gated behind a flag while the client finishes business-side Stripe verification, so it can go live with a config change rather than new development. Built end-to-end solo, including database schema/RLS policies, CI pipeline, and third-party integrations, for a client who isn't technical.",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase (Postgres, Auth, RLS)", "Stripe (Checkout, Coupons, Webhooks)", "Resend", "Instagram API", "Vitest", "Playwright", "GitHub Actions", "Vercel"],
    features: [
      "Stripe-hosted checkout with guest purchase flow, promo/discount codes, and webhook-verified order totals",
      "Supabase-backed admin hub (Auth + Postgres RLS) for order management, inventory batches, product pricing, and customer history",
      "Content-driven marketing site — products and blog posts are auto-discovered from files, so the client can publish without a CMS or code changes",
      "Automated email flows via Resend: newsletter signups and a separate 'notify me' launch waitlist",
      "Live Instagram feed pulled from the brand's business account, with an automated Vercel Cron job keeping the access token refreshed indefinitely",
      "Full CI pipeline (GitHub Actions) running ESLint, TypeScript checks, and a Vitest + Playwright test suite on every pull request",
      "Feature-flagged commerce: checkout and admin tooling are fully built and tested, gated behind a single flag pending the client's Stripe business verification",
      "SEO-optimized, fully responsive design matching the client's brand identity"
    ],
    image: "/images/projects/mamaamayas.jpeg",
    imageAlt: "Mama Amaya's hot sauce product photography",
    demoLink: "https://www.mamaamayas.com/",
    status: "production",
    featured: true,
    clientProject: true,
    showDetails: true
  },
  {
    id: 1,
    title: "Portfolio Website",
    shortDescription: "Modern Next.js portfolio website showcasing my development skills and culinary background",
    fullDescription: "A responsive portfolio website built with Next.js and TypeScript, featuring a custom color scheme and modern design. The site showcases my unique journey from professional kitchens to software development, highlighting my projects, skills, and experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel", "EmailJS"],
    features: [
      "Responsive design with mobile-first approach",
      "Custom color scheme and modern UI",
      "Interactive skills showcase with animations",
      "Project portfolio with detailed modal views",
      "Professional timeline and about section",
      "Contact form with social media integration",
      "Optimized performance and SEO",
      "Deployed on Vercel with CI/CD",
      "EmailJS integration for contact form"
    ],
    image: "/images/projects/aiapp.png",
    imageAlt: "Portfolio Website Screenshot",
    githubLink: "https://github.com/COR1999/ai-app",
    status: "production",
    featured: false,
    // isCurrentProject: true,
    showDetails: true
  },
  {
    id: 3,
    title: "COVID Cases Platform",
    shortDescription: "Full-stack COVID-19 statistics dashboard with integrated e-commerce for protective equipment",
    fullDescription: "A comprehensive web application combining real-time COVID-19 data visualization with an e-commerce platform for pandemic-related protective products. Features interactive world maps with color-coded risk levels, complete shopping cart functionality, and secure payment processing.",
    technologies: ["Python", "Django", "JavaScript", "Bootstrap", "Highcharts", "Stripe API", "Disease.sh API", "Heroku", "AWS S3"],
    features: [
      "Interactive world map with COVID-19 statistics",
      "Color-coded country risk levels (green, orange, red)",
      "E-commerce store for masks, sanitizers, and visors",
      "User authentication and profile management",
      "Shopping cart and secure checkout with Stripe",
      "Order history tracking",
      "Real-time pandemic data integration",
      "Guest and registered user checkout options"
    ],
    image: "/images/projects/covidcases.png",
    imageAlt: "COVID Cases Platform Dashboard",
    githubLink: "https://github.com/COR1999/covid_case",
    status: "completed",
    featured: true
  },
  {
    id: 11,
    title: "Vinyl O'Rourke",
    shortDescription: "Responsive vinyl record showcase website with music integration",
    fullDescription: "A mobile-first responsive website showcasing favorite vinyl records with detailed artist information, album artwork, and purchase options. Features Spotify integration for music previews and a curated selection of records for music enthusiasts.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Font Awesome", "JavaScript", "Spotify API"],
    features: [
      "Mobile-first responsive design",
      "Spotify integration for music previews",
      "Detailed artist and album information",
      "Best-sellers showcase page",
      "Social media integration",
      "Cross-browser compatibility",
      "Performance optimized with Lighthouse",
      "Personal vinyl collection curation"
    ],
    image: "/images/projects/vinylorourke.png",
    imageAlt: "Vinyl O'Rourke Website Screenshot",
    demoLink: "https://cor1999.github.io/Vinyl-ORourke/",
    githubLink: "https://github.com/COR1999/Vinyl-ORourke",
    status: "completed"
  },
  {
    id: 4,
    title: "WikiMusic",
    shortDescription: "Single page music encyclopedia with search and discovery features",
    fullDescription: "A music information platform inspired by Wikipedia, designed as a single page application for discovering artists, albums, and songs. Features a clean UX with search functionality and Top 100 songs chart with sorting capabilities using the LastFM API.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "DataTables", "Font Awesome", "LastFM API"],
    features: [
      "Single page application architecture",
      "Mobile-first responsive design",
      "Search functionality for Artists, Albums, and Songs",
      "Top 100 songs chart with sorting capabilities",
      "LastFM API integration for music data",
      "Clean and intuitive user interface",
      "Cross-browser compatibility",
      "DataTables for enhanced table functionality"
    ],
    image: "/images/projects/wikimusic.png",
    imageAlt: "WikiMusic Application Screenshot",
    demoLink: "https://cor1999.github.io/WikiMusic/",
    githubLink: "https://github.com/COR1999/WikiMusic",
    status: "completed"
  },
  {
    id: 5,
    title: "PieroGals",
    shortDescription: "A web application for pierogi enthusiasts featuring recipes, ordering system, and community features",
    fullDescription: "PieroGals is a comprehensive web application dedicated to pierogi lovers, offering traditional and modern pierogi recipes, an online ordering system, and community features for sharing culinary experiences. The platform combines e-commerce functionality with recipe management and social features.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    features: [
      "Traditional pierogi recipe collection",
      "Online ordering and delivery system",
      "User account management",
      "Recipe sharing community",
      "Interactive cooking guides",
      "Shopping cart functionality",
      "Order tracking system",
      "Mobile-responsive design"
    ],
    image: "/images/projects/piergogals.png",
    imageAlt: "PieroGals - Pierogi Web Application",
    demoLink: "https://pierogals-web.vercel.app/",
    githubLink: "https://github.com/COR1999/pierogalsWeb",
    status: "in-progress"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    shortDescription: "A simple fitness tracking application focusing on functionality and clean code",
    fullDescription: "A straightforward fitness tracking application that prioritizes functionality and clean code architecture. This simple yet effective app helps users monitor their workouts, track progress, and achieve their fitness goals through an intuitive dashboard with workout overview, progress charts, and calorie tracking.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Highcharts", "Vite", "Playwright", "ESLint" ,"Vercel" ],
    features: [
      "Add Workouts: Easy-to-use form to log your exercise sessions",
      "View Statistics: Comprehensive overview of your fitness progress",
      "Interactive Charts: Visual representation of your workout data using Highcharts",
      "Responsive Design: Optimized for both desktop and mobile devices (tested on iOS and Android devices)",
      "Performance Optimized: Lazy loading and code splitting for fast load times"
    ],
    image: "/images/projects/fitnesstracker.png",
    imageAlt: "Fitness Tracker Application Dashboard",
    demoLink: "https://fitness-tracker-bice-one.vercel.app/",
    githubLink: "https://github.com/COR1999/fitnessTracker",
    status: "completed",
    interviewProject: true
  },
  {
    id: 7,
    title: "Greystones Sailing Club",
    shortDescription: "Modern website for Greystones Sailing Club with membership management and event features",
    fullDescription: "A comprehensive website for Greystones Sailing Club built with modern web technologies. The site features membership management, event scheduling, club information, and a responsive design optimized for both desktop and mobile devices. Currently implementing CRUD operations using Sanity CMS for content management and data persistence. Active development continues with ongoing feature additions and improvements.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    features: [
      "Responsive design optimized for all devices",
      "Membership management system",
      "Event scheduling and calendar integration",
      "Club information and news updates",
      "Contact forms and communication features",
      "Modern UI with sailing club branding",
      "Performance optimized for fast loading",
      "SEO optimized for better visibility"
    ],
    image: "/images/projects/gscWeb.png",
    imageAlt: "Greystones Sailing Club Website Screenshot",
    demoLink: "https://gsc-web.vercel.app/",
    githubLink: "https://github.com/COR1999/gscWeb",
    status: "in-progress"
  },
  {
    id: 8,
    title: "One Byte of a Baker's Dozen",
    shortDescription: "Full-stack recipe management web application with user authentication",
    fullDescription: "A recipe management web application that allows users to create, edit, and manage their personal recipe collections. Features user authentication with encrypted password storage, MongoDB database integration, and a straightforward user experience for recipe management. Note: This project was completed under a very tight deadline, and while functional, it represents work I wasn't entirely satisfied with due to time constraints. The image shown is from development as the project is no longer hosted.",
    technologies: ["Python", "Flask", "MongoDB", "PyMongo", "HTML5", "CSS3", "Bootstrap", "Font Awesome", "Werkzeug"],
    features: [
      "User registration and authentication system",
      "Recipe creation, editing, and deletion",
      "User-specific recipe management",
      "Encrypted password storage with Werkzeug",
      "MongoDB database integration",
      "Ingredient and preparation step management",
      "Vegetarian recipe options",
      "Responsive Bootstrap design",
      "Straightforward user experience"
    ],
    image: "/images/projects/onebyte.png",
    imageAlt: "One Byte of a Baker's Dozen Recipe App Development Screenshot",
    githubLink: "https://github.com/COR1999/one-byte-of-a-bakers-dozen",
    status: "completed"
  },
  {
    id: 9,
    title: "Invoice to Google Sheets",
    shortDescription: "Convert PDF invoices into structured Google Sheets entries with ease.",
    fullDescription: "An easy-to-use web application that lets users upload PDF invoices, automatically extracts essential details like vendor, date, and amount, and seamlessly records them into a connected Google Sheets spreadsheet. Built for simplicity, speed, and accuracy.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Google Sheets API", "PDF-Parse"],
    features: [
      "Upload PDF invoices directly from the browser",
      "Extract key fields such as date, vendor, and total amount",
      "Automatically update a linked Google Sheets document",
      "Clean, responsive interface styled with TailwindCSS",
      "Deployed easily on Vercel for fast and reliable access"
    ],
    image: "/images/projects/invoice-to-sheets.png",
    imageAlt: "Invoice to Google Sheets Application Screenshot",
    githubLink: "https://github.com/COR1999/invoiceToSheet",
    status: "in-progress"
  },
  {
    id: 10,
    title: "Simple Login Page",
    shortDescription: "A simple and modern authentication system with login and registration functionality.",
    fullDescription: "Built with Next.js and Firebase Authentication (email/password). Users can sign up, log in, choose \"Remember me\" (persistent login), and are redirected to a home page on success. The design is clean and modern, utilizing Tailwind CSS for styling. Form validation and error handling are included for a smooth user experience.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Firebase Authentication", "ESLint"],
    features: [
      "Sign up with full name, email & password fields",
      "Sign in for existing users  with email & password",
      "“Remember me” persistence (local or session) option",
      "Friendly form validation and error messages",
      "Password strength indicator on sign up",
      "Clean UI built with TailwindCSS (custom properties for easy theming)",
      "Next.js App Router (`app/` directory) + client components where needed",
      "Simple architecture: UI component (`LoginForm`) + custom hook (`useAuthForm`) for logic separation",
      "light and dark mode support"
    ],
    image: "/images/projects/loginApplication.png",
    imageAlt: "login Application Screenshot",
    githubLink: "https://github.com/COR1999/loginApplication",
    demoLink: "https://login-application-virid.vercel.app/login",
    status: "completed"
  },
  {
  id: 2,
  title: "FoodGen AI",
  shortDescription: "AI-powered recipe generation platform built with Next.js, FastAPI, Modal, and Mistral 7B.",

  fullDescription:
  "FoodGen AI is a full-stack recipe generation platform that uses a Large Language Model (LLM) to create personalized recipes based on ingredients, cuisine preferences, dietary restrictions, skill level, and cooking style. Built with a modern Next.js frontend and FastAPI backend, the application integrates AWS S3 for recipe caching and Modal for scalable serverless AI inference. The platform intelligently reuses previously generated recipes when similar requests are detected, reducing generation costs and improving response times.",

  technologies: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "Python",
  "Modal",
  "AWS S3",
  "Clerk Authentication",
  "Transformers",
  "Mistral 7B",
  "Pydantic"
  ],

  features: [
  "AI-powered recipe generation using Mistral 7B",
  "Ingredient-based recipe creation",
  "Cuisine and dietary preference customization",
  "Recipe caching with AWS S3",
  "User authentication with Clerk",
  "FastAPI backend API architecture",
  "Serverless AI deployment using Modal",
  "Structured JSON recipe generation",
  "Responsive modern UI built with Next.js",
  "Optimized recipe retrieval to reduce AI inference costs"
  ],

  image: "/images/projects/foodgen.png",
  imageAlt: "FoodGen AI Recipe Generator",

  githubLink: "https://github.com/COR1999/foodGen",

  status: "in-progress",

  featured: true,

  showDetails: true
  }
];
