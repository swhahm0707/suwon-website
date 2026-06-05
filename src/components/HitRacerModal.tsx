import { useRef, useState } from "react";
import { motion } from "motion/react";
import { X, Linkedin, Instagram, Youtube, Award, Sparkles, ShieldCheck, Heart, Cpu, ArrowUpRight } from "lucide-react";

interface HitRacerModalProps {
  onClose: () => void;
}

export default function HitRacerModal({ onClose }: HitRacerModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ src: string; name: string } | null>(null);

  const handleScrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const roles = [
    { name: "Emma (Avatar)", desc: "End-to-end character modeling and facial blend shapes." },
    { name: "Toni (Avatar)", desc: "End-to-end character modeling and facial blend shapes." },
    { name: "Suho (Avatar)", desc: "End-to-end character modeling and facial blend shapes." },
    { name: "Student", desc: "End-to-end character modeling." },
    { name: "Extra Avatars", desc: "End-to-end character modeling." },
    { name: "Jack (Avatar)", desc: "Final modeling topology overhaul, facial blend shapes, and hair styling." },
    { name: "Kai", desc: "Final facial model refinement and polish." },
    { name: "Kai (Avatar)", desc: "Facial blend shapes." },
    { name: "Lina", desc: "Final facial model refinement and polish." },
    { name: "Lina (Avatar)", desc: "Final facial model refinement and polish." },
    { name: "Sam", desc: "Final facial model refinement and polish." },
    { name: "Zeke", desc: "Final facial model refinement and polish." }
  ];

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
            Virtual Racing Animation • SBS Broadcasting
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7.5rem] xl:text-[8.5rem] font-black uppercase tracking-[-2px] sm:tracking-[-4px] leading-none mb-4 font-display">
            HitRacer
          </h1>
          <span className="text-xl md:text-2xl font-black block tracking-[2px] mb-8 text-[#F7F4D5]">
            2025
          </span>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-[#F7F4D5]/90">
            HitRacer is a full-3D virtual racing animation broadcasted across SBS and major OTT platforms, co-produced by the acclaimed animation house Locus Studios, along with Joung Ei&C and Westo. Centered around dynamic racing battles in a virtual stadium, the work thrives on its highly stylized vehicles and distinctive character avatars. Within this high-octane universe, my primary mandate focused on 3D character modeling and intricate facial blend shape development.
          </p>

          {/* Tools Badges */}
          <div className="mt-12 flex justify-center items-center gap-6">
            <img
              src="/icon_g/icon_maya.png"
              alt="Maya"
              className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <img
              src="/icon_g/icon_zbrush.png"
              alt="ZBrush"
              className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <img
              src="/icon_g/icon_mudbox.png"
              alt="Mudbox"
              className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <img
              src="/icon_g/icon_substanceP.png"
              alt="Substance Painter"
              className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <img
              src="/icon_g/icon_photoshop.png"
              alt="Photoshop"
              className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* SECTION: ROLE & CONTRIBUTION */}
      <section className="px-[5%] py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-[#0A3323] font-display">
            Role & Contribution
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#105666] font-medium leading-relaxed">
            Operating as the lead character modeler and facial expression artist, I engineered the digital anatomy for the show's roster. Notably, my technical execution of polygon hair for the <span className="text-[#D3968C] font-extrabold bg-[#0A3323] px-2 py-0.5 rounded">Emma</span> and <span className="text-[#D3968C] font-extrabold bg-[#0A3323] px-2 py-0.5 rounded">Toni</span> avatars earned formal recognition for excellence from Locus Studios.
          </p>
        </div>

        {/* Roles Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((item, index) => {
            const isHighlighted = item.name.includes("Emma") || item.name.includes("Toni") || item.name.includes("Suho");
            return (
              <div 
                key={index} 
                className={`p-6 rounded-lg transition-all border duration-300 ${
                  isHighlighted 
                    ? "bg-[#0A3323] text-[#F7F4D5] border-transparent shadow-md hover:scale-102" 
                    : "bg-[#839958]/5 text-[#0A3323] border-[#839958]/20 hover:bg-[#839958]/10"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  {isHighlighted ? (
                    <Award className="w-5 h-5 text-[#D3968C] shrink-0" />
                  ) : (
                    <Cpu className="w-5 h-5 text-[#839958] shrink-0" />
                  )}
                  <h4 className="font-extrabold text-[#D3968C] text-sm tracking-wider uppercase">
                    {item.name}
                  </h4>
                </div>
                <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isHighlighted ? "text-[#F7F4D5]/80" : "text-[#105666]"}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Character Showcase Section */}
        <div className="mt-20 border-t border-[#839958]/20 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-black tracking-[4px] text-[#839958] uppercase block mb-2">
              CHARACTER SHOWCASE
            </span>
            <div className="flex justify-center items-center gap-2">
              <span className="px-3 py-1 bg-[#D3968C] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded shadow-md animate-pulse">
                CLICK TO ENLARGE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "emma", name: "EMMA AVATAR", src: "/hitracer_g/HitRacer_EmmaAvatar.jpg" },
              { id: "tony", name: "TONY AVATER", src: "/hitracer_g/HitRacer_TonyAvatar.jpg" },
              { id: "student", name: "STUDENT B", src: "/hitracer_g/HitRacer_StudentB.jpg" },
              { id: "jack", name: "JACK AVATAER", src: "/hitracer_g/HitRacer_JackAvatar.jpg" },
              { id: "extra", name: "EXTRA AVATAR M_A", src: "/hitracer_g/HitRacer_ExAvatarM_A.jpg" }
            ].map((char) => (
              <div 
                key={char.id} 
                onClick={() => setActiveLightboxImg({ src: char.src, name: char.name })}
                className="bg-white border border-[#839958]/20 rounded-2xl p-4 shadow-lg flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-zoom-in group"
              >
                <div className="rounded-xl overflow-hidden relative bg-neutral-50 border border-neutral-100 p-2 sm:p-4 flex items-center justify-center shadow-inner">
                  <img
                    src={char.src}
                    alt={char.name}
                    className="w-full max-h-[550px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-extrabold text-xl uppercase tracking-wider text-[#0A3323] font-display py-2">
                    {char.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TECHNICAL HIGHLIGHTS */}
      <section className="bg-[#839958]/10 py-24 border-y border-[#839958]/15">
        <div className="max-w-6xl mx-auto px-[5%]">
          
          {/* Aesthetic Center Quote */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#839958] uppercase block mb-3">THE CORE THEOREM</span>
            <blockquote className="font-serif italic text-2xl sm:text-3.5xl lg:text-4xl text-[#0A3323] leading-normal font-medium px-4">
              "An elegant topology acts as the bridge <br className="hidden sm:block" />
              between a static mesh and a performance that lives."
            </blockquote>
            <div className="w-12 h-0.5 bg-[#D3968C] mx-auto mt-6" />
          </div>

          <div className="space-y-16">
            {/* Highlight 1 */}
            <div className="bg-[#F7F4D5] p-8 rounded-lg shadow-sm border border-[#839958]/15">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded bg-[#0A3323] flex items-center justify-center text-[#F7F4D5] font-black shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A3323]">
                    High-Efficiency Topology for Dynamic Kinematics
                  </h3>
                  <span className="text-[10px] text-[#839958] tracking-widest font-bold uppercase block mt-1">Deformation Optimization & Edge Economics</span>
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
                Given the extreme deformation and rapid kinesis inherent in a racing animation, I designed custom topology structures heavily optimized for downstream rigging and skin-weight workflows. The core challenge was achieving structural resilience while maintaining a strict, minimal polygon count. Every edge loop was economically placed to eliminate unnecessary geometry, ensuring the assets remained lightweight without sacrificing the volume or silhouette of the characters.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-[#F7F4D5] p-8 rounded-lg shadow-sm border border-[#839958]/15">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded bg-[#0A3323] flex items-center justify-center text-[#F7F4D5] font-black shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A3323]">
                    Precision Edge Crafting & Intra-Oral Sync in Facial Deformation
                  </h3>
                  <span className="text-[10px] text-[#839958] tracking-widest font-bold uppercase block mt-1">Anatomy Laws & Topological Integrity</span>
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium mb-8">
                Facial blend shapes require a deep understanding of facial anatomy and digital friction. To prevent micro-expressions and dialogue sequences from breaking the model, I focused on four technical execution rules:
              </p>

              {/* Sub grid for 4 rules */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#839958]/15">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D3968C] shrink-0" />
                    <h5 className="font-extrabold text-[#0A3323] text-sm uppercase tracking-wide">
                      1. Isolation of Expression Zones
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-[#105666] leading-relaxed">
                    Meticulously separated the influence grids of the eyebrows, eyes, and mouth to guarantee that independent movements would never cause unintended cross-zone clipping or bleeding.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D3968C] shrink-0" />
                    <h5 className="font-extrabold text-[#0A3323] text-sm uppercase tracking-wide">
                      2. Anti-Twisting Edge Flow
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-[#105666] leading-relaxed">
                    Cleaned and aligned the facial edge loops with surgical precision, ensuring that even under extreme animatic distortion, the polygons slid seamlessly rather than pinching or collapsing.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D3968C] shrink-0" />
                    <h5 className="font-extrabold text-[#0A3323] text-sm uppercase tracking-wide">
                      3. Eyelid Convergence Geometry
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-[#105666] leading-relaxed">
                    Engineered the upper and lower eyelid meshes to converge flawlessly. When driven simultaneously, the eyelids close with a natural, fluid arc, completely free of the intersection artifacts or topological stretching.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D3968C] shrink-0" />
                    <h5 className="font-extrabold text-[#0A3323] text-sm uppercase tracking-wide">
                      4. Anatomical Integration of Teeth and Tongue
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-[#105666] leading-relaxed">
                    Calibrated the spatial placement and deformation parameters of the internal assets, ensuring that as the mouth morphs during speech, elements shift with organic, collision-free precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Highlight: Facial Expression Blend Shapes Sheet */}
            <div className="bg-[#F7F4D5] p-8 rounded-lg shadow-sm border border-[#839958]/15">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded bg-[#0A3323] flex items-center justify-center text-[#F7F4D5] font-black shrink-0">
                  <Sparkles className="w-5 h-5 text-[#D3968C]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A3323]">
                    Facial Expression & Blend Shape Sheets
                  </h3>
                </div>
              </div>
              
              <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium mb-8">
                In animation look-development, high-resolution blend shape charts are critical to verify model symmetry, muscular pull direction, and visual balance. Below is the production look-development sheet for the main and auxiliary characters, detailing precise facial morphology mapping.
              </p>

              <div className="flex flex-col items-center justify-center mb-6">
                <span className="text-[10px] font-black tracking-[4px] text-[#839958] uppercase block mb-2">
                  CHARACTER'S FACIAL SHOWCASE
                </span>
                <span className="px-3.5 py-1.5 bg-[#D3968C] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-md shadow-md animate-pulse">
                  CLICK TO ENLARGE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "EMMA AVATAR FACIAL", src: "/hitracer_g/HitRacer_EmmaAvatar_facial.png" },
                  { name: "TONY AVATER FACIAL", src: "/hitracer_g/HitRacer_TonyAvatar_facial.png" },
                  { name: "KAI AVATAR FACIAL", src: "/hitracer_g/HitRacer_KaiAvatar_facial.png" },
                  { name: "ELLIE FACIAL", src: "/hitracer_g/HitRacer_Ellie_facial.png" },
                  { name: "SAM FACIAL", src: "/hitracer_g/HitRacer_Sam_facial.png" },
                  { name: "ZIK FACIAL", src: "/hitracer_g/HitRacer_Zik_Facial.png" },
                  { name: "JACK AVATAR FACIAL", src: "/hitracer_g/HitRacer_JackAvatar_Facial.jpg" },
                  { name: "KAI FACIAL", src: "/hitracer_g/HitRacer_Kai_facial.png" },
                  { name: "RINA FACIAL", src: "/hitracer_g/HitRacer_Rina_facial.png" }
                ].map((sheet, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveLightboxImg({ src: sheet.src, name: sheet.name })}
                    className="bg-white border border-[#839958]/15 rounded-2xl p-4 text-center shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-zoom-in group"
                  >
                    <div className="rounded-xl overflow-hidden bg-neutral-50 p-2 sm:p-4 border border-neutral-100 shadow-inner flex items-center justify-center aspect-[4/3] relative">
                      <img
                        src={sheet.src}
                        alt={sheet.name}
                        className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#0A3323] block py-1">
                        {sheet.name}
                      </h4>
                    </div>
                  </div>
                ))}
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
            <img
              src={activeLightboxImg.src}
              alt={activeLightboxImg.name}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border border-[#839958]/25 shadow-2xl bg-neutral-900/10"
              referrerPolicy="no-referrer"
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
