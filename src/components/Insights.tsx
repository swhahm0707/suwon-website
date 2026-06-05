import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Clock, BookOpen, Star } from "lucide-react";
import { insightsData } from "../data";
import { Insight } from "../types";
import ElioInsightDetail from "./ElioInsightDetail";
import RayaInsightDetail from "./RayaInsightDetail";
import AiContentInsightDetail from "./AiContentInsightDetail";
import NominativeSocietyInsightDetail from "./NominativeSocietyInsightDetail";
import ArtTechniquesInsightDetail from "./ArtTechniquesInsightDetail";
import TheoreticalFoundationsInsightDetail from "./TheoreticalFoundationsInsightDetail";
import TheArtOfSubtractionInsightDetail from "./TheArtOfSubtractionInsightDetail";
import BeyondThePolygonInsightDetail from "./BeyondThePolygonInsightDetail";

interface InsightsProps {
  onActiveChange?: (id: string | null) => void;
}

export default function Insights({ onActiveChange }: InsightsProps) {
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);

  const handleSelectInsight = (insight: Insight | null) => {
    setSelectedInsight(insight);
    if (onActiveChange) {
      onActiveChange(insight ? insight.id : null);
    }
  };

  return (
    <section id="insights" className="py-24 md:py-36 bg-deep-green text-cream-soft relative">
      {/* Background decor */}
      <div className="absolute top-[20%] left-[-10%] w-64 h-64 bg-olive-drab/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="uppercase text-[10px] md:text-sm font-bold tracking-[0.4em] text-olive-drab mb-3">
            Animation, Art & Tech Research
          </p>
          <h2 className="text-5xl sm:text-7xl md:text-[7rem] font-black tracking-[-0.04em] leading-none uppercase font-display select-none text-cream-soft">
            INSIGHTS
          </h2>
        </div>

        {/* Text-based List Container */}
        <div className="max-w-4xl mx-auto">
          <ul className="border-t border-cream-soft/10">
            {insightsData.map((insight) => (
              <li key={insight.id} className="border-bottom border-cream-soft/10 group">
                <button
                  onClick={() => handleSelectInsight(insight)}
                  className="w-full flex items-center justify-between py-8 md:py-10 text-left cursor-pointer focus:outline-none focus-visible:bg-white/5 px-2 rounded-sm"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    {/* Index Number */}
                    <span className="text-xs sm:text-sm md:text-base font-bold font-mono text-olive-drab/80 group-hover:text-pink-soft transition-colors duration-400">
                      {insight.numberString}
                    </span>

                    {/* Essay Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-cream-soft transition-all duration-400 group-hover:text-pink-soft group-hover:translate-x-3 select-none">
                      {insight.title}
                    </h3>
                  </div>

                  {/* Icon indicator */}
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="hidden sm:inline text-[9px] uppercase tracking-widest font-bold font-mono opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                      {insight.readingTime}
                    </span>
                    <motion.span className="text-lg text-pink-soft opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
                      →
                    </motion.span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Immersive Slide-over Detail Panel */}
      <AnimatePresence>
        {selectedInsight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end"
            onClick={() => handleSelectInsight(null)}
          >
            {/* Drawer Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className={`w-full ${selectedInsight.id === "elio-space-animation" || selectedInsight.id === "beyond-the-polygon" ? "max-w-4xl" : selectedInsight.id === "art-of-subtraction" ? "max-w-3xl" : "max-w-2xl"} bg-deep-green border-l border-olive-drab/30 h-full overflow-y-auto p-6 md:p-12 relative flex flex-col cursor-default`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Back actions */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-olive-drab/10">
                <button
                  onClick={() => handleSelectInsight(null)}
                  className="flex items-center gap-2 group text-[10px] md:text-xs font-bold uppercase tracking-widest text-pink-soft hover:text-white cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back</span>
                </button>

                <div className="flex items-center gap-4 text-[10px] font-mono font-bold text-cream-soft/50">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedInsight.readingTime}
                  </span>
                  <span>•</span>
                  <span className="uppercase text-olive-drab">{selectedInsight.category}</span>
                </div>
              </div>

              {/* Essay Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-xs font-bold text-olive-drab font-mono mr-2">
                    ARTICLE {selectedInsight.numberString}
                  </span>
                  <span className="text-xs text-cream-soft/40">• {selectedInsight.date}</span>
                  <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mt-2 text-cream-soft font-display leading-tight">
                    {selectedInsight.title}
                  </h2>
                </div>

                {selectedInsight.id === "beyond-the-polygon" ? (
                  <BeyondThePolygonInsightDetail />
                ) : selectedInsight.id === "art-of-subtraction" ? (
                  <TheArtOfSubtractionInsightDetail />
                ) : selectedInsight.id === "elio-space-animation" ? (
                  <ElioInsightDetail />
                ) : selectedInsight.id === "raya-last-dragon" ? (
                  <RayaInsightDetail />
                ) : selectedInsight.id === "ai-content-production" ? (
                  <AiContentInsightDetail />
                ) : selectedInsight.id === "nominative-society" ? (
                  <NominativeSocietyInsightDetail />
                ) : selectedInsight.id === "art-techniques-production" ? (
                  <ArtTechniquesInsightDetail />
                ) : selectedInsight.id === "theoretical-foundations" ? (
                  <TheoreticalFoundationsInsightDetail />
                ) : (
                  /* Simulated high-quality article layout */
                  <article className="prose prose-invert max-w-none pt-4 text-sm md:text-base leading-relaxed text-cream-soft/80 font-normal space-y-6">
                    {/* Parse basic header markings manually for beautiful native look */}
                    {selectedInsight.content.split("\n\n").map((para, pIdx) => {
                      if (para.startsWith("### ")) {
                        return (
                          <h4
                            key={pIdx}
                            className="text-lg md:text-xl font-bold uppercase tracking-wide text-pink-soft pt-4 border-b border-olive-drab/10 pb-2"
                          >
                            {para.replace("### ", "")}
                          </h4>
                        );
                      }
                      if (para.startsWith("#### ")) {
                        return (
                          <h5 key={pIdx} className="text-base font-extrabold uppercase mt-4 text-cream-soft">
                            {para.replace("#### ", "")}
                          </h5>
                        );
                      }
                      if (para.startsWith("##### ")) {
                        return (
                          <h6 key={pIdx} className="text-sm font-bold uppercase tracking-wider text-olive-drab mt-4">
                            {para.replace("##### ", "")}
                          </h6>
                        );
                      }
                      if (para.startsWith("1. ") || para.startsWith("*   ")) {
                        const items = para.split("\n");
                        return (
                          <ul key={pIdx} className="space-y-2 pl-4 list-disc marker:text-pink-soft">
                            {items.map((item, iIdx) => (
                              <li key={iIdx} className="text-sm text-cream-soft/80">
                                {item.replace(/^\d+\.\s+|^[*]\s+/, "")}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      // Handle ASCII Art Flow diagram
                      if (para.includes("->")) {
                        return (
                          <div
                            key={pIdx}
                            className="p-4 bg-black/25 rounded border border-olive-drab/20 overflow-x-auto text-center font-mono text-[9px] md:text-[11px] text-pink-soft tracking-wider"
                          >
                            {para}
                          </div>
                        );
                      }
                      return (
                        <p key={pIdx} className="text-cream-soft/80">
                          {para}
                        </p>
                      );
                    })}
                  </article>
                )}
              </div>

              {/* Inline citation / signature */}
              <div className="mt-12 pt-6 border-t border-olive-drab/10 text-center">
                <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-cream-soft/40 uppercase">
                  Written by Suwon Hahm
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
