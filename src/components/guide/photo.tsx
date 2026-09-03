import { useState } from "react";
import { cn } from "@/lib/utils";

const FALLBACK: Record<string, string> = {
  "/images/hero-sereh.jpg":
    "https://images.unsplash.com/photo-1628556270448-4d4e41437e0f?auto=format&fit=crop&w=1200&q=80",
  "/images/about-sereh.jpg":
    "https://images.unsplash.com/photo-1599909533730-ba82510a913b?auto=format&fit=crop&w=1200&q=80",
  "/images/tea-sereh.jpg":
    "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
  "/images/plant-sereh.jpg":
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
  "/images/oil-sereh.jpg":
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80",
  "/images/garden-sereh.jpg":
    "https://images.unsplash.com/photo-1466692476866-aef1db89a1c2?auto=format&fit=crop&w=1600&q=80",
};

export function Photo({
  src,
  alt,
  className,
  imgClassName,
  lazy = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  lazy?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const resolved = failed ? (FALLBACK[src] ?? src) : src;

  return (
    <div className={cn("img-zoom bg-mist", className)}>
      <img
        src={resolved}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        decoding="async"
        className={cn("size-full object-cover", imgClassName)}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
