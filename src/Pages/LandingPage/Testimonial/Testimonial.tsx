"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerOne } from '@/src/Asset';

const Testimonial = () => {
    const testimonials = [
        { image: BannerOne },
        { image: BannerOne },
        { image: BannerOne },
        { image: BannerOne },
        { image: BannerOne },
        { image: BannerOne },
        { image: BannerOne },
        { image: BannerOne },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2.5,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };

    return (
        <section className="py-12 container md:py-24 overflow-hidden">
            <h1 className="text-2xl text-white md:text-4xl font-monument_extended font-bold text-center mb-6 md:mb-12">Testimonial</h1>
            <div className="mx-auto px-4">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4">
                            <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                                <div className="aspect-[16/9] relative">
                                    <img
                                        src={testimonial.image.src}
                                        alt={`Testimonial ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;