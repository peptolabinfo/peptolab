import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  ChevronLeft, 
  Shield, 
  Truck, 
  RefreshCw,
  Award,
  FlaskConical,
  Microscope
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Extended product data with detailed information
const productData: { [key: string]: any } = {
  "bpc-157": {
    id: 1,
    name: "BPC-157",
    fullName: "Body Protection Compound-157",
    category: "Recovery & Healing",
    price: 89.99,
    originalPrice: 99.99,
    purity: "99.9%",
    size: "5mg",
    rating: 4.9,
    reviews: 127,
    benefits: ["Accelerated healing", "Gut health support", "Joint protection", "Tendon repair"],
    description: "BPC-157 is a powerful healing peptide that promotes tissue repair and reduces inflammation throughout the body.",
    inStock: true,
    featured: true,
    images: ["/api/placeholder/400/400"],
    specifications: {
      "Molecular Weight": "1419.53 g/mol",
      "Sequence": "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
      "Purity": ">99% by HPLC",
      "Storage": "-20°C",
      "Stability": "2 years frozen"
    },
    detailedDescription: `BPC-157, also known as Body Protection Compound-157, is a pentadecapeptide derived from a protective protein found naturally in human gastric juice. This remarkable peptide has garnered significant attention in the research community for its extraordinary healing properties and regenerative capabilities.

Originally discovered through extensive research into gastric protection mechanisms, BPC-157 has shown promising results in promoting healing throughout various tissues in the body. Its unique sequence of 15 amino acids enables it to interact with multiple biological pathways involved in tissue repair, angiogenesis, and inflammatory response modulation.

Research studies have demonstrated BPC-157's ability to accelerate healing in tendons, ligaments, muscles, and even organs. The peptide appears to work by promoting the formation of new blood vessels (angiogenesis), enhancing collagen synthesis, and modulating inflammatory processes to create an optimal environment for tissue regeneration.`,
    researchBacking: [
      "Over 50 published studies on healing acceleration",
      "Demonstrated efficacy in tendon and ligament repair",
      "Shown to protect and heal gastric tissue",
      "Research indicates improved wound healing rates"
    ],
    dosageGuidelines: `Research protocols typically use doses ranging from 200-800 mcg per day, administered subcutaneously. The peptide is commonly reconstituted with bacteriostatic water and stored refrigerated. Administration is often divided into multiple daily doses for optimal stability and absorption.

Important: This product is intended for research purposes only. Consult with qualified researchers or healthcare professionals familiar with peptide research before use.`,
    safetyInformation: [
      "Generally well-tolerated in research studies",
      "No significant adverse effects reported at research doses",
      "Should be stored properly to maintain stability",
      "For research use only - not for human consumption"
    ]
  },
  "tb-500": {
    id: 2,
    name: "TB-500",
    fullName: "Thymosin Beta-4",
    category: "Recovery & Performance",
    price: 129.99,
    purity: "99.8%",
    size: "5mg",
    rating: 4.8,
    reviews: 89,
    benefits: ["Muscle recovery", "Wound healing", "Flexibility", "Anti-inflammatory"],
    description: "TB-500 is a synthetic version of Thymosin Beta-4, a naturally occurring peptide that promotes healing, recovery, and tissue regeneration.",
    inStock: true,
    featured: true,
    images: ["/api/placeholder/400/400"],
    specifications: {
      "Molecular Weight": "4963.4 g/mol",
      "Sequence": "43 amino acids",
      "Purity": ">99% by HPLC",
      "Storage": "-20°C",
      "Stability": "2 years frozen"
    },
    detailedDescription: `TB-500 is a synthetic version of Thymosin Beta-4 (Tβ4), a naturally occurring peptide present in virtually all human and animal cells. This powerful 43-amino acid peptide plays a crucial role in cellular migration, angiogenesis, and wound healing processes throughout the body.

Thymosin Beta-4 was first isolated from the thymus gland and has since been found to be one of the most abundant proteins in platelets and many other cell types. Its primary mechanism of action involves the regulation of actin, a protein that forms part of the cell's structural framework and is essential for cell movement and muscle contraction.

Research has shown that TB-500 can promote the migration of endothelial cells, which are crucial for the formation of new blood vessels. This angiogenic property, combined with its anti-inflammatory effects, makes it particularly valuable for tissue repair and regeneration studies.`,
    researchBacking: [
      "Extensive research on wound healing acceleration",
      "Studies show improved flexibility and range of motion",
      "Demonstrated anti-inflammatory properties",
      "Research indicates enhanced muscle recovery"
    ],
    dosageGuidelines: `Research protocols typically employ doses of 2-5mg administered subcutaneously, often 2-3 times per week. The peptide is usually reconstituted with bacteriostatic water and should be used within the recommended timeframe after reconstitution.

Loading phases may utilize higher frequencies, while maintenance protocols often reduce to once or twice weekly administrations. Proper storage and handling are essential for maintaining peptide integrity.`,
    safetyInformation: [
      "Well-documented safety profile in research",
      "Minimal side effects reported in studies",
      "Naturally occurring peptide with good tolerance",
      "For research purposes only"
    ]
  }
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${quantity}x ${product.name} added to your cart.`,
    });
  };

  const addToWishlist = () => {
    toast({
      title: "Added to Wishlist!",
      description: `${product.name} has been saved to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 group"
        >
          <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center border">
              <div className="text-center p-8">
                <FlaskConical className="w-20 h-20 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">Research Grade Peptide</p>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.featured && (
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{product.fullName}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Purity: </span>
                  <span className="font-semibold text-primary">{product.purity}</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-sm text-muted-foreground">per {product.size} vial</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed">{product.description}</p>

            {/* Benefits */}
            <div>
              <h3 className="font-semibold mb-3">Key Benefits:</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="border-primary/30 text-primary">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Add to Cart Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border rounded-lg">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ${(product.price * quantity).toFixed(2)} total
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="flex-1"
                    onClick={addToCart}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" onClick={addToWishlist}>
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t mt-6">
                  <div className="text-center">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-xs text-muted-foreground">Lab Tested</div>
                  </div>
                  <div className="text-center">
                    <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-xs text-muted-foreground">Free Shipping</div>
                  </div>
                  <div className="text-center">
                    <RefreshCw className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-xs text-muted-foreground">30-Day Return</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Description</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.detailedDescription}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="w-5 h-5 text-primary" />
                    Research Backing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.researchBacking?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Guidelines</CardTitle>
                  <CardDescription>
                    Important information for research applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Dosage Guidelines</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.dosageGuidelines}
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-3">Safety Information</h4>
                    <ul className="space-y-2">
                      {product.safetyInformation?.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;