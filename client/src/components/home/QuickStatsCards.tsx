import { fontSizes } from "@/styles/fontSizes";
import { UserProfile } from "types/types";

function StatItem(props: {
  value: number | string;
  label: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  iconBg: string;
}) {
  return (
    <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-800/80 border border-amber-500/10 hover:border-amber-500/20 transition-all duration-300 cursor-pointer">
      {/* İkon */}
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${props.iconBg} flex items-center justify-center shadow-lg`}>
        <i className={`${props.icon} text-black text-lg`}></i>
      </div>
      
      {/* Değerler */}
      <div className="flex-1">
        <span className={`block text-2xl font-black bg-gradient-to-r ${props.gradientFrom} ${props.gradientTo} bg-clip-text text-transparent`}>
          {props.value}
        </span>
        <span className="text-neutral-400 text-sm font-medium">{props.label}</span>
      </div>

      {/* Hover Efekti */}
      <i className="fa-solid fa-chevron-right text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300"></i>
    </div>
  );
}

export function QuickStatsCards(props: { user: UserProfile }) {
  const { user } = props;
  const winRate = user.matches_played > 0 
    ? Math.round((user.matches_won / user.matches_played) * 100) 
    : 0;

  return (
    <div className="relative h-full">
      {/* Arka Plan Efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-yellow-500/10 rounded-3xl blur-xl opacity-50"></div>
      
      {/* Ana Kart */}
      <div className="relative h-full p-5 rounded-3xl bg-gradient-to-br from-black/90 via-neutral-900/80 to-black/90 border border-amber-500/20 backdrop-blur-2xl">
        {/* Başlık */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center">
            <i className="fa-solid fa-chart-simple text-black text-sm"></i>
          </div>
          <h3 className="text-white font-bold text-lg">Your Stats</h3>
        </div>

        {/* İstatistikler */}
        <div className="flex flex-col gap-3">
          <StatItem
            value={user.matches_played}
            label="Total Matches"
            icon="fa-solid fa-gamepad"
            gradientFrom="from-amber-400"
            gradientTo="to-yellow-500"
            iconBg="bg-gradient-to-br from-amber-500 to-yellow-600"
          />
          <StatItem
            value={user.matches_won}
            label="Victories"
            icon="fa-solid fa-trophy"
            gradientFrom="from-emerald-400"
            gradientTo="to-green-500"
            iconBg="bg-gradient-to-br from-emerald-500 to-green-600"
          />
          <StatItem
            value={user.matches_lost}
            label="Defeats"
            icon="fa-solid fa-heart-crack"
            gradientFrom="from-rose-400"
            gradientTo="to-red-500"
            iconBg="bg-gradient-to-br from-rose-500 to-red-600"
          />
          <StatItem
            value={`${winRate}%`}
            label="Win Rate"
            icon="fa-solid fa-percent"
            gradientFrom="from-amber-400"
            gradientTo="to-yellow-500"
            iconBg="bg-gradient-to-br from-amber-500 to-yellow-600"
          />
        </div>
      </div>
    </div>
  );
}
