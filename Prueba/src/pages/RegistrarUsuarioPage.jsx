import React from "react";
import { FormularioRegistro } from "../components/FormularioRegistro";
import { useAuth } from "../hooks/useAuth";

export function RegistrarUsuarioPage() {

  const { handleChange, handleSubmit } = useAuth();

  return (
    <div>
      <FormularioRegistro
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
