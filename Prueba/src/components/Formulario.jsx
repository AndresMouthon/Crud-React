import React from "react";
import "../assets/style/formulario.css";
import imagenLogueo from "../assets/img/ImagenLogueo.png";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Formulario = () => {

  const { handleChange, iniciarSesion, loading } = useAuth();

  return (
    <div className="contenedora">
      <div className="contenedor-contenido">
        <h1>Iniciar sesion</h1>
        <fieldset>
          <div className="container-input">
            <MdEmail className="icons" />
            <input type="text" placeholder="Email..." name="email" onChange={handleChange}/>
          </div>
          <div className="container-input">
            <FaKey className="icons" />
            <input type="password" placeholder="Contraseña..." name="password" onChange={handleChange} />
          </div>
        </fieldset>
        <button onClick={iniciarSesion}>
         {loading ? "Cargando..." : "Ingresar"}
        </button>

        <NavLink className="enlace" to="/registrarUsuario">
          ¡Registrate aqui!
        </NavLink>
      </div>
      <div className="imagen">
        <img src={imagenLogueo} alt="" />
      </div>
    </div>
  );
};
