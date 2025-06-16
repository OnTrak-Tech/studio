import { designs } from '@/lib/designs';
import { PortfolioItemCard } from '@/components/PortfolioItemCard';

export default function PortfolioPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-4">Our Creations</h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a curated collection of our finest work, showcasing unique designs that blend artistry with craftsmanship.
        </p>
      </header>

      <section>
        {designs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {designs.map((design) => (
              <PortfolioItemCard key={design.id} design={design} />
            ))}
          </div>
        ) : (
          <p className="text-center font-body text-muted-foreground text-xl">
            Our portfolio is currently being updated. Please check back soon!
          </p>
        )}
      </section>
    </div>
  );
}
