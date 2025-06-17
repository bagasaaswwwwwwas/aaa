import React from 'react';
import { Award, Calendar, ExternalLink, Download } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'AWS-CSA-2024-001',
      verifyUrl: '#',
      downloadUrl: '#',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability']
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      description: 'Certification validating skills in developing scalable applications on Google Cloud Platform.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'GCP-PD-2023-002',
      verifyUrl: '#',
      downloadUrl: '#',
      skills: ['GCP Services', 'Kubernetes', 'DevOps', 'Microservices']
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      description: 'Foundation certification covering core Azure services, solutions, and management tools.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'AZ-900-2023-003',
      verifyUrl: '#',
      downloadUrl: '#',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Compliance']
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2022',
      description: 'Professional certification demonstrating advanced React development skills and best practices.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'META-REACT-2022-004',
      verifyUrl: '#',
      downloadUrl: '#',
      skills: ['React', 'JavaScript', 'State Management', 'Testing']
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      description: 'Hands-on certification validating skills in Kubernetes cluster administration.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'CKA-2022-005',
      verifyUrl: '#',
      downloadUrl: '#',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Linux']
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: '2021',
      description: 'Certification demonstrating proficiency in MongoDB database development and administration.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'MDB-DEV-2021-006',
      verifyUrl: '#',
      downloadUrl: '#',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Performance Tuning']
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 float-animation">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 gradient-text">
              Professional Certificates
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Industry-recognized certifications that validate my expertise and commitment to continuous learning in technology.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <Card 
                key={index} 
                variant="elevated" 
                className={`overflow-hidden group hover:scale-[1.02] transition-all duration-300 hover:shadow-elegant-lg ${
                  index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'
                }`}
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 -m-6 mb-6">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <div className="bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {certificate.date}
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
                        {certificate.title}
                      </h3>
                      <p className="text-sm text-text-secondary font-medium">
                        {certificate.issuer}
                      </p>
                    </div>
                    <Award className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {certificate.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential Info */}
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center text-xs text-text-muted mb-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      Credential ID: {certificate.credentialId}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex items-center gap-1 text-xs flex-1 hover:scale-105 transform transition-all duration-200"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Verify
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 text-xs flex-1 hover:scale-105 transform transition-all duration-200"
                      >
                        <Download className="h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 scroll-scale-up">
            <Card variant="elevated" className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-text-muted">Certificates</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-text-muted">Cloud Platforms</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-text-muted">Years Active</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-text-muted">Verified</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;