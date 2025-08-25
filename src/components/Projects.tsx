import React, { useState } from 'react';
import { ExternalLink, Github, Play, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Virtual Ticketing System',
      description: 'Sports ticket booking web app for cricket, basketball, and football with user authentication, seat selection, and an intuitive interface.',
      tags: ['Python', 'Streamlit', 'Web Development'],
      category: 'Web',
      features: [
        'User authentication system',
        'Interactive seat selection',
        'Multi-sport support',
        'Responsive design'
      ],
      githubUrl: 'https://github.com/3BR22AI066/virtual_ticketing_system',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Heart Disease Prediction App',
      description: 'Predictive web app with Firebase authentication, interactive visualizations using Chart.js, and a Gemini-powered chatbot for user assistance.',
      tags: ['Python', 'Flask', 'Firebase', 'Random Forest', 'Chart.js'],
      category: 'ML',
      features: [
        'Machine learning prediction model',
        'Firebase authentication',
        'Interactive data visualizations',
        'AI-powered chatbot assistance'
      ],
      githubUrl: 'https://github.com/3BR22AI066/heart_disease_prediction',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Weather App',
      description: 'Lightweight, responsive application delivering real-time meteorological updates with clean UI and accurate forecasting.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      category: 'Web',
      features: [
        'Real-time weather data',
        'Location-based forecasts',
        'Responsive design',
        'Clean, modern interface'
      ],
      githubUrl: 'https://github.com/3BR22AI066/Weather_app',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'AI-Based Real Estate Chatbot',
      description: 'Property recommendation chatbot with natural language understanding and backend integration for personalized real estate assistance.',
      tags: ['Flask', 'NLP', 'Machine Learning', 'Python'],
      category: 'AI',
      features: [
        'Natural language processing',
        'Property recommendation engine',
        'Intent recognition',
        'Backend API integration'
      ],
      githubUrl: 'https://github.com/3BR22AI066/Real-Estate-Chatbot',
      image: '/api/placeholder/400/250'
    }
  ];

  const filters = ['All', 'ML', 'Web', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of practical AI and web applications I've built to solve real-world problems
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-up">
          <Filter className="h-5 w-5 text-muted-foreground mr-2" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-card text-foreground hover:bg-accent/10 border border-border hover:border-accent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl overflow-hidden border border-border card-hover group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-accent/10 to-primary/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">{project.title.charAt(0)}</div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'ML' ? 'bg-accent/20 text-accent' :
                    project.category === 'Web' ? 'bg-primary/20 text-primary' :
                    'bg-accent-dark/20 text-accent-dark'
                  }`}>
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20 hover:border-accent hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-accent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 glow-on-hover group/btn rounded-lg px-6"
                    onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in-up">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on a project?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white glow-on-hover"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;