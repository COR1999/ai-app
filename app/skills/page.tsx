"use client";

export default function SkillsPage() {
  const skills = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", icon: "▲", color: "#000000" },
    { name: "TypeScript", icon: "TS", color: "#3178C6" },
    { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "Git", icon: "📦", color: "#F05032" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "AWS", icon: "☁️", color: "#FF9900" },
    { name: "Tailwind", icon: "🎨", color: "#06B6D4" },
    { name: "Express", icon: "🚀", color: "#000000" },
    { name: "GraphQL", icon: "◆", color: "#E10098" },
    { name: "Redis", icon: "📊", color: "#DC382D" },
    { name: "Figma", icon: "🎯", color: "#F24E1E" }
  ];

  const skillCategories = {
    "Frontend Development": [
      { name: "React", level: 90, color: "#2e6171" },
      { name: "Next.js", level: 85, color: "#556f7a" },
      { name: "TypeScript", level: 80, color: "#798086" },
      { name: "Tailwind CSS", level: 85, color: "#b79fad" },
      { name: "JavaScript", level: 90, color: "#2e6171" }
    ],
    "Backend Development": [
      { name: "Node.js", level: 85, color: "#556f7a" },
      { name: "Python", level: 75, color: "#798086" },
      { name: "Express.js", level: 80, color: "#b79fad" },
      { name: "GraphQL", level: 70, color: "#2e6171" },
      { name: "REST APIs", level: 85, color: "#556f7a" }
    ],
    "Database & Tools": [
      { name: "PostgreSQL", level: 80, color: "#798086" },
      { name: "MongoDB", level: 75, color: "#b79fad" },
      { name: "Git", level: 90, color: "#2e6171" },
      { name: "Docker", level: 70, color: "#556f7a" },
      { name: "AWS", level: 65, color: "#798086" }
    ]
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f5f7' }}>
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#2e6171' }}>
            My Technical Skills
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: '#556f7a' }}>
            A showcase of the technologies and tools I use to bring ideas to life
          </p>
        </div>
      </section>

      {/* Sliding Skills Bar */}
      <section className="py-8 overflow-hidden">
        <div className="relative">
          {/* First sliding row */}
          <div className="flex animate-slide-right space-x-8 mb-6">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`slide1-${index}`}
                className="flex-shrink-0 bg-white rounded-xl p-4 shadow-lg border-2 min-w-[120px] text-center transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'rgba(183, 159, 173, 0.3)' }}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="font-semibold text-sm" style={{ color: '#2e6171' }}>
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
                className="flex-shrink-0 bg-white rounded-xl p-4 shadow-lg border-2 min-w-[120px] text-center transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'rgba(212, 175, 205, 0.3)' }}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="font-semibold text-sm" style={{ color: '#556f7a' }}>
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2e6171' }}>
            Proficiency Levels
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#2e6171' }}>
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium" style={{ color: '#556f7a' }}>
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold" style={{ color: '#798086' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000 ease-out animate-fill-bar"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
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

      {/* Additional Skills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2e6171' }}>
            Beyond Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(183, 159, 173, 0.1)' }}>
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2e6171' }}>
                Culinary Expertise
              </h3>
              <p style={{ color: '#556f7a' }}>
                Professional chef training brings precision, creativity, and ability to work under pressure
              </p>
            </div>
            
            <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(212, 175, 205, 0.1)' }}>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2e6171' }}>
                International Experience
              </h3>
              <p style={{ color: '#556f7a' }}>
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