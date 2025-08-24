import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Award, Star, Mail, Phone } from "lucide-react";
import { getPortfolioById } from "@shared/portfolios";

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const portfolio = id ? getPortfolioById(id) : null;

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-luxury-gold mb-4">Portfolio Not Found</h1>
          <p className="text-muted-foreground mb-8">The portfolio you're looking for doesn't exist.</p>
          <Link 
            to="/portfolios"
            className="inline-block bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black px-8 py-4 rounded-lg font-semibold hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300"
          >
            Back to Portfolios
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 min-h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${portfolio.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-luxury-black/60 to-luxury-black/80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/portfolios"
              className="inline-flex items-center text-luxury-gold hover:text-gold-400 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolios
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-luxury-gold via-gold-400 to-luxury-gold bg-clip-text text-transparent">
              {portfolio.title}
            </h1>
            <p className="text-2xl text-gold-300 mb-4">{portfolio.subtitle}</p>
            <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              {portfolio.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-luxury-black-lighter to-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-luxury-gold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">{portfolio.mission}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-luxury-gold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">{portfolio.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-gold">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who bring creativity and excellence to {portfolio.title}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-luxury-gold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${portfolio.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-luxury-gold">{member.name}</h3>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    {member.achievements && member.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-luxury-gold">Achievements:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {member.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <Star className="h-3 w-3 text-luxury-gold mr-2 mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-20 bg-gradient-to-r from-luxury-black-lighter to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-gold">
              Recent Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Highlights from our latest performances and activities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.recentEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-luxury-gold transition-all duration-300"
              >
                {event.images.length > 0 && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.images[0]} 
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded-full capitalize">
                      {event.type}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-luxury-gold">{event.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-luxury-gold flex items-center">
                <Award className="h-8 w-8 mr-3" />
                Achievements
              </h3>
              <div className="space-y-4">
                {portfolio.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="h-5 w-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-luxury-gold flex items-center">
                <Calendar className="h-8 w-8 mr-3" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {portfolio.upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4 hover:border-luxury-gold transition-colors">
                    <span className="text-foreground">{event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
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
              Join {portfolio.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Interested in being part of {portfolio.subtitle}? We welcome passionate individuals 
              who want to contribute to our creative community.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link 
                to="/about"
                className="inline-block bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black px-8 py-4 rounded-lg font-semibold hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us
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
