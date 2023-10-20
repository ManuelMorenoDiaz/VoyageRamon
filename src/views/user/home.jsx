import '../../styles/home.css'
import Nav from '../../components/nav-bar';
import CategoryCard from '../../components/category-card'
import CardInfoHome from '../../components/card-info-home'
import {Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Nav/>
      <div className="cont-home">
        <h1>VOYAGE</h1>
        <h3><i>"Viajemos Juntos"</i></h3>
        <button>Buscar destino</button>
      </div>
      <div className="cont-categories">
        <div className="top-cate">
            <h2>Viajemos por Mexico</h2>
            <h4>"Conoce lo mejor de Mexico"</h4>
        </div>
        <div className="bot-cat">
          <Link to="/categories/1">
          <CategoryCard imgC="https://i.pinimg.com/550x/24/5b/fb/245bfb0d90812ba544ed8af116afa819.jpg" tituloC={"Sol y Playa"}/>
          </Link>
          <Link to="/categories/2">
          <CategoryCard imgC="https://www.cursosgastronomia.com.mx/wp-content/uploads/2014/01/gastronomia-en-mexico.jpg" tituloC={"Gastronomia"}/>
          </Link>
          <Link to="/categories/3">
          <CategoryCard imgC="https://th.bing.com/th/id/R.6f1add51f00a27b67403462219f40b52?rik=jSgUHpA5zOg7nQ&riu=http%3a%2f%2f101lugaresincreibles.com%2fwp-content%2fuploads%2f2016%2f03%2fpueblos-magicos-mexico.jpg&ehk=1wA4rmwcTZ4HW1GhYq5AKmErxKbaeWZwwqI5s87PDZw%3d&risl=&pid=ImgRaw&r=0" tituloC={"Pueblos Magicos"}/>
          </Link>
          <Link to="/categories/4">
          <CategoryCard imgC="https://th.bing.com/th/id/OIP.8HG6AkuYyrJv1betw0GZgAHaJ4?pid=ImgDet&rs=1" tituloC={"Eventos Turisticos"}/>
          </Link>
          <Link to="/categories/5">
          <CategoryCard imgC="https://th.bing.com/th/id/OIP.Xc0cYEum0DC3UqcrKBKWYwHaLG?pid=ImgDet&rs=1" tituloC={"Cultura"}/>
          </Link>
        </div>
      </div>
      <div className="cont-info">
        <div className="top-info">
          <h2>¿Como funciona?</h2>
        </div>
        <div className="bot-info">
          <CardInfoHome lad='row'/>
          <CardInfoHome lad='row-reverse'/>
          <CardInfoHome lad='row'/>
          <CardInfoHome lad='row-reverse'/>
        </div>
      </div>
    </div>
  )
}

export default Home