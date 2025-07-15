import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { imageManager } from "@/lib/imageManager";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolios", path: "/portfolios" },
    { name: "Executive Body", path: "/executive" },
    { name: "Gallery", path: "/gallery" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rhythms-black/80 backdrop-blur-lg border-b border-rhythms-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={imageManager.getLogo()}
              alt="Rhythms Logo"
              className="h-10 w-10 object-contain"
              onError={(e) => {
                // Fallback if logo doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <span className="text-rhythms-gold text-xl font-bold">RHYTHMS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? "text-rhythms-gold bg-rhythms-gold/10 border-b-2 border-rhythms-gold"
                      : "text-white hover:text-rhythms-gold hover:bg-rhythms-gold/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-rhythms-gold hover:bg-rhythms-gold/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-rhythms-black/95 backdrop-blur-lg border-t border-rhythms-gold/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? "text-rhythms-gold bg-rhythms-gold/10 border-l-4 border-rhythms-gold"
                    : "text-white hover:text-rhythms-gold hover:bg-rhythms-gold/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
