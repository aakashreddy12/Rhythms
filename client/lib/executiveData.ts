// Centralized executive member data for consistent use across the app
import { imageManager } from "@/lib/imageManager";

export interface ExecutiveMember {
  name: string;
  role: string;
  placeholder: string;
  department: string;
  description: string;
}

export const executiveMembers: ExecutiveMember[] = [
  { name: "Ms.P.Bharathi", role: "Club Coordinator", placeholder: "PB", department: "Faculty Coordinator", description: "Leading Rhythms towards excellence in cultural activities" },
  { name: "Suhas Valasala", role: "President", placeholder: "SV", department: "CSE - Final Year", description: "Visionary leader driving the club's strategic initiatives" },
  { name: "Aakash Reddy", role: "Vice-President", placeholder: "AR", department: "CSE - Final Year", description: "Supporting leadership and coordinating inter-portfolio activities" },
  { name: "Sujith Kumar", role: "Event Management Lead", placeholder: "SK", department: "EEE - Final Year", description: "Orchestrating memorable events and cultural programs" },
  { name: "Raghu Vamshi", role: "Dance Lead", placeholder: "RV", department: "ME - Final Year", description: "Leading Team Invincibles with grace and choreographic excellence" },
  { name: "Arun Daniel", role: "Music Lead", placeholder: "AD", department: "CSM - Final Year", description: "Harmonizing melodies through Band Retrieve's musical journey" },
  { name: "Deepesh Reddy", role: "Theatre Lead", placeholder: "DR", department: "CSE - Final Year", description: "Bringing dramatic stories to life through Arcadia's performances" },
  { name: "Prasanna N", role: "Art Lead", placeholder: "PN", department: "CSE - Final Year", description: "Creating visual masterpieces and managing artistic resources" },
  { name: "Poojitha Yarra", role: "Publicity Lead", placeholder: "PY", department: "CSE - Final Year", description: "Amplifying the club’s presence through creative campaigns and effective communication across all platforms" },
  { name: "Bhargavi Reddy", role: "Treasury", placeholder: "BR", department: "IT - Final Year", description: "Managing financial resources and budget planning" },
  { name: "Bhupesh Varma", role: "Technical Lead", placeholder: "BV", department: "CSE - Final Year", description: "Ensuring seamless technical execution of all events" },
  { name: "Saketh Singh", role: "EB Member", placeholder: "SS", department: "CSM - Final Year", description: "Contributing to the club’s success through dedicated support and active participation in all initiatives." },
  { name: "Renesh Reddy", role: "EB Member", placeholder: "RR", department: "CSE - Final Year", description: "Playing a vital role in organizing events and fostering teamwork within the club." }
];

// Helper to get executive by role
export function getExecutiveByRole(role: string) {
  return executiveMembers.find(member => member.role === role);
}

// Helper to get executive by name
export function getExecutiveByName(name: string) {
  return executiveMembers.find(member => member.name === name);
}
