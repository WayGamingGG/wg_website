import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Always loaded — small, on the critical path
import Splash from "./pages/Splash";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Lazy loaded — only fetched when the user navigates to these routes
const LeagueOfLegends = lazy(() => import("./pages/LeagueOfLegends"));
const Valorant        = lazy(() => import("./pages/Valorant"));
const Streamers       = lazy(() => import("./pages/Streamers"));
const Staff           = lazy(() => import("./pages/Staff"));
const Careers         = lazy(() => import("./pages/Careers"));
const Contact         = lazy(() => import("./pages/Contact"));
const Donations       = lazy(() => import("./pages/Donations"));
const Store           = lazy(() => import("./pages/Store"));
const ProductDetail   = lazy(() => import("./pages/ProductDetail"));
const WGIndex         = lazy(() => import("./components/wg-colosseum/WGIndex"));
const WGTeams         = lazy(() => import("./components/wg-colosseum/WGTeams"));
const WGSchedule      = lazy(() => import("./components/wg-colosseum/WGSchedule"));
const WGStandings     = lazy(() => import("./components/wg-colosseum/WGStandings"));
const WGRules         = lazy(() => import("./components/wg-colosseum/WGRules"));
const WGDonations     = lazy(() => import("./components/wg-colosseum/WGDonations"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="wg" element={<Index />} />
              <Route path="about" element={<About />} />
              <Route path="league-of-legends" element={<LeagueOfLegends />} />
              <Route path="valorant" element={<Valorant />} />
              <Route path="streamers" element={<Streamers />} />
              <Route path="staff" element={<Staff />} />
              <Route path="careers" element={<Careers />} />
              <Route path="contact" element={<Contact />} />
              <Route path="donations" element={<Donations />} />
              <Route path="store" element={<Store />} />
              <Route path="store/product/:handle" element={<ProductDetail />} />
              <Route path="wg-colosseum" element={<WGIndex />} />
              <Route path="wg-colosseum/equipas" element={<WGTeams />} />
              <Route path="wg-colosseum/classificacao" element={<WGStandings />} />
              <Route path="wg-colosseum/calendario" element={<WGSchedule />} />
              <Route path="wg-colosseum/regras" element={<WGRules />} />
              <Route path="wg-colosseum/donations" element={<WGDonations />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
