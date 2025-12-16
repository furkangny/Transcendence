import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/home/Hero";
import { RecentActivityFeed } from "@/components/home/RecentActivityFeed";
import { LeaderboardPreview } from "@/components/home/LeaderboardPreview";
import { styles } from "@/styles/styles";
import { getCurrentUser } from "@/utils/user-store";
import { Loader } from "@/components/common/Loader";
import { QuickStatsCards } from "@/components/home/QuickStatsCards";
import { startRecentActivityListener } from "@/services/recent-activity-service";

export function Home() {
  const user = getCurrentUser();
  if (!user) {
  return <Loader text="Kulüp profilin hazırlanıyor..." />;
  }

  setTimeout(() => {
    startRecentActivityListener();
  }, 1500);

  return (
    <section className={styles.pageLayoutDark}>
      <NavBar />
      <div className="w-full relative">
        <main className="animate-fadeInUp px-4 md:px-8 lg:px-16 pt-20 md:pt-24 pb-8 md:pb-12 min-h-screen">
          {/* Üst Bölüm - Hero ve Stats Yan Yana */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Sol Taraf - Hero Kartı */}
            <div className="lg:col-span-8">
              <Hero user={user} />
            </div>
            {/* Sağ Taraf - Stats Dikey */}
            <div className="lg:col-span-4">
              <QuickStatsCards user={user} />
            </div>
          </div>

          {/* Alt Bölüm - Activity ve Leaderboard Yan Yana */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivityFeed />
            <LeaderboardPreview user={user} />
          </div>
        </main>
      </div>
    </section>
  );
}
