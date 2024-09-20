"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaSmile, FaArrowRight } from 'react-icons/fa'
import Button from '@/src/Components/Buttons/Button'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'For Creators', href: '/creators' },
    { name: 'For Businesses', href: '/businesses' },
    { name: 'For Podcasts', href: '/podcasts' },
    { name: 'About Us', href: '/about' },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-[#FFFFFF] text-black container rounded-full my-[36px]">
            <div className=" mx-auto px-4 py-2  md:px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <FaSmile className="text-yellow-400 text-2xl mr-2" />
                            <span className="font-bold text-xl">GrowlMedia</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Button variant="primary" className='flex items-center gap-2'>Contact Us <FaArrowRight /></Button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <FaTimes className="block h-6 w-6" />
                            ) : (
                                <FaBars className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <Button variant="primary" className='flex items-center gap-2'>Contact Us <FaArrowRight /></Button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar