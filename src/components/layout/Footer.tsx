import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-text-primary">
                John Doe
              </h3>
              <p className="text-text-secondary">
                Full Stack Developer passionate about creating beautiful, 
                functional digital experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-bg-secondary hover:bg-bg-tertiary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-text-primary" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-bg-secondary hover:bg-bg-tertiary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-text-primary" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-bg-secondary hover:bg-bg-tertiary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-primary">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-text-secondary hover:text-text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors">
                  About
                </a>
                <a href="#projects" className="text-text-secondary hover:text-text-primary transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-primary">
                Services
              </h4>
              <nav className="flex flex-col space-y-2">
                <span className="text-text-secondary">Web Development</span>
                <span className="text-text-secondary">UI/UX Design</span>
                <span className="text-text-secondary">Mobile Apps</span>
                <span className="text-text-secondary">Consulting</span>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © {currentYear} John Doe. All rights reserved.
            </p>
            <p className="text-text-muted text-sm flex items-center gap-1 mt-2 sm:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;