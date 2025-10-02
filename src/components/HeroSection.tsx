'use client';
// import { motion } from 'framer-motion';
import { motion } from "motion/react"
// import ParticlesBackground from './ParticlesBackground';
import { Typewriter } from 'react-simple-typewriter';
import AnimatedSection from './AnimatedSection';


interface HeroSectionProps {
  name: string;
  lastname?: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
}

export default function HeroSection({
  name,
  lastname,
  title,
  description,
  buttonLabel,
  buttonLink,
}: HeroSectionProps) {
  return (
    <AnimatedSection
      id="home"
      className="relative overflow-hidden flex min-h-screen flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white z-0"
    >

      {/* <ParticlesBackground /> */}

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="autoPlay"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      >
        <source src="videos/HeroSectionVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0, rotate: -360 }}
        transition={{ duration: 1.5 }}
        className="text-6xl sm:text-7xl font-extrabold text-blue-500 mb-4 z-20 mr-70">
        {name}
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0, rotate: 360 }}
        transition={{ duration: 1.5 }}
        className="text-6xl sm:text-7xl font-extrabold text-blue-500 mb-4 z-20 ml-70">
        {lastname}
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-3xl font-semibold text-blue-200 mb-6 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typewriter
          words={[
            title,
          ]}
          loop={1} // 0 = infinito
          cursor
          cursorStyle="👾"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1500}
          cursorBlinking={true}
        />
      </motion.h2>

      <motion.p
        className="max-w-xl text-blue-100 text-lg sm:text-xl mb-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {description}
      </motion.p>

      <motion.a
        href={buttonLink}
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {buttonLabel}
      </motion.a>
    </AnimatedSection>
  );
}
