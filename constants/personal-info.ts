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
  currentRole: "Open for Work",
  specialization: "Python | JavaScript | React | Next.js | Django | Flask",
  introduction: "Entry-level Full-Stack Developer skilled in Python, JavaScript, and modern frameworks, with project experience"
    + " and a background in culinary arts. Passionate about creating efficient, user-friendly applications and eager to contribute to innovative tech teams.",
  
  // Quick stats for homepage
  stats: {
    technologies: "5+",
    countries: "3+", 
    passion: "∞"
  }
} as const;