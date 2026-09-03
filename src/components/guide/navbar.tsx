import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "./leaf-art";
import { NAV_ITEMS, scrollToId, type NavId } from "./nav-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<NavId>("beranda");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const offset = 96;
      let current: NavId = "beranda";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function go(id: string) {
    setOpen(false);
    scrollToId(id);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-surface/92 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <a
        href="#identitas"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-forest focus:px-3 focus:py-2 focus:text-cream"
        onClick={(e) => {
          e.preventDefault();
          go("identitas");
        }}
      >
        Lewati ke konten
      </a>
      <nav className="wrap flex h-[4.25rem] items-center justify-between" aria-label="Navigasi utama">
        <button
          type="button"
          className="rounded-lg outline-offset-4"
          onClick={() => go("beranda")}
          aria-label="Kembali ke beranda"
        >
          <Wordmark />
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => go(item.id)}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200",
                  active === item.id
                    ? "bg-forest text-cream"
                    : "text-leaf hover:bg-mist hover:text-forest",
                )}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-forest lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Tutup overlay menu"
          className={cn(
            "fixed inset-0 top-[4.25rem] bg-forest/30 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "relative z-10 origin-top border-t border-border bg-surface px-5 py-4 shadow-soft transition-[transform,opacity] duration-200",
            open ? "translate-y-0" : "-translate-y-3",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  className={cn(
                    "flex min-h-11 w-full items-center rounded-xl px-3 text-left text-base font-medium",
                    active === item.id ? "bg-forest text-cream" : "text-forest hover:bg-mist",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
