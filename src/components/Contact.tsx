import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Instagram, Youtube, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionHistory, setSubmissionHistory] = useState<any[]>(() => {
    try {
      const stored = localStorage.getItem("suwon_contact_messages");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnjrrrkr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newSubmission = {
          ...formData,
          id: Date.now(),
          date: new Date().toISOString(),
        };

        const updatedHistory = [newSubmission, ...submissionHistory];
        setSubmissionHistory(updatedHistory);
        try {
          localStorage.setItem("suwon_contact_messages", JSON.stringify(updatedHistory));
        } catch (err) {
          console.error("Storage write failed:", err);
        }

        setSubmitSuccess(true);

        // Clear form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Formspree submission error response:", response);
      }
    } catch (err) {
      console.error("Formspree transmission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="py-24 md:py-36 bg-cream-soft text-deep-green relative border-t border-deep-green/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Header Title */}
        <h2 className="font-black text-center mb-8 text-4xl sm:text-5xl md:text-7xl tracking-[-0.03em] uppercase max-w-2xl text-deep-green font-display">
          GET IN TOUCH
        </h2>

        <p className="text-center max-w-md text-teal-deep text-sm md:text-base font-medium mb-12 opacity-80">
          If you appreciate my artistic approach and style, let's connect.
        </p>

        {/* Combined Layout: Form and Info */}
        <div className="w-full max-w-2xl bg-deep-green border border-olive-drab/20 shadow-2xl p-6 md:p-10 text-cream-soft rounded-lg mb-16 relative overflow-hidden">
          {/* Success Overlay */}
          <AnimatePresence>
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-deep-green/95 z-20 flex flex-col items-center justify-center text-center p-6"
              >
                <motion.div
                  initial={{ scale: 0.6, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="mb-4 text-pink-soft"
                >
                  <CheckCircle className="w-16 h-16 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-black uppercase mb-2 font-display">Message Transmitted</h3>
                <p className="text-sm text-cream-soft/70 max-w-md mb-6">
                  Thank you! Your message has been successfully transmitted and received.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2 bg-olive-drab text-cream-soft rounded text-[10px] uppercase font-bold tracking-widest hover:bg-pink-soft transition-colors cursor-pointer"
                >
                  Send Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label htmlFor="name-input" className="text-[10px] uppercase font-extrabold tracking-widest text-cream-soft/60">
                  Your Name
                </label>
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Robin"
                  className="w-full px-4 py-3 bg-black/20 border border-olive-drab/30 focus:border-pink-soft focus:outline-none text-sm transition-all rounded text-cream-soft placeholder-cream-soft/30"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email-input" className="text-[10px] uppercase font-extrabold tracking-widest text-cream-soft/60">
                  Email Address
                </label>
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. robin@studio.com"
                  className="w-full px-4 py-3 bg-black/20 border border-olive-drab/30 focus:border-pink-soft focus:outline-none text-sm transition-all rounded text-cream-soft placeholder-cream-soft/30"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message-textarea" className="text-[10px] uppercase font-extrabold tracking-widest text-cream-soft/60">
                Brief details
              </label>
              <textarea
                id="message-textarea"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="What parameters are we modeling today?"
                className="w-full px-4 py-3 bg-black/20 border border-olive-drab/30 focus:border-pink-soft focus:outline-none text-sm transition-all rounded text-cream-soft placeholder-cream-soft/30 resize-none"
              />
              <p className="text-[11px] text-cream-soft/70 pt-1 tracking-wider font-medium">
                Email: <a href="mailto:swhahm0707@gmail.com" className="text-pink-soft hover:underline transition-all">swhahm0707@gmail.com</a>
              </p>
            </div>

            <button
              id="submit-message-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-4 bg-olive-drab hover:bg-pink-soft disabled:bg-olive-drab/40 text-cream-soft font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded cursor-pointer"
            >
              {isSubmitting ? (
                <span>Transmitting Coordinates...</span>
              ) : (
                <>
                  <span>Transmit Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Social Links Network */}
        <div className="flex justify-center gap-8 md:gap-10 mb-16">
          <a
            id="social-linkedin"
            href="https://www.linkedin.com/in/suwonhahm/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-deep-green/10 hover:border-pink-soft text-deep-green hover:text-pink-soft hover:-translate-y-1 bg-transparent hover:bg-deep-green/5 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            id="social-instagram"
            href="https://www.instagram.com/happymess.official/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-deep-green/10 hover:border-pink-soft text-deep-green hover:text-pink-soft hover:-translate-y-1 bg-transparent hover:bg-deep-green/5 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            id="social-youtube"
            href="https://www.youtube.com/@STUDIOHAHM"
            target="_blank"
            rel="noopener noreferrer"
            title="Youtube"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-deep-green/10 hover:border-pink-soft text-deep-green hover:text-pink-soft hover:-translate-y-1 bg-transparent hover:bg-deep-green/5 transition-all duration-300"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            id="social-kmong"
            href="https://kmong.com/gig/773147"
            target="_blank"
            rel="noopener noreferrer"
            title="Kmong"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-deep-green/10 hover:border-pink-soft text-deep-green hover:text-pink-soft hover:-translate-y-1 bg-transparent hover:bg-deep-green/5 font-display font-black text-sm text-center leading-none tracking-tight transition-all duration-300 select-none pb-0.5"
          >
            K.
          </a>
        </div>

        {/* Footer citation metadata */}
        <p className="text-[10px] tracking-[0.25em] font-bold opacity-40 uppercase text-center text-deep-green select-none">
          © 2026 SUWON HAHM
        </p>
      </div>
    </footer>
  );
}
