import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-bg-card flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer passionate about creating beautiful, 
            functional digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="p-3 rounded-full bg-bg-card border border-border hover:border-primary transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-text-primary" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-bg-card border border-border hover:border-primary transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-text-primary" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-bg-card border border-border hover:border-primary transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-text-primary" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-text-muted mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;