import { Button } from '@/components/ui/button';
import { ArrowDown, Phone, Utensils } from 'lucide-react';

export function HeroSection() {
  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545247181-516773cae754?w=1920"
          alt="Champaran Handi Mutton"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-6">
            <span className="text-lg">🔥</span>
            <span className="text-sm font-medium">
              <span className="en-text">Authentic Champaran Cuisine</span>
              <span className="hi-text hindi-text">प्रामाणिक चम्पारण व्यंजन</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="en-text">
              <span className="text-foreground">Experience the Taste of</span>
              <br />
              <span className="text-gradient">Champaran Handi</span>
            </span>
            <span className="hi-text hindi-text">
              <span className="text-foreground">अनुभव करें</span>
              <br />
              <span className="text-gradient">चम्पारण हांडी का स्वाद</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <span className="en-text">
              Traditional clay pot cooking with secret spices, serving the most delicious 
              Handi Mutton in Rafiganj since generations.
            </span>
            <span className="hi-text hindi-text">
              गुप्त मसालों के साथ पारंपरिक मिट्टी के बर्तन में पकाना, पीढ़ियों से 
              रफीगंज में सबसे स्वादिष्ट हांडी मटन परोसना।
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/917424961362?text=Hi,%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 gap-2 animate-pulse-glow"
              >
                <Phone className="h-5 w-5" />
                <span className="en-text">Order Now</span>
                <span className="hi-text hindi-text">अभी ऑर्डर करें</span>
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToMenu}
              className="text-lg px-8 py-6 gap-2 border-2 border-primary/50 hover:bg-primary/10"
            >
              <Utensils className="h-5 w-5" />
              <span className="en-text">View Menu</span>
              <span className="hi-text hindi-text">मेन्यू देखें</span>
            </Button>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2">🍖</div>
              <p className="text-sm text-muted-foreground">
                <span className="en-text">Fresh Mutton</span>
                <span className="hi-text hindi-text">ताजा मटन</span>
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2">🏺</div>
              <p className="text-sm text-muted-foreground">
                <span className="en-text">Clay Pot</span>
                <span className="hi-text hindi-text">मिट्टी का बर्तन</span>
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2">🌶️</div>
              <p className="text-sm text-muted-foreground">
                <span className="en-text">Secret Spices</span>
                <span className="hi-text hindi-text">गुप्त मसाले</span>
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToMenu}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">
              <span className="en-text">Explore Menu</span>
              <span className="hi-text hindi-text">मेन्यू देखें</span>
            </span>
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
