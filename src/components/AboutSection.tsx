import { Download, Award, Code, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileImg from "@/assets/profile.jpg";

export const AboutSection = () => {
  const handleDownloadResume = () => {

  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1bha65lVsXTQ7n0GCpf17-ALzN392Ketb/view?usp=sharing'; // Path relative to the public folder
  link.download = 'https://drive.google.com/file/d/1bha65lVsXTQ7n0GCpf17-ALzN392Ketb/view?usp=sharing'; // Optional: rename file when downloading
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
    // In a real implementation, this would download the actual PDF
    console.log("Download resume clicked");
    // You would link to your actual resume PDF here
  };

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-card border-4 border-primary/20">
                <img 
                  src="https://res.cloudinary.com/dn0v6bhw1/image/upload/v1754171322/manoj_ozdwhh.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-glow">
                <Code className="h-6 w-6" />
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Hi there! I'm a Frontend Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a frontend developer with hands-on experience in building interactive and accessible websites using HTML, CSS, JavaScript, and React. I enjoy creating clean UI, working with animations, and improving performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with a curiosity about how websites work, and has evolved into a passion for creating seamless user experiences that combine functionality with beautiful design.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center shadow-card hover:shadow-glow transition-smooth">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">NxtWave Certified</h4>
                <p className="text-sm text-muted-foreground">Full Stack Development</p>
              </Card>
              <Card className="p-4 text-center shadow-card hover:shadow-glow transition-smooth">
                <Coffee className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold">2+ Years</h4>
                <p className="text-sm text-muted-foreground">Coding Experience</p>
              </Card>
            </div>
            
            <Button 
              onClick={handleDownloadResume}
              size="lg" 
              className="px-8 py-4 shadow-glow hover:scale-105 transition-bounce"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};