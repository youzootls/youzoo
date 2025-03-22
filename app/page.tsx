import CategorySection from "./CategorySection";
import ContactUsSection from "./ContactUsSection";
import EquipmentSection from "./EquipmentSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import SponsorsSection from "./SponsorsSection";

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <EquipmentSection></EquipmentSection>
      <HowItWorksSection></HowItWorksSection>
      <CategorySection></CategorySection>
      <ContactUsSection></ContactUsSection>
      <SponsorsSection></SponsorsSection>
    </main >
  );
}
