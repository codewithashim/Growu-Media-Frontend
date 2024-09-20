"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const EffectiveContent = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const getSlides = (count: number) => Array.from({ length: count }, (_, index) => ({
        id: index,
        src: `https://via.placeholder.com/350x150?text=Slide+${index + 1}`,
        alt: `Slide ${index + 1}`
    }));

    const sideSliderSettings = {
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
    };

    const centerSliderSettings = {
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
    };

    return (
        <div className="container bg-black  rounded-xl mx-auto px-4 py-8 h-screen flex items-center">
            <div className='flex justify-center items-center w-full h-full'>
                <div className="flex justify-center items-center h-full w-full">
                    {/* Left Slider */}
                    <div className="h-full w-full">
                        {isMounted && (
                            <Slider {...sideSliderSettings} className="h-full w-full">
                                {getSlides(8).map(slide => (
                                    <div key={slide.id} className="p-2">
                                        <Image src={slide.src} alt={slide.alt} width={365} height={205} objectFit="cover" />
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>

                    {/* Middle Slider */}
                    <div className="h-full w-full">
                        {isMounted && (
                            <Slider {...centerSliderSettings} className="h-full w-full">
                                {getSlides(5).map(slide => (
                                    <div key={slide.id} className="p-2">
                                        <Image src={slide.src} alt={slide.alt} width={370} height={655} className='w-full h-full' objectFit="cover" />
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>

                    {/* Right Slider */}
                    <div className="h-full w-full">
                        {isMounted && (
                            <Slider {...sideSliderSettings} className="h-full w-full">
                                {getSlides(8).map(slide => (
                                    <div key={slide.id} className="p-2">
                                        <Image src={slide.src} alt={slide.alt} width={365} height={205} objectFit="cover" />
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EffectiveContent;