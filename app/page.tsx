'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative flex flex-col min-h-dvh px-4 sm:px-6">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/nk nye background.webm"
        className={`fixed inset-0 w-full h-full object-cover -z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadedData={(e) => {
          const video = e.currentTarget;
          video.play().catch(() => {
            // Fallback if autoplay is blocked
          });
        }}
      >
        <source src="/nk nye background.webm" type="video/webm" />
      </video>
      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      <h1 className={`text-white text-center font-[Calora] pt-8 sm:pt-12 md:pt-16 relative z-10 leading-[0.82] px-2 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <div className="text-[80px] sm:text-[150px] md:text-[180px] lg:text-[210px]">MARITIME</div>
        <div className="text-[72px] sm:text-[135px] md:text-[162px] lg:text-[189px]">MOONLIGHT</div>
      </h1>

      <div className={`flex flex-col gap-6 sm:gap-8 md:gap-12 w-full max-w-4xl mx-auto relative z-10 items-center grow justify-center pb-8 sm:pb-0 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <a
          href="#"
          className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight text-white group active:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        >
          <span className="wrap-break-word tracking-[-.12em] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-active:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Costume Inspo / Moodboard</span>
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
  );
}
