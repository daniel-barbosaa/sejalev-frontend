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
            "peer border-border bg-background text-foreground h-13 w-full rounded-lg border px-3 pt-4 transition-all placeholder-shown:pt-0 focus:border-gray-800 focus:outline-none",
            error && "border-red-900!",
            className,
          )}
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className="pointer-events-none absolute top-2 left-3.25 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base"
        >
          {placeholder}
        </label>
        <FieldError error={error} />
      </div>
    );
  },
);
