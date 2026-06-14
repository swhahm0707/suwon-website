import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { X, Linkedin, Instagram, Youtube, Award, Cpu, ShieldCheck, Sparkles, Star } from "lucide-react";

// Robust image component with a gorgeous 3D/Design placeholder fallback if the image is missing or empty
interface PortfolioImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[4/3]" or "aspect-video"
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  isJpg?: boolean;
}

function PortfolioImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]", referrerPolicy = "no-referrer", isJpg = false }: PortfolioImageProps) {
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // Fallback handler
  const handleError = () => {
    if (isJpg && currentSrc.endsWith(".JPG")) {
      setCurrentSrc(src.replace(".JPG", ".png"));
    } else if (isJpg && currentSrc.endsWith(".png")) {
      setCurrentSrc(src.replace(".png", ".jpg"));
    } else if (currentSrc.endsWith(".jpg")) {
      setCurrentSrc(src.replace(".jpg", ".png"));
    } else {
      setError(true);
    }
  };

  if (error || !src) {
    const cleanPath = src.startsWith("/") ? src.slice(1) : src;
    
    return (
      <div className={`w-full h-full min-h-[220px] bg-[#0A3323]/5 border-2 border-dashed border-[#839958]/30 rounded-xl p-6 flex flex-col justify-between items-center text-center ${aspectRatio} relative overflow-hidden group select-none transition-all duration-300`}>
        {/* Decorative blueprint-grid backdrop */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Top bar */}
        <div className="w-full flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-[#839958] z-10 border-b border-[#839958]/10 pb-2">
          <span>[3D Asset Wireframe Container]</span>
          <span>{aspectRatio.replace("aspect-", "")}</span>
        </div>
        
        {/* Middle decorative icon and technical info */}
        <div className="flex flex-col items-center justify-center my-auto py-4 z-10 gap-2">
          <div className="w-12 h-12 rounded-full bg-[#839958]/10 flex items-center justify-center text-[#839958] mb-2 border border-[#839958]/20 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
          <span className="text-xs font-black uppercase text-[#0A3323] tracking-wider">
            {alt}
          </span>
          <span className="text-[10px] font-mono text-[#105666] bg-white/60 px-2 py-0.5 rounded-md border border-[#839958]/15 mt-1 max-w-[280px] break-all">
            {cleanPath}
          </span>
        </div>

        {/* Bottom instructions */}
        <div className="text-[10px] font-semibold text-[#105666]/95 px-4 py-1.5 z-10 bg-white/50 rounded-lg border border-[#839958]/15 shadow-sm max-w-sm">
          💡 AI Studio 사이드바 파일 탐색기에서 해당 경로에 실제 이미지 파일을 업로드해 주세요!
        </div>
      </div>
    );
  }

  return (
    <img loading="lazy" src={currentSrc}
      alt={alt}
      className={className}
      referrerPolicy={referrerPolicy}
      onError={handleError}
    />
  );
}

interface ZanmangLoopyModalProps {
  onClose: () => void;
}

