/* eslint-disable react/prop-types */
import "../../styles/components_styles/travel-post-styles.css";

function TravelPost({
  tituloPost,
  nombreUser,
  descripcionPost,
  lugarPost,
  fechaPost,
  limitePost,
  presupuestoPost,
}) {
  return (
    <div className="travel-post-body">
      <div className="travel-options">
        <div className="travel-title">
          <h1>{tituloPost}</h1>
          <h4>{nombreUser}</h4>
        </div>
        <div className="travel-interested-button">
          <button>Me interesa</button>
        </div>
      </div>
      <div className="travel-inputs">
        <div className="travel-description">
          <h4>Descripcion del viaje</h4>
          <p>{descripcionPost}</p>
        </div>
        <div className="travel-details">
          <div className="travel-destiny">
            <div className="travel-twin">
              <h4>Lugar de destino</h4>
              <p>{lugarPost}</p>
            </div>
            <div className="travel-twin">
              <h4>fecha esperada</h4>
              <p>{fechaPost}</p>
            </div>
          </div>
          <div className="travel-budget">
            <div className="travel-twin">
              <h4>Limite de personas</h4>
              <p>{limitePost}</p>
            </div>

            <div className="travel-twin">
              <h4>presupuesto </h4>
              <p>{presupuestoPost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelPost;
