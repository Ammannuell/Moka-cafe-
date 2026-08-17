import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAFAFA] dark:bg-coffee-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] dark:from-coffee-950 via-[#FAFAFA]/90 dark:via-coffee-950/90 to-transparent z-10 transition-colors duration-300" />
          <img 
            src="/assets/food and drink/514255208_759216279808963_491440508219988769_n.webp" 
            alt="Moka Café Experience" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full">
          <div className="max-w-2xl">
            <span className="block text-coffee-600 dark:text-coffee-400 font-medium tracking-widest uppercase text-sm mb-6 transition-colors duration-300">
              {t('home.welcome')}
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-coffee-950 dark:text-white leading-tight mb-8 transition-colors duration-300">
              {t('home.title')}.
            </h1>
            <p className="text-xl md:text-2xl text-coffee-800 dark:text-coffee-200 font-light leading-relaxed mb-12 max-w-lg transition-colors duration-300">
              {t('home.tagline')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button href="/menu" variant="primary">
                {t('home.view_menu')}
              </Button>
              <Button href="tel:+251911000000" variant="outline">
                {t('nav.order')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experience - Asymmetric Layout */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 dark:text-white mb-8 leading-tight transition-colors duration-300">
              {t('home.featured_experience')}
            </h2>
            <p className="text-lg text-coffee-800 dark:text-coffee-200 font-light leading-relaxed mb-10 transition-colors duration-300">
              {t('home.featured_desc')}
            </p>
            <Button href="/about" variant="ghost" className="!p-0 border-b border-coffee-950 dark:border-white text-coffee-950 dark:text-white rounded-none !inline-flex hover:border-coffee-600 dark:hover:border-coffee-400 group transition-colors duration-300">
              {t('home.read_story')}
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="/assets/food and drink/514395763_764984209232170_92537549707921682_n.webp" 
                alt="Café Atmosphere" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 aspect-square border-8 border-[#FAFAFA] dark:border-coffee-950 overflow-hidden rounded-sm hidden lg:block transition-colors duration-300">
              <img 
                src="/assets/food and drink/images.webp" 
                alt="Coffee Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Editorial */}
      <section className="py-32 bg-coffee-100/50 dark:bg-coffee-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-20">
            <div>
              <span className="block text-coffee-600 dark:text-coffee-400 font-medium tracking-widest uppercase text-xs mb-4 transition-colors duration-300">
                {t('home.taste_quality')}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300">
                {t('home.signature_items')}
              </h2>
            </div>
            <Button href="/menu" variant="outline" className="hidden md:inline-flex">
              {t('home.full_menu')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-sm mb-6">
                <img 
                  src="/assets/food and drink/515506179_738609188536339_3916500111002938980_n.webp" 
                  alt="Specialty Coffee" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-medium text-coffee-950 dark:text-white transition-colors duration-300">{t('home.items.roast_title')}</h3>
                <span className="text-lg font-medium text-coffee-600 dark:text-coffee-400 transition-colors duration-300">ETB 150</span>
              </div>
              <p className="text-coffee-800/80 dark:text-coffee-200/80 font-light text-sm mb-4 transition-colors duration-300">
                {t('home.items.roast_desc')}
              </p>
              <a href="tel:+251911000000" className="text-sm font-medium text-coffee-950 dark:text-white underline decoration-coffee-300 dark:decoration-coffee-700 underline-offset-4 hover:decoration-coffee-950 dark:hover:decoration-white transition-colors duration-300">
                {t('nav.order')}
              </a>
            </div>

            {/* Item 2 */}
            <div className="group cursor-pointer mt-0 md:mt-16">
              <div className="aspect-square overflow-hidden rounded-sm mb-6">
                <img 
                  src="/assets/food and drink/518252678_739999478397310_2507074205939960839_n.webp" 
                  alt="Delicious Pastry" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-medium text-coffee-950 dark:text-white transition-colors duration-300">{t('home.items.pastry_title')}</h3>
                <span className="text-lg font-medium text-coffee-600 dark:text-coffee-400 transition-colors duration-300">ETB 200</span>
              </div>
              <p className="text-coffee-800/80 dark:text-coffee-200/80 font-light text-sm mb-4 transition-colors duration-300">
                {t('home.items.pastry_desc')}
              </p>
              <a href="tel:+251911000000" className="text-sm font-medium text-coffee-950 dark:text-white underline decoration-coffee-300 dark:decoration-coffee-700 underline-offset-4 hover:decoration-coffee-950 dark:hover:decoration-white transition-colors duration-300">
                {t('nav.order')}
              </a>
            </div>

            {/* Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-sm mb-6">
                <img 
                  src="/assets/food and drink/524479127_754872706909987_7829785631538121352_n.webp" 
                  alt="Signature Dish" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-medium text-coffee-950 dark:text-white transition-colors duration-300">{t('home.items.special_title')}</h3>
                <span className="text-lg font-medium text-coffee-600 dark:text-coffee-400 transition-colors duration-300">ETB 450</span>
              </div>
              <p className="text-coffee-800/80 dark:text-coffee-200/80 font-light text-sm mb-4 transition-colors duration-300">
                {t('home.items.special_desc')}
              </p>
              <a href="tel:+251911000000" className="text-sm font-medium text-coffee-950 dark:text-white underline decoration-coffee-300 dark:decoration-coffee-700 underline-offset-4 hover:decoration-coffee-950 dark:hover:decoration-white transition-colors duration-300">
                {t('nav.order')}
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button href="/menu" variant="outline" className="w-full">
              {t('home.full_menu')}
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-coffee-950 dark:text-white mb-10 leading-tight transition-colors duration-300">
          {t('home.come_enjoy')}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button href="/reservation" variant="primary">
            {t('home.reserve')}
          </Button>
          <Button href="tel:+251911000000" variant="secondary">
            {t('nav.order')}
          </Button>
        </div>
      </section>
    </div>
  );
}
