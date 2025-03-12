import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Company Profile ",
  description: "Company Profile iBex",
  icons:"/icon.png"
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <ThemeProvider>
        <Navbar />
        {children}
        <Footer/>
        </ThemeProvider>

      </body>
      <GoogleAnalytics gaId="G-GK71SG1D30" />
    </html>
  );
}
