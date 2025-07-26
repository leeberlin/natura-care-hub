import Header from "@/components/Header";
import BannerCarousel from "@/components/BannerCarousel";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CompanyValues from "@/components/CompanyValues";
import CVGSection from "@/components/CVGSection";
import WaveFooter from "@/components/WaveFooter";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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
      <FAQ />
      <CompanyValues />
      <CVGSection />
      <WaveFooter />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
