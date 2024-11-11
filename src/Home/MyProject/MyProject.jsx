
import projectsData from '../../../public/projects.json'
import React, { useEffect, useState } from 'react';


const MyProjects = () => {
    const [showMore, setShowMore] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Load data from JSON file
        setProjects(projectsData);
    }, []);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <div className="bg-black text-white p-10">
                <div className='max-w-screen-xl mx-auto '>
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center"><span className='text-orange-400'>My</span> Projects</h2>
                        <p className="text-base text-gray-200 mb-6 text-center">Hello, welcome! Here I will display <br /> some web projects and web designs that I have worked on.</p>
                    </div>
                    {/* card */}



                    <div className="app bg-gray-900 text-white p-5">
                        <nav className="flex justify-center mb-5 space-x-3">
                        <button className="filter-btn active">All</button> 
                        <button className="filter-btn">Designing</button>
                         <button className="filter-btn">Graphic</button> 
                         <button className="filter-btn">Websites</button>
                        </nav>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {projects.map(project => (
                                <div key={project.id} className="relative">
                                    <img src={project.image} alt={project.title} className="w-full h-auto" />
                                    {project.title && (
                                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 w-full">
                                            <h3 className="text-lg">{project.title}</h3>
                                            <p className="text-sm">{project.category}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="text-center mt-6">
                        {projects.length > 3 && (
                            <button onClick={handleShowMore} className="text-orange-500 hover:text-orange-600">
                                {showMore ? 'Show Less →' : 'Show More →'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProjects;
