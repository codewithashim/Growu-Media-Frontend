import {
    DownloadIcon, VectorArrowOne, VectorArrowTwo, FramerIcon,
    MeetingIcons,
    NotionIcon
} from '@/src/Asset';
import Image from 'next/image';
import React from 'react'

interface StepTitleProps {
    number: number;
    title: string;
    isLeft: boolean;
}

const StepTitle: React.FC<StepTitleProps> = ({ number, title, isLeft }) => (
    <div className={`flex flex-col gap-2 sm:gap-4 ${isLeft ? '' : ''} mb-2`}>
        <h1 className="text-yellow-400 font-bulgatti font-script text-4xl sm:text-5xl md:text-6xl">Step {number}</h1>
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-monument_extended font-bold">{title}</h3>
    </div>
)

interface StepDescriptionProps {
    children: React.ReactNode;
    isLeft: boolean;
}

const StepDescription: React.FC<StepDescriptionProps> = ({ children, isLeft }) => (
    <p className={`text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl ${isLeft ? '' : ''}`}>{children}</p>
)

const HighlightedText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-yellow-400 font-semibold">{children}</span>
)

const BrandIcons = [
    {
        id: 1,
        icon: MeetingIcons,
    },
    {
        id: 2,
        icon: NotionIcon,
    },
    {
        id: 3,
        icon: FramerIcon,
    },
    {
        id: 4,
        icon: DownloadIcon,
    },


]

export default function OurProcess() {
    return (
        <section className="bg-black w-full py-8 sm:py-12 md:py-16 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-monument_extended  text-center mb-8 sm:mb-12 md:mb-16">OUR PROCESS</h2>

                <div className="relative">
                    <div className="grid grid-cols-1 relative md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <StepTitle number={1} title="The Discovery Call" isLeft={true} />
                            <StepDescription isLeft={true}>
                                The Discovery Call We dive deep into your content goals. This isn't just talk - <HighlightedText>it's strategic planning.</HighlightedText> By the end, you'll have a tailored plan, and we'll get to work aligning a dedicated <HighlightedText>crew of editors, creative directors, and thumbnail artists with your vision.</HighlightedText>
                            </StepDescription>
                        </div>
                        <div className="hidden md:flex justify-center items-center ">
                            <Image src={VectorArrowOne} width={400} height={400} alt="Our Process 1" className='absolute left-[35%] top-[5%]' />
                        </div>

                        <div className="hidden md:flex justify-center items-center">
                            <Image src={VectorArrowTwo} width={400} height={400} alt="Our Process 2" className='absolute left-[20%] top-[30%]' />
                        </div>
                        <div>
                            <StepTitle number={2} title="The Kickoff Welcome" isLeft={false} />
                            <StepDescription isLeft={false}>
                                The Kickoff Welcome to streamlined efficiency. We'll guide you through <HighlightedText>your dedicated Notion dashboard</HighlightedText>, walk you through the revision <HighlightedText>process, explain our asset transfer system</HighlightedText>, and introduce you to the <HighlightedText>communication channels</HighlightedText> we'll be using. It's all about setting you up for <HighlightedText>seamless collaboration.</HighlightedText>
                            </StepDescription>
                        </div>

                        <div>
                            <StepTitle number={3} title="Rapid Turnaround" isLeft={true} />
                            <StepDescription isLeft={true}>
                                Rapid Turnaround <HighlightedText>Within 24-48 hours</HighlightedText>, you'll have your first draft. <HighlightedText>Quality work, delivered fast. Need adjustments?</HighlightedText> Use <HighlightedText>frame.io</HighlightedText> to leave notes, and we'll swiftly implement your changes.
                            </StepDescription>
                        </div>
                        <div className="hidden md:flex justify-center items-center">
                            <Image src={VectorArrowOne} width={400} height={400} alt="Our Process 3" className='absolute left-[35%] top-[62%]' />
                        </div>

                        <div className="hidden md:flex justify-center items-center">
                            {/* <CurvedArrow isLeft={false} /> */}
                        </div>
                        <div>
                            <StepTitle number={4} title="Delivery and Beyond" isLeft={false} />
                            <StepDescription isLeft={false}>
                                Delivery and Beyond Once you're satisfied, the choice is yours. Download your <HighlightedText>final video and run</HighlightedText> with it, or let our <HighlightedText>channel management</HighlightedText> team handle the posting. Either way, <HighlightedText>you're set for success.</HighlightedText>
                            </StepDescription>
                        </div>
                    </div>
                </div>

                <div className='flex my-6 md:my-10 flex-wrap w-full justify-around items-center gap-4'>
                    {
                        BrandIcons.map((brand) => (
                            <Image src={brand.icon} key={brand.id} alt="Brand Icon" width={100} height={100} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}