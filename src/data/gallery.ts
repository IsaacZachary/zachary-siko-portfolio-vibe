interface GalleryItem {
  url: string;
  description: string;
  category: 'professional' | 'social' | 'ai' | 'random';
}

export const galleryData: GalleryItem[] = [
  {
    url: '/lovable-uploads/49563804-5552-4831-b2e5-7bcf705dbcc7.png',
    description: 'Professional headshot',
    category: 'professional'
  },
  {
    url: '/lovable-uploads/7b206c01-fa6b-400f-b455-ac517ea4d77c.png',
    description: 'Project showcase',
    category: 'professional'
  },
  // Add more gallery items as needed
];
