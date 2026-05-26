import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#11d7fa",
};

export const metadata: Metadata = {
  title: "Arthzone | AI-Powered IT Solutions & Website Development in Ratlam",
  
  description:
    "Arthzone helps businesses in Ratlam grow with modern websites, POS software, and AI-driven IT solutions. Get high-converting websites, business automation, and digital growth services.",
  
  keywords: [
    "Website development in Ratlam",
    "POS software for shops",
    "IT company in Ratlam",
    "Business website services",
    "AI software development",
    "Restaurant billing software",
    "Retail POS system India",
    "Digital solutions for small business",
    "Arthzone IT services"
  ],

  authors: [{ name: "Arthzone Team" }],
  creator: "Arthzone",
  publisher: "Arthzone",

  metadataBase: new URL("https://arthzone.co.in"), 

  openGraph: {
    title: "Arthzone | Grow Your Business with Smart IT Solutions",
    description:
      "We build powerful websites, POS systems, and AI solutions to help businesses scale faster. Trusted by growing businesses in Ratlam.",
    url: "https://arthzone.co.in",
    siteName: "Arthzone",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Arthzone IT Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arthzone | Smart IT & Business Solutions",
    description:
      "Websites, POS software & AI tools to grow your business faster.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} antialiased min-w-0 overflow-x-clip`}
        suppressHydrationWarning
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
