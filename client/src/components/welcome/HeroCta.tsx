import { styles } from "@/styles/styles";

export function HeroCta() {
  return (
    <div className="flex flex-col items-center gap-2">
      <a
        href="login"
        className={`${styles.lightPrimaryBtn} animate-myPulse hover:animate-none`}
        data-link
      >
        <i className={`fa-solid fa-ticket ${styles.lightPrimaryBtnIcon}`}></i>
        Enter The Game Vızzz
      </a>
      <p className={styles.heroSubtitle}>
        “A honeybee’s wings beat about 200 times per second”
      </p>
    </div>
  );
}
