import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Star,
  Target,
  Heart,
  CheckCircle,
  Users,
  Mail,
  User,
  Award,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { getPortfolioById } from "@/lib/portfolioData";
import { imageManager } from "@/lib/imageManager";
import { getExecutiveByRole } from "@/lib/executiveData";

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const portfolio = id ? getPortfolioById(id) : undefined;
  const portfolioLeadRole = portfolio?.lead?.role;
const executiveLead = portfolioLeadRole ? getExecutiveByRole(portfolioLeadRole) : undefined;

  if (!portfolio || !executiveLead) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rhythms-black via-rhythms-gray to-rhythms-black text-white flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-24">
          <h1 className="text-4xl font-bold text-rhythms-gold mb-4">
            Portfolio Not Found
          </h1>
          <p className="text-white/70 mb-8">
            The portfolio you're looking for doesn't exist.
          </p>
          <Link to="/portfolios">
            <Button className="bg-gradient-rhythms-gold hover:from-rhythms-gold-dark hover:to-rhythms-bronze-dark">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolios
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

  const IconComponent = iconMap[portfolio.icon] || Users;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rhythms-black via-rhythms-gray to-rhythms-black text-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/portfolios">
            <Button
              variant="ghost"
              size="sm"
              className="text-rhythms-gold hover:bg-rhythms-gold/10 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolios
            </Button>
          </Link>

          <div className="flex items-center gap-6 mb-8">
            <div
              className={`w-20 h-20 rounded-full bg-gradient-to-br ${portfolio.color} flex items-center justify-center animate-pulse-glow`}
            >
              <IconComponent />
            </div>
            <div>
              <Badge
                variant="outline"
                className="text-rhythms-gold border-rhythms-gold bg-rhythms-gold/10 mb-3"
              >
                {portfolio.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {portfolio.title}
              </h1>
              <p className="text-xl text-white/80">
                {portfolio.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Lead Section */}
      <section className="py-12 px-4 bg-rhythms-gray/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
            Portfolio Lead
          </h2>
          <Card className="glass border border-rhythms-gold/20 p-8 max-w-4xl mx-auto">
            <CardContent className="flex flex-col md:flex-row items-center gap-8">
              {/* Lead Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-rhythms-gold to-rhythms-bronze flex items-center justify-center relative overflow-hidden">
                  {(() => {
                    const customImage = imageManager.getCustomExecutiveImage(executiveLead.name);
                    const defaultImage = imageManager.getExecutiveImage(executiveLead.name);
                    const imageUrl = customImage || defaultImage;
                    if (imageUrl) {
                      return (
                        <img
                          src={imageUrl}
                          alt={executiveLead.name}
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            // Fallback to initials if image fails
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement!;
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center">
                                <span class="text-2xl font-bold text-white">${executiveLead.placeholder}</span>
                              </div>
                            `;
                          }}
                        />
                      );
                    } else {
                      return (
                        <>
                          <User className="w-16 h-16 text-white/80" />
                          <span className="absolute inset-0 flex items-center justify-center bg-rhythms-black/20 text-2xl font-bold">
                            {executiveLead.placeholder}
                          </span>
                        </>
                      );
                    }
                  })()}
                </div>
              </div>

              {/* Lead Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {executiveLead.name}
                </h3>
                <Badge
                  variant="outline"
                  className="text-rhythms-gold border-rhythms-gold mb-3"
                >
                  {executiveLead.role}
                </Badge>
                <p className="text-rhythms-bronze-light mb-3">
                  {executiveLead.department}
                </p>
                <p className="text-white/80 mb-4">{executiveLead.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="flex items-center text-rhythms-gold font-semibold mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Experience
                    </h4>
                    
                  </div>
                  <div>
                    <h4 className="flex items-center text-rhythms-gold font-semibold mb-2">
                      <Award className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h4>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Vision & Mission */}
            <Card className="glass border border-rhythms-gold/20 p-6">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="flex items-center text-xl font-bold text-rhythms-gold mb-3">
                    <Target className="w-5 h-5 mr-2" />
                    Our Vision
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {portfolio.vision}
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center text-xl font-bold text-rhythms-gold mb-3">
                    <Heart className="w-5 h-5 mr-2" />
                    Our Mission
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {portfolio.mission}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card className="glass border border-rhythms-gold/20 p-6">
              <CardContent>
                <h3 className="text-xl font-bold text-rhythms-gold mb-4">
                  About {portfolio.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  {portfolio.fullDescription}
                </p>
                <p className="text-white/70 leading-relaxed">
                  {portfolio.detailedInfo}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Requirements & Opportunities */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass border border-rhythms-gold/20 p-6">
              <CardContent>
                <h3 className="text-xl font-bold text-rhythms-gold mb-4">
                  Requirements
                </h3>
                <div className="space-y-3">
                  {portfolio.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start text-white/80">
                      <CheckCircle className="w-4 h-4 mr-3 text-rhythms-gold mt-0.5 flex-shrink-0" />
                      {requirement}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass border border-rhythms-gold/20 p-6">
              <CardContent>
                <h3 className="text-xl font-bold text-rhythms-gold mb-4">
                  Opportunities
                </h3>
                <div className="space-y-3">
                  {portfolio.opportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-start text-white/80">
                      <Star className="w-4 h-4 mr-3 text-rhythms-bronze mt-0.5 flex-shrink-0" />
                      {opportunity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 px-4 bg-rhythms-gray/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Ready to Join {portfolio.title}?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Take the first step towards your artistic journey with us.
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
                Apply Now
              </a>
            </Button>
            <Link to="/portfolios">
              <Button
                variant="outline"
                size="lg"
                className="border-rhythms-gold/50 text-rhythms-gold hover:bg-rhythms-gold/10 text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Explore Other Portfolios
              </Button>
            </Link>
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
