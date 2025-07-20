import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import MagicalFieldIcon from './magical-field-icon';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="h-full flex flex-col hover:border-accent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10">
        <CardHeader>
          {project.imageUrl && (
             <div className="relative h-40 w-full mb-4 rounded-t-lg overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                />
            </div>
          )}
          <CardTitle className="font-headline text-xl leading-tight flex items-start gap-2">
            <MagicalFieldIcon field={project.field} className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
            <span>{project.title}</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground/80 line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
