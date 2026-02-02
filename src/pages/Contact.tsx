import { Navbar } from '@/components/Navbar';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/TawkToWidget';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Contact;
