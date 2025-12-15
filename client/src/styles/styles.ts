import { fontSizes } from "./fontSizes";

export const styles = {
  // === Start Section Layout styles ===
  pageLayoutLight: `
  	relative overflow-hidden
  	w-full min-h-screen
	text-center
	flex flex-col items-center justify-between gap-8
	px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
	py-6 md:py-10
	text-pong-primary
	bg-gradient-to-br from-pong-bg via-pong-light-bg to-pong-dark-bg
  `,
  pageLayoutDark: `
  	w-full min-h-screen
  	text-pong-dark-primary
  	bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#111111]
  	relative
  `,
  customSectionStyles: `
  	bg-neutral-900
	rounded-2xl border border-neutral-800
  	max-w-xl w-full mx-auto 
  	px-4 md:px-8 py-10 md:py-14
  `,
  pageContent: `
    animate-fadeInUp
	px-6 md:pl-16 lg:pl-24 md:pr-14 pt-20 md:pt-24 pb-8 md:pb-12 
	h-[calc(100vh-2rem)] 
	overflow-y-auto
	flex flex-col items-center gap-8
  `,
  // === End Section Layout styles ===

  // === Start Hero styles ===
  heroTitle: `
	leading-tight
	text-[clamp(2.2rem,6vw,4.5rem)]
	md:text-[clamp(3rem,8vw,7rem)]
	xl:text-[clamp(4rem,10vw,9.25rem)]
	md:leading-[1.1]
	text-amber-400
	transition-all duration-500
  `,
  heroTagline: `
  	mt-4 font-normal
  	text-[clamp(1rem,2.5vw,1.5rem)]
  	xl:text-[clamp(1.25rem,3vw,2.25rem)]
  	text-pong-primary/80
  	after:content-['...']
	font-semibold
	tracking-wide
  `,
  heroSubtitle: `
    mt-2 text-pong-gold
    md:text-[clamp(1rem,2vw,1.375rem)]
	font-medium
  `,
  heroMascot: `
	w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24
	absolute top-8 right-8 lg:top-10 lg:right-10
  `,
  // === End Hero styles ===

  // === Start Buttons styles ===
  lightPrimaryBtn: `
    group 
	relative 
	w-full md:w-[320px] mx-auto
    px-6 py-4 md:px-8 md:py-5
    flex items-center justify-center gap-2
	${fontSizes.buttonFontSize}
	font-bold capitalize tracking-wider
    text-black 
	bg-amber-500
	hover:bg-amber-400
    rounded-xl 
    transition-all duration-300 
	transform active:scale-[0.97]
    focus:outline-none focus:ring-2 
	focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-pong-bg
  `,
  lightPrimaryBtnIcon: `
	transition-transform duration-300 
	group-hover:-translate-x-1
  `,
  darkPrimaryBtn: `
    inline-block
    ${fontSizes.buttonFontSize}
    font-semibold
    capitalize
    px-4 md:px-6 py-2
    rounded-xl
    bg-amber-500
    text-black
    transition-all duration-300
    hover:bg-amber-400
    focus:outline-none
    focus:ring-2 focus:ring-amber-500/50
    active:scale-[0.98]
	text-center
  `,
  darkSubmitBtn: `
	relative
	px-6 py-3
	${fontSizes.buttonFontSize}
	font-semibold
	text-black
	bg-amber-500
	background-size: 200% 200%
	rounded-xl
	flex items-center justify-center
	hover:bg-amber-400
	focus:outline-none
	focus:ring-2
	focus:ring-amber-500/60
	focus:ring-offset-2
	focus:ring-offset-pong-dark-bg
	active:scale-[0.97]
	transition-all duration-300 ease-in-out
	disabled:opacity-50 disabled:cursor-not-allowed
  `,
  // === End Buttons styles ===

  // === Start Input Field styles ===
  InputFieldOne: `
  	normal-case placeholder:capitalize
	input-field
	w-full px-5 py-3.5
	${fontSizes.inputFontSize} 
	font-semibold tracking-wide
	bg-pong-light-bg/50
	rounded-xl shadow-inner
	border border-pong-gold/20 focus:border-pong-gold
	placeholder:text-pong-primary/40
	text-pong-primary
	focus:outline-none 
	focus:ring-2 focus:ring-pong-gold/50 focus:ring-offset-2 focus:ring-offset-pong-bg
	focus:bg-pong-light-bg/70
	transition-all duration-300
	backdrop-blur-md
  `,
  inputFieldDark: `
	w-full 
	bg-pong-dark-bg/80 text-pong-dark-primary placeholder:text-pong-dark-primary/50 
	px-4 py-3 
	rounded-xl 
	border border-pong-gold/30
	outline-none
	focus:outline-none focus:border-pong-gold focus:ring-2 focus:ring-pong-gold/50 
	transition-all duration-300 ease-in-out
	normal-case 
	placeholder:capitalize
    ${fontSizes.inputFontSize}
	mb-4
  `,
  selectField: `
  	capitalize
  	w-full px-5 py-3.5
  	${fontSizes.inputFontSize}  
	font-semibold tracking-wide
  	bg-pong-light-bg/50
  	rounded-xl shadow-inner 
	border border-pong-gold/20 focus:border-pong-gold
  	appearance-none
	text-pong-primary
  	focus:outline-none 
	focus:ring-2 focus:ring-pong-gold/50 focus:ring-offset-2 focus:ring-offset-pong-bg
  	focus:bg-pong-light-bg/70
  	transition-all duration-300
  	relative z-10
  `,
  otpInputStyle: `
  	w-10 h-12 md:w-14 md:h-16
  	${fontSizes.inputFontSize}
	text-center font-bold tracking-widest
  	border border-neutral-700
  	rounded-xl
  	caret-amber-500
  	bg-neutral-900
  	text-pong-primary placeholder:text-pong-primary/30
  	transition-all duration-300 ease-out focus:scale-105
  	focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500
  `,
  showPassIcon: `
	fa-solid fa-eye fa-eye-slash 
	show-pass text-sm 
	px-2
	absolute top-1/2 right-3
	transform translate-y-[-50%] 
	cursor-pointer 
	text-pong-gold/70 hover:text-amber-400
	transition
  `,
  // === End Input Field styles ===

  // === Start Form styles ===
  mainForm: `
  	max-w-md w-full mx-auto
  	bg-neutral-900
	rounded-2xl
  	border border-neutral-800
  	flex flex-col items-center gap-6
  	px-8 py-12
	animate-fadeInUp
  `,
  secForm: `
  	w-full max-w-md mx-auto
  	bg-neutral-900 rounded-2xl
  	flex flex-col items-center gap-6
  	px-8 py-12
  	border border-neutral-800
  `,
  customFormLink: `
	text-pong-gold 
	underline underline-offset-2 
	hover:text-amber-400 hover:underline-offset-4 
	transition-all duration-300
  `,
  darkForm: `
  	w-full max-w-lg 
	bg-neutral-900
	border border-neutral-800 
	rounded-2xl 
	px-8 py-10 
	flex flex-col items-center
  `,
  // === End Form styles ===

  // === Start Title Dark styles ===
  titleDark: `
	tracking-tight leading-tight
	font-bold
	text-4xl md:text-5xl lg:text-6xl xl:text-7xl
	text-amber-400
  `,
  titleSpanDark: `
	font-orbitron 
	text-amber-400 
	relative inline-block 
	underline-animated
  `,
  subtitleDark: `
	font-semibold 
	text-xl md:text-2xl lg:text-3xl xl:text-4xl
	text-pong-dark-primary
  `,
  subtitleParagraphDark: `
	text-pong-dark-primary/70 
	leading-relaxed
	text-base md:text-lg lg:text-xl xl:text-2xl
  `,
  // === End Title Dark styles ===

  // === Start Top Bar styles ===
  navBarStyle: `
    fixed top-0 left-0 right-0 z-40 
	h-16 bg-black border-b border-neutral-800 
	px-4
	flex items-center justify-center gap-8 
  `,
  searchBarStyle: `
  	input-field-dark
	bg-pong-light-bg/50 text-white placeholder:text-pong-dark-primary/50
	px-4 py-3 rounded-xl outline-none  
	focus:ring-2 focus:ring-pong-gold/50 
	border border-pong-gold/20 focus:border-pong-gold
	text-sm lg:text-base
	normal-case 
	w-full
	transition-all duration-300
  `,
  // === End Top Bar styles ===

  // === Start Nav Bar styles ===
  navToggleBtn: `
  	fixed top-2 left-4 z-50 text-2xl text-pong-gold bg-transparent rounded-lg p-2 
    hover:bg-pong-gold/20 transition duration-300 md:hidden
    focus:outline-none focus:ring-2 focus:ring-pong-gold
  `,
  backdrop: `
  	fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 opacity-0 pointer-events-none md:hidden
  `,
  navBarContainer: `
    fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-pong-dark-bg/95 to-pong-dark-custom/95 z-50 
    transform transition-transform duration-300 ease-in-out -translate-x-full
    flex flex-col gap-10 px-6 py-10
    md:w-64 md:rounded-tr-2xl md:rounded-br-2xl 
	md:shadow-[4px_0_30px_rgba(251,191,36,0.2)]
    md:border-r border-pong-gold/30 md:-translate-x-[90%] lg:-translate-x-[80%] 
    md:items-center
    md:hover:translate-x-0 md:transition-all md:duration-300 md:ease-in-out
	backdrop-blur-xl
  `,
  navSettingsBtn: `
    relative flex items-center gap-3 font-semibold px-3 py-2 rounded-xl transition duration-300
    text-pong-dark-primary hover:bg-pong-gold/20 hover:text-white
    md:flex-col md:gap-2 md:text-sm md:px-0 md:py-0 md:w-full md:bg-transparent
    md:hover:bg-transparent md:hover:text-pong-gold
    group w-full
    focus:outline-none focus:ring-2 focus:ring-pong-gold 
  `,
  navSettingsDropdown: `
    absolute left-0 top-full w-[90vw] max-w-xs md:left-full md:top-0 md:ml-2 md:w-60
    bg-neutral-900 rounded-xl z-50 flex flex-col gap-1
	border border-neutral-800
    p-3 hidden
    transition-all duration-200 
  `,
  navLink: `
	relative flex items-center gap-3 font-semibold px-3 py-2 rounded-xl transition duration-300
    hover:bg-pong-gold/20 hover:text-white
    md:flex-col md:gap-2 md:text-sm md:px-0 md:py-0 md:w-full md:bg-transparent
    md:hover:bg-transparent md:hover:text-pong-gold
    group
  `,

  // === Start Custom Cards styles ===
  cardOneStyle: `
  	flex flex-col gap-6
	bg-neutral-900 
	border border-neutral-800 
	w-full max-w-5xl 
	p-8 md:p-10 
	rounded-2xl 
  `,
  badgeStyle: `
	inline-flex items-center 
	gap-2 px-4 py-1.5 
	rounded-full 
	bg-amber-500
	text-black font-semibold
	text-sm 
	border border-amber-600 
	relative group
	cursor-pointer
  `,
  badgeHoverCard: `
  	hidden group-hover:block
  	absolute top-6 -right-4 w-24 h-24 md:w-32 md:h-32 
	rounded-full bg-amber-500/20
    transform scale-90 
    transition-all duration-500 ease-out 
    group-hover:scale-100
	animate-opacity
  `,
  badgeHoverCardImage: `
  	w-full h-full object-cover rounded-full
    hover:scale-110
    transition-transform duration-300 ease-out
  `,
  // === End Custom Cards styles ===

  // === Start Custom List styles ===
  listStyle: `
  	flex items-start gap-3 
	hover:bg-pong-gold/10 
	p-3 
	rounded-xl 
	transition-all
	border border-transparent hover:border-pong-gold/20
  `,
  membersListStyle: `
	bg-neutral-900
	rounded-2xl
	border border-neutral-800
	p-6 md:p-10
	w-full max-w-5xl mx-auto
	transition-all duration-300
  `,
  membersActiveBtn: `
	text-base lg:text-lg font-semibold 
	w-64 
	text-center 
	bg-amber-500 
	transition 
	rounded-xl 
	text-black 
	px-6 py-2 
	cursor-pointer
  `,
  membersInactiveBtn: `
	text-base lg:text-lg font-semibold 
	w-64 
	text-center 
	bg-neutral-800 
	hover:bg-amber-500 
	transition 
	rounded-xl 
	text-pong-dark-primary hover:text-black
	border border-neutral-700
	px-6 py-2 
	cursor-pointer
`,
  // === End Custom List styles ===

  // === Start Game styles ===
  gameContainer: `
  	flex flex-col items-center justify-center
  	w-full min-h-screen
	pt-20 md:pt-24 pb-8 md:pb-12
	relative
	bg-gradient-to-br from-pong-dark-bg via-pong-bg to-pong-light-bg
  `,
  gameExitBtn: `
  	fixed top-16 md:top-20 left-5
	text-2xl md:text-3xl
  	p-2 rounded-full
	bg-neutral-900 border border-neutral-800
	text-amber-500 hover:text-amber-400
  	transition-all duration-300 ease-in-out
  `,
  gameThemeBtn: `
  	fixed top-16 md:top-20 right-5
	w-24
	text-2xl md:text-3xl
  	p-2 rounded-full
	bg-neutral-900 border border-neutral-800
	text-amber-500 hover:text-amber-400
  	transition-all duration-300 ease-in-out
  `,
  gameTitle: `
  	font-orbitron
  	text-[8vw] md:text-[80px]
  	font-bold tracking-wide
  	animate-fadeInUp
	text-amber-400
  `,
  gameCanvas: `
	border-2 border-amber-500/50
	rounded-xl 
	transition-all duration-300
  `,
  gameTab: `
	h-fit w-11/12 
	max-w-lg 
	absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 
	flex-col items-center justify-center 
	px-6 py-12 
	rounded-2xl border border-neutral-800
	bg-neutral-900
	text-center 
  `,
  // === End Game styles ===

  friendsListItemStyle: `
	flex items-center justify-between gap-4 py-4 px-5 mb-4
	bg-neutral-800
	rounded-xl border border-neutral-700
	transition-all duration-300
	hover:-translate-y-0.5
  `,
  friendsAvatarStyle: `
    w-10 h-10 md:w-14 md:h-14 rounded-full object-cover
    ring-2 ring-amber-500/50 transition-transform duration-300
    group-hover:scale-105
  `,
};
