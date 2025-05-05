'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import RotatingLogo from './RotatingLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled ? 'bg-blue-950/90 shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        <div className="transition-transform hover:scale-110">
          <RotatingLogo />
        </div>
        <ul className="flex gap-6 text-sm sm:text-base font-medium">
          {['Home', 'About me', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="transition-all px-3 py-1 rounded-md hover:scale-105 hover:outline hover:outline-2 hover:outline-blue-500"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
