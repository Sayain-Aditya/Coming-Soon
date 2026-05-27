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
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(57,255,20,0.18),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.82))]" aria-hidden="true" />

      <div className="relative z-10 flex h-screen flex-col">
        <header className="flex shrink-0 items-center justify-between px-5 py-4 md:px-10">
          <a
            href="#"
            className="flex items-center border border-[#39FF14]/50 bg-black/80 px-3 py-2 shadow-[0_0_18px_rgba(57,255,20,0.22)] backdrop-blur-sm"
            aria-label="Brand Cures home"
          >
            <img
              src={brandLogo}
              alt="Brand Cures logo"
              className="h-11 w-auto max-w-[230px] object-contain"
            />
          </a>
          <a
            href="#notify"
            className="border border-[#39FF14]/60 bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#39FF14] backdrop-blur-sm transition-colors hover:bg-[#39FF14] hover:text-black"
          >
            Early Access
          </a>
        </header>

        <main className="flex min-h-0 flex-1 items-center justify-center px-5 py-3">
          <section className="relative w-full max-w-4xl">
            <div className="absolute -left-3 -top-3 h-14 w-14 border-l-2 border-t-2 border-[#39FF14]" aria-hidden="true" />
            <div className="absolute -bottom-3 -right-3 h-14 w-14 border-b-2 border-r-2 border-[#39FF14]" aria-hidden="true" />

            <div className="border border-white/15 bg-black/72 p-5 text-center shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-md md:p-8 lg:p-9">
              <div className="mx-auto mb-4 flex w-fit items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#39FF14] sm:text-xs">
                <span className="h-px w-8 bg-[#39FF14] shadow-[0_0_16px_rgba(57,255,20,0.9)] sm:w-12" />
                Launch sequence
                <span className="h-px w-8 bg-[#39FF14] shadow-[0_0_16px_rgba(57,255,20,0.9)] sm:w-12" />
              </div>

              <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-normal text-white drop-shadow-[0_8px_26px_rgba(0,0,0,0.95)] sm:text-5xl md:text-7xl lg:text-8xl">
                Brand Cures
                <span className="block text-[#39FF14] drop-shadow-[0_0_26px_rgba(57,255,20,0.65)]">Almost Here</span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-100 md:text-base">
                We are preparing a smarter digital experience for brands that want sharper strategy, creative media, and cleaner growth workflows.
              </p>

              <form
                id="notify"
                className="mx-auto mt-5 grid w-full max-w-2xl gap-3 border border-white/10 bg-white/[0.04] p-2.5 sm:grid-cols-[1fr_auto]"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-h-11 border border-white/15 bg-black px-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#39FF14]"
                />
                <button
                  type="submit"
                  className="min-h-11 bg-[#39FF14] px-7 text-sm font-black uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                >
                  Notify Me
                </button>
              </form>

              <label
                htmlFor="subscribe"
                className="mx-auto mt-3 flex max-w-2xl items-start justify-center gap-3 text-left text-xs leading-5 text-zinc-300"
              >
                <input id="subscribe" type="checkbox" required className="mt-1 accent-[#39FF14]" />
                <span>Send me launch updates and newsletter emails.</span>
              </label>
            </div>
          </section>
        </main>

        <footer className="flex shrink-0 flex-col items-center justify-between gap-2 border-t border-white/10 bg-black/80 px-5 py-3 text-xs text-zinc-300 md:flex-row md:px-10">
          <div className="flex gap-4">
            <a href="#" className="underline decoration-white/30 underline-offset-4 hover:text-[#39FF14]">
              Privacy Policy
            </a>
            <a href="#" className="underline decoration-white/30 underline-offset-4 hover:text-[#39FF14]">
              Accessibility Statement
            </a>
          </div>
          <div>&copy; {new Date().getFullYear()} Brand Cures. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
