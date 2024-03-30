import { Button, Modal } from "flowbite-react";
import "../assets/style/modalRegistro.css";

<svg
  className="w-6 h-6 text-gray-800 dark:text-white"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 17 14"
></svg>;

export function RegistroModalNivelEducativo({
  openModal,
  toggleModal,
  handleChange,
  handleSubmit,
  nivel,
}) {
  const titulo = nivel.id
    ? "Actualizar nivel educativo"
    : "Registrar nivel educativo";
  const TituloBoton = nivel.id ? "Actualizar" : "Registrar";
  const claseboton = nivel.id ? "modalFooter2" : "modalFooter";

  return (
    <Modal dismissible show={openModal} onClose={toggleModal}>
      <Modal.Header className="modalHeader">
        <span>{titulo}</span>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <div className="space-y-6">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-6 h-9 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 2 25 16"
              >
                <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-950 focus:border-blue-950 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nivel educativo..."
              onChange={handleChange}
              name="nombre"
              value={nivel.nombre}
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative mb-1">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-6 h-9 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 25 16"
              >
                <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-950 focus:border-blue-950 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Codigo..."
              onChange={handleChange}
              name="codigo"
              value={nivel.codigo}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={claseboton}>
        <Button onClick={handleSubmit}>{TituloBoton}</Button>
      </Modal.Footer>
    </Modal>
  );
}
