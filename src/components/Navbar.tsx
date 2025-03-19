
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-subtle' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl md:text-2xl text-primary">Université Connect</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link font-medium ${location.pathname === '/' ? 'text-primary' : ''}`}>
              Accueil
            </Link>
            <Link to="/about" className={`nav-link font-medium ${location.pathname === '/about' ? 'text-primary' : ''}`}>
              À propos
            </Link>
            <Link to="/contact" className={`nav-link font-medium ${location.pathname === '/contact' ? 'text-primary' : ''}`}>
              Contact
            </Link>
            <Button asChild variant="ghost" className="font-medium">
              <Link to="/login" className="flex items-center gap-1.5">
                Connexion
              </Link>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-subtle animate-slideDown">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link 
              to="/" 
              className={`block nav-link py-2 ${location.pathname === '/' ? 'text-primary' : ''}`}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className={`block nav-link py-2 ${location.pathname === '/about' ? 'text-primary' : ''}`}
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              className={`block nav-link py-2 ${location.pathname === '/contact' ? 'text-primary' : ''}`}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className="block text-primary font-medium py-2"
            >
              Connexion
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
