import AboutSection from "@/components/about-section";
import ClientReviews from "@/components/client-reviews";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import Header from "@/components/headers";
import HeroSection from "@/components/hero-section";
import ImageWithText from "@/components/image-with-text";
import MarqueeSection from "@/components/marquee-section";
import MeetingSchedule from "@/components/meeting-schedule";
import OurWorks from "@/components/our-works";
import ServicesSection from "@/components/services-section";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <div className="relative bg-[#101010] min-h-screen w-full min-w-0 overflow-x-clip">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ImageWithText />
      <OurWorks />
      <WhyChooseUs />
      <AboutSection />
      <ClientReviews />
      <FAQSection />
      <MeetingSchedule />
      <Footer />
    </div>
  );
}
