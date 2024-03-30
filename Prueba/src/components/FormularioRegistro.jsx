import React from "react";
import "../assets/style/formulario.css";
import imagenLogueo from "../assets/img/ImagenLogueo.png";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdKeyboardAlt } from "react-icons/md";

export const FormularioRegistro = ({handleChange, handleSubmit}) => {

  return (
    <div className="contenedora">
      <div className="contenedor-contenido">
        <h1>Registrarse</h1>
        <fieldset>
          <div className="container-input">
            <MdKeyboardAlt className="icons" />
            <input
              type="text"
              placeholder="Nombre..."
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="container-input">
            <MdKeyboardAlt className="icons" />
            <input
              type="text"
              placeholder="Apellido..."
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="container-input">
            <MdEmail className="icons" />
            <input
              type="text"
              placeholder="Email..."
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="container-input">
            <FaKey className="icons" />
            <input
              type="password"
              placeholder="Contraseña..."
              name="password"
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <button onClick={handleSubmit}>
          Registrarme
        </button>
        <NavLink className="enlace" to="/">
          ¡Iniciar sesion!
        </NavLink>
      </div>
      <div className="imagen">
        <img src={imagenLogueo} alt="" />
      </div>
    </div>
  );
};