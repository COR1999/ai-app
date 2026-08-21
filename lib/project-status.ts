import { Project } from '@/types/project';

export const STATUS_STYLES: Record<Project['status'], string> = {
  completed: 'bg-green-100 text-green-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  planning: 'bg-blue-100 text-blue-800',
  production: 'bg-secondary/20 text-secondary',
};

export const STATUS_LABELS: Record<Project['status'], string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planning: 'Planning',
  production: 'Production',
};
