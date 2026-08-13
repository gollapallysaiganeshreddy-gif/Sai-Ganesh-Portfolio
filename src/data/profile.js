/* Profile data for Sai Ganesh — edit these fields to update the portfolio */

export const profile = {
  name: 'Sai Ganesh',
  title: 'AI / ML & Software Developer',
  tagline: 'Building intelligent systems, data-driven applications, and modern digital products.',
  email: 'saiganesh.dev@gmail.com',
  location: 'Hyderabad, India',
  phone: '+91 98765 43210',
  resumeUrl: '/resume.pdf',
  avatar: null,
  status: 'Open to opportunities',
  bio: [
    "I'm an AI/ML enthusiast and Software Developer passionate about building intelligent systems that solve real-world problems. My work spans machine learning, data science, and full-stack development.",
    "I thrive at the intersection of data and engineering — turning complex datasets into actionable insights and building applications powered by modern AI technologies.",
  ],
  interests: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Full Stack Development'],
};

export const socialLinks = {
  github: 'https://github.com/saiganesh',
  linkedin: 'https://linkedin.com/in/saiganesh',
  twitter: 'https://twitter.com/saiganesh',
};

export const stats = [
  { label: 'AI/ML Projects', value: '10+' },
  { label: 'Technologies', value: '30+' },
  { label: 'Certifications', value: '6' },
  { label: 'Hackathons', value: '5+' },
];

export const domainCards = [
  { title: 'AI / ML', description: 'Building predictive models and intelligent automation systems', icon: 'Brain' },
  { title: 'Software Development', description: 'Creating scalable applications with clean architecture', icon: 'Code' },
  { title: 'Data Science', description: 'Extracting insights from complex datasets', icon: 'BarChart3' },
  { title: 'Problem Solving', description: 'Competitive programming and algorithmic thinking', icon: 'Lightbulb' },
];

export const skills = [
  {
    category: 'Programming',
    items: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'TensorFlow', level: 82 },
      { name: 'PyTorch', level: 78 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'OpenCV', level: 72 },
      { name: 'NLP / Transformers', level: 75 },
      { name: 'Keras', level: 80 },
    ],
  },
  {
    category: 'Data Science',
    items: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 88 },
      { name: 'Matplotlib', level: 82 },
      { name: 'Seaborn', level: 78 },
      { name: 'Power BI', level: 65 },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'React.js', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 72 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', level: 78 },
      { name: 'PostgreSQL', level: 72 },
      { name: 'MySQL', level: 75 },
      { name: 'Firebase', level: 68 },
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Docker', level: 62 },
      { name: 'Jupyter', level: 90 },
      { name: 'VS Code', level: 92 },
      { name: 'Google Colab', level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'SentimentScope',
    description: 'Real-time sentiment analysis engine that processes social media text using NLP transformers and visualizes trends.',
    technologies: ['Python', 'Transformers', 'Flask', 'React', 'D3.js'],
    category: 'AI/ML',
    github: 'https://github.com/saiganesh/sentimentscope',
    demo: 'https://sentimentscope.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'MediScan AI',
    description: 'Medical image classification system using deep learning to detect anomalies in X-ray and MRI scans.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
    category: 'AI/ML',
    github: 'https://github.com/saiganesh/mediscan-ai',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'DataPulse Dashboard',
    description: 'Interactive data analytics dashboard for business intelligence with real-time data pipelines.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    category: 'Data Science',
    github: 'https://github.com/saiganesh/datapulse',
    demo: 'https://datapulse.vercel.app',
    featured: true,
  },
  {
    id: 4,
    title: 'ChatBot Engine',
    description: 'Conversational AI chatbot using RAG architecture with custom knowledge bases.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone'],
    category: 'AI/ML',
    github: 'https://github.com/saiganesh/chatbot-engine',
    demo: null,
    featured: false,
  },
  {
    id: 5,
    title: 'EcoTrack',
    description: 'Full-stack sustainability tracking application for monitoring carbon footprint and environmental impact.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'Full Stack',
    github: 'https://github.com/saiganesh/ecotrack',
    demo: 'https://ecotrack.vercel.app',
    featured: false,
  },
  {
    id: 6,
    title: 'Stock Predictor ML',
    description: 'Machine learning model for stock price prediction using LSTM networks and technical indicators.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Streamlit'],
    category: 'Data Science',
    github: 'https://github.com/saiganesh/stock-predictor',
    demo: null,
    featured: false,
  },
];

export const whatIBuild = [
  { title: 'Machine Learning', description: 'Predictive models, classification systems, and recommendation engines', icon: 'Cpu' },
  { title: 'Artificial Intelligence', description: 'NLP pipelines, computer vision, and conversational AI systems', icon: 'Brain' },
  { title: 'Data Analytics', description: 'Business intelligence dashboards and data visualization tools', icon: 'BarChart3' },
  { title: 'Web Applications', description: 'Full-stack applications with modern frameworks and clean architecture', icon: 'Globe' },
  { title: 'Automation', description: 'Workflow automation, data pipelines, and intelligent scripting', icon: 'Zap' },
];

export const education = [
  {
    institution: 'University College of Engineering',
    degree: 'B.Tech in Computer Science & Engineering',
    duration: '2022 – 2026',
    grade: 'CGPA: 8.7 / 10',
    highlights: [
      'Specialization in Artificial Intelligence & Machine Learning',
      'Published research on NLP-based text classification',
    ],
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Intermediate (MPC)',
    duration: '2020 – 2022',
    grade: '93%',
    highlights: [],
  },
];

export const certifications = [
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    date: 'Apr 2025',
    credential: 'https://coursera.org/verify/specialization/deep-learning',
  },
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Feb 2025',
    credential: 'https://www.credential.net/tensorflow',
  },
  {
    name: 'Machine Learning by Stanford',
    issuer: 'Stanford Online (Coursera)',
    date: 'Dec 2024',
    credential: 'https://coursera.org/verify/ml-stanford',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Oct 2024',
    credential: 'https://aws.amazon.com/verification',
  },
  {
    name: 'Python for Data Science',
    issuer: 'IBM (Coursera)',
    date: 'Aug 2024',
    credential: 'https://coursera.org/verify/python-data-science',
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'Jun 2024',
    credential: 'https://udemy.com/certificate',
  },
];

export const achievements = [
  { title: 'Smart India Hackathon Finalist', description: 'Top 10 nationally for AI-powered healthcare solution', year: '2025' },
  { title: 'Best AI Project Award', description: 'University-level technical symposium', year: '2025' },
  { title: 'Kaggle Competitions', description: 'Silver medal in Titanic ML competition', year: '2024' },
  { title: 'CodeChef Rating 1600+', description: 'Consistent competitive programming performer', year: '2024' },
  { title: 'Dean\'s List', description: 'Academic excellence across multiple semesters', year: '2023–2025' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'What I Build', href: '#what-i-build' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
