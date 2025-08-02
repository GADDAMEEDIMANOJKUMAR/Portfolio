import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone,
  Filter,
  FileCode,
  Paintbrush,
  Zap,
  Component,
  FileText,
  Database as DatabaseIcon
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools';
  icon: React.ReactNode;
  description: string;
}

const skills: Skill[] = [
  {
    name: "HTML5",
    level: 95,
    category: "Frontend",
    icon: <FileCode className="h-6 w-6" />,
    description: "Semantic markup and modern HTML5 features"
  },
  {
    name: "CSS3",
    level: 90,
    category: "Frontend", 
    icon: <Paintbrush className="h-6 w-6" />,
    description: "Advanced styling, animations, and responsive design"
  },
  {
    name: "JavaScript",
    level: 75,
    category: "Frontend",
    icon: <Zap className="h-6 w-6" />,
    description: "ES6+, DOM manipulation, and modern JS concepts"
  },
  {
    name: "React.js",
    level: 80,
    category: "Frontend",
    icon: <Component className="h-6 w-6" />,
    description: "Component-based architecture and modern React patterns"
  },
  {
    name: "Python",
    level: 75,
    category: "Backend",
    icon: <FileText className="h-6 w-6" />,
    description: "Backend development and data processing"
  },
  {
    name: "SQL",
    level: 70,
    category: "Backend",
    icon: <DatabaseIcon className="h-6 w-6" />,
    description: "Database design and query optimization"
  }
];

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const categories = ['All', 'Frontend', 'Backend', 'Tools'];
  
  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Skills & Expertise
          </h2>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm font-medium transition-smooth ${
                activeFilter === category 
                  ? 'shadow-glow' 
                  : 'hover:shadow-card'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Badge>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="p-6 shadow-card hover:shadow-glow transition-smooth hover:scale-105 animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-primary mr-3 group-hover:scale-110 transition-smooth">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="relative">
                    <span className="text-2xl font-bold text-gradient">{skill.level}%</span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Proficiency</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{skill.level}% Complete</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-3 mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills Overview */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2">Clean Code</h4>
              <p className="text-sm text-muted-foreground">Writing maintainable, readable code</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Palette className="h-12 w-12 text-accent mb-4" />
              <h4 className="font-semibold mb-2">UI/UX Design</h4>
              <p className="text-sm text-muted-foreground">Creating beautiful interfaces</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Smartphone className="h-12 w-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2">Responsive</h4>
              <p className="text-sm text-muted-foreground">Mobile-first development</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Database className="h-12 w-12 text-accent mb-4" />
              <h4 className="font-semibold mb-2">Performance</h4>
              <p className="text-sm text-muted-foreground">Optimized user experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};