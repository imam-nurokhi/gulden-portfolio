import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="px-4 md:px-8 py-16 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {/* Band Info */}
          <div>
            <h3 className="font-bold text-sm mb-3">Gulden</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Indonesian Alternative Band
              <br />
              11 lagu. 11 cerita.
            </p>
          </div>

          {/* Contact */}
          <div>
            <Link
              href="mailto:gulden.band@gmail.com"
              className="text-sm hover:text-accent transition-colors block"
            >
              gulden.band@gmail.com
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              Indonesia
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-1.5">
            <Link
              href="https://instagram.com/gulden.band"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://youtube.com/@gulden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              YouTube
            </Link>
            <Link
              href="https://open.spotify.com/artist/gulden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              Spotify
            </Link>
            <Link
              href="https://soundcloud.com/gulden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              SoundCloud
            </Link>
          </div>

          {/* Album */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium mb-1">Album Pertama</span>
            <Link
              href="#music"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              11 Tracks
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Stream Now
            </Link>
            <span className="text-sm text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} Gulden
            </span>
          </div>
        </div>
      </div>

      {/* Large Band Name - matching Oscar Pecher style */}
      <div className="overflow-hidden px-4 md:px-8 pb-8">
        <h1 className="text-[18vw] md:text-[15vw] font-bold text-muted-foreground/20 leading-[0.85] tracking-tighter whitespace-nowrap select-none">
          Gulden
        </h1>
      </div>
    </footer>
  );
}
