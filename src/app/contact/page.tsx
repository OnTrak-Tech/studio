import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-4">Get in Touch</h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a question, a custom request, or an idea for collaboration? We&apos;d love to hear from you.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-card p-8 rounded-lg shadow-xl">
          <h2 className="font-headline text-3xl text-primary mb-6">Send a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
            <h2 className="font-headline text-3xl text-primary mb-6">Contact Information</h2>
            <div className="bg-card p-8 rounded-lg shadow-xl space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="bg-accent p-3 rounded-full text-accent-foreground">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl text-primary">Our Studio</h3>
                        <p className="font-body text-muted-foreground">123 Fashion Avenue, Style City, 75001</p>
                        <a href="#" className="font-body text-sm text-accent hover:underline">Get Directions</a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-accent p-3 rounded-full text-accent-foreground">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl text-primary">Email Us</h3>
                        <p className="font-body text-muted-foreground">
                            <a href="mailto:hello@stitchmuse.com" className="hover:underline">hello@stitchmuse.com</a>
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-accent p-3 rounded-full text-accent-foreground">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl text-primary">Call Us</h3>
                        <p className="font-body text-muted-foreground">
                            <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a>
                        </p>
                        <p className="font-body text-xs text-muted-foreground/70">Mon - Fri, 9am - 6pm</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
