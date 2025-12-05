export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="flex flex-col gap-8 md:gap-12 w-full max-w-4xl">
        <a
          href="#"
          className="flex items-center justify-between gap-4 text-3xl sm:text-4xl md:text-5xl font-medium text-gray-400 transition-all duration-200 hover:text-white hover:tracking-wider group active:text-white active:tracking-wider"
        >
          <span className="break-words">Costume Inspo / Moodboard</span>
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-2 group-hover:translate-x-2 group-active:-translate-y-2 group-active:translate-x-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="5" y1="19" x2="19" y2="5" />
            <polyline points="12,5 19,5 19,12" />
          </svg>
        </a>
      </div>
    </div>
  );
}
