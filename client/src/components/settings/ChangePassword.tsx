import { styles } from "@/styles/styles";
import { fontSizes } from "@/styles/fontSizes";

export function ChangePassword() {
  return (
    <div className={styles.cardOneStyle}>
      <h2
        className={`flex items-center gap-2 text-white ${fontSizes.smallTitleFontSize}`}
      >
        <span className="text-pong-accent">🔒</span>
  <span className="font-bold">Şifreni Değiştir</span>
      </h2>

      <p
        className={`${fontSizes.smallTextFontSize} text-white/80 leading-relaxed`}
      >
  Kulüp kimliğini güvende tutmak için şifreni düzenli olarak güncelle.
  Güçlü ve benzersiz bir şifre seç — şampiyonların savunması böyle olur.
      </p>

      <a
        href="/change_password"
        data-link
        className={styles.darkPrimaryBtn + "md:w-fit"}
      >
  Güncellemeye Git
      </a>

      <p className="text-pong-warning text-xs md:text-sm italic mt-3">
  En iyi koruma için harf, rakam ve sembolleri birlikte kullan.
      </p>
    </div>
  );
}
