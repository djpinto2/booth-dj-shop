import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { CartDrawer } from "@/components/CartDrawer";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const display = Instrument_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://booth-dj-shop.vercel.app"),
  title: "BOOTH — Pro DJ Supply",
  description: "Equipamiento DJ de estándar de club: CDJ-3000, DJM-A9, XDJ-AZ y XDJ-RX3. Specs completas, precios y envío.",
  openGraph: {
    title: "BOOTH — Pro DJ Supply",
    description: "Equipamiento DJ de estándar de club, curado.",
    images: ["/media/djm-a9.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable} ${mono.variable} antialiased`}>
      <body className="min-h-screen">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
