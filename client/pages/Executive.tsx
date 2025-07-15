import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import Navbar from "@/components/Navbar";
import { imageManager } from "@/lib/imageManager";

export default function Executive() {
  const executiveMembers = [
    {
      name: "Ms.P.Bharathi",
      role: "Club Coordinator",
      placeholder: "PB",
      department: "Faculty Coordinator",
      description: "Leading Rhythms towards excellence in cultural activities",
    },
    {
      name: "Suhas Valasala",
      role: "President",
      placeholder: "SV",
      department: "CSE - Final Year",
      description: "Visionary leader driving the club's strategic initiatives",
    },
    {
      name: "Aakash Reddy",
      role: "Vice-President",
      placeholder: "AR",
      department: "CSE - Final Year",
      description:
        "Supporting leadership and coordinating inter-portfolio activities",
    },
    {
      name: "Sujith Kumar",
      role: "Event Management Lead",
      placeholder: "SK",
      department: "EEE - Final Year",
      description: "Orchestrating memorable events and cultural programs",
    },
    {
      name: "Raghu Vamshi",
      role: "Dance Lead",
      placeholder: "RV",
      department: "ME - Final Year",
      description:
        "Leading Team Invincibles with grace and choreographic excellence",
    },
    {
      name: "Arun Daniel",
      role: "Music Lead",
      placeholder: "AD",
      department: "CSM - Final Year",
      description:
        "Harmonizing melodies through Band Retrieve's musical journey",
    },
    {
      name: "Deepesh Reddy",
      role: "Theatre Lead",
      placeholder: "DR",
      department: "CSE - Final Year",
      description:
        "Bringing dramatic stories to life through Arcadia's performances",
    },
    {
      name: "Prasanna N",
      role: "Art Lead",
      placeholder: "PN",
      department: "CSE - Final Year",
      description: "Creating visual masterpieces and managing artistic resources",
    },
    {
      name: "Poojitha Yarra",
      role: "Publicity Lead",
      placeholder: "PY",
      department: "IT - Final Year",
      description: "Amplifying the club’s presence through creative campaigns and effective communication across all platforms",
    },
    {
      name: "Bhargavi Reddy",
      role: "Treasury",
      placeholder: "BR",
      department: "IT - Final Year",
      description: "Managing financial resources and budget planning",
    },
    {
      name: "Bhupesh Varma",
      role: "Technical Lead",
      placeholder: "BV",
      department: "CSE - Final Year",
      description: "Ensuring seamless technical execution of all events",
    },
    {
      name: "Saketh Singh",
      role: "EB Member",
      placeholder: "SS",
      department: "CSM - Final Year",
      description: "Contributing to the club’s success through dedicated support and active participation in all initiatives.",
    },
    {
      name: "Renesh Reddy",
      role: "EB Member",
      placeholder: "RR",
      department: "IT - Final Year",
      description: "Playing a vital role in organizing events and fostering teamwork within the club.",
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rhythms-black via-rhythms-gray to-rhythms-black text-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Executive Body
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-gold to-rhythms-bronze mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Meet the passionate leaders driving Rhythms forward. Our executive
              body brings together diverse talents united by a shared vision of
              cultural excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Members Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {executiveMembers.map((member, index) => (
              <Card
                key={member.name}
                className="group glass border border-rhythms-gold/20 p-6 hover:scale-105 transition-all duration-500 hover:shadow-gold animate-slide-up bg-rhythms-black/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="text-center space-y-4">
                  {/* Profile Image Placeholder */}
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rhythms-gold to-rhythms-bronze flex items-center justify-center text-white text-xl font-bold group-hover:rotate-6 transition-transform duration-300 relative overflow-hidden">
                      {(() => {
                        const customImage =
                          imageManager.getCustomExecutiveImage(member.name);
                        const defaultImage = imageManager.getExecutiveImage(
                          member.name,
                        );
                        const imageUrl = customImage || defaultImage;

                        if (imageUrl) {
                          return (
                            <img
                              src={imageUrl}
                              alt={member.name}
                              className="w-full h-full object-cover rounded-full"
                              onError={(e) => {
                                // Fallback to initials if image fails
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const parent = target.parentElement!;
                                parent.innerHTML = `
                                  <div class="w-full h-full flex items-center justify-center">
                                    <span class="text-xl font-bold">${member.placeholder}</span>
                                  </div>
                                `;
                              }}
                            />
                          );
                        } else {
                          return (
                            <>
                              <User className="w-12 h-12 text-white/80" />
                              <span className="absolute inset-0 flex items-center justify-center bg-rhythms-black/20">
                                {member.placeholder}
                              </span>
                            </>
                          );
                        }
                      })()}
                    </div>
                  </div>

                  {/* Member Info */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rhythms-gold transition-colors mb-1">
                      {member.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-rhythms-gold border-rhythms-gold bg-rhythms-gold/10 mb-2"
                    >
                      {member.role}
                    </Badge>
                    <p className="text-rhythms-bronze-light text-sm font-medium mb-2">
                      {member.department}
                    </p>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Contact/Social Links Placeholder */}
                  <div className="pt-3 border-t border-rhythms-gold/20">
                    <div className="flex justify-center space-x-3">
                      <div className="w-8 h-8 bg-rhythms-gold/10 rounded-full flex items-center justify-center hover:bg-rhythms-gold/20 transition-colors cursor-pointer">
                        <span className="text-rhythms-gold text-xs">@</span>
                      </div>
                      <div className="w-8 h-8 bg-rhythms-gold/10 rounded-full flex items-center justify-center hover:bg-rhythms-gold/20 transition-colors cursor-pointer">
                        <span className="text-rhythms-gold text-xs">in</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Structure Section */}
      <section className="py-16 px-4 bg-rhythms-gray/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Leadership Structure
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Our executive body follows a structured hierarchy designed to
              ensure efficient coordination and decision-making across all
              portfolios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass border border-rhythms-gold/20 p-6">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-rhythms-gold to-rhythms-bronze flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-rhythms-gold font-bold text-lg">
                  Core Leadership
                </h3>
                <p className="text-white/70 text-sm">
                  President, Vice-President, and Faculty Coordinator provide
                  strategic direction and oversight.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border border-rhythms-gold/20 p-6">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-rhythms-bronze to-rhythms-gold flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-rhythms-gold font-bold text-lg">
                  Portfolio Leads
                </h3>
                <p className="text-white/70 text-sm">
                  Specialized leaders for Dance, Music, Theatre, Technical, and
                  Arts portfolios.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border border-rhythms-gold/20 p-6">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-rhythms-gold-light to-rhythms-gold flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-rhythms-gold font-bold text-lg">
                  Support Teams
                </h3>
                <p className="text-white/70 text-sm">
                  Event Management, Publicity, Treasury, and Technical support
                  teams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-rhythms-gold/20 bg-rhythms-black/80">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2024 Rhythms - GRIET Cultural Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
