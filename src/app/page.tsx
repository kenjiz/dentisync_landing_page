import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import TrustedBy from '@/components/TrustedBy';
import FeatureDetails from '@/components/FeatureDetails';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0066FF]">
      <Hero />
      <TrustedBy />
      <FeatureDetails />
      <GetStarted />
      <Testimonials />
    </main>
  );
}
