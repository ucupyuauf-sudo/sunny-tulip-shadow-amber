import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Sereh Merah (Cymbopogon nardus) | Panduan Tanaman Herbal";
const APP_DESC =
  "Panduan edukatif tentang Sereh Merah atau Citronella (Cymbopogon nardus), meliputi identitas, manfaat, resep minuman herbal, cara menanam, dan cara merawat.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: APP_NAME },
      { name: "description", content: APP_DESC },
      {
        name: "keywords",
        content:
          "sereh merah, sereh wangi, citronella, Cymbopogon nardus, tanaman herbal, minyak atsiri, cara menanam sereh",
      },
      { name: "theme-color", content: "#143326" },
      { name: "author", content: "Sereh Merah Botanical Guide" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="id" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-ink font-sans">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
