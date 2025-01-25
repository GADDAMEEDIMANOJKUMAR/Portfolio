const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-gray-600">
              Hello! I'm a full-stack developer with a passion for creating beautiful and functional web applications. 
              With a strong foundation in modern web technologies, I specialize in building responsive and user-friendly 
              interfaces that deliver exceptional user experiences.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">B.S. in Computer Science</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">New York, USA</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600">2+ Years</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Projects</h4>
                  <p className="text-gray-600">15+ Completed</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;