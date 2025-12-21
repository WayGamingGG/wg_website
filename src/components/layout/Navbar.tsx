import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CartDrawer } from "@/components/store/CartDrawer";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "League of Legends", path: "/league-of-legends" },
  { name: "Valorant", path: "/valorant" },
  { name: "Loja", path: "/store" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center box-glow group-hover:box-glow-strong transition-all duration-300">
              <Gamepad2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">
              NEXUS<span className="text-primary">GG</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-md",
                  location.pathname === link.path
                    ? "text-primary text-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Cart */}
          <div className="hidden md:flex items-center gap-3">
            <CartDrawer />
            <Button variant="outline" size="sm">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <CartDrawer />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                  location.pathname === link.path
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button variant="outline" className="w-full">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
