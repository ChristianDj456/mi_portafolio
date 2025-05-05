export default function Footer() {
    return (
      <footer className="bg-blue-950 text-white text-sm py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Cristian Chavez Sarmiento. Todos los derechos reservados.
          </p>
          <p className="mt-1 text-gray-300">Desarrollado con Next.js y TailwindCSS</p>
        </div>
      </footer>
    );
  }
  