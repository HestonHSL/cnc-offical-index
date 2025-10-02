import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AdvantagesSection from '../components/AdvantagesSection';
// import CustomersSection from '../components/CustomersSection';
import ServicesOverviewSection from '../components/ServicesOverviewSection';
import CNCMachiningSection from '../components/CNCMachiningSection';
import SheetMetalSection from '../components/SheetMetalSection';
import Printing3DSection from '../components/Printing3DSection';
import PartnerSection from '../components/PartnerSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AdvantagesSection />
      {/* <CustomersSection /> */}
      <ServicesOverviewSection />
      <CNCMachiningSection />
      <SheetMetalSection />
      <Printing3DSection />
      <PartnerSection />
      <CTASection />
      <Footer />
    </div>
  );
}
