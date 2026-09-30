export interface Skill {
  name: string;
  icon: string;
  category: string;
}

// Kept in sync with the technologies actually used across shipped projects
// (see constants/projects.ts) rather than a generic/aspirational list.
export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "TypeScript", icon: "TS", category: "Frontend" },
  { name: "JavaScript", icon: "JS", category: "Frontend" },
  { name: "Tailwind CSS", icon: "💨", category: "Frontend" },
  { name: "Bootstrap", icon: "🅱️", category: "Frontend" },
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "Vite", icon: "⚡", category: "Frontend" },
  { name: "jQuery", icon: "🔧", category: "Frontend" },
  { name: "shadcn/ui", icon: "🎛️", category: "Frontend" },

  // Backend
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "FastAPI", icon: "🚀", category: "Backend" },
  { name: "Django", icon: "🎯", category: "Backend" },
  { name: "Flask", icon: "🌶️", category: "Backend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Firebase", icon: "🔥", category: "Backend" },
  { name: "SQLAlchemy", icon: "🗃️", category: "Backend" },
  { name: "Pydantic", icon: "📐", category: "Backend" },
  { name: "REST APIs", icon: "🔗", category: "Backend" },
  { name: "Auth.js", icon: "🔐", category: "Backend" },

  // AI & LLM
  { name: "Google Gemini", icon: "✨", category: "AI & LLM" },
  { name: "Mistral 7B", icon: "🧠", category: "AI & LLM" },
  { name: "Transformers", icon: "🤗", category: "AI & LLM" },
  { name: "Modal (serverless AI)", icon: "🧬", category: "AI & LLM" },
  { name: "PyMuPDF", icon: "📄", category: "AI & LLM" },
  { name: "Anthropic API", icon: "🤖", category: "AI & LLM" },
  { name: "Tool calling", icon: "🧰", category: "AI & LLM" },
  { name: "scikit-learn", icon: "📈", category: "AI & LLM" },

  // AI Tools
  { name: "Claude", icon: "🤖", category: "AI Tools" },
  { name: "GitHub Copilot", icon: "🧑‍💻", category: "AI Tools" },
  { name: "ChatGPT", icon: "💬", category: "AI Tools" },
  { name: "Codex", icon: "🛠️", category: "AI Tools" },
  { name: "Claude Code", icon: "⌨️", category: "AI Tools" },
  { name: "OpenCode", icon: "🔧", category: "AI Tools" },
  { name: "T3 Chat", icon: "🗣️", category: "AI Tools" },
  { name: "Agent skills", icon: "📚", category: "AI Tools" },

  // Finance
  { name: "Financial statements", icon: "📊", category: "Finance" },
  { name: "KPI dashboards", icon: "📈", category: "Finance" },
  { name: "Cash flow forecasting", icon: "💧", category: "Finance" },
  { name: "Backtesting", icon: "🧪", category: "Finance" },
  { name: "Stablecoins", icon: "🪙", category: "Finance" },
  { name: "On-chain payments", icon: "⛓️", category: "Finance" },
  { name: "Circle Arc", icon: "🔗", category: "Finance" },
  { name: "Wallet security", icon: "🔒", category: "Finance" },
  { name: "Canteen CLI", icon: "📡", category: "Finance" },

  // Database
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "SQLite", icon: "💽", category: "Database" },
  { name: "SQL", icon: "🗄️", category: "Database" },
  { name: "Drizzle ORM", icon: "📚", category: "Database" },

  // Cloud & Deployment
  { name: "Vercel", icon: "▲", category: "Cloud" },
  { name: "Railway", icon: "🚂", category: "Cloud" },
  { name: "Heroku", icon: "💜", category: "Cloud" },
  { name: "AWS S3", icon: "☁️", category: "Cloud" },
  { name: "GitHub Actions", icon: "⚙️", category: "Cloud" },

  // Tools & Testing
  { name: "Git & GitHub", icon: "🐙", category: "Tools" },
  { name: "Figma", icon: "🖌️", category: "Tools" },
  { name: "Jira", icon: "📌", category: "Tools" },
  { name: "Google APIs", icon: "🔍", category: "Tools" },
  { name: "Playwright", icon: "🎭", category: "Tools" },
  { name: "Vitest", icon: "🔬", category: "Tools" },
  { name: "pytest", icon: "🐛", category: "Tools" },
  { name: "ESLint", icon: "🧹", category: "Tools" },
  { name: "Stripe API", icon: "💳", category: "Tools" },
  { name: "PowerShell", icon: "🪟", category: "Tools" },
];

// Primary stack: the technologies from the CV's own "Front-End/Back-End Development"
// lines, called out separately so recruiters can see depth vs. breadth at a glance.
export const primarySkills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Python", "Django", "Firebase", "REST APIs",
];

export const categories = [
  "Frontend", "Backend", "AI & LLM", "AI Tools", "Finance",
  "Database", "Cloud", "Tools",
];