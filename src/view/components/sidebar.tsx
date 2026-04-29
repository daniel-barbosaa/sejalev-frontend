import {
  Balloon,
  BookMarked,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  LogOut,
  Target,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import { cn } from "../../app/utils/class-merge";

interface SidebarProps {
  activePage: string;
}

export function Sidebar({ activePage }: SidebarProps) {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const mainItems = [
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
      id: "headboard",
      label: "Cabeceira",
      icon: BookMarked,
      path: "/cabeceira",
    },
  ];

  const systemItems = [
    {
      id: "profile",
      label: "Perfil",
      icon: User,
      path: "/perfil",
    },
    {
      id: "help",
      label: "Ajuda",
      icon: HelpCircle,
      path: "/ajuda",
    },
  ];

  const renderNavItems = (items: typeof mainItems) => {
    return items.map((item) => {
      const Icon = item.icon;
      const isActive = activePage === item.id;

      return (
        <li key={item.id}>
          <NavLink
            to={item.path}
            className={cn(
              "group relative flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 transition-all duration-200",
              isActive
                ? "bg-primary/10 text-primary font-medium"
                : "text-foreground/60 hover:text-foreground hover:bg-slate-50",
            )}
            title={isCollapsed ? item.label : undefined}
          >
            <Icon
              className={cn(
                "h-5 w-5 shrink-0",
                isActive ? "stroke-[2.2px]" : "stroke-[1.5px]",
              )}
            />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1 text-left text-sm whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        </li>
      );
    });
  };

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? 80 : 256 }}
      className="relative z-40 hidden h-screen flex-col border-r border-slate-100 bg-white transition-all duration-300 ease-in-out md:flex"
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hover:text-primary absolute top-12 -right-3 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm transition-all hover:shadow-md"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div
        className={`flex items-center gap-3 overflow-hidden border-b border-slate-50 p-6`}
      >
        <div className="bg-primary flex h-8 w-8 min-w-8 shrink-0 items-center justify-center rounded-lg shadow-lg shadow-emerald-200/50">
          <Balloon className="h-5 w-5 text-white" />
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-foreground font-serif text-xl font-semibold"
            >
              Sejalev
            </motion.h2>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-x-hidden overflow-y-auto p-4">
        <nav>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 px-4 text-[10px] font-bold tracking-widest text-slate-300 uppercase"
              >
                Principal
              </motion.p>
            )}
          </AnimatePresence>
          <ul className="space-y-1">{renderNavItems(mainItems)}</ul>
        </nav>

        <nav className="mt-8">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 px-4 text-[10px] font-bold tracking-widest text-slate-300 uppercase"
              >
                Conta
              </motion.p>
            )}
          </AnimatePresence>
          <ul className="space-y-1">{renderNavItems(systemItems)}</ul>
        </nav>
      </div>

      <div className="overflow-hidden border-t border-slate-50 p-4">
        <div
          className={`flex items-center gap-3 rounded-xl px-2 py-2 transition-all ${!isCollapsed ? "bg-slate-50" : ""} `}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50">
            <User size={18} className="text-primary stroke-[1.5px]" />
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-w-0 flex-col"
              >
                <span className="text-foreground/80 truncate text-sm font-semibold">
                  Daniel Mendes
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          {!isCollapsed && (
            <button
              onClick={() => navigate("/login")}
              className="hover:text-destructive text-muted-foreground/30 ml-auto transition-colors"
            >
              <LogOut size={14} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
