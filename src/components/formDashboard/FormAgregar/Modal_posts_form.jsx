import "../../../styles/modales_dashboard.css";
import Swal from "sweetalert2";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Modal_posts_form({ show, onClose, fetchApi }) {
  const [places, setPlaces] = useState([]);
  const modalRef = useRef(null);

  const ParaModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:3000/places");
        setPlaces(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de lugares:", error);
      }
    };

    fetchPlaces();

    if (show) {
      document.addEventListener("mousedown", ParaModal);
    } else {
      document.removeEventListener("mousedown", ParaModal);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const lugar_id = event.target.elements.lugar_id.value;
    const titulo = event.target.elements.titulo.value;
    const descripcion = event.target.elements.descripcion.value;
    const cantidad_personas = event.target.elements.cantidad_personas.value;
    const fecha = event.target.elements.fecha.value;
    const presupuesto = event.target.elements.presupuesto.value;
    const estado = event.target.elements.estado.value;

    const data = {
      lugar_id,
      titulo,
      descripcion,
      cantidad_personas,
      fecha,
      presupuesto,
      estado,
    };

    axios
      .post("http://localhost:3000/posts/", data)
      .then(() => {
        Swal.fire({
          title: "Publicacion añadida",
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
          text: "Error:bcfbc " + error,
          confirmButtonColor: "green",
          confirmButtonText: "OK",
        });
      });
  };

  if (!show) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_content" ref={modalRef}>
        <form className="formulario_inputs_dashboard" onSubmit={handleSubmit}>
          <label>Lugar de la publicacion</label>
          <select required className="inputs_datos_dashboard" name="lugar_id">
            <option value="">Selecciona un lugar</option>
            {places.map((place) => (
              <option key={place._id} value={place._id}>
                {place.nombre}
              </option>
            ))}
          </select>
          <br />
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
          <label>Descripcion</label>
          <input
            required
            maxLength="500"
            placeholder="Ingresa una descripcion"
            className="inputs_datos_dashboard"
            name="descripcion"
            type="text"
          />
          <br />
          <label>Cantidad de personas</label>
          <input
            required
            placeholder="Ingresa la cantidad de personas"
            className="inputs_datos_dashboard"
            name="cantidad_personas"
            type="number"
          />
          <br />
          <label>Fecha</label>
          <input
            required
            placeholder="Coloca la fecha"
            className="inputs_datos_dashboard"
            name="fecha"
            type="datetime-local"
          />
          <br />
          <label>Presupuesto</label>
          <input
            required
            placeholder="Ingresa el presupuesto"
            className="inputs_datos_dashboard"
            name="presupuesto"
            type="number"
          />
          <br />
          <label>Estado</label>
          <select required className="inputs_datos_dashboard" name="estado">
            <option value="Activo">Activo</option>
            <option value="Finalizado">Finalizado</option>
          </select>
          <button type="submit">Añadir :V</button>
        </form>
      </div>
    </div>
  );
}

export default Modal_posts_form;
