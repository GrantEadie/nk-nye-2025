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
    <div className="relative">
      {videoError ? (
        <div className="fixed inset-0 -z-10">
          <Image
            src="/maritime bg small.jpg"
            alt="Maritime background"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
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

      {/* Hero Section - Full viewport height */}
      <section className="flex flex-col items-center justify-center min-h-dvh gap-4 sm:gap-8 md:gap-10 relative z-10 px-4 sm:px-6 py-8 sm:py-0">
        <h1
          className={`text-white text-center font-[Calora] px-2 leading-[0.82] transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="text-[60px] xs:text-[80px] sm:text-[150px] md:text-[180px] lg:text-[210px]">
            MARITIME
          </div>
          <div className="text-[54px] xs:text-[72px] sm:text-[135px] md:text-[162px] lg:text-[189px]">
            MOONLIGHT
          </div>
        </h1>

        <h3
          className={`text-center text-xs sm:text-xl md:text-3xl text-white transition-all duration-1000 delay-500 uppercase tracking-[0.5em] sm:tracking-[1em] italic ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          New Year's Eve
        </h3>

        <h3
          className={`text-center font-bold text-base sm:text-xl md:text-2xl text-white flex items-center justify-center gap-2 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          The Nook
        </h3>

        <a
          href="https://www.pinterest.com/arielwright/ships-in-the-night/?invite_code=0c8cb49cf2da430a9f175c1653f13fcb&sender=298715525192618351s"
          className={`flex items-center justify-center text-center gap-2 sm:gap-4 text-base sm:text-xl md:text-2xl lg:text-3xl font-extralight text-white group active:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-white rounded-full px-4 py-2 sm:px-8 sm:py-4 transition-all duration-500 hover:bg-white/20 active:bg-white/20 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="wrap-break-word tracking-[-.12em] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-active:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Costume Inspo / Moodboard
          </span>
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="5" y1="19" x2="19" y2="5" />
            <polyline points="12,5 19,5 19,12" />
          </svg>
        </a>

        <p>Costumes highly encouraged. <span className="italic text-xs">*Absolutely no pirates</span></p>

        <div
          className={`absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-2000 animate-bounce ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </div>
      </section>

      {/* Getting There Section */}
      <section className="flex flex-col items-center justify-center min-h-dvh gap-6 sm:gap-10 relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col gap-6 sm:gap-10 w-full max-w-4xl text-center text-white items-center">
          <h4 className="font-[Calora] text-3xl sm:text-5xl md:text-7xl font-light">
            PARKING MAP
          </h4>

          <div className="flex flex-col items-center gap-6 sm:gap-10 text-base sm:text-lg md:text-xl lg:text-2xl tracking-[-.12em] px-2">
            <p className="font-medium italic">
              <span className="text-red-500 underline">No parking </span>
              <span className="underline">on the property</span>
            </p>
            <p className="max-w-full sm:w-max p-3 px-4 sm:p-4 sm:px-6">
              Please park on the streets marked{" "}
              <span className="text-green-500 italic">green</span> or at{" "}
              <a target="_blank" className="underline" href="https://maps.app.goo.gl/793S5wGK5dnGYGf39">
                Sunset Pond Park.
              </a>
            </p>
          </div>
          <Image
            src="/nk parking map.png"
            alt="Parking map"
            width={800}
            height={600}
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
