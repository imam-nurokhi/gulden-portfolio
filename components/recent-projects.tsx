"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { Play, Pause, MoreHorizontal, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface Track {
  id: number;
  title: string;
  duration: string;
}

const albumTracks: Track[] = [
  { id: 1, title: "Menjadi Aku", duration: "4:12" },
  { id: 2, title: "Akal-akalan Semesta", duration: "3:58" },
  { id: 3, title: "Elegi Pahit di Tepi Neraka", duration: "5:24" },
  { id: 4, title: "Mati Rasa", duration: "4:01" },
  { id: 5, title: "Matinya Kepakaran", duration: "3:45" },
  { id: 6, title: "In Absurdum Bahlilia", duration: "4:33" },
  { id: 7, title: "Menunggu Giliran", duration: "3:22" },
  { id: 8, title: "Sepotong Roti di Istana", duration: "4:56" },
  { id: 9, title: "Hari Baik Menanti Kita", duration: "3:49" },
  { id: 10, title: "Katastropik", duration: "4:18" },
  { id: 11, title: "Pusara Badai", duration: "5:07" },
];

export function RecentProjects() {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="music" className="px-4 md:px-8 py-16 md:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />

      <div ref={ref} className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-16"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-2">
              Album Pertama
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Tracklist
            </h2>
          </div>
          <Link
            href="https://open.spotify.com/artist/gulden"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 glow-accent w-fit"
          >
            <span>Stream Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Album Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden group sticky top-24">
              <Image
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop"
                alt="Gulden - Album Pertama"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 glow-accent">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Album Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">
                  2024
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Gulden
                </h3>
                <p className="text-sm text-white/70">
                  Mid-east Oriental Funk
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent" />
            </div>
          </motion.div>

          {/* Tracklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center justify-between pb-4 mb-2 border-b border-border">
              <p className="text-sm text-muted-foreground">11 Tracks</p>
              <p className="text-sm text-muted-foreground">47:45</p>
            </div>

            <div className="flex flex-col">
              {albumTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.03 }}
                  className="group flex items-center gap-3 md:gap-4 py-3 md:py-4 px-2 md:px-3 -mx-2 md:-mx-3 rounded-xl hover:bg-muted/50 transition-all duration-300 cursor-pointer border-b border-border/30 last:border-0"
                  onMouseEnter={() => setHoveredTrack(track.id)}
                  onMouseLeave={() => setHoveredTrack(null)}
                  onClick={() =>
                    setPlayingTrack(playingTrack === track.id ? null : track.id)
                  }
                >
                  {/* Track Number / Play Button */}
                  <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-accent/20 transition-colors">
                    {playingTrack === track.id ? (
                      <Pause className="w-4 h-4 text-accent" />
                    ) : hoveredTrack === track.id ? (
                      <Play className="w-4 h-4 text-accent" />
                    ) : (
                      <span className="text-xs md:text-sm text-muted-foreground font-mono">
                        {String(track.id).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {/* Track Title */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-medium text-sm md:text-base truncate transition-colors ${
                        playingTrack === track.id
                          ? "text-accent"
                          : "text-foreground group-hover:text-foreground"
                      }`}
                    >
                      {track.title}
                    </p>
                  </div>

                  {/* Duration */}
                  <span className="text-xs md:text-sm text-muted-foreground font-mono">
                    {track.duration}
                  </span>

                  {/* More Options */}
                  <button
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 md:p-2 hover:bg-muted rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
