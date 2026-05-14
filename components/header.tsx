"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);

      const day = now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-5">
      <div 
        className={`text-sm font-medium transition-colors duration-300 ${
          isScrolled ? "text-foreground" : "text-white"
        }`}
      >
        {currentDate}
      </div>

      <nav className="flex items-center gap-2">
        <Link
          href="#music"
          className="px-5 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105"
        >
          MUSIC
        </Link>
        <button 
          className="px-5 py-2.5 bg-foreground/90 text-background rounded-full text-sm font-medium hover:bg-foreground transition-all duration-300 hover:scale-105"
        >
          MENU
        </button>
      </nav>

      <div 
        className={`text-sm font-medium transition-colors duration-300 ${
          isScrolled ? "text-foreground" : "text-white"
        }`}
      >
        {currentTime}
      </div>
    </header>
  );
}
