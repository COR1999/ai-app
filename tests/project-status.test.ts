import { describe, it, expect } from 'vitest';
import { STATUS_STYLES, STATUS_LABELS } from '@/lib/project-status';
import type { Project } from '@/types/project';

describe('Project status utilities', () => {
  const validStatuses: Project['status'][] = [
    'completed',
    'in-progress',
    'planning',
    'production',
  ];

  it('has a style for every status', () => {
    for (const status of validStatuses) {
      expect(STATUS_STYLES[status]).toBeDefined();
      expect(typeof STATUS_STYLES[status]).toBe('string');
    }
  });

  it('has a label for every status', () => {
    for (const status of validStatuses) {
      expect(STATUS_LABELS[status]).toBeDefined();
      expect(typeof STATUS_LABELS[status]).toBe('string');
    }
  });

  it('labels are human-readable', () => {
    expect(STATUS_LABELS['completed']).toBe('Completed');
    expect(STATUS_LABELS['in-progress']).toBe('In Progress');
    expect(STATUS_LABELS['planning']).toBe('Planning');
    expect(STATUS_LABELS['production']).toBe('Production');
  });

  it('styles contain Tailwind classes', () => {
    for (const status of validStatuses) {
      expect(STATUS_STYLES[status]).toContain('bg-');
      expect(STATUS_STYLES[status]).toContain('text-');
    }
  });
});
