import { styles } from "@/styles/styles";
import { Footer } from "@/components/layout/Footer";
import { Overlay } from "@/components/layout/Overlay";
import { OtpInput } from "@/components/common/OtpInput";
import { verifyLogin } from "@/handlers/verify-login";

export function VerifyLogin() {
  const twofaMode = sessionStorage.getItem("2faMode");

  setTimeout(() => {
    verifyLogin(twofaMode);
  }, 0);

  const subtitle =
    twofaMode === "email"
      ? "A verification parchment has been dispatched to your email. Kindly enter the code below to proceed."
      : "Your code awaits in your authenticator ledger. Kindly enter it below to confirm your identity.";

  const label =
    twofaMode === "email"
      ? "Summon the code from your inbox"
      : "Summon the code from your app";

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
                  <i className="fa-solid fa-shield-halved text-black text-2xl"></i>
                </div>
                <h1 className="text-2xl md:text-3xl font-black text-white mb-2">Verify Your Identity</h1>
                <p className="text-neutral-400 text-sm">{subtitle}</p>
              </div>

              {/* OTP Form */}
              <form id="verify-login-form" className="space-y-6">
                <label className="block text-center text-neutral-300 font-medium">
                  {label}
                </label>
                <OtpInput id="verify-login-otp" />
                <button
                  type="submit"
                  id="submit-btn"
                  className="relative w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-busy="false"
                >
                  <span id="spinner" className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                  <span className="flex items-center justify-center gap-3">
                    <i className="fa-solid fa-check-double"></i>
                    <span id="btn-label">Verify</span>
                  </span>
                </button>
              </form>

              {/* Footer Info */}
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-xs text-center text-neutral-500 italic">
                  Trouble receiving your code? Contact the front desk.
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
