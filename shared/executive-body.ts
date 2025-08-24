export interface ExecutiveMember {
  id: string;
  name: string;
  role: string;
  portfolio: string;
  description: string;
  icon: string;
  image: string;
  gradient: string;
  email?: string;
  phone?: string;
  achievements?: string[];
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

// Executive Body Data - Easy to update by admins
export const executiveBodyData: ExecutiveMember[] = [
  {
    id: 'president',
    name: 'Suhas Valasala',
    role: 'President',
    portfolio: 'Leadership',
    description: 'Leading Rhythms with vision and passion for cultural excellence.',
    icon: 'Crown',
    image: '/assets/images/profile-photos/president.jpeg',
    gradient: 'from-gold-400 to-gold-600',
    email: 'president@rhythms-griet.com',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/suhas-valasala',
      instagram: 'https://www.instagram.com/suhas_valasala?igsh=MTBmazFiOHB3ZG81bA=='
    }
  },
  {
    id: 'vice-president',
    name: 'Aakash Reddy',
    role: 'Vice President',
    portfolio: 'Administration',
    description: 'Supporting leadership and coordinating across all portfolios.',
    icon: 'Users',
    image: '/assets/images/profile-photos/vice-president.JPEG',
    gradient: 'from-gold-500 to-gold-700',
    email: 'vp@rhythms-griet.com',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/janesmith',
      instagram: 'https://www.instagram.com/aakash_reddy04?igsh=ZGJ2dG1obTFnNjc%3D&utm_source=qr'
    }
  },
  {
    id: 'event-lead',
    name: 'Sujith Kumar',
    role: 'Event Lead',
    portfolio: 'Team Invincibles',
    description: 'Executing events from start to finish.',
    icon: 'Sparkles',
    image: '/assets/images/profile-photos/event-management-lead.jpeg',
    gradient: 'from-gold-500 to-gold-800',
    email: 'dance@rhythms-griet.com',
    socialLinks: {
      instagram: 'https://www.instagram.com/sunny_sujith_27?igsh=bWp6Zmw1eDd6NGNz'
    }
  },
  {
    id: 'dance-lead',
    name: 'Raghu Vamshi',
    role: 'Dance Lead',
    portfolio: 'Team Invincibles',
    description: 'Choreographing movements that tell stories and touch hearts.',
    icon: 'Sparkles',
    image: '/assets/images/profile-photos/dance-lead.jpg',
    gradient: 'from-gold-500 to-gold-800',
    email: 'dance@rhythms-griet.com',
    socialLinks: {
      instagram: 'https://www.instagram.com/vamshi_raghu30?igsh=MTdpemQ5bXA1bHlmcQ=='
    }
  },
  {
    id: 'music-lead',
    name: 'Arun Daniel',
    role: 'Music Lead',
    portfolio: 'Band Retrieve',
    description: 'Creating harmonies that resonate with the soul of our community.',
    icon: 'Music',
    image: '/assets/images/profile-photos/music-lead.jpg',
    gradient: 'from-gold-400 to-gold-700',
    email: 'music@rhythms-griet.com',
    socialLinks: {
      instagram: 'https://www.instagram.com/ardan_278?igsh=OXVnb2Q1Y2h2MTVz'
    }
  },
  {
    id: 'theatre-lead',
    name: 'Deepesh Reddy',
    role: 'Theatre Lead',
    portfolio: 'Arcadia',
    description: 'Bringing stories to life through powerful dramatic performances.',
    icon: 'Theater',
    image: '/assets/images/profile-photos/theatre-lead.jpeg',
    gradient: 'from-gold-600 to-gold-800',
    email: 'theatre@rhythms-griet.com',
    socialLinks: {
      instagram: 'https://www.instagram.com/deeppesshhh?igsh=MWhlZzMzMzMzYWVkMQ=='
    }
  },
  {
    id: 'publicity-lead',
    name: 'Poojitha Yarra',
    role: 'Publicity Lead',
    portfolio: 'Marketing & Outreach',
    description: 'Amplifying our voice and reaching new audiences across campus.',
    icon: 'TrendingUp',
    image: '/assets/images/profile-photos/publicity-lead.jpg',
    gradient: 'from-gold-400 to-gold-800',
    email: 'publicity@rhythms-griet.com',
    socialLinks: {
      instagram: 'https://www.instagram.com/poojitha.16?igsh=eDBwazBkM2Njbjh5',
      twitter: 'https://twitter.com/rhythms_griet'
    }
  },
  {
    id: 'treasury-lead',
    name: 'Bhargavi Reddy',
    role: 'Treasury Lead',
    portfolio: 'Finance & Operations',
    description: 'Managing resources and ensuring financial sustainability.',
    icon: 'DollarSign',
    image: '/assets/images/profile-photos/treasury.jpeg',
    gradient: 'from-gold-300 to-gold-600',
    email: 'treasury@rhythms-griet.com',
    socialLinks: {
      instagram: 'https://www.instagram.com/binny_bhargavi?igsh=YjE4dDl2a3NlNXhp'
    }
  },
  {
    id: 'arts-lead',
    name: 'Prasanna',
    role: 'Arts Lead',
    portfolio: 'Visual Arts',
    description: 'Expressing creativity through diverse visual mediums and techniques.',
    icon: 'Palette',
    image: '/assets/images/profile-photos/arts-lead.jpeg',
    gradient: 'from-gold-300 to-gold-700',
    email: 'arts@rhythms-griet.com',
    socialLinks: {
      instagram: 'https://www.instagram.com/watashiwa_bakaa?igsh=MWxud2lpa2x5MThmMA=='
    }
  },
  {
    id: 'technical-lead',
    name: 'Bhupesh Varma',
    role: 'Technical Lead',
    portfolio: 'Innovation Hub',
    description: 'Bridging technology and creativity for digital excellence.',
    icon: 'Code',
    image: '/assets/images/profile-photos/technical-lead.jpeg',
    gradient: 'from-gold-500 to-gold-900',
    email: 'technical@rhythms-griet.com',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/kevinpark',
      instagram: 'https://www.instagram.com/rbhupeshvarma?igsh=Z2lsbnJjZ21tdDNv'
    }
  }
];

export function getAllExecutiveMembers(): ExecutiveMember[] {
  return executiveBodyData;
}

export function getExecutiveMemberById(id: string): ExecutiveMember | undefined {
  return executiveBodyData.find(member => member.id === id);
}

export function getExecutiveMembersByPortfolio(portfolio: string): ExecutiveMember[] {
  return executiveBodyData.filter(member => member.portfolio.toLowerCase().includes(portfolio.toLowerCase()));
}

export function getLeadershipTeam(): ExecutiveMember[] {
  return executiveBodyData.filter(member => 
    member.role.includes('President') || member.role.includes('Lead')
  );
}
