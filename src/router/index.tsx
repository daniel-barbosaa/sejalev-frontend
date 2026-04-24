import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PublicLayout } from "../view/layouts/public-layout";
import { Login } from "../view/login";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
