import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Download, User, Calendar, Camera } from "lucide-react";
import { getEventFolderById } from "@shared/gallery";

export default function GalleryDetail() {
  const { id } = useParams<{ id: string }>();
  const eventFolder = id ? getEventFolderById(id) : null;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!eventFolder) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-luxury-gold mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-8">The event gallery you're looking for doesn't exist.</p>
          <Link 
            to="/gallery"
            className="inline-block bg-gradient-to-r from-luxury-gold to-gold-600 text-luxury-black px-8 py-4 rounded-lg font-semibold hover:from-gold-500 hover:to-luxury-gold-darker transition-all duration-300"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % eventFolder.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? eventFolder.images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border">
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
      <section className="relative pt-24 pb-16 min-h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${eventFolder.coverImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-luxury-black/60 to-luxury-black/80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/gallery"
              className="inline-flex items-center text-luxury-gold hover:text-gold-400 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Gallery
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-luxury-gold via-gold-400 to-luxury-gold bg-clip-text text-transparent">
              {eventFolder.name}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gold-300 mb-4">
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {new Date(eventFolder.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center">
                <Camera className="h-5 w-5 mr-2" />
                {eventFolder.images.length} Photos
              </span>
              <span className="capitalize bg-luxury-gold/20 px-3 py-1 rounded-full text-sm">
                {eventFolder.type}
              </span>
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              {eventFolder.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eventFolder.images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-card border border-border hover:border-luxury-gold transition-all duration-300">
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium truncate">{image.caption}</p>
                    {image.photographer && (
                      <p className="text-xs text-gold-300 flex items-center mt-1">
                        <User className="h-3 w-3 mr-1" />
                        {image.photographer}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-luxury-black/50 hover:bg-luxury-black/70 rounded-full text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous Button */}
              {eventFolder.images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-luxury-black/50 hover:bg-luxury-black/70 rounded-full text-white transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* Next Button */}
              {eventFolder.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-luxury-black/50 hover:bg-luxury-black/70 rounded-full text-white transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}

              {/* Image */}
              <div className="relative">
                <img 
                  src={eventFolder.images[selectedImage].url} 
                  alt={eventFolder.images[selectedImage].caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-luxury-black/80 to-transparent p-6 rounded-b-lg">
                  <p className="text-white font-medium mb-2">{eventFolder.images[selectedImage].caption}</p>
                  <div className="flex items-center justify-between text-sm text-gold-300">
                    <div className="flex items-center space-x-4">
                      {eventFolder.images[selectedImage].photographer && (
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {eventFolder.images[selectedImage].photographer}
                        </span>
                      )}
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(eventFolder.images[selectedImage].date).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="text-xs">
                      {selectedImage + 1} of {eventFolder.images.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              © 2024 Rhythms Cultural Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
