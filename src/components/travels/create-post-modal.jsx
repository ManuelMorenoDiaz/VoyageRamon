import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";

import "../../styles/components_styles/create-post-modal.css";
import { postPostsRequest, getPlacesRequest } from "../../api/travels";
import { useAuth } from "../../context/authContext";
import { useDataContext } from "../../context/DataContext";

// eslint-disable-next-line react/prop-types
function TravelsPostModal({ showModal, closeModal }) {
  const {user} = useAuth();
  const {fetchPosts} = useDataContext();
  const [places, setPlaces] = useState([]);
  const modalRef = useRef(null);

  const ParaModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await getPlacesRequest();
        setPlaces(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de lugares:", error);
      }
    };

    fetchPlaces();

    if (showModal) {
      document.addEventListener("mousedown", ParaModal);
    } else {
      document.removeEventListener("mousedown", ParaModal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, closeModal]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const lugar_id = event.target.elements.lugar_id.value;
    const titulo = event.target.elements.titulo.value;
    const descripcion = event.target.elements.descripcion.value;
    const cantidad_personas = event.target.elements.cantidad_personas.value;
    const fecha = event.target.elements.fecha.value;
    const presupuesto = event.target.elements.presupuesto.value;

    const data = {
      lugar_id,
      usuario_id: user._id,
      titulo,
      descripcion,
      cantidad_personas,
      fecha,
      presupuesto,
    };

    postPostsRequest(data)
    .then(() => {
        Swal.fire({
          title: "Publicacion añadida",
          icon: "success",
          confirmButtonColor: "green",
          confirmButtonText: "OK",
        });
        fetchPosts();
        closeModal();
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

  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h2>Crear post</h2>
            <button className="btn-close " onClick={closeModal}>
              X
            </button>
          </div>

          <div className="modal-body">
            <h5 className="modal-label">Titulo</h5>
            <textarea
              required
              maxLength="80"
              className="modal-textarea title-input"
              name="titulo"
            />

            <h5 className="modal-label">Descripcion del viaje</h5>
            <textarea
              required
              maxLength="500"
              className="modal-textarea desc-input"
              name="descripcion"
            />

            <h5 className="modal-label">Lugar de destino</h5>
            <select required className="modal-inputs" name="lugar_id">
              <option value="">Selecciona un lugar</option>
              {places.map((place) => (
                <option key={place._id} value={place._id}>
                  {place.nombre}
                </option>
              ))}
            </select>

            <h5 className="modal-label">Fecha propuesta</h5>
            <input required className="modal-inputs" type="date" name="fecha" />

            <div className="twin-input">
              <div>
                <h5 className="modal-label">Limite de personas</h5>
                <input
                  required
                  className="modal-inputs"
                  type="number"
                  name="cantidad_personas"
                  min="0"
                  //max="15"
                />
              </div>
              <div>
                <h5 className="modal-label">Presupuesto</h5>
                <input
                  required
                  className="modal-inputs"
                  type="number"
                  name="presupuesto"
                  min="0"
                  //max="99999"
                />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn-send" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TravelsPostModal;
