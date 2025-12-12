import { fontSizes } from "@/styles/fontSizes";
import { styles } from "@/styles/styles";
import { UserProfile } from "types/types";
import { RankBadge } from "@/components/common/RankBadge";
import { generateRankQuote } from "@/utils/generate-rank-quote";

export function getWelcomeTitle(user: UserProfile): string {
  if (user.gender === "M") return `Mr.`;
  if (user.gender === "F") return `Ms.`;
  return `Champ`;
}

export function Hero(props: { user: UserProfile }) {
  const { user } = props;

  return (
    <div className="p-6 md:p-10 shadow-[0_8px_40px_rgba(251,191,36,0.2)] w-full max-w-5xl mx-auto rounded-2xl backdrop-blur-xl bg-gradient-to-br from-pong-dark-bg/80 via-pong-light-bg/60 to-pong-gold/10 border border-pong-gold/30">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-pong-gold via-amber-400 to-yellow-300 shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300">
          <img
            src={user.avatar_url}
            alt="Profile Avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div className="text-center md:text-left flex-1">
          <h2
            className={`${fontSizes.titleFontSize} font-bold text-pong-dark-primary mb-3`}
          >
            Welcome, {getWelcomeTitle(user)}{" "}
            <span className="bg-gradient-to-r from-pong-gold to-amber-400 bg-clip-text text-transparent">{user.username}</span>!
          </h2>
          <p
            className={`text-pong-gold ${fontSizes.bodyFontSize} font-semibold mb-3`}
          >
            Ranked #{user.rank} in BEE Club • Level {user.level}
          </p>
          <RankBadge rank={user.rank} />
          <hr className="my-4 border-pong-gold/30" />
          <p
            className={`text-pong-dark-primary/70 italic ${fontSizes.smallTextFontSize} mb-3`}
          >
            {generateRankQuote(user.rank)}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-4">
            <a
              href="/arena"
              className={styles.darkPrimaryBtn + " hidden md:flex items-center gap-2"}
              data-link
            >
              <i className="fa-solid fa-table-tennis-paddle-ball"></i>
              <span className="font-semibold">Enter the Arena</span>
            </a>
            <a href="/my_profile" className={styles.darkPrimaryBtn} data-link>
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
