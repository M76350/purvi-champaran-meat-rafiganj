import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';

const navLinks = [
  { href: '#home', labelEn: 'Home', labelHi: 'होम' },
  { href: '#menu', labelEn: 'Menu', labelHi: 'मेन्यू' },
  { href: '#about', labelEn: 'About', labelHi: 'हमारे बारे में' },
  { href: '#contact', labelEn: 'Contact', labelHi: 'संपर्क' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform">
              🍖
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg md:text-xl text-foreground leading-tight">
                <span className="en-text">Purvi Champaran</span>
                <span className="hi-text hindi-text">पूर्वी चम्पारण</span>
              </h1>
              <p className="text-xs text-muted-foreground">
                <span className="en-text">Handi Meat, Rafiganj</span>
                <span className="hi-text hindi-text">हांडी मीट, रफीगंज</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                <span className="en-text">{link.labelEn}</span>
                <span className="hi-text hindi-text">{link.labelHi}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </Button>

            {/* WhatsApp Button - Desktop */}
            <a
              href="https://wa.me/917424961362"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2">
                <Phone className="h-4 w-4" />
                <span className="en-text">Order Now</span>
                <span className="hi-text hindi-text">ऑर्डर करें</span>
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-lg">
                      🍖
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">
                        <span className="en-text">Purvi Champaran</span>
                        <span className="hi-text hindi-text">पूर्वी चम्पारण</span>
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        <span className="en-text">Handi Meat</span>
                        <span className="hi-text hindi-text">हांडी मीट</span>
                      </p>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      >
                        <span className="en-text">{link.labelEn}</span>
                        <span className="hi-text hindi-text">{link.labelHi}</span>
                      </button>
                    ))}
                  </div>

                  {/* Mobile Order Button */}
                  <a
                    href="https://wa.me/917424961362"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary gap-2">
                      <Phone className="h-4 w-4" />
                      <span className="en-text">Order on WhatsApp</span>
                      <span className="hi-text hindi-text">व्हाट्सएप पर ऑर्डर करें</span>
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
