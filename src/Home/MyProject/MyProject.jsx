import React from 'react';

const MyProjects=()=> {
  const projects = [
    {
      title: 'Membantu Temukan Rumah Impian',
      image: 'https://example.com/project1.jpg', // Replace with your image URL
      link: 'https://example.com/project1', // Replace with your project link
    },
    {
      title: 'Discover Wonderful Indonesia',
      image: 'https://example.com/project2.jpg', // Replace with your image URL
      link: 'https://example.com/project2', // Replace with your project link
    },
    {
      title: 'COFFEE HOUSE',
      image: 'https://example.com/project3.jpg', // Replace with your image URL
      link: 'https://example.com/project3', // Replace with your project link
    },
    // Add more projects here
  ];

  return (
    <div className="bg-gray-800 text-white p-10">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <p className="text-lg mb-6">Hello, welcome! Here I will display some web projects and web designs that I have worked on.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
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
        <a href="#" className="text-orange-500 hover:text-orange-600">Show All →</a>
      </div>
    </div>
  );
}

export default MyProjects;