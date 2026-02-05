import { WGLayout } from "@/components/wg-colosseum/WGLayout";
import { WGHeroSection } from "@/components/wg-colosseum/WGHeroSection";
import { WGTeamsPreview } from "@/components/wg-colosseum/WGTeamsPreview";
import { WGSchedulePreview } from "@/components/wg-colosseum/WGSchedulePreview";
import { WGStandingsPreview } from "@/components/wg-colosseum/WGStandingsPreview";

const WGIndex = () => {
  return (
    <WGLayout>
      <WGHeroSection />
      <WGTeamsPreview />
      <WGSchedulePreview />
      <WGStandingsPreview />
    </WGLayout>
  );
};

export default WGIndex;
