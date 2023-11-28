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
  const { category, fetchCategory } = useDataContext();

  useEffect(()=>{
    fetchCategory(idC)
  }, [])

  console.log("ooooooooooooooooooooooo");
  console.log(category);
  return (
    <div>
      <Nav />
      <div className="cont-categories">
        <TopTitle lugar={category.titulo} desc={null} imagen={category.imagen} />
        <CenterDetailsCategory video={category.video} desc={category.descripcion} />
        <Carrousel3DPlaces />
      </div>
      <Footer />
    </div>
  );
}

export default categories;
