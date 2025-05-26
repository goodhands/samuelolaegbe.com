import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Samuel Olaegbe | Software Engineer",
    template: "%s | Samuel Olaegbe",
  },
  description:
    "Software developer & psychology enthusiast writing about code, cognition, and life in Lagos.",
  metadataBase: new URL("https://samuelolaegbe.com"),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png' },
      { url: '/favicon.svg' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'web-app-manifest',
        url: '/site.webmanifest',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/web-app-manifest-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/web-app-manifest-512x512.png',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sammyolaegbe",
  },
  openGraph: {
    type: "website",
    url: "https://samuelolaegbe.com",
    title: "Samuel Olaegbe",
    description:
      "Software developer & psychology enthusiast writing about code, cognition, and life in Lagos.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable} dark`}
    >
      <body className="bg-surface text-text antialiased selection:bg-primary/80 selection:text-surface flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
