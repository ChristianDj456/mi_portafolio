import AnimatedSection from "./AnimatedSection";

interface AboutSectionProps {
    title: string;
    description: string;
    location: string;
    education: string;
  }
  
  export default function AboutSection({
    title,
    description,
    location,
    education,
  }: AboutSectionProps) {
    return (
      <AnimatedSection id="about-me" className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">{title}</h2>
        <p className="max-w-2xl text-gray-700 text-lg mb-8">{description}</p>
  
        <div className="flex flex-row gap-4 text-gray-600">
          <div>📍 {location}</div>
          <div>🎓 {education}</div>
        </div>
      </AnimatedSection>
    );
  }
  