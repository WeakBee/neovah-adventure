import type { Metadata } from "next";
import "./globals.css";
import { Pixelify_Sans } from "next/font/google";

const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neovah Adventure",
  description: "JS Strategic RPG Game Created for fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#1E1E1E] p-0 text-black ${pixelifySans.className} overflow-hidden w-screen h-screen`}
      >
        <img className="absolute w-full object-cover" src="/assets/city_bg.jpg" alt="City BG" />
        <div className="absolute w-full h-full overflow-hidden">
          <div className="w-fit animate-marquee flex">
            <img className="animate-marquee w-screen object-cover" src="/assets/gridlines.png" alt="Gridlines" />
            <img className="animate-marquee w-screen object-cover" src="/assets/gridlines.png" alt="Gridlines" />
          </div>
        </div>
        {/* Animasi Infinite Marquee */}
        {children}
      </body>
    </html>
  );
}
