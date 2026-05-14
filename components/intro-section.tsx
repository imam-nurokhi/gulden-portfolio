"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intro" className="py-24 md:py-40 px-4 md:px-8 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-6 md:mb-8">
            Album Pertama
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground/90 text-balance"
        >
          11 lagu. 11 cerita.{" "}
          <span className="text-muted-foreground">
            Dari keresahan menjadi aku hingga pusara badai — perjalanan emosi yang tak terduga
            dalam balutan{" "}
          </span>
          <span className="text-gradient font-semibold">Mid-east Oriental Funk</span>
          <span className="text-muted-foreground">.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-14"
        >
          <Link
            href="#music"
            className="inline-flex items-center gap-3 group"
          >
            <span className="h-[1px] w-8 bg-accent group-hover:w-12 transition-all duration-300" />
            <span className="text-sm uppercase tracking-wider text-foreground/80 group-hover:text-foreground transition-colors">
              Dengarkan Sekarang
            </span>
            <span className="h-[1px] w-8 bg-accent group-hover:w-12 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
