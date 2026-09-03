import { Bug, FlaskConical, Leaf } from "lucide-react";
import { Reveal, SectionHead } from "./reveal";
import { Photo } from "./photo";

const USES = [
  {
    icon: Leaf,
    title: "Herbal",
    text: "Digunakan sebagai bahan minuman herbal dan penggunaan tradisional.",
  },
  {
    icon: Bug,
    title: "Repelan",
    text: "Aromanya dimanfaatkan dalam berbagai produk pengusir serangga.",
  },
  {
    icon: FlaskConical,
    title: "Industri",
    text: "Minyak atsirinya dapat digunakan dalam parfum, aromaterapi, pewangi, dan produk perawatan tertentu.",
  },
];

export function Uses() {
  return (
    <section id="pemanfaatan" className="py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Dalam keseharian"
            title="Sereh Merah dalam Kehidupan Sehari-hari"
            subtitle="Dari cangkir di dapur hingga botol pewangi — satu tanaman, tiga dunia pemanfaatan."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {USES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <article className="card-lift flex h-full gap-4 rounded-2xl bg-surface p-5">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-mist text-leaf">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-forest">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={100}>
            <Photo
              src="/images/garden-sereh.jpg"
              alt="Kebun sereh merah di pagi hari dengan rumpun hijau dan jalur tanah"
              className="h-full min-h-72 rounded-2xl shadow-soft"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
