import { InputField } from "../common/InputField";
import { RemoteLink } from "./RemoteLink";
import { styles } from "@/styles/styles";
import { fontSizes } from "@/styles/fontSizes";
import { SubmitBtn } from "../common/SubmitBtn";
import { handleSignUp } from "@/handlers/signup";
import { showPasswordToggle } from "@/utils/show-password-toggle";

export function SignUpForm() {
  const passwordId = "password";
  const showPasswordIconId = "signup-show-pass";
  const confirmPasswordId = "confirm-password";
  const showConfirmPasswordIconId = "signup-show-confirm-pass";

  setTimeout(() => {
    showPasswordToggle(showPasswordIconId, passwordId);
    showPasswordToggle(showConfirmPasswordIconId, confirmPasswordId);
    handleSignUp();

    const titleInput = document.getElementById("title") as HTMLInputElement;
    const genderSelect = document.getElementById(
      "gender-options"
    ) as HTMLDivElement | null;
    const male = document.getElementById("gender-male") as HTMLParagraphElement;
    const female = document.getElementById(
      "gender-female"
    ) as HTMLParagraphElement;
    const options = [male, female];

    let focusedIndex = -1;
    let selectedIndex = -1;

    function updateSelectedOption(index: number) {
      options.forEach((opt, idx) => {
        if (idx === index) {
          opt.setAttribute("aria-selected", "true");
          opt.classList.add("bg-amber-500/30", "font-bold");
        } else {
          opt.setAttribute("aria-selected", "false");
          opt.classList.remove("bg-amber-500/30", "font-bold");
        }
      });
      selectedIndex = index;
    }

    function openOptions() {
      genderSelect?.classList.remove("hidden");
      titleInput.setAttribute("aria-expanded", "true");
      focusedIndex = selectedIndex >= 0 ? selectedIndex : 0;
      options[focusedIndex].focus();
      updateSelectedOption(focusedIndex);
    }

    function closeOptions() {
      genderSelect?.classList.add("hidden");
      titleInput.setAttribute("aria-expanded", "false");
      focusedIndex = -1;
    }

    titleInput.addEventListener("click", (e) => {
      e.stopPropagation();
      if (genderSelect?.classList.contains("hidden")) {
        openOptions();
      } else {
        closeOptions();
      }
    });

    titleInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openOptions();
      }
    });

    options.forEach((opt, idx) => {
      opt.addEventListener("click", () => {
        titleInput.value = opt.textContent || "";
        updateSelectedOption(idx);
        closeOptions();
        titleInput.focus();
      });
      opt.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          focusedIndex = (idx + 1) % options.length;
          options[focusedIndex].focus();
          updateSelectedOption(focusedIndex);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          focusedIndex = (idx - 1 + options.length) % options.length;
          options[focusedIndex].focus();
          updateSelectedOption(focusedIndex);
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          titleInput.value = opt.textContent || "";
          updateSelectedOption(idx);
          closeOptions();
          titleInput.focus();
        } else if (e.key === "Escape") {
          closeOptions();
          titleInput.focus();
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (
        !genderSelect?.contains(e.target as Node) &&
        e.target !== titleInput
      ) {
        closeOptions();
      }
    });

    if (titleInput.value) {
      const idx = options.findIndex(
        (opt) => opt.textContent === titleInput.value
      );
      if (idx >= 0) updateSelectedOption(idx);
    }
  }, 0);

  return (
    <div className="w-full max-w-md mx-auto animate-fadeInUp">
      {/* Ana Form Kartı */}
      <div className="relative group">
        {/* Form Container */}
        <form id="signup-form" className="relative bg-neutral-900 rounded-2xl border border-neutral-800 p-8 space-y-5">
          {/* Üst Dekoratif Çizgi */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500 rounded-b-full"></div>

          {/* Input Alanları */}
          <div className="space-y-4 pt-4">
            {/* Username Input */}
            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <i className="fa-solid fa-user text-neutral-500 group-focus-within/input:text-amber-400 transition-colors"></i>
              </div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Choose your noble name"
                autoFocus={true}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                className="w-full bg-neutral-900/80 text-white placeholder-neutral-500 pl-12 pr-4 py-4 rounded-xl border border-neutral-800 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <i className="fa-solid fa-envelope text-neutral-500 group-focus-within/input:text-yellow-400 transition-colors"></i>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your correspondence address"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                className="w-full bg-neutral-900/80 text-white placeholder-neutral-500 pl-12 pr-4 py-4 rounded-xl border border-neutral-800 focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all duration-300 lowercase"
              />
            </div>

            {/* Gender Select */}
            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
                <i className="fa-solid fa-crown text-neutral-500 group-focus-within/input:text-amber-400 transition-colors"></i>
              </div>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Select your title of elegance"
                autoComplete="off"
                className="w-full bg-neutral-900/80 text-white placeholder-neutral-500 pl-12 pr-10 py-4 rounded-xl border border-neutral-800 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300 cursor-pointer"
                readOnly
                tabIndex={0}
              />
              <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2 text-neutral-500">
                <i className="fa-solid fa-chevron-down text-sm"></i>
              </div>
              <div
                id="gender-options"
                role="listbox"
                tabIndex={-1}
                className="hidden absolute z-50 top-full mt-2 left-0 w-full bg-neutral-900 rounded-xl shadow-2xl border border-neutral-800 overflow-hidden"
              >
                <p
                  id="gender-male"
                  role="option"
                  aria-selected="false"
                  className="outline-none px-5 py-3.5 text-neutral-300 hover:bg-amber-500/20 focus:bg-amber-500/30 cursor-pointer transition-colors duration-150 ease-in-out"
                  tabIndex={0}
                >
                  Gentleman
                </p>
                <p
                  id="gender-female"
                  role="option"
                  aria-selected="false"
                  className="outline-none px-5 py-3.5 text-neutral-300 hover:bg-amber-500/20 focus:bg-amber-500/30 cursor-pointer transition-colors duration-150 ease-in-out"
                  tabIndex={0}
                >
                  Lady
                </p>
              </div>
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
                placeholder="Secret code"
                autoComplete="off"
                maxLength={30}
                className="w-full bg-neutral-900/80 text-white placeholder-neutral-500 pl-12 pr-12 py-4 rounded-xl border border-neutral-800 focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all duration-300"
              />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <i className="fa-solid fa-eye text-neutral-500 hover:text-yellow-400 transition-colors cursor-pointer" id={showPasswordIconId}></i>
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <i className="fa-solid fa-shield-halved text-neutral-500 group-focus-within/input:text-amber-400 transition-colors"></i>
              </div>
              <input
                type="password"
                name="password"
                id={confirmPasswordId}
                placeholder="Confirm secret code"
                autoComplete="off"
                maxLength={30}
                className="w-full bg-neutral-900/80 text-white placeholder-neutral-500 pl-12 pr-12 py-4 rounded-xl border border-neutral-800 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300"
              />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <i className="fa-solid fa-eye text-neutral-500 hover:text-amber-400 transition-colors cursor-pointer" id={showConfirmPasswordIconId}></i>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="submit-btn"
            className="relative w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden group/btn"
            aria-busy="false"
          >
            <span
              id="spinner"
              className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"
              aria-hidden="true"
            ></span>
            <span className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-champagne-glasses group-hover/btn:translate-x-[-4px] transition-transform"></i>
              <span id="btn-label">Register Your Racket</span>
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

          {/* Sign In Link */}
          <p className="text-center text-neutral-400">
            Already a member of the hall?{" "}
            <a href="login" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors" data-link>
              Enter the lounge
            </a>
          </p>

          {/* Footer Text */}
          <p className="text-xs text-center text-neutral-500 italic pt-2">
            By joining, you swear on honor to compete fairly and uphold the spirit of ping pong.
          </p>
        </form>
      </div>
    </div>
  );
}
