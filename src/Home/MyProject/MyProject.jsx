import projectsData from '../../../public/projects.json';
import React, { useEffect, useState } from 'react';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All'); // Default to "All" category
    const [activeAnimation, setActiveAnimation] = useState(null); // Track the card to animate

    useEffect(() => {
        setProjects(projectsData);
        setFilteredProjects(projectsData); // Initially, show all projects
    }, []);

    const handleFilterChange = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === category));
        }
    };

    const handleCardClick = (projectId) => {
        setActiveAnimation(projectId);
        setTimeout(() => setActiveAnimation(null), 300); // Reset animation after 300ms
    };

    return (
        <div className="bg-black text-white py-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        <span className="text-orange-400">My</span> Projects
                    </h2>
                    <p className="text-base text-gray-200 mb-6">
                        Hello, welcome! Here I will display <br /> some web projects and web designs that I have worked on.
                    </p>
                </div>
                
                {/* Filter Buttons */}
                <nav className="flex flex-wrap justify-center mb-10 space-x-3">
                    {['All', 'Designing', 'Graphic', 'Websites'].map(category => (
                        <button
                            key={category}
                            className={`filter-btn px-4 py-2 rounded-lg font-semibold  ${
                                activeCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'
                            }`}
                            onClick={() => handleFilterChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </nav>

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                        className="relative transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 rounded-lg overflow-hidden"
                            onClick={() => handleCardClick(project.id)}
                        >
                            <a href={project.link}>
                                <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-lg" />
                                
                                </a>
                            {project.title && (
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-3 w-full rounded-b-lg">
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                    <p className="text-sm text-gray-400">{project.category}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
