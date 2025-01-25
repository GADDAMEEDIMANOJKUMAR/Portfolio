const skills = [
  { name: 'React.js', level: 80,
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 50 },
  { name: 'Node.js', level: 70 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Git', level: 80 },
  { name: 'MongoDB', level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Skills & Expertise</h2>
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Problem Solving', 'Team Collaboration', 'Clean Code', 'Agile Development'].map((skill) => (
            <div key={skill} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;