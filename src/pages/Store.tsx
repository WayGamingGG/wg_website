import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/store/ProductCard";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { ShoppingBag, Loader2 } from "lucide-react";

const Store = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(20);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Loja | NexusGG Esports</title>
        <meta name="description" content="Loja oficial NexusGG. Compre merchandise exclusivo da organização de esports." />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              LOJA <span className="text-primary text-glow">OFICIAL</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Merchandise exclusivo da NexusGG. Veste as cores da tua organização favorita.
            </p>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-secondary/50 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Nenhum produto disponível
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Ainda não temos produtos na loja. Em breve teremos merchandise exclusivo disponível!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Store;