export default function ZanmangLoopyModal({ onClose }: ZanmangLoopyModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ src: string; name: string } | null>(null);

  const handleScrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mvRoles = [
    { name: '"Apricot-Apron" Loopy', desc: "Modeling and execution of the hair asset, clothing mesh, and head accessories." },
    { name: '"Plump" Loopy', desc: "Meticulous organic sculpting for the specialized over-weighted face and arm meshes." },
    { name: "Dynamic Cheese Prop", desc: "Modeling a specialized, morph-ready cheese asset designed for extreme stretching behaviors." },
    { name: "Food Splatter Assets", desc: "Modeling and spatial placement of contextual food debris around the mouth area." }
  ];

  const nbRoles = [
    { name: '"Tanned" Loopy', desc: "Custom asset creation for specialized sportswear clothing and advanced texturing for the sun-kissed skin variant." },
    { name: '"School Uniform" Loopy', desc: "Complete modeling of the uniform garments, custom front bangs hair asset, and a high-fidelity hair roller accessory." }
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
            Commercial Character IP • Web & Campaign Release
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7.5rem] xl:text-[8rem] font-black uppercase tracking-[-2px] sm:tracking-[-4px] leading-none mb-4 font-display">
            Zanmang Loopy
          </h1>
          <span className="text-xl md:text-2xl font-black block tracking-[2px] mb-8 text-[#F7F4D5]">
            2025
          </span>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-[#F7F4D5]/90">
            High-profile 3D character asset production and brand collaboration campaigns for Zanmang Loopy—one of East Asia's most prominent character IPs. This showcase spans Loopy's official Music Video production and the high-fashion collaboration campaign with global sports titan New Balance.
          </p>

          {/* Tools Badges */}
          <div className="mt-12 flex justify-center items-center gap-6">
            <img loading="lazy" src="/icon_g/icon_maya.png"
              alt="Maya"
              className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <img loading="lazy" src="/icon_g/icon_zbrush.png"
              alt="ZBrush"
              className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <img loading="lazy" src="/icon_g/icon_substance_painter.png"
              alt="Substance Painter"
              className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <img loading="lazy" src="/icon_g/icon_photoshop.png"
              alt="Photoshop"
              className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* BLOCK 1: OFFICIAL MUSIC VIDEO */}
      <section className="px-[5%] py-24 max-w-7xl mx-auto border-b border-[#839958]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#839958] uppercase block">
              Chapter 01
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0A3323] leading-tight font-display">
              Official MV:<br />
              "I Like My Curves"
            </h2>
            <div className="w-16 h-1 bg-[#D3968C] mb-4" />
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              This segment involves the 3D character asset production for the official Zanmang Loopy music video released across YouTube and various media platforms. The core creative challenge lay in translating highly stylized, comedic, and dynamic conceptual states into production-ready 3D character meshes and props while strictly preserving the globally recognized brand identity of the character.
            </p>
          </div>

          {/* Right Roles & Contributions Column */}
          <div className="lg:col-span-7 space-y-8">
            <h4 className="text-xs uppercase font-black tracking-widest text-[#839958]">
              Role & Contributions (Music Video)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mvRoles.map((item, index) => (
                <div key={index} className="p-6 rounded bg-[#839958]/5 border border-[#839958]/15 hover:bg-[#839958]/10 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#D3968C] shrink-0" />
                    <h5 className="font-extrabold text-[#0A3323] text-sm uppercase tracking-wide">
                      {item.name}
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-[#105666]/95 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Highlights Sub-Section */}
            <div className="pt-6 space-y-6">
              <h4 className="text-xs uppercase font-black tracking-widest text-[#839958]">
                Technical Highlights
              </h4>
              
              <div className="space-y-4">
                <div className="bg-[#0A3323] text-[#F7F4D5] p-6 rounded shadow-sm">
                  <h6 className="font-extrabold text-sm uppercase tracking-wider text-[#D3968C] mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Volumetric Hair Density via Texturing
                  </h6>
                  <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed font-medium">
                    To ensure the hair appeared dense and completely seamless without empty pockets, I engineered a hybrid approach, partially re-texturing the underlying scalp mesh with the exact hair hue to eliminate visual gaps and empty micro-pockets.
                  </p>
                </div>

                <div className="bg-[#0A3323] text-[#F7F4D5] p-6 rounded shadow-sm">
                  <h6 className="font-extrabold text-sm uppercase tracking-wider text-[#D3968C] mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Form-Fitting Garment Architecture
                  </h6>
                  <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed font-medium">
                    Designed custom clothing meshes meticulously tailored to the pre-existing, unconventional anatomy of the base Loopy torso, ensuring flawless deformation during character animation loops.
                  </p>
                </div>

                <div className="bg-[#0A3323] text-[#F7F4D5] p-6 rounded shadow-sm">
                  <h6 className="font-extrabold text-sm uppercase tracking-wider text-[#D3968C] mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Sculpting Fluid Mechanics in Static Geometry
                  </h6>
                  <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed font-medium">
                    Modeled the cheese prop to pre-visualize the tactile, elastic quality of melted cheese, optimizing the topology to support smooth, extreme elongation.
                  </p>
                </div>

                <div className="bg-[#0A3323] text-[#F7F4D5] p-6 rounded shadow-sm">
                  <h6 className="font-extrabold text-sm uppercase tracking-wider text-[#D3968C] mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Anatomical Proportion Preserving Stretch
                  </h6>
                  <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed font-semibold font-mono">
                    When sculpting the "Plump" Loopy variant, the technical focus was on executing a believable, heavy-set weight distribution across the face and arms while stringently preserving the core geometric proportions that define the recognizable cute aesthetic of the character.
                  </p>
                </div>

                {/* PLUMP LOOPY SHOWCASE Section Block */}
                <div className="mt-6 bg-white/40 border border-[#839958]/15 rounded-2xl p-4 sm:p-5 shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <span className="block text-xs font-black uppercase text-[#0A3323] tracking-widest pl-1">
                      PLUMP LOOPY SHOWCASE
                    </span>
                    <span className="px-2.5 py-1 bg-[#D3968C] text-white text-[9px] font-black uppercase tracking-widest rounded shadow-sm animate-pulse select-none">
                      CLICK TO ENLARGE
                    </span>
                  </div>
                  <div 
                    onClick={() => setActiveLightboxImg({ src: "/zLoopy_g/loopy_plump.png", name: "PLUMP LOOPY SHOWCASE" })}
                    className="rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 flex justify-center items-center cursor-zoom-in group"
                  >
                    <PortfolioImage
                      src="/zLoopy_g/loopy_plump.png"
                      alt="PLUMP LOOPY SHOWCASE"
                      className="w-full max-h-[500px] object-contain rounded animate-fade-in transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BLOCK 2: NEW BALANCE COLLABORATION */}
      <section className="px-[5%] py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#839958] uppercase block">
              Chapter 02
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0A3323] leading-tight font-display">
              Collaboration Campaign:<br />
              Loopy × New Balance
            </h2>
            <div className="w-16 h-1 bg-[#D3968C] mb-4" />
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              A high-profile 3D modeling project for the collaborative advertisement campaign between the global sports brand New Balance and the hit character IP Zanmang Loopy. The assets required a seamless blend of contemporary streetwear aesthetics with the iconic, playful silhouette of the character.
            </p>
          </div>

          {/* Right Roles & Contributions Column */}
          <div className="lg:col-span-7 space-y-8">
            <h4 className="text-xs uppercase font-black tracking-widest text-[#839958]">
              Role & Contributions (Campaign)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nbRoles.map((item, index) => (
                <div key={index} className="p-6 rounded bg-[#0A3323] text-[#F7F4D5] border border-transparent shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-[#D3968C] shrink-0 fill-[#D3968C]" />
                    <h5 className="font-extrabold text-[#D3968C] text-sm uppercase tracking-wide">
                      {item.name}
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F7F4D5]/85 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Highlight */}
            <div className="pt-6 space-y-6">
              <h4 className="text-xs uppercase font-black tracking-widest text-[#839958]">
                Technical Highlight
              </h4>
              <div className="bg-[#839958]/5 border border-[#839958]/20 p-8 rounded shadow-xs">
                <h5 className="font-extrabold text-base uppercase text-[#0A3323] mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#839958]" />
                  Preserving Fur Groom Fidelity in Chromatic Shift
                </h5>
                <p className="text-xs sm:text-sm text-[#105666] leading-relaxed font-semibold">
                  The primary technical challenge for the "Tanned" Loopy variant was executing a natural, sun-tanned skin texture alteration while fully preserving the sophisticated micro-fur shaders and belly-fur distributions inherent to the original base model. The result achieved a deep, flawless chromatic shift that felt integrated into the physical fur layer rather than merely slapped on top, maintaining impeccable look-development fidelity.
                </p>
              </div>
            </div>

            {/* Campaign Variation Showcase Section */}
            <div className="mt-8 space-y-6 border-t border-[#839958]/10 pt-8">
              <div className="flex justify-between items-center bg-[#839958]/10 p-4 rounded-xl border border-[#839958]/15">
                <h5 className="font-black text-xs sm:text-sm uppercase text-[#0A3323] tracking-widest block">
                  SCHOOL UNIFORM & TANNED LOOPY SHOWCASE
                </h5>
                <span className="px-2.5 py-1 bg-[#D3968C] text-white text-[9px] font-black uppercase tracking-widest rounded shadow-sm animate-pulse select-none">
                  CLICK TO ENLARGE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    src: "/zLoopy_g/loopy_school_uniform.png",
                    title: "SCHOOL UNIFORM LOOPY"
                  },
                  {
                    src: "/zLoopy_g/loopy_tanned.png",
                    title: "TANNED LOOPY"
                  },
                  {
                    src: "/zLoopy_g/loopy_tanned_sunglasses.png",
                    title: "TANNED LOOPY X SUNGLASSES"
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveLightboxImg({ src: item.src, name: item.title })}
                    className="bg-transparent border border-[#0A3323]/10 rounded-lg p-0 shadow-md flex flex-col justify-between hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-zoom-in group"
                  >
                    <div className="aspect-[4/5] w-full flex items-center justify-center overflow-hidden bg-transparent rounded-t-lg relative">
                      <PortfolioImage
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-contain rounded animate-fade-in transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 text-center px-2">
                      <h5 className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-[#0A3323] leading-tight min-h-[36px] flex items-center justify-center py-1">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Dynamic Summary Quote Panel */}
      <section className="bg-[#839958]/10 py-24 border-y border-[#839958]/15">
        <div className="max-w-4xl mx-auto px-[5%] text-center">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#839958] uppercase block mb-3">ARTISTIC THEOREM</span>
          <p className="font-serif italic text-2xl sm:text-3.5xl text-[#0A3323] leading-normal font-medium px-4 mb-4">
            "Preserving the brand's graphic soul while sculpting for physical, 3D logic is where character translation turns into art."
          </p>
          <div className="w-12 h-0.5 bg-[#D3968C] mx-auto" />
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
