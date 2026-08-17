import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAFAFA] dark:bg-coffee-950 transition-colors duration-300 min-h-screen">
      {/* Story Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2">
            <span className="block text-coffee-600 font-medium tracking-widest uppercase text-sm mb-6">
              {t('about.origin')}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 leading-tight mb-8">
              {t('about.story_title')}
            </h1>
            <p className="text-lg text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            <p className="text-lg text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed">
              {t('about.p2')}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
              <img 
                src="/assets/food and drink/514395763_764984209232170_92537549707921682_n.webp" 
                alt="Café Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-coffee-950/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section className="py-20 px-6 lg:px-12 bg-coffee-100 dark:bg-coffee-800 transition-colors duration-300/30">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="aspect-square w-full max-w-md overflow-hidden rounded-full">
              <img 
                src="/assets/food and drink/515506179_738609188536339_3916500111002938980_n.webp" 
                alt="Coffee Brewing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 mb-8 leading-tight">
              {t('about.craft_title')}
            </h2>
            <p className="text-lg text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed">
              {t('about.craft_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
         <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 mb-8 leading-tight">
              {t('about.food_title')}
            </h2>
            <p className="text-lg text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed mb-6">
              {t('about.food_p1')}
            </p>
            <p className="text-lg text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed">
              {t('about.food_p2')}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
             <div className="grid grid-cols-2 gap-6">
               <img src="/assets/food and drink/524479127_754872706909987_7829785631538121352_n.webp" className="w-full aspect-[3/4] object-cover rounded-sm mt-12" alt="Food 1" />
               <img src="/assets/food and drink/518252678_739999478397310_2507074205939960839_n.webp" className="w-full aspect-[3/4] object-cover rounded-sm" alt="Food 2" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}