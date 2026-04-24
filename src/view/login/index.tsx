import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function Login() {
  return (
    <section className="w-full max-w-xl">
      <div className="mb-4 text-center md:mb-6">
        <h1 className="text-2xl font-bold">Acesse sua conta</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Organize seu dia. Seja leve.
        </p>
      </div>

      <div className="rounded-3xl p-6 md:border md:border-white/60 md:bg-white/40 md:shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:backdrop-blur-2xl">
        <div className="flex flex-col gap-4">
          <Input name="email" placeholder="Seu e-mail" autoFocus />
          <Input name="password" placeholder="Sua senha" type="password" />

          <Button className="mt-2 w-full">Entrar</Button>
        </div>

        <p className="text-muted-foreground mt-5 text-center text-sm">
          Ainda não tem conta?
          <Link
            to="/register"
            className="text-primary ml-2 font-semibold hover:underline"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </section>
  );
}
