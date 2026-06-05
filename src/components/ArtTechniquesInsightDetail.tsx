import { Paintbrush, Layers, Layers2, Eye, Compass, Heart, Wind } from "lucide-react";

export default function ArtTechniquesInsightDetail() {
  return (
    <div className="space-y-12 text-[#F7F4D5] leading-relaxed">
      {/* Introduction Banner */}
      <div className="p-6 rounded-lg bg-[#839958]/10 border border-[#839958]/20 mb-8 space-y-2">
        <span className="text-[10px] font-black uppercase tracking-[2px] text-[#D3968C]">MASTERCLASS REFLECTION & WORKFLOW</span>
        <h4 className="text-xl font-bold text-[#F7F4D5]">From Intuition to Conviction in Digital Form</h4>
        <p className="text-sm text-[#F7F4D5]/80 font-normal">
          A deep dive into Coloso | Rinotuna's masterclass, exploring chiaroscuro expression, three-dimensional structure, and shading mechanics that anchor the illusion of density on a flat screen.
        </p>
      </div>

      {/* Narrative Section 1: The Logic of Light */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART I</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Logic of Light
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90 font-medium">
          To pass beyond the boundary of mere illustration and truly <i>construct</i> a three-dimensional form, an artist must first submit to the absolute logic of light. True volume on a digital canvas is not an accident of intuition; it is an act of architecture. We map this territory along the <strong className="text-[#D3968C] font-extrabold">terminator line</strong>—the fragile frontier where direct illumination surrenders to shadow and reflected light.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          A solid, undeniable sense of weight is born only when we meticulously categorize these structural zones, balancing the crisp, uncompromising certainty of a hard brush against the soft, breathing transitions of an airbrush. At this intersection of sharpness and dissipation, a flat pixelated surface finally acquires the density of real-world volume.
        </p>
      </section>

      {/* Layer Blending & Materiality Dual Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div className="p-6 rounded-lg bg-black/25 border border-[#839958]/20 space-y-3">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-[#D3968C]" />
            <h4 className="text-base font-bold uppercase tracking-wider text-[#F7F4D5]">
              Layer Blending Strategy
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
            In the modern digital studio, translating these physical phenomena is a prerequisite for survival. We leverage layer blending modes like <strong className="text-[#D3968C]">Multiply</strong> and <strong className="text-[#D3968C]">Overlay</strong> not as mere software shortcuts, but as mathematical strategies to synthesize light and dark dynamically without losing ambient hues.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-black/25 border border-[#D3968C]/20 space-y-3">
          <div className="flex items-center gap-2.5">
            <Layers2 className="w-5 h-5 text-[#839958]" />
            <h4 className="text-base font-bold uppercase tracking-wider text-[#F7F4D5]">
              PBR Fluid Fluency
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
            Through a <strong className="text-[#839958]">PBR (Physically Based Rendering)</strong> workflow, we distill the tactile, messy realities of physical materials into digital assets, cultivating a rigorous practical fluency. The true discipline lies here: mastering the digital tools so thoroughly that we can extract an uncompromised, living texture from a purely synthetic pipeline.
          </p>
        </div>
      </div>

      {/* Interactive / Prominent Quote Block */}
      <div className="p-8 my-6 text-center bg-black/35 rounded-xl border border-[#D3968C]/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#D3968C]" />
        <span className="font-mono text-[10px] text-[#D3968C] uppercase tracking-[4px] block mb-2">VECTOR VECTORUM</span>
        <blockquote className="text-lg sm:text-xl font-black uppercase text-[#F7F4D5] tracking-tight leading-relaxed max-w-xl mx-auto italic">
          "To draw a fold is to map the unseen vectors of a body in motion."
        </blockquote>
      </div>

      {/* Narrative Section 2: Wrinkle Geometry */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART II</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Geometry of Drapery
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Yet, perhaps the ultimate crucible of form is the expression of drapery—the complex geometry of wrinkles. The amateur trap is to merely draw passive lines across fabric. The artisan's path requires a structural excavation.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Before the brush even touches the screen, one must decode the invisible choreography at play: <strong className="text-[#D3968C]">the gesture of the human body, the inexorable pull of gravity, and the precise direction of opposing forces.</strong> By dissecting the chaotic behavior of cloth into three fundamental coordinates—<span className="text-[#839958] font-semibold">size, depth, and sharpness</span>—the unpredictable cascade of clothing ceases to be a mystery. It transforms into a logical design.
        </p>

        {/* 3 Coordinates List Detail Card */}
        <div className="p-6 rounded-lg bg-[#839958]/5 border border-[#839958]/15 space-y-4">
          <h5 className="text-xs font-black uppercase tracking-widest text-[#839958]">THE THREE FUNDAMENTAL COORDINATES OF DRAPERY</h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="space-y-1">
              <span className="font-mono font-bold text-[#D3968C]">01. SIZE</span>
              <p className="text-[#F7F4D5]/70">Determining the scale of the fold based on the tension and thickness of the material.</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono font-bold text-[#D3968C]">02. DEPTH</span>
              <p className="text-[#F7F4D5]/70">Establishing the deep recess of shadows where light is completely choked out.</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono font-bold text-[#D3968C]">03. SHARPNESS</span>
              <p className="text-[#F7F4D5]/70">Balancing crisp creases against soft gradient transitions to convey tension.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature & Closing Quote */}
      <div className="p-8 text-center bg-black/30 rounded-lg border border-[#839958]/20 space-y-2">
        <p className="text-base font-extrabold text-[#F7F4D5] tracking-wide uppercase leading-snug">
          "With this structural framework in hand, intuition gives way to absolute conviction, proving that even the most complex flows of reality can be deliberately engineered."
        </p>
      </div>
    </div>
  );
}
