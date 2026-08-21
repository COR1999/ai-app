'use client';

import { useState } from 'react';
import { Project } from '@/types/project';
import { projects } from '@/constants/projects';
import { useModal } from '@/hooks/useModal';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsBrowser() {
  const [sortBy, setSortBy] = useState<'default' | 'status'>('default');
  const { isOpen, data: selectedProject, openModal, closeModal } = useModal<Project>();

  /**
   * SORTING LOGIC
   * Sorts projects by status with in-progress items first
   */
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
    <>
      {/* SORT CONTROLS */}
      <section className="py-6 border-b bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="project-sort" className="text-sm font-medium text-text-primary">Sort by:</label>
              <select
                id="project-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'default' | 'status')}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="default">Default Order</option>
                <option value="status">Status (In Progress First)</option>
              </select>
            </div>
            <div className="text-sm text-text-secondary" aria-live="polite">
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
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
  );
}
