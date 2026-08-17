import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

export default function Reservation() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAFAFA] dark:bg-coffee-950 transition-colors duration-300 min-h-screen pt-24 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-sm my-12 bg-white dark:bg-coffee-950 transition-colors duration-300">
        
        {/* Image Side */}
        <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-auto">
          <img 
            src="/assets/food and drink/514255208_759216279808963_491440508219988769_n.webp" 
            alt="Reserve a table" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-coffee-950/30 flex flex-col justify-end p-12">
             <h2 className="text-white text-4xl font-serif font-bold mb-4">{t('reservation.waiting_title', 'We are waiting for you.')}</h2>
             <p className="text-white/80">{t('reservation.waiting_subtitle', 'Secure your table for an unforgettable experience.')}</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-7/12 p-8 md:p-16 lg:p-24">
          <span className="block text-coffee-600 font-medium tracking-widest uppercase text-sm mb-4">
            {t('reservation.title')}
          </span>
          <h1 className="text-4xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 mb-12">
            {t('nav.reservation')}
          </h1>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-2">{t('reservation.name')}</label>
                <input type="text" className="w-full border-b border-coffee-200 dark:border-coffee-700 transition-colors duration-300 py-3 bg-transparent focus:outline-none focus:border-coffee-600 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-2">{t('contact.phone_title', 'Phone')}</label>
                <input type="tel" className="w-full border-b border-coffee-200 dark:border-coffee-700 transition-colors duration-300 py-3 bg-transparent focus:outline-none focus:border-coffee-600 transition-colors" placeholder="+251 911 00 00 00" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-2">{t('reservation.date')}</label>
                <input type="date" className="w-full border-b border-coffee-200 dark:border-coffee-700 transition-colors duration-300 py-3 bg-transparent focus:outline-none focus:border-coffee-600 transition-colors text-coffee-800 dark:text-coffee-200 transition-colors duration-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-2">{t('reservation.time')}</label>
                <input type="time" className="w-full border-b border-coffee-200 dark:border-coffee-700 transition-colors duration-300 py-3 bg-transparent focus:outline-none focus:border-coffee-600 transition-colors text-coffee-800 dark:text-coffee-200 transition-colors duration-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-2">{t('reservation.guests')}</label>
                <select className="w-full border-b border-coffee-200 dark:border-coffee-700 transition-colors duration-300 py-3 bg-transparent focus:outline-none focus:border-coffee-600 transition-colors text-coffee-800 dark:text-coffee-200 transition-colors duration-300">
                  <option>1 {t('reservation.person', 'Person')}</option>
                  <option>2 {t('reservation.people', 'People')}</option>
                  <option>3 {t('reservation.people', 'People')}</option>
                  <option>4 {t('reservation.people', 'People')}</option>
                  <option>5+ {t('reservation.people', 'People')}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-coffee-950 dark:text-white transition-colors duration-300 mb-2">{t('reservation.special_request', 'Special Request (Optional)')}</label>
              <textarea rows={3} className="w-full border-b border-coffee-200 dark:border-coffee-700 transition-colors duration-300 py-3 bg-transparent focus:outline-none focus:border-coffee-600 transition-colors resize-none" placeholder="Any special requirements..."></textarea>
            </div>

            <div className="pt-6">
              <Button type="submit" variant="primary" className="w-full md:w-auto">
                {t('reservation.button')}
              </Button>
            </div>
          </form>

          <div className="mt-16 pt-8 border-t border-coffee-100 dark:border-coffee-800 transition-colors duration-300 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-coffee-800 dark:text-coffee-200 transition-colors duration-300 mb-4 sm:mb-0">{t('reservation.prefer_call', 'Prefer to call?')}</p>
            <Button href="tel:+251911000000" variant="outline">
              {t('nav.order')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
