import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

// Simple inline SVG for TikTok icon
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.59H9.32a2.592 2.592 0 0 1-2.59-2.59V3H5.5v11.72A4.3 4.3 0 0 0 9.8 19h.54a4.3 4.3 0 0 0 4.3-4.3v-5.62a8.773 8.773 0 0 0 4.91 1.73V5.82z" />
  </svg>
);


export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/yourprofile', // Replace with your actual Instagram URL
      icon: <Instagram className="h-6 w-6" />,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/yourprofile', // Replace with your actual Facebook URL
      icon: <Facebook className="h-6 w-6" />,
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@yourprofile', // Replace with your actual TikTok URL
      icon: <TikTokIcon className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="bg-muted py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={`Visit Pada Collections on ${social.name}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <p className="font-body">&copy; {year} Pada Collections. All rights reserved.</p>
        <p className="font-body text-sm mt-1">Designed with passion and creativity.</p>
      </div>
    </footer>
  );
}
