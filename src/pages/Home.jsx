import React from "react";
import brandLogo from "../assets/brand cures logo.png";
import videoBg from "../assets/200531-913040088_medium.mp4";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-black font-sans text-white">
      <video
        className="fixed inset-0 h-full w-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="fixed inset-0 bg-black/62" aria-hidden="true" />
      <div
        className="fixed inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.52),rgba(0,0,0,0.86))]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-screen flex-col">
        <header className="flex h-20 shrink-0 items-center px-5 md:px-10">
          <a
            href="#"
            className="flex h-12 w-[190px] items-center border border-white/20 bg-black/85 px-3 shadow-[0_16px_40px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:w-[240px]"
            aria-label="Brand Cures home"
          >
            <img
              src={brandLogo}
              alt="Brand Cures logo"
              className="h-full w-full object-contain"
            />
          </a>
        </header>

        <main className="flex min-h-0 flex-1 items-center px-5 py-2 md:px-10">
          <section className="mx-auto w-full max-w-5xl">
            <div className="border border-white/15 bg-black/70 p-6 text-center shadow-[0_30px_90px_rgba(0,0,0,0.7)] backdrop-blur-md md:p-9 lg:p-10">
              <div className="mb-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-200 sm:text-xs">
                <span className="h-px w-10 bg-white" />
                Curing the problem
                <span className="h-px w-10 bg-white" />
              </div>

              <h1 className="mx-auto max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-normal text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)] sm:text-5xl md:text-7xl xl:text-8xl">
                Brand Cures
                <span className="block text-transparent [-webkit-text-stroke:1.5px_#fff] md:[-webkit-text-stroke:2px_#fff]">
                  Coming Soon
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-zinc-200 md:text-base">
                A sharp new digital home for strategy, media, creative direction, and brand growth is getting ready to launch.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                <span className="bg-white px-3 py-2">Brand Strategy</span>
                <span className="bg-white px-3 py-2">Media</span>
                <span className="bg-white px-3 py-2">Growth</span>
              </div>
            </div>
          </section>
        </main>

        <footer className="flex h-11 shrink-0 items-center justify-between border-t border-white/10 bg-black/85 px-5 text-xs text-zinc-300 md:px-10">
          <div className="flex gap-4">
            <a href="#" className="underline decoration-white/30 underline-offset-4 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="underline decoration-white/30 underline-offset-4 hover:text-white">
              Accessibility Statement
            </a>
          </div>
          <div>&copy; {new Date().getFullYear()} Brand Cures. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
