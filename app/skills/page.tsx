/**
 * SKILLS PAGE COMPONENT
 * 
 * Interactive showcase of technical skills featuring:
 * - Animated sliding skill bars displaying technologies
 * - Detailed proficiency levels organized by category
 * - Progress bars with percentage indicators
 * - Additional soft skills section highlighting culinary background
 */

"use client";

export default function SkillsPage() {
  
  /**
   * SLIDING SKILLS DATA
   * Array of technologies displayed in the animated sliding section
   * Each skill has an icon and color for visual appeal
   */
  const skills = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", icon: "▲", color: "#000000" },
    { name: "TypeScript", icon: "TS", color: "#3178C6" },
    { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
    { name: "jQuery", icon: "🔧", color: "#0769AD" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "Django", icon: "🎯", color: "#092E20" },
    { name: "Flask", icon: "🌶️", color: "#000000" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "Git", icon: "📦", color: "#F05032" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "AWS", icon: "☁️", color: "#FF9900" },
    { name: "Heroku", icon: "💜", color: "#430098" },
    { name: "Stripe", icon: "💳", color: "#008CDD" },
    { name: "Bootstrap", icon: "🅱️", color: "#7952B3" },
    { name: "Font Awesome", icon: "🔤", color: "#339AF0" },
    { name: "DataTables", icon: "📋", color: "#1F7B7B" },
    { name: "Highcharts", icon: "📊", color: "#8085E9" },
    { name: "Tailwind", icon: "🎨", color: "#06B6D4" },
    { name: "Express", icon: "🚀", color: "#000000" },
    { name: "GraphQL", icon: "◆", color: "#E10098" },
    { name: "Redis", icon: "📊", color: "#DC382D" },
    { name: "Figma", icon: "🎯", color: "#F24E1E" }
  ];

  /**
   * SKILL CATEGORIES WITH PROFICIENCY LEVELS
   * Organized by development area with percentage-based skill levels
   * Uses custom color scheme for visual consistency
   */
  const skillCategories = {
    "Frontend Development": [
      { name: "React", level: 90, color: "primary" },
      { name: "Next.js", level: 85, color: "secondary" },
      { name: "TypeScript", level: 80, color: "accent" },
      { name: "Tailwind CSS", level: 85, color: "neutral" },
      { name: "JavaScript", level: 90, color: "primary" },
      { name: "jQuery", level: 80, color: "accent" },
      { name: "Bootstrap", level: 80, color: "secondary" },
      { name: "Font Awesome", level: 85, color: "neutral" },
      { name: "HTML5/CSS3", level: 95, color: "accent" }
    ],
    "Backend Development": [
      { name: "Node.js", level: 85, color: "secondary" },
      { name: "Python", level: 85, color: "accent" },
      { name: "Django", level: 80, color: "primary" },
      { name: "Flask", level: 75, color: "neutral" },
      { name: "Express.js", level: 80, color: "neutral" },
      { name: "GraphQL", level: 70, color: "primary" },
      { name: "REST APIs", level: 85, color: "secondary" }
    ],
    "Database & Cloud": [
      { name: "PostgreSQL", level: 80, color: "accent" },
      { name: "MongoDB", level: 75, color: "neutral" },
      { name: "AWS S3", level: 70, color: "primary" },
      { name: "Heroku", level: 75, color: "secondary" },
      { name: "Git", level: 90, color: "accent" },
      { name: "Docker", level: 70, color: "neutral" }
    ]
  };

  return (
    // Main page container with light background
    <div className="min-h-screen bg-background-secondary">
      
      {/* HERO SECTION - Page title and introduction */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
            My Technical Skills
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-text-primary">
            A showcase of the technologies and tools I use to bring ideas to life
          </p>
        </div>
      </section>

      {/* ANIMATED SKILLS SHOWCASE - Horizontal sliding bars with technology icons */}
      <section className="py-8 overflow-hidden">
        <div className="relative">
          {/* First sliding row */}
          <div className="flex animate-slide-right space-x-8 mb-6">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`slide1-${index}`}
                className="flex-shrink-0 bg-white rounded-xl p-4 shadow-lg border-2 border-neutral/30 min-w-[120px] text-center transform hover:scale-110 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="font-semibold text-sm text-primary">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          {/* Second sliding row (reverse direction) */}
          <div className="flex animate-slide-left space-x-8">
            {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, index) => (
              <div
                key={`slide2-${index}`}
                className="flex-shrink-0 bg-white rounded-xl p-4 shadow-lg border-2 border-secondary/30 min-w-[120px] text-center transform hover:scale-110 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="font-semibold text-sm text-text-primary">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFICIENCY LEVELS SECTION - Detailed skill breakdown with progress bars */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Proficiency Levels
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 text-center text-primary">
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-text-primary">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-text-secondary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out animate-fill-bar bg-${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFT SKILLS SECTION - Culinary background and international experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Beyond Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-neutral/10">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Culinary Expertise
              </h3>
              <p className="text-text-primary">
                Professional chef training brings precision, creativity, and ability to work under pressure
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary/10">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                International Experience
              </h3>
              <p className="text-text-primary">
                Worked across multiple countries, bringing adaptability and cultural awareness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes fill-bar {
          0% {
            width: 0%;
          }
          100% {
            width: var(--target-width);
          }
        }

        .animate-slide-right {
          animation: slide-right 20s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 25s linear infinite;
        }

        .animate-fill-bar {
          animation: fill-bar 2s ease-out 0.5s both;
        }

        /* Pause animation on hover */
        .animate-slide-right:hover,
        .animate-slide-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}