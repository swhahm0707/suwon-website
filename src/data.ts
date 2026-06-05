import { Project, Insight } from "./types";

export const projectsData: Project[] = [
  {
    id: "soomgyul",
    title: "SoomGyul",
    category: "AI+3D Hybrid Modeling",
    description: "A pioneering hybrid workflow that seamlessly fuses the fluid probability of node-based AI with the rigid precision of traditional 3D manual sculpting.",
    imageUrl: "/soomgyul_g/soomgyul.png",
    specs: {
      polygons: "~185,000 tris",
      textures: "4K PBR (Diff, Normal, Rough, Metal, SSS)",
      pipeline: "Concept AI generation -> Topological Retopology -> High-poly sculpting -> Substance Look-dev",
      softwareUsed: ["Blender", "Stable Diffusion", "ComfyUI", "ZBrush", "Substance Painter"]
    },
    backgroundStory: "SoomGyul (meaning 'gentle breath' in Korean) was born out of a desire to bridge the gap between algorithmic speed and artist-authored precision. Generative AI tools are incredible at churning out endless silhouettes, but they lack topological structure, anatomical correctness, and rendering control. This project demonstrates a pipeline that extracts latent features from custom Stable Diffusion control nodes, uses them to formulate sculptural guides, and then translates them into an production-ready 3D character mesh with optimized quad layout suitable for cinematic animation.",
    breakdownSteps: [
      {
        title: "01. Prompt & Latent Exploration",
        description: "Utilized ComfyUI nodes running Stable Diffusion SDXL with custom LoRAs to generate multiple high-resolution concept iterations focusing on organic cyberpunk patterns and Korean heritage garments."
      },
      {
        title: "02. Sculpting & Silhouette Extraction",
        description: "Brought the approved concepts into ZBrush for dynamesh blockouts. Restructured the facial anatomy to match precise East Asian proportions while maintaining the ethereal, slightly surreal look of the AI concept."
      },
      {
        title: "03. Retopology & UV Unwrap",
        description: "Executed a complete manual retopology pass in Blender to ensure animation-friendly edge flow around eyes, mouth, and joints. Generated multi-tile UV layouts to hold maximum resolution for closeup facial rendering."
      },
      {
        title: "04. Subsurface Scattering (SSS) Shading",
        description: "Designed a multi-layered skin shader inside Arnold and Cycles. Balanced epidermal, dermal, and backscattering weights to capture a lifelike translucent skin look, especially around the ears and nose tip."
      }
    ]
  },
  {
    id: "prototypes",
    title: "Prototypes",
    category: "AI Character",
    description: "An artistic inquiry into algorithmic originality, treating AI not as a passive rendering brush, but as an active, co-creative persona.",
    imageUrl: "/prototypes_g/prototypes_main.png",
    specs: {
      polygons: "~120,000 tris",
      textures: "2K Specular-Glossiness / PBR Materials",
      pipeline: "Prompt orchestration -> Node-based composition -> Sculpt-assist overlay -> Real-time display",
      softwareUsed: ["Midjourney", "Magnific AI", "ZBrush", "Marmoset Toolbag", "Substance 3D"]
    },
    backgroundStory: "With the Prototypes series, the focus shifted from a technical reconstruction pipeline to an intellectual dialogue. Can we assign creative parameters to an LLM, use it to prompt an image generator, and then translate that purely computational result into a physical-feeling real-time 3D model? These models represent 'algorithmic artifacts' — characters designed with shapes that are hard to conceive through manual drawing but hold a eerie, mathematical harmony.",
    breakdownSteps: [
      {
        title: "01. Textual Personality Seeds",
        description: "Fed various psychological profiles and art history doctrines into Claude to extract dense prompts describing baroque sculptures merged with computer servers."
      },
      {
        title: "02. Generative Synthesis",
        description: "Ran these prompts inside restricted latent spaces to obtain high-resolution textures and orthographics of futuristic biological heads wrapped in structural brass and ceramics."
      },
      {
        title: "03. Interactive 3D Enhancement",
        description: "Mapped generated displacement heights directly onto primitive shapes in Marmoset Toolbag, blending manual hard-surface pieces with procedural noise to bring the digital portraits to life."
      }
    ]
  },
  {
    id: "zanmang-loopy",
    title: "Zanmang Loopy",
    category: "3D CHARACTER MODELING",
    description: "These projects involved producing 3D character assets and props for Zanmang Loopy's official music video and New Balance collaboration campaign, seamlessly blending stylized comedic forms and contemporary streetwear with the character's iconic global brand identity.",
    imageUrl: "/zLoopy_g/loopy_main1.png",
    specs: {
      polygons: "~120,000 tris (optimized)",
      textures: "4K UDIMs & PBR work",
      pipeline: "Commercial Character Modeling -> Fur Groom Preservation -> Clothing Architecture -> Campaign Release",
      softwareUsed: ["Maya", "ZBrush", "Substance Painter", "Arnold"]
    },
    backgroundStory: "Zanmang Loopy represents a multifaceted approach to modern character branding across YouTube media and international commercial advertisements. This work includes modeling complex assets for Loopy's official MV, engineering dynamic props that allow extreme stretching, and translating streetwear aesthetics onto the iconic character for collaborative campaigns like New Balance.",
    breakdownSteps: [
      {
        title: "01. 'Apricot-Apron' & 'Plump' Architectures",
        description: "Executing detailed modeling for specialized hair assets, custom clothing meshes, accessories, and organic body sculpts preserves Loopy's iconic cute aesthetic under extreme deformations."
      },
      {
        title: "02. Volumetric Hair Texturing Density",
        description: "Implemented a hybrid texturing strategy partially colouring the scalp mesh with the exact hair hue to eliminate voids and empty visual pockets."
      },
      {
        title: "03. Form-Fitting Streetwear & Uniforms",
        description: "Designed bespoke sports garments and detailed uniform meshes with dynamic hair roller properties tailored to Loopy's unconventional proportions."
      },
      {
        title: "04. Fur Groom & Shading Preservation",
        description: "Successfully carried out deep skin tone adjustments while maintaining the master file's delicate micro-fur shaders and belly groom distribution."
      }
    ]
  },
  {
    id: "hit-racer",
    title: "HitRacer",
    category: "3D CHARACTER MODELING & FACIAL BLENDSHAPE",
    description: "In the full-3D racing animation HitRacer, co-produced by Locus Studios, my primary role focused on 3D character modeling and developing intricate facial blend shapes for its distinctive avatars.",
    imageUrl: "/hitracer_g/hitracer_main.png",
    specs: {
      polygons: "~140,000 tris (optimized)",
      textures: "4K PBR Workflow",
      pipeline: "Production Mesh Topology -> Facial Blend Shapes -> Hair Modeling -> SBS Delivery",
      softwareUsed: ["Maya", "ZBrush", "Substance Painter", "Arnold"]
    },
    backgroundStory: "HitRacer is a full-3D virtual racing animation co-produced by Locus Studios, Joung Ei&C, and Westo, broadcasted across SBS and premier OTT networks. Within this dynamic stadium-racing universe, my primary mandate centered on 3D character modeling and intricate facial blend shape development. This involved engineering digital anatomies, hand-crafting optimized polygon hair, and designing resilient edge loop models fit for high-intensity movement.",
    breakdownSteps: [
      {
        title: "01. Roster Modeling & Communal Acclaim",
        description: "Lead character modeling and expression styling for the show's dynamic character line-up. Successfully modeled the Emma, Toni, and Suho rosters, including specialized polygon hair styles that earned formal recognition of excellence from Locus Studios."
      },
      {
        title: "02. High-Efficiency Topology for Kinematics",
        description: "Engineered ultra-clean edge flows precisely optimized for animators and riggers. Reduced computational polygon bulk to maintain performance across virtual racetracks while perfectly maintaining volumetric character proportions."
      },
      {
        title: "03. Eyelid Alignment & Distortion Safety",
        description: "Perfected convergence vertices to enable flawless, natural blinking arcs. Conducted meticulous loop isolation between eyebrows, eyes, and mouth zones to prevent unwanted texture bleed or joint deformation."
      },
      {
        title: "04. Intra-Oral Mesh Sync & Anatomy",
        description: "Handled advanced spatial planning of teeth, gums, and tongue models to prevent mesh intersections during active dialogue sequences, maintaining believable anatomy across extreme poses."
      }
    ]
  },
  {
    id: "newt-niffler",
    title: "NEWT & NIFFLER",
    category: "Cinematic Character Modeling",
    description: "A comprehensive organic pipeline that translates extensive reference analysis into high-fidelity anatomical sculpting and advanced digital grooming.",
    imageUrl: "/newtNiffler_g/newtNiffler_main.png",
    specs: {
      polygons: "~380,000 tris (inc. hair curves)",
      textures: "8K UDIM multi-tiles (Mari / Substance)",
      pipeline: "Anatomical sculpt -> High-frequency detailing -> XGen Grooming -> Arnold Cinematic Render",
      softwareUsed: ["Maya", "ZBrush", "Marvelous Designer", "Substance Painter", "Arnold Renderer", "XGen"]
    },
    backgroundStory: "As a major fan of the Wizarding World, recreating Eddie Redmayne's Newt Scamander together with the iconic Niffler was a milestone project. The goal was to reach a level of detail acceptable for a high-end film production. This meant sculpting minuscule skin pores, hand-placing dozens of individual clothing stitches, and designing a complex guide-curve groom for the Niffler's glossy coat and Newt's messy, windswept hair.",
    breakdownSteps: [
      {
        title: "01. Sculpting & Texturing Anatomy",
        description: "Anatomically detailed portrait sculpting in ZBrush utilizing HD Geometry. Pore metadata was painted manually and layered with micro-displacements from high-resolution scan resources."
      },
      {
        title: "02. Clothing Simulation in Marvelous Designer",
        description: "Patterned and simulated Newt's heavy wool overcoat, waistcoat, and trousers to capture realistic folds, sagging under gravity, and interactions with the character's body."
      },
      {
        title: "03. XGen Hair Grooming",
        description: "Authored over 8 distinct hair descriptions using Maya's interactive grooming tools. Configured custom noise, clumping, and curl expressions to realistically simulate the fuzzy Niffler fur and human hair fibers."
      },
      {
        title: "04. High-End Look Development",
        description: "Set up complex Arnold shaders featuring coat-sheen attributes, custom fabric presets, and multi-layered eyeball meshes with physical refractive glass structures."
      }
    ]
  },
  {
    id: "lafrance-truck",
    title: "1927 American LaFrance Fire Truck",
    category: "3D Hard-Surface Modeling",
    description: "A rigorous production workflow tracing the evolution of cinematic assets from raw hard-surface look-development to seamless environmental integration.",
    imageUrl: "/firetruck_g/firetruck_main.png",
    specs: {
      polygons: "~1,450,000 tris",
      textures: "4K UDIMs (24 individual tiles)",
      pipeline: "Blueprint drafting -> Sub-D modeling -> Mechanical rigging -> UE5 Real-time Cinematic Look-dev",
      softwareUsed: ["Maya", "Substance Painter", "Unreal Engine 5", "Marmoset Toolbag", "RizomUV"]
    },
    backgroundStory: "Deep mechanical precision is just as beautiful as creature modeling. This project involved researching architectural blueprints, vintage engine reference photographs, and actual mechanical schematics of the 1927 American LaFrance Fire Engine. Every bolt, piston, steering fluid rod, and pneumatic tank was modeled with strict Subdivision-Surface (Sub-D) topology standards, ensuring perfect specular reflections and zero mesh pinching.",
    breakdownSteps: [
      {
        title: "01. Reference Gathering & Orthographics",
        description: "Sourced historical technical sheets and photographed real vintage museum trucks. Configured scaled orthographic viewports in Maya to align chassis structures precisely."
      },
      {
        title: "02. Sub-D Hard-Surface Modeling",
        description: "Modeled complex curved shapes like the rounded hood, wheel mudguards, and engine valves using clean edge loops, boundary creases, and support loops for consistent subdivision smoothing."
      },
      {
        title: "03. UDIM Texturing Flow",
        description: "Laid out 24 UDIM tiles to maintain high pixel density. Hand-painted weathering, paint chipping on sheet metal, oily residue on brass valves, and micro-rust on cast-iron springs in Substance Painter."
      },
      {
        title: "04. UE5 Integration & Volumetric Lighting",
        description: "Imported the heavy mesh into Unreal Engine 5 via Nanite. Crafted a moody, dusty 1920s vehicle garage environment with volumetric fog, dusty particles, and metallic ray-traced shadows."
      }
    ]
  }
];

