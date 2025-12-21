import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const image = node.images.edges[0]?.node;
  const variant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!variant) return;

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });

    toast.success("Adicionado ao carrinho", {
      description: node.title,
      position: "top-center"
    });
  };

  return (
    <Link to={`/store/product/${node.handle}`}>
      <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:box-glow">
        <div className="aspect-square overflow-hidden bg-secondary/20">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <ShoppingCart className="w-12 h-12" />
            </div>
          )}
        </div>
        
        <CardContent className="p-4 space-y-3">
          <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {node.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {node.description || "Produto oficial NexusGG"}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-display text-xl font-bold text-primary">
              {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
            </span>
            
            <Button
              size="sm"
              variant="outline"
              onClick={handleAddToCart}
              disabled={!variant?.availableForSale}
              className="gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Adicionar
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
