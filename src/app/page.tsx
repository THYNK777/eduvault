'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Clock, Search } from 'lucide-react';
import ProjectCard from '@/components/project-card';
import { mockProjects } from '@/lib/mock-data';
import type { Project } from '@/lib/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <h1 className="text-4xl font-headline font-bold text-accent cursor-default">The Room of Unfinished Spells</h1>
                </TooltipTrigger>
                <TooltipContent 
                  side="bottom" 
                  align="start" 
                  className="max-w-xs border-yellow-900/50"
                  style={{
                    color: '#946B2D',
                    textShadow: '0 0 8px #946B2D',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}
                  >
                  <p>
                  The Room of Unfinished Spells is where half-baked ideas and paused projects wait to be revived like a magical storage of “to-be-continued.” ✨ Here, you can even summon fellow Spellcasters to join your quest and bring your lost research back to life! 🪄📜
                  </p>
                </TooltipContent>
              </Tooltip>
        </TooltipProvider>
        <p className="text-muted-foreground mt-2">Discover, collaborate on, and revive dormant academic projects.</p>
      </header>

      <Alert variant="destructive" className="mb-8 border-accent/50 text-accent [&>svg]:text-accent">
        <Clock className="h-4 w-4" />
        <AlertTitle className="font-headline text-lg">
          🪄 Start Your Magical Journey in Ravenclaw! 🦅
        </AlertTitle>
        <AlertDescription className="text-accent/90">
            <p>
              All features are first built here —{" "}
              <strong className="font-bold text-white">
                refresh the link to see the latest magic!
              </strong>{" "}
              ✨
            </p>
            <p className="text-xs mt-2">
              Next, you’ll move to Gryffindor, then Slytherin, and finally
              Hufflepuff. You must go in this order — just like a true wizarding
              path! 🧙‍♂️
            </p>
        </AlertDescription>
      </Alert>

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
