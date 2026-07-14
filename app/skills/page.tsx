"use client";
import React from "react";
import CredlyBadge from "@/components/CredlyBadge";
import CertificateEmbed from "@/components/CertificateEmbed";


export default function SkillsPage() {
  // Kept in sync with the technologies actually used across shipped projects
  // (see constants/projects.ts) rather than a generic/aspirational list.
  const skills = [
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

    // AI & LLM
    { name: "Google Gemini", icon: "✨", category: "AI & LLM" },
    { name: "Mistral 7B", icon: "🧠", category: "AI & LLM" },
    { name: "Transformers", icon: "🤗", category: "AI & LLM" },
    { name: "Modal (serverless AI)", icon: "🧬", category: "AI & LLM" },
    { name: "PyMuPDF", icon: "📄", category: "AI & LLM" },

    // AI Tools
    { name: "Claude", icon: "🤖", category: "AI Tools" },
    { name: "GitHub Copilot", icon: "🧑‍💻", category: "AI Tools" },
    { name: "ChatGPT", icon: "💬", category: "AI Tools" },
    { name: "Codex", icon: "🛠️", category: "AI Tools" },

    // Database
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "SQLite", icon: "💽", category: "Database" },
    { name: "SQL", icon: "🗄️", category: "Database" },

    // Cloud & Deployment
    { name: "Vercel", icon: "▲", category: "Cloud" },
    { name: "Railway", icon: "🚂", category: "Cloud" },
    { name: "Heroku", icon: "💜", category: "Cloud" },
    { name: "AWS S3", icon: "☁️", category: "Cloud" },

    // Tools & Testing
    { name: "Git & GitHub", icon: "🐙", category: "Tools" },
    { name: "Figma", icon: "🖌️", category: "Tools" },
    { name: "Jira", icon: "📌", category: "Tools" },
    { name: "Google APIs", icon: "🔍", category: "Tools" },
    { name: "Playwright", icon: "🎭", category: "Tools" },
    { name: "ESLint", icon: "🧹", category: "Tools" },
    { name: "Stripe API", icon: "💳", category: "Tools" }
  ];

  // Primary stack: the technologies from the CV's own "Front-End/Back-End Development" lines,
  // called out separately so recruiters can see depth vs. breadth at a glance.
  const primarySkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python", "Django", "Firebase", "REST APIs"];

  const allSkills = skills.map(({ name, icon }) => ({ name, icon }));

  const categories = ["Frontend", "Backend", "AI & LLM", "AI Tools", "Database", "Cloud", "Tools"];

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

      {/* PRIMARY STACK - Depth signal: the handful of technologies used daily, called out from the full list */}
      <section className="py-10 bg-white border-b">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4 text-center">
            Primary Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {primarySkills.map((name) => {
              const skill = skills.find((s) => s.name === name);
              if (!skill) return null;
              return (
                <div
                  key={name}
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-medium text-sm shadow-sm"
                >
                  <span>{skill.icon}</span>
                  {skill.name}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-text-secondary text-center mt-4">
            Also marked with <span className="inline-block w-2 h-2 rounded-full bg-secondary align-middle"></span> throughout the full list below
          </p>
        </div>
      </section>

      {/* SKILLS GRID */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Category Sections */}
          <div className="space-y-8">
            {categories.map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category);
              return (
                <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-100 pb-2">
                    {category}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="relative flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        {primarySkills.includes(skill.name) && (
                          <span
                            className="absolute top-1 right-1 w-2 h-2 rounded-full bg-secondary"
                            title="Primary stack"
                          />
                        )}
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

          {/* ADDITIONAL EXPERIENCE */}
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-100 pb-2">
            Additional Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chef Experience */}
            <div className="flex items-start space-x-3">
              <div className="text-2xl">👨‍🍳</div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Award-Winning Kitchen Experience
                </h3>
                <p className="text-sm text-text-secondary">
                  Trained as chef in Dublin&apos;s award-winning restaurants Crudo and Achara (2021-2025). Managed kitchen teams...
                </p>
              </div>
            </div>

            {/* Software Development Diploma */}
            <div className="flex items-start space-x-3">
                <div className="text-2xl">🎓</div>
                <div className="w-full">
                  <h3 className="font-semibold text-primary mb-1">
                    Software Development Diploma
                  </h3>
                  <p className="text-sm text-text-secondary mb-2">
                    Code Institute / Full Stack Software Development Diploma (2019–2020). Also completed
                    Harvard University&apos;s CS50: Introduction to Computer Science (2019).
                  </p>
                  <h3 className="font-semibold text-primary mb-1">IBM SkillsBuild Certifications</h3>
                <p className="text-sm text-text-secondary mb-3">
                  Verified badges for completing industry-aligned courses.
                </p>
                </div>

              </div>
          </div>
          <div className="ml-full mt-4 flex flex-wrap gap-6">
              <CredlyBadge badgeId="9dee485d-517b-4482-9c3f-f0b5b941a5c9" />
              <CredlyBadge badgeId="2d29f4ba-bdd0-4d4a-ac4a-e5ec5ea3264a" />
              <CredlyBadge badgeId="5c295b3b-eda1-4276-82d3-6471c0822fb8" />
              <CertificateEmbed
                        imageUrl="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/26823684"
                        linkUrl="https://verify.accredible.com/26823684"
                        altText="Full Stack Software Development Certificate"
                        width={150}
                        height={270}
                      />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
