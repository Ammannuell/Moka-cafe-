import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe, Moon, Sun } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.reservation'), path: '/reservation' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/90 dark:bg-coffee-950/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.webp" alt="Moka Cafe" className="h-10 w-auto object-contain dark:invert transition-all" />
            <span className="text-2xl font-serif font-bold text-coffee-950 dark:text-white transition-colors hidden sm:block">
              Moka<span className="text-coffee-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-coffee-600 dark:hover:text-coffee-400 ${
                    isActive ? 'text-coffee-600 dark:text-coffee-400' : 'text-coffee-950/70 dark:text-white/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions (Visible on both Mobile and Desktop) */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="text-coffee-950 dark:text-white hover:text-coffee-600 dark:hover:text-coffee-400 transition-colors">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Switcher Pill */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full border border-coffee-800/20 dark:border-white/20 text-coffee-950 dark:text-white hover:bg-coffee-100/50 dark:hover:bg-white/10 transition-colors"
              >
                <Globe size={18} />
                <span className="text-xs md:text-sm font-bold tracking-wide uppercase">{i18n.language.split('-')[0]}</span>
              </button>
              
              {/* Dropdown */}
              {isLangOpen && (
                <div className="absolute top-full mt-2 right-0 w-24 bg-white dark:bg-coffee-900 shadow-lg rounded-xl border border-coffee-100 dark:border-coffee-800 overflow-hidden py-1">
                  <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm hover:bg-coffee-50 dark:hover:bg-coffee-800 text-coffee-950 dark:text-white font-medium transition-colors">EN</button>
                  <button onClick={() => changeLanguage('am')} className="w-full text-left px-4 py-2 text-sm hover:bg-coffee-50 dark:hover:bg-coffee-800 text-coffee-950 dark:text-white font-medium transition-colors">AM</button>
                  <button onClick={() => changeLanguage('om')} className="w-full text-left px-4 py-2 text-sm hover:bg-coffee-50 dark:hover:bg-coffee-800 text-coffee-950 dark:text-white font-medium transition-colors">OM</button>
                </div>
              )}
            </div>
            
            {/* Order Button (Desktop Only) */}
            <a
              href="tel:+251911000000"
              className="hidden lg:flex items-center space-x-2 bg-coffee-950 dark:bg-coffee-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-coffee-800 dark:hover:bg-coffee-700 transition-colors"
            >
              <Phone size={16} />
              <span>{t('nav.order')}</span>
            </a>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-coffee-950 dark:text-white" onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer (Slide in from right) */}
      <div 
        className={`fixed top-0 right-0 max-h-[95vh] w-64 bg-white dark:bg-coffee-950 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col rounded-bl-3xl overflow-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-coffee-100 dark:border-coffee-900">
          <img src="/logo.webp" alt="Moka Cafe" className="h-6 w-auto object-contain dark:invert" />
          <button onClick={() => setIsOpen(false)} className="text-coffee-950 dark:text-white hover:text-coffee-600 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        {/* Drawer Content */}
        <div className="flex flex-col overflow-y-auto pb-4">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-5 py-3 border-b border-coffee-50 dark:border-coffee-900 text-sm font-medium transition-colors ${
                    isActive ? 'text-coffee-600 dark:text-coffee-400 bg-coffee-50/50 dark:bg-coffee-900/50' : 'text-coffee-900 dark:text-gray-100 hover:text-coffee-600 dark:hover:text-coffee-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="px-5 pt-4 flex flex-col gap-4">
            {/* Drawer Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg border border-coffee-200 dark:border-coffee-800 text-coffee-950 dark:text-white hover:bg-coffee-50 dark:hover:bg-coffee-900 transition-colors"
              >
                <Globe size={16} />
                <span className="text-xs font-medium">
                  {i18n.language === 'am' ? 'አማርኛ (Amharic)' : i18n.language === 'om' ? 'Afaan Oromoo' : 'English'}
                </span>
              </button>
              
              {isLangOpen && (
                <div className="absolute bottom-full mb-1 left-0 w-full bg-white dark:bg-coffee-900 shadow-lg rounded-lg border border-coffee-100 dark:border-coffee-800 overflow-hidden py-1 z-10">
                  <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-xs hover:bg-coffee-50 dark:hover:bg-coffee-800 text-coffee-950 dark:text-white font-medium transition-colors">English</button>
                  <button onClick={() => changeLanguage('am')} className="w-full text-left px-4 py-2 text-xs hover:bg-coffee-50 dark:hover:bg-coffee-800 text-coffee-950 dark:text-white font-medium transition-colors">አማርኛ (Amharic)</button>
                  <button onClick={() => changeLanguage('om')} className="w-full text-left px-4 py-2 text-xs hover:bg-coffee-50 dark:hover:bg-coffee-800 text-coffee-950 dark:text-white font-medium transition-colors">Afaan Oromoo</button>
                </div>
              )}
            </div>

            <a
              href="tel:+251911000000"
              className="flex items-center justify-center space-x-2 bg-[#ce9c5b] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#b8894d] transition-colors w-full shadow-lg shadow-[#ce9c5b]/20"
            >
              <Phone size={16} />
              <span>{t('nav.order')}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
