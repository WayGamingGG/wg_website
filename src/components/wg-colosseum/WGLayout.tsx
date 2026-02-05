import { ReactNode } from "react";
import { WGNavbar } from "./WGNavbar";
import { WGFooter } from "./WGFooter";

interface WGLayoutProps {
  children: ReactNode;
}

export const WGLayout = ({ children }: WGLayoutProps) => {
  return (
    <div className="min-h-screen bg-wg-background text-wg-foreground">
      <WGNavbar />
      <main>{children}</main>
      <WGFooter />
    </div>
  );
};
