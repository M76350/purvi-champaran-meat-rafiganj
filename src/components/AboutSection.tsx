import { ChefHat, Award, Heart, Clock } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: ChefHat,
      titleEn: 'Traditional Recipe',
      titleHi: 'पारंपरिक नुस्खा',
      descEn: 'Passed down through generations',
      descHi: 'पीढ़ियों से चला आ रहा',
    },
    {
      icon: Award,
      titleEn: 'Premium Quality',
      titleHi: 'उच्च गुणवत्ता',
      descEn: 'Only the freshest ingredients',
      descHi: 'केवल ताजी सामग्री',
    },
    {
      icon: Heart,
      titleEn: 'Made with Love',
      titleHi: 'प्यार से बना',
      descEn: 'Every dish crafted with care',
      descHi: 'हर व्यंजन देखभाल से तैयार',
    },
    {
      icon: Clock,
      titleEn: 'Slow Cooked',
      titleHi: 'धीमी आंच पर पकाया',
      descEn: 'Hours of patience for perfection',
      descHi: 'परिपूर्णता के लिए घंटों का धैर्य',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1545247181-516773cae754?w=400"
                alt="Champaran Handi cooking"
                className="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400"
                alt="Traditional clay pot"
                className="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover mt-8"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold">
                <span className="en-text">Est. 2010</span>
                <span className="hi-text hindi-text">स्थापित 2010</span>
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="en-text">Our Story</span>
              <span className="hi-text hindi-text">हमारी कहानी</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 text-lg">
              <span className="en-text">
                Welcome to Purvi Champaran Handi Meat, where we bring the authentic taste of 
                Champaran to Rafiganj. Our specialty - the legendary Handi Mutton - is slow-cooked 
                in traditional clay pots using a secret blend of spices that has been in our 
                family for generations.
              </span>
              <span className="hi-text hindi-text">
                पूर्वी चम्पारण हांडी मीट में आपका स्वागत है, जहां हम रफीगंज में चम्पारण का 
                प्रामाणिक स्वाद लाते हैं। हमारी विशेषता - प्रसिद्ध हांडी मटन - पारंपरिक मिट्टी के 
                बर्तनों में गुप्त मसालों के मिश्रण का उपयोग करके धीमी आंच पर पकाया जाता है जो 
                पीढ़ियों से हमारे परिवार में है।
              </span>
            </p>

            <p className="text-muted-foreground mb-8">
              <span className="en-text">
                Under the leadership of <strong className="text-foreground">Rohit Chauhan</strong>, 
                we are committed to preserving this culinary heritage while serving our 
                customers with the warmest hospitality.
              </span>
              <span className="hi-text hindi-text">
                <strong className="text-foreground">रोहित चौहान</strong> के नेतृत्व में, हम इस 
                पाक विरासत को संरक्षित करने के लिए प्रतिबद्ध हैं, साथ ही अपने ग्राहकों को 
                सबसे गर्मजोशी भरी मेहमाननवाजी प्रदान करते हैं।
              </span>
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover-lift"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      <span className="en-text">{feature.titleEn}</span>
                      <span className="hi-text hindi-text">{feature.titleHi}</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      <span className="en-text">{feature.descEn}</span>
                      <span className="hi-text hindi-text">{feature.descHi}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
