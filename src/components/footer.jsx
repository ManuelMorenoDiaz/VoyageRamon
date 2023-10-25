
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import voyage from "../assets/img/voyage.jpg";
function footer() {
  return (
    <div style={{ borderBottom: '10px solid black' }}>
      <footer className="cont_footer">
        <div className="info_footer">
          <ul style={{ margin: "0px", padding :"0px" }}>
            <li className="li_footer">
              <span className="span_footer">Contacto</span>
              <span className="span_footer">Terminos y condiciones</span>
              <span className="span_footer">Preguntas frecuentes</span>
              <span className="span_footer">Informacion legal</span>
            </li>
          </ul>

          <div className="redes_footer">
            <span
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                fontSize: "17px",
                padding: "10px"
              }}
            >
              ¡Síguenos en las redes sociales!
            </span>
            <div className="logos_redes">
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
              </div>
          </div>
          <img className="img_footer" src={voyage} />
        </div>
      </footer>
    </div>
  );
}

export default footer;
