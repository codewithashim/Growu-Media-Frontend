"use client"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from "react"
import React from "react"
import Image from 'next/image'
import { BrandLogoOne, BrandLogoThree, BrandLogoTwo } from "@/src/Asset"
 
export default function OurResults() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    const brands = [
        { name: "ViralCuts", logo: BrandLogoOne },
        { name: "GooD INSIDE", logo: BrandLogoTwo },
        { name: "WALKER AND COMPANY", logo: BrandLogoThree },
        { name: "1440", logo: BrandLogoOne },
    ]

    return (
        <section className="text-white py-8 md:py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl font-monument_extended font-bold text-center mb-6 md:mb-12"
                >
                    Our Results
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-16"
                >
                    {[
                        { number: "2500+", text: "Clients" },
                        { number: "5000+", text: "Video Edits" },
                        { number: "25+", text: "Countries" },
                        { number: "250M+", text: "Views" },
                    ].map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="flex flex-col items-center justify-center text-center">
                            <ArrowRight className="text-yellow-400 mb-2" />
                            <div>
                                <span className="text-lg md:text-2xl font-bold font-monument">{item.number}</span>
                                <span className="block text-sm md:text-base text-gray-300 font-monument">{item.text}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                {isMounted && (
                    <Slider {...sliderSettings} className="mb-8">
                        {brands.map((brand, index) => (
                            <div key={index} className="text-center px-2">
                                <div className="h-12 md:h-16 relative">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </section>
    )
}
