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
  currentRole: "Full Stack Developer",
  specialization: "Specializing in React, Next.js, and modern web technologies",
  introduction: "Full Stack Developer passionate about creating exceptional web experiences. Currently building innovative solutions with modern technologies and frameworks.",
  
  // Quick stats for homepage
  stats: {
    technologies: "5+",
    countries: "3+", 
    passion: "∞"
  }
} as const;