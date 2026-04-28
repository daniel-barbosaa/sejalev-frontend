import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden selection:bg-emerald-100 selection:text-emerald-900">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] h-[60%] w-[60%] rounded-full bg-emerald-50/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] h-[50%] w-[50%] rounded-full bg-sky-50/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[40%] w-[40%] rounded-full bg-white blur-[100px]" />
      </div>
      <header className="z-10 shrink-0 pt-6 pl-6">
        <div className="flex items-center gap-3">
          <span className="text-primary font-serif text-xl tracking-tight sm:text-2xl">
            Sejalev
          </span>
        </div>
      </header>

      <main className="z-100 flex flex-1 items-center justify-center p-4 sm:p-8">
        <div className="flex w-full justify-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
