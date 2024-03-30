import { Navigate, Outlet } from "react-router-dom";
import { PUBLICRUTAS } from "../../models/RutasModels";

export const AuthGuard = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate replace to={PUBLICRUTAS.LOGIN} />;
};
