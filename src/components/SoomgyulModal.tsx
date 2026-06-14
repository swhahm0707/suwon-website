import { useRef } from "react";
import { motion } from "motion/react";
import { X, Linkedin, Instagram, Youtube } from "lucide-react";
// @ts-ignore
import logo1 from "../assets/images/regenerated_image_1780147695133.png";
// @ts-ignore
import logo2 from "../assets/images/regenerated_image_1780147696015.png";
// @ts-ignore
import logo3 from "../assets/images/regenerated_image_1780147697873.png";

interface SoomgyulModalProps {
  onClose: () => void;
}

export default function SoomgyulModal({ onClose }: SoomgyulModalProps) {
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
      <header className="pt-32 pb-24 px-[5%] text-center bg-[#839958] text-[#F7F4D5]">
        <span className="text-[10px] sm:text-[11px] font-black tracking-[4px] text-[#0A3323] uppercase block mb-4">
          AI + 3D HYBRID MODELING
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] font-black uppercase tracking-[-2px] sm:tracking-[-4px] leading-none mb-4 font-display">
          SoomGyul
        </h1>
        <span className="text-xl md:text-2xl font-black block tracking-[2px] mb-8">
          2026
        </span>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium text-[#F7F4D5]/90">
          What follows is a deliberate departure from pure manual labor—a complete, functional workflow that integrates the chaotic fluidity of AI-driven generation into the rigid architectures of a traditional 3D modeling pipeline. By combining node-based AI systems, which operate in vast fields of probability, with the precise and uncompromising intent of manual execution, I established an efficient, high-fidelity character creation process. The result is a new design paradigm that feels simultaneously synthesized and hand-sculpted.
        </p>

        {/* Tools Badges */}
        <div className="mt-12 flex justify-center items-center gap-6">
          <img loading="lazy" src={logo1}
            alt="Tool Badge 1"
            className="w-16 h-16 object-contain opacity-95 hover:scale-110 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          <img loading="lazy" src={logo2}
            alt="Tool Badge 2"
            className="w-16 h-16 object-contain opacity-95 hover:scale-110 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          <img loading="lazy" src={logo3}
            alt="Tool Badge 3"
            className="w-16 h-16 object-contain opacity-95 hover:scale-110 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* Transitional Spacer with #F7F4D5 to soften green-to-image transition */}
      <div className="h-8 md:h-12 bg-[#F7F4D5] w-full" />

      {/* Main Feature Visual Banner */}
      <section className="w-full max-w-5xl mx-auto px-[5%] pb-12">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-transparent shadow-md border border-[#0A3323]/10 flex items-center justify-center">
          <img loading="lazy" src="/soomgyul_g/soomgyul_main.png"
            alt="SoomGyul Main Character Showcase"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* PHASE 1 */}
      <div className="text-center pt-24 pb-12 px-[5%] max-w-5xl mx-auto space-y-12">
        <div>
          <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A3323] font-display">
            Phase 1
          </h2>
          <p className="text-[#105666] font-bold text-lg md:text-xl mt-2 mb-6">
            Concept Generation & AI Workflows
          </p>
          <div className="text-[#105666] text-sm md:text-base space-y-4 max-w-4xl mx-auto text-left leading-relaxed">
            <p>
              I initiated the character design using Weavy.ai. The LLM node, which automatically generates creative variations, proved highly effective during the initial ideation phase.
            </p>
            <p>
              I structured the system to generate three distinct variations of a "female high school student" concept, utilizing detailed positive and negative ("do" and "do not") parameters. After generating the initial images, I used masking and compositor nodes to isolate and merge the best elements from each variation.
            </p>
          </div>
        </div>

        {/* Cohesive side-by-side showcase of Turnaround 1 & 2 right under Phase 1 Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center border border-[#0A3323]/10 aspect-[4/3] w-full">
            <img loading="lazy" src="/soomgyul_g/soomgyul_turnaround_making1.png"
              alt="Generating Turnaround Stage 1"
              className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center border border-[#0A3323]/10 aspect-[4/3] w-full">
            <img loading="lazy" src="/soomgyul_g/soomgyul_turnaround_making2.png"
              alt="Generating Turnaround Stage 2"
              className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* PHASE 1 PROCESS GRID */}
      <section className="px-[5%] pb-24 max-w-7xl mx-auto space-y-24">
        {/* Row 1 - Overcoming the Hair Geometry Challenge (Placed immediately after the turnaround pictures) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A3323] leading-tight font-display">
              Overcoming the Hair Geometry Challenge
            </h3>
            <p className="text-sm md:text-base text-[#105666] leading-relaxed">
              One of the biggest hurdles was generating clean, polygonal hair. The AI tended to either over-complicate the mesh with chaotic, unnatural strands or flatten it into a single, solid block.
            </p>
            <p className="text-sm md:text-base text-[#105666] leading-relaxed">
              I solved this by engineering a highly specific prompt that forced structural volume and clean styling:
            </p>
            <blockquote className="border-l-4 border-[#839958] bg-[#839958]/10 px-6 py-4 italic text-sm md:text-base text-[#0A3323] font-medium leading-relaxed">
              "Back of her hair should be composed of soft layered volumes, not a single solid block. Subtle hair flow and direction should be visible, with slight separation into large, clean hair sections (not individual strands). Natural curvature following the head shape, maintaining a consistent style with the front hair."
            </blockquote>
          </div>
          <div className="aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center border border-[#0A3323]/10">
            <img loading="lazy" src="/soomgyul_g/soomgyul_hair_error.png"
              alt="Hair Geometry Generation"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Row 2 - Generating Turnarounds & Clear Environments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A3323] leading-tight font-display">
              Generating Turnarounds & Clear Environments
            </h3>
            <p className="text-sm md:text-base text-[#105666] leading-relaxed">
              Creating natural lighting, a clean background, and an accurate turnaround sheet presented another challenge. Ultimately, I realized that a minimalist prompting approach yielded the best results:
            </p>
            <blockquote className="border-l-4 border-[#839958] bg-[#839958]/10 px-6 py-4 italic text-sm md:text-base text-[#0A3323] font-medium leading-relaxed">
              "3D CGI character sheet: in order of front view, side view, and back view. Solid white background."
            </blockquote>
            <p className="text-sm md:text-base text-[#105666] leading-relaxed">
              For this task, Gemini 3 (Nano Banana Pro) was the standout choice among all available image-generation nodes due to its superior contextual understanding of layout and consistency.
            </p>
          </div>
          <div className="aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center border border-[#0A3323]/10">
            <img loading="lazy" src="/soomgyul_g/soomgyul_turnaround.png"
              alt="Character Turnarounds Layout"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A3323] leading-tight">
              Pro-Tip: Iterative Variation Workflow
            </h3>
            <p className="text-sm md:text-base text-[#105666] leading-relaxed">
              If you find a concept image you like but want to explore further variations, try this node sequence:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#105666] text-sm md:text-base leading-relaxed">
              <li>
                <strong className="text-[#0A3323]">Image Describer Node:</strong> Analyze exactly what visual triggers the AI responded to.
              </li>
              <li>
                <strong className="text-[#0A3323]">Painter & Merge Alpha Nodes:</strong> Isolate the specific regions or features you want to keep.
              </li>
              <li>
                <strong className="text-[#0A3323]">Compositor Node:</strong> Combine the selected elements seamlessly into a new base generation.
              </li>
            </ul>
          </div>
          <div className="aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center border border-[#0A3323]/10">
            <img loading="lazy" src="/soomgyul_g/soomgyul_tip.png"
              alt="Iterative Nodes Pipeline"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* PHASE 2 */}
      <div className="text-center pt-24 pb-12 bg-[#839958]/10 text-[#0A3323] w-full">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div>
            <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase font-display">
              Phase 2
            </h2>
            <p className="text-[#105666] font-bold text-lg md:text-xl mt-2 mb-6">
              3D Modeling & Manual Retopology
            </p>
            <div className="text-[#105666] text-sm md:text-base space-y-4 text-left leading-relaxed max-w-4xl mx-auto">
              <p>
                Once the concept sheet was finalized, I moved into the 3D modeling phase. To achieve a clean projection, I first generated a bald version of the character using Gemini—which accurately interpreted the underlying head anatomy. Removing the hair was crucial to prevent obstruction over the facial features.
              </p>
              <p>
                I then isolated and cropped the face views and fed them into the Hunyuan 3D v3 node to generate a highly detailed base polygon model, utilizing the front, side, and back references.
              </p>
              <div className="mt-8 p-4 border border-[#839958]/30 rounded bg-[#F7F4D5] text-center text-xs md:text-sm font-bold uppercase tracking-wide text-[#0A3323] leading-relaxed">
                [Concept Generation] &rarr; [Face Crop & Gemini Hair-Removal] &rarr; [Hunyuan 3D V3 Base Mesh] &rarr; [Manual Retopology in Maya]
              </div>
            </div>
          </div>

          {/* Phase 2 image inserted right below Phase 2 Text */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center border border-[#0A3323]/10">
              <img loading="lazy" src="/soomgyul_g/soomgyul_phase2.png"
                alt="Phase 2 Workflow Showcase"
                className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 2 PROCESS GRID */}
      <section className="px-[5%] py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A3323] leading-tight">
              Why Manual Retopology was Essential
            </h3>
            <p className="text-sm md:text-base text-[#105666] leading-relaxed">
              While the AI provided an excellent starting point, I exported the mesh to Maya to perform the retopology manually for two critical reasons:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#105666] text-sm md:text-base leading-relaxed">
              <li>
                <strong className="text-[#0A3323]">Density Control:</strong> AI-generated meshes often yield an excessively high polycount that is inefficient for production.
              </li>
              <li>
                <strong className="text-[#0A3323]">Deformation & Edge Flow:</strong> Automated topology does not yet properly align with human muscle groups, which is essential for natural facial expressions and body movement.
              </li>
            </ul>
            <p className="text-sm md:text-base text-[#105666] leading-relaxed">
              After completing the modeling and texturing process, I set up the final renders, including a dedicated high-resolution face close-up to create a facial expression chart.
            </p>
          </div>
          <div className="aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center border border-[#0A3323]/10">
            <img loading="lazy" src="/soomgyul_g/soomgyul_wireframe.png"
              alt="Hunyuan 3D Model Manual Retopo pass"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* PHASE 3 */}
      <div className="text-center pt-24 pb-12 px-[5%] max-w-5xl mx-auto space-y-12">
        <div>
          <hr className="border-t-4 border-[#839958] w-20 mx-auto mb-8" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A3323] font-display">
            Phase 3
          </h2>
          <p className="text-[#105666] font-bold text-lg md:text-xl mt-2 mb-6">
            Automated Facial Expression Charts
          </p>
          <div className="text-[#105666] text-sm md:text-base space-y-4 text-left leading-relaxed">
            <p>
              To test the character's versatility, I attempted to generate a comprehensive facial expression chart within Weavy.ai. Because of the sheer volume of expressions required, I designed a pipeline using an Array node, a Text Iterator node, and custom variables to batch-process all expressions with a single click.
            </p>
            <p>
              Here is an example of the prompt structure used for expression blending:
            </p>
            <blockquote className="border-l-4 border-[#839958] bg-[#839958]/10 px-6 py-4 italic text-sm md:text-base text-[#0A3323] font-medium leading-relaxed">
              "Highly detailed 3D render of a stylized young female character. Apply a natural [Eyebrows_sad] blendshape only to the eyebrows (eyebrows are naturally furrowed and lowered slightly inwards, creating a sad, pleading look; eyes remain open). Maintain the original diffuse lighting, subsurface scattering skin textures, and hair groom. Pure solid white background. Strictly no text, no watermarks, no annotations, and no additional cast shadows. 2K resolution, commercial 3D animation quality."
            </blockquote>
          </div>
        </div>

        {/* Phase 3 facial.png image inserted right below Phase 3 Text */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center border border-[#0A3323]/10">
            <img loading="lazy" src="/soomgyul_g/soomgyul_facial.png"
              alt="Facial Expression Charts"
              className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* PHASE 3 PROCESS GRID */}
      <section className="px-[5%] pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center border border-[#0A3323]/10 lg:order-2">
            <img loading="lazy" src="/soomgyul_g/soomgyul_facial_making.png"
              alt="Subsurface facial blends and charts"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 lg:order-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A3323] leading-tight">
              Refining Blendshape Artifacts
            </h3>
            <p className="text-sm md:text-base text-[#105666] leading-relaxed">
              Despite explicitly prompting the AI to isolate specific features (e.g., modifying only the eyebrows), minor bleed-through artifacts occasionally altered other parts of the face.
            </p>
            <p className="text-[#105666] text-sm md:text-base leading-relaxed">
              To fix this, I used the painter node to overlay the successfully altered features back onto the pristine original render, ensuring absolute facial consistency across the entire chart.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-[#0A3323] text-[#F7F4D5] py-24 px-[5%] text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#F7F4D5] font-display">
            The Synergy of AI & Human
          </h2>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed text-[#F7F4D5]/90 space-y-6 text-center">
            <p>
              Collaborating with AI across this hybrid pipeline was an incredibly rewarding and insightful experience. The most significant advantage was the ability to visualize and lock in high-quality conceptual results before investing time into modeling.
            </p>
            <p>
              Seeing how seamlessly an artist’s precise constraints can guide AI execution highlights a massive shift in production workflows. This project proved that while AI can drastically accelerate the ideation and asset-generation phases, the human eye remains irreplaceable for structural integrity, performance optimization, and final polish.
            </p>
            <p>
              Moving forward, I plan to fully leverage this automated expression pipeline to generate dynamic, story-driven AI content.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Call to action */}
      <footer className="py-24 px-[5%] bg-[#F7F4D5] text-[#0A3323] text-center border-t border-[#0A3323]/10">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-12 uppercase font-display">
          GET IN TOUCH
        </h2>
        <div className="flex justify-center gap-6 sm:gap-8 mb-12">
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
            className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-[#0A3323]/20 text-[#0A3323] transition-all duration-300 hover:scale-105 hover:bg-[#D3968C]/15 hover:border-[#D3968C] text-base sm:text-lg font-black font-display"
          >
            K.
          </a>
        </div>

        {/* Back to top or close work */}
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
