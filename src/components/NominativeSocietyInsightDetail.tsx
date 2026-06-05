import { BookOpen, Cpu, Clock, Compass, Award, Shield, Library, Feather } from "lucide-react";

export default function NominativeSocietyInsightDetail() {
  return (
    <div className="space-y-12 text-[#F7F4D5] leading-relaxed">
      {/* Introduction Banner */}
      <div className="p-6 rounded-lg bg-[#839958]/10 border border-[#839958]/20 mb-8 space-y-2">
        <span className="text-[10px] font-black uppercase tracking-[2px] text-[#D3968C]">BOOK STUDY & REFLECTION</span>
        <h4 className="text-xl font-bold text-[#F7F4D5]">Reclaiming Craft and Character in the Automated Age</h4>
        <p className="text-sm text-[#F7F4D5]/80">
          A reflection on Song Gil-young’s <span className="italic font-medium">Forecast of the Times: Nominative Society</span> (Forest Books, 2024) and <span className="italic font-medium text-[#D3968C]">Forecast of the Times: The Rise of Lightweight Civilization</span> (Forest Books, 2025).
        </p>
      </div>

      {/* Book Citations Dual Row Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-lg bg-black/25 border border-[#839958]/10 space-y-2">
          <div className="flex items-center gap-2 text-[#D3968C]">
            <Library className="w-4 h-4 text-[#D3968C]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider">BOOK I — 2024</span>
          </div>
          <h5 className="font-extrabold text-base text-[#F7F4D5] uppercase tracking-tight">Nominative Society</h5>
          <p className="text-xs text-[#F7F4D5]/70 leading-relaxed">
            Diagnosing the evaporation of corporate cloaks. Standing uncovered, called entirely by our own names, rather than hiding behind company titles.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-black/25 border border-[#839958]/10 space-y-2">
          <div className="flex items-center gap-2 text-[#839958]">
            <Library className="w-4 h-4 text-[#839958]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider">BOOK II — 2025</span>
          </div>
          <h5 className="font-extrabold text-base text-[#F7F4D5] uppercase tracking-tight">The Rise of Lightweight Civilization</h5>
          <p className="text-xs text-[#F7F4D5]/70 leading-relaxed">
            Adapting to high portability and rapid adaptation, stripping away heavy physical structures to optimize flexibility and resilience.
          </p>
        </div>
      </div>

      {/* Narrative Section 1: The Transition */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART I</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Dismantling of Work
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          We are living through a quiet, seismic dismantling of the traditional scaffolding of work. Over the past year, as I moved from the pages of <span className="italic">Forecast of the Times: Nominative Society</span> to its sequel, <span className="italic">The Rise of Lightweight Civilization</span>, I found myself hunting for an anchor. In an era where recruitment pipelines are shrinking and artificial intelligence has drifted from a futuristic novelty into an ordinary baseline of daily life, the pressing question is no longer about survival in the old world, but posture in the new: <strong className="text-[#D3968C] font-semibold">What kind of mindset does it take to navigate a turning point of this scale?</strong>
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Song Gil-young, the cultural analyst often called a "Mind Miner," offers a radical diagnosis. He suggests that the institutional cloaks we once wore—our corporate titles, our organizational affiliations—are evaporating. We are entering an era where we must stand uncovered, called entirely by our own names. The core challenge of our time forces us to move past the superficial anxiety of <span className="italic">how</span> to perform a task, and instead confront the essential architecture of <span className="italic">what</span> we genuinely wish to become.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/95 font-medium border-l-2 border-[#D3968C] pl-4 py-1">
          Rather than wasting creative energy on the zero-sum panic of whether AI will steal my livelihood, I have chosen a different friction: studying how to become a "team" with the machine, engineering a symbiosis that expands what is humanly possible.
        </p>
      </section>

      {/* Narrative Section 2: Fundamental Laws of Coexistence */}
      <section className="space-y-8 pt-4">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART II</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Laws of Coexistence
          </h3>
        </div>

        <p className="text-sm text-[#F7F4D5]/80">
          To build this alliance, we must understand the fundamental laws of coexistence that Song outlines:
        </p>

        {/* Coexistence Laws Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Law 1 */}
          <div className="p-6 rounded-lg bg-black/25 border border-[#839958]/20 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#839958]/10 flex items-center justify-center text-[#839958]">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-base font-extrabold uppercase tracking-wide text-[#F7F4D5]">
                1. The Severance of Efficiency and Essence
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
              The machine’s mandate is the optimization of the loop—handling rapid, repetitive labor with flawless precision. The human mandate, then, must be the interpretation of the anomaly—sensing new phenomena and having the courage to define the problem in the first place.
            </p>
          </div>

          {/* Law 2 */}
          <div className="p-6 rounded-lg bg-black/25 border border-[#839958]/20 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#839958]/10 flex items-center justify-center text-[#839958]">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-base font-extrabold uppercase tracking-wide text-[#F7F4D5]">
                2. The Reconstruction of Temporal Space
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
              When the algorithm plays its truest card—saving us time—it leaves behind a vacuum. Our task is not to fill that void with more mindless volume, but to enrich it with the things data cannot replicate: deep relationships, emotional resonance, historical context, and philosophical weight.
            </p>
          </div>

          {/* Law 3 */}
          <div className="p-6 rounded-lg bg-black/25 border border-[#D3968C]/20 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D3968C]/10 flex items-center justify-center text-[#D3968C]">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="text-base font-extrabold uppercase tracking-wide text-[#F7F4D5]">
                3. The Geometry of Unique Domains
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
              Competing with AI on its own terms is a fool's errand. We must seek the terrains where the algorithm stumbles or cannot tread. Speed and volume belong unreservedly to AI; depth, structural delicacy, and the rare value of deliberate accumulation remain the sovereign territory of the human hand.
            </p>
          </div>

          {/* Law 4 */}
          <div className="p-6 rounded-lg bg-black/25 border border-[#D3968C]/20 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D3968C]/10 flex items-center justify-center text-[#D3968C]">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-base font-extrabold uppercase tracking-wide text-[#F7F4D5]">
                4. The Scarcity of the Artisan
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
              As the friction of production drops to zero, the market will be flooded with the easily made, and the value of things easily learned will plummet. True resilience belongs to the hard-won mastery—the expertise built through years of rigorous, painful study. The uncompromised output will always survive.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Central Quote Callout */}
      <div className="p-8 my-8 text-center bg-black/35 rounded-xl border border-[#D3968C]/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#D3968C]" />
        <span className="font-mono text-[10px] text-[#D3968C] uppercase tracking-[4px] block mb-2">INTELLIGENT UNION</span>
        <blockquote className="text-lg sm:text-xl font-black uppercase text-[#F7F4D5] tracking-tight leading-relaxed max-w-xl mx-auto italic">
          "We must yield speed to the algorithm, but claim the architecture of accumulation."
        </blockquote>
      </div>

      {/* Narrative Section 3: Period of Accumulation & Personal Framework */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART III</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Period of Accumulation
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Taking this as my first step, I have begun dedicating myself to this <span className="font-bold text-[#D3968C]">"period of accumulation,"</span> actively carving out a domain of expertise that cannot be easily counterfeited or mirrored by others. Adopting an aggressive attitude of "Quick-stacking," I am devouring new intellectual and technical territories without hesitation. My goal is to design a highly customized personal framework—a pipeline where human intent and generative power collide to create maximum synergy.
        </p>

        <div className="p-6 rounded-lg bg-[#839958]/5 border border-[#839958]/15 space-y-4">
          <div className="flex items-center gap-2 text-[#839958]">
            <Feather className="w-4 h-4 text-[#839958]" />
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#839958]">
              Final Philosophical Quest
            </h4>
          </div>
          <p className="text-sm text-[#F7F4D5]/90 font-medium">
            At the end of this profound transition, when the noise settles, what name will I finally give myself?
          </p>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed border-t border-[#839958]/10 pt-3">
            I have come to realize that the answer itself is not a static destination. The very process of seeking that answer, day after day, will become my true profession.
          </p>
        </div>
      </section>

      {/* Bottom Signature Badge */}
      <div className="p-8 text-center bg-black/30 rounded-lg border border-[#839958]/20 space-y-2">
        <p className="text-base font-extrabold text-[#F7F4D5] tracking-wide uppercase font-serif">
          called entirely by our own names
        </p>
      </div>
    </div>
  );
}
