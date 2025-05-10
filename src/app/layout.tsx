import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Open_Sans,
  Birthstone,
  Inter,
  Sofia_Sans_Extra_Condensed,
  Poppins,
  Oswald,
  Manrope,
  Italiana,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Layla",
  description: "Layla",
  icons: [{ rel: "icon", url: "/images/logo.png", sizes: "11x11" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter antialiased",
          open_sans.variable,
          inter.variable,
          poppins.variable,
          oswald.variable,
          manrope.variable,
          italiana.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
