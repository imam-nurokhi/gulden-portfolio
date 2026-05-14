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
              Alternative Rock Band
              <br />
              with Focus on Sound and Vision.
            </p>
          </div>

          {/* Contact */}
          <div>
            <Link
              href="mailto:contact@gulden.band"
              className="text-sm hover:text-accent transition-colors block"
            >
              contact@gulden.band
            </Link>
            <Link
              href="tel:+1234567890"
              className="text-sm hover:text-accent transition-colors block mt-1"
            >
              +1 234 567 890
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              Los Angeles, CA
              <br />
              United States
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-1.5">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              YouTube
            </Link>
            <Link
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              Spotify
            </Link>
            <Link
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              SoundCloud
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-1.5">
            <Link
              href="#"
              className="text-sm hover:text-accent transition-colors"
            >
              Imprint
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-accent transition-colors"
            >
              Terms
            </Link>
            <span className="text-sm text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()}
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
