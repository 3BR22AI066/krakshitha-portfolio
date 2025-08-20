import React from 'react';
import { Brain, Code, Database, Zap, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Algorithms, neural networks, and intelligent agents"
    },
    {
      icon: Code,
      title: "Programming",
      description: "Python, JavaScript, and modern development tools"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Data structures, algorithms, and cloud computing"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Practical AI solutions for real-world challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am an aspiring <span className="font-semibold text-foreground">Machine Learning Specialist</span> with 
                a strong foundation in Python, Artificial Intelligence, and Deep Learning. My expertise spans{' '}
                <span className="font-semibold text-accent">machine learning algorithms, neural networks, and intelligent agent development</span>, 
                with a passion for building practical, AI-driven solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm particularly interested in applying neural networks to real-world challenges in prediction, 
                classification, and natural language processing. Driven, detail-oriented, and innovative, 
                I aim to contribute impactful solutions in cutting-edge AI projects.
              </p>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 border-l-4 border-accent p-6 rounded-lg mb-8">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What I'm Exploring Now</h4>
                    <p className="text-muted-foreground">
                      Retrieval-Augmented Generation and model evaluation techniques for enhancing AI system performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Target className="h-4 w-4 text-accent" />
                  <span>Goal-oriented</span>
                </div>
                <div className="flex items-center gap-1">
                  <Brain className="h-4 w-4 text-accent" />
                  <span>Analytical thinker</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-accent" />
                  <span>Innovation-focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6 fade-in-up">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm border border-border card-hover group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">9.25</div>
            <div className="text-sm text-muted-foreground">CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">2</div>
            <div className="text-sm text-muted-foreground">Internships</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;