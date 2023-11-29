import "../styles/dashboard_styles/sidebar_dashboard.css";
import {
  FaLocationDot,
  FaHotel,
  FaUsers,
  FaNewspaper,
  FaBook,
  FaImages
} from "react-icons/fa6";
import { Link } from "react-router-dom";
function sidebar_dashboard() {
  const MenuOpciones = [
    { icon: <FaLocationDot />, text: "Lugares", link: "/admin_lugares" },
    { icon: <FaHotel />, text: "Hoteles", link: "/admin_hoteles" },
    { icon: <FaUsers />, text: "Usuarios", link: "/admin_usuarios" },
    {icon: <FaNewspaper />, text: "Publicaciones", link: "/admin_publicaciones",},
    { icon: <FaBook />, text: "Categorias", link: "/admin_categorias" },
    { icon: <FaImages />, text: "Imagenes lugares", link: "/admin_imagenes_places" },
    { icon: <FaImages />, text: "Imagenes hoteles", link: "/admin_imagenes_hoteles"}
  ];

  return (
    <div className="lat-bar">
      <div className="nav_principal">
        {MenuOpciones.map((Opciones, index) => (
          <div className="nav" key={index}>
            <Link className="link" to={Opciones.link}>
              {Opciones.icon}
              <span>
                <b className="separacion">{Opciones.text}</b>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default sidebar_dashboard;
