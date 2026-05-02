import {
  HelpCircle,
  LogOut,
  MoreHorizontal,
  Settings,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { mainNavItemsBottom } from "@/app/config/navigation";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const moreItems = [
    { id: "perfil", label: "Perfil", icon: User, path: "/perfil" },
    {
      id: "configuracoes",
      label: "Ajustes",
      icon: Settings,
      path: "/configuracoes",
    },
    { id: "ajuda", label: "Ajuda", icon: HelpCircle, path: "/ajuda" },
    { id: "conta", label: "Sair", icon: LogOut, path: "/conta", danger: true },
  ];

  const getActiveState = (path: string) => {
    if (path === "/hoje") return location.pathname === "/hoje";
    return location.pathname.startsWith(path);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="pb-safe fixed right-0 bottom-0 left-0 z-60 border-t border-slate-100 bg-white/80 px-4 pt-2 shadow-xs backdrop-blur-xl md:hidden">
        <div className="mx-auto flex h-16 max-w-lg items-center justify-around">
          {mainNavItemsBottom.map((item) => {
            const Icon = item.icon;
            const isActive = getActiveState(item.path);

            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.path)}
                className="group relative flex min-w-16 flex-col items-center justify-center gap-1 transition-all"
              >
                <div
                  className={`rounded-xl p-1.5 transition-all duration-300 ${isActive ? "text-primary" : "text-slate-400"} `}
                >
                  <Icon
                    className={`h-6 w-6 ${isActive ? "stroke-[2.5px]" : "stroke-[1.5px]"}`}
                  />
                </div>
                <span
                  className={`text-[10px] font-medium transition-colors ${isActive ? "text-primary" : "text-slate-400"}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex min-w-16 flex-col items-center justify-center gap-1 text-slate-400 transition-all"
          >
            <div className="p-1.5">
              <MoreHorizontal className="stroke-[1.5px]" />
            </div>
            <span className="text-[10px] font-medium">Mais</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-70 bg-black/20 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 bottom-0 left-0 z-80 rounded-t-4xl bg-white p-6 shadow-2xl md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-foreground text-lg font-semibold">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full p-2 transition-colors hover:bg-slate-100"
                >
                  <X size={20} className="text-slate-400" />
                </button>
              </div>

              <div className="grid grid-cols-1">
                {moreItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.path)}
                      className={`flex items-center gap-4 rounded-2xl p-3 transition-all ${
                        item.danger
                          ? "text-destructive hover:bg-red-50"
                          : "text-slate-600 hover:bg-slate-50"
                      } `}
                    >
                      <div
                        className={`rounded-xl p-2 ${item.danger ? "bg-red-50" : "bg-slate-100"}`}
                      >
                        <Icon size={20} className="stroke-[1.8px]" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6 text-center">
                <p className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
                  Sejalev v1.0.0
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
