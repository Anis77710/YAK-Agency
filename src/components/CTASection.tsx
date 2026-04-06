import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const CTASection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setErrorMessage("All fields are required.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const { error: insertError } = await supabase.from("contact_submissions").insert({ name: name.trim(), phone: phone.trim(), email: email.trim() });
      if (insertError) {
        const msg = (insertError as any).message || "";
        if (msg.includes("Could not find the 'email' column") || msg.includes("column \"email\" does not exist")) {
          const { error: fallbackError } = await supabase.from("contact_submissions").insert({ name: name.trim(), phone: phone.trim() });
          if (fallbackError) throw fallbackError;
        } else {
          throw insertError;
        }
      }

      const notifyResponse = await supabase.functions.invoke("contact-notify", {
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), email: email.trim() }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("contact-notify response", notifyResponse);
      if (notifyResponse.error) {
        throw notifyResponse.error;
      }

      setStatus("sent");
      setName("");
      setPhone("");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      const message =
        error && typeof error === "object"
          ? "message" in error && typeof error.message === "string"
            ? error.message
            : "details" in error && typeof error.details === "string"
            ? error.details
            : "hint" in error && typeof error.hint === "string"
            ? error.hint
            : JSON.stringify(error)
          : "Submission failed. Please try again.";
      setErrorMessage(message || "Submission failed. Please try again.");
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
                Email<span className="text-primary">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
            {errorMessage && (
              <p className="text-destructive text-sm">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
