import { useRef, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "../../../styles/modales_dashboard.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// eslint-disable-next-line react/prop-types
function Modal_hoteles_form({ show, onClose, fetchApi }) {
  const [value, setValue] = useState();
  const modalRef = useRef(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:3000/routes/places");
        setPlaces(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de lugares:", error);
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

    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);

      await axios.post("http://localhost:3000/routes/hotels/", data);

      Swal.fire({
        title: "Hotel añadido :v",
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

      console.error("Error al añadir hotel:", error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_content" ref={modalRef}>
        <form className="formulario_inputs_dashboard" onSubmit={handleSubmit}>
          <label>Ubicacion del hotel</label>
          <select required className="inputs_datos_dashboard" name="lugar_id">
            <option value="">Selecciona un lugar</option>
            {places.map((place) => (
              <option key={place._id} value={place._id}>
                {place.nombre}
              </option>
            ))}
          </select>
          <br />
          <label>Nombre</label>
          <input
            required
            maxLength="80"
            placeholder="Ingresa un nombre"
            className="inputs_datos_dashboard"
            name="nombre"
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
          <label>Descripción</label>
          <input
            required
            maxLength="1000"
            placeholder="Ingresa una descripcion"
            className="inputs_datos_dashboard"
            name="descripcion"
            type="text"
          />
          <br />
          <label>Direccion</label>
          <input
            required
            maxLength="40"
            placeholder="Ingresa una direccion"
            className="inputs_datos_dashboard"
            name="direccion"
            type="text"
          />
          <br />
          <label>Telefono</label>
          <PhoneInput
            required
            placeholder="Ingresa un Telefono"
            className="inputs_datos_dashboard"
            name="telefono"
            defaultCountry="MX"
            value={value}
            onChange={setValue}
          />
          <br />
          <label>Presupuesto</label>
          <input
            required
            className="inputs_datos_dashboard"
            placeholder="Ingresa el presupuesto"
            name="presupuesto"
            type="number"
            step="0.01"
            min="0"
            pattern="^\d+(\.\d{1,2})?$"
          />

          <br />
          <label>Correo</label>
          <input
            required
            className="inputs_datos_dashboard"
            placeholder="Ingresa un correo"
            name="email"
            type="email"
          />
          <button type="submit">Añadir :V</button>
        </form>
      </div>
    </div>
  );
}

export default Modal_hoteles_form;
