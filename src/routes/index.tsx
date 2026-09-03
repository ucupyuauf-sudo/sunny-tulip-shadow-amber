import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/guide/about";
import { BackToTop } from "@/components/guide/back-to-top";
import { Benefits } from "@/components/guide/benefits";
import { Care } from "@/components/guide/care";
import { Compounds } from "@/components/guide/compounds";
import { Facts } from "@/components/guide/facts";
import { Footer } from "@/components/guide/footer";
import { Hero } from "@/components/guide/hero";
import { Identity } from "@/components/guide/identity";
import { Navbar } from "@/components/guide/navbar";
import { scrollToId } from "@/components/guide/nav-data";
import { Planting } from "@/components/guide/planting";
import { Recipe } from "@/components/guide/recipe";
import { Uses } from "@/components/guide/uses";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (id) {
      requestAnimationFrame(() => scrollToId(id));
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Identity />
        <About />
        <Compounds />
        <Benefits />
        <Recipe />
        <Planting />
        <Care />
        <Facts />
        <Uses />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
