import Image from 'next/image';
import { mockUsers, mockProjects } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/project-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfilePage() {
  const user = mockUsers[0];
  const userProjects = mockProjects.filter(p => p.ownerId === user.id || p.teamIds.includes(user.id));

  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center gap-8">
        <Avatar className="h-32 w-32 border-4 border-accent">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback className="text-4xl">{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-5xl font-headline font-bold">The Scholar's Sanctum</h1>
          <Card className="mt-4">
            <CardHeader>
                <CardTitle className="font-headline">Known Spells (Skills)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {user.skills.map(skill => (
                        <Badge key={skill} variant="outline" className="text-lg py-1 px-3">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-headline text-accent mb-8">Authored & Contributed Spells</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
