import { Compass, Layers, Globe, Shield, User, Landmark, HelpCircle, Eye, RefreshCw } from "lucide-react";

export default function ElioInsightDetail() {
  return (
    <div className="space-y-12 text-[#F7F4D5] leading-relaxed">
      {/* Introduction Banner */}
      <div className="p-6 rounded-lg bg-[#839958]/10 border border-[#839958]/20 mb-8">
        <p className="text-sm font-medium text-[#D3968C]">
          An in-depth spatial & anatomical analysis of Pixar's sci-fi feature.
        </p>
      </div>

      {/* --- SECTION 1: SPACE IN ANIMATION --- */}
      <section className="space-y-8">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART I</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Space in Animation
          </h3>
        </div>

        <p className="text-base sm:text-lg text-[#F7F4D5]/90 font-medium">
          In animation, space is never merely a background. It is the most powerful narrative device that visually condenses and manifests a character's emotions and worldview. The film <span className="text-[#D3968C] italic font-bold">Elio</span> visually shapes the emotional isolation and liberation of the protagonist, Elio, through two polar opposite spaces: Earth's 'Montes Base' and the alien alliance 'Comuniverse.'
        </p>

        {/* 1. Architectural Contrast */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#839958]/20 flex items-center justify-center text-[#839958]">
              <span className="text-xs font-mono font-bold">1</span>
            </div>
            <h4 className="text-xl font-bold uppercase text-[#D3968C]">
              Architectural Contrast: Brutalism vs. Organic Curved Surfaces
            </h4>
          </div>

          {/* Montes Base card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-lg bg-black/20 border border-[#839958]/20">
            <div className="md:col-span-4 space-y-2">
              <span className="inline-block px-2.5 py-1 text-[9px] font-black uppercase tracking-wider bg-[#0A3323] text-[#839958] border border-[#839958]/30 rounded">
                TERRESTRIAL REGIME
              </span>
              <h5 className="text-lg font-extrabold uppercase text-[#F7F4D5] flex items-center gap-2">
                <span className="text-xs">◼</span> Montes Base: Brutalism
              </h5>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm text-[#F7F4D5]/80">
                The terrestrial space, Montes Base, strategically adopts Brutalist architecture.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-xs text-[#F7F4D5]/90">
                  <span className="text-[#D3968C] mt-1 shrink-0">•</span>
                  <span>Matte concrete and asphalt textures</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-[#F7F4D5]/90">
                  <span className="text-[#D3968C] mt-1 shrink-0">•</span>
                  <span>Repetitive horizontal and vertical structures</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-[#F7F4D5]/90">
                  <span className="text-[#D3968C] mt-1 shrink-0">•</span>
                  <span>Rigid, uniform edges</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-[#F7F4D5]/90">
                  <span className="text-[#D3968C] mt-1 shrink-0">•</span>
                  <span>Perfect symmetry and controlled silhouettes</span>
                </li>
              </ul>
              <p className="text-xs text-[#F7F4D5]/75 leading-relaxed pt-2 border-t border-[#839958]/10">
                The flawless alignment and repetition of this space visually embody the pressure of a controlled society. In particular, the desolate design motivated by a "parking lot" emphasizes a lifeless environment, structurally solidifying Elio's emotional isolation.
              </p>
              <p className="text-xs text-[#F7F4D5]/75 leading-relaxed">
                Within this environment, Elio is a visual anomaly. Because the backdrop is utterly monotonous, his vibrant, colorful palette naturally accentuates his sense of alienation.
              </p>
            </div>
          </div>

          {/* Comuniverse card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-lg bg-black/20 border border-[#D3968C]/20">
            <div className="md:col-span-4 space-y-2">
              <span className="inline-block px-2.5 py-1 text-[9px] font-black uppercase tracking-wider bg-[#0A3323] text-[#D3968C] border border-[#D3968C]/30 rounded">
                COSMIC ALLIANCE
              </span>
              <h5 className="text-lg font-extrabold uppercase text-[#F7F4D5] flex items-center gap-2">
                <span className="text-xs">◼</span> Comuniverse: The Vitality of Procedural Curves
              </h5>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm text-[#F7F4D5]/80">
                Positioned at the exact antithesis of Montes Base, the Comuniverse utilizes an entirely different formal language.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-[#F7F4D5]/90">
                  <span className="text-[#839958] mt-1 shrink-0">•</span>
                  <span>A rotating disc structure where volcanoes, ice, aquatic ecosystems, and diverse flora coexist</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-[#F7F4D5]/90">
                  <span className="text-[#839958] mt-1 shrink-0">•</span>
                  <span>Structures derived from coral reefs, origami, and fungal macro photography</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-[#F7F4D5]/90">
                  <span className="text-[#839958] mt-1 shrink-0">•</span>
                  <span>Organic curves and fractal structures</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-[#F7F4D5]/90">
                  <span className="text-[#839958] mt-1 shrink-0">•</span>
                  <span>An asymmetric design where up and down are ambiguous</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-[#F7F4D5]/90">
                  <span className="text-[#839958] mt-1 shrink-0">•</span>
                  <span>A grand assembly hall structure that opens and closes like an "eyelid"</span>
                </li>
              </ul>
              <p className="text-xs text-[#F7F4D5]/75 leading-relaxed pt-2 border-t border-[#D3968C]/10">
                Unlike the straight-line-dominated terrestrial space, this realm is governed by curved surfaces and fluid flow. The space itself feels like a living, breathing organism, visually maximizing Elio's newfound sense of liberation.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Color and Optical Strategies */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#839958]/20 flex items-center justify-center text-[#839958]">
              <span className="text-xs font-mono font-bold">2</span>
            </div>
            <h4 className="text-xl font-bold uppercase text-[#D3968C]">
              Color and Optical Strategies: Monochromatic Control vs. Bioluminescent Dynamism
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Earth */}
            <div className="p-6 rounded-lg bg-black/30 border border-[#839958]/20 space-y-4">
              <span className="text-[9px] font-black uppercase text-[#839958] tracking-widest block bg-[#0A3323] px-2 py-0.5 w-max rounded">
                EARTH ASPECT
              </span>
              <h5 className="text-base font-extrabold uppercase text-[#F7F4D5]">
                ◼ Earth: Low-Reflective Monochromatic Strategy
              </h5>
              <ul className="space-y-2 text-xs text-[#F7F4D5]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#D3968C] mt-0.5">•</span>
                  <span>Monochromatic colors based on muted tan camouflage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D3968C] mt-0.5">•</span>
                  <span>Low reflectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D3968C] mt-0.5">•</span>
                  <span>Coarse-grained asphalt surfaces</span>
                </li>
              </ul>
              <p className="text-xs text-[#F7F4D5]/75 leading-relaxed pt-2 border-t border-[#839958]/10">
                An environment where diffuse reflection is strictly suppressed induces visual boredom. Elio’s primary colors become increasingly conspicuous within this achromatic environment. This stark contrast maximizes the coloristic liberation he will later experience in the Comuniverse.
              </p>
            </div>

            {/* Comuniverse */}
            <div className="p-6 rounded-lg bg-black/30 border border-[#D3968C]/20 space-y-4">
              <span className="text-[9px] font-black uppercase text-[#D3968C] tracking-widest block bg-[#0A3323] px-2 py-0.5 w-max rounded">
                COMINIVERSE ASPECT
              </span>
              <h5 className="text-base font-extrabold uppercase text-[#F7F4D5]">
                ◼ Comuniverse: Optical Complexity
              </h5>
              <ul className="space-y-2 text-xs text-[#F7F4D5]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#839958] mt-0.5">•</span>
                  <span>Bioluminescent materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#839958] mt-0.5">•</span>
                  <span>Translucent structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#839958] mt-0.5">•</span>
                  <span>Total Internal Reflection (TIR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#839958] mt-0.5">•</span>
                  <span>Refraction effects</span>
                </li>
              </ul>
              <p className="text-xs text-[#F7F4D5]/75 leading-relaxed pt-2 border-t border-[#D3968C]/10">
                The Comuniverse actively capitalizes on the physical properties of light. The production team conducted physical experiments, such as filming inside water columns or placing glitter in a bowl filled with a mixture of water and oil, and projected the resulting geometric refraction patterns onto 3D surfaces. This moves beyond simple color expression to realize a space where light is alive and actively moving within.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="p-6 rounded-lg bg-[#D3968C]/5 border border-[#D3968C]/15 space-y-4">
          <h4 className="text-lg font-black uppercase text-[#D3968C] tracking-wide">
            Conclusion: Space as an Extension of Emotion
          </h4>
          <p className="text-sm text-[#F7F4D5]/90">
            The oppressive Brutalism of Montes Base and the organic vitality of the Comuniverse are not merely artistic contrasts; they are visual representations of Elio's emotional journey.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
            <div className="p-3 bg-black/25 rounded border border-[#839958]/20 text-center font-mono text-[11px]">
              <span className="block text-[#839958] font-bold">Straight Lines</span>
              <span className="text-[#D3968C] block text-xs my-0.5">↓</span>
              <span className="font-extrabold tracking-wide uppercase">Control</span>
            </div>
            <div className="p-3 bg-black/25 rounded border border-[#839958]/20 text-center font-mono text-[11px]">
              <span className="block text-[#839958] font-bold">Curves</span>
              <span className="text-[#D3968C] block text-xs my-0.5">↓</span>
              <span className="font-extrabold tracking-wide uppercase">Liberation</span>
            </div>
            <div className="p-3 bg-black/25 rounded border border-[#839958]/20 text-center font-mono text-[11px]">
              <span className="block text-[#839958] font-bold">Low-Reflective Monochrome</span>
              <span className="text-[#D3968C] block text-xs my-0.5">↓</span>
              <span className="font-extrabold tracking-wide uppercase">Isolation</span>
            </div>
            <div className="p-3 bg-black/25 rounded border border-[#839958]/20 text-center font-mono text-[11px]">
              <span className="block text-[#839958] font-bold">Bioluminescent Refraction</span>
              <span className="text-[#D3968C] block text-xs my-0.5">↓</span>
              <span className="font-extrabold tracking-wide uppercase">Expansion</span>
            </div>
          </div>

          <p className="text-xs text-[#F7F4D5]/80 leading-relaxed italic">
            When spatial geometry and optical characteristics synchronize with a character's interiority, the audience experiences emotions rather than simply "watching" a scene. At that precise intersection, space ceases to be a background and becomes the subject of the narrative.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: CHARACTER ANALYSIS --- */}
      <section className="space-y-8 pt-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART II</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Character Analysis
          </h3>
        </div>

        <div className="space-y-10">
          {/* 1. Elio Solis */}
          <div className="space-y-4 p-6 rounded-lg bg-black/15 border-l-4 border-[#D3968C] border-y border-r border-[#D3968C]/10">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h4 className="text-xl font-extrabold uppercase text-[#F7F4D5] flex items-center gap-2">
                <span className="text-sm font-mono text-[#D3968C]">1.</span> Elio Solis
              </h4>
              <span className="px-2 py-0.5 text-[9px] font-black bg-[#D3968C]/20 text-[#D3968C] rounded tracking-widest uppercase">
                PROTAGONIST
              </span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4D5]/85">
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Disposition and Narrative Agency:</strong>
                An imaginative boy obsessed with the universe and aliens. Driven by a sense of alienation and an escapist longing from not being fully accepted on Earth, he exhibits an proactive disposition—meaning he is not merely a passive abductee, but rather intensely obsessed with wanting to be abducted by aliens. He completes a journey of self-discovery, uncovering his true identity and sense of belonging while navigating galactic-scale crises and trials.
              </p>
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Philosophical Underpinnings:</strong>
                Directors Domee Shi and Madeline Sharafian stated that the core of this work is an exploration of solitude, identity, and belonging. CCO Pete Docter described it as a piece that makes one realize that even if you feel left entirely alone in a massive world, you do not have to truly be alone, drawing a parallel to how Inside Out 2 addressed anxiety.
              </p>
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Visual Appearance and Growth Direction:</strong>
                On Earth, he wears vibrant, primary-colored clothes inside a base filled with drab, monochromatic camouflage uniforms and desolate architecture, maximizing his incongruity as a "geek" or an "alien" outcast in the real world. He exhibits highly energetic and active movements. Upon arriving in space, he evolves into a heroic figure, wearing a pirate-warrior style eyepatch and a brilliant, sparkling space cape designed by Maria Yi. As his journey progresses, he subtly grows taller, visualizing his physical and mental growth.
              </p>
            </div>
          </div>

          {/* 2. Olga Solis */}
          <div className="space-y-4 p-6 rounded-lg bg-black/15 border-l-4 border-[#839958] border-y border-r border-[#839958]/10">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h4 className="text-xl font-extrabold uppercase text-[#F7F4D5] flex items-center gap-2">
                <span className="text-sm font-mono text-[#839958]">2.</span> Olga Solis
              </h4>
              <span className="px-2 py-0.5 text-[9px] font-black bg-[#839958]/20 text-[#839958] rounded tracking-widest uppercase">
                EARTH REGULATOR
              </span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4D5]/85">
              <p>
                <strong className="text-[#839958] uppercase tracking-wide mr-1.5 font-bold">Character Setting and Relationships:</strong>
                A major at the Montes Air Force Base and Elio's aunt, tasked with decoding extraterrestrial signals on Earth. She serves as Elio's most crucial emotional anchor linking him to Earth. Due to changes in production leadership, her character setting was shifted from his mother to his aunt. Through this, Director Madeline Sharafian heightened the dramatic emotional impact, allowing the audience to feel a deeper resonance when the unpresumed bond between aunt and nephew is validated during the climax.
              </p>
              <p>
                <strong className="text-[#839958] uppercase tracking-wide mr-1.5 font-bold">Morphological Contrast:</strong>
                As a professional soldier, Olga wears a matte, muted tan camouflage uniform and maintains a disciplined, rigid "straight up and down" vertical posture. This shows her complete assimilation into the base's monochromatic, geometric, and lifeless environment. She stands as a grounded, stable character who anchors reality and controls the situation, creating a stark contrast with her nephew, Elio.
              </p>
            </div>
          </div>

          {/* 3. Glordon */}
          <div className="space-y-4 p-6 rounded-lg bg-black/15 border-l-4 border-[#D3968C] border-y border-r border-[#D3968C]/10">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h4 className="text-xl font-extrabold uppercase text-[#F7F4D5] flex items-center gap-2">
                <span className="text-sm font-mono text-[#D3968C]">3.</span> Glordon
              </h4>
              <span className="px-2 py-0.5 text-[9px] font-black bg-[#D3968C]/20 text-[#D3968C] rounded tracking-widest uppercase">
                COSMIC companion
              </span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4D5]/85">
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Narrative Role:</strong>
                Elio’s first alien friend met in the Comuniverse, symbolizing the very first bond he forms outside of Earth.
              </p>
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Design Motif and Appearance:</strong>
                Inspired by the microscopic tardigrade, his appearance blends traits of a beluga whale, a seal, and a curled shrimp or caterpillar. He possesses a pudgy, thick-skinned, and squishy body type. The texture of his movement was realized through a sophisticated secondary jiggle simulation, mimicking the way a seal's blubber sloshes and ripples when it moves.
              </p>
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Structural Characteristics and Subversive Charm:</strong>
                He features a crustacean-like form with flexible joints and a unique structure that completely lacks any visual eye geometry (an eyeless face). Despite this, he is capable of morphological deformations to express facial expressions and shed tears. His mouth is lined with multiple rows of teeth and is designed with a flexible, sturdy rig capable of opening wide enough to swallow Elio whole. Although he is a successor destined to wear terrifying combat armor in the future, his delicate, human-like animation radiates a deeply endearing and lovable subversive charm.
              </p>
            </div>
          </div>

          {/* 4. Lord Grigon */}
          <div className="space-y-4 p-6 rounded-lg bg-black/15 border-l-4 border-[#839958] border-y border-r border-[#839958]/10">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h4 className="text-xl font-extrabold uppercase text-[#F7F4D5] flex items-center gap-2">
                <span className="text-sm font-mono text-[#839958]">4.</span> Lord Grigon
              </h4>
              <span className="px-2 py-0.5 text-[9px] font-black bg-[#839958]/20 text-[#839958] rounded tracking-widest uppercase">
                ALLIANCE OPPOSITION
              </span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4D5]/85">
              <p>
                <strong className="text-[#839958] uppercase tracking-wide mr-1.5 font-bold">Narrative Role:</strong>
                A member of the Comuniverse or a presence that incites conflict regarding integration. He creates narrative tension by becoming a subject of political voting within the Comuniverse, making it vital for the audience to perceive him as a threatening and fearsome character.
              </p>
              <p>
                <strong className="text-[#839958] uppercase tracking-wide mr-1.5 font-bold">Mechanics and Design Structure:</strong>
                Built on a quadrupedal base structure, his feet are encased in heavy plate armor, while his joints are exposed externally to allow bending. His thick torso is segmented so as not to impede the legs' range of motion, and he is modeled to geometrically support the center of gravity of a massive helmet equipped with four digital blue eyes and a red visor.
              </p>
              <p>
                <strong className="text-[#839958] uppercase tracking-wide mr-1.5 font-bold">Appendages and Silhouette Direction:</strong>
                He possesses multiple appendages, and his carapace is outfitted with a diverse array of alien technologies, prompting Art Director Matt Nolte to describe him as a "giant multi-use pocket knife." Despite these complex functions, his visual polish was heightened by grounding him in a graphically simple and clear form. Director of Photography Jordan Rempel engineered his threatening persona using minimal lighting, keeping the character shrouded in a dark, "mysterious silhouette."
              </p>
            </div>
          </div>

          {/* 5. Ooooo */}
          <div className="space-y-4 p-6 rounded-lg bg-black/15 border-l-4 border-[#D3968C] border-y border-r border-[#D3968C]/10">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h4 className="text-xl font-extrabold uppercase text-[#F7F4D5] flex items-center gap-2">
                <span className="text-sm font-mono text-[#D3968C]">5.</span> Ooooo
              </h4>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 text-[9px] font-black bg-[#D3968C]/20 text-[#D3968C] rounded tracking-widest uppercase">
                  LIQUID HARDWARE
                </span>
                <span className="hidden sm:inline px-2 py-0.5 text-[9px] font-black bg-black text-[#839958] rounded tracking-widest uppercase">
                  SDF Paradigm
                </span>
              </div>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4D5]/85">
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Characteristics:</strong>
                An alien lifeform shaped like a liquid supercomputer who joins Elio on his journey with a lively, chirpy personality.
              </p>
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Modeling Paradigm Innovation (SDF-Based Implicit Surface):</strong>
                This is the first character in Pixar history to completely abandon traditional mesh-based rigging. Instead of explicit geometry—which defines forms through fixed vertices and edge loops—it applies an implicit surface modeling technique based on mathematical Signed Distance Functions (SDF). This represents a modern advancement of Metaball technology adapted for contemporary pipelines, controlling the internal density of space via functions to achieve seamless morphing, splitting, and surface-sliding joint motions.
              </p>
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Contrast with Traditional Structures (Critique of the Bean Mouth Style):</strong>
                This character serves as a counterexample that overcomes the standardized details and limitations of the "Bean mouth" style. The traditional bean mouth style fails to reflect a character's true anatomical features (such as lip thickness, philtrum depth, and nasolabial folds) due to standardized facial topology and oversimplification, merely stretching into a rounded kidney-bean shape. In contrast, 'Ooooo' secures unprecedented flexibility: arms can slide freely anywhere along the torso, liquid masses can split apart or absorb other objects, and facial features can slide seamlessly along the surface. This was achieved by hierarchically arranging implicit primitives and operators.
              </p>
              <p>
                <strong className="text-[#D3968C] uppercase tracking-wide mr-1.5 font-bold">Rendering Pipeline and LOD Management Innovation:</strong>
                In a system where GLSL shader-based implicit surfaces are converted into density volumes via Houdini's VEX code—generating a brand-new isosurface mesh every single frame—the topological consistency between frames is completely lost. This makes it impossible to calculate velocity vectors for motion blur. To resolve this, the technical team modeled and embedded an invisible, topologically consistent Proxy Geometry (spherical objects) inside the character. Motion blur was successfully implemented by transferring the frame-to-frame offset vector values of this proxy object to the nearest points on the final, high-resolution inconsistent mesh. This achievement demonstrates sophisticated data structuring capabilities, separate-yet-combining the mesh responsible for visual detail from the functional proxy mesh responsible for physical computation and data integrity.
              </p>
            </div>
          </div>

          {/* 6. Questa */}
          <div className="space-y-4 p-6 rounded-lg bg-black/15 border-l-4 border-[#839958] border-y border-r border-[#839958]/10">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h4 className="text-xl font-extrabold uppercase text-[#F7F4D5] flex items-center gap-2">
                <span className="text-sm font-mono text-[#839958]">6.</span> Questa
              </h4>
              <span className="px-2 py-0.5 text-[9px] font-black bg-[#839958]/20 text-[#839958] rounded tracking-widest uppercase">
                PLANETARY LEADER
              </span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4D5]/85">
              <p>
                <strong className="text-[#839958] uppercase tracking-wide mr-1.5 font-bold">Personality and Narrative Significance:</strong>
                A character who visually and behaviorally embodies the core theme of "embracing cosmic diversity and difference." As the leader of planet Gom and a top-ranking member of the Comuniverse, she speaks with an exceptionally calm, stable voice and stands as an unwavering optimist dedicated to discovering the best within all living beings.
              </p>
              <p>
                <strong className="text-[#839958] uppercase tracking-wide mr-1.5 font-bold">Morphological Characteristics:</strong>
                Rejects any reliance on familiar humanoid or bipedal base meshes to forge completely new proportions and silhouettes. Standing at a massive 4.5 meters, she is shaped like a giant leafy seadragon. Her design features a broad, organic mantle that fuses the anatomical characteristics of various marine organisms, including manta rays, shrimp, leafy seadragons, and sea slugs (specifically the Spanish dancer).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- REFERENCES --- */}
      <section className="space-y-6 pt-6 border-t border-[#839958]/20">
        <h4 className="text-lg font-black uppercase text-[#839958] tracking-widest">
          References
        </h4>
        <ol className="list-decimal pl-5 space-y-2 text-xs text-[#F7F4D5]/70 font-mono">
          <li>Elio - Pixar Animation Studios, 3월 3, 2026에 액세스, <a href="https://www.pixar.com/elio" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">https://www.pixar.com/elio</a></li>
          <li>Elio | Pixar Wiki - Fandom, 3월 3, 2026에 액세스, <a href="https://pixar.fandom.com/wiki/Elio" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">https://pixar.fandom.com/wiki/Elio</a></li>
          <li>Elio (film) - Wikipedia, 3월 3, 2026에 액세스, <a href="https://en.wikipedia.org/wiki/Elio_(film)" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">https://en.wikipedia.org/wiki/Elio_(film)</a></li>
          <li>1 ELIO - Akamaihd.net, 3월 3, 2026에 액세스, <a href="https://lumiere-a.akamaihd.net/v1/documents/elio_project_profile_final_14-03-2025_91e6af47.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Project Profile (PDF)</a></li>
          <li>Elio release date moved to 2025 - Pixar Post Forum, 3월 3, 2026에 액세스, <a href="https://forum.pixarpost.com/post/elio-release-date-moved-to-2025-12765542" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Pixar Post Forum</a></li>
          <li>Disney / Pixar 'Elio': Meet The Cast and Characters, 3월 3, 2026에 액세스, <a href="https://www.youtube.com/shorts/R2pqfpMUVwc" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">YouTube Shorts</a></li>
          <li>Pixar Animation Studios Releases RenderMan 27, 3월 3, 2026에 액세스, <a href="https://renderman.pixar.com/news/pixar-animation-studios-releases-renderman-27" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">RenderMan 27 Releases</a></li>
          <li>'Elio' Quietly Shifts Release Date to June 20, 2025 - Pixar Post, 3월 3, 2026에 액세스, <a href="https://pixarpost.com/2025/02/elio-shifts-release-date.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Pixar Post Release Date</a></li>
          <li>Elio | Official Trailer - YouTube, 3월 3, 2026에 액세스, <a href="https://www.youtube.com/watch?v=ETVi5_cnnaE" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Watch Trailer</a></li>
          <li>Pixar's Pete Docter on Elio's New Directors, Story and Cast Changes, <a href="https://www.thewrap.com/elio-pixar-new-directors-story-cast-changes-pete-docter/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">The Wrap Interview</a></li>
          <li>How the look of 'Elio' changed during its journey to the screen, <a href="https://www.latimes.com/entertainment-arts/awards/story/2026-02-23/elio-disney-domee-shi-madeline-sharafian-animated-feature-oscars" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">LA Times Article</a></li>
          <li>Madeline Sharafian & Domee Shi - Elio Directors on Sci-Fi, <a href="https://www.youtube.com/watch?v=gEHcsz9rd5E" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Directors Interview</a></li>
          <li>NE Times - Disney Pixar Releases Sci-Fi Adventure Elio' | PDF - Scribd, <a href="https://fr.scribd.com/document/900744911/NE-Times-Disney-Pixar-Releases-Sci-Fi-Adventure-Elio" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Scribd Profile</a></li>
          <li>Disney-Pixar's 'Elio' Beams to Home Entertainment Platforms, <a href="https://www.animationmagazine.net/2025/08/disney-pixars-elio-beams-to-home-entertainment-platforms-in-aug-sept/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Animation Mag</a></li>
          <li>Pixar's Elio Cast & Character Guide - Screen Rant, <a href="https://screenrant.com/elio-pixar-movie-cast-character-guide/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Screen Rant Cast Guide</a></li>
          <li>Meet the Characters of Disney and Pixar's Elio - D23, <a href="https://d23.com/meet-the-characters-of-disney-and-pixars-elio/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">D23 Character Guide</a></li>
          <li>Category:Ambassadors - Pixar's Elio Wiki - Fandom, <a href="https://pixarselio.fandom.com/wiki/Category:Ambassadors" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Ambassadors Wiki</a></li>
          <li>Revisiting Pixar's 'Elio' With Directors, <a href="https://animationscoop.com/revisiting-pixars-elio-with-directors-madeline-sharafian-and-domee-shi/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Animation Scoop</a></li>
          <li>Behind the Magic of Elio: Interview with Mary Alice Drumm, Domee Shi & Madeline Sharafian, <a href="https://www.youtube.com/watch?v=nhPd83b2WqY" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Interview</a></li>
          <li>'Coco 2' in Development at Pixar | The Walt Disney Company, <a href="https://thewaltdisneycompany.com/news/coco-2-pixar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Coco 2 News</a></li>
          <li>How New Animation Technology Changed Pixar's Elio Production, <a href="https://www.slashfilm.com/1870712/pixar-elio-production-timeline-new-animation-technology-changes/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">SlashFilm Technical</a></li>
          <li>Stories | Pixar's USD Pipeline - Pixar's RenderMan, <a href="https://renderman.pixar.com/stories/pixars-usd-pipeline" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">RenderMan USD Pipeline</a></li>
          <li>Tech Specs - Pixar's RenderMan, <a href="https://renderman.pixar.com/tech-specs" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">RenderMan Specs</a></li>
          <li>Elio (soundtrack) - Wikipedia, <a href="https://en.wikipedia.org/wiki/Elio_(soundtrack)" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Wikipedia Soundtrack</a></li>
          <li>Elio (Original Motion Picture Soundtrack) - Album by Rob Simonsen - Apple Music, <a href="https://music.apple.com/us/album/elio-original-motion-picture-soundtrack/1819131838" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Apple Music Soundtrack</a></li>
          <li>'Elio' Soundrack Album Details | Film Music Reporter, <a href="https://filmmusicreporter.com/2025/06/19/elio-soundrack-album-details/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Soundtrack Details</a></li>
          <li>Movie Review: ‘Hoppers’, <a href="https://www.moviefone.com/news/movie-review-hoppers/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Hoppers Review</a></li>
          <li>DAF joins with Disney, Pixar to bring military family story to life in 'Elio' - Space Force, <a href="https://www.spaceforce.mil/News/Article-Display/Article/4225050/daf-joins-with-disney-pixar-to-bring-military-family-story-to-life-in-elio/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Space Force Article</a></li>
          <li>Interview: 'Elio' Directors Discuss the Pixar Way - Awards Radar, <a href="https://awardsradar.com/2025/06/20/interview-elio-directors-domee-shi-and-madeline-sharafian-alongside-producer-mary-alice-drumm-discuss-the-pixar-way/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Awards Radar</a></li>
          <li>Disney will now release Pixar's Elio on June 20, 2025 : r/boxoffice - Reddit, <a href="https://www.reddit.com/r/boxoffice/comments/1ipib7y/disney_will_now_release_pixars_elio_on_june_20/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Reddit BoxOffice Thread</a></li>
          <li>Disney and Pixar's Coco 2 is officially coming to theaters in 2029 : r/boxoffice - Reddit, <a href="https://www.reddit.com/r/boxoffice/comments/1jftznp/disney_and_pixars_coco_2_is_officially_coming_to/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Reddit Coco 2 Thread</a></li>
          <li>REVIEW: ‘Hoppers’ Proves Pixar is Back in Its Prime, <a href="https://nexuspointnews.com/review-hoppers-pixar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Nexus Point Review</a></li>
          <li>'Coco 2' in Development at Pixar, Set for 2029 Release in Theaters | THR News Video, <a href="https://www.dailymotion.com/video/x9ghxby" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">THR News Video</a></li>
          <li>The timing of the Coco 2 announcement bothers me to no end! : r/Pixar - Reddit, <a href="https://www.reddit.com/r/Pixar/comments/1jfxz8h/the_timing_of_the_coco_2_announcement_bothers_me/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Reddit Pixar Discussion</a></li>
          <li>Coco 2 Officially Announced By Disney - YouTube, <a href="https://www.youtube.com/watch?v=_QAXNBJZ7q4" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] select-text">Coco 2 Announcement</a></li>
        </ol>
      </section>
    </div>
  );
}
