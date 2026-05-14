"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

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

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {works.map((work) => (
            <div
              key={work.id}
              className="embla__slide relative flex-[0_0_100%] min-w-0 h-full"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
                priority={work.id === 1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-20 left-4 md:left-8 right-4 md:right-8 flex flex-col md:flex-row justify-between md:items-end gap-2">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                  {work.title}
                </h2>
                <p className="text-xl md:text-3xl text-white/70 font-light">
                  {work.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {works.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-white w-6"
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
