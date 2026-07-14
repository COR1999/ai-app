export interface Project {
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
  videoLink?: string;
  status: 'completed' | 'in-progress' | 'planning' | 'production';
  featured?: boolean;
  isCurrentProject?: boolean;
  showDetails?: boolean;
}