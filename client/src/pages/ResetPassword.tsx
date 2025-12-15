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
                  className="relative w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
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
