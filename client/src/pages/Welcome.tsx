import { Footer } from "@/components/layout/Footer";
import { HeroTitle } from "@/components/welcome/HeroTitle";
import { HeroCta } from "@/components/welcome/HeroCta";
import { Overlay } from "@/components/layout/Overlay";
import Mascot from "@/assets/pong-mascot.png";

export function Welcome() {
  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-black">
      <Overlay />
      
      {/* Mascot */}
      <img 
        src={Mascot} 
        alt="Ping Pong Maskotu" 
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute top-8 right-8 lg:top-12 lg:right-12 z-20" 
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
