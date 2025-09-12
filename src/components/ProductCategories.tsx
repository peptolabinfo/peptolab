import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dna, Zap, Heart, Brain, Dumbbell, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const categories = [
  {
    icon: Dumbbell,
    title: "Growth & Recovery",
    description: "Peptides designed to enhance muscle growth, repair, and recovery",
    products: ["BPC-157", "TB-500", "IGF-1 LR3"],
    gradient: "from-primary/10 to-primary/5"
  },
  {
    icon: Brain,
    title: "Cognitive Enhancement", 
    description: "Nootropic peptides for memory, focus, and mental clarity",
    products: ["Noopept", "Cerebrolysin", "Selank"],
    gradient: "from-accent/10 to-accent/5"
  },
  {
    icon: Heart,
    title: "Longevity & Wellness",
    description: "Anti-aging peptides for cellular regeneration and vitality",
    products: ["Epitalon", "GHK-Cu", "Thymosin Alpha-1"],
    gradient: "from-secondary/10 to-secondary/5"
  },
  {
    icon: Zap,
    title: "Metabolic Support",
    description: "Fat loss and metabolic optimization compounds",
    products: ["AOD-9604", "CJC-1295", "Ipamorelin"],
    gradient: "from-primary/10 to-primary/5"
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "Peptides to strengthen and regulate immune function",
    products: ["LL-37", "Thymosin Beta-4", "BHB"],
    gradient: "from-accent/10 to-accent/5"
  },
  {
    icon: Dna,
    title: "Research Compounds",
    description: "Cutting-edge peptides for advanced research applications",
    products: ["PT-141", "Melanotan II", "GHRP-6"],
    gradient: "from-secondary/10 to-secondary/5"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slide-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of research-grade peptides, each category 
            carefully curated for specific health and performance goals.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <AnimatedSection 
                key={index}
                animation="slide-in-left"
                delay={index * 100}
              >
                <Card 
                  className="group hover:shadow-card-custom hover:-translate-y-1 transition-all duration-300 border-border/50 bg-gradient-to-br hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--card), var(--card))`
                  }}
                >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:shadow-molecular transition-smooth`}>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-smooth">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-medium text-muted-foreground">Popular Products:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link to="/products">
                    <Button variant="scientific" className="w-full group">
                      View Products
                      <Dna className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    </Button>
                  </Link>
                </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;