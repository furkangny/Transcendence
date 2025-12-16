import { handleLostPassword } from "@/handlers/lost-password";
import { verifyOtpCode } from "@/handlers/verify-otp-code";
import { Footer } from "@/components/layout/Footer";
import { styles } from "@/styles/styles";
import { Overlay } from "@/components/layout/Overlay";
import { OtpInput } from "@/components/common/OtpInput";

export function LostPassword() {
  setTimeout(() => {
    handleLostPassword();
    verifyOtpCode();
  }, 0);

  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-black">
      <Overlay />
      
      {/* Ana İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md mx-auto animate-fadeInUp">
          {/* Ana Kart */}
          <div className="relative group">
            {/* Form Container */}
            <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 p-8">
              {/* Üst Dekoratif Çizgi */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500 rounded-b-full"></div>

              {/* Başlık */}
              <div className="text-center mb-8 pt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl mb-4">
                  <i className="fa-solid fa-key text-black text-2xl"></i>
                </div>
                <h1 className="text-2xl md:text-3xl font-black text-white mb-2">Şifreni mi Unuttun?</h1>
                <p className="text-neutral-400 text-sm">
                  Sorun değil, şampiyon — e-postanı gir ve sıfırlama kodunu sana gönderelim.
                </p>
              </div>

              {/* Email Form */}
              <form id="lost-password-form" className="space-y-4">
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <i className="fa-solid fa-envelope text-neutral-500 group-focus-within/input:text-amber-400 transition-colors"></i>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="reset-pass-email"
                    placeholder="Kayıtlı e-posta adresin"
                    autoFocus={true}
                    autoComplete="off"
                    autoCapitalize="none"
                    spellCheck="false"
                    className="w-full bg-neutral-900/80 text-white placeholder-neutral-500 pl-12 pr-4 py-4 rounded-xl border border-neutral-800 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300 lowercase"
                  />
                </div>
                <button
                  type="submit"
                  id="submit-btn"
                  className="relative w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-busy="false"
                >
                  <span id="spinner" className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                  <span className="flex items-center justify-center gap-3">
                    <i className="fa-solid fa-envelope"></i>
                    <span id="btn-label">Kodu Gönder</span>
                  </span>
                </button>
              </form>

              {/* OTP Form */}
              <form id="lost-pass-otp-form" className="space-y-4 hidden">
                <label className="block text-center text-neutral-300 font-medium mb-2">
                  Sana gönderdiğimiz kodu yapıştır
                </label>
                <OtpInput id="lost-pass-otp" />
                <button
                  type="submit"
                  id="submit-btn"
                  className="relative w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-busy="false"
                >
                  <span id="spinner" className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                  <span className="flex items-center justify-center gap-3">
                    <i className="fa-solid fa-check-double"></i>
                    <span id="btn-label">Kodu Doğrula</span>
                  </span>
                </button>
              </form>

              {/* Links */}
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-center text-neutral-400">
                  Şifreni hatırladın mı?{" "}
                  <a href="/login" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors" data-link>
                    Giriş sayfasına dön
                  </a>
                </p>
                <p className="text-xs text-center text-neutral-500 mt-4 italic">
                  Kod gelmedi mi? Spam veya promosyon kutunu kontrol et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
