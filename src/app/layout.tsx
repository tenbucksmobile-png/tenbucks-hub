import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geist = Geist({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TenBucks Mobile — Built in Africa. Built for the World.",
  description: "South Africa's premier mobile application studio. We craft digital experiences that move people.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${geist.className} bg-gray-950 text-white min-h-screen`}>
        <NavBar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
