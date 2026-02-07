import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30 rounded-none">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center glow-purple">
            <Gamepad2 className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Game<span className="text-primary">Vault</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Stats", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Log In
          </button>
          <button className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity glow-purple">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {["Features", "How It Works", "Stats", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-xl mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
