import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { designs } from '@/lib/designs';
import { PortfolioItemCard } from '@/components/PortfolioItemCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredDesigns = designs.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-accent">
        <Image
          src="https://placehold.co/1600x800.png"
          alt="Abstract fashion background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
          data-ai-hint="abstract fashion"
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-7xl text-primary-foreground mb-6">
            Stitch Muse
          </h1>
          <p className="font-body text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Crafting unique narratives through bespoke fashion. Discover elegance, innovation, and artistry in every stitch.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 group">
            <Link href="/portfolio">
              Explore Portfolio <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About the Designer Section */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">Meet the Artisan</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Image
            src="https://placehold.co/200x200.png"
            alt="Designer portrait"
            width={150}
            height={150}
            className="rounded-full mx-auto shadow-lg border-4 border-accent"
            data-ai-hint="designer portrait"
          />
          <p className="font-body text-lg text-foreground/80 leading-relaxed">
            Welcome to Stitch Muse, where fashion transcends mere clothing to become a form of personal expression. 
            With a decade of experience in haute couture and bespoke design, I blend timeless techniques with contemporary vision. 
            Each piece is a labor of love, meticulously crafted to tell a unique story and empower the wearer.
          </p>
          <p className="font-body text-lg text-foreground/80 leading-relaxed">
            My philosophy centers on sustainable practices, exquisite materials, and a collaborative approach with clients, 
            ensuring that every creation is not just a garment, but a cherished experience.
          </p>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="container mx-auto px-4">
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-10 text-center">Featured Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDesigns.map((design) => (
            <PortfolioItemCard key={design.id} design={design} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 group">
            <Link href="/portfolio">
              View All Designs <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
