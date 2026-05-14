import Link from "next/link";

export function IntroSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 text-center">
      <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed text-balance">
        11 lagu. 11 cerita. Dari keresahan menjadi aku hingga pusara badai — album pertama Gulden adalah perjalanan emosi yang tak terduga.
      </p>
      <Link
        href="#music"
        className="inline-block mt-10 text-foreground underline underline-offset-8 hover:text-accent transition-colors duration-300 text-sm tracking-wide"
      >
        Dengarkan Sekarang
      </Link>
    </section>
  );
}
