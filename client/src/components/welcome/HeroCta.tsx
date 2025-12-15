export function HeroCta() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Ana Buton */}
      <a
        href="login"
        className="group relative px-10 py-5 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black font-bold text-lg md:text-xl shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all duration-500 transform hover:scale-105"
        data-link
      >
        {/* Parlama Efekti */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <span className="relative flex items-center gap-3">
          <i className="fa-solid fa-play text-black/80"></i>
          Start Playing Now
          <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
        </span>
      </a>

      {/* Alt Bilgi */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-neutral-500 text-sm">
          Join thousands of players worldwide
        </p>
        
        {/* İstatistikler */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-users text-amber-400"></i>
            <span className="text-neutral-400 text-sm">10K+ Players</span>
          </div>
          <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-gamepad text-yellow-400"></i>
            <span className="text-neutral-400 text-sm">50K+ Matches</span>
          </div>
          <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-trophy text-amber-300"></i>
            <span className="text-neutral-400 text-sm">100+ Tournaments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
