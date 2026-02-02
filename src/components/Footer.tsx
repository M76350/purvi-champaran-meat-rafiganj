import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // assuming you have shadcn/ui Input
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { language, setLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top contact strip */}
      <div className="bg-black py-4 border-b border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-8 w-8 text-orange-500" />
            <span>2025 Avenue, Rafiganj</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-8 w-8 text-orange-500" />
            <span> +91 74249 61362</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-8 w-8 text-orange-500" />
            <span>champaranmeatrafiganj@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left - Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center text-2xl shadow-lg">
                🍖
              </div>
              <h3 className="text-xl font-bold text-white">
                <span className="en-text">Purvi Champaran Handi Meat</span>
                <span className="hi-text hindi-text">पूर्वी चम्पारण हांडी मीट</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <span className="en-text">
                Purvi Champaran Handi Meat brings authentic Bihar-style slow-cooked mutton handi with rich spices and tender meat. Fresh, hygienic, and full of traditional flavor from Rafiganj.
              </span>
              <span className="hi-text hindi-text">
                पूर्वी चंपारण हांडी मीट बिहार स्टाइल धीमी आंच पर पका हुआ मटन हांडी लाता है, समृद्ध मसालों और कोमल मीट के साथ। ताजा, स्वच्छ और रफीगंज की पारंपरिक स्वाद से भरपूर।
              </span>
            </p>
            <p className="text-sm flex items-center gap-1.5">
              <span className="en-text">Made with</span>
              <span className="hi-text hindi-text">द्वारा बनाया गया</span>
              {/* <Heart className="h-4 w-4 text-red-600 fill-red-600" /> */} @
              <a href="https://github.com/M76350" target="_blank" rel="noopener noreferrer"><span className="en-text">Manish kumar</span></a>
              <span className="hi-text hindi-text">मनीष कुमार</span>
            </p>
          </div>

          {/* Middle - Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-6">
              Useful Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-orange-400 transition">About</a></li>
              <li><a href="/menu" className="hover:text-orange-400 transition">menu</a></li> {/* or change to /menu */}
              <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Right - Subscribe */}
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-6">
              Subscribe
            </h4>
            <p className="text-gray-400 mb-4">
              <span className="en-text">Don't miss to subscribe to our new feeds, kindly fill the form below.</span>
              <span className="hi-text hindi-text">हमारे नए फीड्स की सदस्यता लेना न भूलें, कृपया नीचे फॉर्म भरें।</span>
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder={language === 'en' ? "Email Address" : "ईमेल पता"}
                className="rounded-r-none bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 rounded-l-none">
                <span className="en-text">Subscribe</span>
                <span className="hi-text hindi-text">सदस्यता</span>
              </Button>
            </form>

            {/* Social icons at bottom right */}
            <div className="mt-8">
              <h5 className="text-sm font-medium text-gray-400 mb-3">
                <span className="en-text">Follow us</span>
                <span className="hi-text hindi-text">हमें फॉलो करें</span>
              </h5>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">FB</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">Google+</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black py-4 border-t border-gray-800 text-center text-sm text-gray-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {currentYear}{' '}
            <span className="en-text">All rights reserved</span>
            <span className="hi-text hindi-text">सर्वाधिकार सुरक्षित</span>
          </p>

          {/* Language switcher */}
          <div className="flex items-center gap-2 bg-gray-800 rounded-full p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-4 text-xs transition-all ${language === 'en'
                ? 'bg-orange-600 text-white hover:bg-orange-600'
                : 'hover:bg-gray-700 text-gray-400'
                }`}
            >
              English
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('hi')}
              className={`rounded-full px-4 text-xs transition-all hindi-text ${language === 'hi'
                ? 'bg-orange-600 text-white hover:bg-orange-600'
                : 'hover:bg-gray-700 text-gray-400'
                }`}
            >
              हिंदी
            </Button>
          </div>

          {/* Contact icons bottom */}
          <div className="flex items-center gap-5">
            <a href="tel:+917424961362" className="hover:text-orange-400 transition">
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/917424961362"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                {/* your WhatsApp SVG path here */}
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}