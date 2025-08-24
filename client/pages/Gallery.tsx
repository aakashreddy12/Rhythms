import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Folder, Calendar, Users, Camera, Image, Play } from "lucide-react";
import { getAllEventFolders, getTotalImageCount, getTotalEventCount } from "@shared/gallery";

const eventFolders = getAllEventFolders();

const stats = [
  { icon: <Camera className="h-8 w-8" />, number: `${getTotalImageCount()}+`, label: "Photos Captured" },
  { icon: <Play className="h-8 w-8" />, number: "15+", label: "Event Videos" },
  { icon: <Calendar className="h-8 w-8" />, number: `${getTotalEventCount()}+`, label: "Events Documented" },
  { icon: <Users className="h-8 w-8" />, number: "500+", label: "Memories Created" },
];

export default function Gallery() {
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
              <Link to="/gallery" className="text-luxury-gold border-b-2 border-luxury-gold">Gallery</Link>
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
              Event Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Relive the magic of our events through captivating photos and videos that tell 
              the story of our vibrant cultural community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-luxury-black-lighter to-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-luxury-gold mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Event Folders Grid */}
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
              Event Folders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of memorable events and celebrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventFolders.map((folder, index) => (
              <motion.div
                key={folder.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/gallery/${folder.id}`}>
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-luxury-gold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                    {/* Cover Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={folder.coverImage}
                        alt={folder.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent"></div>

                      {/* Folder Icon */}
                      <div className="absolute top-4 right-4 p-2 rounded-full bg-luxury-gold/20 backdrop-blur-md">
                        <Folder className="h-5 w-5 text-luxury-gold" />
                      </div>

                      {/* Image Count */}
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                        <Image className="h-4 w-4" />
                        <span className="text-sm font-medium">{folder.images.length} photos</span>
                      </div>

                      {/* Featured Badge */}
                      {folder.featured && (
                        <div className="absolute top-4 left-4 bg-luxury-gold text-luxury-black px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded-full capitalize">
                          {folder.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(folder.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-2 text-luxury-gold">{folder.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{folder.description}</p>

                      {/* View Button */}
                      <div className="mt-4">
                        <div className="w-full bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black py-2 px-4 rounded-lg hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300 text-sm font-medium text-center">
                          View Photos
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Management Info */}
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
              Share Your Memories
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have photos from our events? We'd love to include them in our gallery!
              Contact the technical team to contribute your captures to our growing collection.
            </p>
            <div className="bg-card border border-luxury-gold/30 rounded-xl p-6">
              <h4 className="font-semibold text-luxury-gold mb-3">Current Gallery Features:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>• High-quality image viewing</div>
                <div>• Event-based organization</div>
                <div>• Detailed photo information</div>
                <div>• Mobile-responsive design</div>
                <div>• Full-screen lightbox view</div>
                <div>• Professional presentation</div>
              </div>
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
