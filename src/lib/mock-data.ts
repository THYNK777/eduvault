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
    teamIds: ['user-1'],
    isComplete: false,
    mainContent: 'India’s greatest projects didn’t begin with money — they began with courage. You don’t wait for the perfect time. You begin with what you have. I’ve seen highways built where there were none, and progress where there was resistance. The same applies to your ideas. If you have a half-finished plan, don’t abandon it. Revive it. Innovate it. And remember — sometimes the best roads are the ones you build yourself.\n\n— Nitin Gadkari, Minister of Road Transport & Highways',
    imageUrl: 'https://www.bjp.org/files/inline-images/2.jpg',
    imageHint: 'Nitin Gadkari',
  },
  {
    id: 'proj-2',
    title: 'Steve Jobs – “The Dots Will Connect”',
    description: `💡 "What feels like a mess today may become your masterpiece tomorrow — don’t quit on your dots."`,
    field: 'Potions',
    tags: ['Biochemistry', 'Synthetic Biology', 'CRISPR', 'Metabolic Engineering'],
    ownerId: 'user-2',
    teamIds: ['user-2', 'user-3'],
    isComplete: false,
    mainContent: `You can’t connect the dots looking forward — only looking back. It’s tempting to dismiss that old research draft, that half-coded app, or the notebook full of scattered thoughts. But these fragments carry more weight than we realize. Every incomplete idea is a seed — sometimes it just needs time, perspective, or the right people to help it grow.

When Steve Jobs dropped out of college, learned calligraphy, and tinkered with design — none of it made sense then. But years later, those dots became the aesthetic soul of Apple. What you create today may feel pointless. But in hindsight, it might be the very moment your future self is grateful for.

So don’t be afraid of the unfinished. Embrace the mess. Trust your instincts. Keep building. Because masterpieces are often born out of abandoned drafts — brought back to life by someone who refused to let them die.`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'Ankur Warikoo',
  }
];
