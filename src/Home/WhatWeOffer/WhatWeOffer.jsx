import React from 'react';
import image1 from "../../assets/kevin-wang-JwR6ajxeShU-unsplash.jpg";

const WhatWeOffer = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto py-20 px-6 md:px-10 lg:px-20">
        {/* Left side content */}
        <div className="text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-gray-300 py-6 text-xl md:text-2xl">WELCOME</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Help Build On Past & Prepare For Your Future.
          </h1>
          <p className="py-6 text-gray-300 text-lg leading-relaxed">
            As a passionate web developer, I specialize in JavaScript,
            Node.js, React.js, and modern front-end technologies,
            crafting innovative and user-friendly web applications
            that deliver dynamic, high-quality experiences
            across various platforms.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start">
            <button className="bg-orange-500 rounded-lg text-white font-bold px-8 py-3 hover:bg-white hover:text-black transition">
              Read More
            </button>
            <button className="text-orange-500 border-2 font-bold border-orange-400 rounded-xl py-3 px-10 hover:bg-orange-500 hover:text-white transition">
              Services
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="hidden lg:flex justify-end">
          <img src={image1} alt="Service Overview" className="rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/4" />
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
