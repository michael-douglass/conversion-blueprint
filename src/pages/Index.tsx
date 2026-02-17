import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MentorSection from "@/components/MentorSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import StickyCtaBar from "@/components/StickyCtaBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainSection />
      <MethodSection />
      <TestimonialsSection />
      <MentorSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
      <StickyCtaBar />
    </div>
  );
};

export default Index;
