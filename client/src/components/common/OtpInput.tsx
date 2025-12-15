import { styles } from "@/styles/styles";

interface OtpInputProps {
  id: string;
}

export function OtpInput({ id }: OtpInputProps) {
  return (
    <div className="flex justify-center gap-3" id={id}>
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="
            w-12 h-14 
            text-center text-2xl font-bold text-white
            bg-neutral-900/80 
            border-2 border-neutral-700/50
            rounded-xl
            outline-none
            transition-all duration-300
            focus:border-amber-500/70 focus:ring-2 focus:ring-amber-500/30 focus:bg-neutral-800
            hover:border-neutral-600
            placeholder:text-neutral-600
          "
          placeholder="·"
        />
      ))}
    </div>
  );
}
