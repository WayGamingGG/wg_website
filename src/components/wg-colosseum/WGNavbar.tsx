import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Início", href: "/wg-colosseum" },
  { name: "Equipas", href: "/wg-colosseum/equipas" },
  { name: "Classificação", href: "/wg-colosseum/classificacao" },
  { name: "Calendário", href: "/wg-colosseum/calendario" },
  { name: "Regras", href: "/wg-colosseum/regras" },
];

export const WGNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/wg-colosseum") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wg-background/90 backdrop-blur-xl border-b border-violet-500/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/wg-colosseum" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
              <span className="text-xl font-display font-bold text-white">W</span>
            </div>
            <span className="text-xl font-display font-bold text-white">
              WG <span className="text-violet-400">COLOSSEUM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "text-violet-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Back to Home */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="border-violet-500/30 text-violet-400 hover:bg-violet-500/10">
                <Home className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-violet-500/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-semibold transition-colors ${
                    isActive(link.href)
                      ? "text-violet-400"
                      : "text-gray-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/"
                className="flex items-center gap-2 text-violet-400 mt-4 pt-4 border-t border-violet-500/20"
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-4 h-4" />
                Voltar ao Início
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
