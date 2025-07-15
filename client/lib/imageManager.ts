// Frontend image management system using local images
// All images are stored in the public/images/ folder

export interface ImageData {
  id: string;
  src: string;
  title: string;
  description: string;
  uploadDate: string;
}

export interface EventFolder {
  id: string;
  name: string;
  date: string;
  description: string;
  coverImage: string;
  images: ImageData[];
}

export interface ExecutiveMember {
  name: string;
  role: string;
  placeholder: string;
  department: string;
  description: string;
  imageSrc?: string;
}

// Local image paths - Update these paths to match your actual image files
const LOCAL_IMAGES = {
  // Executive member photos - stored in public/images/executives/
  executives: {
    "Ms.P.Bharathi": "/images/executives/club-coordinator.JPEG",
    "Suhas Valasala": "/images/executives/president.jpeg",
    "Aakash Reddy": "/images/executives/vice-president.JPEG",
    "Sujith Kumar": "/images/executives/event-management-lead.jpeg",
    "Raghu Vamshi": "/images/executives/dance-lead.jpg", // Dance Lead
    "Arun Daniel": "/images/executives/music-lead.jpg", // Music Lead
    "Deepesh Reddy": "/images/executives/theatre-lead.jpeg", // Theatre Lead
    "Prasanna N": "/images/executives/arts-lead.jpeg",
    "Poojitha Yarra": "/images/executives/publicity-lead.jpg",
    "Bhargavi Reddy": "/images/executives/treasury.jpeg", // Arts Lead
    "Bhupesh Varma": "/images/executives/technical-lead.jpeg",
    "Saketh Singh": "/images/executives/eb-member.jpeg",
    "Renesh Reddy": "/images/executives/eb-member (1).jpeg",
  },

  // Event cover images - stored in public/images/gallery/covers/
  eventCovers: [
    "/images/gallery/covers/spectra-2025.jpeg",
  ],

  // Logo file - stored in public/images/logos/
  logo: "/images/logos/rhythms-logo.png",
};

// Event-specific gallery images
const EVENT_GALLERIES = {
  "spectra-2025": [
    "/images/gallery/events/spectra-2025/photo-1.jpg",
    "/images/gallery/events/spectra-2025/photo-2.jpg",
    "/images/gallery/events/spectra-2025/photo-3.jpg",
    "/images/gallery/events/spectra-2025/photo-4.jpg",
    "/images/gallery/events/spectra-2025/photo-5.jpg",
    "/images/gallery/events/spectra-2025/photo-6.jpg",
    "/images/gallery/events/spectra-2025/photo-7.jpg",
    "/images/gallery/events/spectra-2025/photo-8.jpg",
    "/images/gallery/events/spectra-2025/photo-9.jpg",
    "/images/gallery/events/spectra-2025/photo-10.jpg",
    "/images/gallery/events/spectra-2025/photo-11.jpg",
    "/images/gallery/events/spectra-2025/photo-12.jpg",
  ],

  "inter-college-comp": [
    "/images/gallery/events/inter-college-comp/photo-1.jpg",
    "/images/gallery/events/inter-college-comp/photo-2.jpg",
    "/images/gallery/events/inter-college-comp/photo-3.jpg",
    "/images/gallery/events/inter-college-comp/photo-4.jpg",
    "/images/gallery/events/inter-college-comp/photo-5.jpg",
    "/images/gallery/events/inter-college-comp/photo-6.jpg",
    "/images/gallery/events/inter-college-comp/photo-7.jpg",
    "/images/gallery/events/inter-college-comp/photo-8.jpg",
  ],

  "rhythms-showcase": [
    "/images/gallery/events/rhythms-showcase/photo-1.jpg",
    "/images/gallery/events/rhythms-showcase/photo-2.jpg",
    "/images/gallery/events/rhythms-showcase/photo-3.jpg",
    "/images/gallery/events/rhythms-showcase/photo-4.jpg",
    "/images/gallery/events/rhythms-showcase/photo-5.jpg",
    "/images/gallery/events/rhythms-showcase/photo-6.jpg",
    "/images/gallery/events/rhythms-showcase/photo-7.jpg",
    "/images/gallery/events/rhythms-showcase/photo-8.jpg",
    "/images/gallery/events/rhythms-showcase/photo-9.jpg",
    "/images/gallery/events/rhythms-showcase/photo-10.jpg",
    "/images/gallery/events/rhythms-showcase/photo-11.jpg",
    "/images/gallery/events/rhythms-showcase/photo-12.jpg",
    "/images/gallery/events/rhythms-showcase/photo-13.jpg",
    "/images/gallery/events/rhythms-showcase/photo-14.jpg",
    "/images/gallery/events/rhythms-showcase/photo-15.jpg",
  ],

  "dance-workshop": [
    "/images/gallery/events/dance-workshop/photo-1.jpg",
    "/images/gallery/events/dance-workshop/photo-2.jpg",
    "/images/gallery/events/dance-workshop/photo-3.jpg",
    "/images/gallery/events/dance-workshop/photo-4.jpg",
    "/images/gallery/events/dance-workshop/photo-5.jpg",
    "/images/gallery/events/dance-workshop/photo-6.jpg",
  ],

  "music-night": [
    "/images/gallery/events/music-night/photo-1.jpg",
    "/images/gallery/events/music-night/photo-2.jpg",
    "/images/gallery/events/music-night/photo-3.jpg",
    "/images/gallery/events/music-night/photo-4.jpg",
    "/images/gallery/events/music-night/photo-5.jpg",
    "/images/gallery/events/music-night/photo-6.jpg",
    "/images/gallery/events/music-night/photo-7.jpg",
    "/images/gallery/events/music-night/photo-8.jpg",
    "/images/gallery/events/music-night/photo-9.jpg",
    "/images/gallery/events/music-night/photo-10.jpg",
  ],

  "theatre-festival": [
    "/images/gallery/events/theatre-festival/photo-1.jpg",
    "/images/gallery/events/theatre-festival/photo-2.jpg",
    "/images/gallery/events/theatre-festival/photo-3.jpg",
    "/images/gallery/events/theatre-festival/photo-4.jpg",
    "/images/gallery/events/theatre-festival/photo-5.jpg",
    "/images/gallery/events/theatre-festival/photo-6.jpg",
    "/images/gallery/events/theatre-festival/photo-7.jpg",
    "/images/gallery/events/theatre-festival/photo-8.jpg",
    "/images/gallery/events/theatre-festival/photo-9.jpg",
  ],
};

