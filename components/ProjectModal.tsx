'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';
import { STATUS_LABELS, STATUS_STYLES } from '@/lib/project-status';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header with Close Button */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100 p-6 md:p-8 pb-4">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <h3 id="project-modal-title" className="text-2xl md:text-3xl font-bold text-primary mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-md text-sm font-medium ${STATUS_STYLES[project.status]}`}>
                  {project.featured && '⭐ '}
                  {STATUS_LABELS[project.status]}
                </span>
                {project.clientProject && (
                  <span className="px-3 py-1 rounded-md text-sm font-medium bg-primary/90 text-white">
                    Client Project
                  </span>
                )}
                {project.interviewProject && (
                  <span className="px-3 py-1 rounded-md text-sm font-medium bg-secondary/90 text-white">
                    Interview Project
                  </span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
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
              {project.videoLink && (
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all"
                >
                  Watch Demo Video
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
