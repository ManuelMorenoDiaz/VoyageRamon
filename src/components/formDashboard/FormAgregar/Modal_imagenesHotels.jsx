import { useRef, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "../../../styles/modales_dashboard.css";
import "react-phone-number-input/style.css";

// eslint-disable-next-line react/prop-types
function ModalImagenesHotelsForm({ show, onClose, fetchApi }) {
  const modalRef = useRef(null);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:3000/routes/hotels");
        setHotels(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de hoteles:", error);
      }
    };

    fetchPlaces();

    if (show) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, onClose]);

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nombre = event.target.elements.nombre.value;
    const imagen_link = event.target.elements.imagen_link.value;
    if (!nombre || !imagen_link) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos",
        confirmButtonColor: "green",
        confirmButtonText: "OK",
      });
      return;
    }
  
    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
  
      await axios.post("http://localhost:3000/routes/images_hotels", data);
  
      Swal.fire({
        title: "Imagen de hoteles añadida correctamente",
        icon: "success",
        confirmButtonColor: "green",
        confirmButtonText: "OK",
      });
  
      onClose();
      fetchApi();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Error: " + error,
        confirmButtonColor: "green",
        confirmButtonText: "OK",
      });
  
      console.error("Error al añadir imagen de hoteles:", error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_content" ref={modalRef}>
        <form className="formulario_inputs_dashboard" onSubmit={handleSubmit}>
          <label>Selecciona un hotel</label>
          <select required className="inputs_datos_dashboard" name="id_hotel">
            <option value="">Selecciona un hotel</option>
            {hotels.map((hotel) => (
              <option key={hotel._id} value={hotel._id}>
                {hotel.nombre}
              </option>
            ))}
          </select>
          <br />
          <label>Nombre de la imagen</label>
          <input
            required
            maxLength="80"
            placeholder="Ingresa un nombre"
            className="inputs_datos_dashboard"
            name="nombre"
            type="text"
          />
          <br />
          <label>URL de la imagen</label>
          <input
            required
            maxLength="255"
            placeholder="Ingresa URl de la imagen"
            className="inputs_datos_dashboard"
            name="imagen_link"
            type="text"
          />
          <br />
          <button type="submit">Añadir :V</button>
        </form>
      </div>
    </div>
  );
}

export default ModalImagenesHotelsForm;
