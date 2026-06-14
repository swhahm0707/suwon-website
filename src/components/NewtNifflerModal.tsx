import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { X, Linkedin, Instagram, Youtube } from "lucide-react";

// Helper function to safely format URLs containing special characters like ampersands
const getSafeSrc = (src: string) => {
  if (!src) return "";
  return src.replace(/&/g, "%26");
};

// Robust image component with a gorgeous 3D/Design placeholder fallback if the image is missing or empty
interface PortfolioImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[4/3]" or "aspect-video"
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

function PortfolioImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]", referrerPolicy = "no-referrer" }: PortfolioImageProps) {
  const [error, setError] = useState(false);
  const safeSrc = getSafeSrc(src);

  // If error occurs, render the beautiful technical blueprint placeholder
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
    <img loading="lazy" src={safeSrc}
      alt={alt}
      className={className}
      referrerPolicy={referrerPolicy}
      onError={() => setError(true)}
    />
  );
}

interface NewtNifflerModalProps {
  onClose: () => void;
}

export default function NewtNifflerModal({ onClose }: NewtNifflerModalProps) {
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
          Cinematic Character Study
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] font-black uppercase tracking-[-2px] sm:tracking-[-4px] leading-none mb-4 font-display">
          Newt & Niffler
        </h1>
        <span className="text-xl md:text-2xl font-black block tracking-[2px] mb-8">
          2023.2-2024.11
        </span>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-[#F7F4D5]/90">
          Recreating hyper-complex, high-fidelity cinematic assets from the Fantastic Beasts universe requires a pipeline that refuses to rely on algorithmic shortcuts. This creative endeavor spans the entire production spectrum: beginning with an extensive, near-anthropological reference analysis and moving deeply into the heavy demands of anatomical sculpting. The workflow then shifts to advanced grooming and intricate look-development, weaving thousands of individual digital hairs to ensure the creature possesses an undeniable physical presence.
        </p>

        {/* Tools Badges */}
        <div className="mt-12 flex justify-center items-center gap-6 flex-wrap">
          <img loading="lazy" src="/icon_g/icon_maya.png"
            alt="Maya"
            className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
          <img loading="lazy" src="/icon_g/icon_vray.png"
            alt="V-Ray"
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
          <img loading="lazy" src="/icon_g/icon_nuke.png"
            alt="Nuke"
            className="w-10 h-10 object-contain opacity-90 hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* PHASE: SHOWREEL (YOUTUBE EMBED) */}
      <div className="text-center pt-24 pb-4 px-[5%] max-w-5xl mx-auto">
        <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A3323] font-display mb-8">
          SHOWREEL
        </h2>
        
        {/* Youtube Video Embed */}
        <div className="aspect-video w-full rounded-2xl shadow-2xl overflow-hidden border border-[#839958]/20 bg-black max-w-4xl mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tpiCwZa6vUk?start=45"
            title="Suwon Hahm Showreel - Newt Scamander"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* 4 Large Showcase Images under the video - Horizontal Scroll Track */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <div className="relative group select-none">
            {/* Horizontal Scroll Bar container */}
            <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#839958]/50 scrollbar-track-transparent pb-6 px-1 scroll-smooth">
              {[
                { src: "/newtNiffler_g/newt_main1.png", alt: "Newt Scamander Render 01" },
                { src: "/newtNiffler_g/newt_main2.png", alt: "Newt Scamander Render 02" },
                { src: "/newtNiffler_g/newt_main3.png", alt: "Newt Scamander Render 03" },
                { src: "/newtNiffler_g/newt_main4.png", alt: "Newt Scamander Render 04" }
              ].map((img, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-[85%] snap-center rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <PortfolioImage
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover rounded-xl shadow-inner animate-fade-in"
                    aspectRatio="aspect-video"
                  />
                </div>
              ))}
            </div>
            {/* Guide Caption */}
            <span className="block mt-3 text-[10px] font-black uppercase tracking-widest text-[#0A3323]/50">
              ◀ SWIPE OR SCROLL HORIZONTALLY TO VIEW ALL RENDERS ▶
            </span>
          </div>
        </div>
      </div>

      {/* PHASE: NEWT SCAMANDER */}
      <div className="text-center pt-24 pb-4 px-[5%] max-w-5xl mx-auto">
        <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A3323] font-display">
          Newt Scamander
        </h2>
      </div>

      <section className="px-[5%] pb-24 max-w-7xl mx-auto space-y-24 md:space-y-36">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              01. Reference Gathering
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              To account for in-camera distortion in the film, the character's primary proportions were mapped using over 80 reference images of Eddie Redmayne (as Newt Scamander), including red carpet photos, editorials, and interview stills. I gathered references from a wide range of angles—such as easily missed back views, low angles, and high angles—ensuring the character maintains structural realism and accuracy from any perspective.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/newt_reference.png"
              alt="Reference Gathering"
              className="w-full h-full object-contain rounded animate-fade-in"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:flex-row-reverse">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              02. Base Mesh Sculpting
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              Since an actor's physique and appearance shift slightly with age and conditioning, the base sculpt was strictly modeled after Eddie Redmayne's build specifically in Fantastic Beasts. I gathered high-resolution references and behind-the-scenes production stills online, and purchased the film to study key scenes. Furthermore, I identified and focused on the character's signature facial expressions during the sculpting process to achieve a highly realistic result.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 lg:order-1 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/newt_baseMesh.png"
              alt="Base Mesh Sculpting"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              03. Retopology & UV Mapping
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              I exported half of the model from ZBrush as an .obj file, performed retopology in Maya, and then mirrored it. Afterward, I unwrapped the UVs while ensuring that seam lines remain completely hidden.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/newt_retopology.png"
              alt="Retopology & UV Mapping"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:flex-row-reverse">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              04. VFace R3DS Wrap & Projection
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              For the skin texturing, I utilized VFace data purchased from Texturing.xyz. I first used Nuke to convert the .exr files into .tiff format, and then proceeded with the wrapping process using R3DS Wrap. Following this, I projected the scan data onto the Newt character in ZBrush to successfully transfer the high-fidelity textures.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 lg:order-1 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/newt_vface.png"
              alt="VFace Wrap"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              05. Detail Sculpting & Anatomy Generation
            </h3>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              <p>
                <strong>Skin Details:</strong> I refined the pores and skin details from the scan data using ZBrush brushes to match Newt’s actual features. Since Newt's face is highly asymmetrical—to the extent that his left and right ears are shaped differently—I paid close attention to micro-details, such as the outer corners of the eyes, the subtle volumes of the nose tip, and the philtrum/cupid's bow area.
              </p>
              <p>
                <strong>Secondary Elements:</strong> The eyeballs, tear ducts (lacrimal caruncles), teeth, and tongue were all modeled from scratch. The texture maps were modified in Photoshop based on academy reference materials before application.
              </p>
              <p>
                <strong>Body & Exposed Skin:</strong> The body parts fully covered by clothing were created using ZRemesher solely to define the clothing fit, and were removed after the outfit was finalized. For the exposed hands, I used Photoshop and Substance Painter to ensure the skin texture and tone seamlessly matched his face.
              </p>
              <p>
                <strong>Rigging Preparation:</strong> After completing the body, I built a full-body cage (excluding the coat), paying strict attention to clean edge loops and proper topology flow for deformation. I then completed the rigging using the Advanced Skeleton toolset.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/newt_detail.png"
              alt="Detail Sculpting"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>

        {/* Row 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:flex-row-reverse">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              06. Costume Production
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              I blocked out the base shapes for the clothing in Marvelous Designer and added fine wrinkle details in ZBrush. By leveraging jQuadCloth, I significantly reduced retopology time, allowing me to focus heavily on capturing the fabric patterns and material attributes in Substance Painter. Finally, to give the outfit a realistic Autumn/Winter weight, I utilized VRayFur to render unique thread/fuzz details for each garment.
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#839958]/40 scrollbar-track-transparent snap-x snap-mandatory pt-2 min-w-0 lg:order-1">
            {[
              { src: "/newtNiffler_g/newt_costume.png", alt: "Costume Production 01" },
              { src: "/images/projects/work/newt_niffler/newt_costume2.png", alt: "Costume Production 02" },
              { src: "/images/projects/work/newt_niffler/newt_costume3.png", alt: "Costume Production 03" }
            ].map((img, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] sm:w-[340px] xl:w-[420px] aspect-[4/3] snap-start bg-transparent rounded-lg shadow-md border border-[#0A3323]/10 flex items-center justify-center overflow-hidden">
                <PortfolioImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain rounded animate-fade-in"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              07. Hair & Grooming
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              I used XGen Interactive Grooming for the eyebrows, eyelashes, and peach fuzz (vellus hair), while using a hybrid workflow of XGen Core (Primitives) and Interactive Grooming for the main hairstyle. To manage the hair, I divided the scalp into three distinct sections based on hair length and flow.
              <br /><br />
              To achieve natural, organic curls, I developed a custom workflow: I utilized XGen’s 'Make Guides Dynamic' to convert the guides into curves, applied Maya’s curl features to create the waves, and then re-planted them using 'Use Selected Curves as Guides'. Finally, I used a VRayHairSampler combined with a Ramp node to realistically express damaged, split-end textures at the tips of the hair.
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#839958]/40 scrollbar-track-transparent snap-x snap-mandatory pt-2 min-w-0">
            {[
              { src: "/newtNiffler_g/newt_hair01.png", alt: "Hair & Grooming 01" },
              { src: "/newtNiffler_g/newt_hair02.png", alt: "Hair & Grooming 02" },
              { src: "/newtNiffler_g/newt_hair03.png", alt: "Hair & Grooming 03" },
              { src: "/newtNiffler_g/newt_hair04.png", alt: "Hair & Grooming 04" }
            ].map((img, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] sm:w-[340px] aspect-[4/3] snap-start bg-transparent rounded-lg shadow-md border border-[#0A3323]/10 flex items-center justify-center overflow-hidden">
                <PortfolioImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain rounded animate-fade-in"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 8 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:flex-row-reverse">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              08. Prop Modeling
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              The suitcase, wand, and shoes were modeled accurately to match Newt’s proportions. To realistically depict wear and tear on high-contact areas and aged materials, I carefully referenced real-world objects and optimized the material shaders accordingly.
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#839958]/40 scrollbar-track-transparent snap-x snap-mandatory pt-2 min-w-0 lg:order-1">
            {[
              { src: "/newtNiffler_g/newt_suitcase01.png", alt: "Prop Suitcase 01" },
              { src: "/newtNiffler_g/newt_suitcase02.png", alt: "Prop Suitcase 02" },
              { src: "/newtNiffler_g/newt_shoe.png", alt: "Prop Shoe" },
              { src: "/newtNiffler_g/newt_wand.png", alt: "Prop Wand" }
            ].map((img, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] sm:w-[340px] aspect-[4/3] snap-start bg-transparent rounded-lg shadow-md border border-[#0A3323]/10 flex items-center justify-center overflow-hidden">
                <PortfolioImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain rounded animate-fade-in"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE: NIFFLER */}
      <div className="text-center pt-24 pb-4 px-[5%] max-w-5xl mx-auto">
        <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A3323] font-display">
          Niffler
        </h2>
      </div>

      <section className="px-[5%] pb-24 max-w-7xl mx-auto space-y-24 md:space-y-36">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              01. Creature Sculpting
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              To sculpt the Niffler, I combined three key sets of references. First, I analyzed the VFX behind-the-scenes breakdowns of the film, which provided invaluable data on the character's skeleton, musculature, and furless form. Second, I referenced the final appearance of the Niffler in the movie. Third, taking into account the analysis by zooarchaeologist Dr. Emily Johnson—who defines the Niffler as a fictional hybrid of a mole, echidna, and platypus—I carefully integrated the anatomical traits of these three real-world animals into the sculpt.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/niffler_sculpt.png"
              alt="Creature Sculpting"
              className="w-full h-full object-contain rounded animate-fade-in"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:flex-row-reverse">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              02. Retopology & UV Mapping
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              I exported half of the model from ZBrush as an .obj file, performed retopology in Maya, and then mirrored it. Afterward, I unwrapped the UVs while ensuring that seam lines remain completely hidden.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 lg:order-1 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/niffler_uv.png"
              alt="Retopology & UV Mapping"
              className="w-full h-full object-contain rounded animate-fade-in"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              03. Skin Expression & Texturing
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              The primary volumes and large skin folds were sculpted by hand using ZBrush brushes, while secondary micro-wrinkles and fine skin textures were applied utilizing custom alphas.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/niffer_skin.png"
              alt="Skin Expression"
              className="w-full h-full object-contain rounded animate-fade-in"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:flex-row-reverse">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              04. Hair & Grooming
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              The Niffler’s groom is divided into three distinct sections: the feather-like coat on the head, the clumped, longer fur on the torso, and the rounded, downy tufts on the realms (similar to chicken breast feathers). To meticulously capture these varied characteristics, I authored custom mask maps for each section in Substance Painter, and then generated the fur using XGen Interactive Grooming. In particular, the distinct color gradient on the head fur—which fades to white at the tips—was achieved by blending a VRayHairSampler, Ramp nodes, and a VRayBlendMtl for a seamless, natural transition.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 lg:order-1 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/niffler_hair.png"
              alt="Hair & Grooming"
              className="w-full h-full object-contain rounded animate-fade-in"
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
              05. Rigging & Groom Transfer
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
              I completed the rigging process utilizing the quadruped 'Cat' template within the Advanced Skeleton toolset. Following the rig setup, I successfully used XGen's grooming transfer tools to bind and conform the description guides to the deformed, rigged body.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 flex items-center justify-center">
            <PortfolioImage
              src="/newtNiffler_g/niffler_rig.jpg"
              alt="Rigging & Groom Transfer"
              className="w-full h-full object-contain rounded animate-fade-in"
            />
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
                  <td className="py-4 px-6 font-bold">Sculpting</td>
                  <td className="py-4 px-6 opacity-90 font-medium">ZBrush</td>
                </tr>
                <tr className="hover:bg-[#F7F4D5]/5 transition-colors">
                  <td className="py-4 px-6 font-bold">Retopology</td>
                  <td className="py-4 px-6 opacity-90 font-medium">Maya, Zbrush, JQuadCloth</td>
                </tr>
                <tr className="hover:bg-[#F7F4D5]/5 transition-colors">
                  <td className="py-4 px-6 font-bold">Texturing</td>
                  <td className="py-4 px-6 opacity-90 font-medium">VFace, Substance Painter, Photoshop</td>
                </tr>
                <tr className="hover:bg-[#F7F4D5]/5 transition-colors">
                  <td className="py-4 px-6 font-bold">Grooming</td>
                  <td className="py-4 px-6 opacity-90 font-medium">XGen, VRay-Fur(Maya)</td>
                </tr>
                <tr className="hover:bg-[#F7F4D5]/5 transition-colors">
                  <td className="py-4 px-6 font-bold">Rigging</td>
                  <td className="py-4 px-6 opacity-90 font-medium">Advanced Skeleton Rigging</td>
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
