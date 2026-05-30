import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeScript from "@/components/ThemeScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anurag Varma Thippani | AI & Full Stack Developer",
  description:
    "Portfolio of Anurag Varma Thippani - AI Engineer, ML Innovator, and Full Stack Developer specializing in intelligent systems and scalable web applications.",
  keywords: [
    "Anurag Thippani",
    "AI Developer",
    "Machine Learning",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "Artificial Intelligence",
  ],
  authors: [{ name: "Anurag Varma Thippani" }],
  creator: "Anurag Varma Thippani",
  publisher: "Anurag Varma Thippani",
  openGraph: {
    title: "Anurag Varma Thippani | AI & Full Stack Developer",
    description:
      "Building adaptive intelligence systems that solve real-world challenges.",
    url: "https://anuragthippani.vercel.app",
    siteName: "Anurag Thippani Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Varma Thippani | AI & Full Stack Developer",
    description:
      "Building adaptive intelligence systems that solve real-world challenges.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <ThemeScript />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <a
          href="#home"
          className="fixed -top-20 left-4 z-[100] px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-lg transition-[top] focus:top-4 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
