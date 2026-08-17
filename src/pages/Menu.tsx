import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

export default function Menu() {
  const { t } = useTranslation();
  
  const categories = [
    t('menu.cats.all'), 
    t('menu.cats.breakfast'), 
    t('menu.cats.food'), 
    t('menu.cats.coffee'), 
    t('menu.cats.juice'), 
    t('menu.cats.desserts')
  ];

  const menuItems = [
    {
      id: 1,
      name: t('menu.items.breakfast_name'),
      description: t('menu.items.breakfast_desc'),
      price: 'ETB 350',
      category: t('menu.cats.breakfast'),
      image: '/assets/food and drink/518252678_739999478397310_2507074205939960839_n.webp'
    },
    {
      id: 2,
      name: t('menu.items.roast_name'),
      description: t('menu.items.roast_desc'),
      price: 'ETB 150',
      category: t('menu.cats.coffee'),
      image: '/assets/food and drink/515506179_738609188536339_3916500111002938980_n.webp'
    },
    {
      id: 3,
      name: t('menu.items.doro_name'),
      description: t('menu.items.doro_desc'),
      price: 'ETB 550',
      category: t('menu.cats.food'),
      image: '/assets/food and drink/524479127_754872706909987_7829785631538121352_n.webp'
    },
    {
      id: 4,
      name: t('menu.items.mango_name'),
      description: t('menu.items.mango_desc'),
      price: 'ETB 180',
      category: t('menu.cats.juice'),
      image: '/assets/food and drink/514255208_759216279808963_491440508219988769_n.webp'
    },
    {
      id: 5,
      name: t('menu.items.macchiato_name'),
      description: t('menu.items.macchiato_desc'),
      price: 'ETB 220',
      category: t('menu.cats.coffee'),
      image: '/assets/food and drink/514395763_764984209232170_92537549707921682_n.webp'
    },
    {
      id: 6,
      name: t('menu.items.lava_name'),
      description: t('menu.items.lava_desc'),
      price: 'ETB 300',
      category: t('menu.cats.desserts'),
      image: '/assets/food and drink/images.webp'
    }
  ];

  const [activeCategory, setActiveCategory] = useState(t('menu.cats.all'));

  const filteredItems = activeCategory === t('menu.cats.all') 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#FAFAFA] dark:bg-coffee-950 transition-colors duration-300 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="block text-coffee-600 font-medium tracking-widest uppercase text-sm mb-6">
            {t('menu.curated')}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-coffee-950 dark:text-white transition-colors duration-300 leading-tight mb-8">
            {t('menu.title')}
          </h1>
          <p className="text-lg text-coffee-800 dark:text-coffee-200 transition-colors duration-300 font-light leading-relaxed">
            {t('menu.desc')}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-coffee-950 text-white shadow-md'
                  : 'bg-coffee-100/50 dark:bg-coffee-900/50 transition-colors duration-300 text-coffee-800 dark:text-coffee-200 transition-colors duration-300 hover:bg-coffee-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {filteredItems.map((item, index) => (
            <div key={item.id} className={`group cursor-pointer ${index % 3 === 1 ? 'lg:mt-16' : index % 3 === 2 ? 'lg:mt-32' : ''}`}>
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-coffee-100 dark:bg-coffee-800 transition-colors duration-300">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-medium text-coffee-950 dark:text-white transition-colors duration-300">{item.name}</h3>
                <span className="text-lg font-medium text-coffee-600 ml-4 shrink-0">{item.price}</span>
              </div>
              <p className="text-coffee-800/80 font-light text-sm mb-5">
                {item.description}
              </p>
              <Button href="tel:+251911000000" variant="outline" className="w-full">
                {t('nav.order')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}