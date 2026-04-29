import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/sidebar";

export function PrivateLayout() {
  return (
    <div className="bg-background relative flex h-screen overflow-hidden">
      <Sidebar activePage={"today"} />

      <div className="flex min-w-0 flex-1 flex-col pb-20 md:pb-0">
        <div>Header</div>

        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
