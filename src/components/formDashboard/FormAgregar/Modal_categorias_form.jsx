import "../../../styles/modales_dashboard.css";
import Swal from "sweetalert2";
import { useRef, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Modal_categorias_form({ show, onClose, fetchApi }) {
  const modalRef = useRef(null);

  const ParaModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", ParaModal);
    } else {
      document.removeEventListener("mousedown", ParaModal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const titulo = event.target.elements.titulo.value;
    const imagen = event.target.elements.imagen.value;
    const video = event.target.elements.video.value;
    const descripcion = event.target.elements.descripcion.value;

    const data = {
      titulo,
      imagen,
      video,
      descripcion,
    };

    axios
      .post("http://localhost:3000/routes/categories/", data)
      .then(() => {
        Swal.fire({
          title: "Categoria añadida",
          icon: "success",
          confirmButtonColor: "green",
          confirmButtonText: "OK",
        });
        onClose();
        fetchApi();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "Error: " + error,
          confirmButtonColor: "green",
          confirmButtonText: "OK",
        });
        console.error("Error al añadir la categoria:", error);
      });
  };

  if (!show) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_content" ref={modalRef}>
        <form className="formulario_inputs_dashboard" onSubmit={handleSubmit}>
          <label>Titulo</label>
          <input
            required
            maxLength="80"
            placeholder="Ingresa una titulo"
            className="inputs_datos_dashboard"
            name="titulo"
            type="text"
          />
          <br />
          <label>Imagen</label>
          <input
            required
            maxLength="255"
            placeholder="Ingresa URl de la imagen"
            className="inputs_datos_dashboard"
            name="imagen"
            type="text"
          />
          <br />
          <label>Video</label>
          <input
            required
            maxLength="255"
            placeholder="Ingresa URL del video"
            className="inputs_datos_dashboard"
            name="video"
            type="text"
          />
          <br />
          <label>Descripcion</label>
          <input
            required
            maxLength="255"
            placeholder="Ingresa una descripcion"
            className="inputs_datos_dashboard"
            name="descripcion"
            type="text"
          />
          <button type="submit">Añadir :V</button>
        </form>
      </div>
    </div>
  );
}

export default Modal_categorias_form;
