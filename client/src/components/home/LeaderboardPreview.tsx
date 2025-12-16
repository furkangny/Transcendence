import { fontSizes } from "@/styles/fontSizes";
import { UserProfile } from "types/types";
import { styles } from "@/styles/styles";
import { hydrateTopThree } from "@/handlers/hydrate-top-three";

function getTagline(rank: number): string | undefined {
  if (rank === 1) {
  return "Şampiyonların Şampiyonu!";
  } else if (rank <= 10) {
  return "Zirve yakın — devam et!";
  } else {
  return "Yolculuğun yeni başlıyor...";
  }
}

export function LeaderboardPreview(props: { user: UserProfile }) {
  setTimeout(() => {
    hydrateTopThree(user);
  }, 0);

  const { user } = props;

  return (
    <div className="relative h-full min-h-[400px] group">
      {/* Ana Kart */}
      <div className="relative h-full p-6 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
        {/* Üst Dekoratif Çizgi */}
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>

        {/* Başlık */}
        <div className="relative flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
              <i className="fa-solid fa-trophy text-black"></i>
            </div>
            <h2 className="text-white font-bold text-xl">En İyi Oyuncular</h2>
          </div>
          
          {/* Crown Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 rounded-full border border-amber-500/30">
            <i className="fa-solid fa-crown text-amber-400 text-sm"></i>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Elit</span>
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
              className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
              data-link
            >
              <span>Tümünü Gör</span>
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
