import type { Project, User } from './types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Nitin Gadkari',
    avatarUrl: 'https://www.bjp.org/files/inline-images/2.jpg',
    skills: ['Python', 'PyTorch', 'Natural Language Processing', 'Generative Models'],
  },
  {
    id: 'user-2',
    name: 'Steve Jobs',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['JavaScript', 'React', 'Node.js', 'System Design'],
  },
  {
    id: 'user-3',
    name: 'Sundar Pichai',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['C++', 'Unreal Engine', 'Computer Graphics', 'Game Physics'],
  },
  {
    id: 'user-4',
    name: 'Ankur Warikoo',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Growth Hacking', 'Public Speaking', 'Content Creation', 'Startups'],
  },
  {
    id: 'user-5',
    name: 'Rajesh Kumar',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Arduino', 'IoT', 'Embedded Systems'],
  },
  {
    id: 'user-6',
    name: 'Priya Yadav',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Circuit Design', 'Sensors', 'C++'],
  },
  {
    id: 'user-7',
    name: 'Anil Sharma',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Full-Stack Development', 'Cybersecurity', 'Privacy Law'],
  },
  {
    id: 'user-8',
    name: 'Suman Patel',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['UI/UX Design', 'Matchmaking Algorithms', 'Product Management'],
  },
  {
    id: 'user-9',
    name: 'Neha Singh',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Computer Vision', 'Python', 'Machine Learning'],
  },
  {
    id: 'user-10',
    name: 'Aishwarya Reddy',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Hardware Integration', 'Health Tech', 'Data Analysis'],
  }
];

export const mockProjects: Project[] = [
  {
    id: 'proj-gadkari',
    title: 'Nitin Gadkari – “Innovation Overcomes All Roads”',
    description: '“Dream big, build bigger — even the impossible becomes a highway with enough will.” — Inspired by Nitin Gadkari',
    field: 'Divination',
    tags: ['AI', 'hydrogen vehicles', 'Social Media', 'Predictive Analytics'],
    ownerId: 'user-1',
    teamIds: ['user-1', 'user-2'],
    isComplete: false,
    mainContent: 'India’s greatest projects didn’t begin with money — they began with courage. You don’t wait for the perfect time. You begin with what you have. I’ve seen highways built where there were none, and progress where there was resistance. The same applies to your ideas. If you have a half-finished plan, don’t abandon it. Revive it. Innovate it. And remember — sometimes the best roads are the ones you build yourself.\n\n— Nitin Gadkari, Minister of Road Transport & Highways',
    imageUrl: 'https://www.bjp.org/files/inline-images/2.jpg',
    imageHint: 'Nitin Gadkari',
  },
  {
    id: 'proj-warikoo',
    title: 'Ankur Warikoo – “The Dots Will Connect”',
    description: `💡 "What feels like a mess today may become your masterpiece tomorrow — don’t quit on your dots."`,
    field: 'Potions',
    tags: ['Biochemistry', 'Synthetic Biology', 'CRISPR', 'Metabolic Engineering'],
    ownerId: 'user-4',
    teamIds: ['user-4', 'user-2'],
    isComplete: false,
    mainContent: `You can’t connect the dots looking forward — only looking back. It’s tempting to dismiss that old research draft, that half-coded app, or the notebook full of scattered thoughts. But these fragments carry more weight than we realize. Every incomplete idea is a seed — sometimes it just needs time, perspective, or the right people to help it grow.

When Steve Jobs dropped out of college, learned calligraphy, and tinkered with design — none of it made sense then. But years later, those dots became the aesthetic soul of Apple. What you create today may feel pointless. But in hindsight, it might be the very moment your future self is grateful for.

So don’t be afraid of the unfinished. Embrace the mess. Trust your instincts. Keep building. Because masterpieces are often born out of abandoned drafts — brought back to life by someone who refused to let them die.`,
    imageUrl: 'https://career.webindia123.com/career/options/images/biochemistry.jpg',
    imageHint: 'biochemistry lab',
  },
  {
    id: 'proj-stove',
    title: 'Arduino-Based Electric Smart Gas Stove for Old Age Homes',
    description: 'This project focuses on creating a smart gas stove for elderly people in old age homes using Arduino. It aims to automatically detect the presence of gas leaks, ensuring the safety of residents. The system also includes a timer that can shut off the stove after a certain time period, preventing accidents.',
    field: 'Charms',
    tags: ['Arduino', 'IoT', 'Safety', 'Elderly Care'],
    ownerId: 'user-5',
    teamIds: ['user-5', 'user-6'],
    isComplete: false,
    mainContent: 'This project focuses on creating a smart gas stove for elderly people in old age homes using Arduino. It aims to automatically detect the presence of gas leaks, ensuring the safety of residents. The system also includes a timer that can shut off the stove after a certain time period, preventing accidents. By utilizing sensors, the stove can also alert the caretakers if there is any issue with the cooking process, enhancing security and ease of use for senior citizens.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'smart stove circuit'
  },
  {
    id: 'proj-lawyer',
    title: 'LawyerConnect (Smart Matrimony Platform for Lawyers and Parties)',
    description: 'A matrimony platform specifically designed for legal professionals, integrating legal privacy features and specialized matchmaking algorithms tailored to the needs of lawyers and their families.',
    field: 'Transfiguration',
    tags: ['Web Platform', 'Privacy', 'Matchmaking', 'Legal Tech'],
    ownerId: 'user-7',
    teamIds: ['user-7', 'user-8'],
    isComplete: false,
    mainContent: 'LawyerConnect is a matrimony platform specifically designed for legal professionals. The platform integrates legal privacy features and specialized matchmaking algorithms tailored to the needs of lawyers and their families. It offers a secure space for connecting, with options for compatibility assessments and encrypted communication, ensuring both privacy and safety while allowing legal professionals to find potential matches.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'gavel justice scales'
  },
  {
    id: 'proj-mirror',
    title: 'Smart Mirror for Women\'s Health and BP Pulse Monitoring',
    description: 'The Smart Mirror project is designed to monitor and track the health parameters of women, specifically focusing on blood pressure and pulse rate. The mirror, equipped with sensors, can display live health data and offer health tips.',
    field: 'Herbology',
    tags: ['Health Tech', 'Sensors', 'Computer Vision', 'Womens Health'],
    ownerId: 'user-9',
    teamIds: ['user-9', 'user-10'],
    isComplete: false,
    mainContent: 'The Smart Mirror project is designed to monitor and track the health parameters of women, specifically focusing on blood pressure and pulse rate. The mirror, equipped with sensors, can display live health data, offer health tips, and alert users about abnormal readings. This project aims to provide an easy, everyday tool for women to monitor their health and take timely actions to prevent any medical issues, making health awareness more accessible and interactive.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'smart mirror futuristic'
  }
];
