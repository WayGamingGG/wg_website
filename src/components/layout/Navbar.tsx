import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gamepad2, ChevronDown, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CartDrawer } from "@/components/store/CartDrawer";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const esportsLinks = [
  { name: "League of Legends", path: "/league-of-legends" },
  { name: "Valorant", path: "/valorant" },
];

const navLinks = [
  { name: "Home", path: "/wg" },
  { name: "About", path: "/about" },
  { name: "Streamers", path: "/streamers" },
  { name: "Equipa", path: "/staff" },
  { name: "Carreiras", path: "/careers" },
  { name: "Contactos", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [esportsOpen, setEsportsOpen] = useState(false);
  const location = useLocation();
  const isEsportsActive = esportsLinks.some(link => location.pathname === link.path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/wg" className="flex items-center gap-3 group">
            <img
              src="./public/waylogo.png"
              className="
                w-20 h-20
                box-glow
                group-hover:box-glow-strong
                transition-all duration-300
              "
            />
            <span className="font-display text-2xl font-bold text-foreground">
              WAY<span className="text-primary">GAMING</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Home Link */}
            <Link
              to="/"
              className={cn(
                "px-4 py-2 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-md",
                location.pathname === "/"
                  ? "text-primary text-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              Home
            </Link>

            {/* About Link */}
            <Link
              to="/about"
              className={cn(
                "px-4 py-2 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-md",
                location.pathname === "/about"
                  ? "text-primary text-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              About
            </Link>

            {/* E-Sports Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-md",
                    isEsportsActive
                      ? "text-primary text-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  E-Sports
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border border-border z-50">
                {esportsLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "w-full px-4 py-2 font-body text-sm font-semibold uppercase tracking-wider cursor-pointer",
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Nav Links */}
            {navLinks.slice(2).map((link) => (
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
          
          {/* Button back */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Home className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
          {/* CTA Button & Cart */}
          {/* <div className="hidden md:flex items-center gap-3">
            <CartDrawer />
            <Button variant="outline" size="sm">
              Join Us
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* <CartDrawer /> */}
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
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                location.pathname === "/"
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                location.pathname === "/about"
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              About
            </Link>
            
            {/* Mobile E-Sports Section */}
            <button
              onClick={() => setEsportsOpen(!esportsOpen)}
              className="w-full flex items-center justify-between px-4 py-3 font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              E-Sports
              <ChevronDown className={cn("w-4 h-4 transition-transform", esportsOpen && "rotate-180")} />
            </button>
            {esportsOpen && (
              <div className="bg-secondary/50">
                {esportsLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-8 py-3 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(2).map((link) => (
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
