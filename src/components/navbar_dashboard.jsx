import '../styles/dashboard_styles/navbar_dashboard.css'
import voyage from '../assets/img/voyage.jpg'

function navbar_dashboard() {
  return (
    <div className="div_rojo_abajo">
      <nav className="navbar_container">
        <a to="/" className="logo_nav">
          <img className="img_nav" src={voyage} alt="Logo"/>
        </a>
    </nav>
    </div>
  )
}

export default navbar_dashboard;