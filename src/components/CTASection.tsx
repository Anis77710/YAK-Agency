import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const CTASection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setStatus("sending");
    try {
      const { error } = await supabase.from("contact_submissions").insert({ name: name.trim(), phone: phone.trim() });
      if (error) throw error;

      await supabase.functions.invoke("contact-notify", {
        body: { name: name.trim(), phone: phone.trim() },
      });

      setStatus("sent");
      setName("");
      setPhone("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contacts" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-black text-5xl md:text-6xl text-foreground leading-tight">
              STILL HAVE
              <br />
              QUESTIONS?
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-muted-foreground text-sm mb-2 block">
                Your Name<span className="text-primary">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                maxLength={100}
                className="w-full bg-transparent border-b border-border/50 pb-2 text-foreground text-sm outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
              />
            </div>
            <div>
              <label className="text-muted-foreground text-sm mb-2 block">
                Phone number<span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone"
                required
                maxLength={20}
                className="w-full bg-transparent border-b border-border/50 pb-2 text-foreground text-sm outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-block px-10 py-3 border border-border rounded-full text-foreground font-medium hover:bg-secondary/30 transition-colors text-sm mt-4 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "✓ Sent!" : status === "error" ? "Error, try again" : "Call Me"}
            </button>
            {status === "sent" && (
              <p className="text-primary text-sm">Thank you! We'll contact you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
