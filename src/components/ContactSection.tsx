import AnimatedSection from "./AnimatedSection";


export default function ContactSection() {
    return (
      <AnimatedSection id="contact" className="min-h-screen px-4 py-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Contact me</h2>
        <p className="text-gray-700 mb-10 max-w-xl mx-auto">
        If you wish to contact me, you can write me by mail or use the following form.
        </p>
  
        <div className="max-w-2xl mx-auto text-left space-y-4">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="How can I help you?"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send message
            </button>
          </form>
  
          <div className="mt-12 text-gray-600 text-sm text-center">
            📧 christiandj456@gmail.com | 📞 +57 310 4099 272 <br />
            📍 Barranquilla, Atlántico, Colombia
          </div>
        </div>
      </AnimatedSection>
    );
  }
  