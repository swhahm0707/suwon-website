import { useRef } from "react";
import { motion } from "motion/react";
import { X, Linkedin, Instagram, Youtube } from "lucide-react";
// @ts-ignore
import brandLogo from "../assets/images/regenerated_image_1780147495452.png";

interface PrototypesModalProps {
  onClose: () => void;
}

export default function PrototypesModal({ onClose }: PrototypesModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#839958] overflow-y-auto cursor-default h-full w-full font-sans text-[#F7F4D5]"
    >
      {/* Navigation Layer */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-[5%] py-6 z-50 bg-[#0A3323]/95 backdrop-blur-md shadow-md text-[#F7F4D5]">
        <span className="font-black text-xs md:text-sm tracking-[2px] uppercase select-none">
          SUWON HAHM | WORK
        </span>
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D3968C] hover:bg-[#D3968C] text-[#F7F4D5] hover:text-[#0A3323] text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer-parent"
        >
          <span>CLOSE</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-24 px-[5%] text-center text-[#F7F4D5]">
        <span className="text-[10px] sm:text-[11px] font-black tracking-[4px] text-[#0A3323] uppercase block mb-4">
          AI CHARACTER
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] font-black uppercase tracking-[-2px] sm:tracking-[-4px] leading-none mb-4 font-display">
          Prototypes
        </h1>
        <span className="text-xl md:text-2xl font-black block tracking-[2px] mb-8">
          2026
        </span>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-[#F7F4D5]/90">
          Too often, our industry treats artificial intelligence as a passive rendering tool—a glorified, high-speed paintbrush. Deconstructing that assumption, this specific series explores the outer boundaries of pure, prompt-driven character creation. Rather than forcing the machine into a state of silent compliance, I experimented with assigning it a distinct creative persona, treating it as a volatile collaborator. The ultimate goal was to test the friction between automation and artistry, pushing the algorithm to its logical limits to observe a slippery question: Can a machine possess a distinct, un-replicated signature of originality?
        </p>

        {/* Tools Badges */}
        <div className="mt-12 flex justify-center items-center gap-6">
          <img
            src={brandLogo}
            alt="Brand Logo"
            className="w-16 h-16 object-contain opacity-95 hover:scale-110 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* Main Feature Visual Banner */}
      <section className="w-full h-[60vh] md:h-[85vh] flex items-center justify-center bg-[#F7F4D5] overflow-hidden p-4">
        <img
          src="/prototypes_g/prototypes_main.png"
          alt="Main prototypes character showcase"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* PHASES SECTION (2-Column Grid matching css) */}
      <section className="bg-[#F7F4D5] text-[#0A3323] py-24 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Phase 01 */}
          <div className="space-y-6">
            <span className="text-[11px] font-black tracking-[2px] text-[#839958] uppercase block">
              Phase 01
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none font-display text-[#0A3323]">
              Setting the Persona
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-[#105666] leading-relaxed">
              <p>
                To initiate the project, I framed the AI's role within the pipeline by establishing a high-level creative constraint. I prompted the system with a specific professional identity:
              </p>
              <blockquote className="border-l-4 border-[#839958] bg-[#839958]/10 px-6 py-4 italic text-[#0A3323] font-medium rounded-r">
                "You are a Senior Concept Art Director exploring multiverse variations of a character for an animation pitch."
              </blockquote>
              <p>
                By shifting the AI's role from a simple asset generator to an art director, I allowed the system to pitch broader creative interpretations. Starting with a singular thematic anchor—such as 'Sleepy Man'—I utilized an LLM node to autonomously expand and generate diverse visual variations based on that core concept.
              </p>
            </div>
          </div>

          {/* Phase 02 */}
          <div className="space-y-6">
            <span className="text-[11px] font-black tracking-[2px] text-[#839958] uppercase block">
              Phase 02
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none font-display text-[#0A3323]">
              Embracing Machine Originality
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-[#105666] leading-relaxed">
              <p>
                In my previous workflows, I relied heavily on precise post-processing tools like the 'Painter' (masking) node to control and combine specific elements. For this series, however, I imposed a strict creative constraint on myself: zero manual intervention.
              </p>
              <p>
                I deliberately avoided masking, compositing, or manual touch-ups, choosing instead to trust the raw, unedited outputs of the AI. This constraint allowed me to examine how effectively the algorithm could interpret the prompt's nuances and maintain aesthetic integrity completely on its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHARACTER GRID SECTION */}
      <section className="py-24 px-[5%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="group bg-[#0A3323]/10 rounded overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-[#F7F4D5]/10">
            <div className="aspect-video bg-[#F7F4D5] overflow-hidden flex items-center justify-center p-2">
              <img
                src="/prototypes_g/prototypes_timeKeeper.png"
                alt="Time Keeper"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 text-center">
              <span className="text-sm font-black tracking-[1px] uppercase text-[#F7F4D5]">
                01. Time Keeper
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#0A3323]/10 rounded overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-[#F7F4D5]/10">
            <div className="aspect-video bg-[#F7F4D5] overflow-hidden flex items-center justify-center p-2">
              <img
                src="/prototypes_g/prototypes_chef.png"
                alt="The Chef"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 text-center">
              <span className="text-sm font-black tracking-[1px] uppercase text-[#F7F4D5]">
                02. The Chef
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#0A3323]/10 rounded overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-[#F7F4D5]/10">
            <div className="aspect-video bg-[#F7F4D5] overflow-hidden flex items-center justify-center p-2">
              <img
                src="/prototypes_g/prototypes_witch.png"
                alt="The Witch"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 text-center">
              <span className="text-sm font-black tracking-[1px] uppercase text-[#F7F4D5]">
                03. The Witch
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-[#0A3323]/10 rounded overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-[#F7F4D5]/10">
            <div className="aspect-video bg-[#F7F4D5] overflow-hidden flex items-center justify-center p-2">
              <img
                src="/prototypes_g/prototypes_sleepyBoy.png"
                alt="The Sleepy Boy"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 text-center">
              <span className="text-sm font-black tracking-[1px] uppercase text-[#F7F4D5]">
                04. The Sleepy Boy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION SECTION (Center aligned text) */}
      <section className="bg-[#0A3323] text-[#F7F4D5] py-24 px-[5%] text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#F7F4D5] font-display">
            From Modeler to Creative Director
          </h2>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed text-[#F7F4D5]/90 space-y-6 text-center">
            <p>
              It was an incredibly engaging experience to witness a vast array of distinct visual identities emerge from just a few concise keywords. This experiment highlighted how a prompt-only workflow can serve as a powerful ideation engine early in the development pipeline, offering unexpected aesthetic directions and rapid concept iterations that I might not have initially conceived.
            </p>
            <p>
              Ultimately, this project proved that the role of the 3D artist is evolving. Moving forward, I plan to integrate this hands-off ideation process to rapidly develop character concepts and extract raw visual inspiration before laying down a single polygon.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-[5%] bg-[#F7F4D5] text-[#0A3323] text-center border-t border-[#0A3323]/10">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-12 uppercase font-display">
          GET IN TOUCH
        </h2>
        <div className="flex justify-center gap-6 sm:gap-8 mb-12 animate-fade-in">
          <a
            href="https://www.linkedin.com/in/suwonhahm/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-[#0A3323]/20 text-[#0A3323] transition-all duration-300 hover:scale-105 hover:bg-[#D3968C]/15 hover:border-[#D3968C]"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.instagram.com/happymess.official/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-[#0A3323]/20 text-[#0A3323] transition-all duration-300 hover:scale-105 hover:bg-[#D3968C]/15 hover:border-[#D3968C]"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.youtube.com/@STUDIOHAHM"
            target="_blank"
            rel="noopener noreferrer"
            title="Youtube"
            className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-[#0A3323]/20 text-[#0A3323] transition-all duration-300 hover:scale-105 hover:bg-[#D3968C]/15 hover:border-[#D3968C]"
          >
            <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://kmong.com/gig/773147"
            target="_blank"
            rel="noopener noreferrer"
            title="Kmong"
            className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-[#0A3323]/20 text-[#0A3323] transition-all duration-300 hover:scale-105 hover:bg-[#D3968C]/15 hover:border-[#D3968C] text-base sm:text-lg font-black font-display font-display"
          >
            K.
          </a>
        </div>

        {/* Action Controls (Scroll to top and Close) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-[#0A3323] text-[#F7F4D5] hover:bg-[#D3968C] hover:text-[#0A3323] font-black uppercase text-xs tracking-widest rounded-full transition-all duration-300 shadow-md cursor-pointer-parent"
          >
            CLOSE & GO BACK TO WORKS
          </button>
          <button
            onClick={handleScrollToTop}
            className="px-8 py-3 border border-[#0A3323] hover:bg-[#0A3323] hover:text-[#F7F4D5] font-black uppercase text-xs tracking-widest rounded-full transition-all duration-300 cursor-pointer-parent"
          >
            Scroll to Top
          </button>
        </div>

        <p className="text-[10px] sm:text-xs font-bold tracking-[2px] opacity-40 uppercase">
          © 2026 SUWON HAHM
        </p>
      </footer>
    </motion.div>
  );
}
