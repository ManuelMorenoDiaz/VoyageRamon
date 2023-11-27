import "../../../styles/modales_dashboard.css";
import { useState, useRef, useEffect } from "react";
// eslint-disable-next-line react/prop-types
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Modal_lugares_form({ show, onClose, fetchApi }) {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const modalRef = useRef(null);

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, onClose]);

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleCloseModal);
      axios
        .get("http://localhost:3000/routes/categories")
        .then((response) => {
          setCategorias(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener categorías:", error);
        });
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, onClose]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
  
      await axios.post("http://localhost:3000/routes/places/", data);
  
      console.log("Lugar añadido correctamente");
      onClose();
      fetchApi();
    } catch (error) {
      console.error("Error al añadir lugar:", error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_content" ref={modalRef}>
        <form className="formulario_inputs_dashboard" onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            required
            maxLength="80"
            placeholder="Ingresa el nombre del lugar"
            className="inputs_datos_dashboard"
            type="text"
            name="nombre"
          />
          <br />
          <label>Detalles</label>
          <input
            required
            maxLength="255"
            placeholder="Ingresa los detalles del lugar"
            className="inputs_datos_dashboard"
            type="text"
            name="detalles"
          />
          <br />
          <label>Categoría</label>
          <select
            required
            className="inputs_datos_dashboard"
            name="categoria_id"
            onChange={(e) => setSelectedCategoria(e.target.value)}
            value={selectedCategoria}
          >
            <option value="" disabled>
              Selecciona una categoría
            </option>
            {categorias.map((categoria) => (
              <option key={categoria._id} value={categoria._id}>
                {categoria.titulo}
              </option>
            ))}
          </select>
          <p></p>
          <button type="submit">Añadir :V</button>
        </form>
      </div>
    </div>
  );
}

export default Modal_lugares_form;
