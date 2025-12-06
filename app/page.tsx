"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ChatNotification from "./components/ChatNotification";

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

      {/* Alert Banner */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md text-white py-2 sm:py-4 px-4 sm:px-6 text-center transition-transform duration-700 delay-2000 border-b border-white/10 ${
          isLoaded ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-8 sm:h-8 shrink-0"
            fill="white"
            viewBox="0 0 256 256"
          >
            <path d="M224,144c0,38.11-27.67,45.66-49.9,51.72C149.77,202.36,136,207.31,136,232a8,8,0,0,1-16,0c0-24.69-13.77-29.64-38.1-36.28C59.67,189.66,32,182.11,32,144a8,8,0,0,1,16,0c0,24.69,13.77,29.64,38.1,36.28,11.36,3.1,24.12,6.6,33.9,14.34V128H88a8,8,0,0,1,0-16h32V82.83a28,28,0,1,1,16,0V112h32a8,8,0,0,1,0,16H136v66.62c9.78-7.74,22.54-11.24,33.9-14.34C194.23,173.64,208,168.69,208,144a8,8,0,0,1,16,0Z"></path>
          </svg>
          <p className="text-xs sm:text-base leading-tight sm:leading-normal">
            Costumes highly encouraged.{" "}
            <span className="italic text-[0.65rem] sm:text-xs">
              *Absolutely no pirates
            </span>
          </p>
        </div>
      </div>

      {/* Hero Section - Full viewport height */}
      <section className="flex flex-col items-center justify-center min-h-dvh gap-2 sm:gap-8 md:gap-10 relative z-10 px-2 sm:px-6 py-6 sm:py-0">
        <h1
          className={`text-white text-center font-[Calora] px-1 sm:px-2 leading-[0.82] transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="text-[70px] xs:text-[100px] sm:text-[150px] md:text-[180px] lg:text-[210px]">
            MARITIME
          </div>
          <div className="text-[63px] xs:text-[90px] sm:text-[135px] md:text-[162px] lg:text-[189px]">
            MOONLIGHT
          </div>
        </h1>

        <h3
          className={`text-center text-xs xs:text-sm sm:text-xl md:text-3xl text-white transition-all duration-1000 delay-500 uppercase tracking-[0.3em] xs:tracking-[0.4em] sm:tracking-[1em] italic ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          New Year's Eve
        </h3>

        <div className="flex gap-3 sm:gap-10 flex-wrap justify-center">
          <h3
            className={`text-center font-bold text-base xs:text-lg sm:text-xl md:text-2xl text-white flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <svg
              className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            The Nook
          </h3>
          <h3
            className={`text-center font-bold text-base xs:text-lg sm:text-xl md:text-2xl text-white flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7"
              fill="white"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm12,152h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24a28,28,0,0,1,0,56Z"></path>
            </svg>
            15-20
          </h3>
        </div>

        <a
          href="https://www.pinterest.com/arielwright/ships-in-the-night/?invite_code=0c8cb49cf2da430a9f175c1653f13fcb&sender=298715525192618351s"
          className={`flex items-center justify-center text-center gap-2 sm:gap-4 text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl font-extralight text-white group active:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-white/20 rounded-full px-4 py-2 xs:px-5 xs:py-2.5 sm:px-8 sm:py-4 transition-all duration-500 bg-black/40 backdrop-blur-md hover:bg-white/20 active:bg-white/20 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          target="_blank"
        >
          <span className="wrap-break-word tracking-[-.12em] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-active:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Costume Inspo / Moodboard
          </span>
          <svg
            className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="5" y1="19" x2="19" y2="5" />
            <polyline points="12,5 19,5 19,12" />
          </svg>
        </a>

        <div
          className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-2000 animate-bounce ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            className="w-8 h-8 xs:w-12 xs:h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </div>
      </section>

      {/* Lineup Section */}
      <section className="flex flex-col items-center justify-center min-h-dvh gap-3 sm:gap-10 relative z-10 px-4 sm:px-6 py-10 sm:py-20">
        <div className="flex flex-col gap-3 sm:gap-10 w-full max-w-4xl text-center text-white items-center">
          <h4 className="font-[Calora] text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-light">
            LINEUP
          </h4>

          <div className="flex flex-col items-center gap-4 sm:gap-8 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl tracking-[-.12em] w-full max-w-2xl">
            <div className="flex justify-between w-full border-b border-white/10 pb-3 sm:pb-4">
              <span className="font-medium">9-10:00 PM</span>
              <span className="italic">TBD</span>
            </div>
            <div className="flex justify-between w-full border-b border-white/10 pb-3 sm:pb-4">
              <span className="font-medium">10-11:00 PM</span>
              <span className="italic">DoctorWife</span>
            </div>
            <div className="flex justify-between w-full border-b border-white/50 pb-3 sm:pb-4">
              <span className="font-medium">11-12:30 AM</span>
              <span className="italic font-bold">Bad Ginger</span>
            </div>
            <div className="flex justify-between w-full pb-3 sm:pb-4">
              <span className="font-medium">12:30-1:30 AM</span>
              <span className="italic">OKBBDD</span>
            </div>
          </div>
        </div>
        <div
          className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-2000 animate-bounce ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            className="w-8 h-8 xs:w-12 xs:h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 text-white"
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
      <section className="flex flex-col items-center justify-center min-h-dvh gap-3 sm:gap-10 relative z-10 px-4 sm:px-6 py-10 sm:py-20">
        <div className="flex flex-col gap-3 sm:gap-10 w-full max-w-4xl text-center text-white items-center">
          <h4 className="font-[Calora] text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-light">
            PARKING MAP
          </h4>

          <div className="flex flex-col items-center gap-3 sm:gap-10 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl tracking-[-.12em] px-2">
            <p className="font-medium italic">
              <span className="text-[#EB6323] opacity-85 underline">
                No parking{" "}
              </span>
              <span className="underline">on the property</span>
            </p>
            <p className="max-w-full sm:w-max p-2 px-3 xs:p-3 xs:px-4 sm:p-4 sm:px-6">
              Please park on the streets marked{" "}
              <span className="text-[#00F635] opacity-70 italic">green</span> or at{" "}
              <a
                target="_blank"
                className="underline"
                href="https://maps.app.goo.gl/793S5wGK5dnGYGf39"
              >
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

      {/* Chat Notification */}
      <ChatNotification />
    </div>
  );
}
