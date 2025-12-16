import { styles } from "@/styles/styles";
import { fontSizes } from "@/styles/fontSizes";

export function ChangeEmail() {
  return (
    <div className={styles.cardOneStyle}>
      <h2
        className={`flex items-center gap-2 text-white ${fontSizes.smallTitleFontSize}`}
      >
        <span className="text-pong-accent">📧</span>
  <span className="font-bold">E-posta Adresini Değiştir</span>
      </h2>

      <p
        className={`${fontSizes.smallTextFontSize} text-white/80 leading-relaxed`}
      >
  Sana nereden ulaşacağımızı değiştirmek mi istiyorsun? Kayıtlı e-posta
  adresini güncelle; kulüp duyuruları ve güvenlik bildirimlerini kaçırma.
      </p>

      <a
        href="/change_email"
        data-link
        className={styles.darkPrimaryBtn + "md:w-fit"}
      >
  Güncellemeye Git
      </a>

      <p className="text-pong-warning text-xs md:text-sm italic mt-3">
  Yeni e-postanın geçerli olduğundan emin ol — hesap kurtarma ve
  bildirimler için önemli.
      </p>
    </div>
  );
}
