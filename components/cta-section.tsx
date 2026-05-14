"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-40 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-copper/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-6 md:mb-8">
            Manifesto
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight text-balance"
        >
          Dari keresahan,
          <br />
          <span className="text-muted-foreground">lahir suara yang</span>
          <br />
          <span className="text-gradient">tak terbungkam.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-20 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Link
            href="mailto:gulden.band@gmail.com"
            id="contact"
            className="group inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
          >
            <span>Mari Berkolaborasi</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            href="#music"
            className="group inline-flex items-center gap-3 px-6 py-4 border border-border rounded-full font-semibold hover:bg-muted transition-all duration-300"
          >
            <span>Dengarkan Album</span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "11", label: "Tracks" },
            { value: "47:45", label: "Runtime" },
            { value: "2024", label: "Release" },
            { value: "1st", label: "Album" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
