import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { X, Linkedin, Instagram, Youtube } from "lucide-react";

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
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      referrerPolicy={referrerPolicy}
      onError={handleError}
    />
  );
}

interface LaFranceTruckModalProps {
  onClose: () => void;
}

export default function LaFranceTruckModal({ onClose }: LaFranceTruckModalProps) {
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
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D3968C] hover:bg-[#D3968C] text-[#F7F4D5] hover:text-[#0A3323] text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer-parent"
          >
            <span>CLOSE</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Project Hero Section */}
      <header className="pt-36 pb-24 px-[5%] text-center bg-[#839958] text-[#F7F4D5]">
        <span className="text-[10px] sm:text-[11px] font-black tracking-[4px] text-[#0A3323] uppercase block mb-4">
          3D Hard-Surface Modeling
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] font-black uppercase tracking-[-2px] sm:tracking-[-3px] leading-none mb-4 font-display">
          1927 American LaFrance Fire Truck
        </h1>
        <span className="text-xl md:text-2xl font-black block tracking-[2px] mb-8">
          2023
        </span>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-[#F7F4D5]/90">
          The central focus here shifts from organic flesh to the unforgiving physics of hard-surface look-development, specifically aimed at recreating high-fidelity cinematic assets from the Fantastic Beasts universe. The pipeline covers the entire production spectrum with rigorous detail: starting with an extensive, meticulous reference analysis to decode material wear and weight, moving through advanced hard-surface look-development, and concluding with precise environment integration. The final asset ceases to look like a separate digital layer; it becomes a living, breathing component of the space it inhabits.
        </p>

        {/* Tools Badges */}
        <div className="mt-12 flex justify-center items-center gap-6 flex-wrap">
          <img
            src="/icon_g/icon_maya.png"
            alt="Maya"
            className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
          <img
            src="/icon_g/icon_vray.png"
            alt="V-Ray"
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
            src="/icon_g/icon_substance_painter.png"
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
          <img
            src="/icon_g/icon_unrealengine.png"
            alt="Unreal Engine"
            className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
          <img
            src="/icon_g/icon_nuke.png"
            alt="Nuke"
            className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* PHASE 1: SHOWREEL (YOUTUBE EMBED) */}
      <div className="text-center pt-24 pb-4 px-[5%] max-w-5xl mx-auto">
        <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A3323] font-display mb-8">
          SHOWREEL
        </h2>
        
        {/* Youtube Video Embed */}
        <div className="aspect-video w-full rounded-2xl shadow-2xl overflow-hidden border border-[#839958]/20 bg-black max-w-4xl mx-auto mb-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tpiCwZa6vUk?start=45"
            title="Suwon Hahm Showreel - Fire Truck"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Main visual render of Fire Truck below the Youtube Embed */}
        <div className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/firetruck_g/firetruck_main.png" 
            alt="Fire Truck Main Render"
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* PHASE 2: FIRE TRUCK & STREETLAMP */}
      <div className="text-center pt-10 pb-4 px-[5%] max-w-5xl mx-auto">
        <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A3323] font-display">
          Fire Truck & Streetlamp
        </h2>
      </div>

      <section className="px-[5%] pb-24 max-w-7xl mx-auto space-y-24 md:space-y-36">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              01. Hard Surface Poly-Modeling
            </h3>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              <p>
                I modeled the fire engine and streetlamp featured in the film’s background. Using AI-driven research, I identified the exact make and model of both assets, which allowed me to gather highly detailed reference materials.
              </p>
              <p>
                For the streetlamp in particular, I secured a blueprint with actual dimensions to ensure precise real-world scaling and accuracy during production.
              </p>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#839958]/40 scrollbar-track-transparent snap-x snap-mandatory pt-2">
            {[
              "/firetruck_g/firetruck_modeling1.jpg",
              "/firetruck_g/firetruck_modeling2.jpg",
              "/firetruck_g/firetruck_modeling3.jpg",
              "/firetruck_g/firetruck_modeling4.jpg",
              "/firetruck_g/firetruck_modeling5.jpg",
              "/firetruck_g/firetruck_modeling6.jpg",
            ].map((src, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] sm:w-[340px] aspect-[4/3] snap-start bg-transparent rounded-lg shadow-md border border-[#0A3323]/10 flex items-center justify-center overflow-hidden">
                <PortfolioImage
                  src={src}
                  alt={`Hard Surface Poly-Modeling ${index + 1}`}
                  className="w-full h-full object-contain rounded animate-fade-in"
                  isJpg={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:flex-row-reverse">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block font-display">
              02. UV Mapping
            </h3>
            <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-[#105666] font-medium list-disc pl-5">
              <li>
                <strong>Fire Engine:</strong> To optimize efficiency, I completed the full modeling pass first, removed repeating/modular instances, and then unwrapped the UVs.
              </li>
              <li>
                <strong>Streetlamp:</strong> The UV layouts were carefully unwrapped and straightened, taking into full account the linear, directional flow of the streetlamp’s geometry.
              </li>
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 lg:order-1 flex items-center justify-center">
            <PortfolioImage
              src="/firetruck_g/firetruck_uv.png"
              alt="UV Mapping Flow"
              className="w-full h-full object-contain rounded animate-fade-in"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              03. Look Development
            </h3>
            <ul className="space-y-4 text-sm sm:text-base leading-relaxed text-[#105666] font-medium list-disc pl-5">
              <li>
                <strong>Fire Engine:</strong> The vehicle comprises a diverse mix of surfaces—including clear coat, rubber, wood, metal, fabric, leather, and glass. My primary focus was achieving surface realism for each material. I utilized Substance Painter for the initial pass, which included base blocking, texturing, weathering (dirt/grime), and decal placement. Afterward, I crafted custom shaders in Maya to elevate the surface details. In particular, I researched and applied the scientifically accurate IOR (Index of Refraction) values for each specific material to deliver a highly realistic response to light.
              </li>
              <li>
                <strong>Streetlamp:</strong> I used Substance Painter for the base color, texture maps, and weathering effects. I then moved to Maya to set up dedicated shaders for both the structural housing and the glass/light components, applying accurate IOR values to ensure faithful material representation.
              </li>
            </ul>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#839958]/40 scrollbar-track-transparent snap-x snap-mandatory pt-2">
            {[
              "/firetruck_g/firetruck_lookd1.png",
              "/firetruck_g/firetruck_lookd2.png"
            ].map((src, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] sm:w-[340px] aspect-[4/3] snap-start bg-transparent rounded-lg shadow-md border border-[#0A3323]/10 flex items-center justify-center overflow-hidden">
                <PortfolioImage
                  src={src}
                  alt={`Look Development Shading ${index + 1}`}
                  className="w-full h-full object-contain rounded animate-fade-in"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:flex-row-reverse">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              04. Lighting
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              I assigned distinct, specialized IES Profiles (IES Lights) to the fire engine’s headlights and the streetlamp to capture their unique real-world light distributions.
              <br /><br />
              Additionally, I integrated an environmental fog pass (Fog Environment) isolated exclusively to the light cones, realistically catching the volumetric scatter of the light.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 lg:order-1 flex items-center justify-center">
            <PortfolioImage
              src="/firetruck_g/firetruck_lighting.png"
              alt="IES Lighting & Fog"
              className="w-full h-full object-contain rounded animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* PHASE 3: ENVIRONMENT */}
      <div className="text-center pt-24 pb-4 px-[5%] max-w-5xl mx-auto">
        <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A3323] font-display">
          Environment
        </h2>
      </div>

      <section className="px-[5%] pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              Environment Creation
            </h3>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              <p>
                To explore an alternative workflow, I initially generated a custom HDRI of 1900s New York using Skybox AI based on text prompts. However, because a flat HDRI had limitations in delivering true depth and volumetric space, I pivoted to a different asset-driven approach:
              </p>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <strong>Buildings:</strong> I selected and exported specific building assets from Unreal Engine’s City Sample (the US-based environment pack) into USD format, which I then seamlessly imported into Maya for full scene integration.
                </li>
                <li>
                  <strong>Ground/Terrain:</strong> Instead of relying on flat planes, I applied high-fidelity Quixel Megascans data onto primitive geometry to effectively capture realistic micro-displacement, depth, and organic color grading.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#839958]/40 scrollbar-track-transparent snap-x snap-mandatory pt-2">
            {[
              { src: "/firetruck_g/firetruck_environment1.JPG", alt: "Environment Creation 01", isJpg: true },
              { src: "/firetruck_g/firetruck_environment2.png", alt: "Environment Creation 02", isJpg: false }
            ].map((img, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] sm:w-[340px] aspect-[4/3] snap-start bg-transparent rounded-lg shadow-md border border-[#0A3323]/10 flex items-center justify-center overflow-hidden">
                <PortfolioImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain rounded animate-fade-in"
                  isJpg={img.isJpg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Summary section */}
      <section className="py-24 px-[5%] bg-[#0A3323] text-[#F7F4D5]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#839958] mb-8 font-display">
            Technical Summary
          </h3>
          <div className="overflow-x-auto rounded-lg border border-[#F7F4D5]/10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#F7F4D5]/20 bg-[#F7F4D5]/5">
                  <th className="py-4 px-6 text-left text-xs uppercase tracking-widest font-black text-[#839958]">Pipeline Stage</th>
                  <th className="py-4 px-6 text-left text-xs uppercase tracking-widest font-black text-[#839958]">Software</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F7F4D5]/10 text-sm">
                <tr className="hover:bg-[#F7F4D5]/5 transition-colors">
                  <td className="py-4 px-6 font-bold">Modeling</td>
                  <td className="py-4 px-6 opacity-90 font-medium">Maya, Zbrush</td>
                </tr>
                <tr className="hover:bg-[#F7F4D5]/5 transition-colors">
                  <td className="py-4 px-6 font-bold">Texturing</td>
                  <td className="py-4 px-6 opacity-90 font-medium">Substance Painter</td>
                </tr>
                <tr className="hover:bg-[#F7F4D5]/5 transition-colors">
                  <td className="py-4 px-6 font-bold">Lighting</td>
                  <td className="py-4 px-6 opacity-90 font-medium font-mono text-xs">Vray Light, IES Light, Volumetric Fog Scatter Pass</td>
                </tr>
                <tr className="hover:bg-[#F7F4D5]/5 transition-colors">
                  <td className="py-4 px-6 font-bold">Environment</td>
                  <td className="py-4 px-6 opacity-90 font-medium">Unreal Engine USD Asset, Quixel Megascans</td>
                </tr>
                <tr className="hover:bg-[#F7F4D5]/5 transition-colors">
                  <td className="py-4 px-6 font-bold">Rendering</td>
                  <td className="py-4 px-6 opacity-90 font-medium">V-Ray</td>
                </tr>
              </tbody>
            </table>
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
    </motion.div>
  );
}
