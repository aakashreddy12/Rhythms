export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  photographer?: string;
  date: string;
}

export interface EventFolder {
  id: string;
  name: string;
  date: string;
  description: string;
  type: 'festival' | 'cultural' | 'performance' | 'orientation' | 'exhibition' | 'concert' | 'workshop' | 'competition';
  coverImage: string;
  images: GalleryImage[];
  featured: boolean;
}

// Sample gallery data - This can be easily updated by admins
export const galleryData: EventFolder[] = [
  {
    id: 'swagatam-krishna-25',
    name: 'Swagatam Krishna\'25',
    date: '2025-01-15',
    description: 'Our spectacular Krishna-themed welcome celebration featuring traditional performances, cultural displays, and vibrant festivities.',
    type: 'festival',
    coverImage: '/assets/images/swagatam-krishna-25/cover.jpeg',
    featured: true,
    images: [
      {
        id: 'sk25-001',
        url: '/assets/images/swagatam-krishna-25/IMG_2291.JPG',
        caption: 'Krishna-themed stage decoration',
        photographer: 'Rhythms Photography Team',
        date: '2025-01-15'
      },
      {
        id: 'sk25-002',
        url: '/assets/images/swagatam-krishna-25/IMG_2292.JPG',
        caption: 'Traditional dance performance depicting Krishna Leela',
        photographer: 'Cultural Events Photographer',
        date: '2025-01-15'
      },
      {
        id: 'sk25-003',
        url: '/assets/images/swagatam-krishna-25/IMG_2293.JPG',
        caption: 'Students in traditional Krishna costumes',
        photographer: 'Portrait Specialist',
        date: '2025-01-15'
      },
      {
        id: 'sk25-004',
        url: '/assets/images/swagatam-krishna-25/IMG_2294.JPG',
        caption: 'Flute performance tribute to Krishna',
        photographer: 'Music Documentation Team',
        date: '2025-01-15'
      },
      {
        id: 'sk25-005',
        url: '/assets/images/swagatam-krishna-25/IMG_2295.JPG',
        caption: 'Beautiful rangoli art featuring Krishna motifs',
        photographer: 'Arts Portfolio Team',
        date: '2025-01-15'
      },
      {
        id: 'sk25-006',
        url: '/assets/images/swagatam-krishna-25/IMG_2296.JPG',
        caption: 'Audience enjoying the cultural performances',
        photographer: 'Event Documentation',
        date: '2025-01-15'
      },
      {
        id: 'sk25-007',
        url: '/assets/images/swagatam-krishna-25/IMG_2297.JPG',
        caption: 'Traditional music ensemble performance',
        photographer: 'Rhythms Photography Team',
        date: '2025-01-15'
      },
      {
        id: 'sk25-008',
        url: '/assets/images/swagatam-krishna-25/IMG_2298.JPG',
        caption: 'Students participating in Krishna-themed games',
        photographer: 'Social Media Team',
        date: '2025-01-15'
      }
    ]
  }
];

export function getAllEventFolders(): EventFolder[] {
  return galleryData;
}

export function getFeaturedEventFolders(): EventFolder[] {
  return galleryData.filter(folder => folder.featured);
}

export function getEventFolderById(id: string): EventFolder | undefined {
  return galleryData.find(folder => folder.id === id);
}

export function getEventFoldersByType(type: EventFolder['type']): EventFolder[] {
  return galleryData.filter(folder => folder.type === type);
}

// Helper function to get total image count
export function getTotalImageCount(): number {
  return galleryData.reduce((total, folder) => total + folder.images.length, 0);
}

// Helper function to get total event count
export function getTotalEventCount(): number {
  return galleryData.length;
}
