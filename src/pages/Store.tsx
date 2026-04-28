import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/store/ProductCard";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { ShoppingBag, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Store = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

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
        <title>Loja Oficial — WayGaming Esports</title>
        <meta name="description" content="Merchandise exclusivo da WayGaming. Veste as cores da tua organização favorita." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WayGaming Esports" />
        <meta property="og:title" content="Loja Oficial — WayGaming Esports" />
        <meta property="og:description" content="Merchandise exclusivo da WayGaming. Veste as cores da tua organização favorita." />
        <meta property="og:image" content="https://waygaming.gg/waylogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Waygaming_org" />
        <meta name="twitter:title" content="Loja Oficial — WayGaming Esports" />
        <meta name="twitter:image" content="https://waygaming.gg/waylogo.png" />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              {t('store.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary text-glow">{t('store.title').split(' ').slice(-1)}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('store.description')}
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
                {t('store.emptyTitle')}
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                {t('store.emptyDescription')}
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
