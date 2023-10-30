import '../styles/nav.css'
import { Link } from 'react-router-dom';
import { FaHome, FaPlaneDeparture, FaMapMarkedAlt, FaUserFriends, FaUserCircle } from 'react-icons/fa';
import { useState } from "react";
import voyage from '../assets/img/voyage.jpg'

function Nav() {

  const [click, setClick] = useState(false);

  const handleMenuClick = () => {
    setClick(!click);
  };

  return (
    <nav className="cont-nav">
      <div className="top-nav">
      <div>
            <Link to="/" className='link_categorias'><img src={voyage} className='Logo_home' /></Link>
          </div>
      <div onClick={handleMenuClick} className="menu_icono">
          <FaPlaneDeparture icon={click ? FaMapMarkedAlt : FaUserFriends} /> 
        </div>
        <div className={click ? "menu_nav active" : "menu-nav"}>
        
          <div className='img_logo_responsive'>
          <img src={voyage} className='papu' />
          </div>
          <div onClick={handleMenuClick} className="menu_icono">
            <FaPlaneDeparture icon={click ? FaMapMarkedAlt : FaUserFriends} />
          </div>

          <div>
            <Link to="/travels" className='link_categorias'><FaPlaneDeparture /> <p>Viajes</p></Link>
          </div>
          <div>
            <Link to="/places" className='link_categorias'><FaMapMarkedAlt /> <p>Destinos</p></Link>
          </div>
          <div>
            <Link to="/people" className='link_categorias'><FaUserFriends /> <p>Personas</p></Link>
          </div>
          <div>
            <Link to="/profile" className='link_categorias'><FaUserCircle /> <p>Perfil</p></Link>
          </div>
        </div>
        <div className="bot-nav"></div>
      </div>
    </nav>

  )
}

export default Nav

