import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeaderProps {
  onPresaleClick: () => void;
}

const Header = ({ onPresaleClick }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const handlePresaleClick = () => {
    onPresaleClick();
    setOpen(false);
  };

  return (
    <header className="fixed top-4 right-4 z-50 flex gap-2">
      <LanguageSelector />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="bg-background/80 backdrop-blur-sm border border-primary/30 hover:bg-background/90 neon-border"
          >
            <Menu className="h-5 w-5 text-primary" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-background/95 backdrop-blur-xl border-primary/30">
          <SheetHeader>
            <SheetTitle className="font-orbitron text-glow">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            <Button
              variant="ghost"
              className="justify-start text-lg hover:bg-primary/10 hover:text-primary"
              onClick={() => scrollToSection("tokenomics")}
            >
              {t("nav.tokenomics")}
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-lg hover:bg-primary/10 hover:text-primary"
              onClick={() => scrollToSection("roadmap")}
            >
              {t("nav.roadmap")}
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-lg hover:bg-primary/10 hover:text-primary"
              onClick={handlePresaleClick}
            >
              Presale
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
