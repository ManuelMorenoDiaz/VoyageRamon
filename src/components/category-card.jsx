import { useState } from "react";
import "../styles/categoryCard.css";

// eslint-disable-next-line react/prop-types
function CategoryCard({ imgC, tituloC }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`image-container ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imgC} alt="Imagen" className="image" />
      <div className="overlayCard">
        {hovered && <p className="titulo_C">{tituloC}</p>}
      </div>
    </div>
  );
}

export default CategoryCard;
