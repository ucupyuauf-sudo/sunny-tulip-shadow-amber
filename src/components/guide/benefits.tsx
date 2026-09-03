import { Bug, CupSoda, FlaskConical, Hand, Info, Soup, Wind } from "lucide-react";
import { Reveal, SectionHead } from "./reveal";

const BENEFITS = [
  {
    n: "01",
    icon: FlaskConical,
    title: "Sumber Minyak Atsiri",
    text: "Ekstrak daun dan batangnya kaya akan senyawa seperti sitronelal dan geraniol yang menjadi bagian penting dalam produksi minyak serai wangi untuk berbagai kebutuhan industri.",
  },
  {
    n: "02",
    icon: Bug,
    title: "Repelan Nyamuk",
    text: "Aroma khas citronella banyak dimanfaatkan dalam produk pengusir nyamuk dan serangga.",
  },
  {
    n: "03",
    icon: Hand,
    title: "Relaksasi dan Pijat",
    text: "Minyak citronella dapat dimanfaatkan dalam produk aromaterapi dan minyak pijat untuk memberikan sensasi aroma yang menyegarkan dan relaksasi.",
  },
  {
    n: "04",
    icon: Soup,
    title: "Pemanfaatan Tradisional untuk Pencernaan",
    text: "Air rebusan sereh secara tradisional digunakan oleh sebagian masyarakat sebagai minuman herbal untuk membantu memberikan rasa nyaman setelah makan.",
  },
  {
    n: "05",
    icon: CupSoda,
    title: "Minuman Herbal",
    text: "Sereh dapat digunakan sebagai bahan minuman herbal dan dapat dikombinasikan dengan jahe, madu, atau jeruk nipis.",
  },
  {
    n: "06",
    icon: Wind,
    title: "Aromaterapi",
    text: "Aroma sereh banyak dimanfaatkan dalam produk aromaterapi, pewangi, dan produk perawatan tubuh.",
  },
];

export function Benefits() {
  return (
    <section id="manfaat" className="bg-surface py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Pemanfaatan"
            title="Manfaat dan Pemanfaatan Sereh Merah"
            subtitle="Beragam cara sereh merah hadir di dapur, kebun, dan industri — tanpa klaim medis."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {BENEFITS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.n} delay={(i % 3) * 70}>
                <article className="card-lift flex h-full flex-col rounded-2xl bg-bg p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-mist text-leaf">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl text-citron">{item.n}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-forest">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <aside className="mt-8 flex gap-3 rounded-2xl border border-border bg-mist/70 px-5 py-4 text-sm text-leaf">
            <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p>
              Informasi manfaat pada halaman ini bersifat edukatif dan menggambarkan penggunaan
              tradisional maupun pemanfaatan umum. Informasi ini bukan pengganti diagnosis,
              pengobatan, atau saran tenaga kesehatan.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
