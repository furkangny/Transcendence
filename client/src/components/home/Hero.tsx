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
    <div className="relative h-full min-h-[320px] group">
      {/* Ana Kart */}
      <div className="relative h-full p-6 md:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
        {/* Üst Dekoratif Çizgi */}
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>

        {/* İçerik */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Üst Kısım - Avatar ve Bilgiler */}
          <div className="flex items-start gap-5">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-2 ring-amber-500/50">
                <img
                  src={user.avatar_url}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online Durumu */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-neutral-900"></div>
            </div>

            {/* Kullanıcı Bilgileri */}
            <div className="flex-1">
              <p className="text-amber-400 text-sm font-medium mb-1 tracking-wider uppercase">Welcome back</p>
              <h2 className={`${fontSizes.titleFontSize} font-black text-white mb-2 leading-tight`}>
                {getWelcomeTitle(user)}{" "}
                <span className="text-amber-400">{user.username}</span>
              </h2>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold border border-amber-500/30">
                  <i className="fa-solid fa-medal mr-1.5"></i>Rank #{user.rank}
                </span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-500/30">
                  <i className="fa-solid fa-star mr-1.5"></i>Level {user.level}
                </span>
              </div>
            </div>
          </div>

          {/* Orta Kısım - Quote */}
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-amber-500/10">
            <p className="text-neutral-400 italic text-sm leading-relaxed">
              <i className="fa-solid fa-quote-left text-amber-400/50 mr-2"></i>
              {generateRankQuote(user.rank)}
              <i className="fa-solid fa-quote-right text-amber-400/50 ml-2"></i>
            </p>
          </div>

          {/* Alt Kısım - Butonlar */}
          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            <a
              href="/arena"
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
              data-link
            >
              <i className="fa-solid fa-gamepad"></i>
              <span>Play Now</span>
            </a>
            <a 
              href="/my_profile" 
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl border border-neutral-700 transition-all duration-300"
              data-link
            >
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
