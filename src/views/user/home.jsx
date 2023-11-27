import { useEffect } from "react";
import "../../styles/home.css";
import Nav from "../../components/nav-bar";
import CategoryCard from "../../components/category-card";
import CardInfoHome from "../../components/card-info-home";
import Footer from "../../components/footer";
import { useDataContext } from "../../context/DataContext";

import { Link } from "react-router-dom";

function Home() {
  const { categories, fetchCategories } = useDataContext();

  useEffect(() => {
    fetchCategories();
  }, [])

  const Imagenes_funciona = [
    {
      titulo: "Encuentra compañeros",
      desc: "No viajes solo, encuentra amigos de viaje",
      ruta: "/src/assets/img/Funciona_1.jpg",
    },
    {
      titulo: "Conoce lugares",
      desc: "Encuentra el lugar perfecto para viajar",
      ruta: "/src/assets/img/Funciona_3.jpg",
    },
    {
      titulo: "Sal de tu zona de confort",
      desc: "Arriesgate, diviertete",
      ruta: "/src/assets/img/Funciona_4.jpg",
    },
  ];
  return (
    <div>
      <Nav />
      <div className="cont-home">
        <h1>VOYAGE</h1>
        <h3>
          <i>{"Viajemos Juntos"}</i>
        </h3>
        <Link to="/places/">
          <button className="btn">Buscar destino</button>
        </Link>
      </div>
      <div className="cont-categories">
        <div className="top-cate">
          <h2>Viajemos por Mexico</h2>
          <h4>{"Conoce lo mejor de Mexico"}</h4>
        </div>
        <div className="bot-cat">
          {categories.slice(0, 5).map(category => (
            <Link to={`/categories/${category._id}`} key={category._id}>
              <CategoryCard
                imgC={category.imagen}
                tituloC={category.titulo}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="cont-info">
        <div className="top-info">
          <h2>¿Como funciona?</h2>
        </div>
        {Imagenes_funciona.map((img, index) => (
          <div className="bot-info" key={index}>
            <CardInfoHome
              lad={index % 2 === 0 ? "row" : "row-reverse"}
              titulo={img.titulo}
              desc={img.desc}
              imagen={img.ruta}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
