import { useEffect, useState } from "react";
import "../../styles/people.css";
import Nav from "../../components/nav-bar";
import Footer from "../../components/footer";
import { useDataContext } from "../../context/DataContext";
import { FaStar, FaEye } from "react-icons/fa";
import "../../styles/userCard.css";
import Modal from 'react-modal';

function People() {
  const [searchQuery, setSearchQuery] = useState("");
  const { personas, fetchPersonas } = useDataContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState(""); // State to hold the selected user name

  const starColor = "gold";

  useEffect(() => {
    fetchPersonas();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = personas.filter((user) =>
    user.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (userName) => {
    console.log("---------------");
    console.log(userName);
    setSelectedUserName(userName.nombre); // Set the selected user name
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
                <div className="calification">
                  <FaStar color={starColor} />
                  <FaStar color={starColor} />
                  <FaStar color={starColor} />
                  <FaStar color={starColor} />
                  <FaStar color={starColor} />
                </div>
                <h3>{user.nombre}</h3>
                <div className="info">
                  {/* Pass the user's name to the openModal function */}
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
            <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="" />
            <div className="calification">
                  <FaStar color={starColor} />
                  <FaStar color={starColor} />
                  <FaStar color={starColor} />
                  <FaStar color={starColor} />
                  <FaStar color={starColor} />
                </div>
            </div>
            <div className="right-info">
              <h2>{selectedUserName}</h2>
              <div className="details">
              <div className="cont-pub">
                <h3>7</h3>
                <p>Publicaciones</p>
              </div>
              <div className="cont-ami">
                <h3>0</h3>
                <p>Amigos</p>
              </div>
              </div>
              <div className="cont-buttons">
                <button type="submit">Seguir</button>
                <button type="submit">Mensaje</button>
              </div>
            </div>
          </div>
          <div className="publications">
            <div className="publication">
              <div className="top">
                <h3>Titulo</h3>
                <p>00/00/0000</p>
              </div>
              <div className="bot">
                <h4>Lugar</h4>
                <p>-</p>
                <h4>$1.790</h4>
                <p>-</p>
                <h4>10</h4>
              </div>
            </div>
            <div className="publication">
              <div className="top">
                <h3>Titulo</h3>
                <p>00/00/0000</p>
              </div>
              <div className="bot">
                <h4>Lugar</h4>
                <p>-</p>
                <h4>$1.790</h4>
                <p>-</p>
                <h4>10</h4>
              </div>
            </div>
            <div className="publication">
              <div className="top">
                <h3>Titulo</h3>
                <p>00/00/0000</p>
              </div>
              <div className="bot">
                <h4>Lugar</h4>
                <p>-</p>
                <h4>$1.790</h4>
                <p>-</p>
                <h4>10</h4>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Footer />
    </div>
  );
}

export default People;
