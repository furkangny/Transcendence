import { InputField } from "../common/InputField";
import { SubmitBtn } from "../common/SubmitBtn";
import { RemoteLink } from "./RemoteLink";
import { styles } from "@/styles/styles";
import { fontSizes } from "@/styles/fontSizes";
import { handleSignIn } from "@/handlers/signin";
import { showPasswordToggle } from "@/utils/show-password-toggle";

export function SignInForm() {
  const showPasswordIconId = "signin-show-pass";
  const passwordId = "password";

  setTimeout(() => {
    showPasswordToggle(showPasswordIconId, passwordId);
    handleSignIn();
  }, 0);

  return (
    <div className="w-full max-w-md mx-auto animate-fadeInUp">
      {/* Ana Form Kartı */}
      <div className="relative group">
        {/* Dış Glow Efekti */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Form Container */}
        <form id="signin-form" className="relative bg-black/90 backdrop-blur-2xl rounded-3xl border border-amber-500/20 p-8 space-y-6">
          {/* Üst Dekoratif Çizgi */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-b-full"></div>

          {/* Input Alanları */}
          <div className="space-y-4 pt-4">
            {/* Username/Email Input */}
            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <i className="fa-solid fa-user text-neutral-500 group-focus-within/input:text-amber-400 transition-colors"></i>
              </div>
              <input
                type="text"
                name="login"
                id="login"
                placeholder="Member ID or Email"
                autoFocus={true}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                className="w-full bg-neutral-900/80 text-white placeholder-neutral-500 pl-12 pr-4 py-4 rounded-xl border border-neutral-800 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300 lowercase"
              />
            </div>

            {/* Password Input */}
            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <i className="fa-solid fa-lock text-neutral-500 group-focus-within/input:text-yellow-400 transition-colors"></i>
              </div>
              <input
                type="password"
                name="password"
                id={passwordId}
                placeholder="Secret Code"
                autoComplete="off"
                maxLength={30}
                className="w-full bg-neutral-900/80 text-white placeholder-neutral-500 pl-12 pr-12 py-4 rounded-xl border border-neutral-800 focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all duration-300"
              />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <i className="fa-solid fa-eye text-neutral-500 hover:text-yellow-400 transition-colors cursor-pointer" id={showPasswordIconId}></i>
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer group/check">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-amber-500 focus:ring-amber-500/20 focus:ring-offset-0"
              />
              <span className="text-neutral-400 group-hover/check:text-neutral-300 transition-colors">Keep me signed in</span>
            </label>
            <a
              href="/password_reset"
              className="text-neutral-400 hover:text-amber-400 transition-colors"
              data-link
            >
              Forgot credentials?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="submit-btn"
            className="relative w-full py-4 px-6 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 text-black font-bold text-lg rounded-xl shadow-[0_4px_20px_rgba(251,191,36,0.4)] hover:shadow-[0_6px_30px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden group/btn"
            aria-busy="false"
          >
            <span
              id="spinner"
              className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"
              aria-hidden="true"
            ></span>
            <span className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-door-open group-hover/btn:translate-x-[-4px] transition-transform"></i>
              <span id="btn-label">Enter the Lounge</span>
              <i className="fa-solid fa-arrow-right opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all"></i>
            </span>
          </button>

          {/* Divider */}
          <div className="relative flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
            <span className="text-neutral-500 text-xs uppercase tracking-wider">or continue with</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
          </div>

          {/* Remote Link */}
          <RemoteLink />

          {/* Sign Up Link */}
          <p className="text-center text-neutral-400">
            Not a member yet?{" "}
            <a href="register" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors" data-link>
              Apply for a paddle
            </a>
          </p>

          {/* Footer Text */}
          <p className="text-xs text-center text-neutral-500 italic pt-2">
            By signing in, you return to the arena — ready to rally, rise, and respect the code of champions.
          </p>
        </form>
      </div>
    </div>
  );
}
