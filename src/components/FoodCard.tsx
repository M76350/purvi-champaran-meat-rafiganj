import { useState } from 'react';
import { MenuItem } from '@/data/menuItems';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Info, Flame, Check, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart, getQuantityOptions, getQuantityLabel, calculatePrice, QuantityOption } from '@/hooks/useCart';

interface FoodCardProps {
  item: MenuItem;
}

export function FoodCard({ item }: FoodCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedOption, setSelectedOption] = useState<QuantityOption>(() => {
    const options = getQuantityOptions(item.pricingType);
    return options[options.length - 1]; // Default to largest option
  });
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useCart();
  const quantityOptions = getQuantityOptions(item.pricingType);
  const currentPrice = calculatePrice(item, selectedOption);

  const handleAddToCart = () => {
    addToCart(item, selectedOption, quantity);
    setQuantity(1);
  };

  const renderSpiceLevel = () => {
    if (!item.spiceLevel) return null;
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: item.spiceLevel }).map((_, i) => (
          <Flame key={i} className="h-3 w-3 text-destructive fill-destructive" />
        ))}
      </div>
    );
  };

  const renderQuantityOptions = () => {
    if (quantityOptions.length <= 1) return null;
    
    return (
      <div className="flex flex-wrap gap-1 mb-3">
        {quantityOptions.map((option) => {
          const price = calculatePrice(item, option);
          const isSelected = selectedOption === option;
          return (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`px-2 py-1 text-xs rounded-md border transition-all ${
                isSelected 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-background border-border hover:border-primary/50'
              }`}
            >
              <span className="en-text">{getQuantityLabel(option, 'en')}</span>
              <span className="hi-text hindi-text">{getQuantityLabel(option, 'hi')}</span>
              <span className="ml-1 font-semibold">₹{price}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const renderIncludes = () => {
    if (!item.includes) return null;
    return (
      <div className="mt-2">
        <p className="text-xs font-medium text-muted-foreground mb-1">
          <span className="en-text">Includes:</span>
          <span className="hi-text hindi-text">शामिल:</span>
        </p>
        <div className="flex flex-wrap gap-1">
          <span className="en-text text-xs text-muted-foreground">
            {item.includes.en.join(' • ')}
          </span>
          <span className="hi-text hindi-text text-xs text-muted-foreground">
            {item.includes.hi.join(' • ')}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover-lift border border-border/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container with Slider Effect */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.nameEn}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
              isHovered && item.image2 ? '-translate-x-full' : 'translate-x-0'
            }`}
          />
          {item.image2 && (
            <img
              src={item.image2}
              alt={`${item.nameEn} alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
                isHovered ? 'translate-x-0' : 'translate-x-full'
              }`}
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {item.discount && (
              <Badge className="bg-accent text-accent-foreground font-bold">
                {item.discount}% OFF
              </Badge>
            )}
            {item.isSpecial && (
              <Badge className="bg-secondary text-secondary-foreground">
                <span className="en-text">Special</span>
                <span className="hi-text hindi-text">स्पेशल</span>
              </Badge>
            )}
          </div>

          {/* Veg/Non-Veg Indicator */}
          <div className="absolute top-3 right-3">
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                item.isVeg ? 'border-green-500' : 'border-red-500'
              }`}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  item.isVeg ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Name */}
          <h3 className="font-bold text-lg mb-1 text-foreground">
            <span className="en-text">{item.nameEn}</span>
            <span className="hi-text hindi-text">{item.nameHi}</span>
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            <span className="en-text">{item.descriptionEn}</span>
            <span className="hi-text hindi-text">{item.descriptionHi}</span>
          </p>

          {/* Includes for thali/handi items */}
          {(item.pricingType === 'thali' || item.pricingType === 'per-kg') && renderIncludes()}

          {/* Quantity Options */}
          <div className="mt-3">
            {renderQuantityOptions()}
          </div>

          {/* Price and Spice Level */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">₹{currentPrice * quantity}</span>
              {item.originalPrice && selectedOption === '1kg' && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{item.originalPrice}
                </span>
              )}
            </div>
            {renderSpiceLevel()}
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="en-text">Add</span>
              <span className="hi-text hindi-text">जोड़ें</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowDetails(true)}
              className="border-primary/50 hover:bg-primary/10"
            >
              <Info className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <span className="en-text">{item.nameEn}</span>
              <span className="hi-text hindi-text">{item.nameHi}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img
              src={item.image}
              alt={item.nameEn}
              className="w-full h-48 object-cover rounded-lg"
            />
            <DialogDescription className="text-foreground">
              <span className="en-text">{item.descriptionEn}</span>
              <span className="hi-text hindi-text">{item.descriptionHi}</span>
            </DialogDescription>

            {/* Price Options in Dialog */}
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-sm font-semibold mb-2">
                <span className="en-text">Price Options:</span>
                <span className="hi-text hindi-text">कीमत विकल्प:</span>
              </p>
              <div className="grid grid-cols-3 gap-2">
                {quantityOptions.map((option) => {
                  const price = calculatePrice(item, option);
                  return (
                    <div key={option} className="text-center p-2 bg-background rounded-md border border-border">
                      <span className="block text-xs text-muted-foreground">
                        <span className="en-text">{getQuantityLabel(option, 'en')}</span>
                        <span className="hi-text hindi-text">{getQuantityLabel(option, 'hi')}</span>
                      </span>
                      <span className="font-bold text-primary">₹{price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Includes in Dialog */}
            {item.includes && (
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-semibold mb-2">
                  <span className="en-text">What's Included:</span>
                  <span className="hi-text hindi-text">क्या शामिल है:</span>
                </p>
                <ul className="space-y-1">
                  {item.includes.en.map((inc, idx) => (
                    <li key={idx} className="en-text flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      {inc}
                    </li>
                  ))}
                  {item.includes.hi.map((inc, idx) => (
                    <li key={idx} className="hi-text hindi-text flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {item.isVeg ? (
                  <Badge variant="outline" className="border-green-500 text-green-500">
                    Veg
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-red-500 text-red-500">
                    Non-Veg
                  </Badge>
                )}
                {renderSpiceLevel()}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
