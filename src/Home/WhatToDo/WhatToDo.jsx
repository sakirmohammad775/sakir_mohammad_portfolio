
import './WhatWeDo.css'; // Import the CSS file for styling

const WhatWeDo=() =>{
  
  const services = [
    {
      icon: '🖌️', // Represents design and creativity
      title: 'Website Design',
      description: 'Crafting visually appealing and user-friendly website designs to enhance user experience and brand identity.'
    },
    {
      icon: '💻', // Represents technology and web development
      title: 'Create Dynamic Website',
      description: 'Developing interactive, feature-rich websites that respond to user actions and provide a seamless browsing experience.'
    },
    {
      icon: '🧩', // Represents problem-solving and puzzle-solving
      title: 'Problem Solving',
      description: 'Implementing effective solutions to address technical challenges and improve website functionality and performance.'
    }
    
  ];

  return (
    <div className="what-we-do ">
        <div className='max-w-screen-lg mx-auto'>
        <h2>WHAT I <span className='text-orange-500'>DO</span></h2>
      <p>Ready to Shape Your Tomorrow?</p>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <div className="content">
              <h3 className='font-bold hover:text-orange-500 '>{service.title}</h3>
              <p className='text-gray-300'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
      
    </div>
  );
}

export default WhatWeDo;