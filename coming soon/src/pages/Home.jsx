import React from "react";
import videoBg from "../assets/200531-913040088_medium.mp4";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-sans text-white">
      <video
        className="fixed inset-0 h-full w-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="fixed inset-0 bg-black/45" aria-hidden="true" />
      <div className="fixed inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_42%,rgba(0,0,0,0.18)_100%)]" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-6 md:px-12">
          <a href="#" className="text-2xl font-black tracking-[0.3em] text-[#39FF14] drop-shadow-[0_0_16px_rgba(57,255,20,0.8)]">
            SYNC
          </a>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-200">
            <span className="hidden h-px w-12 bg-[#39FF14] sm:block" />
            Coming Soon
          </div>
        </header>

        <main className="flex flex-1 items-center px-6 py-10 md:px-12">
          <section className="grid w-full max-w-7xl items-end gap-10 lg:grid-cols-[minmax(0,1fr)_390px]">
            <div className="max-w-4xl">

              <h1 className="text-6xl font-black uppercase leading-[0.86] tracking-normal text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)] md:text-8xl xl:text-9xl">
                Sync
                <span className="block text-transparent [-webkit-text-stroke:2px_#39FF14] drop-shadow-[0_0_20px_rgba(57,255,20,0.45)]">
                  Begins
                </span>
              </h1>

              <p className="mt-7 max-w-2xl border-l-2 border-[#39FF14] pl-5 text-base leading-7 text-zinc-100 md:text-lg">
                We are building a faster way to discover, connect, and work with emerging technology. Join the list before access opens.
              </p>
            </div>

            <aside
              id="notify"
              className="border border-white/15 bg-zinc-950/80 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.75)] backdrop-blur-md md:p-6"
            >
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#39FF14]">Priority list</p>
                  <h2 className="mt-1 text-2xl font-black">Get early access</h2>
                </div>
                <span className="grid h-11 w-11 place-items-center border border-[#39FF14]/50 text-lg font-black text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.25)]">
                  01
                </span>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-zinc-100">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-white/20 bg-black px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#39FF14]"
                  />
                </div>

                <label htmlFor="subscribe" className="flex items-start gap-3 text-xs leading-5 text-zinc-300">
                  <input id="subscribe" type="checkbox" required className="mt-1 accent-[#39FF14]" />
                  <span>Send me launch updates and newsletter emails.</span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#39FF14]"
                >
                  Reserve Spot
                </button>
              </form>
            </aside>
          </section>
        </main>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-white/10 bg-black/70 px-6 py-4 text-xs text-zinc-300 md:flex-row md:px-12">
          <div className="flex gap-4">
            <a href="#" className="underline decoration-white/30 underline-offset-4 hover:text-[#39FF14]">
              Privacy Policy
            </a>
            <a href="#" className="underline decoration-white/30 underline-offset-4 hover:text-[#39FF14]">
              Accessibility Statement
            </a>
          </div>
          <div>&copy; {new Date().getFullYear()} Sync. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
