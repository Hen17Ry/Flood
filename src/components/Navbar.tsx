import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Problème', id: 'probleme' },
    { label: 'Comment ça marche', id: 'fonctionnement' },
    { label: 'Fonctionnalités', id: 'fonctionnalites' },
    { label: 'Pour qui', id: 'pour-qui' },
    { label: 'Impact', id: 'impact' },
    { label: 'Feuille de route', id: 'roadmap' },
    { label: 'Partenaires', id: 'partenaires' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 group"
          >
            {/* REMPLACE LE DIV PAR TON IMAGE */}
            <img 
              src="/logo.png" 
              alt="O'Croustille Logo" 
              className="w-40 h-40 object-contain transform group-hover:scale-105 transition-transform"
            />
          </button>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-2 text-sm font-medium text-[#1E3A8A] hover:text-[#2563EB] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Être notifié
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;