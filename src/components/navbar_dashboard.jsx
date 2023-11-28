import "../styles/dashboard_styles/navbar_dashboard.css";
<<<<<<< Updated upstream
import voyage from "../assets/img/voyage.jpg";
import { Link } from "react-router-dom";
=======
import voyage from "../assets/img/voyage.png";

>>>>>>> Stashed changes
function navbar_dashboard() {
  return (
    <div className="div_rojo_abajo">
      <nav className="navbar_container">
        <Link to="/" className="logo_nav">
          <img className="img_nav" src={voyage} alt="Logo" />
        </Link>
      </nav>
    </div>
  );
}

export default navbar_dashboard;
