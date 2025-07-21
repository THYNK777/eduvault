'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Project } from '@/lib/types';
import MagicalFieldIcon from '@/components/magical-field-icon';
import { mockUsers } from '@/lib/mock-data';
import { Users } from 'lucide-react';

interface JoinProjectCardProps {
  project: Project;
}

export default function JoinProjectCard({ project }: JoinProjectCardProps) {
  const { toast } = useToast();
  const owner = mockUsers.find(u => u.id === project.ownerId);

  const handleRequest = () => {
    toast({
      title: 'Request Sent!',
      description: `Your request to join "${project.title}" has been sent to ${owner?.name || 'the author'}.`,
    });
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10">
      <CardHeader>
        <CardTitle className="font-headline text-xl leading-tight flex items-start gap-2">
          <MagicalFieldIcon field={project.field} className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
          <span>{project.title}</span>
        </CardTitle>
        <CardDescription className="text-muted-foreground/80 line-clamp-3 h-[60px]">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
            <strong>Author:</strong> {owner?.name || 'Unknown'}
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleRequest} className="w-full">
            <Users className="mr-2 h-4 w-4" />
            Request to Join Team
        </Button>
      </CardFooter>
    </Card>
  );
}
