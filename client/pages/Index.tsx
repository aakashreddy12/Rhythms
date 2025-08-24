import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Music, Theater, Palette, Code, Users, Sparkles, Award, Calendar } from "lucide-react";

const portfolios = [
  {
    title: "Dance",
    subtitle: "Team Invincibles",
    description: "Unleashing rhythm and movement through contemporary, classical, and folk dance forms.",
    icon: <Sparkles className="h-8 w-8" />,
    color: "from-gold-400 to-gold-600",
  },
  {
    title: "Music",
    subtitle: "Band Retrieve",
    description: "Creating melodies that resonate with the soul through vocals, instruments, and compositions.",
    icon: <Music className="h-8 w-8" />,
    color: "from-gold-500 to-gold-700",
  },
  {
    title: "Theatre",
    subtitle: "Arcadia",
    description: "Bringing stories to life through dramatic performances and creative storytelling.",
    icon: <Theater className="h-8 w-8" />,
    color: "from-gold-400 to-gold-800",
  },
  {
    title: "Arts",
    subtitle: "Visual Excellence",
    description: "Expressing creativity through painting, sketching, and digital art forms.",
    icon: <Palette className="h-8 w-8" />,
    color: "from-gold-300 to-gold-600",
  },
  {
    title: "Technical",
    subtitle: "Innovation Hub",
    description: "Merging technology with creativity for digital art, web design, and multimedia.",
    icon: <Code className="h-8 w-8" />,
    color: "from-gold-600 to-gold-800",
  },
];

const stats = [
  { number: "100+", label: "Active Members" },
  { number: "5+", label: "Events Annually" },
  { number: "10+", label: "Awards Won" },
  { number: "5+", label: "Years of Excellence" },
];

export default function Index() {
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
              <Link to="/portfolios" className="text-foreground hover:text-luxury-gold transition-colors">Portfolios</Link>
              <Link to="/gallery" className="text-foreground hover:text-luxury-gold transition-colors">Gallery</Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Logo Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 blur-sm"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fc4dac455cb8c4c85b56205096e79c996%2Fc656bacb03df4007b92ea5102f26bc20?format=webp&width=800')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/90 via-luxury-black-lighter/80 to-luxury-black/90"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-luxury-gold rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-display font-bold mb-6 bg-gradient-to-r from-luxury-gold via-gold-400 to-luxury-gold bg-clip-text text-transparent"
          >
            RHYTHMS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
          >
            The Official Cultural Club of GRIET
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Where creativity meets excellence. Join us in celebrating the rich tapestry of culture, 
            art, and talent that defines our vibrant community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
          >
            <Link 
              to="/about"
              className="inline-block bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black px-8 py-4 rounded-lg font-semibold hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Meet Our Team
            </Link>
            <Link 
              to="/portfolios"
              className="inline-block border border-luxury-gold text-luxury-gold px-8 py-4 rounded-lg font-semibold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 transform hover:scale-105"
            >
              Explore Portfolios
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-luxury-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-black-lighter to-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-gold">
              About Rhythms
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rhythms is more than just a cultural club – it's a vibrant community where passion meets purpose. 
              Since our inception, we've been dedicated to nurturing talent, celebrating diversity, and creating 
              unforgettable experiences that resonate far beyond the stage. Our five dynamic portfolios work in 
              harmony to bring the very best of culture and creativity to GRIET.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-luxury-gold">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To provide a platform where students can explore, develop, and showcase their cultural and 
                artistic talents while building lifelong friendships and memories.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-luxury-gold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier cultural hub that inspires creativity, celebrates diversity, and nurtures 
                the next generation of artists and cultural ambassadors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-luxury-gold transition-colors">
                <Users className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">Building lasting connections</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-luxury-gold transition-colors">
                <Award className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Striving for the highest standards</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-luxury-gold transition-colors">
                <Sparkles className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Creativity</h4>
                <p className="text-sm text-muted-foreground">Unleashing artistic potential</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-luxury-gold transition-colors">
                <Calendar className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Events</h4>
                <p className="text-sm text-muted-foreground">Memorable experiences</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolios Showcase */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-gold">
              Our Portfolios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the diverse talents and creative expressions that make Rhythms truly special
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-8 hover:border-luxury-gold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${portfolio.color} mb-6`}>
                    {portfolio.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-luxury-gold">{portfolio.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-4">{portfolio.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{portfolio.description}</p>
                  
                  <div className="mt-6">
                    <Link 
                      to="/portfolios"
                      className="inline-flex items-center text-luxury-gold hover:text-gold-400 transition-colors group-hover:translate-x-2 transform duration-300"
                    >
                      Learn More 
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/portfolios"
              className="inline-block bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black px-8 py-4 rounded-lg font-semibold hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore All Portfolios
            </Link>
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
