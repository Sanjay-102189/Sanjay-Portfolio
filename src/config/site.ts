// Site-wide configuration - centralized place for all URLs, profile links, and settings
export const siteConfig = {
  name: 'Sanjay S',
  title: 'Sanjay S | Cyber Security & Full-Stack Developer',
  description: 'Portfolio of Sanjay S – Cyber Security & Full-Stack Developer passionate about building secure applications, AI-powered solutions and innovative digital experiences.',
  url: 'https://sanjays.dev',
  email: 'sanjaypriya125@gmail.com',
  phone: '+91 9360865008',
  location: 'Chennai, Tamil Nadu, India',
  resumePath: '/Sanjay_S_Resume.pdf',
  resumeFilename: 'Sanjay_S_Resume.pdf',

  social: {
    github: 'https://github.com/Sanjay-102189',
    linkedin: 'https://www.linkedin.com/in/sanjay1431',
    skillrack: 'https://www.skillrack.com/faces/resume.xhtml?id=508270&key=3db90d455aa2913689107c1d6b668df69f05b201',
  },

  // EmailJS configuration - set these environment variables for the contact form
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  },

  // Certification verification links (add when available)
  certifications: {
    oracleAI: '',
    agenticAI: '',
    reactJS: '',
    mongodb: '',
    criticalThinking: '',
    cybersecurity: '',
  },
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
