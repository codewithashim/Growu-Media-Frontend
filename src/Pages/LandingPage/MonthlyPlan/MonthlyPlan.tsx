import Button from '@/src/Components/Buttons/Button'
import React from 'react';
import { LeftArrow, RightArrow } from '@/src/Asset';
import Image from 'next/image';

const MonthlyPlan = () => {
    const plans = [
        {
            id: 1,
            title: 'Youtube Editing Plans',
            subtitle: 'Monthly plan',
        },
        {
            id: 2,
            title: 'Podcast Plans',
            subtitle: 'Monthly plan',
        },
        {
            id: 3,
            title: 'Explainer Video Plans',
            subtitle: 'Monthly plan',
        },
        {
            id: 4,
            title: 'White Label Plan',
            subtitle: 'Monthly plan',
        },
        {
            id: 5,
            title: 'Ad creatives',
            subtitle: 'Monthly plan',
        },
    ]

    return (
        <section className='bg-white py-10  text-black'>
            <div className='container relative mx-auto px-4'>
                <h1 className="text-2xl md:text-4xl font-monument_extended font-bold text-center mb-6 md:mb-12">Top Editing Monthly plan</h1>

                {/* Left arrow */}
                <div className="absolute md:block hidden left-0 top-10 transform -translate-y-1/2 z-10">
                    <Image src={LeftArrow} alt="left arrow" width={150} height={150} />
                </div>

                {/* Right arrow */}
                <div className="absolute md:block hidden right-0 top-10 transform -translate-y-1/2 z-10">
                    <Image src={RightArrow} alt="right arrow" width={150} height={150} />
                </div>

                <div className="flex justify-center relative">
                    <div className="flex flex-wrap justify-center items-center gap-y-6">
                        {plans.map((plan) => (
                            <div key={plan.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex justify-center">
                                <Button
                                    variant='primary'
                                    className='rounded-md px-4 py-6 w-full max-w-sm'
                                >
                                    <div className="text-center">
                                        <h2 className="text-xl text-left sm:text-2xl font-bold text-white">{plan.title}</h2>
                                        <p className="text-sm text-left font-bold text-gray-300 mt-1">{plan.subtitle}</p>
                                    </div>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MonthlyPlan