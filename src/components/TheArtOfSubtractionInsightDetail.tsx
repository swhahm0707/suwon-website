import { BookOpen, Compass, Wind, FileText, Heart } from "lucide-react";

export default function TheArtOfSubtractionInsightDetail() {
  return (
    <div className="space-y-12 text-[#F7F4D5] leading-relaxed">
      {/* Introduction Banner */}
      <div className="p-6 rounded-lg bg-[#839958]/10 border border-[#839958]/20 mb-8 space-y-2">
        <span className="text-[10px] font-black uppercase tracking-[2px] text-[#D3968C]">EXHIBITION JOURNAL & REFLECTION</span>
        <h4 className="text-xl font-bold text-[#F7F4D5]">A Quiet Pocket at the Daegu Kansong Art Museum</h4>
        <p className="text-sm text-[#F7F4D5]/80">
          A reflection on 19th-century master Chusa Kim Jeong-hui's masterpiece <span className="italic">Sehando</span>, exploring the value of simplicity and the courage to subtract in the age of infinite AI generations.
        </p>
      </div>

      {/* Narrative Section 1: The Encounter */}
      <section className="space-y-6">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART I</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Chusa’s Art Class
          </h3>
        </div>

        {/* KansongMuseum Image */}
        <div className="flex justify-center my-6">
          <img
            src="/insight07_g/KansongMuseum.jpg"
            alt="Kansong Museum Exhibit"
            className="rounded-lg max-w-full h-auto border border-[#839958]/20 shadow-lg object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          A recent visit to the Daegu Kansong Art Museum left me stranded in a rare, quiet pocket of the world. Nestled deep within the embrace of surrounding mountains and perched high enough to feel an intimacy with the sky, the museum offered a serene stillness. The exhibition underway seemed to breathe that very same atmosphere.
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Of all the curations, one titled <span className="text-[#D3968C] font-semibold">Chusa’s Art Class</span> left a particularly sharp impression. It paired raw, unpolished paintings by the 19th-century Chusa Kim Jeong-hui’s disciples alongside the blunt, handwritten critiques he had left on their work. Looking at those pages, I was instantly pulled back to my own student days—rehabituating that familiar, vulnerable ache of sitting on the receiving end of an evaluation. Yet, knowing that those criticized disciples eventually went on to anchor their own artistic lineages, I found myself drifting into a pleasant daydream: What will it feel like when the wheel turns, and it is my turn to pass the torch?
        </p>
      </section>

      {/* Historical Context Card: Sehando */}
      <div className="p-6 rounded-lg bg-black/30 border border-[#D3968C]/20 space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-5 h-5 text-[#D3968C]" />
          <h5 className="font-extrabold text-base text-[#F7F4D5] uppercase tracking-wide">
            Sehando (Winter Scene) : A Monument to Loyalty
          </h5>
        </div>

        {/* Sehando Image */}
        <div className="flex justify-center my-6 bg-[#F7F4D5]/5 p-2 rounded border border-[#839958]/15">
          <img
            src="/insight07_g/sehando.jpg"
            alt="Sehando Painting by Kim Jeong-hui"
            className="rounded max-w-full h-auto filter brightness-95 contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Sehando Metadata Spec Table */}
        <div className="overflow-x-auto text-[13px] text-[#F7F4D5]/90 font-sans border border-[#839958]/20 rounded-lg shadow-inner bg-black/40">
          <table className="min-w-full divide-y divide-[#839958]/20">
            <thead className="bg-[#839958]/15 text-[#F7F4D5]">
              <tr>
                <th className="px-4 py-2.5 text-left font-black uppercase tracking-wider w-1/3 text-[11px] text-[#D3968C]">Field</th>
                <th className="px-4 py-2.5 text-left font-black uppercase tracking-wider w-2/3 text-[11px] text-[#D3968C]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#839958]/15 font-light">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-semibold text-cream-soft">Alternative Title</td>
                <td className="px-4 py-3 space-y-1 text-cream-soft/95">
                  <p><span className="italic font-medium">Sehando</span> Painted by Kim Jeong-hui, National Treasure (1974);</p>
                  <p className="font-serif text-[#D3968C]">金正喜 筆 歲寒圖; <span className="italic font-medium text-cream-soft">Sehando</span> (Winter Scene)</p>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-semibold text-cream-soft">Nationality / Period</td>
                <td className="px-4 py-3 text-cream-soft/95">Korea - Joseon Dynasty</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-semibold text-cream-soft">Material</td>
                <td className="px-4 py-3 text-cream-soft/95">Paper</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-semibold text-cream-soft">Artist</td>
                <td className="px-4 py-3 text-cream-soft/95">Kim Jeong-hui (金正喜, 1786–1856)</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-semibold text-cream-soft">Classification</td>
                <td className="px-4 py-3 text-cream-soft/95">Arts & Culture - Calligraphy and Painting - Painting</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-semibold text-cream-soft">Dimensions</td>
                <td className="px-4 py-3 space-y-1 text-cream-soft/95">
                  <p>Height: 33.5 cm, Total Width: 1,469.6 cm</p>
                  <p>Scroll Length: 33.6 cm, Scroll Diameter: 2.0 cm</p>
                  <p>Painting Size — Height: 23.9 cm, Width: 70.4 cm</p>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-semibold text-cream-soft">Cultural Heritage Designation</td>
                <td className="px-4 py-3 text-cream-soft/95">National Treasure</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-semibold text-cream-soft">Accession Number</td>
                <td className="px-4 py-3 font-mono text-cream-soft/95">Jeung (증) 10000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed pt-2">
          The true catalyst for this reflection was Chusa’s masterwork, <span className="text-[#D3968C] font-semibold italic">Sehando</span>. The history behind the canvas is a narrative of profound loyalty during a winter of the soul. At fifty-nine, Chusa was living in brutal political exile on Jeju Island. Defying the hazardous political currents of the time, his devoted disciple, Useon Lee Sang-jeok, made an extraordinary effort to procure a rare, monumental text for his banished mentor: the <span className="italic">Huangchao Jingshi Wenbian</span>. Deeply moved by this fierce devotion, Chusa painted Sehando as a monument to their bond.
        </p>
        <div className="p-4 bg-black/20 rounded border border-[#839958]/10 text-center font-mono text-xs text-[#839958] italic">
          “Only when the biting cold of winter arrives do we know that the pine and the cypress are the last to fade.”
        </div>
      </div>

      {/* Narrative Section 2: The Urge to Over-Explain */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART II</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            Trusting the Emptiness
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Yet, to express a sentiment so heavy, the painting itself is shockingly sparse. There are no grand gestures—just a single, humble hut, an ancient pine with barely one surviving branch, and a stubborn cypress straining toward the sky with quiet vigor.
        </p>

        {/* Contrast Grid: Human Over-explanation vs. Chusa's Essence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-lg bg-black/25 border border-[#839958]/20 space-y-3">
            <span className="text-xs font-mono font-bold text-[#D3968C] uppercase tracking-wider block">THE INSTINCT OF COMPENSATION</span>
            <h4 className="text-lg font-bold uppercase text-[#F7F4D5]">Over-Explaining in Design</h4>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
              Driven by the human urge to over-explain when doubting, we tend to clutter the canvas. We draw figures bundled in heavy coats to broadcast the cold, or paint a mountain stripped entirely bare to signal decay. We use sheer abundance to compensate for creative uncertainty.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/25 border border-[#839958]/20 space-y-3">
            <span className="text-xs font-mono font-bold text-[#839958] uppercase tracking-wider block">CHUSA'S MINIMALISM</span>
            <h4 className="text-lg font-bold uppercase text-[#F7F4D5]">Capturing the Absolute Essence</h4>
            <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
              In stark contrast, Chusa trusted the negative space. With nothing but a solitary house and a few stark trees, he captured the absolute essence of a spirit tested by winter. By leaving the canvas blank, he invited the environment to breathe and speak on his behalf.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 3: AI Era and Subtraction */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[#839958]/30 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#839958]">PART III</span>
          <h3 className="text-3xl font-black uppercase text-[#F7F4D5] mt-1 tracking-tight">
            The Age of AI
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90">
          Today, as creators, we face a radically different kind of landscape. Generative AI has drastically compressed our labor, shaving hours off our production pipelines. Our immediate, anxious instinct is often one of accumulation: What more can we pack into this newly cleared space? How do we fill the void? 
        </p>

        <p className="text-sm sm:text-base text-[#F7F4D5]/90 font-medium">
          But <span className="italic">Sehando</span> demands a counter-intuitive question: <strong className="text-[#D3968C] font-extrabold">What if, instead of adding, we practice radical subtraction?</strong> When we try to express too many things at once, the essence is inevitably choked by the surrounding noise. Just like Chusa’s masterpiece, sometimes we clarify our meaning only by daring to express less.
        </p>

        {/* Curation of Questions Card */}
        <div className="p-6 rounded-lg bg-[#839958]/5 border border-[#839958]/15 space-y-4">
          <h4 className="text-base font-extrabold uppercase text-[#839958] tracking-widest flex items-center gap-2">
            <Wind className="w-4 h-4 text-[#839958]" />
            What do we do with the time AI gives back to us?
          </h4>
          <p className="text-xs sm:text-sm text-[#F7F4D5]/80 leading-relaxed">
            The answer isn't to build denser piles of conventional, cluttered output. Instead, it is an invitation to step away from traditional toolkits entirely and ask:
          </p>
          <ul className="space-y-2 pl-4 list-disc marker:text-[#D3968C] text-xs sm:text-sm text-[#F7F4D5]/80">
            <li>What is the artistic language that belongs uniquely to AI?</li>
            <li>What can we express through these new tools that was structurally impossible before?</li>
            <li>How can we find the courage to let the canvas breathe?</li>
          </ul>
        </div>
      </section>

      {/* Signature & Closing Quote */}
      <div className="p-8 text-center bg-black/30 rounded-lg border border-[#839958]/20 space-y-2">
        <p className="text-base font-extrabold text-[#F7F4D5] tracking-wide uppercase leading-snug">
          "The challenge ahead is not merely to work faster, but to discover entirely new, unconventional forms of expression—and to find the courage to let the canvas breathe."
        </p>
      </div>

      {/* References Section */}
      <section className="space-y-4 pt-6 border-t border-[#839958]/20">
        <div className="flex items-center gap-2 text-[#839958]">
          <BookOpen className="w-4 h-4" />
          <h4 className="text-xs font-bold uppercase tracking-widest">References</h4>
        </div>
        <ol className="list-decimal pl-5 space-y-2 text-xs text-[#F7F4D5]/70 font-mono">
          <li>
            Yu, Hong-jun. <span className="italic">Chusa’s Painting Lessons</span>. Kansong Art and Culture Foundation, 2026.
          </li>
          <li>
            "Sehando" National Museum of Korea,{" "}
            <a
              href="https://www.museum.go.kr/MUSEUM/contents/M0502000000.do?schM=view&relicId=36516218"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#D3968C] transition-colors"
            >
              www.museum.go.kr/MUSEUM/contents/M0502000000.do?schM=view&relicId=36516218
            </a>
            . Accessed 31 May 2026.
          </li>
        </ol>
      </section>
    </div>
  );
}
