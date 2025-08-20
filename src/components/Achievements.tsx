import React from 'react';
import { Trophy, Award, Medal, Star, Users, Code, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: '1st Runner-Up',
      event: 'Business Plan Competition',
      year: '2024',
      description: 'Developed an innovative business plan for an AI-powered healthcare solution, securing second place among 100+ participants.',
      icon: Trophy,
      category: 'Competition',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Finalist',
      event: 'Hackfest-02',
      year: '2023',
      description: 'Selected as a finalist in a major hackathon, demonstrating exceptional problem-solving and technical skills in a 48-hour coding challenge.',
      icon: Medal,
      category: 'Hackathon',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Top 10 Selection',
      event: 'HackB-25',
      year: '2025',
      description: 'Achieved top 10 placement in a prestigious national-level hackathon among 500+ participating teams.',
      icon: Star,
      category: 'Hackathon',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const stats = [
    {
      number: '3',
      label: 'Major Achievements',
      icon: Award,
      description: 'Recognition in competitions and hackathons'
    },
    {
      number: '100+',
      label: 'Competitors Outperformed',
      icon: Users,
      description: 'Consistently competing at high levels'
    },
    {
      number: '48hrs',
      label: 'Fastest Solution Development',
      icon: Zap,
      description: 'Rapid prototyping and problem-solving'
    },
    {
      number: '2+',
      label: 'Years of Competition Experience',
      icon: Code,
      description: 'Active participation in tech events'
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for innovation, technical excellence, and competitive performance
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border card-hover group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      achievement.category === 'Competition' ? 'bg-accent/10 text-accent' :
                      achievement.category === 'Hackathon' ? 'bg-primary/10 text-primary' :
                      'bg-accent-dark/10 text-accent-dark'
                    }`}>
                      {achievement.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium bg-muted px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <div className="text-accent font-medium">
                    {achievement.event}
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Achievement Level</span>
                    <div className="flex gap-1">
                      {[...Array(achievement.title.includes('1st') ? 5 : achievement.title.includes('Top 10') ? 4 : 3)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 border border-border fade-in-up">
          <h3 className="text-2xl font-poppins font-semibold text-center mb-8">
            Achievement Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="text-center mt-16 fade-in-up">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-muted-foreground mb-4">
              "Success is not final, failure is not fatal: it is the courage to continue that counts."
            </blockquote>
            <p className="text-sm text-muted-foreground">
              — Driving innovation through competitive excellence and continuous learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;