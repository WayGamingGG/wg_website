import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TeamsSection } from "@/components/home/TeamsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { PartnersSection } from "@/components/home/PartnersSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TeamsSection />
      <NewsSection />
      {/* <PartnersSection /> */}
    </Layout>
  );
};

export default Index;
