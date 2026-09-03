import { Wordmark } from "./leaf-art";
import { NAV_ITEMS, scrollToId } from "./nav-data";

const FOOTER_LINKS = NAV_ITEMS.filter((item) =>
  ["beranda", "identitas", "manfaat", "resep", "menanam", "perawatan"].includes(item.id),
);

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Wordmark light />
          <h2 className="mt-6 max-w-md font-display text-2xl font-medium text-cream md:text-3xl">
            Sereh Merah — Tanaman Aromatik untuk Kehidupan Sehari-hari
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
            Website edukasi mengenai pengenalan, manfaat, penanaman, dan perawatan Sereh Merah
            (Cymbopogon nardus).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-brand text-citron-soft uppercase">Menu</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {FOOTER_LINKS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="min-h-11 text-left text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sereh Merah Botanical Guide</p>
          <p>Informasi bersifat edukatif, bukan saran medis.</p>
        </div>
      </div>
    </footer>
  );
}
