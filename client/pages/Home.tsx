import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { imageManager } from "@/lib/imageManager";

export default function Home() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-rhythms-black via-rhythms-gray to-rhythms-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Logo Background */}
        <div className="absolute inset-0 gradient-rhythms"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${imageManager.getLogo()}')`,
            backgroundSize: "800px 800px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(8px) brightness(0.7)",
            transform: `scale(${1.1 + scrollY * 0.0005}) rotate(${scrollY * 0.02}deg)`,
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, rgba(255, 193, 7, 0.3) 0%, transparent 50%)`,
          }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-rhythms-black/40 via-transparent to-rhythms-black/60"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-rhythms-gold rounded-full animate-float"></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-rhythms-bronze rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-2 h-2 bg-white rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-4 h-4 bg-rhythms-gold-light rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-16">
          <div className="animate-slide-up">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 text-gradient animate-pulse-glow drop-shadow-2xl">
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
              className="bg-rhythms-gold/20 hover:bg-rhythms-gold/30 backdrop-blur-md border border-rhythms-gold/50 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-gold animate-scale-in"
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
          <ChevronDown className="w-8 h-8 text-rhythms-gold/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Rhythms
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-gold to-rhythms-bronze mx-auto mb-8"></div>
          </div>

          <Card className="glass border border-rhythms-gold/20 p-8 md:p-12 shadow-gold animate-fade-in">
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

      {/* Join Us Section */}
      <section id="join" className="py-20 px-4 bg-rhythms-gray/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Join the Rhythm
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-gold to-rhythms-bronze mx-auto mb-8"></div>
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
                className="bg-gradient-rhythms-gold hover:from-rhythms-gold-dark hover:to-rhythms-bronze-dark text-white text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-gold"
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
                className="border-rhythms-gold/50 text-rhythms-gold hover:bg-rhythms-gold/10 text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-rhythms-gold/20 bg-rhythms-black/80">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gradient mb-4">RHYTHMS</h3>
            <p className="text-white/80">GRIET's Official Cultural Club</p>
            <p className="text-rhythms-gold text-sm mt-2">
              Celebrating Music, Dance & Theatre
            </p>
          </div>

          <div className="border-t border-rhythms-gold/20 pt-8 mt-8">
            <p className="text-white/60 text-sm">
              © 2025 Rhythms - GRIET Cultural Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
