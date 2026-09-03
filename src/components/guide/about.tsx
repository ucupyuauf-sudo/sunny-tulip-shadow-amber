import { Reveal, SectionHead, useCountUp, useInView } from "./reveal";
import { Photo } from "./photo";

const COUNTERS = [
  { target: 3, label: "Senyawa aromatik utama" },
  { target: 6, label: "Pemanfaatan sehari-hari" },
  { target: 6, label: "Langkah menanam" },
  { target: 5, label: "Tips perawatan" },
];

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="tentang" className="bg-surface py-20 md:py-28">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Photo
            src="/images/about-sereh.jpg"
            alt="Makro batang sereh merah dengan pangkal kemerahan dan daun hijau beraroma"
            className="aspect-4/3 rounded-2xl shadow-soft"
          />
        </Reveal>
        <Reveal delay={80}>
          <SectionHead
            align="left"
            eyebrow="Pengertian"
            title="Apa Itu Sereh Merah?"
          />
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            Sereh merah (<em>Cymbopogon nardus</em>) adalah jenis tumbuhan rumput-rumputan
            aromatik yang bagian daun dan batangnya kaya akan{" "}
            <span className="mark">minyak atsiri</span>, terutama senyawa{" "}
            <span className="mark">sitronelal</span>, <span className="mark">sitronelol</span>,
            dan <span className="mark">geraniol</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Tanaman ini tumbuh dalam rumpun, menyukai cahaya matahari, dan banyak dibudidayakan
            karena aroma sitronella-nya yang khas — digunakan dalam minuman herbal, produk
            pewangi, hingga bahan baku minyak serai wangi.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Aromatic", "Essential Oil", "Perennial Grass"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold tracking-wide text-leaf uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div ref={ref} className="wrap mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {COUNTERS.map((item) => (
          <CounterCard key={item.label} target={item.target} label={item.label} active={inView} />
        ))}
      </div>
    </section>
  );
}

function CounterCard({
  target,
  label,
  active,
}: {
  target: number;
  label: string;
  active: boolean;
}) {
  const n = useCountUp(target, active);
  return (
    <div className="rounded-2xl border border-border bg-bg px-4 py-5 text-center">
      <p className="font-display text-4xl font-medium tabular-nums text-forest">{n}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
