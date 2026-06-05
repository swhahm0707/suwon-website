import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Insights from "./components/Insights";
import Contact from "./components/Contact";

export default function App() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  const hideNavbar = activeModalId !== null;

  return (
    <div className="min-h-screen bg-cream-soft font-sans overflow-x-hidden selection:bg-pink-soft selection:text-white antialiased custom-scrollbar">
      {/* Sticky Top Navigation */}
      {!hideNavbar && <Navbar />}

      {/* Hero Cinema section */}
      <Hero />

      {/* Scrollable Main Content wrapper */}
      <main className="relative z-10 shadow-2xl">
        {/* About section */}
        <About />

        {/* Dynamic Project catalog section */}
        <Projects onModalOpenChange={setActiveModalId} />

        {/* Deep dive Essays section */}
        <Insights onActiveChange={setActiveModalId} />
      </main>

      {/* Bottom Footer contact grid */}
      <Contact />
    </div>
  );
}
