import { Flame, LogOut, Settings, User } from "lucide-react";
import { useState } from "react";

import { cn } from "@/app/utils/class-merge";

import { DropdownMenu } from "./dropdown";
import { DropdownMenuContent } from "./dropdown/content";
import { DropdownMenuItem } from "./dropdown/item";
import { DropdownMenuTrigger } from "./dropdown/trigger";

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

  const accountItems = [
    {
      id: "profile",
      label: "Meu Perfil",
      icon: User,
      path: "/perfil",
    },
    {
      id: "settings",
      label: "Configurações",
      icon: Settings,
      path: "/configuracoes",
    },
    {
      id: "logout",
      label: "Sair da conta",
      icon: LogOut,
      path: "/conta",
      danger: true,
    },
  ];

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

        <DropdownMenu>
          <DropdownMenuTrigger className="group h-8 w-8 justify-center overflow-hidden rounded-full border border-slate-100 shadow-sm transition-all hover:shadow-md md:size-10">
            <div className="flex h-full w-full items-center justify-center bg-emerald-50 transition-colors group-hover:bg-emerald-100">
              <User className="text-primary stroke-[1.5px] md:size-5" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="absolute right-0 mt-3 w-56 overflow-hidden border border-slate-100 p-0 shadow-xl shadow-slate-200/50">
            <div className="border-b border-slate-50 bg-slate-50/50 p-4">
              <p className="text-foreground text-sm font-semibold">
                Usuário Sejalev
              </p>
              <p className="text-[10px] font-medium text-slate-400">
                usuario@sejalev.com
              </p>
            </div>

            <div className="p-2 pt-0">
              {accountItems.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownMenuItem
                    key={item.id}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl text-sm transition-all",
                      item.danger
                        ? "text-destructive hover:bg-destructive/5!"
                        : "text-slate-600 hover:bg-slate-50",
                    )}
                  >
                    <Icon size={16} className="stroke-[1.8px]" />
                    <span className="font-medium">{item.label}</span>
                  </DropdownMenuItem>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
