import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PublicLayout } from "../view/layouts/public-layout";
import { Login } from "../view/login";
import { Register } from "../view/register";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/conta" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
