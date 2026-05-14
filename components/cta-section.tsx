import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-8">
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-[1.1] max-w-6xl tracking-tight text-balance">
        Dari keresahan,
        <br />
        lahir suara yang tak terbungkam.
      </h2>
      <Link
        href="mailto:contact@gulden.band"
        className="inline-block mt-8 md:mt-16 text-3xl md:text-5xl lg:text-6xl text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        Mari berkolaborasi.
      </Link>
    </section>
  );
}
