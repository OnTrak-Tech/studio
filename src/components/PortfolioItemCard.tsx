import Link from 'next/link';
import Image from 'next/image';
import type { Design } from '@/lib/designs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PortfolioItemCardProps {
  design: Design;
}

export function PortfolioItemCard({ design }: PortfolioItemCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card group">
      <CardHeader className="p-0">
        <Link href={`/portfolio/${design.id}`} aria-label={`View details for ${design.title}`}>
          <div className="aspect-[3/4] relative w-full overflow-hidden">
            <Image
              src={design.heroImage}
              alt={design.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              data-ai-hint={`${design.category} fashion`}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl text-primary mb-2">
          <Link href={`/portfolio/${design.id}`} className="hover:text-accent transition-colors">
            {design.title}
          </Link>
        </CardTitle>
        <p className="font-body text-muted-foreground text-sm line-clamp-3">{design.shortDescription}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="text-accent p-0 hover:text-primary group">
          <Link href={`/portfolio/${design.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
