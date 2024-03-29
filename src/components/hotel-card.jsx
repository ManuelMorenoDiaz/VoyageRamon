/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/hotelCard.css";

function HotelCard(props) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`image-containerH ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={props.imgC} alt="Imagen" className="image" />
      <div className="overlayCard">
        {hovered && <p className="titulo_C">{props.tituloC}</p>}
      </div>
    </div>
  );
}

export default HotelCard;
