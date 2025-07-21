'use client';
import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WandSparkles, Lightbulb, Loader2, BookUser, Banknote } from 'lucide-react';
import { generateFundingSearchQueries, GenerateFundingSearchQueriesOutput } from '@/ai/flows/generate-search-queries';
import type { Project, User } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FelixFunding({ project, user }: { project: Project, user: User }) {
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState<GenerateFundingSearchQueriesOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateQueries = () => {
    startTransition(async () => {
      setError(null);
      setResults(null);
      try {
        const result = await generateFundingSearchQueries({
          projectTitle: project.title,
          projectDescription: project.description,
          magicField: project.field,
          userSkills: user.skills,
        });
        setResults(result);
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
            <span>{isPending ? 'Summoning...' : 'Consult Felix Funding'}</span>
            </Button>
        </div>
        
        {isPending && (
             <div className="flex items-center justify-center p-8 space-x-2 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Brewing potent possibilities...</span>
             </div>
        )}

        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {results && (
          <div className="space-y-8">
            {results.fundingSources?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2"><Banknote className="text-accent" />Potential Funding Sources</h3>
                <div className="space-y-4">
                  {results.fundingSources.map((source, index) => (
                    <Card key={index} className="bg-secondary/50">
                        <CardHeader className='pb-2'>
                            <CardTitle className='text-base font-medium'>{source.name}</CardTitle>
                            <CardDescription className='capitalize text-xs text-accent'>{source.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm text-muted-foreground'>{source.description}</p>
                        </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {results.mentors?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2"><BookUser className="text-accent" />Suggested Mentors</h3>
                <div className="space-y-4">
                  {results.mentors.map((mentor, index) => (
                    <Card key={index} className="bg-secondary/50">
                       <CardHeader className='pb-2'>
                           <CardTitle className='text-base font-medium'>{mentor.name}</CardTitle>
                        </CardHeader>
                       <CardContent>
                           <p className='text-sm text-muted-foreground'>{mentor.expertise}</p>
                       </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {results.searchQueries?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2"><Lightbulb className="text-accent" />Suggested Search Queries</h3>
                <ul className="space-y-3">
                  {results.searchQueries.map((query, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <WandSparkles className="h-5 w-5 mt-1 text-accent/70 flex-shrink-0" />
                      <span className="p-2 bg-secondary/50 rounded-md text-sm w-full">{query}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
