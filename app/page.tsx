export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-8">
        <a
          href="#"
          className="flex items-center gap-4 text-5xl font-medium text-gray-400 transition-all duration-200 hover:text-white hover:tracking-wider group"
        >
          Costume Inspo / Moodboard
          <svg
            className="w-12 h-12 transition-transform duration-200 group-hover:-translate-y-2 group-hover:translate-x-2"
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