// Default event folders with local images
export const defaultEventFolders: EventFolder[] = [
  {
    id: "spectra-2025",
    name: "SPECTRA'25",
    date: "June 01, 2025",
    description: "Annual cultural celebration with all portfolios",
    coverImage: LOCAL_IMAGES.eventCovers[0],
    images: EVENT_GALLERIES["spectra-2025"].map((src, i) => ({
      id: `spectra-${i + 1}`,
      src,
      title: `Spectra Photo ${i + 1}`,
      description: `Beautiful moment from Spectra 2025`,
      uploadDate: "2025-06-01",
    })),
  },
];

// Local storage keys
const STORAGE_KEYS = {
  EVENT_FOLDERS: "rhythms_event_folders",
  EXECUTIVES: "rhythms_executives",
};

// Image management functions
export const imageManager = {
  // Get all event folders
  getEventFolders: (): EventFolder[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EVENT_FOLDERS);
      return stored ? JSON.parse(stored) : defaultEventFolders;
    } catch {
      return defaultEventFolders;
    }
  },

  // Save event folders
  saveEventFolders: (folders: EventFolder[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.EVENT_FOLDERS, JSON.stringify(folders));
    } catch (error) {
      console.error("Failed to save event folders:", error);
    }
  },

  // Get executive member image
  getExecutiveImage: (memberName: string): string => {
    return LOCAL_IMAGES.executives[memberName] || "";
  },

  // Get logo path
  getLogo: (): string => {
    return LOCAL_IMAGES.logo;
  },

  // Update executive member image (for custom overrides)
  updateExecutiveImage: (memberName: string, imageSrc: string): void => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXECUTIVES) || "{}";
      const executives = JSON.parse(stored);
      executives[memberName] = imageSrc;
      localStorage.setItem(STORAGE_KEYS.EXECUTIVES, JSON.stringify(executives));
    } catch (error) {
      console.error("Failed to update executive image:", error);
    }
  },

  // Get custom executive image
  getCustomExecutiveImage: (memberName: string): string | null => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXECUTIVES);
      if (stored) {
        const executives = JSON.parse(stored);
        return executives[memberName] || null;
      }
    } catch (error) {
      console.error("Failed to get custom executive image:", error);
    }
    return null;
  },

  // Add new event with images
  addNewEvent: (
    name: string,
    date: string,
    description: string,
    coverImage: string,
    eventImages: string[],
  ): void => {
    const id = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const newEvent: EventFolder = {
      id,
      name,
      date,
      description,
      coverImage,
      images: eventImages.map((src, i) => ({
        id: `${id}-${i + 1}`,
        src,
        title: `${name} Photo ${i + 1}`,
        description: `Photo from ${name}`,
        uploadDate: new Date().toISOString().split("T")[0],
      })),
    };

    const folders = imageManager.getEventFolders();
    folders.push(newEvent);
    imageManager.saveEventFolders(folders);
  },
};

// Helper function to check if image exists locally
export const checkImageExists = (imagePath: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imagePath;
  });
};

// Export local image paths for direct access
export { LOCAL_IMAGES, EVENT_GALLERIES };
