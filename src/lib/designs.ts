export interface Design {
  id: string;
  title: string;
  shortDescription: string;
  heroImage: string; // For portfolio card
  images: string[]; // For detail page
  inspiration: string;
  materials: string[];
  constructionDetails: string;
  category: string;
}

export const designs: Design[] = [
  {
    id: '1',
    title: 'Ethereal Bloom Gown',
    shortDescription: 'A flowing evening gown inspired by enchanted gardens.',
    heroImage: 'https://placehold.co/400x600.png',
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/600x900.png', 'https://placehold.co/600x900.png'],
    inspiration: 'The delicate beauty of night-blooming flowers and mystical forest landscapes.',
    materials: ['Silk Chiffon', 'Satin Organza', 'Hand-sewn Crystal Beads', 'Embroidered Lace'],
    constructionDetails: 'Features a corset bodice with intricate boning, a multi-layered A-line skirt, and hand-draped detailing on the shoulders. Each floral embroidery element is meticulously hand-stitched.',
    category: 'Evening Wear',
  },
  {
    id: '2',
    title: 'Urban Voyager Jacket',
    shortDescription: 'A versatile jacket blending futuristic lines with classic comfort.',
    heroImage: 'https://placehold.co/400x600.png',
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/600x900.png'],
    inspiration: 'Modern architecture, cyberpunk aesthetics, and the dynamic energy of city life.',
    materials: ['Recycled Polyester Twill', 'Neoprene Accents', 'Custom 3D-Printed Hardware', 'Breathable Mesh Lining'],
    constructionDetails: 'Asymmetrical zip closure, multiple utility pockets with magnetic snaps, articulated sleeves for enhanced movement, and a detachable hood. Laser-cut paneling adds a geometric texture.',
    category: 'Outerwear',
  },
  {
    id: '3',
    title: 'Celestial Silk Blouse',
    shortDescription: 'An elegant silk blouse with intricate cosmic-inspired embroidery.',
    heroImage: 'https://placehold.co/400x600.png',
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/600x900.png'],
    inspiration: 'The vastness of the night sky, constellations, and the shimmering beauty of distant galaxies.',
    materials: ['Mulberry Silk Crepe de Chine', 'Silver Lurex Thread', 'Mother-of-Pearl Buttons'],
    constructionDetails: 'Classic tailored fit with a hidden button placket. The cuffs and collar feature delicate hand-embroidery depicting celestial motifs. French seams ensure a clean internal finish.',
    category: 'Tops',
  },
  {
    id: '4',
    title: 'Crimson Tide Skirt',
    shortDescription: 'A dramatic, high-waisted skirt with flowing asymmetrical layers.',
    heroImage: 'https://placehold.co/400x600.png',
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/600x900.png'],
    inspiration: 'The powerful movement of ocean waves and the rich hues of a sunset over water.',
    materials: ['Heavy Georgette', 'Taffeta Lining', 'Invisible Side Zipper'],
    constructionDetails: 'The skirt is constructed from multiple bias-cut panels to create a fluid drape and movement. A structured waistband provides support and definition.',
    category: 'Skirts',
  },
    {
    id: '5',
    title: 'Midnight Velvet Suit',
    shortDescription: 'A luxurious tailored velvet suit for a sophisticated statement.',
    heroImage: 'https://placehold.co/400x600.png',
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/600x900.png', 'https://placehold.co/600x900.png'],
    inspiration: 'Vintage Hollywood glamour and the allure of a starlit night.',
    materials: ['Cotton Velvet', 'Silk Charmeuse Lining', 'Covered Buttons'],
    constructionDetails: 'Single-breasted jacket with peak lapels and flap pockets. Trousers are high-waisted with a wide-leg silhouette. Precision tailoring ensures a flattering and comfortable fit.',
    category: 'Suits',
  },
  {
    id: '6',
    title: 'Desert Rose Kaftan',
    shortDescription: 'An airy, bohemian-style kaftan with intricate desert-inspired prints.',
    heroImage: 'https://placehold.co/400x600.png',
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/600x900.png'],
    inspiration: 'The resilience and beauty of desert flora, nomadic cultures, and sun-drenched landscapes.',
    materials: ['Lightweight Viscose Crepe', 'Hand-Block Printed Fabric', 'Tassel Embellishments'],
    constructionDetails: 'Loose, comfortable fit with wide sleeves and a deep V-neckline. Side slits allow for ease of movement. The unique print is designed in-house and applied using traditional block printing techniques.',
    category: 'Resort Wear',
  },
];

export const getDesignById = (id: string): Design | undefined => {
  return designs.find(design => design.id === id);
};
