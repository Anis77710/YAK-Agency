import yakLogo from "@/assets/yak-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={yakLogo} alt="YAK" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-display font-bold text-lg text-foreground">YAK</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#contacts" className="hover:text-foreground transition-colors">Contacts</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 YAK Creative Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
