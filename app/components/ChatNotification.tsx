"use client";

import { useEffect, useState } from "react";

export default function ChatNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show notification after 5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      // Trigger animation after a brief delay to ensure initial state is rendered
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    }, 5000);

    return () => clearTimeout(showTimer);
  }, []);

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
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm transition-all duration-500 ease-out ${
        isClosing || !isAnimating
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div
        onClick={handleClose}
        className="rounded-2xl shadow-2xl p-2 text-white cursor-pointer border border-transparent hover:border-white/10 transition-colors"
      >
        {/* Message */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 shrink-0 aspect-square rounded-full bg-gradient-to-br  to-orange-500 flex items-center justify-center text-sm font-bold shadow-lg">
            A
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3 text-sm leading-relaxed flex-1">
            Hey, Ari here. Just a reminder that you{" "}
            <span className="underline">
              won&apos;t be let in if you dress up as a pirate.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