export const insightsData: Insight[] = [
  {
    id: "beyond-the-polygon",
    numberString: "08",
    title: "Beyond the Polygon: What Impressionism and AI Teach Us About the Architecture of Imagination",
    category: "Culture & Philosophy",
    date: "May 2026",
    readingTime: "6 min read",
    content: "A reflection inspired by the Nowon Cultural Foundation's exhibition, 'Masters of Impressionism: Monet, Renoir, Van Gogh, and Cézanne,' exploring creative freedom beyond the mesh."
  },
  {
    id: "art-of-subtraction",
    numberString: "07",
    title: "The Art of Subtraction: What a 19th-Century Masterpiece Teaches Us About the Age of AI",
    category: "Culture & Philosophy",
    date: "April 2026",
    readingTime: "5 min read",
    content: `A reflection on Chusa Kim Jeong-hui's Sehando (Winter Scene) and what the value of radical subtraction teaches creators coexisting with prompt-driven, automated tools.`
  },
  {
    id: "elio-space-animation",
    numberString: "06",
    title: "Elio: Space in Animation & Character Analysis",
    category: "Animation Analysis",
    date: "March 2026",
    readingTime: "4 min read",
    content: `### Spatial Rhetoric in Next-Gen Animation

Pixar's *Elio* represents a masterful experiment in staging scale, vastness, and cosmic Isolation. As character designers and hard-surface modelers, we often focus on the close-up: the skin pores, the fabric weaves, the subtle facial expressions. However, *Elio* forces us to reckon with **spatial styling** — how a character's proportions must respond to the massive, geometric architecture they occupy.

#### The Miniature Hero in a Colossal Universe
Elio's character silhouette is distinctly asymmetrical, carrying an eye patch and oversized clothing. In the vast, architectural chambers of the global cosmic organization, his small, off-kilter design acts as a high-contrast focal point. The physical scale of the background meshes are intentionally gargantuan, styled with rounded, organic-brutalist curves that look retro-futuristic.

##### Key Production Takeaways:
1. **Contrast of Complexity:** The environments use clean, minimalist surfaces with immense scale, while Elio features high-density, chaotic geometries (wrinkles, messy hair, straps). This directs the eye immediately.
2. **Atmospheric Depth:** Relying heavily on deep-blue volumetric fog to separate planes. When modeling assets, creating tiny gaps between adjacent mechanical structures allows light to bleed through, selling the sense of colossal scale.
3. **Focal Length & Scale:** Rendering characters inside vast structures requires wide-angle lens simulations (18mm-24mm) which introduce perspective distortion. Character topology must be robust enough to look natural even under heavy camera stretching.`
  },
  {
    id: "raya-last-dragon",
    numberString: "05",
    title: "Analysis of Raya and the Last Dragon",
    category: "Animation Analysis",
    date: "March 2026",
    readingTime: "5 min read",
    content: `### Cultural Aesthetics & Material Look-Dev in Raya

Disney's *Raya and the Last Dragon* stands as an absolute masterclass in Southeast Asian-inspired material study. The look-development of this film is highly celebrated among texture artists because of how it handles **organic weathering** — how humidity, water spray, and dry desert wind affect fabrics, wood, and metallic finishes.

#### Five Lands, Five Shader Philosophies
Each faction of Kumandra possesses a distinct textile and shader language:
*   **Heart:** Soft off-white clay tones, wet bamboo nodes with high specular roughness, and polished jade.
*   **Fang:** Pristine, sharp, pristine marble surfaces, elegant white silk fabrics modeled with delicate micro-translucencies.
*   **Spine:** Dark heavy woods with thick, fibrous grains, and weathered iron with rust accumulation.
*   **Tail:** Flowing, thin fabrics weathered by fine orange sand dust, and dry sun-bleached animal bones.
*   **Talon:** Vibrant, neon-like lanterns reflecting off dark, damp wooden docks with glossy puddles.

##### Recreating the Raya Pipeline:
To capture Raya's aesthetic, a character artist must avoid "default clean" looks. We utilize layered PBR setups in Substance Painter where the bottom layers hold highly saturated cultural dyes, while the top layers host procedurally masked dirt, moisture, and micro-scratches corresponding to physical contact points, simulating a lived-in history.`
  },
  {
    id: "ai-content-production",
    numberString: "04",
    title: "The Synthetic Pipeline: Forging the Identity of the High-Value Modeler",
    category: "AI",
    date: "February 2026",
    readingTime: "5 min read",
    content: `### Coloso | Mateo AI Studio

#### The Next-Level Detail of an AI International Film Festival Grand Prize Winner: Everything About Filmmaking

AI-assisted filmmaking has quietly graduated from its chaotic generative infancy. We are no longer merely playing in an isolated sandbox of prompts; we are engineering systematic pipelines. A truly mature workflow demands an unbroken, organic thread: framing a cohesive visual language in Midjourney, breathing cinematic motion and narrative pacing into those concepts via tools like Kling or Runway, and subsequently tailoring the final direction on the editing timeline. To anchor this technical illusion, downstream processes like Facefusion and advanced upscaling have shifted from optional polish to non-negotiable keystones of cinematic execution.`
  },
  {
    id: "nominative-society",
    numberString: "03",
    title: "By Your Own Name: Reclaiming Craft and Character in the Automated Age",
    category: "Culture & Philosophy",
    date: "February 2026",
    readingTime: "5 min read",
    content: `### Forecast of the Times: Nominative Society & The Rise of Lightweight Civilization

We are living through a quiet, seismic dismantling of the traditional scaffolding of work. An era where recruitment pipelines are shrinking and artificial intelligence has drifted from a futuristic novelty into an ordinary baseline of daily life. The core challenge of our time forces us to move past the superficial anxiety of how to perform a task, and instead confront the essential architecture of what we genuinely wish to become: called entirely by our own names.`
  },
  {
    id: "art-techniques-production",
    numberString: "02",
    title: "Constructing the Illusion: Chiaroscuro, Gravity, and Conviction in Digital Form",
    category: "Art Techniques",
    date: "January 2026",
    readingTime: "5 min read",
    content: `### From Intuition to Conviction: Chiaroscuro Expression and Three-Dimensional Modeling Starting with Shadows

To pass beyond the boundary of mere illustration and truly construct a three-dimensional form, an artist must first submit to the absolute logic of light. True volume on a digital canvas is not an accident of intuition; it is an act of architecture. We map this territory along the terminator line—the fragile frontier where direct illumination surrenders to shadow and reflected light.`
  },
  {
    id: "theoretical-foundations",
    numberString: "01",
    title: "The Anatomy of Perception: Light, Color, and the Structural Logic of Form",
    category: "Culture & Philosophy",
    date: "January 2026",
    readingTime: "5 min read",
    content: `### Light, Color, and the Principles of Perception

Light is the primordial architect of form. It dictates not only what we see, but how we understand space. To capture a profound sense of three-dimensional depth on a flat screen, an artist cannot rely on guesswork; one must master the rigorous physics of illumination.`
  }
];
