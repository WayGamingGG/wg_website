import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  ExternalLink,
  MessageCircle
} from "lucide-react";

const socialLinks = [
  {
    name: "Discord",
    description: "Entra em contacto pelo Discord",
    url: "https://discord.com/users/1284567243379966036",
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
    color: "bg-[#5865F2]/10 hover:bg-[#5865F2]/20 text-[#5865F2]"
  },
  {
    name: "Instagram",
    description: "@waygamingesports",
    url: "https://www.instagram.com/waygamingesports/",
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: "bg-[#E4405F]/10 hover:bg-[#E4405F]/20 text-[#E4405F]"
  },
  {
    name: "Twitter / X",
    description: "@Waygaming_org",
    url: "https://x.com/Waygaming_org",
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: "bg-foreground/10 hover:bg-foreground/20 text-foreground"
  },
  {
    name: "YouTube",
    description: "WayGaming esports",
    url: "https://youtube.com/@waygamingesports",
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: "bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000]"
  },
  {
    name: "Twitch",
    description: "waygamingesports",
    url: "https://www.twitch.tv/waygamingesports",
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
      </svg>
    ),
    color: "bg-[#9146FF]/10 hover:bg-[#9146FF]/20 text-[#9146FF]"
  }
];

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contactos - WayGaming</title>
        <meta name="description" content="Entra em contacto com a NexusGG. Encontra-nos nas redes sociais ou envia-nos um email." />
      </Helmet>

      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contactos
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              ENTRA EM <span className="text-primary text-glow">CONTACTO</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Segue-nos nas redes sociais e fica a par de todas as novidades. 
              Estamos sempre disponíveis para te ouvir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            ENCONTRA-NOS NAS <span className="text-primary">REDES SOCIAIS</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-colors ${social.color}`}>
                      <social.icon />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {social.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">EMAIL</h3>
                <p className="text-muted-foreground mb-4 font-body">
                  Para questões gerais, parcerias ou imprensa
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:waydevotional@gmail.com'}
                >
                  waydevotional@gmail.com
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
