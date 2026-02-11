import { useCart, getQuantityLabel } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Trash2, Plus, Minus, MessageCircle, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CartDrawer() {
  const navigate = useNavigate();
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice 
  } = useCart();

  const handleAddMore = () => {
    setIsCartOpen(false);
    navigate('/menu');
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';

    let message = '🛒 *नया ऑर्डर / New Order*\n\n';
    
    items.forEach((cartItem, index) => {
      const quantityLabel = getQuantityLabel(cartItem.quantityOption, 'en');
      message += `${index + 1}. *${cartItem.item.nameEn}* (${cartItem.item.nameHi})\n`;
      message += `   📦 ${cartItem.quantity} x ${quantityLabel} = ₹${cartItem.totalPrice}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━\n`;
    message += `*Total / कुल: ₹${totalPrice}*\n\n`;
    message += `📍 Please share your delivery address.\n📍 कृपया अपना डिलीवरी पता बताएं।`;

    return encodeURIComponent(message);
  };

  const whatsappLink = `https://wa.me/917424961362?text=${generateWhatsAppMessage()}`;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <span className="en-text">Cart</span>
            <span className="hi-text hindi-text">कार्ट</span>
            {totalItems > 0 && (
              <Badge variant="secondary" className="ml-2">
                {totalItems}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-4">
            <ShoppingCart className="h-16 w-16 mb-2 opacity-30" />
            <p className="en-text">Your cart is empty</p>
            <p className="hi-text hindi-text">आपका कार्ट खाली है</p>
            <Button variant="outline" onClick={handleAddMore} className="gap-2">
              <PlusCircle className="h-4 w-4" />
              <span className="en-text">Browse Menu</span>
              <span className="hi-text hindi-text">मेन्यू देखें</span>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((cartItem) => (
                  <div 
                    key={cartItem.id} 
                    className="flex gap-3 p-3 rounded-lg bg-muted/50 border border-border/50"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.nameEn}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        <span className="en-text">{cartItem.item.nameEn}</span>
                        <span className="hi-text hindi-text">{cartItem.item.nameHi}</span>
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {getQuantityLabel(cartItem.quantityOption, 'en')}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          ₹{cartItem.unitPrice}
                        </span>
                      </div>
                      {cartItem.item.includes && (
                        <div className="mt-1">
                          <p className="text-[10px] text-muted-foreground">
                            <span className="en-text">Includes: {cartItem.item.includes.en.join(', ')}</span>
                            <span className="hi-text hindi-text">शामिल: {cartItem.item.includes.hi.join(', ')}</span>
                          </p>
                        </div>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {cartItem.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-primary">
                            ₹{cartItem.totalPrice}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-destructive hover:text-destructive"
                            onClick={() => removeFromCart(cartItem.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="pt-4 space-y-4">
              <Separator />
              
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>
                  <span className="en-text">Total</span>
                  <span className="hi-text hindi-text">कुल</span>
                </span>
                <span className="text-primary">₹{totalPrice}</span>
              </div>

              <Button variant="outline" onClick={handleAddMore} className="w-full gap-2 mb-2">
                <PlusCircle className="h-4 w-4" />
                <span className="en-text">Add More Items</span>
                <span className="hi-text hindi-text">और आइटम जोड़ें</span>
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  <span className="en-text">Clear</span>
                  <span className="hi-text hindi-text">हटाएं</span>
                </Button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span className="en-text">Order via WhatsApp</span>
                    <span className="hi-text hindi-text">WhatsApp पर ऑर्डर</span>
                  </Button>
                </a>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

export function CartButton() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={() => setIsCartOpen(true)}
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <Badge 
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary"
        >
          {totalItems}
        </Badge>
      )}
    </Button>
  );
}
