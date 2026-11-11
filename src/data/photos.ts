// Demo images from Unsplash — replace with your own photos
export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export const photos: GalleryImage[] = [
  {
    src: '/images/personal/solo-1.jpg',
    alt: 'Mountain landscape at sunrise',
    caption: 'Morning in the Alps (demo)',
  },
  {
    src: '/images/personal/family-1.jpg',
    alt: 'Mountain landscape at sunset',
    caption: 'Evening in the Alps (demo)',
  },
  {
    src: '/images/personal/family-2.jpg',
    alt: 'Forest path with sun rays',
    caption: 'Forest walk (demo)',
  },
  {
    src: '/images/personal/family-3.jpg',
    alt: 'Lake and mountains reflection',
    caption: 'Lake view (demo)',
  },
];
