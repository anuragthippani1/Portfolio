import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
