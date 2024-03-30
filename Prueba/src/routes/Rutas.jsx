import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrarUsuarioPage } from "../pages/RegistrarUsuarioPage";
import { PRIVATERUTAS, PUBLICRUTAS } from "../models/RutasModels";
import { LoginPage } from "../pages/LoginPage";
import { InicioPage } from "../pages/InicioPage";
import { AuthGuard } from "../utils/guards/AuthGuard";

export function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PUBLICRUTAS.LOGIN} element={<LoginPage />} />
        <Route
          path={PUBLICRUTAS.REGUISTRARUSUARIO}
          element={<RegistrarUsuarioPage />}
        />
        <Route element={<AuthGuard />}>
          <Route path={PRIVATERUTAS.HOME} element={<InicioPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
