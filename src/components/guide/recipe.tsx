import { useEffect, useId, useState } from "react";
import { Citrus, Clock, Droplets, Leaf, Users, Wheat, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Photo } from "./photo";
import { Reveal, SectionHead } from "./reveal";

const INGREDIENTS = [
  { icon: Leaf, text: "3–4 batang serai merah, cuci bersih dan buang daun atasnya" },
  { icon: Wheat, text: "2 ruas jari jahe merah (opsional, untuk memberikan rasa hangat)" },
  { icon: Droplets, text: "500 ml air" },
  { icon: Wheat, text: "2 sdm gula aren/gula merah, dapat diganti madu" },
  { icon: Citrus, text: "1/2 buah jeruk nipis, opsional" },
];

const STEPS = [
  {
    n: "01",
    title: "Memarkan Bahan",
    text: "Geprek bagian putih serai merah dan jahe hingga memar agar aroma dan komponen aromatiknya lebih mudah keluar saat direbus.",
  },
  {
    n: "02",
    title: "Rebus",
    text: "Masukkan serai, jahe, dan gula aren ke dalam panci berisi 500 ml air. Rebus dengan api sedang hingga mendidih dan aroma harumnya keluar selama sekitar 10–15 menit.",
  },
  {
    n: "03",
    title: "Sajikan",
    text: "Matikan api lalu saring air rebusan ke dalam cangkir. Tambahkan perasan jeruk nipis atau madu sesuai selera. Sajikan selagi hangat.",
  },
];

export function Recipe() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resep" className="botanical-wash py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Resep dapur"
            title="Resep Minuman Sereh & Jahe"
            subtitle="Minuman herbal hangat dengan aroma sitronella. Bukan obat, melainkan sajian dapur yang harum dan menenangkan."
          />
        </Reveal>

        <Reveal delay={80}>
          <article className="mt-12 overflow-hidden rounded-2xl bg-surface shadow-card md:grid md:grid-cols-2">
            <Photo
              src="/images/tea-sereh.jpg"
              alt="Cangkir minuman herbal sereh jahe hangat dengan batang sereh, jahe, dan jeruk nipis"
              className="aspect-4/3 md:aspect-auto md:min-h-full"
            />
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2">
                <Meta icon={Clock} label="15 menit" />
                <Meta icon={Users} label="2 sajian" />
                <Meta icon={Droplets} label="Hangat" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium text-forest">Bahan-Bahan</h3>
              <ul className="mt-4 space-y-3">
                {INGREDIENTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex gap-3 text-sm text-ink md:text-base">
                      <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-mist text-leaf">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="mt-6 inline-flex min-h-12 items-center rounded-full bg-forest px-6 text-sm font-semibold text-cream transition-transform duration-150 hover:bg-forest-deep active:scale-[0.96]"
              >
                Lihat Resep Lengkap
              </button>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <article className="relative h-full rounded-2xl border border-border bg-surface p-6">
                <span className="font-display text-3xl text-citron">{step.n}</span>
                <h3 className="mt-3 font-display text-xl font-medium text-forest">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      {open ? <RecipeDialog onClose={() => setOpen(false)} /> : null}
    </section>
  );
}

function Meta({ icon: Icon, label }: { icon: typeof Clock; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-xs font-medium text-leaf">
      <Icon className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}

function RecipeDialog({ onClose }: { onClose: () => void }) {
  const titleId = useId();

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-forest-deep/50"
        aria-label="Tutup resep"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-surface p-6 shadow-soft sm:rounded-2xl sm:p-8",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Resep lengkap</p>
            <h3 id={titleId} className="mt-2 font-display text-3xl font-medium text-forest">
              Minuman Sereh & Jahe
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-forest"
            aria-label="Tutup"
          >
            <X className="size-5" />
          </button>
        </div>
        <p className="mt-3 text-sm text-muted">
          Proses: memarkan bahan, rebus 10–15 menit, saring, lalu sajikan hangat.
        </p>
        <h4 className="mt-6 font-display text-xl text-forest">Bahan</h4>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink">
          {INGREDIENTS.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
        <ol className="mt-6 space-y-4">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded-xl bg-bg p-4">
              <p className="text-xs font-semibold tracking-brand text-sage uppercase">
                Langkah {step.n}
              </p>
              <p className="mt-1 font-display text-lg text-forest">{step.title}</p>
              <p className="mt-1 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 rounded-xl bg-mist p-4 text-sm text-leaf">
          <p className="font-semibold text-forest">Tips penyajian</p>
          <ul className="mt-2 list-disc space-y-1 pl-4">
            <li>Sajikan selagi hangat agar aroma sitronella lebih terasa.</li>
            <li>Bisa juga didinginkan dan disajikan dengan es, sesuai selera.</li>
            <li>Madu sebaiknya ditambahkan setelah air tidak terlalu panas.</li>
          </ul>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Informasi resep ini bersifat edukatif untuk pemanfaatan dapur. Bukan pengganti diagnosis,
          pengobatan, atau saran tenaga kesehatan. Hentikan konsumsi jika timbul reaksi yang tidak
          nyaman dan konsultasikan ke profesional kesehatan bila diperlukan.
        </p>
      </div>
    </div>
  );
}
