'use client';
import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WandSparkles, Lightbulb, Loader2 } from 'lucide-react';
import { generateFundingSearchQueries } from '@/ai/flows/generate-search-queries';
import type { Project, User } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FelixFunding({ project, user }: { project: Project, user: User }) {
  const [isPending, startTransition] = useTransition();
  const [queries, setQueries] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateQueries = () => {
    startTransition(async () => {
      setError(null);
      setQueries([]);
      try {
        const result = await generateFundingSearchQueries({
          projectTitle: project.title,
          projectDescription: project.description,
          magicField: project.field,
          userSkills: user.skills,
        });
        setQueries(result.searchQueries);
      } catch (e) {
        setError('Failed to summon Felix Funding. The magic might be unstable.');
        console.error(e);
      }
    });
  };

  return (
    <Card className="bg-gradient-to-br from-card to-background">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-accent flex items-center gap-2">
            <WandSparkles/>
            Felix Funding
        </CardTitle>
        <CardDescription>
          Summon our generative AI to find research grants, scholarships, and mentors for this project.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
            <Button onClick={handleGenerateQueries} disabled={isPending} size="lg">
            {isPending ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
                <WandSparkles className="mr-2 h-5 w-5" />
            )}
            <span>{isPending ? 'Summoning...' : 'Generate Search Queries'}</span>
            </Button>
        </div>
        
        {isPending && (
             <div className="flex items-center justify-center p-8 space-x-2 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Brewing potent queries...</span>
             </div>
        )}

        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {queries.length > 0 && (
          <div>
            <h3 className="font-semibold mb-4 text-lg">Suggested Search Queries:</h3>
            <ul className="space-y-3">
              {queries.map((query, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                  <span className="p-2 bg-secondary/50 rounded-md text-sm w-full">{query}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
