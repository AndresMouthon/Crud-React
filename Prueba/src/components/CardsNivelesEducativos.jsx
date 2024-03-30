import React from "react";
import "../assets/style/cards.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";

export function CardsNivelesEducativos({
  cerrarSesion,
  cards,
  toggleModal,
  capturarInformacion,
  eliminarNivelEducativo,
}) {

  return (
    <div className="contenedor-principal">
      <div className="btn-group">
        <button className="btn-registrar" onClick={toggleModal}>
          <FaPlusCircle className="icons" />
          Registrar
        </button>
        <button className="btn-cerrarSesion" onClick={cerrarSesion}>
          <RiLogoutBoxFill className="icons" />
          Cerrar sesion
        </button>
      </div>
      <div className="contenedor">
        {cards.map((card) => (
          <div className="cards_container" key={card.id}>
            <div className="cards_informacion">
              <h1>{card.codigo}</h1>
              <h2>{card.nombre}</h2>
              <div className="btn-group">
                <button
                  className="btn-editar"
                  onClick={() => capturarInformacion(card)}
                >
                <FaEdit />
                </button>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarNivelEducativo(card.id)}
                >
                  <MdDelete className="icons" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
