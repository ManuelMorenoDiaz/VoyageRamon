import React from 'react';
import { FaStar } from 'react-icons/fa'; // Importa el ícono de estrella de react-icons
import '../styles/userCard.css';

function UserCard(props) {
    const starColor = 'gold';

  return (
    <div className='userCard'>
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
          <button><FaEye /></button>
        </div>
      )}
    </div>

  );
}

export default UserCard;
