import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";

import { cn } from "@/app/utils/class-merge";

interface DropdownMenuContentProps {
  children: ReactNode;
  className?: string;
}
export function DropdownMenuContent({
  children,
  className,
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={cn(
          "z-99 space-y-2 rounded-2xl bg-white p-2 will-change-transform",
          "data-[state=open]:animate-dropdown-in",
          "data-[state=closed]:animate-dropdown-out",
          className,
        )}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}
