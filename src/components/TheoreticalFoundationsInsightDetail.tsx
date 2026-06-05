import { BookOpen, Compass, Eye, Heart, Layers, Paintbrush, Shield } from "lucide-react";

export default function TheoreticalFoundationsInsightDetail() {
  return (
    <div className="space-y-12 text-[#F7F4D5] leading-relaxed font-sans">
      {/* Introduction Banner */}
      <div className="p-6 rounded-lg bg-[#839958]/10 border border-[#839958]/20 mb-8 space-y-2">
        <span className="text-[10px] font-black uppercase tracking-[2px] text-[#D3968C]">THEORETICAL STUDY & CONTEMPLATION</span>
        <h4 className="text-xl font-bold text-[#F7F4D5]">The Anatomy of Perception: Light, Color, and the Structural Logic of Form</h4>
        <p className="text-sm text-[#F7F4D5]/80">
          A critical contemplation on the physics of light, the relative psychology of color perception, and the historical legacy of pigments in physical and virtual craft.
        </p>
      </div>

      {/* Bibliography Cards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[#839958]">
          <BookOpen className="w-4 h-4" />
          <h5 className="text-xs font-bold uppercase tracking-widest">Inspired By</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded bg-black/25 border border-[#839958]/15 space-y-1 text-xs">
            <p className="text-[#D3968C] font-semibold font-mono">01. THE PSYCHOLOGY</p>
            <p className="font-bold text-[#F7F4D5]">The Secret Language of Color</p>
            <p className="text-[#F7F4D5]/70">— Joann & Arielle Eckstut (Black Dog & Leventhal, 2013)</p>
          </div>
          <div className="p-4 rounded bg-black/25 border border-[#839958]/15 space-y-1 text-xs">
            <p className="text-[#D3968C] font-semibold font-mono">02. THE PHYSICS</p>
            <p className="font-bold text-[#F7F4D5]">Color and Light: A Guide for the Realist Painter</p>
            <p className="text-[#F7F4D5]/70">— James Gurney (Inkjam, 2024)</p>
          </div>
          <div className="p-4 rounded bg-black/25 border border-[#839958]/15 space-y-1 text-xs">
            <p className="text-[#D3968C] font-semibold font-mono">03. THE HISTORY</p>
            <p className="font-bold text-[#F7F4D5]">Chromatopia: An Illustrated History of Colour</p>
            <p className="text-[#F7F4D5]/70">— David Coles (2020)</p>
          </div>
          <div className="p-4 rounded bg-black/25 border border-[#839958]/15 space-y-1 text-xs">
            <p className="text-[#D3968C] font-semibold font-mono">04. THE PHENOMENOLOGY</p>
            <p className="font-bold text-[#F7F4D5]">Theory of Colours</p>
            <p className="text-[#F7F4D5]/70">— Johann Wolfgang von Goethe (Minumsa, 2003)</p>
          </div>
        </div>
      </div>

      {/* Part 1: Light Section */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART I</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Architect of Space
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90 font-medium">
          Light is the primordial architect of form. It dictates not only what we see, but how we understand space. To capture a profound sense of three-dimensional depth on a flat screen, an artist cannot rely on guesswork; one must master the rigorous physics of illumination.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          We must decode the distinct personalities of our light sources—the unforgiving clarity of direct light versus the soft, scattered embrace of diffuse light—while wrestling with the law of <strong className="text-[#D3968C] font-semibold">fall-off</strong>, that mathematical decay where light surrenders its strength to distance. Only when these physical boundaries are respected does a flat canvas transform into a living, breathing space.
        </p>
      </section>

      {/* Part 2: Color Section */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART II</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Relational Phantom
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Color, however, is a far more slippery phantom. It refuses to be imprisoned by static numerical values or rigid hex codes. Instead, color exists as a relative negotiation—a psychological illusion that our brain constantly reinterprets based on surrounding environments and shifting light.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          To manipulate this illusion, studying the grammar of color harmony—the delicate mechanics of additive and subtractive mixing, the tension of complementary hues, and the quiet unity of analogous colors—becomes a mandatory crucible for staging a deliberate atmosphere.
        </p>

        {/* Central Quote Callout */}
        <div className="p-8 my-8 text-center bg-black/35 rounded-xl border border-[#D3968C]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#D3968C]" />
          <span className="font-mono text-[10px] text-[#D3968C] uppercase tracking-[4px] block mb-2">NEUROLOGICAL DIALOGUE</span>
          <blockquote className="text-lg sm:text-xl font-black uppercase text-[#F7F4D5] tracking-tight leading-relaxed max-w-xl mx-auto italic">
            "Color is not a property of the object, but a conversation between light and the mind."
          </blockquote>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          I found myself deeply arrested by the neurological dance of perception: the way our brain compartmentalizes spatial layout (tone) away from object identity (color). Even more fascinating is the concept of <strong className="text-[#839958] font-bold">color constancy</strong>—the stubborn psychological anchor that allows the mind to preserve an object's inherent hue even when the illuminating light changes entirely. This constancy forms the very backbone of how we interpret reality.
        </p>
      </section>

      {/* Part 3: Pigments Section */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART III</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Chromancy and virtual Craft
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Delving into the deep lineage and application of raw pigments made me feel as though I were stepping closer to the heartbeat of color itself. I began to understand each hue not merely as a visual frequency, but through its historical and cultural context—realizing that every shade carries the weight of the era that crushed it from stone or distilled it from plants.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          This realization has fundamentally shifted my approach to 3D modeling. No longer can I allow myself to passively choose colors based on what merely "looks good" in the moment. Instead, I am learning the discipline of logical selection—tailoring every chromatic choice to fit the background knowledge and the overarching structural context of the world I am building.
        </p>

        {/* Closing takeaway block */}
        <div className="p-6 rounded-lg bg-[#839958]/5 border border-[#839958]/15 space-y-4">
          <div className="flex items-center gap-2 text-[#839958]">
            <Compass className="w-4 h-4 text-[#839958]" />
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#839958]">
              Chromatic Synthesis
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
            The process of training my eye to harmonize combinations of saturation and brightness within a palette has been deeply exhilarating. Now, armed with these foundational theories, these sharpened visual sensibilities are no longer just passive instincts. I look forward to seeing how this intellectual armor will manifest in the architectures of my future works.
          </p>
        </div>
      </section>

      {/* Bottom Signature Badge */}
      <div className="p-8 text-center bg-black/30 rounded-lg border border-[#839958]/20 space-y-2">
        <p className="text-base font-extrabold text-[#F7F4D5] tracking-wide uppercase font-serif">
          light, color, and structural logic
        </p>
      </div>
    </div>
  );
}
