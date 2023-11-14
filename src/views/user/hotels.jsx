import '../../styles/hoteles.css'
import Nav from '../../components/nav-bar'
import Footer from '../../components/footer';
import TopTitle from '../../components/top-title'
import SlideshowGallery from '../../components/slideshow-gallery'
import { FaPhone, FaEnvelope } from 'react-icons/fa';


function Hotels() {
  return (
    <div>
      <Nav />
      <TopTitle lugar='JW Marriott Cancun Resort & Spa' imagen='https://www.casamaya.com/wp-content/uploads/2021/05/best-beaches-cancun-.jpg' desc="Km 14.5, Blvd. Kukulcan Lote 40-A, Zona Hotelera, 77500 Cancún, Q.R."/>
      <div className="cont-tabgallery">
        <SlideshowGallery />
      </div>

      <div className='contenido-hotels'>
        <div className='cont-des-hotels'>
          <h2>Descripción</h2>
          <p>Bienvenido al JW Marriott Cancun Resort & Spa. Un refugio frente al mar donde el lujo, el impecable servicio y la hospitalidad mexicana se combinan para complacer a los clientes más exigentes. Cada habitación le ofrece la comodidad de una lujosa residencia, enmarcada con la maravillosa vista del mar Caribe.
          </p>
        </div>
        <div className='cont-info-hotels'>
          <h2>Información del Hotel</h2>
          <div className='dat'>
          <FaPhone /><p>998 848 9600</p>
          </div>
          <div className='dat'>
          <FaEnvelope /><p>Marriott@Marriott.com</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Hotels