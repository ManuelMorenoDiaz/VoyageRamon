import '../styles/nav.css'
import { Link } from 'react-router-dom';
import { FaHome, FaPlaneDeparture, FaMapMarkedAlt, FaUserFriends, FaUserCircle } from 'react-icons/fa';

function Nav() {
  return (
    <nav className="cont-nav">
      <div className="top-nav">
        <div>
          <Link to="/" className='link'><FaHome /> <p>Inicio</p></Link>
        </div>
        <div>
          <Link to="/travels" className='link'><FaPlaneDeparture /> <p>Viajes</p></Link>
        </div>
        <div>
          <Link to="/places" className='link'><FaMapMarkedAlt /> <p>Destinos</p></Link>
        </div>
        <div>
          <Link to="/people" className='link'><FaUserFriends /> <p>Personas</p></Link>
        </div>
        <div>
          <Link to="/profile" className='link'><FaUserCircle /> <p>Perfil</p></Link>
        </div>
      </div>
      <div className="bot-nav"></div>
    </nav>

  )
}

export default Nav

