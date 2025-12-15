import { fontSizes } from "@/styles/fontSizes";
import { startRecentActivityListener } from "@/services/recent-activity-service";

export function RecentActivityFeed(): HTMLDivElement {
  const wrapper = document.createElement("div");
  wrapper.className =
    "relative h-full min-h-[400px] group";

  // Arka plan efekti
  const bgEffect = document.createElement("div");
  bgEffect.className = "absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 rounded-3xl blur-xl opacity-50";
  wrapper.appendChild(bgEffect);

  // Ana container
  const mainContainer = document.createElement("div");
  mainContainer.className = "relative h-full p-6 rounded-3xl bg-gradient-to-br from-black/90 via-neutral-900/80 to-black/90 border border-amber-500/20 backdrop-blur-2xl overflow-hidden";
  
  // Üst dekoratif çizgi
  const topLine = document.createElement("div");
  topLine.className = "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500";
  mainContainer.appendChild(topLine);

  // Başlık container
  const titleContainer = document.createElement("div");
  titleContainer.className = "flex items-center justify-between mb-6";

  const titleLeft = document.createElement("div");
  titleLeft.className = "flex items-center gap-3";

  const iconWrapper = document.createElement("div");
  iconWrapper.className = "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg";
  
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-clock-rotate-left text-black";
  iconWrapper.appendChild(icon);

  const title = document.createElement("h2");
  title.className = "text-white font-bold text-xl";
  title.textContent = "Recent Activity";

  titleLeft.appendChild(iconWrapper);
  titleLeft.appendChild(title);
  titleContainer.appendChild(titleLeft);

  // Live badge
  const liveBadge = document.createElement("div");
  liveBadge.className = "flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 rounded-full border border-emerald-500/30";
  
  const liveDot = document.createElement("span");
  liveDot.className = "w-2 h-2 bg-emerald-400 rounded-full animate-pulse";
  
  const liveText = document.createElement("span");
  liveText.className = "text-emerald-400 text-xs font-semibold uppercase tracking-wider";
  liveText.textContent = "Live";

  liveBadge.appendChild(liveDot);
  liveBadge.appendChild(liveText);
  titleContainer.appendChild(liveBadge);

  mainContainer.appendChild(titleContainer);

  const ul = document.createElement("ul");
  ul.id = "recent-activity-list";
  ul.className = "space-y-4 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent";

  mainContainer.appendChild(ul);
  wrapper.appendChild(mainContainer);

  return wrapper;
}
