/**
 * PROJECTS PAGE COMPONENT
 * 
 * Refactored to use smaller, reusable components:
 * - ProjectCard: Individual project display cards
 * - ProjectModal: Detailed project information modal
 * - useModal: Custom hook for modal state management
 * - Projects data moved to constants file for better organization
 */

"use client";

import React, { useState } from 'react';
import { Project } from '@/types/project';
import { projects } from '@/constants/projects';
import { useModal } from '@/hooks/useModal';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsPage() {
  const [sortBy, setSortBy] = useState<'default' | 'status'>('status');
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
      {/* Now using reusable ProjectCard components instead of inline JSX */}
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
      {/* Now using dedicated ProjectModal component with useModal hook */}
      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>
  );
}