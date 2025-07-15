import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Folder,
  Image as ImageIcon,
  Calendar,
  Users,
  ArrowLeft,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { imageManager, type EventFolder } from "@/lib/imageManager";

export default function Gallery() {
  const [eventFolders, setEventFolders] = useState<EventFolder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Load event folders on mount
  useEffect(() => {
    setEventFolders(imageManager.getEventFolders());
  }, []);

  const currentFolder = eventFolders.find((f) => f.id === selectedFolder);

  if (selectedFolder && currentFolder) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rhythms-black via-rhythms-gray to-rhythms-black text-white">
        <Navbar />

        {/* Folder View Header */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedFolder(null)}
                className="text-rhythms-gold hover:bg-rhythms-gold/10 mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Gallery
              </Button>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gradient">
                  {currentFolder.name}
                </h1>
                <p className="text-white/70 mt-2">
                  {currentFolder.description}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge
                    variant="outline"
                    className="text-rhythms-gold border-rhythms-gold"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    {currentFolder.date}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-rhythms-bronze border-rhythms-bronze"
                  >
                    <ImageIcon className="w-3 h-3 mr-1" />
                    {currentFolder.images.length} photos
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Images Grid */}
        <section className="pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            {currentFolder.images.length === 0 ? (
              <div className="text-center py-12">
                <ImageIcon className="w-16 h-16 text-white/40 mx-auto mb-4" />
                <p className="text-white/60 mb-4">
                  No photos in this event yet
                </p>
                <p className="text-rhythms-gold/70 text-sm">
                  Add images by updating the code in imageManager.ts
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentFolder.images.map((image, index) => (
                  <div
                    key={image.id}
                    className="aspect-square glass rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group animate-fade-in border border-rhythms-gold/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => { console.log('Image clicked', index); setSelectedImageIndex(index); }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement!.style.background =
                          "linear-gradient(45deg, rgba(255,193,7,0.2), rgba(184,134,11,0.2))";
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        `;
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rhythms-black via-rhythms-gray to-rhythms-black text-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rhythms-gold to-rhythms-bronze mb-4"></div>
            <p className="text-xl text-white/80 max-w-3xl">
              Capturing moments of artistic brilliance and cultural celebration.
              Browse our event galleries showcasing the best of Rhythms.
            </p>
          </div>
        </div>
      </section>

      {/* Event Folders Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventFolders.map((folder, index) => (
              <Card
                key={folder.id}
                className="group glass border border-rhythms-gold/20 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-gold cursor-pointer animate-slide-up bg-rhythms-black/30"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedFolder(folder.id)}
              >
                <CardContent className="p-0">
                  {/* Cover Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={folder.coverImage}
                      alt={folder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement!.style.background =
                          "linear-gradient(45deg, rgba(255,193,7,0.3), rgba(184,134,11,0.3))";
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <svg class="w-16 h-16 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            </svg>
                          </div>
                        `;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rhythms-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 z-10">
                      <Badge
                        variant="outline"
                        className="text-rhythms-gold border-rhythms-gold bg-rhythms-black/50"
                      >
                        {folder.images.length} photos
                      </Badge>
                    </div>
                  </div>

                  {/* Folder Info */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-rhythms-gold transition-colors">
                      {folder.name}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {folder.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-rhythms-bronze text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {folder.date}
                      </div>
                      <div className="flex items-center text-rhythms-gold text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        View Gallery
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Image Lightbox */}
      {selectedImageIndex !== null && currentFolder && (
  (() => { console.log('Modal should open, selectedImageIndex:', selectedImageIndex); return null; })(),
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedImageIndex(null)}
  >
    <div className="relative max-w-4xl max-h-[90vh] flex items-center">
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 text-white hover:text-rhythms-gold z-10"
        onClick={e => { e.stopPropagation(); setSelectedImageIndex(null); }}
      >
        <X className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-rhythms-gold z-10"
        onClick={e => { e.stopPropagation(); setSelectedImageIndex(i => (i! > 0 ? i! - 1 : i)); }}
        disabled={selectedImageIndex === 0}
      >
        <span className="text-2xl">&#8592;</span>
      </Button>
      <img
        src={currentFolder.images[selectedImageIndex].src}
        alt={currentFolder.images[selectedImageIndex].title}
        className="max-w-full max-h-full object-contain rounded-lg"
        onClick={e => e.stopPropagation()}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          target.parentElement!.innerHTML = `
            <div class=\"bg-rhythms-gray/50 rounded-lg p-8 flex items-center justify-center min-h-[60vh] min-w-[60vw]\">
              <svg class=\"w-24 h-24 text-white/40\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                <path fill-rule=\"evenodd\" d=\"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z\" clip-rule=\"evenodd\" />
              </svg>
            </div>
          `;
        }}
      />
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-rhythms-gold z-10"
        onClick={e => { e.stopPropagation(); setSelectedImageIndex(i => (i! < currentFolder.images.length - 1 ? i! + 1 : i)); }}
        disabled={selectedImageIndex === currentFolder.images.length - 1}
      >
        <span className="text-2xl">&#8594;</span>
      </Button>
    </div>
  </div>
)}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-rhythms-gold/20 bg-rhythms-black/80">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2025 Rhythms - GRIET Cultural Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
