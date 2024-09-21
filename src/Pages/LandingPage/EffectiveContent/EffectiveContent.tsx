import React from 'react'
import Image from 'next/image'
import { BannerOne, BannerThree, BannerTwo } from '@/src/Asset'


const EffectiveContent = () => {
    return (
        <div className="container mx-auto my-6 md:my-8">
            <div className='mb-6'>
                <h1 className="text-white text-[2rem] text-center font-bold">Effective content. Guaranteed results.</h1>
            </div>
            <div className='bg-black  rounded-lg px-6 py-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-4">
                        <div className="relative h-[150px] sm:h-[200px] lg:h-[150px] w-full rounded-lg overflow-hidden">
                            <Image src={BannerOne} alt="Banner 1" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                            <Image src={BannerOne} alt="Banner 2" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                            <Image src={BannerOne} alt="Banner 3" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative h-[150px] sm:h-[200px] lg:h-[150px] w-full rounded-lg overflow-hidden">
                            <Image src={BannerOne} alt="Banner 4" layout="fill" objectFit="cover" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative h-[150px] sm:h-[200px] lg:h-[150px] w-full rounded-lg overflow-hidden">
                            <Image src={BannerTwo} alt="Banner 5" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative h-[500px]  w-full rounded-lg overflow-hidden">
                            <Image src={BannerThree} alt="Banner 6" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative h-[150px] sm:h-[200px] lg:h-[150px] w-full rounded-lg overflow-hidden">
                            <Image src={BannerTwo} alt="Banner 7" layout="fill" objectFit="cover" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative h-[150px] sm:h-[200px] lg:h-[150px] w-full rounded-lg overflow-hidden">
                            <Image src={BannerTwo} alt="Banner 8" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                            <Image src={BannerTwo} alt="Banner 9" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                            <Image src={BannerTwo} alt="Banner 10" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative h-[150px] sm:h-[200px] lg:h-[150px] w-full rounded-lg overflow-hidden">
                            <Image src={BannerTwo} alt="Banner 11" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EffectiveContent
