import { imageManager } from "./imageManager";

export interface PortfolioLead {
  name: string;
  role: string;
  placeholder: string;
  department: string;
  description: string;
  imageSrc?: string;
  email?: string;
  achievements: string[];
  experience: string;
}

export interface Portfolio {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  detailedInfo: string;
  vision: string;
  mission: string;
  achievements: string[];
  activities: string[];
  requirements: string[];
  opportunities: string[];
  lead: PortfolioLead;
  color: string;
  icon: string;
}

// Portfolio leads mapped from executive body
export const portfolioLeads: Record<string, PortfolioLead> = {
  dance: {
    name: "Raghu Vamshi",
    role: "Dance Lead",
    placeholder: "RV",
    department: "ME - Final Year",
    description:
      "Leading Team Invincibles with grace and choreographic excellence",
    achievements: [
      "Choreographed 15+ award-winning performances",
      "Led team to 3 consecutive inter-college victories",
      "Trained 50+ students in classical and contemporary dance",
    ],
    experience:
      "5 years of professional dance training in Bharatanatyam and Contemporary dance forms.",
  },
  music: {
    name: "Arun Daniel",
    role: "Music Lead",
    placeholder: "AD",
    department: "CSM - Final Year",
    description: "Harmonizing melodies through Band Retrieve's musical journey",
    achievements: [
      "Composed original music for 10+ college events",
      "Led band to regional music competition victory",
      "Proficient in 5 musical instruments",
    ],
    experience:
      "7 years of music training with expertise in Indian classical and western music.",
  },
  theatre: {
    name: "Deepesh Reddy",
    role: "Theatre Lead",
    placeholder: "DR",
    department: "CSE - Final Year",
    description:
      "Bringing dramatic stories to life through Arcadia's performances",
    achievements: [
      "Directed 8 acclaimed theatrical productions",
      "Won Best Director award at state-level competition",
      "Mentored 30+ aspiring actors and actresses",
    ],
    experience:
      "6 years of theatre experience with training in method acting and stage direction.",
  },
  technical: {
    name: "Bhupesh Varma",
    role: "Technical Lead",
    placeholder: "BV",
    department: "CSE - Final Year",
    description: "Ensuring seamless technical execution of all events",
    achievements: [
      "Managed technical setup for 20+ major events",
      "Implemented innovative sound and lighting solutions",
      "Led team in developing custom event management software",
    ],
    experience:
      "4 years of technical expertise in sound engineering, lighting design, and software development.",
  },
  arts: {
    name: "Prasanna N", // Using Treasury as Arts Lead since there's no specific Arts Lead in executive body
    role: "Arts & Design Lead",
    placeholder: "PN",
    department: "CSE - Final Year",
    description: "Creating visual masterpieces and managing artistic resources",
    achievements: [
      "Curated 5 successful art exhibitions",
      "Designed visual identity for major college events",
      "Won inter-college graphic design competition",
    ],
    experience:
      "5 years of experience in digital art, photography, and graphic design.",
  },
};

