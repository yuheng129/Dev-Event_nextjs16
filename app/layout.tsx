import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/navbar";

const grotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martian = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Event",
  description: "The Hub for Every Developer to Meet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.variable} ${martian.variable} min-h-screen antialiased`}
      >
      <Navbar/>
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
              raysOrigin="top-center"
              raysColor="#5dfeca"
              raysSpeed={1.0}
              lightSpread={0.9}
              rayLength={1.5}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.0}
              distortion={0.01}
              className="custom-rays"
          />
        </div>
        <main>
            {children}
        </main>

      </body>
    </html>
  );
}
