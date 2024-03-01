import FAQ from '@/components/FAQ';
import PricingPanel from '@/components/PricingPanel';

import Banner from '@/components/Banner';
import HowItsWork from '@/components/how-it-works/HowItsWork';

export default function Home() {
  return (
    <div className="space-y-24">
      <Banner />
      <HowItsWork />
      <PricingPanel />
      <FAQ />
    </div>
  );
}
