import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AdvantagesSection from '../components/AdvantagesSection';
import CustomersSection from '../components/CustomersSection';
import ServicesSection from '../components/ServicesSection';
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
      <ServicesSection />
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
