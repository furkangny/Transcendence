import { fontSizes } from "@/styles/fontSizes";
import { UserProfile } from "types/types";
import { styles } from "@/styles/styles";
import { hydrateTopThree } from "@/handlers/hydrate-top-three";

function getTagline(rank: number): string | undefined {
  if (rank === 1) {
    return "The Champion of Champions!";
  } else if (rank <= 10) {
    return "You're close to greatness — keep pushing!";
  } else {
    return "Your journey has just begun...";
  }
}

export function LeaderboardPreview(props: { user: UserProfile }) {
  setTimeout(() => {
    hydrateTopThree(user);
  }, 0);

  const { user } = props;

  return (
    <div className="bg-gradient-to-br from-pong-gold/10 via-pong-light-bg/50 to-amber-500/10 rounded-2xl shadow-[0_8px_32px_rgba(251,191,36,0.15)] p-6 md:p-10 w-full max-w-5xl mx-auto border border-pong-gold/30 backdrop-blur-xl">
      <h2
        className={`
          flex items-center gap-3
          text-pong-dark-primary font-bold mb-6 tracking-tight 
          ${fontSizes.smallTitleFontSize}
        `}
      >
        <i className="fa-solid fa-trophy text-pong-gold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"></i>
        <span className="bg-gradient-to-r from-pong-gold to-amber-400 bg-clip-text text-transparent">BEE Club's Elite</span>
      </h2>

      <ol
        id="top-three-list"
        className={`space-y-3 ${fontSizes.bodyFontSize}`}
      ></ol>

      <div className="flex items-center justify-between mt-8 gap-4">
        <div className="bg-pong-dark-bg/60 rounded-xl px-4 py-3 border border-pong-gold/20 text-pong-dark-primary/80 backdrop-blur-md">
          <span className="block text-xs md:text-sm italic">
            {getTagline(user.rank)}
          </span>
        </div>

        <a href="/chamber" className={styles.darkPrimaryBtn} data-link>
          View Full Rankings
        </a>
      </div>
    </div>
  );
}
