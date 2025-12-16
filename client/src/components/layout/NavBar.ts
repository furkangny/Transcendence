import { styles } from "@/styles/styles";

export function NavBar() {
  // === NAV ITEMS ===
  const navItems = [
    { path: "/salon", icon: "fa-house", label: "Salon" },
    { path: "/arena", icon: "fa-table-tennis-paddle-ball", label: "Arena" },
    { path: "/chamber", icon: "fa-ranking-star", label: "Sıralama" },
    { path: "/lounge", icon: "fa-message", label: "Sohbet" },
    { path: "/members", icon: "fa-user-group", label: "Üyeler" },
  ];

  const settingsItems = [
    { label: "Güvenlik", path: "/security", icon: "fa-lock" },
    { label: "Engellenenler", path: "/muted_players", icon: "fa-user-slash" },
    { label: "Hesabı Sil", path: "/wipe_account", icon: "fa-trash" },
  ];

  // Remove old elements
  document.getElementById("hover-zone")?.remove();
  document.getElementById("nav-toggle-btn")?.remove();
  document.getElementById("nav-backdrop")?.remove();
  document.getElementById("navbar")?.remove();

  // === MAIN NAV CONTAINER ===
  const nav = document.createElement("nav");
  nav.id = "navbar";
  nav.className = `
    fixed top-0 left-0 right-0 z-50
    bg-black
    border-b border-neutral-800
  `;

  // Inner container
  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto px-4 md:px-6 lg:px-8";

  // Flex wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "flex items-center justify-between h-16";

  // === LOGO ===
  const logo = document.createElement("a");
  logo.href = "/salon";
  logo.setAttribute("data-link", "true");
  logo.className = "flex items-center gap-2 text-white font-bold text-lg";
  logo.innerHTML = `
    <span class="text-amber-400 font-black">BEE</span>
    <span class="text-white">PONG</span>
  `;

  // === DESKTOP NAV LINKS ===
  const desktopNav = document.createElement("div");
  desktopNav.className = "hidden md:flex items-center gap-1";

  navItems.forEach(({ path, icon, label }) => {
    const isActive = location.pathname === path;
    const link = document.createElement("a");
    link.href = path;
    link.setAttribute("data-link", "true");
    link.className = `
      flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
      ${isActive 
        ? "bg-amber-500/20 text-amber-400" 
        : "text-neutral-400 hover:text-white hover:bg-white/5"}
    `;
    link.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${label}</span>
    `;
    desktopNav.appendChild(link);
  });

  // === DESKTOP SETTINGS DROPDOWN ===
  const settingsWrapper = document.createElement("div");
  settingsWrapper.className = "hidden md:block relative ml-2";

  const settingsBtn = document.createElement("button");
  settingsBtn.className = `
    flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
    text-neutral-400 hover:text-white hover:bg-white/5
  `;
  settingsBtn.innerHTML = `
    <i class="fa-solid fa-gear"></i>
    <span>Ayarlar</span>
    <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200" id="desktop-settings-arrow"></i>
  `;

  const settingsDropdown = document.createElement("div");
  settingsDropdown.className = `
    absolute right-0 top-full mt-2 w-48 py-2
    bg-neutral-900 rounded-xl border border-neutral-800
    hidden z-50
  `;

  settingsItems.forEach(({ label, path, icon }) => {
    const link = document.createElement("a");
    link.href = path;
    link.setAttribute("data-link", "true");
    link.className = `
      flex items-center gap-3 px-4 py-2.5 text-sm
      text-neutral-400 hover:text-white hover:bg-amber-500/10 transition-all
    `;
    link.innerHTML = `
      <i class="fa-solid ${icon} w-4 text-amber-500/70"></i>
      <span>${label}</span>
    `;
    settingsDropdown.appendChild(link);
  });

  // Logout link in dropdown
  const logoutLink = document.createElement("a");
  logoutLink.href = "/checkout";
  logoutLink.setAttribute("data-link", "true");
  logoutLink.className = `
    flex items-center gap-3 px-4 py-2.5 text-sm
    text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-all
    border-t border-neutral-800 mt-2 pt-2
  `;
  logoutLink.innerHTML = `
    <i class="fa-solid fa-arrow-right-from-bracket w-4 text-red-500/70"></i>
    <span>Çıkış Yap</span>
  `;
  settingsDropdown.appendChild(logoutLink);

  settingsWrapper.appendChild(settingsBtn);
  settingsWrapper.appendChild(settingsDropdown);

  // Settings dropdown toggle
  let settingsOpen = false;
  settingsBtn.addEventListener("click", () => {
    settingsOpen = !settingsOpen;
    settingsDropdown.classList.toggle("hidden");
    document.getElementById("desktop-settings-arrow")?.classList.toggle("rotate-180");
  });

  document.addEventListener("click", (e) => {
    if (settingsOpen && !settingsWrapper.contains(e.target as Node)) {
      settingsOpen = false;
      settingsDropdown.classList.add("hidden");
      document.getElementById("desktop-settings-arrow")?.classList.remove("rotate-180");
    }
  });

  // === MOBILE MENU BUTTON ===
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.className = "md:hidden p-2 text-neutral-400 hover:text-white transition-colors";
  mobileMenuBtn.innerHTML = `<i class="fa-solid fa-bars text-xl" id="mobile-menu-icon"></i>`;

  // === MOBILE MENU ===
  const mobileMenu = document.createElement("div");
  mobileMenu.id = "mobile-menu";
  mobileMenu.className = `
    md:hidden fixed inset-x-0 top-16 bottom-0 z-40
    bg-black
    transform translate-y-full transition-transform duration-300
  `;

  const mobileMenuInner = document.createElement("div");
  mobileMenuInner.className = "p-4 space-y-2";

  // Mobile nav items
  navItems.forEach(({ path, icon, label }) => {
    const isActive = location.pathname === path;
    const link = document.createElement("a");
    link.href = path;
    link.setAttribute("data-link", "true");
    link.className = `
      flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all
      ${isActive 
        ? "bg-amber-500/20 text-amber-400" 
        : "text-neutral-300 hover:bg-white/5"}
    `;
    link.innerHTML = `
      <i class="fa-solid ${icon} w-5"></i>
      <span>${label}</span>
    `;
    link.addEventListener("click", closeMobileMenu);
    mobileMenuInner.appendChild(link);
  });

  // Mobile divider
  const divider = document.createElement("div");
  divider.className = "border-t border-neutral-800 my-4";
  mobileMenuInner.appendChild(divider);

  // Mobile settings items
  settingsItems.forEach(({ label, path, icon }) => {
    const link = document.createElement("a");
    link.href = path;
    link.setAttribute("data-link", "true");
    link.className = `
      flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all
      text-neutral-400 hover:bg-white/5
    `;
    link.innerHTML = `
      <i class="fa-solid ${icon} w-5 text-amber-500/70"></i>
      <span>${label}</span>
    `;
    link.addEventListener("click", closeMobileMenu);
    mobileMenuInner.appendChild(link);
  });

  // Mobile logout
  const mobileLogout = document.createElement("a");
  mobileLogout.href = "/checkout";
  mobileLogout.setAttribute("data-link", "true");
  mobileLogout.className = `
    flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all
    text-red-400 hover:bg-red-500/10 mt-4
  `;
  mobileLogout.innerHTML = `
    <i class="fa-solid fa-arrow-right-from-bracket w-5"></i>
    <span>Çıkış Yap</span>
  `;
  mobileLogout.addEventListener("click", closeMobileMenu);
  mobileMenuInner.appendChild(mobileLogout);

  mobileMenu.appendChild(mobileMenuInner);

  // Mobile menu toggle
  let mobileMenuOpen = false;

  function openMobileMenu() {
    mobileMenuOpen = true;
    mobileMenu.classList.remove("translate-y-full");
    mobileMenu.classList.add("translate-y-0");
    document.getElementById("mobile-menu-icon")?.classList.replace("fa-bars", "fa-xmark");
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    mobileMenu.classList.add("translate-y-full");
    mobileMenu.classList.remove("translate-y-0");
    document.getElementById("mobile-menu-icon")?.classList.replace("fa-xmark", "fa-bars");
  }

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuOpen ? closeMobileMenu() : openMobileMenu();
  });

  // === ASSEMBLE ===
  wrapper.appendChild(logo);
  wrapper.appendChild(desktopNav);
  wrapper.appendChild(settingsWrapper);
  wrapper.appendChild(mobileMenuBtn);
  container.appendChild(wrapper);
  nav.appendChild(container);

  // Append mobile menu to body
  document.body.appendChild(mobileMenu);

  return nav;
}