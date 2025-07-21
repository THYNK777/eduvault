import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';
import { BrainCircuit, Share2, Cog, FlaskConical, Combine, Leaf, UserCircle, LayoutGrid, Archive, ScrollText, MessageCircle } from 'lucide-react';

export type MagicalField = 'Divination' | 'Runes' | 'Charms' | 'Potions' | 'Transfiguration' | 'Herbology';

export const magicalFieldDetails: Record<MagicalField, { discipline: string; icon: ComponentType<LucideProps>; }> = {
  Divination: { discipline: 'Artificial Intelligence', icon: BrainCircuit },
  Runes: { discipline: 'Machine Learning', icon: Share2 },
  Charms: { discipline: 'Computer Engineering', icon: Cog },
  Potions: { discipline: 'Biochemistry', icon: FlaskConical },
  Transfiguration: { discipline: 'Software Development', icon: Combine },
  Herbology: { discipline: 'Data Science', icon: Leaf },
};

export const magicalFields = Object.keys(magicalFieldDetails) as MagicalField[];

export interface Project {
  id: string;
  title: string;
  description: string;
  field: MagicalField;
  tags: string[];
  ownerId: string;
  teamIds: string[];
  isComplete: boolean;
  mainContent: string;
  imageUrl?: string;
  imageHint?: string;
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  skills: string[];
}

export interface NavItem {
  href: string;
  label: string;
  icon: ComponentType<LucideProps>;
}
