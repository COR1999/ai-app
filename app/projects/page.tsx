/**
 * PROJECTS PAGE COMPONENT
 * 
 * Modern asymmetric design featuring:
 * - Staggered card layout with varying heights
 * - Featured project showcase
 * - Horizontal scrolling technology tags
 * - Side-by-side project details
 * - Minimalist design with better visual hierarchy
 */

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
  status: 'completed' | 'in-progress' | 'planning';
  featured?: boolean;
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
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
      demoLink: "https://covid-cases-platform.herokuapp.com",
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
      imageAlt: "One Byte of a Baker's Dozen Recipe App Screenshot",
      githubLink: "https://github.com/COR1999/one-byte-of-a-bakers-dozen",
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planning': return 'Planning';
      default: return 'Unknown';
    }
  };

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background-secondary">
      
      {/* HERO SECTION - Clean and minimal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6">Featured Work</h1>
            <p className="text-xl text-text-primary max-w-3xl mx-auto">
              A collection of projects that showcase my technical skills, creativity, 
              and passion for building exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT SECTION - Large showcase */}
      {featuredProject && (
        <section className="py-20 bg-gradient-to-br from-background-secondary to-accent/10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Project Image */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-neutral/20">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                
                {/* Floating status badge */}
                <div className="absolute -top-4 -right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(featuredProject.status)}`}>
                    ⭐ Featured • {getStatusText(featuredProject.status)}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-primary mb-4">{featuredProject.title}</h2>
                  <p className="text-xl text-text-primary leading-relaxed mb-6">
                    {featuredProject.fullDescription}
                  </p>
                </div>

                {/* Technology Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {featuredProject.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {featuredProject.demoLink && (
                    <a
                      href={featuredProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      View Live Demo
                    </a>
                  )}
                  {featuredProject.githubLink && (
                    <a
                      href={featuredProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* OTHER PROJECTS SECTION - Masonry-style layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Other Projects</h2>
          
          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
            {regularProjects.map((project, index) => (
              <div
                key={project.id}
                className={`break-inside-avoid bg-white rounded-2xl shadow-lg border border-neutral/10 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index % 3 === 0 ? 'h-96' : index % 3 === 1 ? 'h-80' : 'h-88'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className={`hover:scale-105 transition-transform duration-500 ${
                      project.id === 5 ? 'object-contain' : 'object-contain'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    priority={project.id === 5}
                    quality={90}
                    unoptimized={project.id === 5}
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-neutral/10 text-neutral text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-neutral/10 text-neutral text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View More Link */}
                  <button className="text-secondary font-medium text-sm hover:text-secondary-dark transition-colors">
                    View Details →
                  </button>
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
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{selectedProject.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                    {getStatusText(selectedProject.status)}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-text-secondary hover:text-primary transition-colors text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Project Image */}
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gray-50">
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
              <p className="text-lg text-text-primary mb-6">{selectedProject.fullDescription}</p>

              {/* Technologies and Features */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
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
                        <span className="text-secondary mr-2">•</span>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}