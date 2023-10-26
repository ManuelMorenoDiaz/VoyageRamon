import React from 'react';
import Nav from '../../components/nav-bar';
import TravelPost from '../../components/travel-post.jsx';
import TravelBoardPost from '../../components/travel-board-post.jsx';
import '../../styles/travels.css'
import Footer from '../../components/footer'

function Travels() {
  return (
    <div className="travels-body">
      <Nav />
      <div className="cont-travels">
        <section className='left-side'>
          <TravelPost 
            tituloPost="Titulo" 
            nombreUser="Didier" 
            descripcionPost="Hola"
            lugarPost="Cancún"
            fechaPost="10/23/2023"
            limitePost="3"
            presupuestoPost="10000"
          />
          <TravelPost 
            tituloPost="Titulo" 
            nombreUser="Didier" 
            descripcionPost="Hola"
            lugarPost="Cancún"
            fechaPost="10/23/2023"
            limitePost="3"
            presupuestoPost="10000"
          />
          <TravelPost 
            tituloPost="Hola soy un titulo largo para probar la capacidad de soportar muchos caracteres sin deformar la tarjeta" 
            nombreUser="Didier"
            descripcionPost="
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Nulla finibus turpis vel imperdiet fringilla. 
            Aliquam lacinia, mauris vel consectetur ultrices, 
            neque ipsum malesuada sem, quis placerat dolor nibh vel nisl. 
            Fusce vehicula rutrum lacus at pharetra."
            lugarPost="Cancún"
            fechaPost="11/10/2023"
            limitePost="5"
            presupuestoPost="12000"
          />
        </section>
        <section className='right-side'>
          <div className='travels-board'>
            <h1>Mis viajes</h1>
            <div className='travels-board-content'>
              <TravelBoardPost tituloPost="Viaje a Cancún"/>
              <TravelBoardPost tituloPost="Viaje a Mazatlan"/>
              <TravelBoardPost tituloPost="Viaje a Nombre de Dios"/>
              <TravelBoardPost tituloPost="Viaje a Tulum"/>
              <TravelBoardPost tituloPost="Viaje a Timbuktu"/>
              <TravelBoardPost tituloPost="Viaje a Saaaaantiago ballacora"/>
              <TravelBoardPost tituloPost="Viaje a Canatlan"/>
              <TravelBoardPost tituloPost="Hola soy un titulo largo para probar la capacidad de soportar muchos caracteres sin deformar la tarjeta"/>
            </div>
            <button>+</button>
          </div>
        </section>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Travels;