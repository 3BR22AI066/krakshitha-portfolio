import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual implementation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rakshithakothapalli12@gmail.com',
      href: 'mailto:rakshithakothapalli12@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9036827006',
      href: 'tel:+919036827006',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ballari, Karnataka, India',
      href: '#',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const socialLinks = [
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
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
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

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in machine learning and AI? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 fade-in-up">
            <div>
              <h3 className="text-2xl font-poppins font-semibold mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you have a project in mind, want to discuss collaboration opportunities, 
                or just want to say hello, I'm always excited to connect with fellow tech enthusiasts.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300 hover:shadow-md group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect on Social Platforms</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-md hover:-translate-y-1 group ${social.color}`}
                      title={social.name}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Connect */}
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="h-5 w-5 text-accent" />
                <h4 className="font-semibold text-foreground">Quick Connect</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Prefer a quick chat? Feel free to reach out directly via email or LinkedIn for faster responses.
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('mailto:rakshithakothapalli12@gmail.com', '_blank')}
                  className="flex-1"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/in/rakshitha-kothapalli-15199825b/', '_blank')}
                  className="flex-1"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in-up">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-poppins font-semibold mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, collaboration ideas, or just say hello..."
                    rows={6}
                    className="w-full"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    * Required fields
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white glow-on-hover"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Form Footer */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Your information is safe with me. I respect your privacy and will never share your details with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Ready to Start Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether it's a machine learning project, web application, or innovative AI solution, 
              let's collaborate and bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white glow-on-hover"
                onClick={() => window.open('mailto:rakshithakothapalli12@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5 mr-2" />
                Start a Conversation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glow-on-hover"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/assets/KRakshitha_resume.pdf';
                  link.download = 'KRakshitha_resume.pdf';
                  link.click();
                }}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;