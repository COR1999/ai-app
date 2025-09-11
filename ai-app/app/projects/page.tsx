"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  imageAlt: string;
  demoLink?: string;
  githubLink?: string;
  status: 'completed' | 'in-progress' | 'planning' | 'production';
  featured?: boolean;
  isCurrentProject?: boolean;
  showDetails?: boolean;
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sortBy, setSortBy] = useState<'default' | 'status'>('status');

  const projects: Project[] = [
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
      status: "in-progress",
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
      technologies: ["HTML5", "CSS3", "Bootstrap", "jQuery", "DataTables", "Font Awesome", "LastFM API"],
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
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Highcharts", "Vite", "Playwright", "Vercel", "ESLint"],
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
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'production': return 'bg-secondary/20 text-secondary';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planning': return 'Planning';
      case 'production': return 'Production';
      default: return 'Unknown';
    }
  };

  const getSortedProjects = () => {
    if (sortBy === 'status') {
      return [...projects].sort((a, b) => {
        const statusOrder = {
          'in-progress': 0,
          'planning': 1,
          'production': 2,
          'completed': 3
        };
        return statusOrder[a.status as keyof typeof statusOrder] - statusOrder[b.status as keyof typeof statusOrder];
      });
    }
    return projects;
  };


  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Projects</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A showcase of my technical work and creative solutions
            </p>
          </div>
        </div>
      </section>

      {/* SORT CONTROLS */}
      <section className="py-6 border-b bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-text-primary">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as 'default' | 'status')}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="status">Status (In Progress First)</option>
                <option value="default">Default Order</option>
              </select>
            </div>
            <div className="text-sm text-text-secondary">
              {getSortedProjects().length} projects total
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getSortedProjects().map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer group relative ${
                  project.isCurrentProject ? 'opacity-60' : ''
                }`}
                onClick={() => !project.isCurrentProject && project.showDetails !== false && setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.featured && '⭐ '}
                      {getStatusText(project.status)}
                    </span>
                  </div>

                  {/* Viewing Overlay for Current Project */}
                  {project.isCurrentProject && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                        <span className="text-primary font-semibold text-lg">Viewing</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-neutral/20 text-primary text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-neutral/20 text-primary text-xs rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between">
                    {project.showDetails !== false && (
                      <button className="text-secondary font-medium text-sm hover:text-secondary-dark transition-colors">
                        View Details →
                      </button>
                    )}
                    <div className="flex gap-2">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-neutral hover:text-secondary transition-colors"
                          title="View Demo"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-neutral hover:text-secondary transition-colors"
                          title="View Code"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Header with Close Button */}
            <div className="sticky top-0 bg-white z-10 border-b border-gray-100 p-6 md:p-8 pb-4">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{selectedProject.title}</h3>
                  <span className={`px-3 py-1 rounded-md text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.featured && '⭐ '}
                    {getStatusText(selectedProject.status)}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-neutral hover:text-primary transition-colors text-2xl p-1 bg-gray-50 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="p-6 md:p-8 pt-4">

              {/* Project Image */}
              <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-gray-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  width={800}
                  height={450}
                  className="object-contain w-full h-full"
                  quality={90}
                  priority
                />
              </div>

              {/* Project Description */}
              <p className="text-lg text-text-primary mb-6 leading-relaxed">{selectedProject.fullDescription}</p>

              {/* Technologies and Features */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/20 text-primary rounded-md text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-3 mt-1 text-sm">•</span>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all"
                  >
                    View Code
                  </a>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}