import { motion } from "motion/react";
import { X, Cpu, Layers, HardDrive, CheckCircle } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 30, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
        className="relative bg-deep-green border border-olive-drab/30 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden my-8 cursor-default text-cream-soft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon / Cover Art */}
        <div className="relative h-60 md:h-80 w-full overflow-hidden">
          <img loading="lazy" src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-green via-deep-green/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-pink-soft text-white p-2 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Core Info Over Top of Image */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="uppercase text-[10px] md:text-xs font-bold tracking-[0.25em] text-pink-soft mb-1 block">
              {project.category}
            </span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-display">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 space-y-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-olive-drab/20 pb-8">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-olive-drab/10 rounded border border-olive-drab/20 text-pink-soft mt-1">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-cream-soft/60 mb-0.5">
                  Topology / Density
                </h4>
                <p className="text-sm font-semibold font-mono">{project.specs.polygons || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-olive-drab/10 rounded border border-olive-drab/20 text-pink-soft mt-1">
                <HardDrive className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-cream-soft/60 mb-0.5">
                  Resolution / Textures
                </h4>
                <p className="text-sm font-semibold font-mono">{project.specs.textures || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-olive-drab/10 rounded border border-olive-drab/20 text-pink-soft mt-1">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-cream-soft/60 mb-0.5">
                  Primary Toolset
                </h4>
                <p className="text-sm font-semibold font-mono">
                  {project.specs.softwareUsed.join(", ")}
                </p>
              </div>
            </div>
          </div>

          {/* Artistic Motivation / Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Story */}
            <div className="space-y-4">
              <h4 className="text-sm uppercase font-black tracking-widest text-pink-soft border-b border-pink-soft/10 pb-2">
                Conceptual Genesis
              </h4>
              <p className="text-sm tracking-wide leading-relaxed text-cream-soft/80 font-normal">
                {project.backgroundStory}
              </p>
            </div>

            {/* Steps Workflow */}
            <div className="space-y-4">
              <h4 className="text-sm uppercase font-black tracking-widest text-pink-soft border-b border-pink-soft/10 pb-2">
                Production Pipeline
              </h4>
              <div className="space-y-5">
                {project.breakdownSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="h-6 w-6 rounded-full bg-olive-drab/20 border border-olive-drab/30 flex items-center justify-center text-[10px] font-mono font-bold text-pink-soft shrink-0">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>
                    <div>
                      <h5 className="text-xs uppercase font-extrabold text-cream-soft">
                        {step.title.split(".")[1] || step.title}
                      </h5>
                      <p className="text-[11px] leading-relaxed text-cream-soft/70 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-black/20 px-6 py-4 flex justify-end gap-4 border-t border-olive-drab/10">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-olive-drab text-cream-soft rounded text-xs font-extrabold uppercase tracking-widest hover:bg-pink-soft hover:text-white transition-all cursor-pointer"
          >
            CLOSE & GO BACK TO WORKS
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
