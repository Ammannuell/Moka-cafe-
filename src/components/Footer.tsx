import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Camera, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-950 text-coffee-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-serif font-bold text-white">
              Moka<span className="text-coffee-400">.</span>
            </Link>
            <p className="text-coffee-200 text-sm leading-relaxed max-w-xs">
              {t('home.tagline')} {t('footer.description', 'Experience the finest coffee and culinary delights in a warm, welcoming atmosphere.')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-800 flex items-center justify-center hover:bg-coffee-800 transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-800 flex items-center justify-center hover:bg-coffee-800 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-800 flex items-center justify-center hover:bg-coffee-800 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">{t('footer.quick_links', 'Quick Links')}</h4>
            <ul className="space-y-4">
              <li><Link to="/menu" className="text-coffee-200 hover:text-white transition-colors text-sm">{t('nav.menu')}</Link></li>
              <li><Link to="/about" className="text-coffee-200 hover:text-white transition-colors text-sm">{t('nav.about')}</Link></li>
              <li><Link to="/gallery" className="text-coffee-200 hover:text-white transition-colors text-sm">{t('nav.gallery')}</Link></li>
              <li><Link to="/events" className="text-coffee-200 hover:text-white transition-colors text-sm">{t('nav.events')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">{t('footer.contact_us', 'Contact Us')}</h4>
            <ul className="space-y-4 text-sm text-coffee-200">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-coffee-400 shrink-0 mt-0.5" />
                <span>Tullu Dimtu, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-coffee-400 shrink-0" />
                <span>+251 911 00 00 00</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="tel:+251911000000"
                className="inline-flex items-center space-x-2 bg-white dark:bg-coffee-950 transition-colors duration-300 text-coffee-950 dark:text-white transition-colors duration-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-coffee-100 dark:bg-coffee-800 transition-colors duration-300 transition-colors"
              >
                <Phone size={16} />
                <span>{t('nav.order')}</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">{t('footer.opening_hours', 'Opening Hours')}</h4>
            <ul className="space-y-4 text-sm text-coffee-200">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-coffee-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-1">{t('footer.weekdays', 'Monday - Friday')}</p>
                  <p>7:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-coffee-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-1">{t('footer.weekends', 'Saturday - Sunday')}</p>
                  <p>8:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-coffee-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-coffee-400 flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span>© {currentYear} {t('footer.rights', 'Moka Café. All rights reserved.')}</span>
            <span className="font-semibold text-coffee-200 bg-coffee-800/50 px-3 py-1 rounded-full text-xs self-center md:self-auto uppercase tracking-wider">This is a demo website</span>
          </p>
          <div className="mt-6 md:mt-0 flex space-x-6 text-sm text-coffee-400">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy', 'Privacy Policy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms', 'Terms of Service')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
