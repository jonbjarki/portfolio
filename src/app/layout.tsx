import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jon Bjarki",
  description: "Personal portfolio for Jon Bjarki Gislason",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <Script src="https://web3forms.com/client/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
