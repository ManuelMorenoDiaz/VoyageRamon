import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import '../../styles/components_styles/create-post-modal.css'

function TravelsPostModal({ showModal, closeModal, fetchApi }) {
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
        const response = await axios.get('http://localhost:3000/places');
        setPlaces(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de lugares:', error);
      }
    };

    fetchPlaces();

    if (showModal) {
      document.addEventListener("mousedown", ParaModal);
    } else {
      document.removeEventListener("mousedown", ParaModal);
    }
  }, [showModal, closeModal]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const lugar_id = event.target.elements.lugar_id.value;
    const titulo = event.target.elements.titulo.value;
    const descripcion = event.target.elements.descripcion.value;
    const cantidad_personas = event.target.elements.cantidad_personas.value;
    const fecha = event.target.elements.fecha.value;
    const presupuesto = event.target.elements.presupuesto.value;

    const data = {
      lugar_id,
      titulo,
      descripcion,
      cantidad_personas,
      fecha,
      presupuesto,
    };

    axios.post('http://localhost:3000/posts/', data)
      .then(() => {
        Swal.fire({
          title: "Publicacion añadida",
          icon: "success",
          confirmButtonColor: "green",
          confirmButtonText: "OK"
        });
        closeModal();
        fetchApi();
      })
      .catch(error => {
        Swal.fire({
          title: "Error",
          text: "Error:bcfbc " + error,
          confirmButtonColor: "green",
          confirmButtonText: "OK"
        });

      });
  };

  if (!showModal) return null;

  return (
    <div className='modal'>
      <div className="modal-content" ref={modalRef}>
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h2>Crear post</h2>
            <button className="btn-close " onClick={closeModal}>X</button>
          </div>

          <div className="modal-body">
            <h5 className='modal-label'>Titulo</h5>
            <textarea
              required
              maxLength="80"
              className='modal-textarea title-input'
              name='titulo'
            />

            <h5 className='modal-label'>Descripcion del viaje</h5>
            <textarea
              required
              maxLength="500"
              className='modal-textarea desc-input'
              name='descripcion'
            />

            <h5 className='modal-label'>Lugar de destino</h5>
            <select required className='modal-inputs' name='lugar_id'>
              <option value="">Selecciona un lugar</option>
              {places.map(place => (
                <option key={place._id} value={place._id}>{place.nombre}</option>
              ))}
            </select>

            <h5 className='modal-label'>Fecha propuesta</h5>
            <input required className='modal-inputs' type="date" name='fecha' />

            <div className='twin-input'>
              <div>
                <h5 className='modal-label'>Limite de personas</h5>
                <input required className='modal-inputs' type="number" name='cantidad_personas' />
              </div>
              <div>
                <h5 className='modal-label'>Presupuesto</h5>
                <input required className='modal-inputs' type="number" name='presupuesto' />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TravelsPostModal;
