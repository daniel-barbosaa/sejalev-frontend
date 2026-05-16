import { addWeeks, subWeeks } from "date-fns";
import { ChevronLeft, ChevronRight, Plus, Sparkles } from "lucide-react";

interface WeekNavigationProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  dateRange: string;
}

export function WeekNavigation({
  currentDate,
  setCurrentDate,
  dateRange,
}: WeekNavigationProps) {
  return (
    <header className="sticky top-0 z-50 mt-5 w-full border-b border-slate-100/80 backdrop-blur-2xl md:static md:border-none md:bg-transparent md:backdrop-blur-none">
      {/* ================= DESKTOP ================= */}
      <div className="hidden h-20 items-center justify-between px-8 md:flex">
        <div className="flex items-center gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-foreground text-xl font-bold tracking-tight">
              Organize
            </h1>

            <p className="-mt-1 text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              Semana 18
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              className="hover:text-foreground rounded-lg p-2 text-slate-400 transition-colors hover:bg-white"
              onClick={() => setCurrentDate(subWeeks(currentDate, 1))}
            >
              <ChevronLeft size={18} />
            </button>

            <button className="text-foreground cursor-pointer rounded-lg border border-transparent px-4 py-1.5 text-[11px] font-bold transition-all hover:border-slate-100 hover:bg-white">
              Hoje
            </button>

            <button
              className="hover:text-foreground rounded-lg p-2 text-slate-400 transition-colors hover:bg-white"
              onClick={() => setCurrentDate(addWeeks(currentDate, 1))}
            >
              <ChevronRight size={18} />
            </button>

            <span className="ml-4 text-sm font-semibold text-slate-700">
              {dateRange}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex cursor-pointer items-center gap-2.5 rounded-xl bg-emerald-50 px-4 py-2 text-[12px] font-bold text-emerald-600 transition-all duration-200 hover:bg-emerald-100 hover:shadow-sm hover:shadow-emerald-100/50 active:translate-y-0 active:scale-[0.98]">
            <Sparkles className="size-3.5" />
            <span>MentorIA</span>
          </button>

          <div className="h-6 w-px bg-slate-200/60" />

          <button className="hover:bg-foreground/80 rounded-xl bg-slate-900 p-2.5 text-white shadow-sm transition-colors">
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex flex-col gap-3 px-4 py-3 md:hidden">
        <div className="flex items-center justify-between px-1">
          <div className="jus flex items-center gap-3">
            <h1 className="text-foreground text-lg font-bold">Organize</h1>

            <div className="h-4 w-px bg-slate-200" />

            <span className="mt-0.5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Semana 18
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-full bg-emerald-50 p-2 text-emerald-600 transition-all active:scale-95">
              <Sparkles className="size-4.5" />
            </button>

            <button className="rounded-full bg-slate-900 p-2 text-white transition-transform active:scale-95">
              <Plus className="size-4.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-[18px] border border-slate-100 bg-white/40 p-1.5 shadow-sm">
          <div className="flex items-center gap-1">
            <button className="rounded-xl px-3 py-1.5 text-[11px] font-bold text-slate-600 transition-all hover:bg-white">
              Hoje
            </button>

            <span className="text-foreground ml-2 text-[12px] font-semibold">
              {dateRange}
            </span>
          </div>

          <div className="flex items-center rounded-xl bg-slate-50/80 p-0.5">
            <button
              className="active:text-foreground p-1.5 text-slate-400 transition-colors"
              onClick={() => setCurrentDate(subWeeks(currentDate, 1))}
            >
              <ChevronLeft size={16} />
            </button>

            <div className="mx-0.5 h-3 w-px bg-slate-200" />

            <button
              className="active:text-foreground p-1.5 text-slate-400 transition-colors"
              onClick={() => setCurrentDate(addWeeks(currentDate, 1))}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
