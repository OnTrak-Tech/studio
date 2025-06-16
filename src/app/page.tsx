// Ensure "use client" is at the top if you're using hooks like useState and useEffect
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { designs } from '@/lib/designs';
import { PortfolioItemCard } from '@/components/PortfolioItemCard';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const heroBackgrounds = [
  { url: "https://placehold.co/1600x800.png", hint: "fashion texture" },
  { url: "https://placehold.co/1600x800.png", hint: "silk drape" },
  { url: "https://placehold.co/1600x800.png", hint: "geometric pattern" },
];

export default function Home() {
  const featuredDesigns = designs.slice(0, 3);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [imageOpacityClass, setImageOpacityClass] = useState("opacity-20"); // Initial state for the image opacity

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacityClass("opacity-0"); // Start fade out

      // Wait for fade-out to (nearly) complete, then change image and trigger fade-in
      setTimeout(() => {
        setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
        // The new image component will be mounted due to the 'key' prop changing.
        // The useEffect below will handle making it visible.
      }, 750); // This duration should align with the CSS transition duration for opacity
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // This effect runs when currentBgIndex changes (meaning a new image is intended to be shown)
    // or when imageOpacityClass has just been set to "opacity-0" by the interval.
    // If the image source has just changed (currentBgIndex updated) and the old image faded out,
    // we now need to fade in the new image.
    if (imageOpacityClass === "opacity-0") {
      // After a very brief delay (to ensure the new image with key is in DOM and starts at opacity-0),
      // set class to make it fade to opacity-20
      const fadeInTimeout = setTimeout(() => {
        setImageOpacityClass("opacity-20");
      }, 50); // Short delay
      return () => clearTimeout(fadeInTimeout);
    }
  }, [currentBgIndex, imageOpacityClass]);


  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-accent">
        <Image
          key={currentBgIndex} // Crucial: Forces React to re-render the Image component when index changes
          src={heroBackgrounds[currentBgIndex].url}
          alt="Abstract fashion background"
          layout="fill"
          objectFit="cover"
          className={cn(
            "transition-opacity duration-750 ease-in-out", // CSS transition for opacity
            imageOpacityClass // Applies "opacity-0" or "opacity-20"
          )}
          priority={currentBgIndex === 0} // Only the very first image is high priority
          data-ai-hint={heroBackgrounds[currentBgIndex].hint}
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-7xl text-primary-foreground mb-6">
            Pada Collections
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
            Welcome to Pada Collections, where fashion transcends mere clothing to become a form of personal expression. 
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
