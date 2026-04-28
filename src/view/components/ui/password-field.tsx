import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input } from "./input";

interface PasswordFieldProps {
  name: string;
  placeholder?: string;
}

export function PasswordField({
  name,
  placeholder = "Senha",
}: PasswordFieldProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        name={name}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className="pr-11"
      />

      <button
        type="button"
        onClick={() => setShow((see) => !see)}
        className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}
