import { type ComponentProps, forwardRef } from "react";

import { cn } from "../../../app/utils/class-merge";
import { FieldError } from "./field-error";
interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, name, placeholder, id, ...props }, ref) => {
    const inputId = id ?? name;
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          className={cn(
            "peer border-border/60 bg-background text-foreground h-13 w-full rounded-lg border px-3 pt-4 transition-all outline-none placeholder-shown:pt-0",
            "focus:border-primary focus:ring-primary/20 focus:ring-2",
            error && "border-destructive",
            className,
          )}
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className="text-muted-foreground pointer-events-none absolute top-2 left-3.25 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base"
        >
          {placeholder}
        </label>
        <FieldError error={error} />
      </div>
    );
  },
);
