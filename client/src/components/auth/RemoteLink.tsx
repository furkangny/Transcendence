import { styles } from "@/styles/styles";
import { handleGoogleSignin, handle42Signin } from "@/handlers/remote-signin";

export function RemoteLink() {
  setTimeout(() => {
    handleGoogleSignin();
    handle42Signin();
  }, 0);

  return (
    <div className="flex gap-4">
      <a
        href="#"
        id="google-signin-btn"
        className="
          group flex-1 flex items-center justify-center gap-3 
          px-6 py-4 
          bg-neutral-900/80 hover:bg-neutral-800/90
          border border-neutral-700/50 hover:border-amber-500/50
          rounded-xl 
          text-neutral-300 hover:text-amber-400
          font-semibold
          transition-all duration-300
          hover:shadow-[0_4px_20px_rgba(251,191,36,0.15)]
        "
      >
        <i className="fa-brands fa-google text-xl group-hover:scale-110 transition-transform duration-300"></i>
        <span>Google</span>
      </a>
      <a
        href="#"
        id="ft-signin-btn"
        className="
          group flex-1 flex items-center justify-center gap-3 
          px-6 py-4 
          bg-neutral-900/80 hover:bg-neutral-800/90
          border border-neutral-700/50 hover:border-amber-500/50
          rounded-xl 
          text-neutral-300 hover:text-amber-400
          font-semibold
          transition-all duration-300
          hover:shadow-[0_4px_20px_rgba(251,191,36,0.15)]
        "
      >
        <i className="fa-brands fa-42-group text-xl group-hover:scale-110 transition-transform duration-300"></i>
        <span>42 Intra</span>
      </a>
    </div>
  );
}
