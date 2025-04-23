"use client";

import Link from "next/link";

export default function Home() {

  return (
    <div
      className="relative z-10 h-screen overflow-hidden"
    >
      <Link href="/login" className="h-full w-full flex justify-center cursor-pointer container mx-auto">
        <div className="absolute w-full h-full bg-[#E6E2D7]/60 backdrop-blur-sm flex flex-col justify-center items-center">
          <img className="absolute w-full object-cover idlescale" src="/assets/circular-gradient.png" alt="Gradient" />
          <div className="relative mb-8">
            <div className="bg-[#494740] absolute z-20 text-white px-2 py-0 -right-12 -bottom-6">Simple Adventure</div>
            <span className="before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#E6E2D7] before:shadow-lg">
              <p className="text-[#3d3b34] font-bold text-5xl relative">NEOVAH</p>
            </span>
          </div>
          <p className="text-white font-medium text-lg relative text-center">Simple RPG Turn-based<br/>Web Based Games</p>
          <p className="text-white font-medium text-xl mt-10 idle relative text-center">--- Tekan untuk mulai ---</p>
        </div>
      </Link>
    </div>
  );
}
