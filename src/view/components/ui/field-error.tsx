import { CirclePlus } from "lucide-react";

interface FieldErrorProps {
  error: string | undefined;
}
export function FieldError({ error }: FieldErrorProps) {
  return (
    <>
      {error && (
        <div className="mt-2 flex items-center gap-2 text-xs text-red-900">
          <CirclePlus />
          <span>{error}</span>
        </div>
      )}
    </>
  );
}
