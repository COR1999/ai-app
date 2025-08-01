"use client";

export default function SkillsPage() {
  const allSkills = [
    // Frontend
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "JavaScript", icon: "JS" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "jQuery", icon: "🔧" },
    { name: "Sass", icon: "💎" },
    { name: "Vue.js", icon: "💚" },
    
    // Backend
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎯" },
    { name: "Flask", icon: "🌶️" },
    { name: "Express.js", icon: "🚀" },
    { name: "FastAPI", icon: "⚡" },
    { name: "REST APIs", icon: "🔗" },
    { name: "GraphQL", icon: "◆" },
    
    // Database
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Redis", icon: "📊" },
    { name: "SQLite", icon: "💽" },
    
    // Tools & DevOps
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "Webpack", icon: "📦" },
    { name: "Vite", icon: "⚡" },
    { name: "npm", icon: "📋" },
    { name: "Yarn", icon: "🧶" },
    
    // Cloud & Deployment
    { name: "AWS", icon: "☁️" },
    { name: "Heroku", icon: "💜" },
    { name: "Vercel", icon: "▲" },
    { name: "Netlify", icon: "🌐" },
    { name: "Digital Ocean", icon: "🌊" },
    
    // Design & Other
    { name: "Figma", icon: "🎨" },
    { name: "Photoshop", icon: "🖼️" },
    { name: "Stripe", icon: "💳" },
    { name: "Chart.js", icon: "📈" },
    { name: "D3.js", icon: "📊" },
    { name: "Jest", icon: "🧪" },
    { name: "Cypress", icon: "🔬" }
  ];

  const skills = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "TypeScript", icon: "TS", category: "Frontend" },
    { name: "JavaScript", icon: "JS", category: "Frontend" },
    { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
    { name: "Bootstrap", icon: "🅱️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "Django", icon: "🎯", category: "Backend" },
    { name: "Flask", icon: "🌶️", category: "Backend" },
    { name: "Express.js", icon: "🚀", category: "Backend" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Git", icon: "📦", category: "Tools" },
    { name: "Docker", icon: "🐳", category: "Tools" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Heroku", icon: "💜", category: "Cloud" }
  ];

  const categories = ["Frontend", "Backend", "Database", "Tools", "Cloud"];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="bg-white border-b py-12">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">Technical Skills</h1>
          <p className="text-text-secondary">
            Technologies and tools I use to build modern applications
          </p>
        </div>
      </section>

      {/* ANIMATED SKILLS SHOWCASE */}
      <section className="py-8 overflow-hidden bg-gradient-to-r from-background-secondary to-white">
        <div className="relative">
          {/* Moving skills row */}
          <div className="flex animate-scroll space-x-6">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={`skill-${index}`}
                className="flex-shrink-0 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 min-w-[100px] text-center hover:shadow-md transition-shadow group"
              >
                <div className="text-lg mb-1 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <div className="font-medium text-xs text-primary whitespace-nowrap">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS GRID */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Category Sections */}
          <div className="space-y-8">
            {categories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              return (
                <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-100 pb-2">
                    {category}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-primary text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ADDITIONAL SKILLS */}
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-100 pb-2">
              Additional Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">👨‍🍳</div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Award-Winning Kitchen Experience</h3>
                  <p className="text-sm text-text-secondary">
                    Trained as chef in Dublin's award-winning restaurants Crudo and Achara (2021-2025). Managed kitchen teams, supply orders, and delivered high-quality results under tight deadlines in high-pressure environments.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎓</div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Software Development Diploma</h3>
                  <p className="text-sm text-text-secondary">
                    Code Institute Diploma (2019-2020) with expertise in object-oriented programming, web development, and version control. Quick learner and problem solver passionate about software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}