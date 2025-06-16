import type { SVGProps } from 'react';

export function StitchMuseLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 280 120" // Wider viewBox to accommodate the design
      fill="currentColor" // Default fill for all child elements
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      aria-label="Pada Collections Logo" // This was updated in a previous step
    >
      {/* Simplified Silhouette */}
      <path 
        d="M55 25 
           C 50 15, 25 15, 20 30 
           C 15 45, 22 60, 22 60 
           L 15 75 
           C 15 75, 10 95, 30 100 
           L 40 105 
           L 70 90 
           L 65 70 
           C 65 70, 75 55, 55 40 
           L 55 25 Z" 
      />

      {/* Oval */}
      <ellipse 
        cx="175" 
        cy="60" 
        rx="90" 
        ry="45" 
        stroke="currentColor" 
        strokeWidth="3.5" 
        fill="none" 
      />

      {/* "Pada" Text */}
      <text 
        x="175" 
        y="68" 
        fontFamily="Belleza, Arial, sans-serif" // Using app's headline font with fallbacks
        fontSize="42" 
        textAnchor="middle" 
        fontWeight="normal"
      >
        Pada
      </text>

      {/* "COLLECTION" Text */}
      <text 
        x="175" 
        y="90" 
        fontFamily="Alegreya, Times, serif" // Using app's body font with fallbacks
        fontSize="12" 
        textAnchor="middle"
        letterSpacing="0.5"
      >
        COLLECTION
      </text>

      {/* Registered Trademark ® */}
      <text 
        x="268" 
        y="32" 
        fontFamily="Alegreya, Times, serif" // Using app's body font with fallbacks
        fontSize="14" 
        textAnchor="middle"
      >
        ®
      </text>
    </svg>
  );
}
