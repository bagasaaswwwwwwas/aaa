import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import Card from '../ui/Card';

const About: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern technologies like React, Node.js, and TypeScript.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful, intuitive user interfaces with attention to detail and user experience.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and scalability.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders to deliver exceptional results.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              About Me
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              I'm a passionate developer with over 5 years of experience creating 
              digital solutions that make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="About me"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-elegant-lg">
                <Code className="h-12 w-12 text-white" />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary">
                Crafting Digital Experiences
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I specialize in building modern web applications that combine beautiful 
                design with robust functionality. My journey in tech started with a 
                curiosity about how things work, and it has evolved into a passion for 
                creating solutions that improve people's lives.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-text-muted">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-text-muted">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-text-muted">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {skills.map((skill, index) => (
              <Card key={index} variant="elevated" className="text-center hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {skill.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {skill.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;