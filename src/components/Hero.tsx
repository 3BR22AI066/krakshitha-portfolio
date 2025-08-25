import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import headshotImage from '@/assets/headshot.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden neural-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">Ballari, Karnataka, India</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                K Rakshitha
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-muted-foreground mb-6">
              <span className="text-foreground font-semibold">Aspiring Machine Learning Specialist</span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Building practical, AI-driven solutions with expertise in Python, neural networks, 
              and intelligent agent development. Passionate about applying machine learning to 
              real-world challenges in prediction, classification, and natural language processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white glow-on-hover"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glow-on-hover"
                onClick={() => window.open('https://drive.google.com/file/d/17CfxOJIudQHkAMQUKeanf29UH11xDhYJ/view?usp=sharing', '_blank', 'noopener,noreferrer')}
                aria-label="Download Resume"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="mailto:rakshithakothapalli12@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-accent/10 border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1 group"
                aria-label="Send email to K Rakshitha"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rakshitha-kothapalli-15199825b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent/10 border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1 group"
                aria-label="Visit K Rakshitha's LinkedIn profile"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
              </a>
              <a 
                href="https://github.com/3BR22AI066"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent/10 border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1 group"
                aria-label="Visit K Rakshitha's GitHub profile"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 rounded-2xl blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={headshotImage} 
                  alt="K Rakshitha - Machine Learning Specialist"
                  className="w-80 h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/20">
                <span className="text-xs font-semibold text-accent">AI/ML</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <span className="text-xs font-semibold text-primary">Python</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;