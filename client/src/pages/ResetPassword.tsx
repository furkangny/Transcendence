import { handleResetPassword } from "@/handlers/reset-password";
import { Footer } from "@/components/layout/Footer";
import { Overlay } from "@/components/layout/Overlay";
import { showPasswordToggle } from "@/utils/show-password-toggle";

export function ResetPassword() {
  const passwordId = "new-password";
  const showPasswordIconId = "update-show-pass";
  const confirmPasswordId = "confirm-new-password";
  const showConfirmPasswordIconId = "update-show-confirm-pass";

  setTimeout(() => {
    showPasswordToggle(showPasswordIconId, passwordId);
    showPasswordToggle(showConfirmPasswordIconId, confirmPasswordId);
    handleResetPassword();
  }, 0);

  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">
      {/* Animasyonlu Arka Plan Efektleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <Overlay />
      
      {/* Ana İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md mx-auto animate-fadeInUp">
          {/* Ana Kart */}
          <div className="relative group">
            {/* Dış Glow Efekti */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Form Container */}
            <div className="relative bg-black/90 backdrop-blur-2xl rounded-3xl border border-amber-500/20 p-8">
              {/* Üst Dekoratif Çizgi */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-b-full"></div>

              {/* Başlık */}
              <div className="text-center mb-8 pt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl shadow-lg shadow-amber-500/30 mb-4">
                  <i className="fa-solid fa-lock text-black text-2xl"></i>
                </div>
                <h1 className="text-2xl md:text-3xl font-black text-white mb-2">Reset Your Password</h1>
                <p className="text-neutral-400 text-sm">Set your new password to secure your spot in the club</p>

                {/* Dekoratif Bouncing Icon */}
                <div className="flex justify-center my-4">
                  <i className="fa-solid fa-table-tennis-paddle-ball text-amber-500 text-xl animate-bounce"></i>
                </div>
              </div>

              {/* Form */}
              <form id="update-password-form" className="space-y-5">
                {/* Yeni Şifre Alanı */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-400">
                    <i className="fa-solid fa-key mr-2 text-amber-500/70"></i>
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      id={passwordId}
                      placeholder="Enter new password"
                      autoComplete="off"
                      maxLength={30}
                      className="
                        w-full px-4 py-4 pr-12
                        bg-neutral-900/80 
                        border border-neutral-700/50 
                        rounded-xl 
                        text-white placeholder:text-neutral-500
                        outline-none
                        transition-all duration-300
                        focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 focus:bg-neutral-800/80
                        hover:border-neutral-600
                      "
                    />
                    <i
                      className="fa-regular fa-eye absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-amber-400 cursor-pointer transition-colors"
                      id={showPasswordIconId}
                    ></i>
                  </div>
                </div>

                {/* Şifreyi Onayla Alanı */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-400">
                    <i className="fa-solid fa-check-double mr-2 text-amber-500/70"></i>
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="confirmPassword"
                      id={confirmPasswordId}
                      placeholder="Confirm new password"
                      autoComplete="off"
                      maxLength={30}
                      className="
                        w-full px-4 py-4 pr-12
                        bg-neutral-900/80 
                        border border-neutral-700/50 
                        rounded-xl 
                        text-white placeholder:text-neutral-500
                        outline-none
                        transition-all duration-300
                        focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 focus:bg-neutral-800/80
                        hover:border-neutral-600
                      "
                    />
                    <i
                      className="fa-regular fa-eye absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-amber-400 cursor-pointer transition-colors"
                      id={showConfirmPasswordIconId}
                    ></i>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="submit-btn"
                  className="relative w-full py-4 px-6 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 text-black font-bold text-lg rounded-xl shadow-[0_4px_20px_rgba(251,191,36,0.4)] hover:shadow-[0_6px_30px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-busy="false"
                >
                  <span id="spinner" className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                  <span className="flex items-center justify-center gap-3">
                    <i className="fa-solid fa-lock"></i>
                    <span id="btn-label">Lock It In</span>
                  </span>
                </button>
              </form>

              {/* Back to Login */}
              <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
                <p className="text-neutral-400 text-sm">
                  Remembered your paddle?{" "}
                  <a 
                    href="/login" 
                    className="text-amber-400 hover:text-amber-300 font-semibold transition-colors underline underline-offset-4 decoration-amber-400/30 hover:decoration-amber-300"
                    data-link
                  >
                    Return to Club Entrance
                  </a>
                </p>
              </div>

              {/* Footer Info */}
              <p className="mt-4 text-xs text-center text-neutral-500 italic">
                This is how champions protect their legacy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
