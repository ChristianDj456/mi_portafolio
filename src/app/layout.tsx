import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cristian Chavez',
  description: 'Portafolio personal web de Cristian Chavez, desarrollador web full stack con experiencia en React, Next.js y Node.js.',
  icons: {
    icon: '/icons8-trifuerza-stickers-96.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {/* <header className="bg-transparent shadow-md py-4 px-8 sticky top-0 z-10">
        <nav className="flex justify-between items-center max-w-5xl mx-auto">
          <ul className="text-white flex gap-6 text-gray-700 font-medium">
            <li><a href="#inicio" className="transition-all px-3 py-1 rounded-md hover:scale-105 hover:outline hover:outline-2 hover:outline-blue-500">Home</a></li>
            <li><a href="#sobre-mi" className="transition-all px-3 py-1 rounded-md hover:scale-105 hover:outline hover:outline-2 hover:outline-blue-500">About me</a></li>
            <li><a href="#proyectos" className="transition-all px-3 py-1 rounded-md hover:scale-105 hover:outline hover:outline-2 hover:outline-blue-500">Proyects</a></li>
            <li><a href="#skills" className="transition-all px-3 py-1 rounded-md hover:scale-105 hover:outline hover:outline-2 hover:outline-blue-500">Skills</a></li>
            <li><a href="#contacto" className="transition-all px-3 py-1 rounded-md hover:scale-105 hover:outline hover:outline-2 hover:outline-blue-500">Contact</a></li>
          </ul>
        </nav>
        </header> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html >
  );
}
