import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    shortDescription: "Modern Next.js portfolio website showcasing my development skills and culinary background",
    fullDescription: "A responsive portfolio website built with Next.js and TypeScript, featuring a custom color scheme and modern design. The site showcases my unique journey from professional kitchens to software development, highlighting my projects, skills, and experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    features: [
      "Responsive design with mobile-first approach",
      "Custom color scheme and modern UI",
      "Interactive skills showcase with animations",
      "Project portfolio with detailed modal views",
      "Professional timeline and about section",
      "Contact form with social media integration",
      "Optimized performance and SEO",
      "Deployed on Vercel with CI/CD"
    ],
    image: "/images/projects/aiapp.png",
    imageAlt: "Portfolio Website Screenshot",
    githubLink: "https://github.com/COR1999/ai-app",
    status: "production",
    featured: false,
    isCurrentProject: true,
    showDetails: false
  },
  {
    id: 2,
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
    id: 3,
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
    technologies: ["HTML5", "CSS3","Javascript", "Bootstrap", "jQuery", "DataTables", "Font Awesome", "LastFM API"],
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
    status: "completed"
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
  }
];