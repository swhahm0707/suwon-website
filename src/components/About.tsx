import { motion } from "motion/react";
import { Sparkles, Cpu, Mail, ArrowUpRight } from "lucide-react";

export default function About() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-24 md:py-36 bg-deep-green text-cream-soft relative overflow-hidden border-b border-olive-drab/10">
      {/* Abstract Background Accents to symbolize "math & meaning" */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-olive-drab/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 top-1/4 w-96 h-96 bg-pink-soft/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative math-grid representation */}
      <div className="absolute right-[5%] top-[10%] opacity-[0.03] pointer-events-none hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" className="text-cream-soft">
          <circle cx="120" cy="120" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="20" y1="120" x2="220" y2="120" stroke="currentColor" strokeWidth="1" />
          <line x1="120" y1="20" x2="120" y2="220" stroke="currentColor" strokeWidth="1" />
          <rect x="70" y="70" width="100" height="100" stroke="currentColor" strokeWidth="1" />
          <path d="M 20,20 L 220,220" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 20,220 L 220,20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Tag section */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-5xl sm:text-7xl md:text-[7rem] font-black tracking-[-0.04em] leading-none uppercase font-display select-none text-cream-soft">
            ABOUT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Greeting */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] text-cream-soft font-display tracking-tight">
              Hello,<br />
              I’m <span className="text-pink-soft">Suwon Hahm</span>
            </h3>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A3323] bg-pink-soft px-3 py-1.5 rounded">
                AI Artist
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream-soft border border-cream-soft/30 px-3 py-1.5 rounded">
                3D Character Modeler
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-[#F7F4D5]/90 text-sm sm:text-base leading-relaxed">
              <p>
                I work at the fragile intersection of math and meaning, breathing human emotion and narrative into the rigid geometric grids defined by computers.
              </p>
              <p>
                In a digital landscape that risks becoming increasingly standardized and sterile as technology advances, my creative mission is to explore the new aesthetic paradigms born when raw algorithmic power collides with the uncompromised human imagination.
              </p>
              
              <p className="font-serif italic text-xl sm:text-2xl text-pink-soft py-4 border-y border-olive-drab/15 my-6 leading-relaxed">
                "What parameters are we modeling today?"
              </p>

              <p>
                If you are looking to push boundaries in AI art, 3D modeling, next-generation visual storytelling, or hybrid 3D pipeline collaborations, let’s connect. Feel free to drop a message anytime—let's construct something extraordinary.
              </p>
            </div>

            {/* Micro Call-to-Action button under text */}
            <div className="pt-4">
              <button
                onClick={handleScrollToContact}
                className="group inline-flex items-center gap-3 bg-pink-soft/10 border border-pink-soft/30 hover:bg-pink-soft hover:text-deep-green transition-all duration-350 text-cream-soft px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer"
              >
                <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>INQUIRE & COLLABORATE</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
