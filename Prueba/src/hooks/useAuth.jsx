import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRIVATERUTAS, PUBLICRUTAS } from "../models/RutasModels";
import Swal from "sweetalert2";
import { APISUSUARIO } from "../models/apisModels";

export function useAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const recargar = () => {
    setUsuario({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  function handleChange({ target }) {
    setUsuario({
      ...usuario,
      [target.name]: target.value,
    });
  }

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      const response = await axios.post(APISUSUARIO.REGUISTRARUSUARIO, usuario);
      setLoading(false);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.firstName));
      Swal.fire({
        icon: "success",
        title: "¡Registrado!",
        text: "Bienvenido al sistema...",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate(PRIVATERUTAS.HOME);
    } catch (error) {
      setLoading(false);
      console.error("Error registrando usuario:", error);
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Datos incorrectos...",
      });
      if (error.response) {
      } else if (error.request) {
        console.error("No se recibio respuesta del servidor");
      } else {
        console.log("Error al registrar al usuario");
      }
    }
  };
  const iniciarSesion = async (e) => {
    delete usuario.lastName;
    delete usuario.firstName;
    try {
      const response = await axios.post(APISUSUARIO.LOGIN, usuario);
      recargar();
      localStorage.setItem("token", response.data.token);
      Swal.fire({
        icon: "success",
        title: "Bienvenido!",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate(PRIVATERUTAS.HOME);
    } catch (error) {
      setLoading(false);
      console.error("Error registrando usuario:", error);
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Datos incorrectos...",
      });
      if (error.response) {
      } else if (error.request) {
        console.error("No se recibio respuesta del servidor");
      } else {
        console.log("Error al registrar al usuario");
      }
    }
  };
  
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate(PUBLICRUTAS.LOGIN);
  };

  return {
    handleChange,
    handleSubmit,
    iniciarSesion,
    cerrarSesion,
    usuario,
    loading,
  };
}
