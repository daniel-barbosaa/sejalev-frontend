import { Outlet } from "react-router-dom";

import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

export function PrivateLayout() {
  const path = location.pathname.split("/")[1];

  const getPageTitle = (activePage: string) => {
    switch (activePage) {
      case "hoje":
        return "Hoje";
      case "planejar":
        return "Planejar";
      case "cabeceira":
        return "Cabeceira";
      default:
        return "Hoje";
    }
  };

  const getPageSubtitle = (activePage: string) => {
    switch (activePage) {
      case "hoje":
        return "Foque no que realmente importa hoje";
      case "planejar":
        return "Planeje com calma, execute com foco";
      case "cabeceira":
        return "Sua leitura atual, no seu ritmo";
      default:
        return "";
    }
  };

  return (
    <div className="bg-background relative flex h-screen overflow-hidden">
      <Sidebar activePage={"today"} />

      <div className="flex min-w-0 flex-1 flex-col pb-20 md:pb-0">
        <Header title={getPageTitle(path)} subtitle={getPageSubtitle(path)} />

        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
