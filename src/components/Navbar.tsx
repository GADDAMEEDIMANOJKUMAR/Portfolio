import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="h-4 w-4" />,
    href: "#home"
  },
  {
    id: "about",
    label: "About",
    icon: <User className="h-4 w-4" />,
    href: "#about"
  },
  {
    id: "skills",
    label: "Skills",
    icon: <Code className="h-4 w-4" />,
    href: "#skills"
  },
  {
    id: "projects",
    label: "Projects",
    icon: <Briefcase className="h-4 w-4" />,
    href: "#projects"
  },
  {
    id: "contact",
    label: "Contact",
    icon: <Mail className="h-4 w-4" />,
    href: "#contact"
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-xl font-bold text-gradient hover:scale-105 transition-smooth"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-smooth flex items-center space-x-2",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-smooth flex items-center space-x-3",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};