import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/hoteles.css";
import Nav from "../../components/nav-bar";
import Footer from "../../components/footer";
import TopTitle from "../../components/top-title";
import SlideshowGallery from "../../components/slideshow-gallery";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useDataContext } from "../../context/DataContext";

function Hotels() {
  const { idH } = useParams();
  const { fetchHotel, hotel, lal, fetchImagesHotels } = useDataContext();

  useEffect(() => {
    fetchHotel(idH);
    fetchImagesHotels(idH);
  }, []);

  return (
    <div>
      <Nav />
      <div className="contH">
      <TopTitle
        lugar={hotel.nombre}
        imagen={hotel.imagen}
        desc={hotel.direccion}
      />
      <div className="cont-tabgallery">
        <SlideshowGallery imagenes={lal} />
      </div>

      <div className="contenido-hotels">
        <div className="cont-des-hotels">
          <h2>Descripción</h2>
          <p>
            {hotel.descripcion}
          </p>
        </div>
        <div className="cont-info-hotels">
          <h2>Información del Hotel</h2>
          <div className="dat">
            <FaPhone />
            <p>{hotel.telefono}</p>
          </div>
          <div className="dat">
            <FaEnvelope />
            <p>{hotel.email}</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hotels;
