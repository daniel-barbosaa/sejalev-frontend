import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function Login() {
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-2 md:gap-6">
      <div className="text-foreground text-center">
        <h1 className="text-2xl font-bold">Acesse sua conta</h1>
        <span className="text-muted-foreground mt-2 block text-sm font-medium">
          Organize seu dia. Seja leve.
        </span>
      </div>

      <div className="w-full p-6 md:rounded-3xl md:border md:border-white/60 md:bg-white/40 md:shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:backdrop-blur-2xl">
        <div className="flex flex-col gap-5">
          <Input name="email" placeholder="Seu e-mail" />
          <Input name="password" placeholder="Sua senha" type="password" />
          <Button>Entrar</Button>
        </div>

        <span className="mt-6 block text-center">
          Ainda não tem conta?
          <a href="#" className="text-primary ml-2 font-medium">
            Criar conta
          </a>
        </span>
      </div>
    </div>
  );
}
