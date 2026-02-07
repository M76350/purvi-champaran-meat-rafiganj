import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { MenuItem } from '@/data/menuItems';

export type QuantityOption = '250g' | '500g' | '1kg' | 'piece' | 'unit' | 'half' | 'full' | 'thali';

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  quantityOption: QuantityOption;
  unitPrice: number;
  totalPrice: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, quantityOption: QuantityOption, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Calculate price based on quantity option
export const calculatePrice = (item: MenuItem, quantityOption: QuantityOption): number => {
  const basePrice = item.price;
  
  switch (quantityOption) {
    case '250g':
      return Math.round(basePrice * 0.25);
    case '500g':
      return Math.round(basePrice * 0.5);
    case '1kg':
      return basePrice;
    case 'half':
      return item.halfPrice || Math.round(basePrice * 0.5);
    case 'full':
      return basePrice;
    case 'piece':
    case 'unit':
    case 'thali':
    default:
      return basePrice;
  }
};

// Get available quantity options based on pricing type
export const getQuantityOptions = (pricingType: MenuItem['pricingType']): QuantityOption[] => {
  switch (pricingType) {
    case 'per-kg':
      return ['250g', '500g', '1kg'];
    case 'full-half':
      return ['half', 'full'];
    case 'per-piece':
      return ['piece'];
    case 'per-unit':
      return ['unit'];
    case 'thali':
      return ['thali'];
    case 'simple':
    default:
      return ['unit'];
  }
};

// Get display label for quantity option
export const getQuantityLabel = (option: QuantityOption, lang: 'en' | 'hi' = 'en'): string => {
  const labels: Record<QuantityOption, { en: string; hi: string }> = {
    '250g': { en: '250g', hi: '250 ग्राम' },
    '500g': { en: '500g', hi: '500 ग्राम' },
    '1kg': { en: '1 Kg', hi: '1 किलो' },
    'piece': { en: 'Piece', hi: 'पीस' },
    'unit': { en: 'Unit', hi: 'यूनिट' },
    'half': { en: 'Half', hi: 'हाफ' },
    'full': { en: 'Full', hi: 'फुल' },
    'thali': { en: 'Thali', hi: 'थाली' },
  };
  return labels[option][lang];
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((item: MenuItem, quantityOption: QuantityOption, quantity: number = 1) => {
    const unitPrice = calculatePrice(item, quantityOption);
    const cartItemId = `${item.id}-${quantityOption}-${Date.now()}`;
    
    const newItem: CartItem = {
      id: cartItemId,
      item,
      quantity,
      quantityOption,
      unitPrice,
      totalPrice: unitPrice * quantity,
    };
    
    setItems(prev => [...prev, newItem]);
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((cartItemId: string) => {
    setItems(prev => prev.filter(item => item.id !== cartItemId));
  }, []);

  const updateQuantity = useCallback((cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    
    setItems(prev => prev.map(item => 
      item.id === cartItemId 
        ? { ...item, quantity, totalPrice: item.unitPrice * quantity }
        : item
    ));
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isCartOpen,
      setIsCartOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
