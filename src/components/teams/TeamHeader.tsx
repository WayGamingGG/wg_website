import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TeamHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  icon: ReactNode;
}

export const TeamHeader = ({ title, subtitle, description, accentColor, icon }: TeamHeaderProps) => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-30",
        accentColor
      )} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary rounded-full mb-8">
            {icon}
            <span className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {subtitle}
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-black mb-6">
            {title}
          </h1>
          
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
