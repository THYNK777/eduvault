'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ProjectCard from '@/components/project-card';
import { mockProjects } from '@/lib/mock-data';
import type { Project } from '@/lib/types';

export default function RoomOfUnfinishedSpells() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = mockProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.field.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold text-accent">The Room of Unfinished Spells</h1>
        <p className="text-muted-foreground mt-2">Discover, collaborate on, and revive dormant academic projects.</p>
      </header>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Use the Pensieve to search for projects, topics, or spells..."
          className="pl-10 text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
