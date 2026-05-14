"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { href: "https://instagram.com/gulden.band", label: "Instagram" },
  { href: "https://open.spotify.com/artist/gulden", label: "Spotify" },
  { href: "https://youtube.com/@gulden", label: "YouTube" },
  { href: "https://soundcloud.com/gulden", label: "SoundCloud" },
  { href: "https://tiktok.com/@gulden.band", label: "TikTok" },
];

const navLinks = [
  { href: "#music", label: "Music" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="mt-auto relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />

      <div className="relative z-10 px-4 md:px-8 py-16 md:py-24 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {/* Band Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Link href="/" className="inline-block mb-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient">
                  Gulden
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
                Indonesian Mid-oriental Funk band. 11 lagu, 11 cerita — dari keresahan lahir suara yang tak terbungkam.
              </p>
              <Link
                href="mailto:gulden.band@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
              >
                <span>gulden.band@gmail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Navigation
              </h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Connect
              </h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-accent transition-colors w-fit inline-flex items-center gap-1.5 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Gulden. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Mid-oriental Funk from Indonesia
            </p>
          </motion.div>
        </div>
      </div>

      {/* Large Band Name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="overflow-hidden px-4 md:px-8 pb-4 md:pb-8"
      >
        <h1 className="text-[20vw] md:text-[15vw] font-bold text-muted/30 leading-[0.85] tracking-tighter whitespace-nowrap select-none text-center">
          Gulden
        </h1>
      </motion.div>
    </footer>
  );
}
