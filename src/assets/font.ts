import { Geist, Geist_Mono, Poppins, Sigmar,  Delicious_Handrawn} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});
export const sigmar = Sigmar({
  subsets: ["latin"],
  weight: ["400"],
});
export const DeliciousHandrawn = Delicious_Handrawn({
  subsets: ["latin"],
  weight: ["400"],
});
    