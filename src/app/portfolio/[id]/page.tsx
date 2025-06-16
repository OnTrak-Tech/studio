import Image from 'next/image';
import { getDesignById } from '@/lib/designs';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react'; // Example icon

export default function DesignDetailPage({ params }: { params: { id: string } }) {
  const design = getDesignById(params.id);

  if (!design) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <header className="relative">
        <Button asChild variant="outline" className="absolute left-0 top-0 mb-4 group">
            <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
            </Link>
        </Button>
        <h1 className="font-headline text-4xl md:text-5xl text-primary text-center pt-16 md:pt-0">{design.title}</h1>
        <p className="font-body text-center text-muted-foreground text-lg mt-2">{design.shortDescription}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-4">
          {design.images.map((src, index) => (
            <div key={index} className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`${design.title} - view ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                data-ai-hint={`${design.category} detail`}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="sticky top-24 space-y-8 bg-card p-6 md:p-8 rounded-lg shadow-xl">
          <div>
            <h2 className="font-headline text-2xl text-primary mb-3">Category</h2>
            <Badge variant="secondary" className="text-sm py-1 px-3 bg-accent text-accent-foreground">{design.category}</Badge>
          </div>

          <div>
            <h2 className="font-headline text-2xl text-primary mb-3">Inspiration</h2>
            <p className="font-body text-foreground/80 leading-relaxed">{design.inspiration}</p>
          </div>

          <div>
            <h2 className="font-headline text-2xl text-primary mb-3">Materials</h2>
            <ul className="list-disc list-inside space-y-1 font-body text-foreground/80">
              {design.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-headline text-2xl text-primary mb-3">Construction Details</h2>
            <p className="font-body text-foreground/80 leading-relaxed">{design.constructionDetails}</p>
          </div>
          
          <Button size="lg" className="w-full group bg-primary hover:bg-primary/90">
            <ShoppingBag className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> Inquire About This Piece
          </Button>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const { designs } = await import('@/lib/designs');
  return designs.map((design) => ({
    id: design.id,
  }));
}
