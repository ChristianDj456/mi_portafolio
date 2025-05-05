'use client';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: { opacity: 0.5 },
            },
          },
        },
        particles: {
          color: { value: '#38bdf8' }, // celeste claro (Tailwind blue-400)
          links: {
            color: '#38bdf8',
            distance: 130,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5, // más suave
            direction: 'bottom',
            outModes: { default: 'out' },
          },
          number: {
            value: 50, // menos partículas (ajustable)
            density: { enable: true, area: 500 },
          },
          opacity: { value: 0.4 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full z-10"
    />
  );

}
