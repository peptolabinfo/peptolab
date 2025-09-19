import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
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

function ProductDetail() {
  const navigate = useNavigate();
const productData: { [key: string]: any } = {
  "ghrp-6": {
  detailedDescription: "GHRP-6 is a potent growth hormone secretagogue that mimics ghrelin, the hunger hormone. It is used in research to study its effects on growth hormone release, appetite stimulation, and metabolic regulation. GHRP-6 has shown promise in animal studies for muscle growth, fat loss, and recovery enhancement. Its unique mechanism of action makes it a valuable tool for investigating endocrine and metabolic pathways.",
    id: 1,
    name: "GHRP-6",
    fullName: "GHRP-6 10mg",
    category: "Growth Hormone",
    price: 500,
    size: "10mg",
  description: "GHRP-6 (Growth Hormone Releasing Peptide-6) is a synthetic hexapeptide that stimulates the secretion of growth hormone. It is widely used in research for its potential to promote muscle growth, enhance recovery, and support fat loss. GHRP-6 also increases appetite and may improve sleep quality.",
    currency: "ILS",
    details: "GHRP-6 is a growth hormone releasing peptide used for research in growth hormone stimulation.",
  images: ["/lovable-uploads/products/GHRP-6.jpeg"],
    benefits: [
      "Stimulates natural growth hormone release",
      "Supports muscle growth and recovery",
      "May improve sleep quality",
      "Promotes fat loss"
    ],
    specifications: {
      "Molecular Weight": "873.01 g/mol",
      "Sequence": "His-D-Trp-Ala-Trp-D-Phe-Lys-NH2",
      "CAS Number": "87616-84-0",
      "Purity": ">98% (HPLC)",
      "Form": "Lyophilized powder",
      "Storage": "-20°C, protected from light"
    },
    researchBacking: [
      "Bowers, C.Y. et al. (1991). GHRP-6 stimulates GH release in humans and animals.",
      "Research supports increased muscle mass and reduced fat in animal models.",
      "Studied for its role in appetite stimulation and metabolic regulation."
    ],
    dosageGuidelines: "Typical research doses: 100-300mcg per day, subcutaneously. Reconstitute with bacteriostatic water.",
    safetyInformation: [
      "For research use only",
      "Store reconstituted peptide refrigerated"
    ]
  },
  "retatrutide": {
  detailedDescription: "Retatrutide is a next-generation investigational peptide that acts as a triple agonist for GLP-1, GIP, and glucagon receptors. It is being studied for its ability to induce significant weight loss, improve glucose metabolism, and regulate appetite. Early clinical trials have demonstrated its potential for treating obesity and metabolic syndrome, making it a promising candidate for future therapies.",
    id: 2,
    name: "Retatrutide",
    fullName: "Retatrutide 5mg",
    category: "Weight Management",
    price: 650,
    size: "5mg",
  description: "Retatrutide is a novel investigational peptide designed for weight management and metabolic research. It acts as a multi-receptor agonist, targeting GLP-1, GIP, and glucagon receptors, and is being studied for its effects on appetite suppression, glucose regulation, and body weight reduction.",
    currency: "ILS",
    details: "Retatrutide is a research peptide for weight management studies.",
  images: ["/lovable-uploads/products/Retatrutide.jpeg"],
    benefits: [
      "Supports weight management research",
      "Potential appetite regulation",
      "May improve metabolic health"
    ],
    specifications: {
      "Molecular Weight": "~4,000 g/mol",
      "Sequence": "Synthetic peptide",
      "CAS Number": "N/A (investigational)",
      "Purity": ">95% (HPLC)",
      "Form": "Lyophilized powder",
      "Storage": "-20°C, protected from light"
    },
    researchBacking: [
      "Clinical trials show significant weight loss in obese subjects (Jastreboff et al., 2023).",
      "Demonstrated improved glucose tolerance in preclinical studies.",
      "Ongoing research for diabetes and metabolic syndrome."
    ],
    dosageGuidelines: "Typical research doses: 0.1-0.5mg per week, subcutaneously. Reconstitute with bacteriostatic water.",
    safetyInformation: [
      "For research use only",
      "Store reconstituted peptide refrigerated"
    ]
  },
  "ghk-cu": {
  detailedDescription: "GHK-Cu is a naturally occurring copper peptide complex that plays a crucial role in tissue remodeling and repair. It has been extensively researched for its regenerative effects on skin, hair follicles, and internal organs. GHK-Cu is known to stimulate collagen synthesis, promote wound healing, and exhibit anti-inflammatory and antioxidant properties. Its applications extend to cosmetic, dermatological, and anti-aging research.",
    id: 3,
    name: "GHK-Cu",
    fullName: "GHK-Cu 10mg",
    category: "Anti-Aging",
    price: 500,
    size: "10mg",
  description: "GHK-Cu (Copper Peptide) is a naturally occurring tripeptide with a high affinity for copper ions. It is widely researched for its regenerative effects on skin, wound healing, and anti-aging properties. GHK-Cu is also studied for its role in hair growth and tissue repair.",
    currency: "ILS",
    details: "GHK-Cu is a copper peptide used in anti-aging and skin regeneration research.",
  images: ["/lovable-uploads/products/GHK-Cu.jpeg"],
    benefits: [
      "Promotes skin regeneration",
      "Supports wound healing",
      "May reduce signs of aging",
      "Antioxidant properties"
    ],
    specifications: {
      "Molecular Weight": "340.0 g/mol",
      "Sequence": "Gly-His-Lys-Cu",
      "CAS Number": "89030-95-5",
      "Purity": ">98% (HPLC)",
      "Form": "Lyophilized powder",
      "Storage": "-20°C, protected from light"
    },
    researchBacking: [
      "Pickart, L. et al. (2015). GHK-Cu stimulates collagen production and wound healing.",
      "Research supports anti-inflammatory and antioxidant effects.",
      "Used in cosmetic and dermatological studies for skin repair."
    ],
    dosageGuidelines: "Typical research doses: 1-10mg per week, subcutaneously or topically. Reconstitute with bacteriostatic water.",
    safetyInformation: [
      "For research use only",
      "Store reconstituted peptide refrigerated"
    ]
  },
  "bpc-157-tb-500": {
  detailedDescription: "The combination of BPC-157 and TB-500 is designed to maximize tissue repair and recovery. BPC-157, derived from a protective protein in the stomach, accelerates healing of tendons, ligaments, and muscles. TB-500, a synthetic version of Thymosin Beta-4, enhances cell migration and regeneration. Together, they are used in research for musculoskeletal injuries, inflammation reduction, and recovery optimization.",
    id: 4,
    name: "BPC-157 + TB-500",
    fullName: "BPC-157 (3mg) + TB-500 (2mg)",
    category: "Recovery & Healing",
    price: 550,
    size: "3mg + 2mg",
  description: "This combination of BPC-157 and TB-500 is designed for advanced research in tissue repair, recovery, and inflammation reduction. BPC-157 is known for its healing properties in tendons and ligaments, while TB-500 (Thymosin Beta-4) supports cell migration and regeneration.",
    currency: "ILS",
    details: "A combination of BPC-157 and TB-500 peptides for advanced recovery research.",
  images: ["/lovable-uploads/products/bpc-157 + tb-500.jpeg"],
    benefits: [
      "Accelerates tissue repair",
      "Supports joint and tendon healing",
      "May reduce inflammation",
      "Synergistic recovery effects"
    ],
    specifications: {
      "BPC-157 MW": "1419.53 g/mol",
      "TB-500 MW": "4963.5 g/mol",
      "Form": "Lyophilized powder",
      "Purity": ">98% (HPLC)",
      "Storage": "-20°C, protected from light"
    },
    researchBacking: [
      "Sikiric, P. et al. (2018). BPC-157 accelerates tendon and ligament healing in animal models.",
      "TB-500 shown to promote cell migration and tissue regeneration (Goldstein et al., 2012).",
      "Combination used in research for musculoskeletal injuries."
    ],
    dosageGuidelines: "Typical research doses: BPC-157 (200-500mcg/day), TB-500 (2-5mg/week), subcutaneously. Reconstitute with bacteriostatic water.",
    safetyInformation: [
      "For research use only",
      "Store reconstituted peptide refrigerated"
    ]
  },
  "follistatin-344": {
  detailedDescription: "Follistatin 344 is a synthetic peptide fragment that inhibits myostatin, a protein that limits muscle growth. By blocking myostatin, Follistatin 344 promotes muscle hypertrophy and regeneration. It is studied for its potential in treating muscle wasting diseases, enhancing athletic performance, and improving body composition. Research also explores its role in regenerative medicine and tissue engineering.",
    id: 5,
    name: "Follistatin 344",
    fullName: "Follistatin 344 (0.1mg)",
    category: "Muscle Growth",
    price: 500,
    size: "0.1mg",
  description: "Follistatin 344 is a synthetic peptide fragment of the follistatin protein, studied for its ability to inhibit myostatin and promote muscle growth. It is used in research for muscle wasting diseases, body composition improvement, and regenerative medicine.",
    currency: "ILS",
    details: "Follistatin 344 is a research peptide for muscle growth studies.",
  images: ["/lovable-uploads/products/Follistatin 344.jpeg"],
    benefits: [
      "Supports muscle growth research",
      "May inhibit myostatin",
      "Potential for body composition improvement"
    ],
    specifications: {
      "Molecular Weight": "37638.6 g/mol",
      "Sequence": "Ala-Glu-Gly-Gly... (344 aa)",
      "CAS Number": "104098-50-8",
      "Purity": ">95% (HPLC)",
      "Form": "Lyophilized powder",
      "Storage": "-20°C, protected from light"
    },
    researchBacking: [
      "Amthor, H. et al. (2004). Follistatin increases muscle mass by inhibiting myostatin.",
      "Research supports use in muscle wasting and regenerative studies.",
      "Investigated for body composition improvement."
    ],
    dosageGuidelines: "Typical research doses: 100-300mcg per week, subcutaneously. Reconstitute with bacteriostatic water.",
    safetyInformation: [
      "For research use only",
      "Store reconstituted peptide refrigerated"
    ]
  }
};

  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
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

  const shareProduct = async () => {
    const url = window.location.href;
    const shareData = {
      title: `${product.name} - ${product.fullName}`,
      text: `Check out this research-grade peptide: ${product.description}`,
      url: url,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link Copied!",
          description: "Product link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      toast({
        title: "Share Failed",
        description: "Unable to share this product. Please try again.",
        variant: "destructive",
      });
    }
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
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center border overflow-hidden">
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              ) : (
                <div className="text-center p-8">
                  <FlaskConical className="w-20 h-20 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">Research Grade Peptide</p>
                </div>
              )}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>

              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.fullName}</p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">₪{product.price}</span>
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

            {/* Product Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={shareProduct}
                    className="flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Product
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
}

export default ProductDetail;