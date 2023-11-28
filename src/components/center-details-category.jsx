import React from 'react'
import "../../src/styles/center-details-category.css"

function CenterDetailsCategory(props) {
    
  return (
    <div className='details-category'>
        <div className='vid'>
            <iframe
            title="Video de YouTube"
            width="100%"
            height="100%"
            src={props.video}
            frameBorder="0"
            allowFullScreen
        ></iframe>
        </div>
        <div className="desc">
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default CenterDetailsCategory