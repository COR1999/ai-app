import type { Metadata } from 'next';
import ProjectsBrowser from '@/components/ProjectsBrowser';

export const metadata: Metadata = {
  title: "Projects | Cian O'Rourke",
  description:
    "Production client work, AI-integrated applications, and full-stack projects by Cian O'Rourke — Next.js, TypeScript, Python, and more.",
};

export default function ProjectsPage() {
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

      {/* SORT CONTROLS + GRID + MODAL (client-side interactivity) */}
      <ProjectsBrowser />
    </div>
  );
}
