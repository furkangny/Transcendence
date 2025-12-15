export function HeroTitle() {
  return (
    <div className="w-full max-w-screen-xl text-center">
      {/* Üst Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 mb-8 backdrop-blur-sm">
        <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
        <span className="text-amber-300 text-sm font-medium">Ready to Play</span>
      </div>

      {/* Ana Başlık */}
      <h1 className="text-[clamp(2.5rem,8vw,6rem)] md:text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.9] tracking-tight mb-6">
        <span className="block text-white">Welcome to</span>
        <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          BEE'PING PONG
        </span>
      </h1>

      {/* Alt Başlık */}
      <p className="text-neutral-400 text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
        <span className="text-amber-400 font-semibold">Play</span> like it's 1901.{" "}
        <span className="text-yellow-400 font-semibold">Compete</span> like a champion.{" "}
        <span className="text-amber-300 font-semibold">Win</span> like a legend.
      </p>

      {/* Dekoratif Çizgi */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-amber-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
        <div className="w-12 h-1 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
      </div>
    </div>
  );
}
