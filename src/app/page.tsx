import FAQ from '@/components/faq/FAQ';
import PricingPanel from '@/components/pricing/PricingPanel';
import Banner from '@/components/banner/Banner';
import HowItsWork from '@/components/how-it-works/HowItsWork';

export default function Home() {
    return (
        <div className="space-y-24">
            <Banner/>
            <HowItsWork/>
            <PricingPanel/>
            <FAQ/>
        </div>
    );
}
