import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      labelEn: 'Phone',
      labelHi: 'फोन',
      value: '+91 7424961362',
      link: 'tel:+917424961362',
    },
    {
      icon: MessageCircle,
      labelEn: 'WhatsApp',
      labelHi: 'व्हाट्सएप',
      value: '+91 7424961362',
      link: 'https://wa.me/917424961362',
    },
    {
      icon: MapPin,
      labelEn: 'Address',
      labelHi: 'पता',
      valueEn: 'Main Road, Rafiganj, Bihar',
      valueHi: 'मुख्य सड़क, रफीगंज, बिहार',
      link: 'https://maps.google.com/?q=Rafiganj,Bihar',
    },
    {
      icon: Clock,
      labelEn: 'Hours',
      labelHi: 'समय',
      valueEn: 'Open 11 AM - 11 PM',
      valueHi: 'सुबह 11 बजे - रात 11 बजे',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="en-text">Contact Us</span>
            <span className="hi-text hindi-text">संपर्क करें</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <span className="en-text">
              Visit us or order directly via WhatsApp for quick service
            </span>
            <span className="hi-text hindi-text">
              हमसे मिलें या त्वरित सेवा के लिए सीधे व्हाट्सएप पर ऑर्डर करें
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14447.764854755947!2d84.63!3d24.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b4f6b9bba57%3A0x5c5b8b8b8b8b8b8b!2sRafiganj%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link || '#'}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover-lift cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      <span className="en-text">{info.labelEn}</span>
                      <span className="hi-text hindi-text">{info.labelHi}</span>
                    </h4>
                    <p className="text-muted-foreground">
                      {info.value || (
                        <>
                          <span className="en-text">{info.valueEn}</span>
                          <span className="hi-text hindi-text">{info.valueHi}</span>
                        </>
                      )}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
              <h3 className="text-xl font-bold mb-2">
                <span className="en-text">Ready to Order?</span>
                <span className="hi-text hindi-text">ऑर्डर करने के लिए तैयार?</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                <span className="en-text">
                  Order via WhatsApp for quick delivery or pickup
                </span>
                <span className="hi-text hindi-text">
                  त्वरित डिलीवरी या पिकअप के लिए व्हाट्सएप पर ऑर्डर करें
                </span>
              </p>
              <a
                href="https://wa.me/917424961362?text=Hi,%20I%20would%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 gap-2 w-full sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="en-text">Order on WhatsApp</span>
                  <span className="hi-text hindi-text">व्हाट्सएप पर ऑर्डर करें</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
