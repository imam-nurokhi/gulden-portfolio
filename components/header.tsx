"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
  { href: "#music", label: "Music" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com/gulden.band", label: "Instagram" },
  { href: "https://open.spotify.com/artist/gulden", label: "Spotify" },
  { href: "https://youtube.com/@gulden", label: "YouTube" },
  { href: "https://soundcloud.com/gulden", label: "SoundCloud" },
];

export function Header() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);

      const options: Intl.DateTimeFormatOptions = { weekday: "short" };
      const day = now.toLocaleDateString("id-ID", options).toUpperCase();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      setCurrentDate(`${day}, ${month}/${date}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-5 transition-colors duration-500 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
        }`}
      >
        {/* Date - Hidden on mobile */}
        <div
          className={`hidden md:block text-xs font-mono tracking-wider transition-colors duration-300 ${
            isScrolled || isMenuOpen ? "text-foreground" : "text-white"
          }`}
        >
          {currentDate}
        </div>

        {/* Logo - Visible on mobile */}
        <Link
          href="/"
          className={`md:hidden text-lg font-bold tracking-tight transition-colors duration-300 ${
            isScrolled || isMenuOpen ? "text-foreground" : "text-white"
          }`}
        >
          Gulden
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-2 md:gap-3">
          <Link
            href="#music"
            className="hidden md:flex px-4 py-2 bg-accent text-accent-foreground rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 hover:scale-105 glow-accent"
          >
            Listen Now
          </Link>
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
              isScrolled
                ? "bg-foreground text-background"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30"
            }`}
          >
            Menu
          </button>
        </nav>

        {/* Time - Hidden on mobile */}
        <div
          className={`hidden md:block text-xs font-mono tracking-wider transition-colors duration-300 ${
            isScrolled || isMenuOpen ? "text-foreground" : "text-white"
          }`}
        >
          {currentTime}
        </div>

        {/* Time on mobile - right side */}
        <div
          className={`md:hidden text-xs font-mono tracking-wider transition-colors duration-300 ${
            isScrolled || isMenuOpen ? "text-foreground" : "text-white"
          }`}
        >
          {currentTime}
        </div>
      </motion.header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 md:top-5 md:right-8 p-3 rounded-full bg-muted hover:bg-border transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
              {/* Nav Links */}
              <nav className="space-y-2 md:space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center gap-4"
                    >
                      <span className="text-xs font-mono text-muted-foreground">
                        0{index + 1}
                      </span>
                      <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight hover:text-accent transition-colors duration-300">
                        {link.label}
                      </span>
                      <motion.span
                        className="h-[2px] bg-accent origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: "60px" }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-8 left-8 right-8 md:left-16 md:right-16 lg:left-24 lg:right-24"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-border pt-8">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                      Genre
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-gradient">
                      Mid-oriental Funk
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 md:gap-6">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
