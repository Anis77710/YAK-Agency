import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ClientsSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
