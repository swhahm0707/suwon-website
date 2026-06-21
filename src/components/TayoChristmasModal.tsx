import { useRef, useState } from "react";
import { motion } from "motion/react";
import { X, Linkedin, Instagram, Youtube } from "lucide-react";

interface TayoChristmasModalProps {
  onClose: () => void;
}

export default function TayoChristmasModal({ onClose }: TayoChristmasModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ src: string; name: string } | null>(null);

  const handleScrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#F7F4D5] overflow-y-auto cursor-default h-full w-full font-sans text-[#0A3323]"
    >
      {/* Navigation Layer */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-[5%] py-6 z-50 bg-[#0A3323]/95 backdrop-blur-md shadow-md text-[#F7F4D5]">
        <span 
          onClick={onClose}
          className="font-black text-xs md:text-sm tracking-[2px] uppercase select-none cursor-pointer hover:opacity-85"
        >
          SUWON HAHM | WORK
        </span>
        <div className="flex items-center gap-6">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D3968C] hover:bg-[#D3968C] text-[#F7F4D5] hover:text-[#0A3323] text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>CLOSE</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Project Hero Section */}
      <header className="pt-36 pb-24 px-[5%] text-center bg-[#839958] text-[#F7F4D5] relative overflow-hidden">
        {/* Abstract background subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="text-[10px] sm:text-[11px] font-black tracking-[4px] text-[#0A3323] uppercase block mb-4">
            3D CHARACTER MODELING & FACIAL BLENDSHAPE
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6.5rem] font-black uppercase tracking-[-2px] sm:tracking-[-4px] leading-none mb-4 font-display text-[#F7F4D5]">
            TAYO CHRISTMAS MUSICAL
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#F7F4D5]/90 uppercase font-display">
            Santa Car Mary's Gift Delivery Commotion
          </h2>
          <span className="text-xl md:text-2xl font-black block tracking-[2px] mb-12 text-[#F7F4D5]">
            2025
          </span>
          
          <div className="w-full max-w-4xl mx-auto aspect-video mb-12 rounded-xl overflow-hidden shadow-2xl border border-[#F7F4D5]/20">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/P8fOQNrH6a0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-[#F7F4D5]/90">
            Participated in the 3D character asset production for the Tayo Christmas Musical animation. The project focused on bringing two newly introduced, highly expressive character vehicles to life - the Santa Car(Mary) and Thief Car(Villain).
          </p>
        </div>
      </header>

      {/* SECTION: ROLE & CONTRIBUTION */}
      <section className="px-[5%] py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-[#0A3323] font-display">
            Role & Contributions
          </h2>
        </div>

        <div className="space-y-16">
          {/* Item 1 */}
          <div className="bg-[#839958]/5 p-8 rounded-2xl border border-[#839958]/15">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded bg-[#0A3323] flex items-center justify-center text-[#F7F4D5] font-black shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A3323] mb-3">
                  Santa Car & Thief Car Modeling
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
                  Executed the full 3D production pipeline from hard-surface vehicle modeling to detailed character styling for both key characters.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div 
                onClick={() => setActiveLightboxImg({ src: "/tayo_g/tayo_xmas_marry.png", name: "Santa Car Mary Modeling" })}
                className="bg-white border border-[#839958]/20 rounded-xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-zoom-in group"
              >
                <div className="rounded-lg overflow-hidden relative bg-neutral-50 flex items-center justify-center shadow-inner aspect-[4/3]">
                  <img loading="lazy" src="/tayo_g/tayo_xmas_marry.png"
                    alt="Santa Car Mary"
                    className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div 
                onClick={() => setActiveLightboxImg({ src: "/tayo_g/tayo_xmas_villain.png", name: "Thief Car Modeling" })}
                className="bg-white border border-[#839958]/20 rounded-xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-zoom-in group"
              >
                <div className="rounded-lg overflow-hidden relative bg-neutral-50 flex items-center justify-center shadow-inner aspect-[4/3]">
                  <img loading="lazy" src="/tayo_g/tayo_xmas_villain.png"
                    alt="Thief Car"
                    className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-[#839958]/5 p-8 rounded-2xl border border-[#839958]/15">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded bg-[#0A3323] flex items-center justify-center text-[#F7F4D5] font-black shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A3323] mb-3">
                  Santa Car & Thief Car Facial Blend Shapes
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
                  Sculpted extensive facial blend shape libraries to support a wide range of dramatic and comedic acting requirements.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div 
                onClick={() => setActiveLightboxImg({ src: "/tayo_g/tayo_xmas_marry_facial.png", name: "Santa Car Mary Facial Blend Shapes" })}
                className="bg-white border border-[#839958]/20 rounded-xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-zoom-in group"
              >
                <div className="rounded-lg overflow-hidden relative bg-neutral-50 flex items-center justify-center shadow-inner aspect-[4/3]">
                  <img loading="lazy" src="/tayo_g/tayo_xmas_marry_facial.png"
                    alt="Santa Car Mary Facial Blend Shapes"
                    className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div 
                onClick={() => setActiveLightboxImg({ src: "/tayo_g/tayo_xmas_villain_facial.png", name: "Thief Car Facial Blend Shapes" })}
                className="bg-white border border-[#839958]/20 rounded-xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-zoom-in group"
              >
                <div className="rounded-lg overflow-hidden relative bg-neutral-50 flex items-center justify-center shadow-inner aspect-[4/3]">
                  <img loading="lazy" src="/tayo_g/tayo_xmas_villain_facial.png"
                    alt="Thief Car Facial Blend Shapes"
                    className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Layer */}
      <footer className="py-24 px-[5%] text-center bg-[#F7F4D5] text-[#0A3323]">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12 font-display">
          GET IN TOUCH
        </h2>
        
        {/* Social Icons matching list */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/suwonhahm/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-12 h-12 rounded-full border border-[#0A3323]/20 flex items-center justify-center text-[#0A3323] hover:bg-[#0A3323] hover:text-[#F7F4D5] transition-all hover:-translate-y-1 shadow-sm cursor-pointer"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/happymess.official/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-12 h-12 rounded-full border border-[#0A3323]/20 flex items-center justify-center text-[#0A3323] hover:bg-[#0A3323] hover:text-[#F7F4D5] transition-all hover:-translate-y-1 shadow-sm cursor-pointer"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@STUDIOHAHM"
            target="_blank"
            rel="noopener noreferrer"
            title="Youtube"
            className="w-12 h-12 rounded-full border border-[#0A3323]/20 flex items-center justify-center text-[#0A3323] hover:bg-[#0A3323] hover:text-[#F7F4D5] transition-all hover:-translate-y-1 shadow-sm cursor-pointer"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://kmong.com/gig/773147"
            target="_blank"
            rel="noopener noreferrer"
            title="Kmong"
            className="w-12 h-12 rounded-full border border-[#0A3323]/20 flex items-center justify-center text-lg font-black tracking-tighter text-[#0A3323] hover:bg-[#0A3323] hover:text-[#F7F4D5] transition-all hover:-translate-y-1 shadow-sm cursor-pointer font-display"
          >
            K.
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-4 bg-[#0A3323] hover:bg-[#0A3323]/90 text-[#F7F4D5] text-xs font-black uppercase tracking-[2px] transition-all cursor-pointer shadow-md rounded"
          >
            CLOSE & GO BACK TO WORKS
          </button>
          <button
            onClick={handleScrollToTop}
            className="w-full sm:w-auto px-8 py-4 border-2 border-[#0A3323] hover:bg-[#0A3323] hover:text-[#F7F4D5] text-[#0A3323] text-xs font-black uppercase tracking-[2px] transition-all cursor-pointer rounded"
          >
            BACK TO TOP
          </button>
        </div>

        <p className="text-[10px] tracking-[4px] uppercase font-black opacity-50">
          © 2026 SUWON HAHM
        </p>
      </footer>

      {/* Lightbox Modal Overlay */}
      {activeLightboxImg && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A3323]/95 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out select-none"
          onClick={() => setActiveLightboxImg(null)}
        >
          <div className="absolute top-6 right-6 flex items-center gap-4 text-[#F7F4D5] z-50">
            <span className="text-[10px] uppercase font-black tracking-widest bg-[#839958]/30 px-3 py-1.5 rounded border border-[#839958]/15 select-none hidden sm:inline-block">
              Click anywhere to close
            </span>
            <button 
              className="w-10 h-10 rounded-full border border-[#839958]/30 bg-[#0A3323]/90 flex items-center justify-center text-[#F7F4D5] hover:bg-[#D3968C] hover:text-[#0A3323] transition-colors cursor-pointer shadow-lg"
              onClick={() => setActiveLightboxImg(null)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div 
            className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center gap-4 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img loading="lazy" src={activeLightboxImg.src}
              alt={activeLightboxImg.name}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border border-[#839958]/25 shadow-2xl bg-neutral-900/10"
            />
            <span className="text-[#F7F4D5] text-center text-lg sm:text-2xl font-black uppercase tracking-widest mt-4 drop-shadow">
              {activeLightboxImg.name}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
