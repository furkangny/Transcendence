import { styles } from "@/styles/styles";
import { Footer } from "@/components/layout/Footer";
import { TitleDark } from "@/components/common/TitleDark";
import { SignInForm } from "@/components/auth/SignInForm";
import { Overlay } from "@/components/layout/Overlay";

export function Signin() {
  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-black">
      <Overlay />
      
      {/* Ana İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Başlık Alanı */}
        <div className="text-center mb-10 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30 mb-6">
            <i className="fa-solid fa-shield-halved text-amber-400"></i>
            <span className="text-amber-300 text-sm font-medium">Secure Login</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Welcome back,{" "}
            <span className="text-amber-400">
              Champion
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-md mx-auto">
            Enter your credentials to continue your legacy
          </p>
        </div>

        <SignInForm />
      </div>
      
      <Footer />
    </section>
  );
}
