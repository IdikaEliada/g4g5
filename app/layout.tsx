import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import  localFont  from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

//const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const aptos = "https://fonts.googleapis.com/css2?family=Aptos:wght@400;500;600;700&display=swap";

// const aptosFont = new FontFace("Aptos", `url(${aptos})`, { weight: "400 700", style: "normal" });

const aptos = localFont({
  src: [
    {
      path: "../public/fonts/aptos/Aptos Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos.woff2",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-body",
});

const monumentExtended = localFont({
  src: [
    {
      path: "../public/fonts/monument extended/Monument Extended.woff2",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-heading",
});

const clash = localFont({
  src: [
    {
      path: "../public/fonts/clashGrotesk/ClashGrotesk-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/clashGrotesk/ClashGrotesk-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/clashGrotesk/ClashGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/clashGrotesk/ClashGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/clashGrotesk/ClashGrotesk-semibold.woff2",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-accent",
});


export const metadata: Metadata = {
  title: "Going for Gold 5.0",
  description: "The Quantum Leap - From Potential to Power: Scaling the Next Generation of Industry Leaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", aptos.variable, monumentExtended.variable, clash.variable)}
    >
      <body className="min-h-full text-[clamp(25px, 1.5vw, 30px)]">{children}</body>
    </html>
  );
}
