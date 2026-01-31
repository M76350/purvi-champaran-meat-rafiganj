import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { menuItems, categories } from '@/data/menuItems';
import { FoodCard } from './FoodCard';
import { useLanguage } from '@/hooks/useLanguage';

export function MenuSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { language } = useLanguage();

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch =
        item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameHi.includes(searchQuery) ||
        item.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="en-text">Our Delicious Menu</span>
            <span className="hi-text hindi-text">हमारा स्वादिष्ट मेन्यू</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <span className="en-text">
              Explore our wide range of authentic dishes prepared with love and tradition
            </span>
            <span className="hi-text hindi-text">
              प्यार और परंपरा के साथ तैयार किए गए हमारे प्रामाणिक व्यंजनों की विस्तृत श्रृंखला का अन्वेषण करें
            </span>
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === 'en' ? 'Search dishes...' : 'व्यंजन खोजें...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-full border-2 border-primary/20 focus:border-primary"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'border-primary/30 hover:bg-primary/10'
                }`}
              >
                <span className="en-text">{category.nameEn}</span>
                <span className="hi-text hindi-text">{category.nameHi}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FoodCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-xl text-muted-foreground">
              <span className="en-text">No dishes found. Try a different search.</span>
              <span className="hi-text hindi-text">कोई व्यंजन नहीं मिला। कोई और खोज करें।</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
