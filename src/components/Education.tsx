import React from 'react';
import { GraduationCap, Calendar, MapPin, Book, Award, TrendingUp } from 'lucide-react';

const Education: React.FC = () => {
  const education = {
    degree: 'B.E. in Artificial Intelligence & Machine Learning',
    institution: 'Ballari Institute of Technology and Management',
    location: 'Ballari, Karnataka, India',
    period: '2022 - 2026',
    cgpa: '9.25/10.0',
    status: 'In Progress',
    coursework: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Structures & Algorithms',
      'Design & Analysis of Algorithms',
      'Database Management Systems',
      'Computer Networks',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Statistics & Probability'
    ],
    highlights: [
      'Maintained consistently high academic performance',
      'Active participation in coding competitions and hackathons',
      'Member of AI/ML student community',
      'Regular contributor to technical workshops'
    ]
  };

  const academicAchievements = [
    {
      title: 'Dean\'s List',
      description: 'Consistent academic excellence across semesters',
      icon: Award
    },
    {
      title: 'CGPA: 9.25/10.0',
      description: 'Top 10% of the graduating class',
      icon: TrendingUp
    },
    {
      title: 'Technical Projects',
      description: '4+ major projects completed during coursework',
      icon: Book
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in artificial intelligence and machine learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm card-hover group fade-in-up mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex items-start gap-4 mb-4 lg:mb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                    {education.degree}
                  </h3>
                  <div className="text-lg text-accent font-medium mb-1">
                    {education.institution}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {education.location}
                  </div>
                </div>
              </div>
              
              <div className="text-left lg:text-right">
                <div className="flex items-center text-muted-foreground mb-2 lg:justify-end">
                  <Calendar className="h-4 w-4 mr-1" />
                  {education.period}
                </div>
                <div className="text-3xl font-bold text-accent mb-1">
                  {education.cgpa}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  Current CGPA
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {education.status}
                </span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {academicAchievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-muted/50 rounded-lg p-4 border border-border hover:border-accent/20 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <h4 className="font-medium text-foreground text-sm">
                        {achievement.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Key Highlights */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-accent" />
                Academic Highlights
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {education.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Book className="h-5 w-5 mr-2 text-accent" />
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {education.coursework.map((course, index) => (
                  <div
                    key={course}
                    className="skill-chip bg-muted/50 hover:bg-accent/10 px-3 py-2 rounded-lg text-sm text-foreground hover:text-accent border border-transparent hover:border-accent/20"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Performance Chart Placeholder */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm fade-in-up">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Academic Progress
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">2022</div>
                <div className="text-sm text-muted-foreground">Year 1</div>
                <div className="text-lg font-semibold text-foreground">9.1</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">2023</div>
                <div className="text-sm text-muted-foreground">Year 2</div>
                <div className="text-lg font-semibold text-foreground">9.3</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">2024</div>
                <div className="text-sm text-muted-foreground">Year 3</div>
                <div className="text-lg font-semibold text-foreground">9.4</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">2025</div>
                <div className="text-sm text-muted-foreground">Year 4</div>
                <div className="text-lg font-semibold text-primary">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;