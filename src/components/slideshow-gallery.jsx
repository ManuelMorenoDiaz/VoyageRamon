import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slideshowGallery.css";

function SlideshowGallery(props) {
  const lal = props.imagenes;
  const p = [];

  if (Array.isArray(lal) && lal.length > 0) {
    lal.forEach((item) => {
      if (
        item.id_imagen.imagen_link &&
        item.id_imagen.imagen_link !== undefined &&
        p.length < 4
      ) {
        p.push(item.id_imagen.imagen_link);
      }
    });
  } else {
    console.log("lal no es un array o está vacío");
  }

  const imagenes = p;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div key={index}>
            <img src={imagen} alt={`imagen-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlideshowGallery;
