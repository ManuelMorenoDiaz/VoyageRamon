import { useState, useEffect } from "react";
import Nav from "../../components/nav-bar";
import TravelPost from "../../components/travels/travel-post.jsx";
import TravelBoardPost from "../../components/travels/travel-board-post.jsx";
import TravelsPostModal from "../../components/travels/create-post-modal.jsx";
import Footer from "../../components/footer";
import Swal from "sweetalert2";

import { getPostRequest } from "../../api/travels.js";
import { getPlacesRequest } from "../../api/travels.js";

import "../../styles/travels.css";

function Travels() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [list, setList] = useState([]);
  const [lugares, setLugares] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await getPostRequest();
      setList(response.data);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error con los datos" + error,
        icon: "error",
      });
    }
  };

  const fetchLugares = async () => {
    try {
      const response = await getPlacesRequest();
      setLugares(response.data);
    } catch (error) {
      console.error("Error al obtener lugares:", error);
    }
  };

  const obtenerNombreLugar = (lugarId) => {
    const lugar = lugares.find((l) => l._id === lugarId);
    return lugar ? lugar.nombre : "Lugar no encontrado";
  };

  const fechaformateada = (date) => {
    const fecha = new Date(date);
    const year = fecha.getFullYear();
    const month = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const day = fecha.getDate().toString().padStart(2, '0');
  
      return `${year}/${month}/${day}`;
  }


  useEffect(() => {
    fetchApi();
    fetchLugares();
  }, []);

  return (
    <div className="travels-body">
      <Nav />
      <div className="cont-travels">
        <section className="left-side">
          {Array.isArray(list) ? (
            list.map((lista) => (
              <TravelPost
                key={lista._id}
                tituloPost={lista.titulo}
                nombreUser="No agregamos este campo a la base de datos jaja"
                descripcionPost={lista.descripcion}
                lugarPost={obtenerNombreLugar(lista.lugar_id)}
                fechaPost={fechaformateada(lista.fecha)}
                limitePost={lista.cantidad_personas}
                presupuestoPost={lista.presupuesto}
              />
            ))
          ) : (
            <h1>Cargando...</h1>
          )}
        </section>
        <section className="right-side">
          <div className="travels-board">
            <h1>Mis viajes</h1>
            <div className="travels-board-content">
              {Array.isArray(list) ? (
                list.map((lista) => (
                  <TravelBoardPost
                    key={lista._id}
                    tituloPost={lista.titulo}
                  />
                ))
              ) : (
                <h1>Cargando...</h1>
              )}
            </div>
            <button onClick={handleOpenModal}>+</button>
          </div>
        </section>
      </div>

      {showModal && (
        <TravelsPostModal
          showModal={showModal}
          closeModal={handleCloseModal}
          fetchApi={fetchApi}
        />
      )}

      <Footer />
    </div>
  );
}

export default Travels;
