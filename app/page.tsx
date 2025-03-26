import { Metadata } from "next";
import CategorySection from "./CategorySection";
import ContactUsSection from "./ContactUsSection";
import EquipmentSection from "./EquipmentSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import SponsorsSection from "./SponsorsSection";

export const metadata: Metadata = {
  title: 'Youzoo - Matériel médical accessible',
  description: 'Youzoo est une association à but non lucratif spécialisée dans le réemploi de matériel médical pour les enfants en situation de handicap.',
  openGraph: {
    title: 'Accueil Youzoo',
    description: 'Youzoo est une association à but non lucratif spécialisée dans le réemploi de matériel médical pour les enfants en situation de handicap.',
  },
};

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
