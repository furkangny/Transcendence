import { NavBar } from "@/components/layout/NavBar";
import { styles } from "@/styles/styles";
import { deleteAccount } from "@/handlers/delete-account";
import { SecondaryHeader } from "@/components/common/SecondaryHeader";
import { fontSizes } from "@/styles/fontSizes";

export function DeleteAccount() {
  setTimeout(() => {
    deleteAccount();
  }, 0);

  return (
    <section className={styles.pageLayoutDark}>
      <NavBar />
      <div className="w-full relative">
        <main
          className={`${styles.pageContent} flex flex-col items-center gap-10`}
        >
          <SecondaryHeader
            title="Hesabınız Silinecek"
            subtitle="Bu işlem geri alınamaz. Devam ederseniz profilin ve oyuna dair verilerin kalıcı olarak silinir."
          />

          <div className="flex flex-col gap-8 w-full max-w-5xl items-center px-8 md:px-10">
            <div className="w-full max-w-xl rounded-lg border border-white/10 bg-pong-dark-highlight/5 p-6 space-y-4 shadow-md">
              <p
                className={`text-center text-pong-dark-secondary font-medium ${fontSizes.bodyFontSize} leading-relaxed`}
              >
                Gitmeden önce istersen kısa bir not bırakabilirsin. (Opsiyonel)
              </p>

              <textarea
                name="farewell"
                id="farewell-message"
                placeholder="Veda notunu buraya yaz..."
                className={`
                  w-full h-40 p-4 rounded-lg bg-pong-dark-highlight/10
                  text-white placeholder-pong-dark-primary/40 shadow-md border border-white/10
                  focus:outline-none focus:ring-2 focus:ring-pong-accent transition ${fontSizes.bodyFontSize}
                `}
                autoFocus
              ></textarea>
            </div>

            <div className="w-full max-w-xl bg-pong-error/10 border border-pong-error/30 rounded-lg p-6 text-center space-y-3 shadow-md">
              <p className="text-pong-error font-bold text-lg">
                Bu işlem kalıcıdır.
              </p>
              <ul className="text-pong-dark-primary/80 text-base list-disc list-inside space-y-1 text-left">
                <li>Profilin silinir</li>
                <li>Maç geçmişin ve istatistiklerin kalıcı olarak silinir</li>
                <li>BEEPONG'a erişim hakkın sona erer</li>
              </ul>
            </div>

            <button
              type="button"
              id="submit-btn"
              aria-busy="false"
              className={`
                relative w-full max-w-xl px-6 py-3 rounded-lg font-bold ${fontSizes.buttonFontSize}
                bg-pong-error text-white shadow-lg
                hover:bg-red-700 transition-all
              `}
            >
              <span
                id="spinner"
                className="hidden absolute left-4 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
              ></span>
              <span id="btn-label">Hesabınızı Sil</span>
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}