export const portfoliosData: Portfolio[] = [
  {
    id: "team-invincibles",
    title: "Team Invincibles",
    category: "Dance",
    shortDescription:
      "Expressing stories through movement, our dance team brings energy and grace to every performance.",
    fullDescription:
      "Team Invincibles represents the pinnacle of dance excellence at GRIET. Our talented dancers master various forms including Bharatanatyam, Kuchipudi, Hip-hop, Contemporary, and Folk dances.",
    detailedInfo:
      "Founded in 2018, Team Invincibles has grown from a small group of passionate dancers to GRIET's premier dance ensemble. We believe that dance is a universal language that transcends barriers and connects souls. Our team practices rigorously, focusing on both technical precision and emotional expression.",
    vision:
      "To establish Team Invincibles as the most recognized and respected dance team in South India, inspiring a new generation of dancers.",
    mission:
      "To promote the art of dance through innovative choreography, rigorous training, and memorable performances that celebrate both traditional and contemporary dance forms.",
    achievements: [
      "Winner - Inter-College Dance Competition 2024",
      "Best Choreography Award 2023",
      "Cultural Fest Champions (3 consecutive years)",
      "Featured in Regional Dance Festival",
      "Collaborated with professional dance companies",
    ],
    activities: [
      "Weekly practice sessions (15+ hours)",
      "Quarterly workshops with renowned choreographers",
      "Community outreach programs",
      "Annual dance showcase",
      "Collaboration with other cultural clubs",
    ],
    requirements: [
      "Passion for dance and commitment to practice",
      "Basic understanding of rhythm and movement",
      "Willingness to learn various dance forms",
      "Team collaboration and leadership skills",
      "Dedication to maintaining physical fitness",
    ],
    opportunities: [
      "Training in classical Indian dance forms",
      "Contemporary and western dance styles",
      "Choreography and artistic direction",
      "Performance opportunities at major events",
      "Networking with professional dancers and choreographers",
    ],
    lead: portfolioLeads.dance,
    color: "from-rhythms-gold to-rhythms-bronze",
    icon: "Users",
  },
  {
    id: "band-retrieve",
    title: "Band Retrieve",
    category: "Music",
    shortDescription:
      "Creating harmonious melodies that resonate with souls, our musical ensemble captivates audiences with diverse genres.",
    fullDescription:
      "Band Retrieve is our premier musical collective, featuring instrumentalists and vocalists who excel in both classical and contemporary music. From Indian classical ragas to western rock, we explore all musical dimensions.",
    detailedInfo:
      "Established in 2017, Band Retrieve has evolved into a versatile musical powerhouse. Our ensemble consists of vocalists, guitarists, keyboardists, drummers, and traditional instrumentalists. We pride ourselves on our ability to seamlessly blend different musical genres and create unique soundscapes.",
    vision:
      "To become the leading collegiate musical ensemble that bridges traditional and contemporary music, inspiring musical excellence across genres.",
    mission:
      "To create, perform, and promote music that touches hearts, preserves cultural heritage, and pushes creative boundaries through innovative compositions and arrangements.",
    achievements: [
      "Best Band Award - Regional Competition 2024",
      "Music Fest Winners (2 consecutive years)",
      "Original Composition Recognition",
      "Performed at State Cultural Festival",
      "Released debut album 'Rhythmic Echoes'",
    ],
    activities: [
      "Bi-weekly band practice sessions",
      "Monthly solo and ensemble performances",
      "Music composition and arrangement workshops",
      "Recording studio sessions",
      "Collaboration with guest musicians",
    ],
    requirements: [
      "Musical instrument proficiency or vocal ability",
      "Understanding of music theory (basic level)",
      "Commitment to regular practice",
      "Collaborative mindset for ensemble work",
      "Interest in diverse musical genres",
    ],
    opportunities: [
      "Advanced training in multiple instruments",
      "Music production and recording experience",
      "Composition and songwriting development",
      "Live performance experience",
      "Professional music industry networking",
    ],
    lead: portfolioLeads.music,
    color: "from-rhythms-bronze to-rhythms-gold-dark",
    icon: "Music",
  },
  {
    id: "arcadia",
    title: "Arcadia",
    category: "Theatre",
    shortDescription:
      "Bringing dramatic tales to life through powerful performances and compelling storytelling.",
    fullDescription:
      "Arcadia is our theatrical wing that produces original plays, adaptations, and street theatre. We address social issues, historical events, and contemporary themes through the powerful medium of drama.",
    detailedInfo:
      "Since its inception in 2016, Arcadia has been the dramatic heart of GRIET's cultural scene. Our theatre group is known for thought-provoking performances that challenge audiences and spark meaningful conversations. We specialize in both traditional theatrical forms and experimental drama.",
    vision:
      "To establish theatre as a powerful medium for social change and artistic expression, making Arcadia a nationally recognized theatre group.",
    mission:
      "To create impactful theatrical productions that entertain, educate, and inspire audiences while providing a platform for emerging talent in acting, directing, and stagecraft.",
    achievements: [
      "Best Drama Award - State Level Competition",
      "Social Impact Theatre Recognition",
      "Script Writing Excellence Award",
      "Featured in National Theatre Festival",
      "Performed for 10,000+ audience members",
    ],
    activities: [
      "Script reading and character development sessions",
      "Improvisation and method acting workshops",
      "Technical theatre training (lighting, sound, props)",
      "Public performances and showcases",
      "Community theatre outreach programs",
    ],
    requirements: [
      "Interest in acting, directing, or stage production",
      "Communication and expression skills",
      "Commitment to rehearsal schedules",
      "Creative thinking and collaboration",
      "Willingness to explore diverse roles and themes",
    ],
    opportunities: [
      "Professional acting and direction training",
      "Scriptwriting and dramaturgy experience",
      "Technical theatre skills development",
      "Public speaking and confidence building",
      "Entertainment industry networking",
    ],
    lead: portfolioLeads.theatre,
    color: "from-rhythms-gold-light to-rhythms-gold",
    icon: "Theater",
  },
  {
    id: "technical-team",
    title: "Technical Team",
    category: "Technical",
    shortDescription:
      "The backbone of all our productions, handling sound, lighting, video production, and digital content creation.",
    fullDescription:
      "Our technical team ensures flawless execution of all events. From sound engineering to lighting design, video production to live streaming, we handle all technical aspects that bring our artistic visions to life.",
    detailedInfo:
      "The Technical Team, formed in 2019, represents the fusion of technology and creativity. We are the unseen heroes who make every performance possible through cutting-edge technical solutions. Our expertise spans audio engineering, lighting design, video production, live streaming, and event technology management.",
    vision:
      "To be the most advanced and innovative technical support team in collegiate cultural events, setting new standards for production quality.",
    mission:
      "To provide world-class technical support that enhances artistic performances and creates immersive experiences for audiences through the seamless integration of technology and art.",
    achievements: [
      "Best Technical Setup - College Fest 2024",
      "Innovation in Sound Design Award",
      "Digital Content Excellence Recognition",
      "Implemented college's first 4K live streaming setup",
      "Designed custom software for event management",
    ],
    activities: [
      "Equipment setup and maintenance",
      "Live event technical support",
      "Audio and video recording sessions",
      "Technical training workshops",
      "Innovation projects and R&D",
    ],
    requirements: [
      "Interest in audio/video technology",
      "Basic understanding of electronics/software",
      "Problem-solving and analytical skills",
      "Attention to detail and precision",
      "Ability to work under pressure during live events",
    ],
    opportunities: [
      "Professional audio engineering training",
      "Video production and editing skills",
      "Event management technology",
      "Networking with industry professionals",
      "Career paths in media and entertainment technology",
    ],
    lead: portfolioLeads.technical,
    color: "from-rhythms-gray-light to-rhythms-gold",
    icon: "Laptop",
  },
  {
    id: "arts-design",
    title: "Arts & Design",
    category: "Arts",
    shortDescription:
      "Creating visual masterpieces through painting, digital art, photography, and graphic design.",
    fullDescription:
      "The Arts & Design team creates stunning visual content, from traditional paintings to modern digital art, photography to graphic design. We handle all visual branding and artistic documentation for Rhythms.",
    detailedInfo:
      "Established in 2020, the Arts & Design portfolio represents the visual soul of Rhythms. Our team of artists, designers, and photographers work tirelessly to create visual narratives that complement our cultural activities. We bridge traditional art forms with contemporary digital media.",
    vision:
      "To establish a renowned creative studio that produces exceptional visual art and design work, inspiring artistic innovation in the digital age.",
    mission:
      "To create compelling visual content that captures the essence of our cultural activities while promoting artistic expression through both traditional and digital mediums.",
    achievements: [
      "Best Art Exhibition - University Level",
      "Photography Competition Winner (Regional)",
      "Graphic Design Excellence Award",
      "Featured in National Art Magazine",
      "Created visual identity for 50+ events",
    ],
    activities: [
      "Art workshops and masterclasses",
      "Photography sessions and exhibitions",
      "Graphic design projects",
      "Digital art creation and curation",
      "Visual documentation of cultural events",
    ],
    requirements: [
      "Artistic ability in any visual medium",
      "Creative vision and aesthetic sense",
      "Basic knowledge of design software (preferred)",
      "Attention to visual detail",
      "Collaborative approach to creative projects",
    ],
    opportunities: [
      "Professional art and design training",
      "Digital media production skills",
      "Photography and visual storytelling",
      "Brand design and marketing",
      "Portfolio development for creative careers",
    ],
    lead: portfolioLeads.arts,
    color: "from-rhythms-bronze-light to-rhythms-bronze",
    icon: "Palette",
  },
];

export const getPortfolioById = (id: string): Portfolio | undefined => {
  return portfoliosData.find((portfolio) => portfolio.id === id);
};

export const getPortfolioLead = (
  portfolioId: string,
): PortfolioLead | undefined => {
  const portfolio = getPortfolioById(portfolioId);
  if (!portfolio) return undefined;

  const lead = portfolio.lead;
  // Get custom image if available
  const customImage = imageManager.getCustomExecutiveImage(lead.name);
  const defaultImage = imageManager.getExecutiveImage(lead.name);

  return {
    ...lead,
    imageSrc: customImage || defaultImage || undefined,
  };
};
