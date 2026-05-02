import { BookMarked, CalendarDays, PenLine, Target } from "lucide-react";

export const mainNavItemsBottom = [
  {
    id: "plan",
    label: "Planejar",
    icon: CalendarDays,
    path: "/planejar",
  },
  {
    id: "headboard",
    label: "Cabeceira",
    icon: BookMarked,
    path: "/cabeceira",
  },
  {
    id: "today",
    label: "Hoje",
    icon: Target,
    path: "/hoje",
  },
  {
    id: "daily",
    label: "Diário",
    icon: PenLine,
    path: "/diario",
  },
];

export const mainNavItemsLeft = [
  {
    id: "today",
    label: "Hoje",
    icon: Target,
    path: "/hoje",
  },
  {
    id: "plan",
    label: "Planejar",
    icon: CalendarDays,
    path: "/planejar",
  },
  {
    id: "daily",
    label: "Diário",
    icon: PenLine,
    path: "/diario",
  },
  {
    id: "headboard",
    label: "Cabeceira",
    icon: BookMarked,
    path: "/cabeceira",
  },
];
