import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { portfoliosData } from "@/lib/portfolioData";

export default function Portfolios() {
  const iconMap: Record<string, any> = {
    Users: Users,
    Music: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.972 7.972 0 0017 12a7.972 7.972 0 00-1.343-4.243 1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),
    Theater: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
      </svg>
    ),
    Laptop: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
          clipRule="evenodd"
        />
      </svg>
    ),
    Palette: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rhythms-black via-rhythms-gray to-rhythms-black text-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Our Portfolios
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-gold to-rhythms-bronze mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Five distinct artistic expressions, one unified vision of
              excellence. Explore the diverse talents that make Rhythms the
              cultural heart of GRIET.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolios Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {portfoliosData.map((portfolio, index) => {
              const IconComponent = iconMap[portfolio.icon] || Users;

              return (
                <Card
                  key={portfolio.id}
                  className="group glass border border-rhythms-gold/20 p-6 hover:scale-105 transition-all duration-500 hover:shadow-gold bg-rhythms-black/30 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="space-y-6">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${portfolio.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                      >
                        <IconComponent />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-rhythms-gold border-rhythms-gold bg-rhythms-gold/10"
                      >
                        {portfolio.category}
                      </Badge>
                    </div>

                    {/* Title and Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rhythms-gold transition-colors">
                        {portfolio.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed mb-4">
                        {portfolio.shortDescription}
                      </p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {portfolio.fullDescription}
                      </p>
                    </div>

                    {/* Key Achievements Preview */}
                    <div>
                      <h4 className="text-rhythms-gold font-semibold mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {portfolio.achievements
                          .slice(0, 2)
                          .map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-white/70 text-sm"
                            >
                              <ArrowRight className="w-3 h-3 mr-2 text-rhythms-gold" />
                              {achievement}
                            </div>
                          ))}
                        {portfolio.achievements.length > 2 && (
                          <div className="text-rhythms-bronze text-sm">
                            +{portfolio.achievements.length - 2} more
                            achievements
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Portfolio Lead Preview */}
                    <div className="pt-4 border-t border-rhythms-gold/20">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-rhythms-gold text-sm font-medium">
                          Led by: {portfolio.lead.name}
                        </span>
                        <Badge
                          variant="outline"
                          className="text-rhythms-bronze border-rhythms-bronze text-xs"
                        >
                          {portfolio.lead.role}
                        </Badge>
                      </div>
                      <p className="text-white/60 text-xs mb-4">
                        {portfolio.lead.description}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="pt-2">
                      <Link to={`/portfolio/${portfolio.id}`}>
                        <Button className="w-full bg-gradient-to-r from-rhythms-gold/20 to-rhythms-bronze/20 hover:from-rhythms-gold/30 hover:to-rhythms-bronze/30 border border-rhythms-gold/30 text-rhythms-gold hover:text-white transition-all duration-300 group">
                          <span className="flex items-center justify-center">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-rhythms-gray/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Find Your Passion
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Each portfolio offers unique opportunities for growth and artistic
              expression. Join the team that resonates with your talents and
              interests.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="glass border border-rhythms-gold/20 p-6">
                <CardContent className="text-center">
                  <h3 className="text-rhythms-gold font-bold mb-2">
                    For Performers
                  </h3>
                  <p className="text-white/70 text-sm">
                    Join Dance, Music, or Theatre teams to showcase your
                    artistic talents
                  </p>
                </CardContent>
              </Card>
              <Card className="glass border border-rhythms-gold/20 p-6">
                <CardContent className="text-center">
                  <h3 className="text-rhythms-gold font-bold mb-2">
                    For Creators
                  </h3>
                  <p className="text-white/70 text-sm">
                    Join Technical or Arts teams to bring creative visions to
                    life
                  </p>
                </CardContent>
              </Card>
            </div>
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
