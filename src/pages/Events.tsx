import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

export default function Events() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAFAFA] dark:bg-coffee-950 transition-colors duration-300 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 mb-32">
          <div className="w-full lg:w-1/2">
            <span className="block text-coffee-600 font-medium tracking-widest uppercase text-sm mb-6">
              {t('events.private_dining')}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 leading-tight mb-8">
              {t('events.celebrate_title')}
            </h1>
            <p className="text-lg text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed mb-8">
              {t('events.celebrate_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="tel:+251911000000" variant="primary">
                {t('events.plan_button')}
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
             <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img 
                  src="/assets/food and drink/514395763_764984209232170_92537549707921682_n.webp" 
                  alt="Event Space" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="border-t border-coffee-200 dark:border-coffee-700 transition-colors duration-300 pt-8">
             <h3 className="text-2xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 mb-4">{t('events.birthdays')}</h3>
             <p className="text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed">
               {t('events.birthdays_desc')}
             </p>
           </div>
           <div className="border-t border-coffee-200 dark:border-coffee-700 transition-colors duration-300 pt-8">
             <h3 className="text-2xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 mb-4">{t('events.business')}</h3>
             <p className="text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed">
               {t('events.business_desc')}
             </p>
           </div>
           <div className="border-t border-coffee-200 dark:border-coffee-700 transition-colors duration-300 pt-8">
             <h3 className="text-2xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 mb-4">{t('events.catering')}</h3>
             <p className="text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed">
               {t('events.catering_desc')}
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}