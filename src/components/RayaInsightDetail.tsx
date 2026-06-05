import { Shield, User, Award, Table, Heart, FileText, ChevronRight } from "lucide-react";

export default function RayaInsightDetail() {
  return (
    <div className="space-y-12 text-[#F7F4D5] leading-relaxed">
      {/* Introduction Banner */}
      <div className="p-6 rounded-lg bg-[#839958]/10 border border-[#839958]/20 mb-8">
        <p className="text-sm font-medium text-[#D3968C]">
          An in-depth analysis of 3D modeling pipelines, ethnic anatomical representation, and functional design in Disney's fantasy epic.
        </p>
      </div>

      {/* PART I: CHARACTER NARRATIVE & RELATIONSHIP ANALYSIS */}
      <section className="space-y-8">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART I</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Character Narrative & Relationship Analysis: Raya vs. Sisu
          </h3>
        </div>

        {/* 1. Raya: The Lone Warrior */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D3968C]/20 flex items-center justify-center text-[#D3968C]">
              <span className="text-xs font-mono font-bold">1</span>
            </div>
            <h4 className="text-xl font-bold uppercase text-[#D3968C]">
              Raya: The Lone Warrior
            </h4>
          </div>

          <div className="p-6 rounded-lg bg-black/20 border border-[#D3968C]/20 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-[#D3968C]/10 text-xs font-mono">
              <div>
                <span className="text-[#839958] block mb-1">STATUS & ROLE</span>
                <span className="font-bold text-[#F7F4D5]">Daughter of the Chief of 'Heart' Land & Guardian of Dragon Gem</span>
              </div>
              <div>
                <span className="text-[#839958] block mb-1">PERSONALITY</span>
                <span className="font-bold text-[#F7F4D5]">Strong, Clever, Defensive, Sarcastic & Sharp-Witted</span>
              </div>
              <div>
                <span className="text-[#839958] block mb-1">KEY CONVICTION</span>
                <span className="font-bold text-[#F7F4D5]">"In a broken world, you can't trust anyone."</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#F7F4D5]/90">
              <p>
                Raya once dreamed of peace alongside her father, but after losing him to a tragic betrayal, she became a warrior fighting alone to save a fractured world. While she possesses outstanding martial arts skills, she shuts her heart to others and adopts a highly defensive posture due to a deep-seated distrust of the world.
              </p>
              
              <div className="space-y-2 pt-2">
                <h5 className="text-sm font-bold uppercase tracking-wider text-[#D3968C]">Costume & Attire: Psychological Reflection of Her Journey</h5>
                <p className="text-xs text-[#F7F4D5]/80">
                  Raya's costume is far more than a simple aesthetic choice; it reflects thorough historical research and the character's internal psychology.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                  <li className="bg-black/10 p-3 rounded border border-[#839958]/10">
                    <strong className="text-[#839958] block mb-1">Material & Humid Climate</strong>
                    Initially, leather was considered to emphasize her warrior status, but was excluded to reflect Southeast Asia's hot, humid climate. Instead, draping styles like the <span className="text-[#D3968C] font-semibold">Sabai</span> (top) and <span className="text-[#D3968C] font-semibold">Sampot</span> (pants) from Laos and Cambodia are used. Fabric knotting without stitches was fully realized via 3D cloth simulation.
                  </li>
                  <li className="bg-black/10 p-3 rounded border border-[#839958]/10">
                    <strong className="text-[#839958] block mb-1">Symbolism (Heart & Dragon)</strong>
                    Raindrop patterns (embossed textures) and dragon scale motifs are subtly hidden throughout her attire. The metal rings gracing her shoulders are shaped like a two-headed dragon, emphasizing her ancestral duty.
                  </li>
                  <li className="bg-black/10 p-3 rounded border border-[#839958]/10 sm:col-span-2">
                    <strong className="text-[#839958] block mb-1">Significance of Props: The Conical Hat</strong>
                    The iconic conical hat Raya wears is designed after the shape of a sacred stupa (pagoda), while simultaneously representing her deep psychological desire to hide herself away from others due to her distrust of the world.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Sisu: The Last Dragon */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#839958]/20 flex items-center justify-center text-[#839958]">
              <span className="text-xs font-mono font-bold">2</span>
            </div>
            <h4 className="text-xl font-bold uppercase text-[#839958]">
              Sisu: The Last Dragon
            </h4>
          </div>

          <div className="p-6 rounded-lg bg-black/20 border border-[#839958]/20 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-[#839958]/10 text-xs font-mono">
              <div>
                <span className="text-[#D3968C] block mb-1">STATUS & ROLE</span>
                <span className="font-bold text-[#F7F4D5]">The Last Dragon of Kumandra & Water Deity ('Naga')</span>
              </div>
              <div>
                <span className="text-[#D3968C] block mb-1">PERSONALITY</span>
                <span className="font-bold text-[#F7F4D5]">Eccentric, Humble, Quirky, Self-Deprecating & Humorous</span>
              </div>
              <div>
                <span className="text-[#D3968C] block mb-1">KEY CONVICTION</span>
                <span className="font-bold text-[#F7F4D5]">"The world is broken because we don't trust each other."</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#F7F4D5]/90">
              <p>
                Sisu represents the water-based deity <span className="text-[#839958] font-bold">Naga</span> rather than a Western, fire-breathing dragon. Far removed from legendary majesty, Sisu describes herself as a "C-grade student who got someone else to do her school project." She is the "Eternal Optimist" who believes in human goodness even when betrayed and disappointed.
              </p>
              
              <div className="space-y-3 pt-2">
                <h5 className="text-sm font-bold uppercase tracking-wider text-[#839958]">Costume & Attire: Dragon Trapped in a Human Frame</h5>
                <p className="text-xs text-[#F7F4D5]/80">
                  Her human form attire is a witty visual translation of the discomfort of a giant, fluid water dragon constrained inside a fragile human body:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-black/15 rounded border border-[#839958]/10">
                    <strong className="text-[#D3968C] text-xs uppercase block mb-1">Oversized Sleeves</strong>
                    By clothing her in garments far larger than her actual frame, the design accentuates Sisu's clumsiness, humor, and whimsical, carefree nature.
                  </div>
                  <div className="p-3 bg-black/15 rounded border border-[#839958]/10">
                    <strong className="text-[#D3968C] text-xs uppercase block mb-1">Fluid Blue Drapery</strong>
                    Maintaining the dragon-inspired blue color theme, wrap-style folds resembling a <span className="italic font-semibold">Sampot</span> or <span className="italic font-semibold">Dhoti</span> were implemented via simulated fabrics.
                  </div>
                  <div className="p-3 bg-black/15 rounded border border-[#839958]/10">
                    <strong className="text-[#D3968C] text-xs uppercase block mb-1">Metaphoric Details</strong>
                    Her messy, floating hair and distinct ornaments metaphorically express her dragon traits (such as her mane and scales) even in human form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Raya vs. Sisu */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D3968C]/20 flex items-center justify-center text-[#D3968C]">
              <span className="text-xs font-mono font-bold">3</span>
            </div>
            <h4 className="text-xl font-bold uppercase text-[#D3968C]">
              Raya vs. Sisu: Complementary Harmony
            </h4>
          </div>

          <div className="p-6 rounded-lg bg-[#D3968C]/5 border border-[#D3968C]/15 space-y-4 text-sm">
            <p>
              When it comes to the film's core theme of <strong className="text-[#D3968C]">"Trust,"</strong> Raya and Sisu appear to have completely opposite personalities and values. However, they share a complementary relationship where each fills the other's voids to complete the overarching narrative cycle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 font-mono text-xs">
              <div className="p-4 bg-black/35 rounded border border-[#839958]/30">
                <span className="text-[#839958] font-bold block mb-1">RAYA'S BEHAVIOR PATTERN</span>
                Runs in a <span className="text-[#D3968C] font-black uppercase">straight line</span> toward her goal. Represents realistic effort, vigilance, and physical combat agency.
              </div>
              <div className="p-4 bg-black/35 rounded border border-[#839958]/30">
                <span className="text-[#839958] font-bold block mb-1">SISU'S BEHAVIOR PATTERN</span>
                Takes <span className="text-[#839958] font-black uppercase">sideways detours</span>. Represents idealistic faith, redemption, and unconditional hope.
              </div>
            </div>
            <p className="text-xs text-[#F7F4D5]/80 leading-relaxed italic">
              On the surface, Raya seems to protect and guide Sisu. But internally, Raya is redeemed and healed through Sisu's hope and faith. Ultimately, the union of these two characters symbolizes the delicate harmony of <span className="text-[#D3968C] font-semibold">realistic effort (Raya)</span> and <span className="text-[#839958] font-semibold">idealistic faith (Sisu)</span> needed to heal a fractured world.
            </p>
          </div>
        </div>
      </section>

      {/* PART II: TECHNICAL ANALYSIS - SCULPTING & PIPELINE */}
      <section className="space-y-8 pt-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART II</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Anatomical Accuracy in Character Sculpting & Innovative Facial Modeling
          </h3>
        </div>

        <p className="text-sm md:text-base text-[#F7F4D5]/90">
          Walt Disney Animation Studios fundamentally re-examined the existing 3D character modeling pipeline and introduced innovative technical solutions in the process of visualizing the cultural heritage of Southeast Asia in <span className="text-[#D3968C] font-semibold italic">Raya and the Last Dragon</span>.
        </p>

        {/* Eye Tech Table */}
        <div className="space-y-4">
          <h4 className="text-lg font-black uppercase text-[#D3968C] tracking-wide flex items-center gap-2">
            <span className="text-xs">◼</span> Facial Topology Reconstruction via Eye-Tech Process
          </h4>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80">
            The most pivotal achievement in Raya’s facial modeling is the physically plausible realization of the monolid and the upper eyelid fat layer (referred to as 'eye meat'), which are unique structural characteristics of Southeast Asian eyes. This Eye-Tech process completely reconstructed span density to avoid geometric volume collapse when rigging artists control eye movements:
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#839958]/30">
            <table className="w-full text-left text-xs text-[#F7F4D5] border-collapse font-sans">
              <thead>
                <tr className="bg-[#839958]/20 border-b border-[#839958]/30">
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[15%]">Element</th>
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[40%]">Conventional Disney Modeling (Frozen 2)</th>
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[45%]">Raya's Eye-Tech Process</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#839958]/10 bg-black/20">
                <tr>
                  <td className="p-3 font-mono font-bold text-[#D3968C]">Orbit Structure</td>
                  <td className="p-3 text-[#F7F4D5]/80">Emphasizes deep sockets and distinct levator palpebrae superioris lines. Optimized for Western skeletal structures.</td>
                  <td className="p-3 text-[#F7F4D5]/90 font-medium">Implements flat eyelids and upper eyelid fat layers ('eye meat') by studying volume shifts of the fat layer.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-[#D3968C]">Span Density</td>
                  <td className="p-3 text-[#F7F4D5]/80">Applies standardized circular loop topology with uniform density concentric to the eye.</td>
                  <td className="p-3 text-[#F7F4D5]/90 font-normal">Repopulates density for volume preservation, completely preventing geometry intersection/overlapping during blinking.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-[#D3968C]">Tear Ducts</td>
                  <td className="p-3 text-[#F7F4D5]/80">Simplified treatment using textures, baked normal maps, or custom eye filters/shaders.</td>
                  <td className="p-3 text-[#F7F4D5]/90 font-medium">Physical geometry modeled directly in 3D for the first time in Disney history, expressing actual refraction and tear moisture.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-[#D3968C]">Eyelid Mechanism</td>
                  <td className="p-3 text-[#F7F4D5]/80">Deformation centered around a hard, sharp crease line.</td>
                  <td className="p-3 text-[#F7F4D5]/90 font-medium">Complex skin unfolding and pressure-based expansion topology that handles the generation and disappearance of micro-wrinkles.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#F7F4D5]/70 italic leading-relaxed">
            * Technical Modeler Insight: To capture the unique characteristic of monolids—where the skin slides down smoothly over the eyelid rather than creasing—the modeler must incorporate subtle fat ridges into the geometry right from the high-resolution sculpting stage, and establish a retopology strategy to efficiently convert this into a low-poly mesh.
          </p>
        </div>

        {/* Tears and cry geo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-black/30 border border-[#839958]/20 space-y-3">
            <span className="text-[9px] font-black uppercase text-[#839958] tracking-widest block bg-[#0A3323] px-2 py-0.5 w-max rounded">
              TEAR GEOMETRY
            </span>
            <h5 className="text-base font-extrabold uppercase text-[#F7F4D5]">
              Modeling Tear Ducts for Emotional Fidelity
            </h5>
            <p className="text-xs text-[#F7F4D5]/85 leading-relaxed">
              Modeling the tear ducts as actual 3D geometry allowed the rendering engine to calculate realistic glass-like refraction and wet highlights during camera close-ups. This created unmatched emotional expression and avoided the flat "black shadow" looks of older texture-only rendering pipelines.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/30 border border-[#D3968C]/20 space-y-3">
            <span className="text-[9px] font-black uppercase text-[#D3968C] tracking-widest block bg-[#0A3323] px-2 py-0.5 w-max rounded">
              CRY GEO ARCHITECTURE
            </span>
            <h5 className="text-base font-extrabold uppercase text-[#F7F4D5]">
              "Cry Geo" Simulation Guideline
            </h5>
            <p className="text-xs text-[#F7F4D5]/85 leading-relaxed">
              A specialized mesh layer called 'Cry Geo' was modeled to fit within the microscopic gaps between the eyeball and the eyelids. Normally hidden or compressed, this layer acts as a physical guide for fluid dynamics when tears are triggered. It proves that modern 3D assets must be designed from the start to serve downstream simulation pipelines rather than just static rendering.
            </p>
          </div>
        </div>

        {/* Subdivision Surface Logic & Naga Sisu sculpt */}
        <div className="space-y-6 pt-4">
          <h4 className="text-lg font-black uppercase text-[#839958] tracking-wide flex items-center gap-2">
            <span className="text-xs">◼</span> Sculpting Organic Beings & Subdivision Surface Logic
          </h4>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80">
            Unlike Western dragons, Sisu has a long, highly flexible serpentine body inspired by Southeast Asian Naga mythology. To prevent severe volume loss when Sisu's body twisted and bent, modelers placed complementary edge loops carefully while utilizing advanced Subdivision Surface algorithms:
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#839958]/30">
            <table className="w-full text-left text-xs text-[#F7F4D5] border-collapse font-sans">
              <thead>
                <tr className="bg-[#839958]/20 border-b border-[#839958]/30">
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[15%]">Component</th>
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[35%]">Design Motif & Creature Reference</th>
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[50%]">Modeling / Rendering Technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#839958]/10 bg-black/20 font-mono">
                <tr>
                  <td className="p-3 font-sans font-bold text-white text-xs">Head / Mane</td>
                  <td className="p-3 text-[#F7F4D5]/80">Lion's mane mixed with fluffy underwater corals.</td>
                  <td className="p-3 text-[#F7F4D5]/90">Sculpted high-density hair-root geometry. Rigorous topology built on the scalp where hair simulations and curves attach organically.</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-white text-xs">Serpentine Body</td>
                  <td className="p-3 text-[#F7F4D5]/80">Serpentine water Naga frame (mythological water deity).</td>
                  <td className="p-3 text-[#F7F4D5]/90 text-[#D3968C] font-semibold">Subdivision volume preservation rigging. Carefully balanced edge rings prevent the mesh from pinched "candy-wrapper" twisting during sharp bends.</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-white text-xs">Scales / Fins</td>
                  <td className="p-3 text-[#F7F4D5]/80">Iridescent fish scales and stingray textures.</td>
                  <td className="p-3 text-[#F7F4D5]/90">PBR texture shading in Hyperion Renderer with Subsurface Scattering (SSS). Micro-facets sculpted individually and baked onto normal maps for light refraction.</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-white text-xs">Limbs & Claws</td>
                  <td className="p-3 text-[#F7F4D5]/80">Muscle anatomy and powerful claws of a tiger.</td>
                  <td className="p-3 text-[#F7F4D5]/90">High-density clean skeletal connection topo. Special emphasis on shoulder and hip topology zones to allow transition from quadrupedal locomotion to serpentine flight.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-lg bg-black/15 border-l-4 border-[#D3968C] border-y border-r border-[#D3968C]/10 space-y-2">
            <h5 className="text-base font-extrabold uppercase text-[#F7F4D5] flex items-center justify-between">
              Oral Modeling: Projecting Voice Actor Awkwafina's Expressions
              <span className="px-2 py-0.5 text-[9px] font-black bg-[#D3968C]/20 text-[#D3968C] rounded uppercase tracking-wider">CREATIVE FUSHION</span>
            </h5>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/85">
              Sisu's facial sculpting directly incorporates the actual physical features of her voice actress, Awkwafina. Her distinct smile and unique dental structure (specifically her expressive, pre-orthodontic teeth layout) were directly mapped onto Sisu's oral cavity model to secure realistic exposure of gums, teeth, and vocal anatomy during dialogue. This highlights that asset modeling must anticipate rigging deformations and represent realistic human nuances.
            </p>
          </div>
        </div>
      </section>

      {/* PART III: HARD SURFACE & FUNCTIONAL DESIGN */}
      <section className="space-y-8 pt-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART III</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Hard Surface & Functional Costume Modeling Analysis
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kris Sword */}
          <div className="p-6 rounded-lg bg-black/25 border border-[#839958]/20 space-y-4">
            <h4 className="text-lg font-black uppercase text-[#F7F4D5] border-b border-[#839958]/10 pb-2">
              ◼ Mechanical Mechanism of the Expandable Kris Sword
            </h4>
            <p className="text-xs text-[#F7F4D5]/80">
              The sacred, wavy <span className="text-[#D3968C] font-extrabold">Kris</span> weapon is reimagined as an expandable mechanical blade. 3D Artists had to treat the asset as a hierarchical, segmented system:
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <span className="text-[#D3968C] mt-1 shrink-0">•</span>
                <span><strong>Segment Hierarchy:</strong> Each block has an independent pivot point, letting the rigging artists control the sword like an accordion or whip.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D3968C] mt-1 shrink-0">•</span>
                <span><strong>Internal Core Modeling:</strong> When expanded, internal cables and steel wires are exposed, requiring complete interior cage modeling of hard-surface details.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D3968C] mt-1 shrink-0">•</span>
                <span><strong>Damascus Pamor details:</strong> Combined high-res sculpted geometry on the hilt with clever PBR texture mapping to represent standard Indonesian metallurgical patterns.</span>
              </li>
            </ul>
          </div>

          {/* Ballooned Legs Proxy */}
          <div className="p-6 rounded-lg bg-black/25 border border-[#D3968C]/20 space-y-4">
            <h4 className="text-lg font-black uppercase text-[#F7F4D5] border-b border-[#D3968C]/10 pb-2">
              ◼ Costume Layering & "Ballooned Legs" Simulation Hack
            </h4>
            <p className="text-xs text-[#F7F4D5]/80">
              Raya's draping clothes (Sabai and Dhoti) require robust interaction simulations. To protect Boun's puffy pants from squeezing together or getting trapped during fast movements, technical artists designed a clever solution:
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <span className="text-[#839958] mt-1 shrink-0">•</span>
                <span><strong>Inflated Proxy Geometry:</strong> Modeler generates an invisible, thicker, inflated duplicate of character's limbs underneath the cloth layer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#839958] mt-1 shrink-0">•</span>
                <span><strong>Collision Buffer:</strong> The cloth simulator collides against this inflated proxy, keeping the wide, loose "balloon" look of the pants stable during high-stress maneuvers, without collapsing or folding in.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#839958] mt-1 shrink-0">•</span>
                <span><strong>Technical Rigging:</strong> Proves that creating technical, invisible proxy sheets is as crucial as modeling the visually polished outer mesh.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Environmental Sculpting - Kumandra 5 regions */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#839958]/20 flex items-center justify-center text-[#839958]">
              <span className="text-xs font-mono font-bold">4</span>
            </div>
            <h4 className="text-xl font-bold uppercase text-[#D3968C]">
              Environmental Sculpting and visual scale of Kumandra's Five Realms
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80">
            Each of Kumandra's five provinces — Heart, Tail, Talon, Spine, and Fang — is anchored to a distinct mathematical and stylistic shape language:
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#839958]/30">
            <table className="w-full text-left text-xs text-[#F7F4D5] border-collapse font-sans">
              <thead>
                <tr className="bg-[#839958]/25 border-b border-[#839958]/30">
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[15%]">Region</th>
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[25%]">Shape Language</th>
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[35%]">Modeling Focus / Pipelines</th>
                  <th className="p-3 font-bold uppercase text-[#D3968C] w-[25%]">Visual atmosphere</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#839958]/10 bg-black/20 font-mono text-[11px]">
                <tr>
                  <td className="p-3 font-sans font-bold text-[#D3968C] text-xs">Heart</td>
                  <td className="p-3 text-[#F7F4D5]/80">Circles, soft rain curves, round hills.</td>
                  <td className="p-3 text-[#F7F4D5]/90">Organic cave structures with dragon motifs sculpted directly.</td>
                  <td className="p-3 text-[#839958]">Mist, moisture, sacred water circles.</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-[#D3968C] text-xs">Tail</td>
                  <td className="p-3 text-[#F7F4D5]/80">Rough weathered textures, dry sharp lines.</td>
                  <td className="p-3 text-[#F7F4D5]/90">Hard-surface desert assets erosion and splintering wood.</td>
                  <td className="p-3 text-[#839958]">Warm, dry sand, desolate sunbeams.</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-[#D3968C] text-xs">Talon</td>
                  <td className="p-3 text-[#F7F4D5]/80">High density, overlap, liquid flow layout.</td>
                  <td className="p-3 text-[#F7F4D5]/90">Built 63 standardized Master sets. Instanced for colossal density.</td>
                  <td className="p-3 text-[#839958]">Vibrant, cramped neon docks, specular puddles.</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-[#D3968C] text-xs">Spine</td>
                  <td className="p-3 text-[#F7F4D5]/80">Heavy vertical pillars, monolithic columns.</td>
                  <td className="p-3 text-[#F7F4D5]/90">Towering bamboo groves and heavyweight wooden log bridges.</td>
                  <td className="p-3 text-[#839958]">Snowy, dark, cold pine silhouettes.</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-[#D3968C] text-xs">Fang</td>
                  <td className="p-3 text-[#F7F4D5]/80">Crisp geometry, symmetric grids, pristine.</td>
                  <td className="p-3 text-[#F7F4D5]/90">White marble fortresses, sharp angled staircases, symmetrical aqueducts.</td>
                  <td className="p-3 text-[#839958]">Regal, clean, militaristic marble reflections.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#F7F4D5]/70 italic leading-relaxed">
            * Modeler Highlight: Talon's floating market utilizes 63 master design packages. Instead of building each boat or dock uniquely, they are instanced and rotated dynamically in 3D space to run fluidly on standard rendering pipelines.
          </p>
        </div>

        {/* Visual Language + Tuk Tuk + Crowd simulation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-mono">
          <div className="p-4 rounded-lg bg-black/25 border border-[#839958]/20 space-y-2">
            <span className="text-[#D3968C] font-black uppercase">TACTICAL CAMERA WORK</span>
            <p className="text-[#F7F4D5]/80">
              <strong>Trust vs. Distrust:</strong> When characters trust each other, they are filmed with warm colors and shallow depth of field (blurry backgrounds). When distrust dominates, they employ sharp deep lenses, wide perspective angles, and sharp silhouettes, emphasizing hostile distance and jagged landscapes.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-black/25 border border-[#839958]/20 space-y-2">
            <span className="text-[#D3968C] font-black uppercase">TUK TUK'S DUAL ASSET CRANK</span>
            <p className="text-[#F7F4D5]/80">
              To resolve the heavy deformation when rolling, technical artists applied a **Dual Asset Strategy**. They modeled and optimized two separate rigs: a normal walk-cycle rig and a bespoke "Rolled-sphere" rig. This fully bypassed severe bone crushing in translation and kept the perfect sphere silhouette intact.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-black/25 border border-[#839958]/20 space-y-2">
            <span className="text-[#D3968C] font-black uppercase">CROWD ANISOTROPIC MODELING</span>
            <p className="text-[#F7F4D5]/80">
              Swarming beetles and dragons utilized mathematically driven proxy bounding box parameters to avoid computing heavy meshes. Bounding envelopes are represented as mathematically precise ellipsoids using the anisotropic distance equation, ensuring particle simulations run collide calculations instantly without clipping.
            </p>
          </div>
        </div>
      </section>

      {/* --- REFERENCES --- */}
      <section className="space-y-6 pt-6 border-t border-[#839958]/20">
        <h4 className="text-lg font-black uppercase text-[#839958] tracking-widest">
          References
        </h4>
        <ol className="list-decimal pl-5 space-y-2 text-xs text-[#F7F4D5]/70 font-mono select-text">
          <li>라야와 마지막 드래곤: 3D 조형 분석</li>
          <li>A Matter of Trust | Computer Graphics World, <a href="https://www.cgw.com/Publications/CGW/2021/April-May-June-2021/A-Matter-of-Trust.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] underline">View Link</a></li>
          <li>Raya and the Last Dragon - Code &amp; Visuals, <a href="https://blog.yiningkarlli.com/2021/03/raya-and-the-last-dragon.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] underline">View Link</a></li>
          <li>How Disney Made All-New 'Eye-Tech' for Raya, Youtube, <a href="https://www.youtube.com/watch?v=6b_jbBnIpqk" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] underline">Watch Link</a></li>
          <li>Realistic Eye Motion Using Procedural Geometric Methods, Walt Disney Animation, <a href="https://media.disneyanimation.com/uploads/production/publication_asset/66/asset/realisticEyeMotion.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] underline">Research PDF</a></li>
          <li>Modeling guide to face topology - ArtStation, <a href="https://www.artstation.com/blogs/thundercloudstudio/AgRyn/modeling-guide-to-face-topology" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] underline">ArtStation Link</a></li>
          <li>Detailed Spatio-Temporal Reconstruction of Eyelids - Disney Research, <a href="https://la.disneyresearch.com/publication/eyelidreconstruction/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] underline">Spatio-Temporal Eyelids</a></li>
          <li>The Atmosphere of Raya and the Last Dragon - ACM, <a href="https://history.siggraph.org/wp-content/uploads/2022/06/2021-Talks-Bryant_The-Atmosphere-of-Raya-and-the-Last-Dragon.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] underline">PDF Document</a></li>
          <li>Disney Animation Process - Raya and the Last Dragon, <a href="https://disneyanimation.com/process-raya/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] underline">Official Process Page</a></li>
          <li>Subdivision Surfaces in Character Animation - Pixar Graphics, <a href="https://graphics.pixar.com/library/Geri/paper.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#D3968C] underline">Pixar Whitepaper</a></li>
        </ol>
      </section>
    </div>
  );
}
