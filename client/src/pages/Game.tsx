import { NavBar } from "@/components/layout/NavBar";
import { styles } from "@/styles/styles";
import { navigateTo } from "@/utils/navigate-to-link";
import { showInviteModal } from "@/utils/show-invite-modal";
import { getCurrentUser } from "@/utils/user-store";
import { Loader } from "@/components/common/Loader";

export function Game() {
  const me = getCurrentUser();
  if (!me) {
  return <Loader text="Oyun seçeneklerin yükleniyor..." />;
  }

  const gameModes = [
    {
  title: "Yerel Düello",
  subtitle: "1'e 1 — Yan yana maç",
  text: "Yanındaki arkadaşına meydan oku. Tamamen yetenek, gecikme yok — sadece mücadele.",
      icon: "fa-solid fa-users",
      href: "/duel",
    },
    {
  title: "Turnuva",
  subtitle: "Kulüp Kupası",
  text: "Şampiyonları topla. Yerel turnuvada kapış",
      icon: "fa-solid fa-trophy",
      href: "/tournament",
    },
    {
  title: "Online Kapışma",
  subtitle: "1'e 1 — Çevrim içi arena",
  text: "Ağ üzerinden rakibinle yüzleş.",
      icon: "fa-solid fa-globe",
      href: "/remote",
    },
  ];

  setTimeout(() => {
    const playBtns = document.querySelectorAll(".game-mode-item");
    playBtns.forEach((btn, index) => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        if (index === 2) {
          showInviteModal(me);
        } else {
          navigateTo(gameModes[index].href);
        }
      });
    });
  }, 0);

  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-black">
      <NavBar />
      
      <div className="relative z-10 w-full">
        <main className="px-4 md:px-8 lg:px-16 pt-24 md:pt-28 pb-12 min-h-screen">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              <span className="text-amber-400">Oyun Modunu</span> Seç
            </h1>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto">
              Tarzını seç ve şampiyonların arenasına adım at
            </p>
          </div>

          {/* Desktop - Basit Liste */}
          <div className="hidden lg:block max-w-2xl mx-auto">
            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
              {gameModes.map((mode, index) => (
                <div
                  key={index}
                  className="game-mode-item group flex items-center gap-5 p-5 cursor-pointer border-b border-amber-500/10 last:border-b-0 hover:bg-amber-500/5 transition-all duration-300"
                >
                  {/* İkon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all duration-300">
                    <i className={`${mode.icon} text-amber-400 text-xl group-hover:scale-110 transition-transform duration-300`}></i>
                  </div>

                  {/* İçerik */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                      {mode.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mt-0.5">
                      {mode.text}
                    </p>
                  </div>

                  {/* Ok */}
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-chevron-right text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300"></i>
                  </div>
                </div>
              ))}
            </div>

            {/* Alt Bilgi */}
            <p className="text-center text-neutral-500 text-sm mt-6">
              <i className="fa-solid fa-info-circle mr-2 text-amber-500/50"></i>
              Oynamaya başlamak için bir oyun modu seç
            </p>
          </div>

          {/* Mobile Uyarı */}
          <div className="lg:hidden w-full flex flex-col items-center justify-center min-h-[40vh]">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl px-6 py-10 max-w-sm mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/10 flex items-center justify-center">
                <i className="fa-solid fa-mobile-screen text-2xl text-amber-400"></i>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                Sadece Masaüstü
              </h2>
              <p className="text-neutral-400 text-sm">
                Oyun modları yalnızca masaüstü veya tablet cihazlarda kullanılabilir.
                Oynamak için daha büyük bir ekran kullan.
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
