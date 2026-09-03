import { Bug, Droplets, Leaf, Scissors, Waves } from "lucide-react";
import { Reveal, SectionHead } from "./reveal";

const TIPS = [
  {
    icon: Droplets,
    title: "Penyiraman",
    text: "Siram secara rutin sekitar 2 kali seminggu dan sesuaikan dengan kondisi cuaca serta kelembapan media. Hindari genangan air.",
  },
  {
    icon: Leaf,
    title: "Pemupukan",
    text: "Berikan pupuk organik, kompos, atau mulsa secara berkala, misalnya sekitar setiap 2 bulan, sesuai kondisi pertumbuhan tanaman.",
  },
  {
    icon: Scissors,
    title: "Pemangkasan",
    text: "Bersihkan daun yang tua, kering, atau rusak agar rumpun tetap rapi dan membantu menjaga kebersihan tanaman.",
  },
  {
    icon: Bug,
    title: "Pengendalian Hama",
    text: "Periksa rumpun secara berkala. Bersihkan gulma dan singkirkan bagian tanaman yang menunjukkan tanda serangan hama atau penyakit.",
  },
  {
    icon: Waves,
    title: "Drainase",
    text: "Pastikan pot atau saluran tanah memiliki drainase yang baik agar air tidak menggenang dan akar tetap sehat.",
  },
];

export function Care() {
  return (
    <section id="perawatan" className="bg-bg py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Perawatan"
            title="Tips Merawat Sereh Merah"
            subtitle="Rumpun yang rapi, media yang gembur, dan drainase yang lancar membuat sereh merah tumbuh lebih baik."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TIPS.map((tip, i) => {
            const Icon = tip.icon;
            return (
              <Reveal key={tip.title} delay={i * 60}>
                <article className="card-lift flex h-full flex-col rounded-2xl bg-surface p-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-mist text-leaf">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-forest">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{tip.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
