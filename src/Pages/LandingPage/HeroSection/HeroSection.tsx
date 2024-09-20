"use client"

import { motion } from "framer-motion"
import Button from "@/src/Components/Buttons/Button"
import { FaArrowRight } from "react-icons/fa"

export default function HeroSection() {
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
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.section
      className="text-white py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="font-bulgatti text-yellow-400 text-6xl sm:text-7xl md:text-8xl font-normal leading-tight tracking-tight mb-2"
          variants={itemVariants}
        >
          Good Videos Get Views
        </motion.h1>
        <motion.h2
          className="text-white sm:text-5xl font-monument_extended lg:text-[76px] font-bold mb-6"
          variants={itemVariants}
        >
          Great Videos Get MONEY
        </motion.h2>
        <motion.p
          className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Expert video editing for creators and businesses.
          <br />
          Quality attention from the right audience.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Button variant="primary" className="">
            View Plans & Pricing
          </Button>
          <Button variant="primary" className="flex items-center gap-2">
            Our Projects <FaArrowRight />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}