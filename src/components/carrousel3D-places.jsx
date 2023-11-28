import { useState, useRef, useEffect } from "react";
import Swiper from 'swiper';
import "swiper/swiper-bundle.css";
import "../../src/styles/carrousel3D-places.css"; // Import the CSS file

function Carrousel3DPlaces() {
    const [slides, setSlides] = useState([
        {
            image:
                "https://img.freepik.com/fotos-premium/estrellas-cielo-nocturno-sobre-lago-montana-ilustracion-fondo-natural-hermosa-montana-lago-galaxia-noche-estrellada_372999-8737.jpg",
            title: "Imagen 1",
        },
        {
            image:
                "https://i.pinimg.com/originals/34/1b/8f/341b8faf772adb974fe7c309ba9758a5.png",
            title: "Imagen 2",
        },
        {
            image:
                "https://www.tuexperto.com/wp-content/uploads/2022/01/fondos-de-pantalla-para-pc-de-naturaleza-1-1200x675.jpg",
            title: "Imagen 3",
        },
    ]);

    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 5000,
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        });

        
    }, []);

    return (
        <div className="slider swiper-container carrousel3D">
            <div className="swiper-wrapper">
                {slides.map((slide, index) => (
                    <div key={index} className="swiper-slide carrousel">
                        <div className="image">
                            <img src={slide.image} alt={slide.title} />
                        </div>
                        <div className="detailsC">
                            <h2>{slide.title}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia porro velit voluptas. Corrupti quaerat quis, non voluptatibus minima deserunt. Tempore cupiditate nostrum recusandae omnis harum temporibus doloribus similique obcaecati dolores!</p>
                            <button>Ver mas</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel3DPlaces;
