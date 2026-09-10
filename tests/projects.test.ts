import { describe, it, expect } from 'vitest';
import { projects } from '@/constants/projects';
import type { Project } from '@/types/project';

describe('Project data integrity', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('every project has a valid status', () => {
    const validStatuses: Project['status'][] = [
      'completed',
      'in-progress',
      'planning',
      'production',
    ];
    for (const project of projects) {
      expect(validStatuses).toContain(project.status);
    }
  });

  it('every project has a unique id', () => {
    const ids = projects.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('every project has a non-empty title', () => {
    for (const project of projects) {
      expect(project.title.trim().length).toBeGreaterThan(0);
    }
  });

  it('every project has at least one technology', () => {
    for (const project of projects) {
      expect(project.technologies.length).toBeGreaterThan(0);
    }
  });

  it('every project has an image path starting with /', () => {
    for (const project of projects) {
      expect(project.image).toMatch(/^\//);
    }
  });

  it('featured projects have showDetails enabled', () => {
    const featured = projects.filter((p) => p.featured);
    for (const project of featured) {
      expect(project.showDetails).not.toBe(false);
    }
  });

  it('projects with links have valid URL formats', () => {
    for (const project of projects) {
      if (project.demoLink) {
        expect(project.demoLink).toMatch(/^https?:\/\//);
      }
      if (project.githubLink) {
        expect(project.githubLink).toMatch(/^https?:\/\//);
      }
      if (project.videoLink) {
        expect(project.videoLink).toMatch(/^https?:\/\//);
      }
    }
  });
});
