import type { SVGProps } from 'react';

export function StitchMuseLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      aria-label="Pada Collections Logo"
    >
      <path
        d="M20 80C30 70 40 75 50 80C60 85 70 80 80 70"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 20V50L70 40"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="15" r="5" fill="currentColor" />
    </svg>
  );
}
