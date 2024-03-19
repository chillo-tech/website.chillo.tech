import FAQ from '@/components/faq/FAQ';
import PricingSection from '@/components/pricing/PricingSection';
import Banner from '@/components/banner/Banner';
import HowItsWork from '@/components/how-it-works/HowItsWork';
import AboutUs from '@/components/about-us/AboutUs';
import Service from "@/components/service/Service";

export default function Home() {
  return (
    <div className="space-y-24">
      <Banner />
      <AboutUs />
      <HowItsWork />
      <Service />
      <PricingSection />
      <FAQ />
    </div>
  );
}
