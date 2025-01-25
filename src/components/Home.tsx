import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">Manoj Kumar</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A passionate Full Stack Developer specializing in building exceptional digital experiences
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Hire Me <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-full text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            View Projects
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;