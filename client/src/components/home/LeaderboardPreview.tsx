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
    <div className="relative h-full min-h-[400px] group">
      {/* Arka Plan Efekti */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 rounded-3xl blur-xl opacity-50"></div>
      
      {/* Ana Kart */}
      <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-black/90 via-neutral-900/80 to-black/90 border border-amber-500/20 backdrop-blur-2xl overflow-hidden">
        {/* Üst Dekoratif Çizgi */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500"></div>
        
        {/* Köşe Efektleri */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>

        {/* Başlık */}
        <div className="relative flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <i className="fa-solid fa-trophy text-black"></i>
            </div>
            <h2 className="text-white font-bold text-xl">Top Players</h2>
          </div>
          
          {/* Crown Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 rounded-full border border-amber-500/30">
            <i className="fa-solid fa-crown text-amber-400 text-sm"></i>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Elite</span>
          </div>
        </div>

        {/* Liste */}
        <ol
          id="top-three-list"
          className="space-y-3 mb-6"
        ></ol>

        {/* Alt Kısım */}
        <div className="relative mt-auto pt-4 border-t border-amber-500/10">
          <div className="flex items-center justify-between gap-4">
            {/* Motivasyon Mesajı */}
            <div className="flex-1">
              <p className="text-neutral-400 text-sm italic">
                <i className="fa-solid fa-lightbulb text-amber-400/60 mr-2"></i>
                {getTagline(user.rank)}
              </p>
            </div>

            {/* Buton */}
            <a 
              href="/chamber" 
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-semibold rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-[1.02]"
              data-link
            >
              <span>View All</span>
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
