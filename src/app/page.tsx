'use client';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SkillsSection from '@/components/SkillsSection';

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      
      <HeroSection
        name="Cristian"
        lastname="Chavez"
        title="Systems Engineer | Web Developer"
        description="Passionate about developing web solutions, data analysis and learning new technologies. I seek to create impactful digital experiences that connect with people."
        buttonLabel="Contact Me"
        buttonLink="#contacto"
      />

      <AboutSection
        title="About Me"
        description="I am a Systems Engineer graduated from Universidad del Norte. I have experience in Frontend and Backend development, and a strong interest in Artificial Intelligence. I am a fast learner, team player and always looking for the best solution to every challenge."
        location="Barranquilla, Atlántico, Colombia"
        education="Universidad del Norte (2020 - 2024)"
      />

      <ProjectsSection />

      <SkillsSection />

      <ContactSection />
    </main>
  );
}
