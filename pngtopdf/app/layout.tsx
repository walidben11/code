import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convert PNG to PDF Online Free - Easy PNG to PDF Converter",
  description:
    "Learn how to convert PNG to PDF online for free with ConvertPNGtoPDF. Our easy PNG to PDF converter lets you transform images into PDFs in seconds—no software needed!",
  keywords: [
    "png to pdf",
    "convert png to pdf",
    "png to pdf converter",
    "how to convert png to pdf",
    "free png to pdf tool",
    "convert png to pdf online",
    "png to pdf conversion",
    "image to pdf converter",
    "online png converter",
  ],
  openGraph: {
    title: "Convert PNG to PDF Online Free | ConvertPNGtoPDF",
    description:
      "Easily convert PNG to PDF online for free with ConvertPNGtoPDF. Fast, secure, and no software required—transform your images into PDFs in seconds!",
    url: "https://convertpngtopdf.com",
    siteName: "ConvertPNGtoPDF",
    images: [
      {
        url: "https://convertpngtopdf.com/og-image.png", // Replace with your actual OG image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Convert PNG to PDF Online Free - ConvertPNGtoPDF Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PNG to PDF Online Free | ConvertPNGtoPDF",
    description:
      "Transform PNGs to PDFs instantly with ConvertPNGtoPDF—free, fast, and secure!",
    images: ["https://convertpngtopdf.com/og-image.png"], // Replace with your actual Twitter image
    creator: "@YourTwitterHandle", // Replace with your Twitter handle (optional)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://convertpngtopdf.com",
  },
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Fixed syntax error in className
      >
        {children}
      </body>
    </html>
  );
}