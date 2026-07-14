/**
 * PERSONAL INFORMATION CONSTANTS
 * 
 * Centralized storage for personal details used across the application.
 * This eliminates hardcoded values scattered throughout components and
 * makes it easy to update information in one place.
 */

export const PERSONAL_INFO = {
  name: "Cian O'Rourke",
  title: "Full Stack Developer",
  email: "cian.orourke@gmail.com",
  linkedin: "https://www.linkedin.com/in/cian-o-rourke-8ba03a14a/",
  github: "https://github.com/COR1999",

  // Site metadata
  siteTitle: "Cian O'Rourke - Full Stack Developer",
  siteDescription: "Portfolio of Cian O'Rourke, Full Stack Developer with culinary background",
  
  // Professional details
  currentRole: "Full Stack Software Developer & Team Lead at Babylon",
  specialization: "TypeScript | JavaScript | React | Next.js | Tailwind CSS | Firebase | Python | Django | Flask",
  introduction: "Full Stack Software Developer and team lead at Babylon, skilled in Python, JavaScript, React, and Next.js,"
    + " with project experience spanning AI-integrated applications and a background in culinary arts. Passionate about mentoring developers and building efficient, user-friendly applications.",
  
  // Quick stats for homepage
  stats: {
    technologies: "5+",
    countries: "3+", 
    passion: "∞"
  }
} as const;