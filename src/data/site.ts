// Demo profile image from Unsplash — replace with your own in public/images/profile/
export const site = {
  name: 'Jano',
  role: 'Full Stack Software Developer',
  tagline: 'Building reliable web products from idea to production.',
  bio: "I'm a full stack developer who enjoys shipping clean UIs and solid backends. I care about readable code, fast feedback loops, and products that feel good to use.",
  location: 'TODO: Your city / timezone',
  email: 'janchristian.samaniego@gmail.com',
  // Placeholder — replace public/resume.docx with your real resume (same file name).
  resumeUrl: '/resume.docx',
  profileImage: '/images/profile/profile-1.png',
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'REST APIs',
    'Git',
  ],
  social: {
    github: 'TODO: https://github.com/yourusername',
    linkedin: 'https://www.linkedin.com/in/janosamaniego/',
  },
} as const;
