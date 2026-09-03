export const NAV_ITEMS = [
  { id: "beranda", label: "Beranda" },
  { id: "identitas", label: "Identitas" },
  { id: "tentang", label: "Tentang" },
  { id: "manfaat", label: "Manfaat" },
  { id: "resep", label: "Resep" },
  { id: "menanam", label: "Menanam" },
  { id: "perawatan", label: "Perawatan" },
] as const;

export type NavId = (typeof NAV_ITEMS)[number]["id"];

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 76;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}
