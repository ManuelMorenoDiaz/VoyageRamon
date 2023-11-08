
import Nav from '../../components/nav-bar'
import Footer from '../../components/footer'
import TopTitle from '../../components/top-title'
import SlideshowGallery from '../../components/slideshow-gallery'
import '../../styles/places.css'
import '../../styles/home.css'
import HotelCard from '../../components/hotel-card'
import { Link } from 'react-router-dom';


function places() {

  return (
    <div>
      <Nav />
      <div className="cont-places">
        <TopTitle lugar='CANCUN' imagen='https://www.casamaya.com/wp-content/uploads/2021/05/best-beaches-cancun-.jpg' />
        <SlideshowGallery />
        <section className="cont-detalles">
          <div className="top-detalles">
            <div className='mor'></div>
            <h2>Detalles</h2>
          </div>
          <p>La privilegiada ubicación de México le permite estar “bañado” por el Océano Pacífico, el Golfo de México y el Mar Caribe, lo que hace de nuestro país un destino paradisiaco para los turistas que buscan sol y playa. <br />

            La flora y fauna marina también hacen de México un imán de visitantes de todas partes del mundo. El Mar de Cortés, considerado “el acuario del mundo”; la hermosa Bahía de Acapulco, con uno de los climas más privilegiados de todo el planeta; y las playas oaxaqueñas cuyo oleaje es perfecto para la práctica del surf son solo algunos ejemplos de lo que se puede disfrutar en el Pacífico mexicano; mientras que del lado del Golfo de México encontramos la Costa Esmeralda, en Veracruz, y qué decir del azul turquesa del Caribe mexicano, con su blanca arena.</p>
        </section>
        <section className='cont-map'>
          <div className="top-map">
            <div className='mor'></div>
            <h2>Mapa</h2>
          </div>

        </section>
        <section className='cont-hoteles'>
          <div className="top-hoteles">
            <div className='mor'></div>
            <h2>Hoteles</h2>
          </div>
          <div className="bot-cat hotelsA">
              <Link to="/categories/1">
                <HotelCard imgC="https://i.pinimg.com/550x/24/5b/fb/245bfb0d90812ba544ed8af116afa819.jpg" tituloC={"Sol y Playa"} />
              </Link>
              <Link to="/categories/2">
                <HotelCard imgC="https://www.cursosgastronomia.com.mx/wp-content/uploads/2014/01/gastronomia-en-mexico.jpg" tituloC={"Gastronomia"} />
              </Link>
              <Link to="/categories/3">
                <HotelCard imgC="https://th.bing.com/th/id/R.6f1add51f00a27b67403462219f40b52?rik=jSgUHpA5zOg7nQ&riu=http%3a%2f%2f101lugaresincreibles.com%2fwp-content%2fuploads%2f2016%2f03%2fpueblos-magicos-mexico.jpg&ehk=1wA4rmwcTZ4HW1GhYq5AKmErxKbaeWZwwqI5s87PDZw%3d&risl=&pid=ImgRaw&r=0" tituloC={"Pueblos Magicos"} />
              </Link>
              <Link to="/categories/4">
                <HotelCard imgC="https://th.bing.com/th/id/OIP.8HG6AkuYyrJv1betw0GZgAHaJ4?pid=ImgDet&rs=1" tituloC={"Eventos Turisticos"} />
              </Link>
              <Link to="/categories/5">
                <HotelCard imgC="https://th.bing.com/th/id/OIP.Xc0cYEum0DC3UqcrKBKWYwHaLG?pid=ImgDet&rs=1" tituloC={"Cultura"} />
              </Link>
            </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default places