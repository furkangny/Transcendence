import { styles } from "@/styles/styles";
import { Footer } from "@/components/layout/Footer";
import { TitleDark } from "@/components/common/TitleDark";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { Overlay } from "@/components/layout/Overlay";

export function Signup() {
  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">
      {/* Animasyonlu Arka Plan Efektleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <Overlay />
      
      {/* Ana İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Başlık Alanı */}
        <div className="text-center mb-10 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30 mb-6">
            <i className="fa-solid fa-user-plus text-amber-400"></i>
            <span className="text-amber-300 text-sm font-medium">Join Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Join{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              the Club
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-md mx-auto">
            Sign your name into club history
          </p>
        </div>

        <SignUpForm />
      </div>
      
      <Footer />
    </section>
  );
}
