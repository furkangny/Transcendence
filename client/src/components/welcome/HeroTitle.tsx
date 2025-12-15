export function HeroTitle() {
  return (
    <div className="w-full max-w-screen-xl text-center">
      {/* Üst Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 mb-8">
        <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
        <span className="text-amber-300 text-sm font-medium">Ready to Play</span>
      </div>

      {/* Ana Başlık */}
      <h1 className="text-[clamp(3rem,10vw,8rem)] md:text-[clamp(4rem,12vw,10rem)] font-black leading-[0.9] tracking-tight mb-6">
        <span className="block text-amber-400">
          BEEPONG
        </span>
      </h1>

      {/* Dekoratif Çizgi */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
        <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
      </div>
    </div>
  );
}
