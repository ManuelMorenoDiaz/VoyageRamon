/* eslint-disable react/prop-types */
// Asegúrate de importar React
import '../styles/cardInfoHome.css';

function CardInfoHome(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <div className="card-info" style={{display: 'flex', flexDirection: props.lad}}>
      <div className="cont-left">
        <h3>Titulo</h3>
        <p>Descripcion</p>
      </div>
      <div className="cont-right">
        <img src={props.imagen} />
      </div>
    </div>
  );
}

export default CardInfoHome; // Corrige la exportación