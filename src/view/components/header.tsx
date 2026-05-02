import { Flame, User } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const [streakDays] = useState(10);
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };
  const greeting = getGreeting();
  const userName = "Daniel.";

  return (
    <header className="bg-background/80 flex h-14 items-center gap-8 px-8 py-3 md:h-20 md:border-b md:border-slate-100 md:bg-white md:px-8">
      <div className="flex-1">
        <h1 className="text-foreground text-lg leading-tight font-semibold tracking-tight md:text-xl">
          {title}
        </h1>

        <p className="text-muted-foreground mt-1 text-xs font-medium tracking-wide md:hidden">
          {greeting}, {userName}
        </p>

        {subtitle && (
          <p className="text-muted-foreground mt-1 hidden text-xs font-medium tracking-wide md:block">
            {subtitle}
          </p>
        )}
      </div>

      <button
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-300 md:hidden ${
          streakDays >= 7
            ? "border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-sm active:scale-95 active:bg-emerald-100"
            : "border border-slate-100 bg-slate-50 text-slate-400"
        } `}
      >
        <Flame
          size={16}
          className={streakDays >= 7 ? "animate-pulse fill-emerald-600" : ""}
        />
        <span className="text-sm font-bold">{streakDays}</span>
      </button>

      <div className="hidden items-center gap-4 md:flex">
        <div className="flex items-center gap-1.5 rounded-full border border-slate-100/50 bg-slate-50/50 px-3 py-1.5 text-xs font-medium text-slate-500">
          <Flame
            size={14}
            className={streakDays >= 7 ? "text-emerald-500" : ""}
          />
          <span>{streakDays} dias seguidos</span>
        </div>

        <button className="group h-8 w-8 justify-center overflow-hidden rounded-full border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md md:size-10">
          <div className="flex h-full w-full items-center justify-center bg-emerald-50 transition-colors group-hover:bg-emerald-100">
            <User className="text-primary stroke-[1.5px] md:size-5" />
          </div>
        </button>
      </div>
    </header>
  );
}
