import Link from "next/link";

export function IntroSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 text-center">
      <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
        Gulden transforms raw emotion into sonic landscapes — seamlessly blending rock, alternative, and experimental sounds.
      </p>
      <Link
        href="#music"
        className="inline-block mt-10 text-foreground underline underline-offset-8 hover:text-accent transition-colors duration-300 text-sm tracking-wide"
      >
        Explore the Music
      </Link>
    </section>
  );
}
