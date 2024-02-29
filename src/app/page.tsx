import FAQ from '@/components/sections/FAQ';
import PricingPanel from '@/components/sections/PricingPanel';

import Banner from '@/components/Banner';

export default function Home() {
  return (
    <div className="space-y-8">
      <Banner />
      <PricingPanel />
      <FAQ />
    </div>
  );
}
