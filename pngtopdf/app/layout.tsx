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
        url: "https://convertpngtopdf.com/og-image.png",
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
    images: ["https://convertpngtopdf.com/og-image.png"],
    creator: "@YourTwitterHandle",
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
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Primary favicon
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, // Optional: 16x16 favicon
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }, // Optional: 32x32 favicon
    ],
  },




};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KKZ3LP52');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKZ3LP52"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}