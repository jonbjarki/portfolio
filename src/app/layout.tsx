import type { Metadata } from "next";
import Script from "next/script";
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
    "Full-Stack Software Engineer",
    "Software Developer",
    "Web Developer",
    "Web Developer Portfolio",
    "Web Dev Portfolio",
    "Portfolio",
  ],
  authors: [{ name: "Jón Bjarki Gíslason", url: "https://jonbjarki.github.io" }],
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
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZD9GGX6RHW"></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-ZD9GGX6RHW');
            `}
        </Script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="root">{children}</div>
        <Script src="https://web3forms.com/client/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
