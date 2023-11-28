import Nav from "../../components/nav-bar";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import TopTitle from "../../components/top-title";
import { useDataContext } from "../../context/DataContext";
import { useEffect } from "react";
import CenterDetailsCategory from "../../components/center-details-category";
import Carrousel3DPlaces from "../../components/carrousel3D-places";
function categories() {
  const { idC }= useParams();
  const { category, fetchCategory, fetchPlaces, placesByCategory } = useDataContext();

  useEffect(()=>{
    fetchCategory(idC);
    fetchPlaces(idC);
  }, []);
  return (
    <div>
      <Nav />
      <div className="cont-categories">
        <TopTitle lugar={category.titulo} desc={null} imagen={category.imagen} />
        <CenterDetailsCategory video={category.video} desc={category.descripcion} />
      <Carrousel3DPlaces placesByC={placesByCategory}/>
      </div>
      <Footer />
    </div>
  );
}

export default categories;
