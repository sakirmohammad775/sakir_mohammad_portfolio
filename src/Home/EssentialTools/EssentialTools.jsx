import React, { useState, useEffect } from 'react';

const EssentialTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('tools.json')
      .then(response => response.json())
      .then(data => setTools(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Essential Tools I Use</h2>
      <p className="text-lg text-center mb-12">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tools.map(tool => (
          <div key={tool.id} className="bg-gray-800 rounded-lg p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <img src={tool.icon} alt={tool.title} className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialTools;