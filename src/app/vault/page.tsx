import VaultForm from './vault-form';

export default function VaultPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold text-accent">Deposit a New Spell</h1>
        <p className="text-muted-foreground mt-2">
          Secure your unfinished work in the vault. Tag it with the correct magical discipline to allow others to discover and contribute.
        </p>
      </header>
      <VaultForm />
    </div>
  );
}
