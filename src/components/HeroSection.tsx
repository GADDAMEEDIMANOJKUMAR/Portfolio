import { ArrowDown, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden animated-background"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-hero mb-6 text-white drop-shadow-lg">
            Frontend Developer
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white/90 mb-4 drop-shadow-md">
            React.js Enthusiast
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            "Passionate about crafting beautiful, interactive user experiences that bring ideas to life through clean code and innovative design."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="px-8 py-4 text-lg font-semibold shadow-glow hover:scale-105 transition-bounce bg-white text-primary hover:bg-white/90"
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary transition-bounce"
            >
              <Download className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/70 cursor-pointer hover:text-white transition-smooth" onClick={scrollToAbout}>
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6 float-animation" />
          </div>
        </div>
      </div>
    </section>
  );
};