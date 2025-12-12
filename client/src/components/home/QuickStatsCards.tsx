import { fontSizes } from "@/styles/fontSizes";
import { UserProfile } from "types/types";

function Card(props: {
  value: number | string;
  label: string;
  textColor: string;
  bgColor: string;
  glowColor: string;
  icon: string;
}) {
  return (
    <div
      className={`${props.bgColor} rounded-xl shadow-lg px-4 py-4 flex flex-col items-center transform hover:scale-[1.05] transition-all duration-300 border border-pong-gold/20 backdrop-blur-md hover:shadow-[0_8px_30px_${props.glowColor}]`}
    >
      <i className={`${props.icon} ${props.textColor} text-xl mb-2 drop-shadow-[0_0_8px_${props.glowColor}]`}></i>
      <span
        className={`${props.textColor} ${fontSizes.bodyFontSize} font-bold drop-shadow-[0_0_10px_${props.glowColor}]`}
      >
        {props.value}
      </span>
      <span
        className={`text-pong-dark-primary/80 mt-1 font-medium ${fontSizes.smallTextFontSize} tracking-wide`}
      >
        {props.label}
      </span>
    </div>
  );
}

export function QuickStatsCards(props: { user: UserProfile }) {
  const { user } = props;

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-6 w-full max-w-5xl mx-auto">
      <Card
        value={user.matches_played}
        label="Matches"
        textColor="text-pong-gold"
        bgColor="bg-gradient-to-br from-pong-gold/10 via-pong-light-bg/50 to-amber-500/10"
        glowColor="rgba(251,191,36,0.3)"
        icon="fa-solid fa-gamepad"
      />
      <Card
        value={user.matches_won}
        label="Wins"
        textColor="text-green-400"
        bgColor="bg-gradient-to-br from-green-500/10 via-pong-light-bg/50 to-emerald-500/10"
        glowColor="rgba(34,197,94,0.3)"
        icon="fa-solid fa-trophy"
      />
      <Card
        value={user.matches_lost}
        label="Losses"
        textColor="text-red-400"
        bgColor="bg-gradient-to-br from-red-500/10 via-pong-light-bg/50 to-rose-500/10"
        glowColor="rgba(239,68,68,0.3)"
        icon="fa-solid fa-heart-crack"
      />
    </div>
  );
}
