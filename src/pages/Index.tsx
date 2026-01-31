import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MenuSection } from '@/components/MenuSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WelcomePopup } from '@/components/WelcomePopup';
import { WhatsAppFloatingButton } from '@/components/TawkToWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WelcomePopup />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
