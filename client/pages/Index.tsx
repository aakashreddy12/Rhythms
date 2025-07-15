import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Music,
  Users,
  Theater,
  Star,
  Calendar,
  Mail,
  Instagram,
  Youtube,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const executiveMembers = [
    { name: "Dr. Sarah Johnson", role: "Club Coordinator", placeholder: "SJ" },
    { name: "Arjun Sharma", role: "President", placeholder: "AS" },
    { name: "Priya Reddy", role: "Vice-President", placeholder: "PR" },
    { name: "Karan Singh", role: "Event Management Lead", placeholder: "KS" },
    { name: "Meera Patel", role: "Dance Lead", placeholder: "MP" },
    { name: "Rohan Das", role: "Music Lead", placeholder: "RD" },
    { name: "Ananya Kumar", role: "Theatre Lead", placeholder: "AK" },
    { name: "Vikash Gupta", role: "Publicity Lead", placeholder: "VG" },
    { name: "Sneha Joshi", role: "Treasury", placeholder: "SJ" },
    { name: "Rahul Nair", role: "Technical", placeholder: "RN" },
  ];

  const portfolios = [
    {
      title: "Team Invincibles",
      category: "Dance",
      description:
        "Expressing stories through movement, our dance team brings energy and grace to every performance.",
      icon: Users,
      color: "from-rhythms-purple to-rhythms-purple-dark",
    },
    {
      title: "Band Retrieve",
      category: "Music",
      description:
        "Creating harmonious melodies that resonate with souls, our musical ensemble captivates audiences.",
      icon: Music,
      color: "from-rhythms-blue to-rhythms-blue-dark",
    },
    {
      title: "Arcadia",
      category: "Theatre",
      description:
        "Bringing dramatic tales to life through powerful performances and compelling storytelling.",
      icon: Theater,
      color: "from-rhythms-gold to-orange-500",
    },
  ];

  const events = [
    {
      title: "Cultural Fest 2024",
      date: "March 15, 2024",
      description: "Annual celebration of arts, music, and dance",
    },
    {
      title: "Inter-College Competition",
      date: "January 20, 2024",
      description: "Showcasing talent across multiple institutions",
    },
    {
      title: "Rhythms Showcase",
      date: "November 10, 2023",
      description: "Premiere event featuring all three portfolios",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-rhythms opacity-80"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, rgba(139, 69, 255, 0.3) 0%, transparent 50%)`,
          }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-rhythms-gold rounded-full animate-float"></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-rhythms-blue rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-2 h-2 bg-white rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-4 h-4 bg-rhythms-purple-light rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-pulse-glow">
              RHYTHMS
            </h1>
            <p
              className="text-xl md:text-2xl mb-4 text-rhythms-gold-light font-medium animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              "The acquiring of culture is the development of an avid hunger for
              knowledge and beauty."
            </p>
            <p
              className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              GRIET's official cultural club, celebrating the soul of music,
              dance, and theatre.
            </p>
            <Button
              size="lg"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-glow animate-scale-in"
              style={{ animationDelay: "0.9s" }}
              onClick={() => scrollToSection("about")}
            >
              Explore More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Rhythms
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-purple to-rhythms-blue mx-auto mb-8"></div>
          </div>

          <Card className="glass border-0 p-8 md:p-12 shadow-rhythms animate-fade-in">
            <CardContent className="text-center space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-white/90 font-serif">
                India has always been known as the land that portrayed cultural
                and traditional vibrancy through its fine arts. The very essence
                of our heritage lies in the celebration of music, dance, and
                theatre.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 font-serif">
                At Rhythms, we believe that true education encompasses not just
                academic excellence, but also the development of cultural
                sensibilities. Our club encourages students to explore their
                artistic talents while maintaining their academic pursuits,
                creating well-rounded individuals ready to contribute to
                society.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 font-serif">
                We are more than a cultural club – we are a family that nurtures
                creativity, builds confidence, and creates lasting memories
                through the universal languages of art and performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolios Section */}
      <section id="portfolios" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Portfolios
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-purple to-rhythms-blue mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Three distinct artistic expressions, one unified vision of
              excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolios.map((portfolio, index) => (
              <Card
                key={portfolio.title}
                className="group glass border-0 p-6 hover:scale-105 transition-all duration-500 hover:shadow-glow cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="text-center space-y-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${portfolio.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <portfolio.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <Badge
                      variant="outline"
                      className="mb-3 text-rhythms-gold border-rhythms-gold"
                    >
                      {portfolio.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rhythms-gold transition-colors">
                      {portfolio.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {portfolio.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Body Section */}
      <section id="executive" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Executive Body
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-purple to-rhythms-blue mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Meet the passionate leaders driving Rhythms forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {executiveMembers.map((member, index) => (
              <Card
                key={member.name}
                className="group glass border-0 p-6 hover:scale-105 transition-all duration-500 hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-rhythms-purple to-rhythms-blue flex items-center justify-center text-white text-xl font-bold group-hover:rotate-6 transition-transform duration-300">
                    {member.placeholder}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rhythms-gold transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-rhythms-blue-light text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-purple to-rhythms-blue mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Capturing moments of artistic brilliance and cultural celebration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square glass rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-rhythms-purple/30 to-rhythms-blue/30 flex items-center justify-center group-hover:from-rhythms-purple/50 group-hover:to-rhythms-blue/50 transition-all duration-300">
                  <Star className="w-8 h-8 text-white/60 group-hover:text-white/80 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section id="events" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Event Timeline
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-purple to-rhythms-blue mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Celebrating our journey through memorable cultural events
            </p>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} animate-slide-${index % 2 === 0 ? "in-left" : "in-right"}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <Card className="flex-1 glass border-0 p-6 hover:scale-105 transition-all duration-300 hover:shadow-glow">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-6 h-6 text-rhythms-gold" />
                      <Badge
                        variant="outline"
                        className="text-rhythms-blue border-rhythms-blue"
                      >
                        {event.date}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="text-white/80">{event.description}</p>
                  </CardContent>
                </Card>
                <div className="w-4 h-4 bg-rhythms-gold rounded-full flex-shrink-0 shadow-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Join the Rhythm
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-purple to-rhythms-blue mx-auto mb-8"></div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to be part of something extraordinary? Join Rhythms and
              discover your artistic potential while building lifelong
              friendships and unforgettable memories.
            </p>
            <p className="text-lg text-white/80 mb-12">
              Whether you're a seasoned performer or just starting your artistic
              journey, there's a place for you in our cultural family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rhythms-purple to-rhythms-blue hover:from-rhythms-purple-dark hover:to-rhythms-blue-dark text-white text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-glow"
              >
                <a
                  href="mailto:rhythms@griet.ac.in"
                  className="flex items-center"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Become a Member
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">RHYTHMS</h3>
              <p className="text-white/80">GRIET's Official Cultural Club</p>
              <p className="text-white/60 text-sm mt-2">
                Celebrating Music, Dance & Theatre
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block mx-auto text-white/80 hover:text-rhythms-gold transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("portfolios")}
                  className="block mx-auto text-white/80 hover:text-rhythms-gold transition-colors"
                >
                  Portfolios
                </button>
                <button
                  onClick={() => scrollToSection("executive")}
                  className="block mx-auto text-white/80 hover:text-rhythms-gold transition-colors"
                >
                  Executive Body
                </button>
                <button
                  onClick={() => scrollToSection("events")}
                  className="block mx-auto text-white/80 hover:text-rhythms-gold transition-colors"
                >
                  Events
                </button>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect With Us
              </h4>
              <div className="flex justify-center md:justify-end gap-4 mb-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rhythms-purple transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rhythms-blue transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="mailto:rhythms@griet.ac.in"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rhythms-gold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-white/60 text-sm">rhythms@griet.ac.in</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Rhythms - GRIET Cultural Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
