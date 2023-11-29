/* eslint-disable react/prop-types */
import "../../styles/components_styles/travel-post-styles.css";
import Swal from "sweetalert2";
import { useAuth } from "../../context/authContext";
import { postUser_PostsRequest } from "../../api/user_post.js";

function TravelPost(props) {
  const { user } = useAuth();

  const handleFolio = async () => {
    Swal.fire({
      title: "Participar",
      text: "Deseas participar en el viaje",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonColor: "green",
      cancelButtonText: "No quiero",
      confirmButtonText: "Si quiero",
    }).then((result) => {
      const folioData = {
        id_publicacion: props.id,
        id_usuario: user._id,
      };

      if (result.isConfirmed) {
        handleSubmit(folioData);
      }
    });
  };

  const handleSubmit = (folio) => {
    console.log(folio);
    postUser_PostsRequest(folio);
  };

  return (
    <div className="travel-post-body">
      <div className="travel-options">
        <div className="travel-title">
          <h1>{props.tituloPost}</h1>
          <h4>{props.nombreUser}</h4>
        </div>
        <div className="travel-interested-button">
          <button onClick={handleFolio}>Me interesa</button>
        </div>
      </div>
      <div className="travel-inputs">
        <div className="travel-description">
          <h4>Descripcion del viaje</h4>
          <p>{props.descripcionPost}</p>
        </div>
        <div className="travel-details">
          <div className="travel-destiny">
            <div className="travel-twin">
              <h4>Lugar de destino</h4>
              <p>{props.lugarPost}</p>
            </div>
            <div className="travel-twin">
              <h4>fecha esperada</h4>
              <p>{props.fechaPost}</p>
            </div>
          </div>
          <div className="travel-budget">
            <div className="travel-twin">
              <h4>Limite de personas</h4>
              <p>{props.limitePost}</p>
            </div>

            <div className="travel-twin">
              <h4>presupuesto </h4>
              <p>{props.presupuestoPost} $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelPost;
