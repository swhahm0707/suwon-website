import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleScrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = workSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden text-center select-none"
    >
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <video
          className="w-full h-full object-cover scale-102"
          src="/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Soft, deep color overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-deep-green/60 to-deep-green/95 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-transparent to-deep-green/90" />
      </div>

      {/* Floating subtle ambient items */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-soft/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-olive-drab/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title - Positioned at upper part but responsive */}
      <div className="absolute top-[18%] md:top-[15%] left-0 w-full z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1"
        >
          <span className="block uppercase text-[10px] md:text-xs tracking-[0.4em] font-normal text-cream-soft/60 mb-2">
            AI Artist & 3D Character Modeler
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] font-black tracking-[-0.04em] leading-none text-cream-soft select-none font-display uppercase">
            <span className="text-outline text-pink-soft">HAHM</span>
          </h1>
        </motion.div>
      </div>

      {/* Mid Statement - Framed with generous margins */}
      <div className="absolute bottom-[20%] md:bottom-[16%] z-10 max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-base md:text-xl font-medium tracking-wide leading-relaxed drop-shadow-lg"
        >
          Weaving captivating human emotion and narrative into AI tech to create 3D art that moves people.
        </motion.p>
      </div>

      {/* Animated Action Indicators at very bottom */}
      <div className="absolute bottom-6 md:bottom-8 z-10 flex flex-col items-center">
        <motion.button
          onClick={handleScrollToWork}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="group flex flex-col items-center cursor-pointer py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-soft rounded-lg"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold text-cream-soft/50 group-hover:text-pink-soft transition-colors duration-300 uppercase mb-2">
            Explore Work
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-1 rounded-full border border-cream-soft/20 group-hover:border-pink-soft/60 group-hover:bg-pink-soft/10 transition-all duration-300"
          >
            <ArrowDown className="w-4 h-4 text-cream-soft group-hover:text-pink-soft transition-colors duration-300" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
