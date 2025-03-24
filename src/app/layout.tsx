import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Color Picker App",
  description:
    "This color picker tool allows users to extract colors from an uploaded image and convert them into various formats (Hex, RGB, CMYK, HSV, HSL). It includes a canvas for selecting colors, a UI to display chosen colors, and clipboard functionality for easy copying.",
  keywords:
    "color picker, extract colors, hex to rgb, rgb to cmyk, hsv converter, hsl converter, image color tool, web design tools, color conversion",
  robots: "index, follow",
  openGraph: {
    title: "Color Picker App",
    description:
      "This color picker tool allows users to extract colors from an uploaded image and convert them into various formats (Hex, RGB, CMYK, HSV, HSL). It includes a canvas for selecting colors, a UI to display chosen colors, and clipboard functionality for easy copying.",
    images: [
      {
        url: "https://nextjs-color-picker-ten.vercel.app/og-image.jpg",
        width: "1200",
        height: "630",
        alt: "Color Pciker App Preview",
      },
    ],
    url: "https://nextjs-color-picker-ten.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="color-picker-theme"
        >
          <Toaster position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
