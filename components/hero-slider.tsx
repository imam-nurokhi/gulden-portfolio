"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";

interface Work {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const works: Work[] = [
  {
    id: 1,
    title: "Menjadi Aku",
    subtitle: "Lead Single",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop",
  },
  {
    id: 2,
    title: "Akal-akalan Semesta",
    subtitle: "Album Track",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1920&h=1080&fit=crop",
  },
  {
    id: 3,
    title: "Elegi Pahit di Tepi Neraka",
    subtitle: "Fan Favorite",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&h=1080&fit=crop",
  },
  {
    id: 4,
    title: "Mati Rasa",
    subtitle: "Deep Cut",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop",
  },
  {
    id: 5,
    title: "Pusara Badai",
    subtitle: "Album Closer",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&h=1080&fit=crop",
  },
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollToContent = () => {
    const element = document.getElementById("intro");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-10" />

      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="embla__slide relative flex-[0_0_100%] min-w-0 h-full"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover scale-105 transition-transform duration-[2s]"
                priority={work.id === 1}
                style={{
                  transform: selectedIndex === index ? "scale(1)" : "scale(1.05)",
                }}
              />
              {/* Premium Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent" />

              {/* Content - Repositioned for mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: selectedIndex === index ? 1 : 0,
                  y: selectedIndex === index ? 0 : 30,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-40 md:bottom-32 left-5 md:left-10 right-5 md:right-auto max-w-2xl"
              >
                {/* Track Number Badge - Premium Mobile */}
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: selectedIndex === index ? 1 : 0, x: selectedIndex === index ? 0 : -20 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-accent/50 flex items-center justify-center backdrop-blur-sm bg-accent/10">
                    <Play className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent" />
                  </span>
                  <div className="h-px w-8 md:w-12 bg-gradient-to-r from-accent to-transparent" />
                </motion.div>

                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-2 md:mb-3">
                  {work.subtitle}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                  {work.title}
                </h2>

                {/* Track Progress - Premium Detail */}
                <div className="mt-4 md:mt-6 flex items-center gap-3">
                  <span className="text-xs font-mono text-white/50">
                    {String(selectedIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="h-[2px] w-16 md:w-24 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={selectedIndex}
                    />
                  </div>
                  <span className="text-xs font-mono text-white/50">
                    {String(works.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Track List - Desktop Only */}
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-3 z-20">
        {works.map((work, index) => (
          <button
            key={work.id}
            onClick={() => scrollTo(index)}
            className={`group flex items-center gap-3 transition-all duration-300 ${
              index === selectedIndex ? "opacity-100" : "opacity-50 hover:opacity-80"
            }`}
          >
            <span
              className={`h-[2px] transition-all duration-500 ${
                index === selectedIndex ? "w-8 bg-accent" : "w-4 bg-white/50 group-hover:w-6 group-hover:bg-white"
              }`}
            />
            <span
              className={`text-xs font-mono tracking-wider transition-colors ${
                index === selectedIndex ? "text-white" : "text-white/50"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom Bar - Redesigned for Mobile */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Pagination Dots - Center */}
        <div className="flex justify-center gap-2 mb-4 md:mb-6">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="group p-1.5"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  index === selectedIndex
                    ? "bg-accent w-8"
                    : "bg-white/30 w-1.5 group-hover:bg-white/50 group-hover:w-2"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Scroll Indicator - Bottom Center */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={scrollToContent}
          className="flex flex-col items-center gap-1 mx-auto pb-6 text-white/50 hover:text-white transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* Decorative Corner Elements - Premium */}
      <div className="absolute top-20 left-5 md:left-10 w-16 h-16 md:w-24 md:h-24 border-l border-t border-white/10 pointer-events-none" />
      <div className="absolute top-20 right-5 md:right-10 w-16 h-16 md:w-24 md:h-24 border-r border-t border-white/10 pointer-events-none" />
    </section>
  );
}
