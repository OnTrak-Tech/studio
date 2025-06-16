import { AiAssistantForm } from '@/components/AiAssistantForm';
import { Lightbulb } from 'lucide-react';

export default function AiAssistantPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-4">
          <Lightbulb className="inline-block h-12 w-12 mr-3 text-accent" />
          AI Design Assistant
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Unleash your creativity with our AI-powered assistant. Describe your design idea, and let our AI suggest materials, patterns, and silhouettes to inspire your next masterpiece.
        </p>
      </header>

      <section className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-xl">
        <AiAssistantForm />
      </section>
    </div>
  );
}
