import React from 'react'
import { Plus, ArrowUp } from 'lucide-react'
import Button from '@/src/Components/Buttons/Button'
import { CircleBanner } from '@/src/Asset'
import Image from 'next/image'

const faqQuestions = [
    "What sort of podcasts do you work with?",
    "What sort of podcasts do you work with?",
    "What sort of podcasts do you work with?",
    "What sort of podcasts do you work with?",
    "What sort of podcasts do you work with?",
    "What sort of podcasts do you work with?",
    "What sort of podcasts do you work with?",
    "What sort of podcasts do you work with?",
    "What sort of podcasts do you work with?",


]

const Faq = () => {
    return (
        <section className=" bg-black text-white">
            <div className='container mx-auto px-4 py-16'>
                <h2 className="text-5xl font-bold text-center mb-12">Faq's</h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                    {faqQuestions.map((question, index) => (
                        <div key={index} className="bg-white text-black rounded-lg p-4 flex justify-between items-center">
                            <p className="font-semibold">{question}</p>
                            <div>
                                <Plus className="h-4 w-4 text-black" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <Button variant="primary" >
                        See More Questions  →
                    </Button>
                </div>
                <div className="bg-white text-black rounded-lg p-6 flex justify-between items-center">
                    <h1 className="text-[1.5rem] font-bold">Have a question about pricing?</h1>
                    <div className="space-x-4 flex ">
                        <Button variant="primary">Book a Call</Button>
                        <button className='border-2 rounded-full px-8  font-semibold'>Email us</button>
                    </div>
                </div>


                <div className="flex justify-center mt-16">
                    <Image src={CircleBanner}
                        alt="circle-banner"
                        width={336}
                        height={336}

                    />
                </div>
            </div>
        </section>
    )
}

export default Faq