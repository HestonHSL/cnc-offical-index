import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AdvantagesSection from '../components/AdvantagesSection';
import CustomersSection from '../components/CustomersSection';
import CNCMachiningSection from '../components/CNCMachiningSection';
import Printing3DSection from '../components/Printing3DSection';
import SheetMetalSection from '../components/SheetMetalSection';
import PartnerSection from '../components/PartnerSection';
import PlatformSection from '../components/PlatformSection';
import HowToWorkSection from '../components/HowToWorkSection';
import CustomerStoriesSection from '../components/CustomerStoriesSection';
import SolutionsSection from '../components/SolutionsSection';
import QualitySection from '../components/QualitySection';
import ResourcesSection from '../components/ResourcesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <CustomersSection />
      <CNCMachiningSection />
      <SheetMetalSection />
      <Printing3DSection />
      <PartnerSection />
      <PlatformSection />
      <HowToWorkSection />
      <CustomerStoriesSection />
      <SolutionsSection />
      <QualitySection />
      <ResourcesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
