import { BookOpen, Droplets, Leaf, Repeat, Wheat, Wind } from "lucide-react";

const FACTS = [
  { icon: BookOpen, text: "Nama ilmiahnya adalah Cymbopogon nardus" },
  { icon: Wheat, text: "Termasuk famili Poaceae" },
  { icon: Leaf, text: "Merupakan tanaman rumput-rumputan aromatik" },
  { icon: Droplets, text: "Dapat menghasilkan minyak atsiri" },
  { icon: Repeat, text: "Bagian yang umum dimanfaatkan adalah daun dan batang" },
  { icon: Wind, text: "Citronella banyak dikenal karena aroma khasnya" },
];

export function Facts() {
  const loop = [...FACTS, ...FACTS];
  return (
    <section id="fakta" className="overflow-hidden bg-forest py-16 text-cream">
      <div className="wrap mb-8 text-center">
        <p className="text-xs font-semibold tracking-brand text-citron-soft uppercase">
          Tahukah kamu?
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-cream md:text-4xl">
          Fakta singkat Sereh Merah
        </h2>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-forest to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-forest to-transparent" />
        <div className="marquee-track gap-4 px-4">
          {loop.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <article
                key={`${fact.text}-${i}`}
                className="flex min-w-72 items-center gap-3 rounded-2xl border border-cream/10 bg-forest-deep/50 px-5 py-4"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-cream/10 text-citron-soft">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-snug text-cream">{fact.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
