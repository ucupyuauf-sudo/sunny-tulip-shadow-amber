import { Reveal, SectionHead } from "./reveal";
import { Photo } from "./photo";
import { GrowthStages } from "./leaf-art";

const STEPS = [
  {
    n: "01",
    title: "Siapkan Bibit",
    text: "Gunakan potongan stek batang atau pemisahan anakan/rumpun sereh merah yang sehat dan memiliki akar.",
  },
  {
    n: "02",
    title: "Siapkan Tanah",
    text: "Gunakan media tanam yang gembur, kaya bahan organik, dan memiliki drainase yang baik.",
  },
  {
    n: "03",
    title: "Tanam Bibit",
    text: "Tanam bibit ke dalam tanah atau pot besar dengan kedalaman sekitar 10–15 cm.",
  },
  {
    n: "04",
    title: "Siram Secukupnya",
    text: "Lakukan penyiraman setelah penanaman agar media tetap lembap, tetapi jangan sampai tergenang.",
  },
  {
    n: "05",
    title: "Beri Jarak",
    text: "Jika ditanam langsung di tanah, beri jarak antar tanaman agar rumpun dapat berkembang dengan baik.",
  },
  {
    n: "06",
    title: "Tempat Terbuka",
    text: "Letakkan tanaman pada area yang mendapatkan sinar matahari yang cukup/penuh.",
  },
];

export function Planting() {
  return (
    <section id="menanam" className="bg-surface py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Budidaya"
            title="Cara Menanam Sereh Merah"
            subtitle="Enam langkah ringkas untuk menumbuhkan rumpun yang sehat di kebun atau pot besar."
          />
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <Photo
              src="/images/plant-sereh.jpg"
              alt="Tangan menanam rumpun sereh merah ke dalam tanah kebun yang gembur"
              className="aspect-4/3 rounded-2xl shadow-soft"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-bg p-4 md:p-5">
              <GrowthStages className="w-full text-leaf" />
            </div>
          </Reveal>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.n}>
              <Reveal delay={(i % 3) * 70}>
                <article className="card-lift relative h-full rounded-2xl bg-bg p-6">
                  <span className="font-display text-3xl text-citron">{step.n}</span>
                  <h3 className="mt-3 font-display text-xl font-medium text-forest">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
