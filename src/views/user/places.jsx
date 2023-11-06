
import Nav from '../../components/nav-bar'
import Footer from '../../components/footer'
import TopTitle from '../../components/top-title'
import SlideshowGallery from '../../components/slideshow-gallery'
import '../../styles/places.css'
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
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default places