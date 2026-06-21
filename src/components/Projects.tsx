import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Filter } from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";
import ProjectModal from "./ProjectModal";
import SoomgyulModal from "./SoomgyulModal";
import PrototypesModal from "./PrototypesModal";
import NewtNifflerModal from "./NewtNifflerModal";
import LaFranceTruckModal from "./LaFranceTruckModal";
import HitRacerModal from "./HitRacerModal";
import ZanmangLoopyModal from "./ZanmangLoopyModal";
import HappyMessModal from "./HappyMessModal";
import TayoChristmasModal from "./TayoChristmasModal";

interface ProjectsProps {
  onModalOpenChange?: (id: string | null) => void;
}

export default function Projects({ onModalOpenChange }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    if (onModalOpenChange) {
      onModalOpenChange(selectedProject?.id ?? null);
    }
  }, [selectedProject, onModalOpenChange]);

  const categories = ["ALL", "AI+3D HYBRID", "AI", "3D"];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "AI+3D HYBRID") return proj.id === "soomgyul";
    if (activeFilter === "AI") return ["prototypes", "happy-mess"].includes(proj.id);
    if (activeFilter === "3D") {
      return ["zanmang-loopy", "hit-racer", "tayo-christmas", "newt-niffler", "lafrance-truck"].includes(proj.id);
    }
    return true;
  });

  return (
    <section id="work" className="py-24 md:py-36 bg-cream-soft text-deep-green">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block with Massive Title */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-8">
          <div>
            <span className="block uppercase text-[10px] md:text-xs font-bold tracking-[0.4em] text-olive-drab mb-3">
              Portfolio Catalog
            </span>
            <h2 className="text-5xl sm:text-7xl md:text-[7rem] font-black uppercase tracking-[-0.04em] leading-none select-none font-display text-deep-green">
              WORKS
            </h2>
          </div>

          {/* Dynamic Filter Row */}
          <div className="flex flex-wrap gap-2 items-center justify-center max-w-3xl mx-auto">
            <Filter className="w-4 h-4 text-olive-drab/60 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider border transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-deep-green border-deep-green text-cream-soft shadow-lg scale-102"
                    : "border-deep-green/10 hover:border-deep-green/30 text-deep-green bg-transparent hover:bg-deep-green/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid */}
        <div className="space-y-32 md:space-y-48">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Container - occupies 7 cols */}
                  {project.id === "zanmang-loopy" ? (
                    <div className={`lg:col-span-7 space-y-3 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div 
                        className="grid grid-cols-2 gap-4 overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="overflow-hidden rounded-lg border border-deep-green/10 shadow-md aspect-square sm:aspect-[4/3] bg-transparent relative">
                          <img loading="lazy" src="/zLoopy_g/loopy_main1.png"
                            alt="Zanmang Loopy Main Dynamic"
                            className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-103 animate-fade-in"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg border border-deep-green/10 shadow-md aspect-square sm:aspect-[4/3] bg-transparent relative">
                          <img loading="lazy" src="/zLoopy_g/loopy_main2.png"
                            alt="New Balance Loopy Main Edition"
                            className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-103 animate-fade-in"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      {/* Image Credits inside the container */}
                      <div className="flex flex-col gap-1 mt-2 text-left px-1">
                        <span className="text-[10px] text-teal-deep/70 font-mono tracking-normal leading-tight">
                          Image Credit: <a href="https://x.com/ZM_Loopy/status/1966788952213635483" target="_blank" rel="noopener noreferrer" className="underline hover:text-deep-green hover:font-bold transition-all">@ZM_Loopy</a>
                        </span>
                        <span className="text-[10px] text-teal-deep/70 font-mono tracking-normal leading-tight">
                          Image Credit: <a href="https://www.nbkorea.com/collection/NBwithZANMANGLOOPY.action" target="_blank" rel="noopener noreferrer" className="underline hover:text-deep-green hover:font-bold transition-all">New Balance Korea</a>
                        </span>
                      </div>
                    </div>
                  ) : project.id === "hit-racer" ? (
                    <div className={`lg:col-span-7 space-y-3 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div
                        className="overflow-hidden cursor-pointer group shadow-xl relative aspect-video lg:aspect-[4/3] rounded border border-deep-green/5"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img loading="lazy" src="/hitracer_g/hitracer_main.png"
                          alt="HitRacer Main Visual"
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.src.includes("hitracer_main.png")) {
                              target.src = "/hitracer_g/hitracer_emma_avatar.jpg";
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-deep-green/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      {/* Image Credits */}
                      <div className="px-1 text-left">
                        <span className="text-[10px] text-teal-deep/70 font-mono tracking-normal">
                          Image Credit: <a href="https://programs.sbs.co.kr/culture/hitracer/about/88190" target="_blank" rel="noopener noreferrer" className="underline hover:text-deep-green hover:font-bold transition-all">SBS Hitracer</a>
                        </span>
                      </div>
                    </div>
                  ) : project.id === "tayo-christmas" ? (
                    <div className={`lg:col-span-7 space-y-3 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div
                        className="overflow-hidden cursor-pointer group shadow-xl relative aspect-video lg:aspect-[4/3] rounded border border-deep-green/5"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img loading="lazy" src="/tayo_g/tayo_main.jpg"
                          alt="Tayo Christmas Musical"
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-deep-green/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      {/* Image Credits */}
                      <div className="px-1 text-left">
                        <span className="text-[10px] text-teal-deep/70 font-mono tracking-normal">
                          Image Credit: <a href="https://www.youtube.com/watch?v=P8fOQNrH6a0" target="_blank" rel="noopener noreferrer" className="underline hover:text-deep-green hover:font-bold transition-all">https://www.youtube.com/watch?v=P8fOQNrH6a0</a>
                        </span>
                      </div>
                    </div>
                  ) : project.id === "newt-niffler" ? (
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div 
                        className="overflow-hidden cursor-pointer group aspect-video lg:aspect-[4/3] bg-transparent relative"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img loading="lazy" src="/newtNiffler_g/newt_main1.png"
                          alt="Newt Scamander Showcase"
                          className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-103"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`lg:col-span-7 overflow-hidden cursor-pointer group shadow-xl relative aspect-video lg:aspect-[4/3] rounded border border-deep-green/5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                      onClick={() => setSelectedProject(project)}
                    >
                      <img loading="lazy" src={project.imageUrl ? project.imageUrl.replace(/&/g, "%26") : ""}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-deep-green/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  )}

                  {/* Text Details - occupies 5 cols */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div>
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-olive-drab block mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-deep-green leading-none font-display">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed text-teal-deep font-medium max-w-lg">
                      {project.description}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group flex items-center gap-3 px-6 py-3 border-2 border-deep-green hover:bg-deep-green hover:text-cream-soft transition-all duration-300 font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase cursor-pointer text-deep-green"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-20 border border-dashed border-deep-green/20 rounded">
              <p className="text-sm font-semibold opacity-60">
                No pipeline works found under this category filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Project Details Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          selectedProject.id === "soomgyul" ? (
            <SoomgyulModal onClose={() => setSelectedProject(null)} />
          ) : selectedProject.id === "prototypes" ? (
            <PrototypesModal onClose={() => setSelectedProject(null)} />
          ) : selectedProject.id === "zanmang-loopy" ? (
            <ZanmangLoopyModal onClose={() => setSelectedProject(null)} />
          ) : selectedProject.id === "hit-racer" ? (
            <HitRacerModal onClose={() => setSelectedProject(null)} />
          ) : selectedProject.id === "newt-niffler" ? (
            <NewtNifflerModal onClose={() => setSelectedProject(null)} />
          ) : selectedProject.id === "lafrance-truck" ? (
            <LaFranceTruckModal onClose={() => setSelectedProject(null)} />
          ) : selectedProject.id === "happy-mess" ? (
            <HappyMessModal onClose={() => setSelectedProject(null)} />
          ) : selectedProject.id === "tayo-christmas" ? (
            <TayoChristmasModal onClose={() => setSelectedProject(null)} />
          ) : (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )
        )}
      </AnimatePresence>
    </section>
  );
}
