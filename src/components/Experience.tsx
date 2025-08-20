import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'PRASUNET Internship Program',
      organization: 'Tech Bharat Global Impact',
      location: 'Remote',
      period: '2024',
      type: 'Internship',
      description: 'Built an AI-based real estate chatbot for property recommendation with natural language understanding capabilities.',
      responsibilities: [
        'Dataset preprocessing and feature engineering',
        'Intent recognition system development',
        'Flask backend integration and API design',
        'Model training and evaluation'
      ],
      technologies: ['Python', 'Flask', 'NLP', 'Machine Learning', 'TensorFlow'],
      achievements: [
        'Successfully deployed chatbot with 85% accuracy in intent recognition',
        'Reduced property search time by 60% through intelligent recommendations'
      ],
      certificateUrl: '#'
    },
    {
      title: 'Python Developer Intern',
      company: 'EZ-TS',
      organization: 'EZ-TS Solutions',
      location: 'Remote',
      period: 'May 2024',
      type: 'Internship',
      description: 'Developed a comprehensive web-based ticket booking system with user authentication and payment integration.',
      responsibilities: [
        'Built ticket booking system architecture',
        'Implemented user authentication and authorization',
        'Developed responsive frontend interfaces',
        'Integrated payment gateway solutions'
      ],
      technologies: ['Python', 'Streamlit', 'SQL', 'Web Development'],
      achievements: [
        'Strengthened Python proficiency and problem-solving capabilities',
        'Delivered fully functional booking system ahead of schedule'
      ],
      certificateUrl: '#'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in machine learning and software development through impactful internships
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative fade-in-up flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm card-hover group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="text-accent font-medium">
                          {exp.company}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {exp.organization}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Internship' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-accent" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certificate Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="glow-on-hover"
                      onClick={() => window.open(exp.certificateUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm actively seeking internship and full-time opportunities in machine learning, 
              AI development, and software engineering roles.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white glow-on-hover"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;