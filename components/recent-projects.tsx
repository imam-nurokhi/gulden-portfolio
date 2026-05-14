"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Play, Pause, MoreHorizontal } from "lucide-react";

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

  return (
    <section id="music" className="px-4 md:px-8 pb-24">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Album Pertama
        </h2>
        <Link
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Listen Now
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Album Cover */}
        <div className="relative aspect-square rounded-2xl overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop"
            alt="Gulden - Album Pertama"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-accent flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </button>
          </div>
          <div className="absolute bottom-6 left-6">
            <p className="text-white/60 text-sm mb-1">Album Pertama</p>
            <h3 className="text-white text-2xl font-bold">Gulden</h3>
          </div>
        </div>

        {/* Tracklist */}
        <div className="flex flex-col">
          <div className="border-b border-border pb-4 mb-2">
            <p className="text-muted-foreground text-sm">11 Tracks</p>
          </div>

          <div className="flex flex-col">
            {albumTracks.map((track) => (
              <div
                key={track.id}
                className="group flex items-center gap-4 py-3 px-2 -mx-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredTrack(track.id)}
                onMouseLeave={() => setHoveredTrack(null)}
                onClick={() =>
                  setPlayingTrack(playingTrack === track.id ? null : track.id)
                }
              >
                {/* Track Number / Play Button */}
                <div className="w-8 flex items-center justify-center">
                  {playingTrack === track.id ? (
                    <Pause className="w-4 h-4 text-accent" />
                  ) : hoveredTrack === track.id ? (
                    <Play className="w-4 h-4 text-foreground" />
                  ) : (
                    <span className="text-sm text-muted-foreground font-mono">
                      {String(track.id).padStart(2, "0")}
                    </span>
                  )}
                </div>

                {/* Track Title */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-medium truncate ${
                      playingTrack === track.id
                        ? "text-accent"
                        : "text-foreground"
                    }`}
                  >
                    {track.title}
                  </p>
                </div>

                {/* Duration */}
                <span className="text-sm text-muted-foreground">
                  {track.duration}
                </span>

                {/* More Options */}
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded">
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>

          {/* Total Duration */}
          <div className="border-t border-border mt-4 pt-4">
            <p className="text-muted-foreground text-sm">
              Total Duration: 47:45
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
