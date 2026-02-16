import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lock, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Funding', path: '/funding' },
    { name: 'Credit', path: '/credit-optimization' },
    { name: 'Merchant', path: '/merchant-services' },
    { name: 'Legal', path: '/legal-services' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled || !isHome ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group flex flex-col items-end leading-none">
              <span className="font-serif text-3xl font-bold text-brand-gold tracking-widest text-shadow-sm">ORIA</span>
              <span className="font-serif text-[10px] font-bold text-brand-gold tracking-[0.3em] mr-0.5">USA</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-all hover:-translate-y-0.5",
                  scrolled || !isHome 
                    ? "text-brand-charcoal hover:text-brand-navy" 
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-gray-300/30 mx-2" />
            <Link
              to="/client-login"
              className={cn(
                "text-sm font-medium flex items-center gap-2 transition-colors",
                scrolled || !isHome 
                  ? "text-brand-navy hover:text-brand-gold" 
                  : "text-white hover:text-brand-gold"
              )}
            >
              <Lock className="w-4 h-4" />
              Login
            </Link>
            <Link to="/contact">
              <Button 
                size="sm" 
                className={cn(
                  "ml-4 font-semibold shadow-lg",
                  scrolled || !isHome 
                    ? "bg-brand-navy text-white hover:bg-brand-charcoal" 
                    : "bg-brand-gold text-brand-navy hover:bg-white"
                )}
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md transition-colors",
                scrolled || !isHome 
                  ? "text-brand-navy hover:bg-gray-100" 
                  : "text-white hover:bg-white/10"
              )}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden fixed inset-x-0 top-16 bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top",
        isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
      )}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-navy hover:bg-brand-light flex justify-between items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
          <div className="border-t border-gray-100 my-2 pt-2">
            <Link
              to="/client-login"
              className="block px-3 py-3 rounded-md text-base font-medium text-brand-navy hover:bg-brand-light flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Lock className="w-4 h-4" />
              Client Portal
            </Link>
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-3 mt-4 text-base font-bold rounded-md text-white bg-brand-navy hover:bg-brand-charcoal shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Start Your Review
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
