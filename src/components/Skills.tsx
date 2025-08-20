import React, { useState } from 'react';
import { Code, Database, Cloud, Cpu, Globe, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const skillCategories = [
    {
      category: 'AI/ML',
      icon: Cpu,
      color: 'from-accent to-accent-light',
      skills: [
        'Machine Learning',
        'Neural Networks', 
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision'
      ]
    },
    {
      category: 'Programming',
      icon: Code,
      color: 'from-primary to-primary-light',
      skills: [
        'Python',
        'Java',
        'JavaScript',
        'SQL',
        'HTML',
        'CSS',
        'C'
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: Terminal,
      color: 'from-accent-dark to-accent',
      skills: [
        'VS Code',
        'Jupyter Notebook',
        'Spyder',
        'Google Colab',
        'GitHub',
        'Git'
      ]
    },
    {
      category: 'CS Fundamentals',
      icon: Database,
      color: 'from-primary-light to-primary',
      skills: [
        'Data Structures & Algorithms',
        'Database Management',
        'Computer Networks',
        'Cloud Computing',
        'System Design'
      ]
    }
  ];

  const filters = ['All', 'AI/ML', 'Programming', 'Tools & Platforms', 'CS Fundamentals'];

  const filteredCategories = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === activeFilter);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive foundation in machine learning, programming, and modern development tools
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-up">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/25'
                  : 'bg-card text-foreground hover:bg-accent/10 border border-border hover:border-accent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.category}
                className="bg-card rounded-xl p-6 border border-border card-hover fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.category}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="skill-chip bg-muted/50 hover:bg-accent/10 px-3 py-2 rounded-lg text-sm text-foreground hover:text-accent border border-transparent hover:border-accent/20"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 fade-in-up">
          <h3 className="text-2xl font-poppins font-semibold text-center mb-8">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { skill: 'Python Development', level: 90 },
              { skill: 'Machine Learning', level: 85 },
              { skill: 'Deep Learning', level: 80 },
              { skill: 'Data Analysis', level: 85 },
              { skill: 'Web Development', level: 75 },
              { skill: 'Cloud Platforms', level: 70 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-accent to-accent-light h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;