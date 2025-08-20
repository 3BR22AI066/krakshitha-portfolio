# K Rakshitha - Personal Portfolio

A modern, responsive personal portfolio website showcasing expertise in Machine Learning and Artificial Intelligence.

## 🌟 Features

### Design & User Experience
- **Modern Design System**: Midnight Navy (#0F172A) and Teal (#14B8A6) color palette
- **Dark/Light Mode**: Auto-detection with manual toggle, remembers user preference  
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Smooth Animations**: Scroll-reveal animations, hover effects, and micro-interactions
- **Neural Network Motif**: Subtle background patterns reflecting AI/ML focus

### Sections
- **Hero**: Professional headshot, value proposition, contact CTAs
- **About**: Personal introduction with exploring current interests
- **Skills**: Categorized technical skills with filter functionality
- **Projects**: 4 featured projects with tech stacks and live demo links
- **Experience**: Timeline view of internships with achievements
- **Education**: Academic background with coursework and performance
- **Achievements**: Competition results and recognition
- **Certifications**: Industry credentials from Infosys, Udemy, AWS
- **Contact**: Contact form with validation and quick connect options

### Technical Features
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader support
- **Performance**: Lazy loading, optimized images, minimal bundle size
- **Modern Stack**: React 18, TypeScript, Tailwind CSS, Vite

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation
```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📝 Customization Guide

### Adding Your Resume
1. Replace `public/assets/KRakshitha_resume.pdf` with your PDF resume
2. Keep the same filename for automatic functionality
3. The download buttons will automatically serve your resume

### Updating Content
Key files to modify:

**Personal Information**:
- `src/components/Hero.tsx` - Name, title, bio, location
- `src/components/About.tsx` - About me section, current interests
- `src/components/Contact.tsx` - Contact details, social links

**Professional Content**:
- `src/components/Skills.tsx` - Technical skills and competencies
- `src/components/Projects.tsx` - Project portfolio with descriptions
- `src/components/Experience.tsx` - Work experience and internships
- `src/components/Education.tsx` - Academic background
- `src/components/Achievements.tsx` - Awards and recognition
- `src/components/Certifications.tsx` - Professional certifications

### Connecting Contact Form
The contact form is ready for integration with:

**Email Services**:
- [Formspree](https://formspree.io): Add `action` attribute to form
- [EmailJS](https://emailjs.com): Replace form handler in `Contact.tsx`
- [Netlify Forms](https://netlify.com/products/forms): Add `netlify` attribute

**Example Formspree Integration**:
```tsx
// In src/components/Contact.tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Customizing Design
**Colors**: Edit `src/index.css` design system variables
**Fonts**: Update Google Fonts link in `index.html` and font families in `tailwind.config.ts`
**Components**: Modify individual component files for layout changes

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Add navigation link to `src/components/Navigation.tsx`

## 🎨 Design System

### Color Palette
- **Primary**: Midnight Navy (#0F172A) - Professional, trustworthy
- **Accent**: Teal (#14B8A6) - Modern, tech-forward  
- **Neutral**: Soft Gray (#E5E7EB) - Clean, minimal

### Typography
- **Headings**: Poppins (600-800 weight)
- **Body**: Inter (400-600 weight)
- **Base Size**: 16px with 1.6 line height

### Spacing & Layout
- **Max Width**: 1280px centered
- **Grid**: CSS Grid with responsive breakpoints
- **Spacing**: Consistent 8px base unit

## 📱 Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section  
│   └── ...            # Other sections
├── assets/             # Images and static files
├── hooks/              # Custom React hooks
├── lib/                # Utilities
└── pages/              # Page components
```

### Key Dependencies
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling framework
- **Lucide React**: Icon library
- **Radix UI**: Accessible components
- **React Hook Form**: Form handling
- **React Query**: Data fetching

## 🚀 Deployment

### Recommended Platforms
- **Vercel**: Automatic deployments from Git
- **Netlify**: Easy static site hosting
- **GitHub Pages**: Free hosting for public repos

### Custom Domain Setup
Most platforms support custom domains. Add your domain in:
- Vercel: Project Settings → Domains
- Netlify: Site Settings → Domain Management

## 📞 Support

For questions about customization or issues:
- Check existing documentation
- Create GitHub issue for bugs
- Refer to component library docs (Radix UI, Tailwind CSS)

## 📄 License

This portfolio template is open for personal and educational use. Please provide attribution when possible.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**