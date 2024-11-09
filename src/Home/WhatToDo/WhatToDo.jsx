import React from 'react';
import './WhatWeDo.css'; // Import the CSS file for styling

const WhatWeDo=() =>{
  const services = [
    {
      icon: '✏️',
      title: 'Construction Manage',
      description: 'Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.'
    },
    {
      icon: '🏢',
      title: 'Architecture & Building',
      description: 'Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.'
    },
    {
      icon: '💼',
      title: 'Owner\'s Representation',
      description: 'Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.'
    }
  ];

  return (
    <div className="what-we-do ">
        <div className='max-w-screen-lg mx-auto'>
        <h2>WHAT WE DO</h2>
      <p>We Help Build On Past & Prepare For Your Future.</p>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <div className="content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
      
    </div>
  );
}

export default WhatWeDo;