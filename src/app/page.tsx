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
        description="I am a Systems and Computing Engineer with experience in full-stack web development.
                  I build solutions with React/Next.js, ASP.NET Core, and SQL Server, integrating services and
                  consistent data models. Experienced in healthcare products such as UTA (Ambulance
                  Transfer Unit) for Clínica General del Norte and CuidarMe (Bienestar IPS). Recognized for
                  problem-solving, fast learning, and embracing new challenges as opportunities to improve,
                  acquire skills, and deliver high-value solutions."
        location="Barranquilla, Atlántico, Colombia"
        education="Universidad del Norte (2020 - 2024)"
      />

      <ProjectsSection />

      <SkillsSection />

      <ContactSection />
    </main>
  );
}
