import { useState, useEffect } from "react";
import Nav from "../../components/nav-bar";
import TravelPost from "../../components/travels/travel-post.jsx";
import TravelBoardPost from "../../components/travels/travel-board-post.jsx";
import TravelsPostModal from "../../components/travels/create-post-modal.jsx";
import Footer from "../../components/footer";
import { useDataContext } from "../../context/DataContext.jsx";
import { Link } from "react-router-dom";
import { getUser_PostRequest } from "../../api/user_post.js";
import { useAuth } from "../../context/authContext.jsx";

import "../../styles/travels.css";

function Travels() {
  const { fetchPosts, posts, userPosts } = useDataContext();

  const [participated, setParticipated] = useState();

  const { user } = useAuth();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const fechaformateada = (date) => {
    const fecha = new Date(date);
    const year = fecha.getFullYear();
    const month = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const day = fecha.getDate().toString().padStart(2, "0");

    return `${year}/${month}/${day}`;
  };

  useEffect(() => {
    fetchPosts();

  }, []);

  const fetchUserPost = async () => {
    try {
      const usuario = { user_id: user._id };

      const response = await getUser_PostRequest(usuario);

      const norm = response.data.filter(
        (invited) => invited.estado === "Activos"
      )

      setParticipated(response.data);

    } catch (error) {
      console.log("Error fetching places:", error);
    }
  };

  useEffect(() => {
    fetchUserPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="travels-body">
      <Nav />
      <div className="cont-travels">
        <section className="left-side">
          {posts ? (
            posts.map((lista) => (
              <TravelPost
                key={lista._id}
                id={lista._id}
                tituloPost={lista.titulo}
                nombreUser={lista.usuario_id.nombre}
                descripcionPost={lista.descripcion}
                lugarPost={lista.lugar_id.nombre}
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
              {userPosts ? (
                userPosts.map((lista) => (
                  <>
                    {lista.estado === 'Activo' ? (
                      <Link to={`/chat/${lista._id}`} key={lista._id}>
                        <TravelBoardPost tituloPost={lista.titulo} />
                      </Link>
                    ) : null}
                  </>
                ))

              ) : (
                <h1>Cargando...</h1>
              )}

              {participated ? (
                participated.map((participated) => (
                  <>
                    {participated.id_publicacion.estado === 'Activo' ? (
                      <Link to={`/chat/${participated.id_publicacion._id}`}>
                        <TravelBoardPost
                          tituloPost={participated.id_publicacion.titulo}
                        />
                      </Link>
                    ) : null}
                  </>
                ))
              ) : (<></>)}
            </div>
            <button onClick={handleOpenModal}>+</button>
          </div>
        </section>
      </div>

      {showModal && (
        <TravelsPostModal showModal={showModal} closeModal={handleCloseModal} />
      )}

      <Footer />
    </div>
  );
}

export default Travels;
