import {useState} from 'react';
import '../styles/categoryCard.css'

function CategoryCard(props) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    return (
      <div
        className={`image-container ${hovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={props.imgC} alt="Imagen" className="image" />
        <div className="overlay">
          {hovered && <p>{props.tituloC}</p>}
        </div>
      </div>
    );
}

export default CategoryCard