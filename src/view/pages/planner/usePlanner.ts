import { eachDayOfInterval, endOfWeek, format, startOfWeek } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export interface TimeBlock {
  id: string;
  title: string;
  startTime: number;
  duration: number;
  dayIndex: number;
  category: "foco" | "leitura" | "descanso" | "rotina";
}

export const CATEGORY_STYLES = {
  foco: "bg-emerald-50 border-emerald-100 text-emerald-700",
  leitura: "bg-blue-50 border-blue-100 text-blue-700",
  descanso: "bg-purple-50 border-purple-100 text-purple-700",
  rotina: "bg-amber-50 border-amber-100 text-amber-700",
};

const INITIAL_BLOCKS: TimeBlock[] = [
  {
    id: "1",
    title: "Meditação",
    startTime: 7.5,
    duration: 0.5,
    dayIndex: 1,
    category: "rotina",
  },
  {
    id: "2",
    title: "Leitura Matinal",
    startTime: 8,
    duration: 1,
    dayIndex: 1,
    category: "leitura",
  },
  {
    id: "3",
    title: "Trabalho Profundo",
    startTime: 9.5,
    duration: 2.5,
    dayIndex: 1,
    category: "foco",
  },
  {
    id: "4",
    title: "Caminhada",
    startTime: 17,
    duration: 1,
    dayIndex: 1,
    category: "descanso",
  },
  {
    id: "5",
    title: "Leitura",
    startTime: 20,
    duration: 1.5,
    dayIndex: 1,
    category: "leitura",
  },

  {
    id: "6",
    title: "Yoga",
    startTime: 7.5,
    duration: 1,
    dayIndex: 2,
    category: "descanso",
  },
  {
    id: "7",
    title: "Planejamento",
    startTime: 9,
    duration: 1.5,
    dayIndex: 2,
    category: "foco",
  },

  {
    id: "8",
    title: "Estudo",
    startTime: 10,
    duration: 2,
    dayIndex: 3,
    category: "leitura",
  },
  {
    id: "9",
    title: "Descanso",
    startTime: 14,
    duration: 1,
    dayIndex: 3,
    category: "descanso",
  },
];

export const HOURS = Array.from({ length: 16 }, (_, i) => i + 7);

export function usePlanner() {
  const [blocks] = useState<TimeBlock[]>(INITIAL_BLOCKS);
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 0 });
  const weekDays = eachDayOfInterval({
    start: weekStart,
    end: endOfWeek(currentDate, { weekStartsOn: 0 }),
  });

  const dateRange = `${format(weekStart, "d 'de' MMM", { locale: ptBR })} — ${format(endOfWeek(currentDate), "d 'de' MMM", { locale: ptBR })}`;

  const [activeDay, setActiveDay] = useState(1);

  const getBlocksForDay = (dayIndex: number) =>
    blocks.filter((b) => b.dayIndex === dayIndex);

  const formatTime = (decimalHour: number) => {
    const h = Math.floor(decimalHour);
    const m = Math.round((decimalHour - h) * 60);
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  };

  return {
    HOURS,
    CATEGORY_STYLES,
    setCurrentDate,
    weekDays,
    dateRange,
    activeDay,
    setActiveDay,
    getBlocksForDay,
    formatTime,
    currentDate,
  };
}
