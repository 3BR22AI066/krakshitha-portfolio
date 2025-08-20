import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:rakshithakothapalli12@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/rakshitha-kothapalli-15199825b/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/3BR22AI066',
      color: 'hover:text-foreground'
    },
    {
      name: 'LeetCode',
      icon: ExternalLink,
      url: 'https://leetcode.com/u/rakshithakothapalli12/',
      color: 'hover:text-orange-600'
    },
    {
      name: 'HackerRank',
      icon: ExternalLink,
      url: 'https://www.hackerrank.com/profile/rakshithakothap1',
      color: 'hover:text-green-600'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-light rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KR</span>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold">K Rakshitha</h3>
                  <p className="text-primary-foreground/80 text-sm">Machine Learning Specialist</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
                Passionate about building practical AI solutions and contributing to cutting-edge 
                machine learning projects. Always excited to collaborate and learn.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-primary-light/50 rounded-lg hover:bg-accent/20 transition-all duration-300 hover:-translate-y-1 group ${social.color}`}
                      title={social.name}
                    >
                      <Icon className="h-5 w-5 text-primary-foreground/80 group-hover:text-current transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-primary-foreground/60 text-sm">Email</p>
                  <a 
                    href="mailto:rakshithakothapalli12@gmail.com"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    rakshithakothapalli12@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Phone</p>
                  <a 
                    href="tel:+919036827006"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    +91 9036827006
                  </a>
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Location</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Ballari, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-light/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <span>© {new Date().getFullYear()} K Rakshitha. Made with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current" />
                <span>and lots of ☕</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-primary-foreground/60 text-sm">
                  Built with React & Tailwind CSS
                </span>
                
                {/* Back to Top Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="p-2 bg-primary-light/50 hover:bg-accent/20 text-primary-foreground hover:text-accent transition-all duration-300 hover:-translate-y-1"
                  title="Back to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;