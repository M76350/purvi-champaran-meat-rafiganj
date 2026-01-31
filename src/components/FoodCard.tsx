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
import { Phone, Info, Flame } from 'lucide-react';

interface FoodCardProps {
  item: MenuItem;
}

export function FoodCard({ item }: FoodCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hi, I would like to order: ${item.nameEn} - ₹${item.price}`
  );
  const whatsappLink = `https://wa.me/917424961362?text=${whatsappMessage}`;

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
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            <span className="en-text">{item.descriptionEn}</span>
            <span className="hi-text hindi-text">{item.descriptionHi}</span>
          </p>

          {/* Price and Spice Level */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">₹{item.price}</span>
              {item.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{item.originalPrice}
                </span>
              )}
            </div>
            {renderSpiceLevel()}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2">
                <Phone className="h-4 w-4" />
                <span className="en-text">Order</span>
                <span className="hi-text hindi-text">ऑर्डर</span>
              </Button>
            </a>
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
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                {item.originalPrice && (
                  <span className="text-muted-foreground line-through">
                    ₹{item.originalPrice}
                  </span>
                )}
              </div>
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
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2">
                <Phone className="h-4 w-4" />
                <span className="en-text">Order on WhatsApp</span>
                <span className="hi-text hindi-text">व्हाट्सएप पर ऑर्डर करें</span>
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
