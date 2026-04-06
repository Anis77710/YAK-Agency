import yakLogo from "@/assets/yak-logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={yakLogo} alt="YAK Creative Design" className="w-10 h-10 rounded-lg object-cover" />
          <span className="font-display font-bold text-xl text-foreground">
            YAK
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Projects", "Services", "Contacts"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm text-muted-foreground">EN</span>
          <div className="flex gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors text-xs">in</a>
            <a href="#" className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors text-xs">be</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
