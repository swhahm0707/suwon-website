import { Cpu, Award, Film, Workflow, Compass, ArrowRight, Zap, Target } from "lucide-react";

export default function AiContentInsightDetail() {
  return (
    <div className="space-y-12 text-[#F7F4D5] leading-relaxed">
      {/* Introduction Banner */}
      <div className="p-6 rounded-lg bg-[#839958]/10 border border-[#839958]/20 mb-8 space-y-1">
        <span className="text-[10px] font-black uppercase tracking-[2px] text-[#D3968C]">Curriculum Study Note</span>
        <p className="text-sm font-medium text-[#F7F4D5]">
          Coloso | Mateo AI Studio &lt;The Next-Level Detail of an AI International Film Festival Grand Prize Winner: Everything About Filmmaking&gt;
        </p>
      </div>

      {/* SECTION 1: THE CORE THEORY */}
      <section className="space-y-8">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART I</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Synthetic Pipeline
          </h3>
        </div>

        <p className="text-base sm:text-lg text-[#F7F4D5]/95 font-medium leading-relaxed">
          AI-assisted filmmaking has quietly graduated from its chaotic generative infancy. We are no longer merely playing in an isolated sandbox of prompts; we are engineering systematic pipelines.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/80">
          A truly mature workflow demands an unbroken, organic thread: framing a cohesive visual language in Midjourney, breathing cinematic motion and narrative pacing into those concepts via tools like Kling or Runway, and subsequently tailoring the final direction on the editing timeline. To anchor this technical illusion, downstream processes like Facefusion and advanced upscaling have shifted from optional polish to non-negotiable keystones of cinematic execution.
        </p>

        {/* The Pipeline Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
          {/* Step 1 */}
          <div className="p-5 rounded-lg bg-black/30 border border-[#839958]/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#839958]">STAGE 01</span>
              <Workflow className="w-4 h-4 text-[#D3968C]" />
            </div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-[#F7F4D5]">Visual Lang</h5>
            <p className="text-xs text-[#F7F4D5]/70">
              Framing a cohesive visual language and aesthetic concept in Midjourney.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-lg bg-black/30 border border-[#839958]/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#839958]">STAGE 02</span>
              <Film className="w-4 h-4 text-[#D3968C]" />
            </div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-[#F7F4D5]">Motion Synthesis</h5>
            <p className="text-xs text-[#F7F4D5]/70">
              Breathing cinematic motion and narrative pacing using Kling or Runway.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-lg bg-black/30 border border-[#839958]/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#839958]">STAGE 03</span>
              <Cpu className="w-4 h-4 text-[#D3968C]" />
            </div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-[#F7F4D5]">Timeline Edit</h5>
            <p className="text-xs text-[#F7F4D5]/70">
              Tailoring and editing the final cinematic rhythm on the non-linear timeline.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-lg bg-black/30 border border-[#839958]/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#839958]">STAGE 04</span>
              <Target className="w-4 h-4 text-[#D3968C]" />
            </div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-[#F7F4D5]">Precision Anchor</h5>
            <p className="text-xs text-[#F7F4D5]/70">
              Deploying downstream Facefusion and upscaling as non-negotiable keystones.
            </p>
          </div>
        </div>

        {/* Global Competitiveness Block */}
        <div className="p-6 rounded-lg bg-black/20 border border-[#D3968C]/20 space-y-4">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#D3968C]" />
            <h4 className="text-lg font-bold uppercase tracking-wide text-[#F7F4D5]">
              Testing Resilience on the Global Stage
            </h4>
          </div>
          <p className="text-sm text-[#F7F4D5]/80">
            The ultimate crucible for testing the resilience of such a pipeline is the global stage. Stepping into international arenas like the Lumiere or WAIFF film festivals is more than an exercise in professional ambition. It is a definitive branding statement to the market—a declaration that you are no longer just a technician fluent in the latest software, but a comprehensive creator capable of conceiving, orchestrating, and delivering a singular, uncompromised vision.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE DUAL CORE INSIGHTS */}
      <section className="space-y-8 pt-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART II</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Two Creative Battlegrounds
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/80">
          As I navigate this paradigm shift, my own creative anxieties have converged on two distinct battlegrounds:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core Concern 1 */}
          <div className="p-6 rounded-lg bg-black/20 border-l-4 border-[#D3968C] border-y border-r border-[#D3968C]/10 space-y-4">
            <div className="flex items-center gap-2.5">
              <Target className="w-5 h-5 text-[#D3968C]" />
              <h4 className="text-xl font-extrabold uppercase text-[#F7F4D5]">
                1. Technical Integration
              </h4>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4D5]/85">
              <p className="font-bold text-[#D3968C]">
                The Grafting of Precision
              </p>
              <p>
                The first challenge is a marriage of disparate mediums: how do I graft my foundational 3D modeling skills onto a medium still plagued by volatile algorithmic limitations? AI excels at rapid, sprawling imagination, but it notoriously stumbles on structural precision—most notably, the fragile illusion of character consistency.
              </p>
              <p className="text-[#F7F4D5]/70 text-xs italic pt-2 border-t border-[#839958]/10">
                "I see this not as a barrier, but as a threshold. By injecting hyper-precise 3D structural data and meticulous architectural design into the fluid power of generative models, we can unlock a level of cinematic fidelity that sets itself completely apart from the flat, ungrounded nature of conventional AI videos."
              </p>
            </div>
          </div>

          {/* Core Concern 2 */}
          <div className="p-6 rounded-lg bg-black/20 border-l-4 border-[#839958] border-y border-r border-[#839958]/10 space-y-4">
            <div className="flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-[#839958]" />
              <h4 className="text-xl font-extrabold uppercase text-[#F7F4D5]">
                2. Practical Differentiation
              </h4>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4D5]/85">
              <p className="font-bold text-[#839958]">
                Reclaiming the Artisan’s Clock
              </p>
              <p>
                The second battleground concerns professional survival and market positioning. The conversation around AI often stalls at the fear of displacement, but the real task is figuring out how to seamlessly implant this overwhelming efficiency into an established, real-world delivery workflow.
              </p>
              <p className="text-[#F7F4D5]/70 text-xs italic pt-2 border-t border-[#839958]/10 font-medium">
                "If we treat the hours clawed back by automation not as a license for volume, but as capital to reinvest into conceptual depth, narrative nuance, and flawless detail, we redefine our economic value. We cease to be commoditized assets and instead emerge as high-value-added modelers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <div className="p-6 bg-black/30 rounded-lg border border-[#839958]/15 text-center font-mono text-xs text-[#F7F4D5]/80 italic">
        "The goal cannot simply be to produce faster; it must be to look deeper... our distinct human signature is amplified, rather than erased, by the machine."
      </div>
    </div>
  );
}
