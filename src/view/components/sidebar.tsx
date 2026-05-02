import { Balloon, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { mainNavItemsLeft } from "@/app/config/navigation";

import { cn } from "../../app/utils/class-merge";

interface SidebarProps {
  activePage: string;
}

export function Sidebar({ activePage }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderNavItems = (items: typeof mainNavItemsLeft) => {
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
          <ul className="space-y-1">{renderNavItems(mainNavItemsLeft)}</ul>
        </nav>
      </div>

      <div className="mt-auto p-4">
        <div
          className={cn(
            "flex max-h-35 w-full flex-col overflow-hidden transition-all duration-300",
            isCollapsed
              ? "flex items-center justify-center border-none bg-transparent p-2"
              : "rounded-2xl border border-emerald-100/50 bg-emerald-50/50 p-4",
          )}
        >
          {isCollapsed ? (
            <button
              className="group rounded-xl p-3 text-emerald-600 transition-colors hover:bg-emerald-50"
              title="Ajuda"
            >
              <HelpCircle className="h-5 w-5 stroke-[1.5px] transition-transform group-hover:scale-110" />
            </button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.35,
                }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100">
                    <HelpCircle className="h-4 w-4 text-emerald-600" />
                  </div>

                  <span className="text-sm font-semibold whitespace-nowrap text-slate-700">
                    Precisa de ajuda?
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-500">
                  Estamos aqui para te guiar.
                </p>

                <button className="w-full rounded-xl border border-emerald-100 bg-white py-2 text-xs font-bold text-emerald-600 shadow-sm transition-all hover:bg-emerald-600 hover:text-white">
                  Central de Ajuda
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/**

 */
