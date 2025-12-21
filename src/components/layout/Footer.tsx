import { Link } from "react-router-dom";
import { Gamepad2, Twitter, Instagram, Youtube, Twitch } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitch, href: "#", label: "Twitch" },
];

const footerLinks = [
  {
    title: "Teams",
    links: [
      { name: "League of Legends", path: "/league-of-legends" },
      { name: "Valorant", path: "/valorant" },
    ],
  },
  {
    title: "Organization",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "#" },
      { name: "Careers", path: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center box-glow">
                <Gamepad2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold text-foreground">
                NEXUS<span className="text-primary">GG</span>
              </span>
            </Link>
            <p className="text-muted-foreground font-body mb-6 max-w-sm">
              Somos uma organização de esports dedicada à excelência competitiva 
              e ao desenvolvimento de talentos nas maiores competições do mundo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} NexusGG. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
