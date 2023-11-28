import React from 'react'
import "../../src/styles/center-details-category.css"

function CenterDetailsCategory(props) {
  return (
    <div className='details-category'>
        <div className='vid'>
            
        </div>
        <div className="desc">
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default CenterDetailsCategory