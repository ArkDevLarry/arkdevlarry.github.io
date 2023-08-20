import { React, Component } from 'react'
import { iQuotes } from '../constants';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 650,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            {iQuotes.map((iq, index) => (
                <div className="group" key={index}>
                    <p className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-gray-400">
                        "{iq.quote}"
                    </p>
                    <p className="w-full mx-auto text-center leading-relaxed text-gray-600">- {iq.author} -</p>
                </div>
            ))}
        </Slider>
    );
}


export default Carousel