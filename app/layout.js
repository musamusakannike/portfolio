import "./globals.css";
import { Poppins } from "next/font/google";
import "animate.css";
import "aos/dist/aos.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Musa Musa Kannike - Portfolio",
  description:
    "Portfolio of Musa Musa Kannike, a skilled web developer proficient in HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, jQuery, Tailwind, Node.js, and MongoDB.",
  keywords:
    "Musa Musa Kannike, portfolio, web developer, software engineer, HTML, CSS, JavaScript, React, Next.js, Bootstrap, jQuery, Tailwind, Node.js, MongoDB",
  authors: [{ name: "Musa Musa Kannike" }],
  openGraph: {
    title: "Musa Musa Kannike - Portfolio",
    description:
      "Portfolio of Musa Musa Kannike, a skilled web developer proficient in HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, jQuery, Tailwind, Node.js, and MongoDB.",
    url: "https://www.musa-codes.vercel.app",
    siteName: "Musa Musa Kannike Portfolio",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Musa Musa Kannike Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@musa_codes",
    creator: "@musa_codes",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-screen overflow-x-hidden`}>{children}</body>
    </html>
  );
}
