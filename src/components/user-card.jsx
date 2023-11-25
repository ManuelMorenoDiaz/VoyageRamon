/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar, FaEye } from "react-icons/fa"; // Importa el ícono de estrella de react-icons
import "../styles/userCard.css";

function UserCard(props) {
  const [showButton, setShowButton] = useState(false);

  const starColor = "gold";

  return (
    <div
      className="userCard"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <img src={props.fotoPerfil} alt="" />
      <div className="calification">
        <FaStar color={starColor} />
        <FaStar color={starColor} />
        <FaStar color={starColor} />
        <FaStar color={starColor} />
        <FaStar color={starColor} />
      </div>
      <h3>{props.nombre}</h3>
      {showButton && (
        <div className="info">
          <button>
            <FaEye />
          </button>
        </div>
      )}
    </div>
  );
}

export default UserCard;
