"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative flex flex-col min-h-dvh px-4 sm:px-6">
      {videoError ? (
        <Image
          src="/maritime bg small.jpg"
          alt="Maritime background"
          fill
          className="fixed object-cover -z-10"
          priority
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`fixed inset-0 w-full h-full object-cover -z-10 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={(e) => {
            const video = e.currentTarget;
            video.play().catch(() => {
              setVideoError(true);
            });
          }}
          onError={() => setVideoError(true)}
        >
          <source src="/mm nye bg.mp4" type="video/webm" />
        </video>
      )}
      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 grow relative z-10 pb-8 sm:pb-0">
        <h1
          className={`text-white text-center font-[Calora] px-2 leading-[0.82] transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="text-[80px] sm:text-[150px] md:text-[180px] lg:text-[210px]">
            MARITIME
          </div>
          <div className="text-[72px] sm:text-[135px] md:text-[162px] lg:text-[189px]">
            MOONLIGHT
          </div>
        </h1>

        <h3
          className={`text-center text-sm sm:text-xl md:text-3xl text-white transition-all duration-1000 delay-500 uppercase tracking-[1em] italic ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          New Year's Eve
        </h3>

        <h3
          className={`text-center font-bold text-l sm:text-xl md:text-2xl text-white flex items-center justify-center gap-2 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          The Nook
        </h3>

        <div
          className={`flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-4xl mx-auto items-center transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
        <a
          href="https://www.pinterest.com/arielwright/ships-in-the-night/?invite_code=0c8cb49cf2da430a9f175c1653f13fcb&sender=298715525192618351s"
          className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight text-white group active:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 transition-all duration-500 hover:bg-white/20"
        >
          <span className="wrap-break-word tracking-[-.12em] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-active:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Costume Inspo / Moodboard
          </span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="5" y1="19" x2="19" y2="5" />
            <polyline points="12,5 19,5 19,12" />
          </svg>
        </a>
        </div>
      </div>
    </div>
  );
}
