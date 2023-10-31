
import Nav from '../../components/nav-bar'
import Footer from '../../components/footer'
import TopTitle from '../../components/top-title'
import SlideshowGallery from '../../components/slideshow-gallery'
function places() {
  return (
    <div>
      <Nav />
      <div className="cont-places">
        <TopTitle />
        <SlideshowGallery />
        <section className="cont-detalles">
          <h2>Detalles</h2>
          <p>La privilegiada ubicación de México le permite estar “bañado” por el Océano Pacífico, el Golfo de México y el Mar Caribe, lo que hace de nuestro país un destino paradisiaco para los turistas que buscan sol y playa. <br />

          La flora y fauna marina también hacen de México un imán de visitantes de todas partes del mundo. El Mar de Cortés, considerado “el acuario del mundo”; la hermosa Bahía de Acapulco, con uno de los climas más privilegiados de todo el planeta; y las playas oaxaqueñas cuyo oleaje es perfecto para la práctica del surf son solo algunos ejemplos de lo que se puede disfrutar en el Pacífico mexicano; mientras que del lado del Golfo de México encontramos la Costa Esmeralda, en Veracruz, y qué decir del azul turquesa del Caribe mexicano, con su blanca arena.</p>
        </section>
        <section className='cont-map'>

        </section>
        <section className='cont-hoteles'>

        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default places