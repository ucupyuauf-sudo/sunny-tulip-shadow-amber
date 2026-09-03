import { ArrowDown, Sprout } from "lucide-react";
import { Blob, GrassSilhouette } from "./leaf-art";
import { Photo } from "./photo";
import { scrollToId } from "./nav-data";

const STATS = [
  { value: "Cymbopogon nardus", label: "Nama Ilmiah" },
  { value: "Poaceae", label: "Famili" },
  { value: "Perennial", label: "Jenis Tanaman" },
  { value: "Batang & Daun", label: "Bagian Dimanfaatkan" },
];

export function Hero() {
  return (
    <section
      id="beranda"
      className="botanical-wash relative overflow-hidden pb-10 pt-24 md:pb-16 md:pt-28"
    >
      <div className="pointer-events-none absolute -left-24 top-16 size-72 rounded-full bg-sage/15 blur-2xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-citron/15 blur-3xl" />
      <GrassSilhouette className="pointer-events-none absolute -right-10 top-24 w-[28rem] text-forest/10" />

      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p
            className="hero-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-[0.7rem] font-semibold tracking-brand text-leaf uppercase"
            style={{ animationDelay: "40ms" }}
          >
            <Sprout className="size-3.5 text-citron" aria-hidden="true" />
            Herbal Plant · Botanical Guide
          </p>
          <h1
            className="hero-rise mt-5 font-display text-5xl font-medium text-forest md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Sereh Merah
          </h1>
          <p
            className="hero-rise mt-3 font-display text-xl italic text-sage md:text-2xl"
            style={{ animationDelay: "200ms" }}
          >
            Cymbopogon nardus
          </p>
          <p
            className="hero-rise mt-5 max-w-lg text-base text-muted md:text-lg"
            style={{ animationDelay: "280ms" }}
          >
            Tanaman aromatik dari keluarga rumput-rumputan yang dikenal kaya akan minyak atsiri
            dan memiliki beragam pemanfaatan dalam kehidupan sehari-hari.
          </p>
          <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <button
              type="button"
              onClick={() => scrollToId("identitas")}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-6 text-sm font-semibold text-cream transition-transform duration-150 hover:bg-forest-deep active:scale-[0.96]"
            >
              Jelajahi Informasi
            </button>
            <button
              type="button"
              onClick={() => scrollToId("menanam")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest/20 bg-surface px-6 text-sm font-semibold text-forest transition-colors duration-150 hover:bg-mist active:scale-[0.96]"
            >
              Cara Menanam
              <ArrowDown className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="hero-rise relative" style={{ animationDelay: "200ms" }}>
          <Blob className="left-6 top-8 size-64 bg-leaf/20 md:size-80" />
          <Blob className="right-4 bottom-6 size-40 bg-citron/25" />
          <Photo
            src="/images/hero-sereh.jpg"
            alt="Tanaman sereh merah dalam pot terakota dengan daun hijau melengkung dan pangkal batang kemerahan"
            lazy={false}
            className="relative aspect-3/4 max-h-[34rem] w-full rounded-2xl shadow-soft md:aspect-4/5"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-surface/80 px-4 py-3 backdrop-blur-md md:right-auto">
            <p className="text-[0.68rem] font-semibold tracking-brand text-sage uppercase">
              Citronella grass
            </p>
            <p className="mt-1 font-display text-lg text-forest">Rumpun aromatik menahun</p>
          </div>
        </div>
      </div>

      <div className="wrap mt-12 md:mt-16">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-card md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={cnStat(i)}
            >
              <dt className="text-[0.68rem] font-semibold tracking-brand text-sage uppercase">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-lg font-medium text-forest md:text-xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function cnStat(i: number) {
  const edges = [
    "border-border p-5 md:border-r",
    "border-border p-5 md:border-r",
    "border-t border-border p-5 md:border-t-0 md:border-r",
    "border-t border-border p-5 md:border-t-0",
  ];
  return edges[i];
}
