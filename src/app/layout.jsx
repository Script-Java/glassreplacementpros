import "./globals.css";

export const metadata = {
  /* ── Core SEO ── */
  title: {
    default: "Windshield Replacement & Auto Glass Repair | Glass Replacement Pros",
    template: "%s | Glass Replacement Pros"
  },
  description:
    "Fast, affordable windshield replacement, chip repair, and full‑service auto glass solutions. Up‑front pricing, certified technicians, and lifetime workmanship warranty.",

  /* ── Search helpers ── */
  keywords: [
    "windshield replacement",
    "auto glass repair",
    "mobile windshield repair",
    "car window replacement",
    "rock chip repair"
  ],
  alternates: {
    canonical: "https://glassreplacementpros.com/"
  },

  /* ── Social previews ── */
  openGraph: {
    title: "Auto Glass Repair & Windshield Replacement | Glass Replacement Pros",
    description:
      "Need reliable auto glass service? Book mobile windshield replacement or chip repair with Glass Replacement Pros—transparent pricing, no hidden fees.",
    url: "https://glassreplacementpros.com/",
    siteName: "Glass Replacement Pros",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Glass Replacement Pros — Mobile Windshield Replacement & Chip Repair",
    description:
      "Top‑rated auto glass experts. Transparent pricing, same‑day service, and lifetime warranty on workmanship."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>{children}</body>
    </html>
  );
}
