import { React, useState, useEffect } from 'react';
import Nav from '../../components/nav-bar';
import TravelPost from '../../components/travels/travel-post.jsx';
import TravelBoardPost from '../../components/travels/travel-board-post.jsx';
import TravelsPostModal from '../../components/travels/create-post-modal.jsx';
import Footer from '../../components/footer'
import Swal from 'sweetalert2'
import axios from 'axios';
import '../../styles/travels.css'

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
      const response = await axios.get('http://localhost:3000/posts');
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
      const response = await axios.get("http://localhost:3000/places/");
      setLugares(response.data);
    } catch (error) {
      console.error("Error al obtener lugares:", error);
    }
  };

  const obtenerNombreLugar = (lugarId) => {
    const lugar = lugares.find((l) => l._id === lugarId);
    return lugar ? lugar.nombre : "Lugar no encontrado";
  };

  useEffect(() => {
    fetchApi();
    fetchLugares();
  }, []);

  return (
    <div className="travels-body">
      <Nav />
      <div className="cont-travels">
        <section className='left-side'>

          {Array.isArray(list) ? (
            list.map((lista) => (
              <TravelPost
                tituloPost={lista.titulo}
                nombreUser="No agregamos este campo a la base de datos jaja"
                descripcionPost={lista.descripcion}
                lugarPost={obtenerNombreLugar(lista.lugar_id)}
                fechaPost={lista.fecha}
                limitePost={lista.cantidad_personas}
                presupuestoPost={lista.presupuesto}
              />
            ))
          ) : (
            <h1>Cargando...</h1>
          )}

        </section>
        <section className='right-side'>
          <div className='travels-board'>
            <h1>Mis viajes</h1>
            <div className='travels-board-content'>

              {Array.isArray(list) ? (
                list.map((lista) => (
                  <TravelBoardPost tituloPost={lista.titulo} />
                ))
              ) : (
                <h1>Cargando...</h1>
              )}
            </div>
            <button onClick={handleOpenModal}>+</button>
          </div>
        </section>
      </div>

      {showModal && <TravelsPostModal showModal={showModal} closeModal={handleCloseModal} fetchApi={fetchApi} />}

      <Footer />
    </div>
  )
}

export default Travels;