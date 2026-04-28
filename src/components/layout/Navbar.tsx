import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const esportsLinks = [
  { name: "League of Legends", path: "/league-of-legends" },
  { name: "Valorant", path: "/valorant" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [esportsOpen, setEsportsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const isEsportsActive = esportsLinks.some(link => location.pathname === link.path);

  const navLinks = [
    { name: t('nav.streamers'), path: "/streamers" },
    { name: t('nav.team'), path: "/staff" },
    { name: t('nav.careers'), path: "/careers" },
    { name: t('nav.contacts'), path: "/contact" },
    { name: t('nav.donations'), path: "/donations" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/wg" className="flex items-center gap-3 group">
            <img
              src="/waylogo.png"
              alt="Way Gaming"
              className="
                w-28 h-20
                transition-all duration-300
                drop-shadow-[0_0_12px_rgba(0,255,200,0.6)]
                group-hover:drop-shadow-[0_0_22px_rgba(0,255,200,0.9)]
              "
            />
            <span className="font-display text-2xl font-bold text-foreground">
              WAY<span className="text-primary">GAMING</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/about"
              className={cn(
                "px-4 py-2 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-md",
                location.pathname === "/about"
                  ? "text-primary text-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {t('nav.aboutUs')}
            </Link>

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
                  {t('nav.esports')}
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

          {/* Right side: language switcher + back button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Home className="w-4 h-4 mr-2" />
                {t('nav.back')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
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
              to="/about"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                location.pathname === "/about"
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {t('nav.aboutUs')}
            </Link>

            <button
              onClick={() => setEsportsOpen(!esportsOpen)}
              className="w-full flex items-center justify-between px-4 py-3 font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              {t('nav.esports')}
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
                {t('common.joinUs')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
