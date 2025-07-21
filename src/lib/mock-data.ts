import type { Project, User } from './types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Nitin Gadkari',
    avatarUrl: 'https://placehold.co/100x100.png',
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
  }
];

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Nitin Gadkari – “Innovation Overcomes All Roads”',
    description: '“Dream big, build bigger — even the impossible becomes a highway with enough will.” — Inspired by Nitin Gadkari',
    field: 'Divination',
    tags: ['AI', 'hydrogen vehicles', 'Social Media', 'Predictive Analytics'],
    ownerId: 'user-1',
    teamIds: ['user-1', 'user-2'],
    isComplete: false,
    mainContent: 'India’s greatest projects didn’t begin with money — they began with courage. You don’t wait for the perfect time. You begin with what you have. I’ve seen highways built where there were none, and progress where there was resistance. The same applies to your ideas. If you have a half-finished plan, don’t abandon it. Revive it. Innovate it. And remember — sometimes the best roads are the ones you build yourself.\n\n— Nitin Gadkari, Minister of Road Transport & Highways',
    imageUrl: 'data:image/jpeg;base64,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',
    imageHint: 'social network',
  },
  {
    id: 'proj-2',
    title: 'Steve Jobs – “The Dots Will Connect”',
    description: `💡 "What feels like a mess today may become your masterpiece tomorrow — don’t quit on your dots."`,
    field: 'Potions',
    tags: ['Biochemistry', 'Synthetic Biology', 'CRISPR', 'Metabolic Engineering'],
    ownerId: 'user-2',
    teamIds: ['user-2'],
    isComplete: false,
    mainContent: `You can’t connect the dots looking forward — only looking back. It’s tempting to dismiss that old research draft, that half-coded app, or the notebook full of scattered thoughts. But these fragments carry more weight than we realize. Every incomplete idea is a seed — sometimes it just needs time, perspective, or the right people to help it grow.

When Steve Jobs dropped out of college, learned calligraphy, and tinkered with design — none of it made sense then. But years later, those dots became the aesthetic soul of Apple. What you create today may feel pointless. But in hindsight, it might be the very moment your future self is grateful for.

So don’t be afraid of the unfinished. Embrace the mess. Trust your instincts. Keep building. Because masterpieces are often born out of abandoned drafts — brought back to life by someone who refused to let them die.`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'underwater biology',
  },
  {
    id: 'proj-3',
    title: 'Sundar Pichai – “Ideas Need Patience, Not Perfection”',
    description: 'An exploration into quantum entanglement for instantaneous, secure data transfer between research labs.',
    field: 'Charms',
    tags: ['Quantum Computing', 'Cryptography', 'Qiskit', 'Hardware'],
    ownerId: 'user-3',
    teamIds: ['user-3', 'user-4'],
    isComplete: false,
    mainContent: 'The most transformative ideas don’t emerge fully formed. They evolve — quietly, patiently, iteratively. Google itself began as a research project. What mattered wasn’t just brilliance, but belief. If your project feels incomplete, it doesn’t mean it’s unworthy. Keep nurturing it, brick by brick. Sometimes, the world catches up to your vision — not the other way around.\n\n— Sundar Pichai, CEO of Alphabet Inc.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'quantum computer',
  },
  {
    id: 'proj-4',
    title: 'Ancient Runes Translation Engine',
    description: 'A machine learning model to translate ancient and forgotten languages using transformer architecture and transfer learning.',
    field: 'Runes',
    tags: ['Machine Learning', 'NLP', 'TensorFlow', 'LLM'],
    ownerId: 'user-2',
    teamIds: ['user-2', 'user-1'],
    isComplete: false,
    mainContent: 'This project includes a scraped dataset of runic inscriptions and a partially trained BERT model. The model struggles with context and ambiguous symbols. The unfinished Jupyter notebook contains data preprocessing steps and model training code.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ancient runes',
  },
  {
    id: 'proj-5',
    title: 'Automated Mandrake Re-potting System',
    description: 'A robotics project to design a system that can safely and automatically re-pot screaming Mandrakes when they mature.',
    field: 'Herbology',
    tags: ['Data Science', 'Robotics', 'Computer Vision', 'Pandas'],
    ownerId: 'user-3',
    teamIds: ['user-3'],
    isComplete: true,
    mainContent: 'The system uses a custom-trained YOLOv5 model to detect mandrake maturity based on leaf patterns. A robotic arm then performs the re-potting procedure. This vault contains the dataset, trained model weights, and control software.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'robotic arm plant',
  },
  {
    id: 'proj-6',
    title: 'The Goblet of Sorting',
    description: 'A web application that sorts new students into collaborative project groups based on their skills and project interests.',
    field: 'Transfiguration',
    tags: ['Software Dev', 'React', 'Firebase', 'Matching Algorithm'],
    ownerId: 'user-2',
    teamIds: ['user-2', 'user-3'],
    isComplete: false,
    mainContent: 'The frontend is built with Next.js and Tailwind CSS. The backend uses Firebase for authentication and data storage. The core matching algorithm is incomplete and needs refinement to handle complex skillsets and preferences.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'fantasy goblet',
  }
];
