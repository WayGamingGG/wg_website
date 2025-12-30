import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import LeagueOfLegends from "./pages/LeagueOfLegends";
import Valorant from "./pages/Valorant";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Staff from "./pages/Staff";
import Streamers from "./pages/Streamers";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/league-of-legends" element={<LeagueOfLegends />} />
            <Route path="/valorant" element={<Valorant />} />
            <Route path="/streamers" element={<Streamers />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/product/:handle" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
