import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mockProjects, mockUsers } from '@/lib/mock-data';
import MagicalFieldIcon from '@/components/magical-field-icon';
import { magicalFieldDetails } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FelixFunding from './felix-funding';
import { Separator } from '@/components/ui/separator';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = mockProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }
  
  const owner = mockUsers.find(u => u.id === project.ownerId);
  const teamMembers = mockUsers.filter(u => project.teamIds.includes(u.id));

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <MagicalFieldIcon field={project.field} className="h-12 w-12 text-accent" />
          <div>
            <p className="text-accent font-semibold">{magicalFieldDetails[project.field].discipline}</p>
            <h1 className="text-5xl font-headline font-bold">{project.title}</h1>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            {project.imageUrl && (
                <div className="relative h-96 w-full rounded-lg overflow-hidden border-2 border-accent/20">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        data-ai-hint={project.imageHint}
                    />
                </div>
            )}
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Project Grimoire</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none text-muted-foreground/90">
                    <p>{project.mainContent}</p>
                </CardContent>
            </Card>
            <FelixFunding project={project} user={owner!} />
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Project Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={project.isComplete ? "default" : "destructive"} className="bg-accent text-accent-foreground">
                {project.isComplete ? 'Completed' : 'Unfinished Spell'}
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Order of the Project</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={member.id}>
                    <Link href="/profile" className="flex items-center gap-3 group">
                        <Avatar>
                            <AvatarImage src={member.avatarUrl} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold group-hover:text-accent transition-colors">{member.name}</p>
                            <p className="text-xs text-muted-foreground">{member.id === owner?.id ? 'Owner' : 'Collaborator'}</p>
                        </div>
                    </Link>
                    {index < teamMembers.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
