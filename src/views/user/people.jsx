import { useEffect, useState } from "react";
import "../../styles/people.css";
import Nav from "../../components/nav-bar";
import Footer from "../../components/footer";
import { useDataContext } from "../../context/DataContext";
import { FaEye } from "react-icons/fa";
import "../../styles/userCard.css";
import Modal from 'react-modal';

function People() {
  const [searchQuery, setSearchQuery] = useState("");
  const { personas, fetchPersonas, fetchPosts, userPostsData } = useDataContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [pub, setPub] = useState([]);

  useEffect(() => {
    fetchPersonas();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setPub(userPostsData);
  }, [userPostsData]);


  const filteredUsers = personas.filter((user) =>
    user.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (userName) => {
    fetchPosts(userName._id)
      .then((data) => {
        // console.log('User posts data fetched:', data);
      })
      .catch((error) => {
        // console.error('Error fetching user posts:', error);
      });
    setSelectedUserName(userName);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Nav />
      <div className="cont-people">
        <div className="cont-search">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="users">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div key={index} className="userCard">
                <img src={user.imagen} alt="" />
                <h3>{user.nombre} {user.apellido_paterno}</h3>
                <div className="info">
                  <button onClick={() => openModal(user)}>
                    <FaEye />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay resultados</p>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo Modal"
        className='modal-people'
      >
        <div className="modal-user">
          <div className="info">
            <div className="left-info">
              <img src={selectedUserName.imagen} alt="" />
            </div>
            <div className="right-info">
              <h2>{selectedUserName.nombre}</h2>
              <div className="details">
                <div className="cont-pub">
                  <h3>{pub.length}</h3>
                  <p>Publicaciones</p>
                </div>
                <div className="cont-ami">
                  <h3>0</h3>
                  <p>Amigos</p>
                </div>
              </div>
              <div className="cont-buttons">
                <button type="submit">Seguir</button>
              </div>
            </div>
          </div>
          <div className="publications">
            {pub.length === 0 ? (
              <p style={{marginLeft:20}}>No hay publicaciones disponibles</p>
            ) : (
              pub.slice(0, 4).map((publicacion, index) => {
                const fecha = new Date(publicacion.fecha);
                const fechaFormateada = fecha.toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });
                return (
                  <div key={index} className="publication">
                    <div className="top">
                      <h3>{publicacion.titulo}</h3>
                      <p>{fechaFormateada}</p>
                    </div>
                    <div className="bot">
                      <h4>{publicacion.lugar_id.nombre}</h4>
                      <p> - </p>
                      <h4>${publicacion.presupuesto}</h4>
                      <p> - </p>
                      <h4>{publicacion.cantidad_personas}</h4>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Modal>
      <Footer />
    </div>
  );
}

export default People;
