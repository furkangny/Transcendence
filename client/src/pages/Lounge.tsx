import { styles } from "@/styles/styles";
import { NavBar } from "@/components/layout/NavBar";
import { SecondaryHeader } from "@/components/common/SecondaryHeader";
import { ChatList } from "@/components/chat/ChatList";
import { loadChatList } from "@/handlers/load-chat-list";

export function Lounge() {
  setTimeout(() => {
    loadChatList();
  }, 0);

  return (
    <section className={styles.pageLayoutDark}>
      <NavBar />
      <div className="w-full relative">
        <main className={styles.pageContent}>
          <SecondaryHeader
            title="Sohbet Salonu"
            subtitle="Konuşmaların yankılandığı, rekabetin alevlendiği yer — kulüpteki diğer oyuncularla bağlantı kur."
          />

          <div id="friends-container" className={styles.membersListStyle}>
            <h2 className="text-pong-dark-primary text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-3 mb-6">
              <span className="inline-block w-1.5 h-8 bg-pong-dark-accent rounded-sm"></span>
              Aktif Sohbetler
            </h2>
            <p className="text-sm text-pong-dark-highlight/80 -mt-4 mb-6 pl-6">
              Kulüp arkadaşlarınla son konuşmalarına kaldığın yerden devam et.
            </p>
            <ChatList />
          </div>
        </main>
      </div>
    </section>
  );
}
