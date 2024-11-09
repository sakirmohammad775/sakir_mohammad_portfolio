import React, { useState } from 'react';
import projects from '../../../public/projects.json'

const MyProjects = () => {
    const [showMore,setShowMore]=useState(false);
    const handleShowMore = () => {
        setShowMore(true);
    }

    return (
        <div className="bg-black text-white p-10">
            <div className='max-w-screen-xl mx-auto '>
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-center"><span className='text-orange-400'>My</span> Projects</h2>
                    <p className="text-base text-gray-200 mb-6 text-center">Hello, welcome! Here I will display <br /> some web projects and web designs that  I have worked on.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {projects.slice(0,showMore? projects.length:3).map((project, index) => (
                        <div key={index} className="bg-gray-700 p-6 rounded-lg">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.title} className="w-full rounded-md" />
                                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                                <p className="text-gray-300">Kenangan senja</p>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    {
                        projects.length >3 && !showMore && (
                            <button onClick={handleShowMore} className="text-orange-500 hover:text-orange-600">Show All →</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default MyProjects;