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
      {/* Arka Plan Efekti */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
      
      {/* Ana Kart */}
      <div className="relative h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br from-black/90 via-neutral-900/80 to-black/90 border border-amber-500/20 backdrop-blur-2xl overflow-hidden">
        {/* Dekoratif Çizgiler */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/30 rounded-full blur-3xl"></div>

        {/* İçerik */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Üst Kısım - Avatar ve Bilgiler */}
          <div className="flex items-start gap-5">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-2 ring-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                <img
                  src={user.avatar_url}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online Durumu */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-black shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
            </div>

            {/* Kullanıcı Bilgileri */}
            <div className="flex-1">
              <p className="text-amber-400 text-sm font-medium mb-1 tracking-wider uppercase">Welcome back</p>
              <h2 className={`${fontSizes.titleFontSize} font-black text-white mb-2 leading-tight`}>
                {getWelcomeTitle(user)}{" "}
                <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">{user.username}</span>
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
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold rounded-xl shadow-[0_4px_20px_rgba(251,191,36,0.4)] hover:shadow-[0_4px_30px_rgba(251,191,36,0.6)] transition-all duration-300 transform hover:scale-[1.02]"
              data-link
            >
              <i className="fa-solid fa-gamepad"></i>
              <span>Play Now</span>
            </a>
            <a 
              href="/my_profile" 
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
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
