// src/components/AutoSlider.tsx

import React from 'react';

interface Slide {
  id: string;
  image: string;
  title: string;
}

const slides: Slide[] = [
  {
    id: '05',
    image: 'https://thumbs.dreamstime.com/b/champaran-mutton-handi-mutton-ahuna-mutton-champaran-meat-also-called-ahuna-popular-dish-bihar-state-india-253105613.jpg',
    title: 'Champaran Handi Mutton',
  },
  {
    id: '06',
    image: 'https://thumbs.dreamstime.com/b/steaming-hot-mutton-chicken-biryani-ghee-whole-spices-traditional-copper-pot-ai-generated-414661138.jpg',
    title: 'Authentic Champaran Ahuna Mutton',
  },
  {
    id: '07',
    image: 'https://static.toiimg.com/thumb/53100174.cms?width=1200&height=900',
    title: 'Dum Style Mutton Biryani',
  },
  {
    id: '08',
    image: 'https://images.squarespace-cdn.com/content/v1/5e558c8165fc4c78f502938d/1632759442881-2EGKV8MH7BNF8VY9WROY/1024px-Kolkata_Biryani.jpg',
    title: 'Rich Mutton Biryani with Egg & Potato',
  },
  {
    id: '09',
    image: 'https://thumbs.dreamstime.com/b/delicious-chicken-biryani-fresh-herbs-vibrant-colors-silver-tray-appetizing-image-showcases-flavorful-chicken-422384849.jpg',
    title: 'Hyderabadi Chicken Biryani',
  },
  {
    id: '10',
    image: 'https://paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230721.jpg',
    title: 'Spicy Mutton Biryani South Indian Style',
  },
  {
    id: '11',
    image: 'https://ik.imagekit.io/munchery/blog/tr:w-768/from-punjab-to-tamil-nadu-a-tour-of-ten-indian-thalis.jpeg',
    title: 'Grand Mutton Thali Platter',
  },
  {
    id: '12',
    image: 'https://thumbs.dreamstime.com/b/traditional-indian-thali-meal-thaali-consisting-different-curries-like-sev-tomato-na-shak-aloo-gobhicauliflower-curry-109155016.jpg',
    title: 'Traditional Indian Mutton Thali',
  },
];
// Duplicate first few items → seamless infinite loop
const duplicatedSlides = [...slides, ...slides.slice(0, 3)];

const AutoSlider: React.FC = () => {
  return (
    <div className="w-full py-12 md:py-16 bg-gray-950 overflow-hidden">
      <div className="relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Our Special Dishes
        </h2>

        {/* Slider wrapper */}
        <div className="overflow-hidden mx-auto">
          <div
            className="flex animate-slideLeftToRight whitespace-nowrap"
            style={{
              animationDuration: '35s',           // change speed here
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {duplicatedSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] px-4  "
              >
                <div className="group relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-800 hover:border-orange-600/50 transition-all duration-300">
                  {/* Image container */}
                  <div className="relative h-[380px] md:h-[440px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={index < 5 ? 'eager' : 'lazy'}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* Number + Title at bottom */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-end gap-4">
                      <div className="text-5xl md:text-5xl font-black text-orange-500/90 drop-shadow-lg leading-none">
                        {slide.id}
                      </div>
                      <div className="text-white">
                        <p className="text-md md:text-md font-semibold ">
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation – add this to your global CSS or component */}
      <style>{`
        @keyframes slideLeftToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slideLeftToRight {
          animation: slideLeftToRight var(--duration, 35s) linear infinite;
        }

        /* Pause on hover */
        .overflow-hidden:hover .animate-slideLeftToRight {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AutoSlider;