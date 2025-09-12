import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const allProducts = [
  {
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
    price: 129.99,
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
    price: 149.99,
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
    price: 199.99,
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
    price: 119.99,
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
    price: 79.99,
    purity: "99.9%",
    size: "5mg",
    rating: 4.6,
    reviews: 92,
    benefits: ["Anxiety reduction", "Cognitive boost", "Mood enhancement"],
    description: "Nootropic peptide for cognitive enhancement and stress reduction.",
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "GHK-Cu",
    fullName: "Copper Peptide",
    category: "Anti-Aging",
    price: 159.99,
    purity: "99.8%",
    size: "50mg",
    rating: 4.5,
    reviews: 78,
    benefits: ["Skin regeneration", "Wound healing", "Anti-aging"],
    description: "Copper peptide for skin health and cellular regeneration.",
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "GHRP-6",
    fullName: "Growth Hormone Releasing Peptide-6",
    category: "Growth Hormone",
    price: 139.99,
    purity: "99.7%",
    size: "5mg",
    rating: 4.7,
    reviews: 145,
    benefits: ["GH release", "Appetite stimulation", "Recovery"],
    description: "Growth hormone releasing peptide with appetite stimulating effects.",
    inStock: true,
    featured: false
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle URL parameters for category filtering
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setCategoryFilter(categoryParam);
    }
  }, [location.search]);

  // Update URL when category filter changes
  const handleCategoryChange = (newCategory: string) => {
    setCategoryFilter(newCategory);
    const params = new URLSearchParams(location.search);
    if (newCategory === "all") {
      params.delete('category');
    } else {
      params.set('category', newCategory);
    }
    const newSearch = params.toString();
    navigate(`/products${newSearch ? `?${newSearch}` : ''}`, { replace: true });
  };

  const categories = ["all", ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = allProducts
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => 
      categoryFilter === "all" || product.category === categoryFilter
    )
    .sort((a, b) => {
      switch(sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });

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
    <div>
      {/* Header */}
      <section className="py-16 bg-subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Premium Peptides
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our complete collection of research-grade peptides and supplements
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
                  
                  <CardTitle className="text-lg font-bold text-card-foreground group-hover:text-primary transition-smooth">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {product.fullName}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">{product.size} vial</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center pt-2">
                  <Link to={`/product/${product.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`}>
                    <Button 
                      variant="outline" 
                      className="w-full"
                    >
                      <Info className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;