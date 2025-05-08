'use client';
import { useState } from 'react';
import Image from 'next/image';

const logos = ['/icons8-trifuerza-stickers-96.png', '/icons8-nintendo-gamecube-duo-96.png']; // Asegúrate que estén en public/

export default function RotatingLogo() {
  const [index, setIndex] = useState(0);

  const handleHover = () => {
    setIndex((prev) => (prev + 1) % logos.length);
  };

  return (
    <div
      className="w-10 h-10 cursor-pointer transition-transform hover:scale-210 hover:rotate-20"
      onMouseEnter={handleHover}
    >
      <Image
        src={logos[index]}
        alt="Logo dinámico"
        width={96}
        height={96}
        className="w-full h-full object-contain transition-all duration-300 ease-in-out"
      />
    </div>
  );
}
