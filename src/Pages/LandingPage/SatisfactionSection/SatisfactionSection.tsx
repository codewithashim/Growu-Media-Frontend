import Button from '@/src/Components/Buttons/Button'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const SatisfactionSection = () => {
    return (
        <section className='bg-black w-full py-8 md:py-16 text-white mx-auto'>
            <div className='container relative mx-auto px-4'>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <h1 className="text-2xl text-white md:text-4xl font-monument_extended font-bold text-center mb-6">14-Day Satisfaction Guarantee</h1>
                    <div className='flex flex-col justify-center items-center gap-4 md:w-[70%]'>
                        <p className='text-center text-[24px]'>We stand firmly behind the quality of our work.</p>
                        <p className='text-center text-[24px]'>Here's our commitment to you: You have 14 days to experience our service firsthand. If you're not completely satisfied with the videos we produce, we'll refund your full investment.</p>
                        <p className='text-center text-[24px]'>Why? Because we believe in delivering value. If we haven't met your expectations, we haven't earned your business.</p>
                    </div>
                    <Button variant="primary" className='flex my-3 font-bold text-2xl items-center gap-2'>Our Projects <FaArrowRight /></Button>
                </div>
            </div>
        </section>
    )
}

export default SatisfactionSection