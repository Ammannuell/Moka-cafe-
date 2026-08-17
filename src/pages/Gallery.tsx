import { useTranslation } from 'react-i18next';
export default function Gallery() {
  const { t } = useTranslation();

  const images = [
    { src: '/assets/food and drink/514255208_759216279808963_491440508219988769_n.webp', size: 'large' },
    { src: '/assets/food and drink/518252678_739999478397310_2507074205939960839_n.webp', size: 'small' },
    { src: '/assets/food and drink/514395763_764984209232170_92537549707921682_n.webp', size: 'medium' },
    { src: '/assets/food and drink/images.webp', size: 'small' },
    { src: '/assets/food and drink/524479127_754872706909987_7829785631538121352_n.webp', size: 'medium' },
    { src: '/assets/food and drink/515506179_738609188536339_3916500111002938980_n.webp', size: 'large' },
  ];

  return (
    <div className="bg-[#FAFAFA] dark:bg-coffee-950 transition-colors duration-300 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="block text-coffee-600 font-medium tracking-widest uppercase text-sm mb-6">
            {t('gallery.visual')}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 leading-tight mb-8">
            {t('gallery.title')}
          </h1>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <div key={index} className="break-inside-avoid overflow-hidden rounded-sm cursor-pointer group relative">
              <div className="absolute inset-0 bg-coffee-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img 
                src={img.src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}