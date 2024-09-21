"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/src/Components/Buttons/Button';
import { ProjectBannerOne } from '@/src/Asset';

const categories = ['All Projects', 'Video Explainers', 'Tech & Gaming', 'Promotionals'];


const projects = [
    { id: 1, title: 'Project 1', category: 'Video Explainers', image: ProjectBannerOne },
    { id: 2, title: 'Project 2', category: 'Tech & Gaming', image: ProjectBannerOne },
    { id: 3, title: 'Project 3', category: 'Promotionals', image: ProjectBannerOne },
    { id: 6, title: 'Project 3', category: 'Promotionals', image: ProjectBannerOne },
    { id: 4, title: 'Project 3', category: 'Video Explainers', image: ProjectBannerOne },
    { id: 5, title: 'Project 3', category: 'Tech & Gaming', image: ProjectBannerOne },

];

const OurProjects = () => {
    const [activeCategory, setActiveCategory] = useState('All Projects');

    const filteredProjects = activeCategory === 'All Projects'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="bg-black text-white py-10 px-4 my-6 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <h1 className="text-2xl md:text-4xl font-monument_extended font-bold text-center mb-6 md:mb-12">Our Projects</h1>

                {/* Filters tab */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? 'primary' : 'secondary'}
                            onClick={() => setActiveCategory(category)}
                            className="font-bold text-white"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={387}
                                height={258}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <p className="text-center text-gray-400 mt-10">No projects found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default OurProjects;