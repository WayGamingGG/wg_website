import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { ShoppingCart, Loader2, ArrowLeft, Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      
      try {
        const fetchedProduct = await fetchProductByHandle(handle);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Produto não encontrado
          </h1>
          <Link to="/store">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar à loja
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const images = product.images.edges;
  const variants = product.variants.edges;
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const price = selectedVariant?.price || product.priceRange.minVariantPrice;

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    const shopifyProduct: ShopifyProduct = {
      node: product
    };

    addItem({
      product: shopifyProduct,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || []
    });

    toast.success("Adicionado ao carrinho", {
      description: `${quantity}x ${product.title}`,
      position: "top-center"
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>{product.title} | NexusGG Store</title>
        <meta name="description" content={product.description || `Compre ${product.title} na loja oficial NexusGG`} />
      </Helmet>

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link to="/store" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar à loja
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-secondary/20 border border-border">
                {images[selectedImage]?.node ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <ShoppingCart className="w-16 h-16" />
                  </div>
                )}
              </div>
              
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                        selectedImage === index ? "border-primary box-glow" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={img.node.url}
                        alt={img.node.altText || `${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {product.title}
                </h1>
                <p className="font-display text-3xl font-bold text-primary text-glow">
                  {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                </p>
              </div>

              {product.description && (
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Variants */}
              {product.options.length > 0 && product.options[0].name !== "Title" && (
                <div className="space-y-4">
                  {product.options.map((option, optionIndex) => (
                    <div key={option.name}>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {option.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value) => {
                          const variantIndex = variants.findIndex(v => 
                            v.node.selectedOptions.some(o => o.name === option.name && o.value === value)
                          );
                          const isSelected = selectedVariantIndex === variantIndex;
                          const variant = variants[variantIndex]?.node;
                          
                          return (
                            <button
                              key={value}
                              onClick={() => variantIndex >= 0 && setSelectedVariantIndex(variantIndex)}
                              disabled={variant && !variant.availableForSale}
                              className={`px-4 py-2 rounded-md border text-sm font-semibold transition-all ${
                                isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : variant?.availableForSale
                                  ? "border-border bg-secondary/30 text-foreground hover:border-primary/50"
                                  : "border-border bg-secondary/10 text-muted-foreground line-through cursor-not-allowed"
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Quantidade
                </label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-display text-xl font-bold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="xl"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
                className="w-full gap-3"
              >
                <ShoppingCart className="w-5 h-5" />
                {selectedVariant?.availableForSale ? "Adicionar ao Carrinho" : "Esgotado"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
