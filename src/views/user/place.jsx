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
  const { place, lal, imga, fetchLal, hotels, fetchHotels } = useDataContext();

  useEffect(() => {
    fetchHotels(idP);
    fetchLal(idP);
  }, []);


  console.log("prrrrrrrrrrrrrrrrrrrrrrrrrr", idP);
  console.log(hotels);

  return (
    <div>
      <Nav />
      <div className="cont-places">
        <TopTitle lugar={place.nombre} desc={null} imagen={imga} />
        <SlideshowGallery imagenes={lal} />
        <section className="cont-detalles">
          <div className="top-detalles">
            <div className="mor"></div>
            <h2>Detalles</h2>
          </div>
          <p>{place.detalles}</p>
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
            {hotels.map((hotel) => (
              <Link to={`/hotels/${hotel._id}`} key={hotel._id}>
                <HotelCard imgC={hotel.image} tituloC={hotel.nombre} />
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
