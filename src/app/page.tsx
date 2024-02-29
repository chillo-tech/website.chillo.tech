import FAQ from '@/components/sections/FAQ';
import PricingPanel from '@/components/sections/PricingPanel';

import Banner from '@/components/sections/Banner';
import HowItsWork from "@/components/sections/HowItsWork";

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
