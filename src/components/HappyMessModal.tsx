import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { X, Linkedin, Instagram, Youtube, ChevronDown } from "lucide-react";

const getSafeSrc = (src: string) => {
  if (!src) return "";
  return src.replace(/&/g, "%26");
};

interface PortfolioImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

function PortfolioImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]", referrerPolicy = "no-referrer" }: PortfolioImageProps) {
  const [error, setError] = useState(false);
  const safeSrc = getSafeSrc(src);

  if (error || !src) {
    const cleanPath = src.startsWith("/") ? src.slice(1) : src;
    
    return (
      <div className={`w-full h-full min-h-[220px] bg-[#0A3323]/5 border-2 border-dashed border-[#839958]/30 rounded-xl p-6 flex flex-col justify-between items-center text-center ${aspectRatio} relative overflow-hidden group select-none transition-all duration-300`}>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="w-full flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-[#839958] z-10 border-b border-[#839958]/10 pb-2">
          <span>[Image Placeholder]</span>
          <span>{aspectRatio.replace("aspect-", "")}</span>
        </div>
        <div className="flex flex-col items-center justify-center my-auto py-4 z-10 gap-2">
          <span className="text-xs font-black uppercase text-[#0A3323] tracking-wider">{alt}</span>
          <span className="text-[10px] font-mono text-[#105666] bg-white/60 px-2 py-0.5 rounded-md border border-[#839958]/15 mt-1 max-w-[280px] break-all">{cleanPath}</span>
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

// Custom Accordion for Prompts
function PromptAccordion({ title, content }: { title: string, content: string }) {
  return (
    <details className="group border-2 border-[#839958]/30 rounded-lg overflow-hidden bg-[#F7F4D5]/50 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between cursor-pointer p-5 bg-[#839958]/10 hover:bg-[#839958]/20 transition-colors">
        <h4 className="text-[#0A3323] font-black uppercase tracking-widest text-sm sm:text-base">{title}</h4>
        <ChevronDown className="w-5 h-5 text-[#839958] transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="p-6 border-t border-[#839958]/20">
        <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm text-[#105666] leading-relaxed">
          {content}
        </pre>
      </div>
    </details>
  );
}

interface HappyMessModalProps {
  onClose: () => void;
}

export default function HappyMessModal({ onClose }: HappyMessModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const storyForgePrompt = `- Basic Role
You are an AI dedicated to brainstorming for animation planning.
You do not aim for a completed final product.
Always present ideas in multiple directions simultaneously.
Provide options without suggesting a single correct answer.
- Idea Generation Principles
Propose at least 3 to 7 ideas for one question.
Mix ideas with completely different tones and directions.
Structure them so that genre, mood, and target age group do not overlap.
Do not develop them to the level of "ready for immediate production."
- Answer Style
Short and fast sentences
List, number-oriented
No excessive explanations
Use intuitive keywords
- What Not to Do
No writing feature-length synopses
No explaining production stages
Do not push a single idea as the right answer
Do not make conclusions on behalf of the user
- Things to Remember
This AI does not replace the creator's sense, and decisions are always left to the user.`;

  const storyDepthPrompt = `You are a professional animation pre-production director and a Socratic creative mentor. You have a deep understanding of the emotional design, character-driven narratives, and thematic expressions of Pixar, DreamWorks, and Disney feature animations. However, you do not provide answers directly. Instead, you ask questions so that the creator can derive the answers themselves.
Your role is to:
Expand the creator's thinking
Clarify emotions
Sharply dig into ambiguous points
Expose structural weaknesses.
You must absolutely follow these principles:
Do not analyze first; ask questions.
Do not throw too many questions at once. (3~5 questions)
Questions must be specific. (e.g., "Why is it sad?" ❌ / "What does the protagonist lose in that scene?" ⭕)
Provide structural feedback only after receiving the creator's answer.
Relentlessly dig into emotional clarity, character-centricity, and the essence of conflict.
Instead of "What is the theme of the story?", ask action-based questions like "What is the protagonist trying to prove?".
Include questions that induce directorial thinking, such as symbolism, spatial contrast, and color contrast.
Always design the conversation in a direction that makes the creator think deeper.
Answer Format:
[Question Stage]
3~5 questions digging into the core
(After the user's answer)
[Diagnosis]
Emotional clarity
Character-centricity
Conflict structure
[In-depth Questions]
2~3 questions digging one step deeper
The user can select one of the following:
Emotion Dissection Mode
Structure Pressure Mode
Direction Expansion Mode
Only present questions suited to the selected mode. If a mode is not specified, Emotion Dissection Mode is the default.`;

  const characterPrompt = `[Role]
You are the "Character Design Director" of an animation studio. Your role is to explore and develop story-based character designs. You do not simply generate character images. Instead, you go through the following process.
Personality Analysis
→ Shape Language Design
→ Silhouette Exploration
→ Design Direction Development
→ Character Sheet Creation
Always clearly indicate the stage currently in progress.
Example:
Current Stage: STAGE 1 — Character Analysis
-------------------------------------
[Core Principles]
Character design starts from personality.
A good character should be distinguishable by silhouette alone.
Shape language must reflect the character's personality.
Colors must convey emotions and symbols.
Design exploration proceeds in multiple directions, not just one.
Always explore at least 4 or more design directions.
-------------------------------------
STAGE 1 — Character Story Analysis
Starts when the user provides a character description. Analyze the following elements.
Character personality
Character's goals
Fears
Deficiencies
Role in the story
Also analyze the character's:
Emotional energy
Movement style
Symbolic elements

Afterward, propose 5 core design keywords for the character.
-------------------------------------
STAGE 2 — Shape Language Design
Define the shape language based on the character's personality.
Example:
Round shape - Friendliness / Innocence
Angular shape - Tension / Aggression
Triangular shape - Danger / Dynamics
Organic shape - Freedom / Nature
Afterward, propose 4~6 design directions. Each design direction must include the following.
Design concept title
Shape language
Silhouette features
Color strategy
Surface texture
Personality expression method
Animation style references
-------------------------------------
STAGE 3 — Silhouette Exploration
A good character should be recognizable by silhouette alone. Propose at least 6 silhouette ideas.
Example:
Large head + small body
Long arms + small body
Round body + small legs
Asymmetrical structure
Generate Midjourney prompts along with silhouette descriptions.
Prompt Example:
black silhouette character design, strong shape language, animation character concept, clean white background --ar 2:3 --v 6
-------------------------------------
STAGE 4 — Character Design Generation
Generate character designs based on the selected silhouette. Include the following information for each design.
Character appearance description
Expression style
Pose style
Color palette
Texture
Provide 3 Midjourney prompts
Prompt Structure:
character
pose
expression
silhouette
color palette
lighting
art style
render quality
parameters
-------------------------------------
STAGE 5 — Character Sheet Creation
Create character sheets for animation production. Provide prompts to generate the following images.
Front
Side
Back
Expression sheet
Pose sheet
Prompt Example:
animation character turnaround sheet, front side back view, clean character design sheet, white background --ar 3:2
-------------------------------------
STAGE 6 — Maintaining Character Consistency
Generate data to lock in the character design
CHARACTER LOCK
Organize the following information.
Shape proportions
Color palette
Facial structure
Eye shape
Surface texture
Line style
This data becomes the standard for maintaining character consistency in all subsequent image generation.
-------------------------------------
STAGE 7 — Character Expansion
Expand the character so it can be used in various situations.
Example:
Emotional expression sheet
Action poses
Environmental interaction
Different outfits
Various camera angles
-------------------------------------
[Conversation Rules]
Always indicate the current stage first.
Write answers in a structured manner.
Explain as visually easy to imagine as possible.
Always guide character design exploration in multiple directions.`;

  const visualDevPrompt = `Your role is a visual development artist and production designer for animation production.
Goal:
Analyze Jia's personality, values, habits, tastes, complexes, and growth narrative, and then design the interior space of the house that best reveals that character.
In particular, 'Jia's Master Bedroom' should not just be a pretty space, but a visual storytelling space where the audience can understand the character of Jia the moment they see the room.
Workflow:
1. Jia Character Analysis
* 5 core personality traits
* Daily habits
* Things she likes
* Things she dislikes
* Unconsciously revealed behaviors
* Current inner state
* Direction of change in the second half of the story
2. Spatial Concept Derivation
* Propose 3 core concepts for the room based on the above analysis
* Explain the pros and cons of each concept
* Select the 1 strongest concept
3. Visual Development
Write the following items very specifically.
* Spatial structure
* Furniture layout
* Wall design
* Floor material
* Ceiling structure
* Lighting design
* Color script
* Props
* Window placement
* How sunlight enters
* Traces of living
* Details that reveal character
* Symbolic elements
* Emotional expression elements
* Features visible from the camera angle
* Points that can be utilized as animation scenes
Important:
Do not add elements just because they are 'pretty', but absolutely explain the reason they connect to Jia's personality.
4. Organization for Image Generation
At the end, organize in the format below.
[Art Direction]
[Environment Design]
[Materials]
[Lighting]
[Color Palette]
[Props]
[Storytelling Details]
[Image Generation Prompt]
Evaluation Criteria:
Is Jia's character naturally integrated into the space?
Are there details at a level where image generation is possible just with the description?
Does a signature visual exist that the audience will remember?
Are the character's emotions and growth narrative reflected in the space?
Is it designed well enough to be used as an actual animation background?
Grade each item out of 10 points.
If the total score is under 47 points:
* Critique the problems.
* Explain the direction for improvement.
* Rewrite it.
Output only the final top 3 results after a maximum of 10 repeated improvements.
Absolutely do not make an ordinary 'pretty room', but aim to work at the production design level of Pixar, Ghibli, or Laika Studios.`;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#F7F4D5] overflow-y-auto cursor-default h-full w-full font-sans text-[#0A3323]"
    >
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

      <header className="pt-36 pb-24 px-[5%] text-center bg-[#839958] text-[#F7F4D5]">
        <span className="text-[10px] sm:text-[11px] font-black tracking-[4px] text-[#0A3323] uppercase block mb-4">
          AI Animation
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-black uppercase tracking-[-2px] sm:tracking-[-4px] leading-none mb-4 font-display">
          Happy Mess Prologue
        </h1>
        <span className="text-xl md:text-2xl font-black block tracking-[2px] mb-8">
          2026.03~Present
        </span>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-[#F7F4D5]/90 mt-12 mb-8">
          <strong className="text-[#0A3323] uppercase tracking-wider block mb-2">[Creator’s Story]</strong>
          I was a creator who, trapped in the obsession of having to make a perfect piece of work, only accumulated knowledge for a long time and couldn't create anything. Then, encountering AI, a 'tool that shortens the process,' I gained the courage to bring the things floating in my head out into the world for the first time. Therefore, this story begins first and foremost from the existence where I can be most honest.
        </p>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-[#F7F4D5]/90">
          <strong className="text-[#0A3323] uppercase tracking-wider block mb-2">[Task Goals]</strong>
          1-person animation production using only AI without any existing 3D work.
          <br/>
          What is something that only AI can express, which 3D tools cannot imitate, something I had agonized over before?
          Starting with this agonizing question, I realized it through the production of this animation.
        </p>
      </header>

      <section className="px-[5%] py-24 max-w-7xl mx-auto space-y-24 md:space-y-36">
        {/* Step 1 */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
            Step 1: Original Script
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
            Created the Story Forge Gemini Gem to quickly generate creative ideas, and created the Story Depth Interrogator Gem to not have AI write the script, but to throw questions at the creator to elevate the depth and perfection of the story, completing an original script.
          </p>
          <div className="space-y-4">
            <PromptAccordion title="Story Forge Prompt" content={storyForgePrompt} />
            <PromptAccordion title="Story Depth Interrogator Prompt" content={storyDepthPrompt} />
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
            Step 2: Character Design Direction
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
            Created the Character Design Director Gem based on the completed script to carry out everything from story analysis to silhouette exploration and character sheet creation. Used Nano Banana as the primary image generation tool.
          </p>
          <PromptAccordion title="Character Design Director Prompt" content={characterPrompt} />
          
          <div className="bg-[#F7F4D5]/40 p-6 rounded-xl border border-[#839958]/20 mt-8 space-y-6">
            <div>
              <h4 className="text-lg font-black text-[#0A3323] uppercase">Main Character: Jia</h4>
              <p className="text-sm leading-relaxed text-[#105666] mt-2">
                <strong>Characteristics:</strong> Oriental painting artist with obsessive-compulsive personality disorder and perfectionism.<br/>Obsessed with perfection, order, control, and rules, and feels extreme anger when others or the environment deviate from those standards. Has a dichotomous thinking that if it's not perfect, it's a failure. Every time she passes through a door, she always brushes her skirt twice and crosses the threshold with her right foot first.<br/>
                <strong>Personality:</strong> Cold and dry attitude. A monotonous and cold voice stripped of emotional highs and lows. Expressions are not significant even in situations of joy, sadness, or embarrassment, and even when feeling anger, there is only a slight muscle spasm in her cheek, and she merely adjusts her wristwatch.<br/>
                <strong>Posture:</strong> Maintains a tense posture with a straight neck, shoulders, and spine. Moves accompanied by subtle resistance and rattling, like a hard-to-bend lead pipe moving. Her walking stride is consistent and short, and she walks with her arms firmly attached to her torso.<br/>
                <strong>Outfit:</strong> Wears several layers of overlapping clothes, buttoned up to the neck. The outfit is a stiffly ironed, achromatic Hanbok suit skirt.<br/>
                <strong>Artwork Characteristics:</strong> Magnificent and orderly from afar. As you zoom in, there are micro and complex lines and patterns that are almost creepy. Cold and dry depiction, thoroughly calculated color planes and precise lines.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black text-[#0A3323] uppercase">Main Character: Kkaebi (Jia's childhood drawing)</h4>
              <p className="text-sm leading-relaxed text-[#105666] mt-2">
                <strong>Characteristics:</strong> An entity dwelling in Jia's childhood crayons. Likes betting and is so full of excitement that he cannot stay still. Finds doors to move forward through playful and eccentric actions, and interacts.<br/>
                <strong>Appearance:</strong> Like a child's crayon drawing, it has no separate outlines and is a 'colored-in shape'. Nails consist of colorful colors like crayons. Magically draws doorknobs with his nails to open doors. Pointy teeth, no horns on the head, and very hairy. Especially long sideburns on the jaw and face. Wears rolled-up traditional trousers and jacket (baji-jeogori) and wears a traditional bamboo hat (paeraengi).
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black text-[#0A3323] uppercase">Villain: Geuseundae</h4>
              <p className="text-sm leading-relaxed text-[#105666] mt-2">
                <strong>Characteristics:</strong> 'A massive presence standing tall in the dark': Derived from vocabulary like 'Geuneul' (shade) meaning the absence of light or 'Geumeum' pointing to the last night of the lunar month. The suffix 'Dae' means 'standing'. Rigidly changes the surroundings like Jia's paintings. Black shadows explosively expand, covering the villagers, turning them black, and transforming them into ordinary animal forms. Hates dirt and messy, flashy colors.<br/>
                <strong>Appearance:</strong> Connected by shadows to perfectionists in reality. The boss Geuseundae is connected to Jia's shadow and stands in the shape of a young child. Later, when Jia clears the shadow, young Jia is revealed.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black text-[#0A3323] uppercase">Locations</h4>
              <ul className="text-sm leading-relaxed text-[#105666] mt-2 list-disc pl-5 space-y-2">
                <li><strong>Location (#1-1 Inside the House):</strong> Forms a symmetrical structure. Items are arranged in perfect order and rows, and even the corners of the furniture are clean. Brush bristles are straight, and canvases are orderly arranged.</li>
                <li><strong>Location (#1-2 Inside the House - After abandoning perfection):</strong> Various tools are stuck together haphazardly, and canvases are freely placed on the floor and furniture.</li>
                <li><strong>Location (#2 Art Museum):</strong> Obsessive marble floor. Acceptance speech podium and microphone. Symmetrically arranged artworks of Jia.</li>
                <li><strong>Location (#3 Land of Abandoned Sketches):</strong> Inhabited by uniquely shaped residents, such as a giraffe with a short neck and a bird with a fish tail. A crooked and colorful world different from the real world.</li>
                <li><strong>Location (#4 School):</strong> The place where Jia's drawings were shunned by her friends.</li>
                <li><strong>Location (#5 Young Jia's Room):</strong> The place where young Jia would secretly draw Dokkaebi (goblins) under her blanket. Award certificates and perfectly measured drawings hang on the walls.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
            Step 3: Jia Character Implementation
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
            To implement a Korean character, I transformed my own photographed face into a character form using Galaxy AI to create the protagonist, and then utilized nodes like Gemini Banana Pro, Flux 2 Pro, Recraft V4, Painter, and Inpaint from Weavy AI to bring out the silk fabric feel of the Hanbok, the embroidery details of Korean patterns, and the embroidery details of the hairband.
          </p>
          <div className="mt-8 space-y-12">
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-[#0A3323] uppercase mb-6">Adult Jia</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
                  <PortfolioImage src="/happymess_g/happymess_jia_draft_front.png" alt="Jia Draft Front" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
                  <PortfolioImage src="/happymess_g/happymess_jia_draft_side.jpg" alt="Jia Draft Side" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md flex items-center justify-center bg-white/50">
                  <PortfolioImage src="/happymess_g/happymess_jia_turnaround_2k.png" alt="Jia Turnaround" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-[#0A3323] uppercase mb-6">Young Jia</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
                  <PortfolioImage src="/happymess_g/happymess_babyjia_draft_front.png" alt="Baby Jia Draft Front" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md flex items-center justify-center bg-white/50">
                  <PortfolioImage src="/happymess_g/happymess_babyjia_draft_turnaround.png" alt="Baby Jia Turnaround" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
            Step 4: Kkaebi Character Generation
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
            Generated a Dokkaebi character starting from Dokkaebi patterns photographed during a field trip to Buyeo. Created a character with the feel of a child's crayon drawing, which is difficult to characterize with 3D modeling. Generated a character with no boundary lines, drawn jaggedly, and with crayon doodle fragments floating around it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
              <PortfolioImage src="/happymess_g/happymess_buyeo.jpg" alt="Buyeo Reference" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
              <PortfolioImage src="/happymess_g/happymess_kkaebi_turnaround.png" alt="Kkaebi Turnaround" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 bg-white/50" />
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
            Step 5: Visual Development
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
            Created a visual storytelling space that clearly reveals the character's personality and traits. Made Gemini analyze the character, derive spatial concepts, and perform visual development, then provided evaluation criteria to have it self-evaluate; if it scored below a certain point, it was repeatedly improved to output only the top results. By doing this, multiple rooms were made to maintain the same concept.
          </p>
          <PromptAccordion title="Visual Develop Artist Prompt" content={visualDevPrompt} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mt-8">
            <div className="aspect-[9/16] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
              <PortfolioImage src="/happymess_g/happymess_jia_bedroom.png" alt="Jia Bedroom" className="w-full h-full object-contain bg-white/50 hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-[9/16] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
              <PortfolioImage src="/happymess_g/happymess_jia_bathroom.png" alt="Jia Bathroom" className="w-full h-full object-contain bg-white/50 hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-[9/16] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
              <PortfolioImage src="/happymess_g/happymess_jia_dressingroom.png" alt="Jia Dressing Room" className="w-full h-full object-contain bg-white/50 hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-[9/16] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
              <PortfolioImage src="/happymess_g/happymess_jia_artroom.png" alt="Jia Art Room" className="w-full h-full object-contain bg-white/50 hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-[9/16] rounded-lg overflow-hidden border border-[#0A3323]/10 shadow-md">
              <PortfolioImage src="/happymess_g/happymess_jia_door.png" alt="Jia Door" className="w-full h-full object-contain bg-white/50 hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A3323] border-b-3 border-[#839958] pb-2 inline-block">
            Step 6: Scene Generation & Consistency
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#105666] font-medium">
            Selected optimal scenes by letting scenes be derived into various lens types, shot types, and character angles utilizing prompt, prompt concatenator, system prompt, LLM, Array, and Lists nodes. Maintained character and background consistency through the Image Input and prompt commands of Weavy AI's Nano Banana P.
          </p>
          <div className="mt-8 flex flex-col w-full">
            <PortfolioImage src="/happymess_g/happymess_scene0_0.png" alt="Scene 0" className="block w-full h-auto object-cover mb-12" />
            <div className="flex flex-col w-full">
              <PortfolioImage src="/happymess_g/happymess_process1.png" alt="Process 1" className="block w-full h-auto object-cover m-0 p-0" />
              <PortfolioImage src="/happymess_g/happymess_process2.png" alt="Process 2" className="block w-full h-auto object-cover m-0 p-0" />
              <PortfolioImage src="/happymess_g/happymess_process3.png" alt="Process 3" className="block w-full h-auto object-cover m-0 p-0" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 px-[5%] text-center bg-[#F7F4D5] text-[#0A3323]">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12 font-display">
          GET IN TOUCH
        </h2>
        
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
