import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

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
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header with Close Button */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100 p-6 md:p-8 pb-4">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{project.title}</h3>
              <span className={`px-3 py-1 rounded-md text-sm font-medium ${getStatusColor(project.status)}`}>
                {project.featured && '⭐ '}
                {getStatusText(project.status)}
              </span>
            </div>
            <button
              onClick={onClose}
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
                src={project.image}
                alt={project.imageAlt}
                width={800}
                height={450}
                className="object-contain w-full h-full"
                quality={90}
                priority
              />
            </div>

            {/* Project Description */}
            <p className="text-lg text-text-primary mb-6 leading-relaxed">{project.fullDescription}</p>

            {/* Technologies and Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent/20 text-primary rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
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
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
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
  );
};

export default ProjectModal;