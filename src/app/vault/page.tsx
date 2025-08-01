'use client';

import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import JoinProjectCard from './join-project-card';
import { mockProjects } from '@/lib/mock-data';
import { WandSparkles } from 'lucide-react';

export default function VaultPage() {
  const projectsForRecruitment = mockProjects.filter(p => ['proj-stove', 'proj-lawyer', 'proj-mirror'].includes(p.id));

  const openForm = () => {
    // @ts-ignore
    if (window.formsapp) {
        // @ts-ignore
        new formsapp('687f9312c2528d0002d2d6e5', 'popup', {
            overlay: 'rgba(45,45,45,0.5)',
            width: '800px',
            height: '600px',
            openingAnimation: {
                entrance: 'animate__fadeIn',
                exit: 'animate__fadeOut',
            },
        }).open();
    }
  };

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
        <Button
          onClick={openForm}
          size="lg"
          className="px-8 py-6 text-lg font-bold shadow-lg shadow-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/60 hover:scale-105"
        >
          <WandSparkles className="mr-3 h-6 w-6" />
          Add a New Spell
        </Button>
        <Script
          src="https://forms.app/cdn/embed.js"
          strategy="lazyOnload"
        />
      </div>
    </div>
  );
}
