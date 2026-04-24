import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "../../../app/utils/class-merge";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  "flex h-12 items-center justify-center rounded-2xl  px-6 font-medium text-black transition-all disabled:cursor-not-allowed cursor-pointer disabled:bg-gray-100 disabled:text-gray-400",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/80",
        destructive: "bg-destructive hover:bg-destructive/80 text-white",
        outline:
          "bg-transparent border border-gray-800 text-foreground/90 hover:bg-gray-800/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export function Button({
  className,
  variant,
  disabled,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(buttonVariants({ variant, className }))}
    >
      {isLoading ? <Spinner clasName="size-6" /> : children}
    </button>
  );
}
