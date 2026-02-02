import { Navbar } from '@/components/Navbar';
import { MenuSection } from '@/components/MenuSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/TawkToWidget';

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <MenuSection />
      </div>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Menu;
