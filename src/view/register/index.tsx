import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function Register() {
  return (
    <section className="w-full max-w-xl">
      <div className="mb-4 text-center md:mb-6">
        <h2 className="text-2xl font-bold">Criar nova conta</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Preencha seus dados e comece em poucos passos.
        </p>
      </div>

      <div className="rounded-3xl p-6 md:border md:border-white/60 md:bg-white/40 md:shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:backdrop-blur-2xl">
        <div className="flex flex-col gap-3 md:gap-4">
          <Input name="name" placeholder="Seu nome" />

          <Input
            autoComplete="email"
            name="email"
            placeholder="Seu e-mail"
            type="email"
          />
          <Input
            autoComplete="new-password"
            name="password"
            placeholder="Crie uma senha"
            type="password"
          />
          <Input
            autoComplete="new-password"
            name="passwordConfirmation"
            placeholder="Confirme sua senha"
            type="password"
          />

          <Button className="mt-2 w-full">Criar conta</Button>
        </div>

        <p className="text-muted-foreground mt-5 text-center text-sm">
          Já tem conta?
          <Link
            to="/login"
            className="text-primary ml-2 font-semibold hover:underline"
          >
            Entrar agora
          </Link>
        </p>
      </div>
    </section>
  );
}
