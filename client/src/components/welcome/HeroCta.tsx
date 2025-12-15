export function HeroCta() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Ana Buton */}
      <a
        href="login"
        className="group relative px-10 py-5 overflow-hidden rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-105"
        data-link
      >
        <span className="relative flex items-center gap-3">
          <i className="fa-solid fa-play text-black/80"></i>
          Start Playing Now
          <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
        </span>
      </a>
    </div>
  );
}
