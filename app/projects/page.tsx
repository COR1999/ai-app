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
}

const ProjectCard: React.FC<{ 
  project: Project; 
  isHovered: boolean;
  onHover: (id: number | null) => void;
  hoveredProjectId: number | null;
}> = ({ project, isHovered, onHover, hoveredProjectId }) => {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return { backgroundColor: 'rgba(183, 159, 173, 0.2)', color: '#2e6171' };
      case 'in-progress':
        return { backgroundColor: 'rgba(212, 175, 205, 0.2)', color: '#556f7a' };
      case 'planning':
        return { backgroundColor: 'rgba(121, 128, 134, 0.2)', color: '#798086' };
      default:
        return { backgroundColor: 'rgba(183, 159, 173, 0.2)', color: '#2e6171' };
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planning':
        return 'Planning';
      default:
        return 'Unknown';
    }
  };

  const isOtherCardHovered = hoveredProjectId !== null && hoveredProjectId !== project.id;

  return (
    <div 
      className="relative group"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Main Project Card */}
      <div className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${
        isHovered 
          ? 'scale-105 shadow-2xl z-10' 
          : isOtherCardHovered 
            ? 'scale-95 opacity-40 blur-sm bg-gray-100' 
            : 'hover:scale-102 hover:shadow-xl'
      }`}>
        <div className={`h-24 sm:h-28 md:h-32 overflow-hidden bg-gray-200 relative ${
          isOtherCardHovered ? 'grayscale brightness-75' : ''
        }`}>
          {project.image.startsWith('http') ? (
            // External image - use regular img tag
            <img
              src={project.image}
              alt={project.imageAlt}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isHovered ? 'scale-110' : 'hover:scale-105'
              }`}
            />
          ) : (
            // Local image - use Next.js Image
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className={`object-cover transition-all duration-500 ${
                isHovered ? 'scale-110' : 'hover:scale-105'
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="p-2 sm:p-3 md:p-4">
          <div className="flex justify-between items-start mb-1.5">
            <h3 className={`text-base sm:text-lg font-bold transition-colors duration-500 ${
              isOtherCardHovered ? 'text-gray-400' : ''
            }`} style={{ color: isOtherCardHovered ? '#798086' : '#2e6171' }}>
              {project.title}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
              isOtherCardHovered 
                ? 'bg-gray-200 text-gray-500' 
                : ''
            }`} style={isOtherCardHovered ? {} : {
              backgroundColor: getStatusColor(project.status).backgroundColor,
              color: getStatusColor(project.status).color
            }}>
              {getStatusText(project.status)}
            </span>
          </div>
          <p className={`mb-2 sm:mb-3 text-xs sm:text-sm transition-colors duration-500 ${
            isOtherCardHovered ? 'text-gray-400' : ''
          }`} style={{ color: isOtherCardHovered ? '#798086' : '#556f7a' }}>
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className={`px-1.5 py-0.5 rounded text-xs transition-all duration-500`}
                style={isOtherCardHovered 
                  ? { backgroundColor: '#f3f4f6', color: '#6b7280' }
                  : { backgroundColor: 'rgba(183, 159, 173, 0.2)', color: '#2e6171' }
                }>
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className={`px-1.5 py-0.5 rounded text-xs transition-all duration-500`}
                style={isOtherCardHovered 
                  ? { backgroundColor: '#f3f4f6', color: '#6b7280' }
                  : { backgroundColor: 'rgba(121, 128, 134, 0.2)', color: '#798086' }
                }>
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover Dropdown */}
      <div className={`absolute top-full left-0 right-0 z-50 mt-2 transform transition-all duration-500 ${
        isHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-2 sm:p-3 mx-2 max-w-xs sm:max-w-sm mx-auto">
          {/* Arrow pointing up */}
          <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-200"></div>
          
          <h4 className="text-xs sm:text-sm font-bold mb-1.5" style={{ color: '#2e6171' }}>Quick Overview</h4>
          
          {/* Compact description */}
          <p className="text-xs leading-relaxed mb-2" style={{ color: '#556f7a' }}>
            {project.fullDescription.slice(0, 120)}...
          </p>
          
          {/* Top 3 Features */}
          <div className="mb-2">
            <h5 className="font-semibold mb-1 text-xs" style={{ color: '#2e6171' }}>Key Features:</h5>
            <ul className="text-xs space-y-0.5" style={{ color: '#798086' }}>
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-1">•</span>
                  <span>{feature.slice(0, 35)}{feature.length > 35 ? '...' : ''}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Top Technologies */}
          <div className="mb-2">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="px-1.5 py-0.5 rounded text-xs"
                  style={{ 
                    backgroundColor: 'rgba(183, 159, 173, 0.15)', 
                    color: '#2e6171'
                  }}>
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs" style={{ color: '#b79fad' }}>
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
          
          {/* Compact Action Buttons */}
          <div className="flex gap-2">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-white px-2 py-1 rounded text-center font-medium transition-all duration-300 text-xs"
                style={{
                  background: 'linear-gradient(135deg, #2e6171, #556f7a)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1f4a56, #445862)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #2e6171, #556f7a)';
                }}
              >
                Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-2 py-1 rounded text-center font-medium transition-all duration-300 border text-xs"
                style={{ 
                  borderColor: '#d4afcd', 
                  color: '#556f7a' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 205, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const handleProjectHover = (projectId: number | null) => {
    setHoveredProjectId(projectId);
  };
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription: "Full-stack e-commerce solution with payment integration",
      fullDescription: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, secure payment processing, order management, and admin dashboard. The application uses server-side rendering for optimal performance and SEO.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Stripe payment integration",
        "Order tracking and history",
        "Admin dashboard for inventory management"
      ],
      image: "https://picsum.photos/600/400?random=1",
      imageAlt: "E-commerce platform screenshot showing product catalog and shopping interface",
      status: "completed",
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/yourusername/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      shortDescription: "Collaborative project management tool with real-time updates",
      fullDescription: "A powerful task management application designed for teams. Built with real-time collaboration features, drag-and-drop functionality, and comprehensive project tracking. Users can create projects, assign tasks, set deadlines, and monitor progress in real-time.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
      features: [
        "Real-time collaboration",
        "Drag-and-drop task management",
        "Team member assignment",
        "Progress tracking and analytics",
        "File attachments and comments",
        "Email notifications"
      ],
      image: "https://picsum.photos/600/400?random=2",
      imageAlt: "Task management dashboard showing project boards and task organization",
      status: "completed",
      demoLink: "https://tasks.example.com",
      githubLink: "https://github.com/yourusername/taskmanager"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      shortDescription: "Beautiful weather app with location-based forecasts",
      fullDescription: "An elegant weather dashboard that provides detailed weather information and forecasts. Features location-based weather detection, interactive maps, weather alerts, and beautiful data visualizations. Built with responsive design for optimal mobile experience.",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Styled Components"],
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Interactive weather maps",
        "Location-based detection",
        "Weather alerts and notifications",
        "Historical weather data"
      ],
      image: "https://picsum.photos/600/400?random=3",
      imageAlt: "Weather dashboard showing current conditions and 7-day forecast",
      status: "completed",
      demoLink: "https://weather.example.com",
      githubLink: "https://github.com/yourusername/weather"
    },
    {
      id: 4,
      title: "Portfolio Website",
      shortDescription: "Personal portfolio built with Next.js and Tailwind CSS",
      fullDescription: "This very portfolio website you're viewing! Built with modern web technologies focusing on performance, accessibility, and beautiful design. Features smooth animations, responsive design, and optimized for search engines.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      features: [
        "Responsive design",
        "Smooth animations",
        "SEO optimized",
        "Fast loading times",
        "Contact form integration",
        "Blog functionality"
      ],
      image: "https://picsum.photos/600/400?random=4",
      imageAlt: "Portfolio website homepage with professional design and navigation",
      status: "in-progress",
      githubLink: "https://github.com/yourusername/portfolio"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      shortDescription: "Analytics dashboard for social media performance tracking",
      fullDescription: "A comprehensive analytics platform for tracking social media performance across multiple platforms. Provides detailed insights, engagement metrics, audience demographics, and content performance analysis with beautiful data visualizations.",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "D3.js", "Redis"],
      features: [
        "Multi-platform integration",
        "Real-time analytics",
        "Custom report generation",
        "Audience insights",
        "Content performance tracking",
        "Automated reporting"
      ],
      image: "https://picsum.photos/600/400?random=5",
      imageAlt: "Social media analytics dashboard with charts and performance metrics",
      status: "planning",
      githubLink: "https://github.com/yourusername/analytics"
    },
    {
      id: 6,
      title: "Recipe Sharing Platform",
      shortDescription: "Community-driven platform for sharing and discovering recipes",
      fullDescription: "A vibrant community platform where food enthusiasts can share recipes, rate dishes, and discover new culinary experiences. Features user profiles, recipe collections, meal planning, and social interactions around food.",
      technologies: ["React Native", "Firebase", "Node.js", "GraphQL", "AWS S3"],
      features: [
        "Recipe sharing and discovery",
        "User ratings and reviews",
        "Meal planning tools",
        "Shopping list generation",
        "Social following system",
        "Photo sharing"
      ],
      image: "https://picsum.photos/600/400?random=6",
      imageAlt: "Recipe sharing platform showing recipe cards and community features",
      status: "in-progress",
      demoLink: "https://recipes.example.com",
      githubLink: "https://github.com/yourusername/recipes"
    }
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 relative" style={{ backgroundColor: '#f8f5f7' }}>
      {/* Background overlay when hovering */}
      <div className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 pointer-events-none ${
        hoveredProjectId !== null ? 'opacity-10' : 'opacity-0'
      }`}></div>
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#2e6171' }}>My Projects</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-2" style={{ color: '#556f7a' }}>
            Here are some of the projects I've worked on. Hover over each card to see more details!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isHovered={hoveredProjectId === project.id}
              onHover={handleProjectHover}
              hoveredProjectId={hoveredProjectId}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <p className="mb-4" style={{ color: '#798086' }}>
            Want to see more projects or collaborate on something new?
          </p>
          <a
            href="/contact"
            className="inline-block text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            style={{
              background: 'linear-gradient(135deg, #2e6171, #556f7a)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #1f4a56, #445862)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #2e6171, #556f7a)';
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}