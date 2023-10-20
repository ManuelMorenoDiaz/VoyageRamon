import React from 'react'
import '../styles/cardInfoHome.css'

function CardInfoHome(props) {
  return (
    <div className="card-info" style={{display:'flex', flexDirection:`${props.lad}`}}>
        <div className="cont-left">
            <h3>Titulo</h3>
            <p>Descripcion</p>
        </div>
        <div className="cont-right">
            <img src="https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg" alt="" />
        </div>
    </div>
  )
}

export default CardInfoHome