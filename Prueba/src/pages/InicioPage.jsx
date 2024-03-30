import React from "react";
import { CardsNivelesEducativos } from "../components/CardsNivelesEducativos";
import { useAuth } from "../hooks/useAuth";
import { useAuthNivelEducativo } from "../hooks/useAuthNivelEducativo";
import { RegistroModalNivelEducativo } from "../components/RegistroModalNivelEducativo";

export function InicioPage() {
  const { cerrarSesion } = useAuth();
  const {
    nivelesEducativos,
    nivelEducativo,
    openModal,
    toggleModal,
    handleChange,
    handleSubmit,
    eliminarNivelEducativo,
    capturarInformacion,
    actualizar,
  } = useAuthNivelEducativo();

  const handler = nivelEducativo.id ? actualizar : handleSubmit;
  
  return (
    <>
      <CardsNivelesEducativos
        cards={nivelesEducativos}
        toggleModal={toggleModal}
        cerrarSesion={cerrarSesion}
        eliminarNivelEducativo={eliminarNivelEducativo}
        capturarInformacion = {capturarInformacion}
      />
      <RegistroModalNivelEducativo
        openModal={openModal}
        toggleModal={toggleModal}
        handleChange={handleChange}
        handleSubmit={handler}
        nivel={nivelEducativo}
      />
    </>
  );
}
