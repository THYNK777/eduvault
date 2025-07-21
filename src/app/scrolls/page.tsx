import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Clock } from 'lucide-react';

export default function ScrollsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-headline font-bold text-accent">The Restricted Section</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          These scrolls contain potent knowledge, available only for a limited time. Study them before they return to the vault.
        </p>
      </header>
      
      <Alert className="mb-8 border-yellow-900/50 bg-[#4d3a1f]/20 text-yellow-200/90">
        <Clock className="h-4 w-4 text-yellow-600" />
        <AlertTitle className="font-bold text-yellow-400">Time-Sensitive Knowledge</AlertTitle>
        <AlertDescription>
          This week's scroll will vanish in <strong>3 days, 14 hours</strong>.
        </AlertDescription>
      </Alert>
      
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="relative h-80 w-full">
            <Image
              src="https://placehold.co/1200x800.png"
              alt="Advanced Potion-Making"
              layout="fill"
              objectFit="cover"
              data-ai-hint="old book"
            />
          </div>
          <CardTitle className="font-headline text-4xl mt-6">Advanced Potion-Making: The Art of Subtlety</CardTitle>
          <CardDescription>A masterclass by Professor S. Snape</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none text-lg text-muted-foreground/90 leading-relaxed">
          <p>
            Welcome, aspiring potioneers, to a domain where precision is paramount and intuition is your most trusted guide.
            The art of potion-making is not one of flamboyant wand-waving or silly incantations. It is a subtle science,
            an exact art. Here, we delve beyond the rudimentary instructions of your standard textbooks.
          </p>
          <p>
            This week's scroll focuses on the Draught of Living Death, a potion of immense power and complexity.
            We will explore the crucial role of the Sopophorous bean's infusion—a step often botched by amateurs.
            It is not enough to merely crush the bean; one must release its juices with the flat side of a silver dagger,
            a technique that dramatically enhances its potency. We will also examine the counter-clockwise stirring
            required after adding the powdered root of asphodel, a detail that prevents the concoction from turning into
            a useless, viscous sludge.
          </p>
          <blockquote>
            "The mind is a complex and many-layered thing, Potter... or at least, most minds are."
          </blockquote>
          <p>
            Pay close attention. The knowledge contained herein is not for the faint of heart or the unfocused mind.
            Master these subtleties, and you will find your potions elevate from mere school-level brews to concoctions
            of true power and elegance. Fail, and you risk nothing short of disaster. The choice, as always, is yours.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
