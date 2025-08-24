import React from 'react';
import { Award, ExternalLink, Calendar, Building, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Data Structures & Algorithms using Python',
      provider: 'Infosys',
      year: '2023',
      category: 'Programming',
      description: 'Comprehensive training in fundamental data structures and algorithmic problem-solving using Python.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
      certificateUrl: 'https://drive.google.com/file/d/1U162h66vI-M6NfvO8gfJqiT-kmsU3KXj/view?usp=sharing',
      verified: true,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Artificial Intelligence using Python',
      provider: 'Infosys',
      year: '2024',
      category: 'AI/ML',
      description: 'Advanced certification covering AI concepts, machine learning algorithms, and Python implementation.',
      skills: ['Artificial Intelligence', 'Python', 'Machine Learning', 'Neural Networks'],
      certificateUrl: 'https://drive.google.com/file/d/10JofkDcSb10Cf4CbWsnlvHGvvwhJCg3w/view?usp=sharing',
      verified: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize',
      provider: 'Udemy',
      year: '2025',
      category: 'AI/ML',
      description: 'Comprehensive machine learning course covering both Python and R implementations with latest AI tools.',
      skills: ['Machine Learning', 'Python', 'R', 'ChatGPT', 'Data Science'],
      certificateUrl: 'https://drive.google.com/file/d/1P3LuAnGj3w-YrzH4S7-64wmIauBLOrnF/view?usp=sharing',
      verified: true,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'AWS Cloud Quest - Cloud Practitioner',
      provider: 'Amazon Web Services',
      year: '2025',
      category: 'Cloud Computing',
      description: 'Foundational cloud computing certification covering AWS services and cloud architecture principles.',
      skills: ['AWS', 'Cloud Computing', 'Cloud Architecture', 'DevOps'],
      certificateUrl: 'https://drive.google.com/file/d/1P7NMRnUENwgObk23DCJeTduJCneRmHxk/view?usp=sharing',
      verified: true,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const categories = ['All', 'AI/ML', 'Programming', 'Cloud Computing'];
  const [activeFilter, setActiveFilter] = React.useState('All');

  const filteredCertifications = activeFilter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  const certificationStats = [
    { label: 'Total Certifications', value: '5+', icon: Award },
    { label: 'Verified Credentials', value: '100%', icon: CheckCircle },
    { label: 'Leading Providers', value: '4', icon: Building },
    { label: 'Latest Certification', value: '2025', icon: Calendar }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications from leading technology providers
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 fade-in-up">
          {certificationStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-card rounded-lg p-4 border border-border text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/25'
                  : 'bg-card text-foreground hover:bg-accent/10 border border-border hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border card-hover group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-2">
                    {cert.verified && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    cert.category === 'AI/ML' ? 'bg-accent/10 text-accent' :
                    cert.category === 'Programming' ? 'bg-primary/10 text-primary' :
                    cert.category === 'Cloud Computing' ? 'bg-accent-dark/10 text-accent-dark' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent font-medium mb-3">
                    <Building className="h-4 w-4" />
                    {cert.provider}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Action */}
                <div className="pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full glow-on-hover group-hover:border-accent"
                    onClick={() => window.open(cert.certificateUrl, '_blank', 'noopener,noreferrer')}
                    aria-label={`View ${cert.title} certificate from ${cert.provider}`}
                  >
                    <Award className="h-4 w-4 mr-2" />
                    View Certificate
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 border border-border fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Committed to staying at the forefront of technology through continuous education and certification
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">Foundation Building</h4>
              <p className="text-sm text-muted-foreground">
                Started with core programming and data structures
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">AI Specialization</h4>
              <p className="text-sm text-muted-foreground">
                Advanced to AI and machine learning certifications
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">Cloud & Modern Tech</h4>
              <p className="text-sm text-muted-foreground">
                Expanding to cloud computing and latest technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;