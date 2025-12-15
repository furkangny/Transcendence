import { Footer } from "@/components/layout/Footer";
import { HeroTitle } from "@/components/welcome/HeroTitle";
import { HeroCta } from "@/components/welcome/HeroCta";
import { Overlay } from "@/components/layout/Overlay";
import Mascot from "@/assets/pong-mascot.png";

export function Welcome() {
  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">
      {/* Animasyonlu Arka Plan Efektleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <Overlay />
      
      {/* Mascot - Yeni Stil */}
      <img 
        src={Mascot} 
        alt="Ping Pong Mascot" 
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute top-8 right-8 lg:top-12 lg:right-12 animate-bounce drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] z-20" 
      />
      
      {/* Ana İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-12 animate-fadeInUp">
          <HeroTitle />
          <HeroCta />
        </div>
      </div>
      
      <Footer />
    </section>
  );
}
