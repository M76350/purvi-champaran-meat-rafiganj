import { Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { language, setLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg">
                🍖
              </div>
              <span className="font-bold text-foreground">
                <span className="en-text">Purvi Champaran Handi Meat</span>
                <span className="hi-text hindi-text">पूर्वी चम्पारण हांडी मीट</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              <span className="en-text">Made with</span>
              <span className="hi-text hindi-text">द्वारा बनाया गया</span>
              <Heart className="h-4 w-4 text-destructive fill-destructive" />
              <span className="en-text">in Rafiganj</span>
              <span className="hi-text hindi-text">रफीगंज में</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear}{' '}
              <span className="en-text">All rights reserved</span>
              <span className="hi-text hindi-text">सर्वाधिकार सुरक्षित</span>
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a href="tel:+917424961362" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/917424961362"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-green-500 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 bg-muted rounded-full p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-4 transition-all ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground hover:bg-primary'
                  : 'hover:bg-primary/10 text-muted-foreground'
              }`}
            >
              English
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('hi')}
              className={`rounded-full px-4 transition-all hindi-text ${
                language === 'hi'
                  ? 'bg-primary text-primary-foreground hover:bg-primary'
                  : 'hover:bg-primary/10 text-muted-foreground'
              }`}
            >
              हिंदी
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
