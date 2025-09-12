import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import ScientificCredibility from "@/components/ScientificCredibility";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCategories />
      <ScientificCredibility />
      <ContactCTA />
    </div>
  );
};

export default Index;
