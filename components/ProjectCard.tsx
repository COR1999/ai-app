import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
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

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer group relative ${
        project.isCurrentProject ? 'opacity-60' : ''
      }`}
      onClick={() => !project.isCurrentProject && project.showDetails !== false && onViewDetails(project)}
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
  );
};

export default ProjectCard;