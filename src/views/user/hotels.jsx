import '../../styles/hoteles.css'
import React from 'react';
import Nav from '../../components/nav-bar'
import Footer from '../../components/footer'


function Hotels() {



  return (
    <div>
      <Nav />

      <div className="cont-hotels">
        <h1>JW Marriott Cancun Resort & Spa</h1>
        <h3>Km 14.5, Blvd. Kukulcan Lote 40-A, Zona Hotelera, 77500 Cancún, Q.R.</h3>
      </div>    

      <div className="cont-tabgallery">
        <h2>Aqui va la imagen ampliada</h2>
        
        <div class="imagenes-hotels">
          <img src="https://placehold.co/300x200" alt="Snow" onclick="myFunction(this);"></img>
        </div>
        <div class="imagenes-hotels">
          <img src="https://placehold.co/300x200" alt="Nature" onclick="myFunction(this);"></img>
        </div>
        <div class="imagenes-hotels">
          <img src="https://placehold.co/300x200" alt="Mountains" onclick="myFunction(this);"></img>
        </div>
        <div class="imagenes-hotels">
          <img src="https://placehold.co/300x200" alt="Northern Lights" onclick="myFunction(this);"></img>
        </div>
        
        {/*<div class="container">
          <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
          <img id="expandedImg" style="width:100%"></img>
        </div>*/}
      </div>

      <div className='contenido-hotels'>
        <div className='cont-des-hotels'>
          <h2>Descripción</h2>
          <p>Bienvenido al JW Marriott Cancun Resort & Spa. Un refugio frente al mar donde el lujo, el impecable servicio y la hospitalidad mexicana se combinan para complacer a los clientes más exigentes. Cada habitación le ofrece la comodidad de una lujosa residencia, enmarcada con la maravillosa vista del mar Caribe.
          </p>
        </div>
        <div className='cont-info-hotels'>
          <h2>Información del Hotel</h2>
          <p>998 848 9600</p>
          <p>Marriott@Marriott.com</p>
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Hotels