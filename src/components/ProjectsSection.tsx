'use client';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'CRM Development',
    description: 'Customer and opportunity management with dynamic forms, dashboards and indicators.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Material UI'],
  },
  {
    title: 'E-commerce Platform',
    description: 'Shopping cart design with shipping options and display in Render.',
    technologies: ['React', 'Render', 'TailwindCSS'],
  },
  {
    title: 'NIKKI AI Chatbot',
    description: 'Chatbot to understand and manage internal processes in sports stores.',
    technologies: ['Node.js', 'AI', 'JavaScript'],
  },
  {
    title: 'MesaFacil App',
    description: 'Mobile app for fast and efficient restaurant reservations.',
    technologies: ['Flutter', 'Firebase'],
  },
  {
    title: 'Backend E-commerce Books',
    description: 'Backend system to sell and buy used books with MongoDB.',
    technologies: ['Node.js', 'MongoDB', 'Express'],
  },
];

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="min-h-screen px-4 py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-10">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            delay={index * 0.1}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
