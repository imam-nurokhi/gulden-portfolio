"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: selectedIndex === index ? 1 : 0,
                  y: selectedIndex === index ? 0 : 30,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-24 md:bottom-28 left-4 md:left-8 right-4 md:right-8"
              >
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-medium mb-2 md:mb-3">
                  {work.subtitle}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                  {work.title}
                </h2>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Track List - Desktop Only */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-20">
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

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-8 pb-6 md:pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Genre Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Mid-oriental Funk
            </span>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="group p-1"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`block h-1 rounded-full transition-all duration-500 ${
                    index === selectedIndex
                      ? "bg-accent w-8"
                      : "bg-white/30 w-2 group-hover:bg-white/50 group-hover:w-3"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={scrollToContent}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider hidden md:inline">Scroll</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
