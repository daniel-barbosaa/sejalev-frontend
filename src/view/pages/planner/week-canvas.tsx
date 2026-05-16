import { format, setHours, startOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, Clock, MoreHorizontal, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/app/utils/class-merge";

import { CATEGORY_STYLES, HOURS, type TimeBlock } from "./usePlanner";

interface WeekCanvasProps {
  weekDays: Date[];
  getBlocksForDay(block: number): TimeBlock[];
  formatTime(decimalHour: number): string;
  activeDay: number;
  setActiveDay(day: number): void;
}

export function WeekCanvas({
  weekDays,
  getBlocksForDay,
  formatTime,
  activeDay,
  setActiveDay,
}: WeekCanvasProps) {
  const withoutBlocks = getBlocksForDay(activeDay).length === 0;
  return (
    <>
      {/* Renderiza Desktop - Visível apenas em LG para cima */}
      <div className="hidden overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm lg:block">
        <div className="grid grid-cols-[100px_repeat(7,1fr)] border-b border-slate-100">
          <div className="bg-slate-50/30" />
          {weekDays.map((day) => (
            <div
              key={day.toString()}
              className="border-l border-slate-50 p-6 text-center"
            >
              <span className="mb-2 block font-sans text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                {format(day, "EEE", { locale: ptBR })}
              </span>
              <span className="font-sans text-2xl font-bold text-slate-700">
                {format(day, "d")}
              </span>
            </div>
          ))}
        </div>

        <div className="no-scrollbar relative grid h-212.5 grid-cols-[100px_repeat(7,1fr)] overflow-y-auto py-4">
          <div className="flex flex-col">
            {HOURS.map((hour) => {
              const dateWithHour = setHours(startOfDay(new Date()), hour);
              return (
                <div
                  key={hour}
                  className="flex h-15 items-start justify-center pt-2"
                >
                  <span className="font-sans text-[11px] font-bold tracking-tighter text-slate-300">
                    {format(dateWithHour, "HH:mm")}
                  </span>
                </div>
              );
            })}
          </div>

          {weekDays.map((day, dayIndex) => (
            <div
              key={day.toString()}
              className="group relative border-l border-slate-50/50"
            >
              {HOURS.map((hour) => (
                <div key={hour} className="h-15 border-b border-slate-50/30" />
              ))}

              <div className="absolute inset-0 p-2">
                {getBlocksForDay(dayIndex).map((block) => (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "group/block absolute right-2.5 left-2.5 z-99 cursor-pointer rounded-[16px] border p-3 transition-all duration-300 will-change-transform hover:z-10 hover:shadow-md",
                      CATEGORY_STYLES[block.category],
                    )}
                    style={{
                      top: `${(block.startTime - 7) * 60}px`,
                      height: `${block.duration * 60}px`,
                    }}
                  >
                    <div className="flex h-full flex-col">
                      <span className="line-clamp-2 text-[12px] leading-tight font-bold tracking-tight">
                        {block.title}
                      </span>
                      <div className="mt-auto flex items-center gap-1.5 text-[10px] font-bold opacity-50">
                        <Clock className="size-2.5" />
                        {formatTime(block.startTime)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="absolute inset-0 flex cursor-crosshair items-center justify-center bg-emerald-500/2 opacity-0 transition-opacity group-hover:opacity-100">
                <Plus className="size-10 text-emerald-500 opacity-10" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Renderiza Mobile - Visível abaixo de LG */}
      <div className="space-y-10 lg:hidden">
        <div className="no-scrollbar -mx-4 flex gap-5 overflow-x-auto p-4">
          {weekDays.map((day, dayIndex) => (
            <button
              key={day.toString()}
              onClick={() => setActiveDay(dayIndex)}
              className={cn(
                "flex h-26 w-19.5 shrink-0 flex-col items-center justify-center rounded-3xl transition-all duration-500 will-change-transform",
                activeDay === dayIndex
                  ? "scale-105 border border-emerald-100 bg-white text-emerald-600 shadow-xl shadow-emerald-500/5"
                  : "border border-slate-100 bg-white/50 text-slate-300 hover:text-slate-400",
              )}
            >
              <span
                className={`mb-2 text-[10px] font-bold tracking-[0.2em] uppercase ${activeDay === dayIndex ? "text-emerald-600" : "text-slate-300"}`}
              >
                {format(day, "EEE", { locale: ptBR })}
              </span>
              <span className="font-sans text-2xl font-bold">
                {format(day, "d")}
              </span>
              {activeDay === dayIndex && (
                <motion.div
                  layoutId="activeDot"
                  className="mt-3 size-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-200"
                />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-150 rounded-[40px] border border-slate-100 bg-white p-8 shadow-sm">
          <div className="mb-10 flex items-center justify-between">
            <div className="space-y-1.5">
              <p className="font-sans text-[12px] font-bold tracking-[0.25em] text-emerald-600/60 uppercase">
                {format(weekDays[activeDay], "EEEE", { locale: ptBR })}
              </p>
              <h2 className="text-foreground font-serif text-3xl font-bold tracking-tight">
                Seu Fluxo
              </h2>
            </div>
            <button className="flex size-12 items-center justify-center rounded-full border border-slate-100/50 bg-slate-50 text-slate-400 transition-all active:scale-90">
              <Plus className="size-6" />
            </button>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-13.5 w-px bg-slate-100/60" />

            <div className="space-y-18">
              {HOURS.map((hour) => {
                const dateWithHour = setHours(startOfDay(new Date()), hour);
                return (
                  <div
                    key={hour}
                    className="relative flex h-px items-center gap-10"
                  >
                    <span className="w-10 font-sans text-[11px] font-bold tracking-tighter text-slate-300">
                      {format(dateWithHour, "HH:mm")}
                    </span>
                    <div className="h-px flex-1 bg-slate-50/80" />
                  </div>
                );
              })}
            </div>

            <div className="absolute top-0 right-0 left-18">
              <AnimatePresence mode="popLayout">
                {getBlocksForDay(activeDay).map((block) => (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className={cn(
                      "absolute right-0 left-0 flex flex-col justify-center rounded-xl border p-5 shadow-xs",
                      CATEGORY_STYLES[block.category],
                    )}
                    style={{
                      top: `${(block.startTime - 7) * 72 + 2}px`,
                      height: `${block.duration * 72 - 4}px`,
                    }}
                  >
                    <div className="mb-1 flex items-start justify-between">
                      <span className="text- leading-tight font-bold tracking-tight">
                        {block.title}
                      </span>
                      <MoreHorizontal className="size-5 opacity-30" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold opacity-50">
                      <Clock size={11} />
                      <span>
                        {formatTime(block.startTime)} —{" "}
                        {formatTime(block.startTime + block.duration)}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {withoutBlocks && (
                <div className="flex flex-col items-center justify-center py-32 opacity-20">
                  <Calendar strokeWidth={0.5} className="size-20" />
                  <p className="mt-4 text-sm font-bold tracking-widest uppercase">
                    Sem blocos
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
