"use client";

import { useEffect, useState } from "react";

interface ChatNotificationProps {
  avatar: string;
  gradientFrom: string;
  gradientTo: string;
  message: string | React.ReactNode;
  delay: number;
  bottomOffset?: string;
  link?: string;
}

export default function ChatNotification({
  avatar,
  gradientFrom,
  gradientTo,
  message,
  delay,
  bottomOffset = "bottom-4 sm:bottom-6",
  link,
}: ChatNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    }, delay);

    return () => clearTimeout(showTimer);
  }, [delay]);

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
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
      className={`fixed ${bottomOffset} right-3 sm:right-6 z-50 max-w-[calc(100vw-1.5rem)] sm:max-w-sm transition-all duration-500 ease-out ${
        isClosing || !isAnimating
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div className="relative">
        {/* Close button - larger touch target for mobile */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="cursor-pointer absolute -top-2 -right-2 w-7 h-7 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-md hover:bg-white/30 active:bg-white/40 rounded-full flex items-center justify-center transition-colors z-10 border border-white/30"
          aria-label="Close notification"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div
          className="rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-2 text-white active:border-white/20 transition-colors"
        >
          {/* Message */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 backdrop-blur-lg shrink-0 aspect-square rounded-full bg-linear-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg`}
            >
              {avatar}
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm leading-relaxed flex-1">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
