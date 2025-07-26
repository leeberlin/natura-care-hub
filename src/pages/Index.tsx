import Header from "@/components/Header";
import BannerCarousel from "@/components/BannerCarousel";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <BannerCarousel />
      <Hero />
      <Welcome />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
