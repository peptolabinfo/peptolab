import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "BPC-157",
    fullName: "Body Protection Compound-157",
    category: "Recovery & Healing",
    price: "$89.99",
    originalPrice: "$99.99",
    purity: "99.9%",
    size: "5mg",
    rating: 4.9,
    reviews: 127,
    benefits: ["Accelerated healing", "Gut health support", "Joint protection"],
    description: "A powerful healing peptide that promotes tissue repair and reduces inflammation.",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "TB-500",
    fullName: "Thymosin Beta-4",
    category: "Recovery & Performance",
    price: "$129.99",
    purity: "99.8%",
    size: "5mg",
    rating: 4.8,
    reviews: 89,
    benefits: ["Muscle recovery", "Wound healing", "Flexibility"],
    description: "Enhanced recovery peptide for athletes and active individuals.",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Ipamorelin",
    fullName: "Growth Hormone Releasing Peptide",
    category: "Growth & Longevity",
    price: "$149.99",
    purity: "99.9%",
    size: "5mg",
    rating: 4.9,
    reviews: 203,
    benefits: ["Growth hormone release", "Better sleep", "Muscle growth"],
    description: "Selective growth hormone secretagogue with minimal side effects.",
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Epitalon",
    fullName: "Epithalamin",
    category: "Anti-Aging",
    price: "$199.99",
    purity: "99.7%",
    size: "10mg",
    rating: 4.7,
    reviews: 156,
    benefits: ["Telomere support", "Longevity", "Sleep regulation"],
    description: "Pioneering anti-aging peptide for cellular regeneration and longevity.",
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "CJC-1295",
    fullName: "Modified Growth Releasing Factor",
    category: "Growth Hormone",
    price: "$119.99",
    purity: "99.8%",
    size: "5mg",
    rating: 4.8,
    reviews: 174,
    benefits: ["Sustained GH release", "Muscle growth", "Fat loss"],
    description: "Long-acting growth hormone releasing factor for sustained benefits.",
    inStock: false,
    featured: false
  },
  {
    id: 6,
    name: "Selank",
    fullName: "Nootropic Anxiolytic Peptide",
    category: "Cognitive Enhancement",
    price: "$79.99",
    purity: "99.9%",
    size: "5mg",
    rating: 4.6,
    reviews: 92,
    benefits: ["Anxiety reduction", "Cognitive boost", "Mood enhancement"],
    description: "Nootropic peptide for cognitive enhancement and stress reduction.",
    inStock: true,
    featured: false
  }
];

const FeaturedProducts = () => {
  const { toast } = useToast();

  const addToCart = (product: any) => {
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const viewProductDetails = (product: any) => {
    toast({
      title: "Product Details",
      description: `Viewing details for ${product.name}. Full product pages coming soon!`,
    });
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our most popular research-grade peptides, trusted by researchers and 
            health optimization enthusiasts worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className={`group hover:shadow-card-custom transition-smooth border-border/50 bg-card relative overflow-hidden ${
                product.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {product.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              )}
              
              {!product.inStock && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                    Out of Stock
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Purity</div>
                    <div className="text-sm font-semibold text-primary">{product.purity}</div>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {product.fullName}
                </CardDescription>
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Key Benefits:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.benefits.map((benefit, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs px-2 py-1 border-primary/30 text-primary"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{product.size} vial</div>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant={product.inStock ? "default" : "secondary"} 
                    className="flex-1 group"
                    disabled={!product.inStock}
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Notify Me"}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => viewProductDetails(product)}
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="scientific" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;