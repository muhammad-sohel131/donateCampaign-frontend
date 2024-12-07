import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
    const slides = [
        { id: 1, title: "Join Our Campaigns", description: "Make a difference today!", image: "https://i.ibb.co.com/27s1ysz/ai-generated-8560473-1920.jpg" },
        { id: 2, title: "Help the Needy", description: "Every little help counts.", image: "https://i.ibb.co.com/89t21D3/seniors-1505935-1920.jpg" },
        { id: 3, title: "Support Education", description: "Empower young minds for the future.", image: "https://i.ibb.co.com/FXjrsJR/school-7052896-1920.png" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide) => (
                <div key={slide.id} className="relative h-96">
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                        <h1 className="text-3xl font-bold">{slide.title}</h1>
                        <p className="mt-2">{slide.description}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default BannerSlider;
