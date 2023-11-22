import { useState, useEffect } from "react";
import "../styles/slideshowGallery.css";

function SlideshowGallery() {
  const imagenes = [
    "https://loscoches.com/wp-content/uploads/2021/04/carros-deportivos-potencia.jpg",
    "https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg",
    "https://www.elcarrocolombiano.com/wp-content/uploads/2023/06/20230609CarrosFuturoIAAA.jpg",
    "https://loscoches.com/wp-content/uploads/2021/04/carros-deportivos-potencia.jpg",
    "https://aerotrastornado.com/wp-content/uploads/2020/11/Top-de-los-mejores-coches-de-lujo.png",
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

  // Next/previous controls with wrap-around
  function plusSlides(n) {
    const newIndex = slideIndex + n;
    if (newIndex > imagenes.length) {
      setSlideIndex(1);
    } else if (newIndex < 1) {
      setSlideIndex(imagenes.length);
    } else {
      setSlideIndex(newIndex);
    }
  }

  // Thumbnail image controls
  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }

    if (n < 1) {
      setSlideIndex(imagenes.length);
    }
    if (n > imagenes.length) {
      setSlideIndex(1);
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  return (
    <div className="slider">
      <div className="container">
        {imagenes.map((imagen, index) => (
          <div key={index} className="mySlides">
            <img
              src={imagen}
              style={{ width: "100%" }}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}

        {/* Next and previous buttons */}
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>

        {/* Image text */}
        <div>
          <p id="caption"></p>
        </div>

        {/* Thumbnail images */}
        <div className="row">
          {imagenes.map((imagen, index) => (
            <div key={index} className="column">
              <img
                className="demo cursor"
                src={imagen}
                style={{ width: "100%" }}
                onClick={() => currentSlide(index + 1)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideshowGallery;
