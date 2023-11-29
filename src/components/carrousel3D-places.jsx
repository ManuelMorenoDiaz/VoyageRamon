import React, { useEffect } from "react";
import Swiper from 'swiper';
import "swiper/swiper-bundle.css";
import "../../src/styles/carrousel3D-places.css"; // Import the CSS file
import { Link } from "react-router-dom";

function Carrousel3DPlaces(props) {
    const slides = props.placesByC;

    useEffect(() => {
        const swiper = new Swiper('.slider.swiper-container', {
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
                            <img className="imgCar" src={slide.imagen} alt={slide.nombre} />
                        </div>
                        <div className="detailsC">
                            <h2>{slide.nombre}</h2>
                            <p>{slide.detalles}</p>
                            <Link to={`/places/${slide._id}`} >
                                <button className="btnP">Ver mas</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel3DPlaces;
