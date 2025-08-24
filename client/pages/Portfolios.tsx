import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Music, Theater, Palette, Code, Sparkles } from "lucide-react";
import { getAllPortfolios } from "@shared/portfolios";

const portfolios = getAllPortfolios();

const getIcon = (iconName: string) => {
  const iconProps = { className: "h-12 w-12" };
  switch (iconName) {
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'Music': return <Music {...iconProps} />;
    case 'Theater': return <Theater {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'Code': return <Code {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

export default function Portfolios() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fc4dac455cb8c4c85b56205096e79c996%2Fc656bacb03df4007b92ea5102f26bc20?format=webp&width=800" 
                alt="Rhythms Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-display font-bold text-luxury-gold">RHYTHMS</span>
            </motion.div>
            
            <motion.div 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/" className="text-foreground hover:text-luxury-gold transition-colors">Home</Link>
              <Link to="/about" className="text-foreground hover:text-luxury-gold transition-colors">About</Link>
              <Link to="/portfolios" className="text-luxury-gold border-b-2 border-luxury-gold">Portfolios</Link>
              <Link to="/gallery" className="text-foreground hover:text-luxury-gold transition-colors">Gallery</Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-luxury-black via-luxury-black-lighter to-luxury-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link 
              to="/"
              className="inline-flex items-center text-luxury-gold hover:text-gold-400 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-luxury-gold via-gold-400 to-luxury-gold bg-clip-text text-transparent">
              Our Portfolios
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the diverse talents and creative expressions that make Rhythms truly special.
              Each portfolio represents a unique facet of our cultural community.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Portfolios Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-8 hover:border-luxury-gold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${portfolio.color} mb-6`}>
                    {getIcon(portfolio.icon)}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-luxury-gold">{portfolio.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-4">{portfolio.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{portfolio.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Active Members:</span>
                      <span className="font-semibold text-luxury-gold">{portfolio.members.length}+ Members</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Recent Events:</span>
                      <span className="font-semibold text-luxury-gold">{portfolio.recentEvents.length} Events</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Achievements:</span>
                      <span className="font-semibold text-luxury-gold">{portfolio.achievements.length} Awards</span>
                    </div>
                  </div>

                  <Link
                    to={`/portfolios/${portfolio.id}`}
                    className="block w-full bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black py-3 px-4 rounded-lg hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300 font-medium text-center transform hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-luxury-black-lighter to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-gold">
              Find Your Passion
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every portfolio welcomes new members throughout the year. Whether you're a beginner 
              or an experienced artist, there's a place for you to grow and shine.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link 
                to="/about"
                className="inline-block bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black px-8 py-4 rounded-lg font-semibold hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Meet Our Leaders
              </Link>
              <Link 
                to="/gallery"
                className="inline-block border border-luxury-gold text-luxury-gold px-8 py-4 rounded-lg font-semibold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fc4dac455cb8c4c85b56205096e79c996%2Fc656bacb03df4007b92ea5102f26bc20?format=webp&width=800" 
                alt="Rhythms Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-display font-bold text-luxury-gold">RHYTHMS</span>
            </div>
            <p className="text-muted-foreground mb-4">The Official Cultural Club of GRIET</p>
            <p className="text-sm text-muted-foreground">
              © 2025 Rhythms Cultural Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
