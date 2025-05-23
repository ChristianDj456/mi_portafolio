'use client'
import SkillBar from './SkillBar';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGithub,
} from 'react-icons/si';
import AnimatedSection from './AnimatedSection';

const skills = [
  { skill: 'JavaScript', level: 80, icon: SiJavascript },
  { skill: 'TypeScript', level: 75, icon: SiTypescript },
  { skill: 'Python', level: 85, icon: SiPython },
  { skill: 'React', level: 80, icon: SiReact },
  { skill: 'Next.js', level: 70, icon: SiNextdotjs },
  { skill: 'Node.js', level: 75, icon: SiNodedotjs },
  { skill: 'MongoDB', level: 70, icon: SiMongodb },
  { skill: 'SQL', level: 65, icon: SiMysql },
  { skill: 'Tailwind CSS', level: 80, icon: SiTailwindcss },
  { skill: 'Git / GitHub', level: 90, icon: SiGithub },
];

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="min-h-screen px-4 py-20 bg-gray-50 text-center scroll-mt-24">
      <h2 className="text-4xl font-bold text-blue-900 mb-10">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((s, i) => (
          <SkillBar key={i} skill={s.skill} level={s.level} icon={s.icon} />
        ))}
      </div>
    </AnimatedSection>
  );
}
