import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav-bar";
import Footer from "../../components/footer";
import "../../styles/places.css";
import "../../styles/home.css";
import { useDataContext } from "../../context/DataContext";
import { FaArrowRight } from "react-icons/fa";

function Places() {
  const [searchQuery, setSearchQuery] = useState("");
  const { places, fetchPlaces } = useDataContext();

  useEffect(() => {
    fetchPlaces();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlaces = places.filter(
    (place) =>
      place.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.detalles.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Nav />
      <main className="cont-places">
        <div className="cont-search">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <section className="places">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place, index) => (
              <article className="card-place" key={index}>
                <div className="cont-img">
                  <img
                    src={place.imagen}
                    alt=""
                  />
                </div>
                <div className="place-details">
                  <h2>{place.nombre}</h2>
                  <div className="dt">
                    <h5>Quinata Roo</h5>
                  </div>
                  <p>{place.detalles}</p>
                  <div className="cnt-bot">
                    <Link to={`/places/${place._id}`}>
                      <button
                        className="btn-ver"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onFocus={handleHover}
                        onBlur={handleLeave}
                        onClick={() => setShowIcon(!showIcon)}
                      >
                        {showIcon ? <FaArrowRight /> : "Ver más"}
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>No hay resultados</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Places;