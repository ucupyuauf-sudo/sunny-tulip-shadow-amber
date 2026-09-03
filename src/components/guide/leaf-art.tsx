import { cn } from "@/lib/utils";

export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      fill="none"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="10" fill="currentColor" className="text-forest" />
      <path
        d="M10 21c4.5-1.6 7.4-6.2 6.2-11 3.4 1.4 6 5.2 5.2 9.4-3.1.9-7.2 2.4-11.4 1.6Z"
        fill="#F4EFE4"
      />
      <path
        d="M16.2 10.4c-.4 3.6-2.2 6.6-5.4 8.4"
        stroke="#C9A44A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LeafMark />
      <span
        className={cn(
          "font-display text-lg font-medium leading-none tracking-tight",
          light ? "text-cream" : "text-forest",
        )}
      >
        Sereh <span className="italic">Merah</span>
      </span>
    </span>
  );
}

export function GrassSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 420" className={className} fill="none" aria-hidden="true">
      <path
        d="M210 390c8-90 38-180 18-330"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M210 360c-40-70-92-120-150-148"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M210 340c42-66 98-112 158-132"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M210 300c-28-80-20-150 16-220"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M210 280c24-70 18-140-10-210"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GrowthStages({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 180" className={className} fill="none" aria-hidden="true">
      <text x="32" y="22" fill="#6e8b74" fontSize="12" fontFamily="DM Sans, sans-serif">
        Ilustrasi pertumbuhan rumpun
      </text>
      {/* soil line */}
      <path d="M24 142h592" stroke="#a98467" strokeWidth="2" strokeDasharray="4 8" />
      {/* stage 1 */}
      <path d="M90 142c2-28 10-48 8-78" stroke="#2c5a40" strokeWidth="3" strokeLinecap="round" />
      <path d="M90 128c-14-16-22-22-38-24" stroke="#2c5a40" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="90" cy="150" r="10" fill="#a98467" />
      {/* stage 2 */}
      <path d="M250 142c4-40 16-78 10-118" stroke="#2c5a40" strokeWidth="3" strokeLinecap="round" />
      <path d="M250 118c-22-24-40-34-62-36" stroke="#143326" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M250 110c20-22 40-28 62-26" stroke="#2c5a40" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="250" cy="150" r="14" fill="#a98467" />
      {/* stage 3 */}
      <path d="M430 142c6-48 20-96 8-128" stroke="#143326" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M428 108c-30-28-58-38-86-36" stroke="#2c5a40" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M432 96c32-26 64-34 92-28" stroke="#2c5a40" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M430 80c-12-28 4-48 18-62" stroke="#6e8b74" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M430 86c14-24 8-48-6-66" stroke="#6e8b74" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="430" cy="150" r="18" fill="#a98467" />
      {/* stage 4 clump */}
      <path d="M580 142c4-50 18-90 6-124" stroke="#143326" strokeWidth="3" strokeLinecap="round" />
      <path d="M572 142c-8-46-6-86 10-118" stroke="#2c5a40" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M588 142c10-42 8-80-8-112" stroke="#2c5a40" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M574 100c-28-22-48-28-72-24" stroke="#143326" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M588 92c24-20 48-24 70-16" stroke="#2c5a40" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="580" cy="150" r="16" fill="#a98467" />
    </svg>
  );
}

export function Blob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-sage/20", className)}
    />
  );
}
