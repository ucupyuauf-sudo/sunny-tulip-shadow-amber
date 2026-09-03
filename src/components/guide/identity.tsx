import { BookOpen, Layers, Leaf, Repeat, Wheat } from "lucide-react";
import { Reveal, SectionHead } from "./reveal";

const ITEMS = [
  {
    icon: Leaf,
    label: "Nama Umum",
    value: "Sereh Merah / Sereh Wangi / Citronella",
  },
  {
    icon: BookOpen,
    label: "Nama Ilmiah",
    value: "Cymbopogon nardus",
  },
  {
    icon: Wheat,
    label: "Famili",
    value: "Poaceae (Suku rumput-rumputan)",
  },
  {
    icon: Repeat,
    label: "Jenis",
    value: "Tanaman rumpun menahun (perennial)",
  },
  {
    icon: Layers,
    label: "Bagian yang Dimanfaatkan",
    value: "Batang dan Daun",
  },
];

export function Identity() {
  return (
    <section id="identitas" className="leaf-pattern py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Identitas tanaman"
            title="Mengenal Sereh Merah"
            subtitle="Ringkasan botani yang memudahkan Anda membedakan sereh merah dari rumput-rumputan lain di kebun."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={i * 70}>
                <article className="card-lift h-full rounded-2xl bg-surface p-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-mist text-leaf">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xs font-semibold tracking-brand text-sage uppercase">
                    {item.label}
                  </h3>
                  <p className="mt-2 font-display text-lg font-medium leading-snug text-forest">
                    {item.value}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
