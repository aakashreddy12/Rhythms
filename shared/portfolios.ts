export interface PortfolioMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  achievements?: string[];
}

export interface PortfolioEvent {
  name: string;
  date: string;
  description: string;
  images: string[];
  type: 'performance' | 'workshop' | 'competition' | 'collaboration';
}

export interface Portfolio {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  icon: string;
  color: string;
  heroImage: string;
  mission: string;
  vision: string;
  members: PortfolioMember[];
  recentEvents: PortfolioEvent[];
  achievements: string[];
  upcomingEvents: string[];
}

export const portfoliosData: Portfolio[] = [
  {
    id: 'dance',
    title: 'Dance',
    subtitle: 'Team Invincibles',
    description: 'Unleashing rhythm and movement through contemporary, classical, and folk dance forms.',
    fullDescription: 'Team Invincibles is the heartbeat of Rhythms, bringing energy and grace to every performance. Our diverse dance portfolio encompasses classical Indian dance forms, contemporary choreography, folk traditions, and modern fusion styles. We believe dance is a universal language that connects hearts and tells stories beyond words.',
    icon: 'Sparkles',
    color: 'from-gold-400 to-gold-600',
    heroImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&h=600&fit=crop',
    mission: 'To create mesmerizing performances that celebrate the diversity of dance while pushing creative boundaries.',
    vision: 'To be recognized as the premier dance collective that preserves tradition while embracing innovation.',
    members: [
      {
        name: 'Raghu Vamshi',
        role: 'Dance Lead',
        image: '/assets/images/profile-photos/dance-lead.jpg',
        bio: 'Trained in western and contemporary dance, Raghu leads with passion and precision.',
        achievements: []
      }
    ],
    recentEvents: [],
    achievements: [],
    upcomingEvents: []
  },
  {
    id: 'music',
    title: 'Music',
    subtitle: 'Band Retrieve',
    description: 'Creating melodies that resonate with the soul through vocals, instruments, and compositions.',
    fullDescription: 'Band Retrieve is where musical dreams come to life. Our talented musicians span across genres from classical to rock, acoustic to electronic. We nurture both vocal and instrumental talents, encouraging original compositions while celebrating timeless classics.',
    icon: 'Music',
    color: 'from-gold-500 to-gold-700',
    heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop',
    mission: 'To create harmonious music that touches souls and brings the community together through the power of sound.',
    vision: 'To establish a musical legacy that inspires future generations of artists.',
    members: [
      {
        name: 'Arun Daniel',
        role: 'Music Lead & Vocalist',
        image: '/assets/images/profile-photos/music-lead.jpg',
        bio: 'A versatile vocalist with classical training and contemporary flair.',
        achievements: []
      },
      {
        name: 'Saketh Singh',
        role: 'Lead singer',
        image: '/assets/images/profile-photos/lead-singer.jpeg',
        bio: 'Rock and acoustic specialist who brings energy to every performance.',
        achievements: []
      },
      {
        name: 'Renesh Reddy',
        role: 'Singer',
        image: '/assets/images/profile-photos/renesh-red.jpeg',
        bio: 'Classical pianist who creates beautiful original compositions.',
        achievements: []
      }
    ],
    recentEvents: [],
    achievements: [],
    upcomingEvents: []
  },
  {
    id: 'theatre',
    title: 'Theatre',
    subtitle: 'Arcadia',
    description: 'Bringing stories to life through dramatic performances and creative storytelling.',
    fullDescription: 'Arcadia is our theatrical sanctuary where stories come alive through powerful performances. From classical dramas to contemporary plays, from comedy to tragedy, our theatre portfolio explores the full spectrum of human emotion and experience.',
    icon: 'Theater',
    color: 'from-gold-400 to-gold-800',
    heroImage: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=1200&h=600&fit=crop',
    mission: 'To create compelling theatrical experiences that challenge, inspire, and entertain our audience.',
    vision: 'To be a platform where stories transcend boundaries and connect with hearts across cultures.',
    members: [
      {
        name: 'Deepesh Reddy',
        role: 'Theatre Lead & Director',
        image: '/assets/images/profile-photos/theatre-lead.jpeg',
        bio: 'Passionate director with expertise in both classical and modern theatre.',
        achievements: []
      },
    ],
    recentEvents: [],
    achievements: [],
    upcomingEvents: []
  },
  {
    id: 'arts',
    title: 'Arts',
    subtitle: 'Visual Excellence',
    description: 'Expressing creativity through painting, sketching, and digital art forms.',
    fullDescription: 'Visual Excellence is where imagination meets canvas, where digital meets traditional. Our arts portfolio celebrates visual creativity in all its forms - from traditional painting and sketching to cutting-edge digital art and design.',
    icon: 'Palette',
    color: 'from-gold-300 to-gold-600',
    heroImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop',
    mission: 'To provide a platform for visual artists to explore, create, and showcase their artistic vision.',
    vision: 'To foster a community where art transcends mediums and inspires creativity in all forms.',
    members: [
      {
        name: 'Prasanna',
        role: 'Arts Lead',
        image: '/assets/images/profile-photos/arts-lead.jpeg',
        bio: 'Multi-disciplinary artist specializing in watercolors and digital illustration.',
        achievements: []
      },

    ],
    recentEvents: [],
    achievements: [],
    upcomingEvents: []
  },
  {
    id: 'technical',
    title: 'Technical',
    subtitle: 'Innovation Hub',
    description: 'Merging technology with creativity for digital art, web design, and multimedia.',
    fullDescription: 'Innovation Hub represents the intersection of technology and creativity. We work on multimedia projects, web design, app development, and digital solutions that support all portfolios while pushing the boundaries of what\'s possible with technology.',
    icon: 'Code',
    color: 'from-gold-600 to-gold-800',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop',
    mission: 'To leverage technology as a canvas for creativity and innovation in all cultural expressions.',
    vision: 'To be the technical backbone that amplifies the reach and impact of all cultural activities.',
    members: [
      {
        name: 'Bhupesh Varma',
        role: 'Technical Lead',
        image: '/assets/images/profile-photos/technical-lead.jpeg',
        bio: 'Full-stack developer with a passion for creative technology solutions.',
        achievements: []
      },
    ],
    recentEvents: [],
    achievements: [],
    upcomingEvents: []
  }
];

export function getPortfolioById(id: string): Portfolio | undefined {
  return portfoliosData.find(portfolio => portfolio.id === id);
}

export function getAllPortfolios(): Portfolio[] {
  return portfoliosData;
}
