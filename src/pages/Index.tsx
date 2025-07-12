import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Add some padding to account for fixed navbar */}
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
