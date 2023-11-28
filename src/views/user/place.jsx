import { useEffect } from "react";
import Nav from "../../components/nav-bar";
import Footer from "../../components/footer";
import TopTitle from "../../components/top-title";
import SlideshowGallery from "../../components/slideshow-gallery";
import "../../styles/place.css";
import "../../styles/home.css";
import HotelCard from "../../components/hotel-card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
function Place() {
  const { idP } = useParams();
  const { placeL, lal, imga, fetchLal, hotels, fetchHotels, fetchPlace } = useDataContext();

  useEffect(() => {
    fetchHotels(idP);
    fetchLal(idP);
    fetchPlace(idP);
  }, [idP]);


  return (
    <div>
      <Nav />
      <div className="cont-places">
        <TopTitle lugar={placeL.nombre} desc={null} imagen={placeL.imagen} />
        <SlideshowGallery imagenes={lal} />
        <section className="cont-detalles">
          <div className="top-detalles">
            <div className="mor"></div>
            <h2>Detalles</h2>
          </div>
          <p>{placeL.detalles}</p>
        </section>
        <section className="cont-map">
          <div className="top-map">
            <div className="mor"></div>
            <h2>Mapa</h2>
          </div>
        </section>
        <section className="cont-hoteles">
          <div className="top-hoteles">
            <div className="mor"></div>
            <h2>Hoteles</h2>
          </div>
          <div className="bot-cat hotelsA">
            {hotels.slice(0, 4).map((hotel) => (
              <Link to={`/hotels/${hotel._id}`} key={hotel._id}>
                <HotelCard imgC={hotel.imagen} tituloC={hotel.nombre} />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Place;
