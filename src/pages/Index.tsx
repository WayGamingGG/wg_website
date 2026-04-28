import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TeamsSection } from "@/components/home/TeamsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>WayGaming Esports — Precisão. Foco. Resultado.</title>
        <meta name="description" content="WayGaming é uma organização de esports com equipas de elite em League of Legends e Valorant. Competição, talento e excelência." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SEO_SITE_NAME} />
        <meta property="og:title" content="WayGaming Esports — Precisão. Foco. Resultado." />
        <meta property="og:description" content="WayGaming é uma organização de esports com equipas de elite em League of Legends e Valorant. Competição, talento e excelência." />
        <meta property="og:image" content={SEO_LOGO} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_TWITTER} />
        <meta name="twitter:title" content="WayGaming Esports" />
        <meta name="twitter:image" content={SEO_LOGO} />
      </Helmet>
      <HeroSection />
      <TeamsSection />
      <PartnersSection />
      <NewsSection />
    </Layout>
  );
};

export default Index;
