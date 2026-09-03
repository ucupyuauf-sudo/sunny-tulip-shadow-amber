import { Droplets, Flower2, Wind } from "lucide-react";
import { Reveal, SectionHead } from "./reveal";
import { Photo } from "./photo";

const COMPOUNDS = [
  {
    icon: Wind,
    name: "Sitronelal",
    text: "Salah satu komponen utama minyak atsiri sereh wangi yang memberi karakter aroma sitronella yang segar dan mudah dikenali.",
  },
  {
    icon: Droplets,
    name: "Sitronelol",
    text: "Senyawa aromatik yang terdapat dalam minyak atsiri dan sering dijumpai pada rangkaian pewangi serta produk perawatan beraroma herbal.",
  },
  {
    icon: Flower2,
    name: "Geraniol",
    text: "Senyawa aromatik yang banyak digunakan dalam industri pewangi karena profil harumnya yang lembut dan floral-herbal.",
  },
];

export function Compounds() {
  return (
    <section id="kandungan" className="bg-bg py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Minyak atsiri"
            title="Kandungan Minyak Atsiri"
            subtitle="Daun dan batang sereh merah dikenal sebagai sumber minyak atsiri. Berikut tiga senyawa yang paling sering dibahas."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal>
            <Photo
              src="/images/oil-sereh.jpg"
              alt="Botol kaca minyak atsiri citronella di atas linen bersama potongan batang sereh"
              className="h-full min-h-72 rounded-2xl shadow-soft"
            />
          </Reveal>
          <div className="grid gap-4">
            {COMPOUNDS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.name} delay={i * 80}>
                  <article className="card-lift flex gap-4 rounded-2xl bg-surface p-5">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-mist text-leaf">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-forest">{item.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal>
          <p className="mt-8 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-muted">
            Catatan: komposisi minyak atsiri dapat berbeda bergantung pada varietas, bagian
            tanaman, kondisi tumbuh, dan metode ekstraksi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
