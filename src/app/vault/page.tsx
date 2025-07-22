'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import JoinProjectCard from './join-project-card';
import { mockProjects } from '@/lib/mock-data';
import { WandSparkles } from 'lucide-react';

export default function VaultPage() {
  const projectsForRecruitment = mockProjects.filter(p => ['proj-stove', 'proj-lawyer', 'proj-mirror'].includes(p.id));

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-headline font-bold text-accent">The Recruitment Hall</h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Find your next quest! These brave scholars are seeking collaborators to bring their spells to life.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projectsForRecruitment.map(project => (
            <JoinProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-16">
        <Button asChild size="lg" className="transition-all duration-300 transform hover:scale-105">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
             <WandSparkles className="mr-2 h-5 w-5" />
            Add a new spell
          </a>
        </Button>
      </div>
    </div>
  );
}
