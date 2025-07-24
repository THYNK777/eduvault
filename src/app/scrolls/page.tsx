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
              src="data:image/jpeg;base64,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"
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
