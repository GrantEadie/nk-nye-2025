"use client";

import { useEffect, useState } from "react";

export default function JulienNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show notification after 8 seconds (3 seconds after Ari's notification)
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      // Trigger animation after a brief delay to ensure initial state is rendered
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    }, 10000);

    return () => clearTimeout(showTimer);
  }, []);

  const handleClick = () => {
    // Open the moodboard link
    window.open(
      "https://www.pinterest.com/search/pins/?q=pirate%20inspo&rs=typed",
      "_blank"
    );
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm transition-all duration-500 ease-out ${
        isClosing || !isAnimating
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div
        onClick={handleClick}
        className="rounded-2xl shadow-2xl p-2 text-white cursor-pointer border border-transparent hover:border-white/10 transition-colors"
      >
        {/* Message */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 backdrop-blur-lg shrink-0 aspect-square rounded-full bg-linear-to-br to-teal-500 flex items-center justify-center text-sm font-bold shadow-lg">
            J
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3 text-sm leading-relaxed flex-1">
            Yeah, Julien here, just emphasizing what Ari said, no pirates.{" "}
            <span className="underline font-semibold">
              Click here to see a moodboard of what not to wear.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
