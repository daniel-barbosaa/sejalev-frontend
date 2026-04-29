import { Link } from "react-router-dom";

import GoogleLogo from "../../assets/google.svg";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { PasswordField } from "../components/ui/password-field";

export function Register() {
  return (
    <section className="w-full max-w-112.5">
      <div className="mb-4 text-center md:mb-6">
        <h1 className="text-foreground text-2xl font-medium">Crie sua conta</h1>
        <p className="text-muted-foreground">
          Junte-se a nós para uma vida mais leve e organizada.
        </p>
      </div>

      <div className="border-border/40 rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
        <form className="space-y-6">
          <div className="space-y-4">
            <Input name="fullName" type="text" placeholder="Nome Completo" />
            <Input name="email" type="email" placeholder="E-mail" />
            <PasswordField name="password" />
          </div>

          <Button className="w-full">Criar conta</Button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="border-border/60 w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="text-muted-foreground bg-white px-4">
                ou cadastre-se com
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <Button type="button" className="space-x-3" variant="outline">
              <img className="w-5.5" src={GoogleLogo} alt="google" />
              <span className="text-sm">Google</span>
            </Button>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Já possui uma conta?
              <Link
                to="/conta"
                className="text-primary font-semibold decoration-2 underline-offset-4 hover:underline"
              >
                {" "}
                Entrar
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
