import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Button from '../components/Button';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAFAFA] dark:bg-coffee-950 transition-colors duration-300 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="block text-coffee-600 font-medium tracking-widest uppercase text-sm mb-6">
            {t('contact.info_title')}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 leading-tight mb-8">
            Come Visit Moka Café
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
           {/* Contact Info */}
           <div className="space-y-12">
              <div>
                 <h2 className="text-3xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 mb-8">Contact Information</h2>
                 <p className="text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light mb-8">
                   We'd love to hear from you. Whether you have a question about our menu, need to book an event, or just want to say hello.
                 </p>
                 
                 <ul className="space-y-6">
                   <li className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-coffee-100 dark:bg-coffee-800 transition-colors duration-300 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="text-coffee-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-1">Location</h4>
                        <p className="text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light text-sm">Tullu Dimtu, Addis Ababa, Ethiopia</p>
                      </div>
                   </li>
                   <li className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-coffee-100 dark:bg-coffee-800 transition-colors duration-300 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="text-coffee-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-1">{t('contact.phone_title')}</h4>
                        <p className="text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light text-sm">+251 911 00 00 00</p>
                      </div>
                   </li>
                   <li className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-coffee-100 dark:bg-coffee-800 transition-colors duration-300 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="text-coffee-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-1">{t('contact.email_title')}</h4>
                        <p className="text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light text-sm">hello@mokacafe.com</p>
                      </div>
                   </li>
                   <li className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-coffee-100 dark:bg-coffee-800 transition-colors duration-300 rounded-full flex items-center justify-center shrink-0">
                        <Clock className="text-coffee-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-1">Hours</h4>
                        <p className="text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light text-sm">Mon-Fri: 7am - 10pm<br/>Sat-Sun: 8am - 11pm</p>
                      </div>
                   </li>
                 </ul>
              </div>

              <div className="flex gap-4">
                <Button href="tel:+251911000000" variant="primary">
                  Call Us
                </Button>
                <Button href="#" variant="outline">
                  Get Directions
                </Button>
              </div>
           </div>

           {/* Image / Map visual */}
           <div className="relative">
              <div className="aspect-square lg:aspect-auto lg:h-full w-full overflow-hidden rounded-xl shadow-xl border border-coffee-100 dark:border-coffee-800 transition-colors duration-300">
                <iframe
                  title="Moka Cafe Map Location"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 min-h-[400px]"
                  src="https://maps.google.com/maps?q=Moka%20cafe%20-%20%E1%88%9E%E1%8A%AB%20%E1%8A%AB%E1%8D%8C&z=17&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
