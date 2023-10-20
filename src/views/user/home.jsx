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
          <CategoryCard imgC="https://i.pinimg.com/550x/24/5b/fb/245bfb0d90812ba544ed8af116afa819.jpg"/>
          </Link>
          <Link to="/categories/2">
          <CategoryCard imgC="https://www.cursosgastronomia.com.mx/wp-content/uploads/2014/01/gastronomia-en-mexico.jpg"/>
          </Link>
          <Link to="/categories/3">
          <CategoryCard imgC="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGzKNLMrurTJLAiKzAE4tGEmK0-LxLaqj3k4w0BUJrfCcacYIjS3AXJok2v3GCthdc7k&usqp=CAU"/>
          </Link>
          <Link to="/categories/4">
          <CategoryCard imgC="https://i.pinimg.com/550x/24/5b/fb/245bfb0d90812ba544ed8af116afa819.jpg"/>
          </Link>
          <Link to="/categories/5">
          <CategoryCard imgC="https://i.pinimg.com/550x/24/5b/fb/245bfb0d90812ba544ed8af116afa819.jpg"/>
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