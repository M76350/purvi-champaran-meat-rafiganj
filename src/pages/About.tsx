import { Navbar } from '@/components/Navbar';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/TawkToWidget';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default About;
