import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PrivateLayout } from "../view/layouts/private-layout";
import { PublicLayout } from "../view/layouts/public-layout";
import { Login } from "../view/login";
import { Register } from "../view/register";
import { Today } from "../view/today";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Navigate to="/conta" replace />} />
          <Route path="/conta" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/hoje" element={<Today />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
