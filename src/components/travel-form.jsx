import React from 'react'
import '../styles/components_styles/travel-post-styles.css';

function TravelPost(props) {
    return (
        <div className='travel-post-body'>
            <div className='travel-options'>
                <div className='travel-title'>
                    <h1>{props.tituloPost}</h1>
                    <h4>{props.nombreUser}</h4>
                </div>
                <div className='travel-interested-button'>
                    <button>Me interesa</button>
                </div>
            </div>
            <div className='travel-inputs'>
                <div className='travel-description'>
                    <h4>Descripcion del viaje</h4>
                    <textarea></textarea>
                    <p></p>
                </div>
                <div className='travel-details'>
                    <div className='travel-destiny'>
                        <div className='travel-twin'>
                            <h4>Lugar de destino</h4>
                            <input type="text" />               
                        </div>
                        <div className='travel-twin'>
                            <h4>fecha esperada</h4>
                            <input type="text" />      
                        </div>

                    </div>
                    <div className='travel-budget'>
                        <div className='travel-twin' >
                            <h4>Limite de personas</h4>
                            <input type="text" />
                        </div>

                        <div className='travel-twin'>
                            <h4>presupuesto propuesto</h4>
                            <input type="text" />   
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default TravelPost;