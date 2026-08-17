import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/index.css";
import { Cal_Sans } from "next/font/google";

const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Jón Bjarki Gíslason - Full-Stack Software Engineer",
  description:
    "As a full-stack software engineer, I work hard to build accessible, easy-to-use software that has a real impact on people's lives.",
  keywords: [
    "Jón Bjarki Gíslason",
    "Jón Bjarki",
    "Software Developer Iceland",
    "Tölvunarfræðingur",
    "Full-Stack Software Engineer",
    "Software Developer",
    "Web Developer",
    "Web Developer Portfolio",
    "Web Dev Portfolio",
    "Portfolio",
  ],
  icons: "https://jonbjarki.net/favicon.ico",
  authors: [{ name: "Jón Bjarki Gíslason", url: "https://jonbjarki.net" }],
  creator: "Jón Bjarki Gíslason",
  publisher: "Jón Bjarki Gíslason",
  openGraph: {
    title: "Jón Bjarki Gíslason",
    description:
      "Jón Bjarki Gíslason is a full-stack software engineer based in Iceland, dedicated to creating accessible and impactful software solutions.",
    url: "https://jonbjarki.net",
    siteName: "Jón Bjarki Gíslason Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={calSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="root">{children}</div>
        <GoogleAnalytics gaId="G-ZD9GGX6RHW" />
        <Script src="https://web3forms.com/client/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
