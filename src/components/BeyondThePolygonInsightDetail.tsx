import { BookOpen, Compass, Wind, Sparkles } from "lucide-react";

export default function BeyondThePolygonInsightDetail() {
  return (
    <div className="space-y-12 text-[#F7F4D5] leading-relaxed">
      {/* Introduction Banner */}
      <div className="p-6 rounded-lg bg-[#839958]/10 border border-[#839958]/20 mb-8 space-y-2">
        <span className="text-[10px] font-black uppercase tracking-[2px] text-[#D3968C]">EXHIBITION JOURNAL & REFLECTION</span>
        <h4 className="text-xl font-bold text-[#F7F4D5]">Nowon Cultural Foundation's Impressionism Exhibition</h4>
        <p className="text-sm text-[#F7F4D5]/80">
          A deep reflection inspired by <span className="italic">"Masters of Impressionism: Monet, Renoir, Van Gogh, and Cézanne,"</span> exploring how algorithmic fluidity in latent spaces can liberate digital artists from the tyranny of rigid polygons.
        </p>
      </div>

      {/* Preface / Opening thought */}
      <section className="space-y-6">
        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          In the pragmatic realm of 3D modeling, we are taught to worship the surface. The computer thrives on boundaries—clean topologies, closed polygon meshes, and predictable geometries. If a form is amorphous, if it bends and stretches without a baseline, or if it has the audacity to materialize out of nothingness and dissolve back into the void, it becomes an implementation nightmare. We build cages of edges to capture reality.
        </p>
        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Yet, looking at the history of canvas, one realizes we weren't always so obsessed with boundaries. The Neo-Impressionists, most notably Paul Signac (1863–1935), rejected the solid line entirely; they built worlds out of pure dots. If you were to walk into a modern animation studio and ask a technical director to model a human being entirely out of unmeshed, independent points of light, they would likely throw a fit and declare it a technical impossibility.
        </p>

        <div className="my-6 space-y-2">
          <img loading="lazy" src="/insight08_g/insight08_paulSignac.jpg" 
            alt="Paul Signac - The Tugboat, Canal in Samois" 
            className="w-full h-auto rounded-lg border border-[#839958]/20 shadow-md"
            referrerPolicy="no-referrer"
          />
          <div className="text-xs text-[#F7F4D5]/60 pl-2 border-l border-[#839958]/30 space-y-1 py-1">
            <p><strong>Artist:</strong> Paul Signac, France, 1863–1935</p>
            <p><strong>Title:</strong> <span className="italic">The Tugboat, Canal in Samois</span>, 1901</p>
            <p><strong>Medium/Dimensions:</strong> Oil on canvas, 82 × 66 cm</p>
            <p><strong>Credit Line:</strong> Gift of Sara Mayer, Tel Aviv, in memory of her husband, Moshe Mayer</p>
            <p><strong>Photo:</strong> © The Israel Museum, Jerusalem</p>
          </div>
        </div>
        
        <div className="p-6 rounded-lg bg-black/20 border border-[#839958]/15 text-center">
          <p className="text-sm sm:text-base font-serif italic text-[#D3968C]">
            "We build cages of polygon edges to capture a fluid reality."
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          It begs a counterintuitive, slightly unsettling question: <strong className="text-[#D3968C] font-extrabold">Did the birth of 3D digital spaces actually expand our creative horizons, or did it merely introduce a new set of sophisticated geometric chains?</strong>
        </p>
        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          The Impressionists were original hunters of the ephemeral. They used their broken strokes to capture things that defy geometry—the way air shifts with temperature, the coexistence of urban vitality and natural serenity, and the split-second dance of light and color across a landscape. They painted the transition, not just the object.
        </p>

        <div className="my-6 space-y-2">
          <img loading="lazy" src="/insight08_g/insight08_van_gogh.jpg" 
            alt="Vincent van Gogh - Poppies in a Wheatfield" 
            className="w-full h-auto rounded-lg border border-[#839958]/20 shadow-md"
            referrerPolicy="no-referrer"
          />
          <div className="text-xs text-[#F7F4D5]/60 pl-2 border-l border-[#839958]/30 space-y-1 py-1">
            <p><strong>Artist:</strong> Vincent van Gogh, Netherlands, active in the Netherlands and France, 1853–1890</p>
            <p><strong>Title:</strong> <span className="italic">Poppies in a Wheatfield</span>, 1887</p>
            <p><strong>Medium/Dimensions:</strong> Oil on canvas, 54.5 × 65 cm</p>
            <p><strong>Credit Line:</strong> Gift of Yad Hanadiv, Jerusalem, from the collection of Miriam Alexandrine de Rothschild, daughter of the first Baron Edmond de Rothschild</p>
            <p><strong>Photo:</strong> © The Israel Museum, Jerusalem, by Elie Posner</p>
          </div>
        </div>
      </section>

      {/* Section 1: The Tyranny of the Visual Proxy */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART I</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Tyranny of the Visual Proxy
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          In contemporary visual media—our movies, streaming dramas, and animations—we have become incredibly adept at using visual proxies to trigger non-visual human sensations.
        </p>

        <ul className="space-y-3 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-[#D3968C] font-bold mt-1">•</span>
            <p className="text-sm sm:text-base text-[#F7F4D5]/90">
              We watch a lingering, silent glance between two characters and decode the profound weight of <strong className="text-cream-soft font-semibold">love</strong>.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D3968C] font-bold mt-1">•</span>
            <p className="text-sm sm:text-base text-[#F7F4D5]/90">
              We watch a child transformed through prosthetics and makeup into an old man and feel the heavy passage of <strong className="text-cream-soft font-semibold">time</strong>.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D3968C] font-bold mt-1">•</span>
            <p className="text-sm sm:text-base text-[#F7F4D5]/90">
              We watch a trusted friend, someone who stood by the protagonist for two acts, suddenly draw a pistol in the finale, and we experience the visceral sting of <strong className="text-cream-soft font-semibold">betrayal</strong>.
            </p>
          </li>
        </ul>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          3D animation inherits these exact narrative mechanics. Yet, the medium often stumbles when trying to step outside the literal. Because creating fluid, non-standard forms remains incredibly difficult, our imaginations remain structurally fenced in.
        </p>
        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Consider Pixar’s <span className="italic">Inside Out</span>. It was a triumph of conceptual screenwriting, turning human emotions into literal, anthropomorphic characters. Yet, even in that masterclass of imagination, the characters could not escape the tyranny of the surface. Joy, Sadness, and Fear were ultimately still wrapped in clean, identifiable meshes. They were manifestations of emotion, but they were still bound by the laws of the solid envelope.
        </p>
      </section>

      {/* Section 2: The Acoustic Portrait: A Thought Experiment */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART II</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Acoustic Portrait: A Thought Experiment
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          This is precisely where the intersection of human whim and generative AI opens an entirely new frontier. AI does not naturally think in rigid polygons; it operates in latent spaces of probability and continuous fluid transformation. By merging this algorithmic fluidity with human imagination, we might finally bypass the visual proxy. We can stop drawing things <span className="italic">that represent</span> a sensation, and start rendering the sensation itself. We can capture the fleeting, unmappable "now" just as Signac did with his pointillism.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Let us indulge in a whimsical thought experiment: <strong className="text-[#D3968C] font-extrabold">What if we chose to map an individual not by the physical topography of their skin, but by the unique symphony of the sounds they inhabit?</strong>
        </p>

        <div className="p-6 rounded-lg bg-[#839958]/5 border border-[#839958]/15 space-y-4">
          <div className="flex items-center gap-2 text-[#839958]">
            <Wind className="w-5 h-5 text-[#839958]" />
            <span className="text-sm font-extrabold uppercase tracking-widest">Auditory Ecosystems</span>
          </div>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
            We are all walking auditory ecosystems. We hear different things based on our environments, and our internal architecture filters those sounds differently. The exact same noise can move one person to tears and move another to laughter, depending entirely on the climate of their soul.
          </p>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
            What if we could translate this unseen interiority into "visible sound"—sculpting a person’s digital portrait entirely out of their sensory relationship with the acoustic world? To orchestrate this via AI—a tool designed to edge us closer to the historically impossible—would be to witness the birth of an entirely new genre of narrative art.
          </p>
        </div>
      </section>

      {/* Section 3: Dialogue with the Machine */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART III</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Dialogue with the Machine
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          I decided to test this hypothesis, opening a dialogue with the algorithm.
        </p>

        {/* Dynamic chat representation */}
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-black/40 border-l-2 border-[#D3968C] space-y-1">
            <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-[#D3968C]">
              <Compass className="w-3.5 h-3.5" />
              <span>Humankind</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/95 italic">
              "Express a joyful sound as a cinematic frame."
            </p>
          </div>

          <div className="p-4 rounded-lg bg-black/20 border-l-2 border-[#839958] space-y-3 pl-6">
            <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-[#839958]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Synthesized Agent</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/90">
              The AI did not give me a literal depiction of a note. Instead, it bypassed the standard toolkit to focus on atmosphere: it visualized sound as waves of luminous light rippling outward from the strings of a guitar. It broadcasted the abstract concept of "joy" through a deliberate flush of color and the ambient, expressive gestures of the surrounding figures.
            </p>
            <div className="mt-2 flex justify-center">
              <img loading="lazy" src="/insight08_g/insight08_sound01.png" 
                alt="Express joyful sound as a cinematic frame" 
                className="w-full max-w-lg h-auto rounded-lg border border-[#839958]/20 shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg bg-black/40 border-l-2 border-[#D3968C] space-y-1">
            <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-[#D3968C]">
              <Compass className="w-3.5 h-3.5" />
              <span>Humankind</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/95 italic">
              "If sound possessed a physical anatomy, what would it look like?"
            </p>
          </div>

          <div className="p-4 rounded-lg bg-black/20 border-l-2 border-[#839958] space-y-3 pl-6">
            <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-[#839958]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Synthesized Agent</span>
            </div>
            <div className="text-xs sm:text-sm text-[#F7F4D5]/90 space-y-2">
              <p>The AI responded with an unexpected, almost poetic grace:</p>
              <span className="italic text-[#D3968C] my-2 block font-serif text-sm">
                "Wouldn't it resemble a beautiful, cascading flow of light emanating from an instrument?"
              </span>
              <p>
                With that phrase, it proceeded to materialize the melody, turning the unseen vibrations into a visual tapestry.
              </p>
            </div>
            <div className="mt-2 flex justify-center">
              <img loading="lazy" src="/insight08_g/insight08_sound02.png" 
                alt="Sound possessing physical anatomy" 
                className="w-full max-w-lg h-auto rounded-lg border border-[#839958]/20 shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Conclusion: The Essential Substrate */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART IV</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Conclusion: The Essential Substrate
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Staring at the synthetic melody on my screen, a foundational truth became clear. AI possesses an extraordinary capacity to dismantle the technical cages—the rigid pipelines and polygon limitations—that have quietly governed our digital expressions.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          But the machine remains an echo chamber. To unlock its ability to see the world anew, it still requires the one substrate it cannot synthesize: <strong className="text-[#D3968C] font-extrabold">the playful, subversive human imagination.</strong> The technology is revolutionary, but it is entirely dependent on our willingness to stand before the conventional world, imagine it upside down, and ask a more interesting question.
        </p>
      </section>

      {/* References Section */}
      <section className="space-y-4 pt-6 border-t border-[#839958]/20">
        <div className="flex items-center gap-2 text-[#839958]">
          <BookOpen className="w-4 h-4" />
          <h4 className="text-xs font-bold uppercase tracking-widest">References</h4>
        </div>
        <ol className="list-decimal pl-5 space-y-2 text-xs text-[#F7F4D5]/70 font-mono">
          <li>
            "Masters of Impressionism: Monet, Renoir, Van Gogh and Cézanne." Nowon Foundation for Arts and Culture,{" "}
            <a
              href="https://www.nowonarts.kr/channels/exhibition/programs/946"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#D3968C] transition-colors"
            >
              www.nowonarts.kr/channels/exhibition/programs/946
            </a>
            . Accessed 31 May 2026.
          </li>
        </ol>
      </section>
    </div>
  );
}
