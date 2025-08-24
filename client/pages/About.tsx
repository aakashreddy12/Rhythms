import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Crown, TrendingUp, DollarSign, Music, Theater, Palette, Code, Sparkles, Star, Mail, ExternalLink, Instagram } from "lucide-react";
import { getAllExecutiveMembers } from "@shared/executive-body";

const executiveMembers = getAllExecutiveMembers();

const getIcon = (iconName: string) => {
  const iconProps = { className: "h-6 w-6" };
  switch (iconName) {
    case 'Crown': return <Crown {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'TrendingUp': return <TrendingUp {...iconProps} />;
    case 'DollarSign': return <DollarSign {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'Music': return <Music {...iconProps} />;
    case 'Theater': return <Theater {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'Code': return <Code {...iconProps} />;
    default: return <Users {...iconProps} />;
  }
};

export default function About() {
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
              <Link to="/about" className="text-luxury-gold border-b-2 border-luxury-gold">About</Link>
              <Link to="/portfolios" className="text-foreground hover:text-luxury-gold transition-colors">Portfolios</Link>
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
              Executive Body
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the passionate leaders who drive Rhythms forward, each bringing their unique vision 
              and expertise to create extraordinary cultural experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-luxury-gold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  {/* Image Header */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

                    {/* Role Icon */}
                    <div className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${member.gradient} shadow-lg`}>
                      {getIcon(member.icon)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-luxury-gold">{member.name}</h3>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">{member.role}</p>
                    <p className="text-xs text-luxury-gold mb-4">{member.portfolio}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">{member.description}</p>

                    {/* Achievements */}
                    {member.achievements && member.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-luxury-gold mb-2 flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          Key Achievements
                        </h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {member.achievements.slice(0, 2).map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1 h-1 bg-luxury-gold rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Instagram Button */}
                    <div className="mt-6">
                      {member.socialLinks?.instagram ? (
                        <a
                          href={member.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black py-2 px-4 rounded-lg hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300 text-sm font-medium flex items-center justify-center"
                        >
                          <Instagram className="h-4 w-4 mr-2" />
                          Follow on Instagram
                        </a>
                      ) : (
                        <button className="w-full bg-gradient-to-r from-luxury-black-lighter to-card border border-luxury-gold/20 text-luxury-gold py-2 px-4 rounded-lg hover:border-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 text-sm font-medium">
                          Connect
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-black-lighter to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-gold">
              Our Leadership Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              United by a shared vision of excellence, our Executive Body believes in collaborative 
              leadership that empowers every member to achieve their creative potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-gold-400 to-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-luxury-black" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-luxury-gold">Inclusive Leadership</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe every voice matters and strive to create an environment where all 
                members feel valued and heard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-gold-500 to-gold-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-luxury-black" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-luxury-gold">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We constantly push boundaries and explore new ways to express creativity 
                and connect with our community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-gold-600 to-gold-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-8 w-8 text-luxury-black" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-luxury-gold">Excellence Standards</h3>
              <p className="text-muted-foreground leading-relaxed">
                We maintain the highest standards in everything we do, from performances 
                to community engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-gold">
              Join Our Family
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to be part of something extraordinary? Whether you're a performer, organizer, 
              or supporter, there's a place for you in the Rhythms family.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link 
                to="/portfolios"
                className="inline-block bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black px-8 py-4 rounded-lg font-semibold hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Portfolios
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
