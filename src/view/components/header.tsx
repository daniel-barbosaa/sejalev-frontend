import { User } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="bg-background/80 flex h-14 items-center gap-8 border-b border-slate-100 px-8 py-3 md:h-20 md:bg-white md:px-8">
      <div className="flex-1">
        <h1 className="text-foreground text-lg leading-tight font-semibold tracking-tight md:text-xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground mt-1 hidden text-xs font-medium tracking-wide md:block">
            {subtitle}
          </p>
        )}
      </div>

      <button className="group h-8 w-8 justify-center overflow-hidden rounded-full border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md md:size-10">
        <div className="flex h-full w-full items-center justify-center bg-emerald-50 transition-colors group-hover:bg-emerald-100">
          <User className="text-primary stroke-[1.5px] md:size-5" />
        </div>
      </button>
    </header>
  );
}
