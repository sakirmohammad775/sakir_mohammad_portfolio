import React from 'react';

const WhatWeDo = () => {
  
  const services = [
    {
      icon: '🖌️',
      title: 'Website Design',
      description: 'Crafting visually appealing and user-friendly website designs to enhance user experience and brand identity.',
    },
    {
      icon: '💻',
      title: 'Create Dynamic Website',
      description: 'Developing interactive, feature-rich websites that respond to user actions and provide a seamless browsing experience.',
    },
    {
      icon: '🧩',
      title: 'Problem Solving',
      description: 'Implementing effective solutions to address technical challenges and improve website functionality and performance.',
    },
  ];

  return (
    <div className="what-we-do bg-black py-12 text-white text-center">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          WHAT I <span className="text-orange-500">DO</span>
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          Ready to Shape Your Tomorrow?
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              className="service-card bg-black border-white border p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105"
              key={index}
            >
              <div className="icon text-5xl text-orange-500 mb-4">{service.icon}</div>
              <div className="content">
                <h3 className="text-2xl font-semibold mb-2 hover:text-orange-500">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
