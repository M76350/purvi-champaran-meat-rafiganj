import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import { WelcomePopup } from '@/components/WelcomePopup';
import { WhatsAppFloatingButton } from '@/components/TawkToWidget';
import { MenuSection } from '@/components/MenuSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import AutoImageSlider from '@/components/AutoImageSlider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AutoImageSlider />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WelcomePopup />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
