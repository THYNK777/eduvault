import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Clock } from 'lucide-react';

export default function ScrollsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-headline font-bold text-accent">The Restricted Section</h1>
        <p className="mt-2 text-lg" style={{ color: '#CD7F32' }}>
          These scrolls contain potent knowledge, available only for a limited time. Study them before they return to the vault.
        </p>
      </header>
      
      <Alert variant="destructive" className="mb-8">
        <Clock className="h-4 w-4" />
        <AlertTitle className="font-bold">Time-Sensitive Knowledge</AlertTitle>
        <AlertDescription>
          This week's scroll will vanish in <strong>3 days, 14 hours</strong>.
        </AlertDescription>
      </Alert>
      
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="relative h-80 w-full">
            <Image
              src="https://placehold.co/1200x800.png"
              alt="Cybersecurity concept"
              layout="fill"
              objectFit="cover"
              data-ai-hint="cybersecurity digital"
            />
          </div>
          <CardTitle className="font-headline text-4xl mt-6">The Rising Importance of Cybersecurity in the Digital Age</CardTitle>
          <CardDescription>by Alex Morgan</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none text-lg text-muted-foreground/90 leading-relaxed">
          <p className="text-base italic">Cybersecurity Researcher and Tech Analyst</p>
          <p>
            In today’s interconnected world, cybersecurity has evolved from a niche technical concern into a global priority. As businesses, governments, and individuals increasingly depend on digital platforms, the need for robust cyber defenses has never been more critical.
          </p>
          
          <h3>What is Cybersecurity?</h3>
          <p>
            Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. These cyber threats often aim to access, change, or destroy sensitive information, extort money, or interrupt normal business processes. With the rise in cloud computing, Internet of Things (IoT) devices, and remote work, vulnerabilities have multiplied.
          </p>

          <h3>Common Threats in Cybersecurity</h3>
          <ul>
            <li><strong>Phishing Attacks</strong> – Deceptive emails or messages that trick users into revealing personal information.</li>
            <li><strong>Ransomware</strong> – Malicious software that encrypts data and demands payment for decryption.</li>
            <li><strong>Data Breaches</strong> – Unauthorized access to confidential information.</li>
            <li><strong>Zero-Day Exploits</strong> – Attacks on software vulnerabilities unknown to the vendor.</li>
          </ul>

          <h3>Why It Matters</h3>
          <p>
            Cyberattacks can cripple businesses, compromise national security, and ruin reputations. According to recent reports, the global cost of cybercrime is projected to reach over $10 trillion annually by 2025. As digital infrastructure becomes more complex, so does the threat landscape.
          </p>

          <h3>How to Stay Protected</h3>
          <ul>
            <li>Use strong, unique passwords and enable multi-factor authentication.</li>
            <li>Regularly update software to patch vulnerabilities.</li>
            <li>Train employees on recognizing phishing and social engineering tactics.</li>
            <li>Implement robust firewalls, intrusion detection systems, and regular security audits.</li>
          </ul>

          <hr className="border-accent/30 my-6" />

          <div className="text-sm text-muted-foreground">
              <p><strong>Date:</strong> July 21, 2025</p>
              <p><strong>Institution/Organization:</strong> Independent Researcher</p>
              <p><strong>Contact:</strong> alex.morgan.cyber@protonmail.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
