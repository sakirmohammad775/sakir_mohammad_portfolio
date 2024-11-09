import React from 'react';
import image1 from "../../assets/What_is_System_Software.avif"

const WhatWeOffer = () => {

  return (
    <>
      <div className='bg-black grid grid-cols-2'>
        {/* left side menu */}
        <div>
                        <h1 className='text-gray-300 py-6'>WELCOME</h1>
                        <h1 className="text-5xl font-bold text-white">We Help Build On Past & Prepare For Your Future.</h1>
                        <p className="py-6 text-gray-300" >
                            As a passionate web developer, I specialize in JavaScript, Node.js, React.js, and modern front-end technologies, crafting innovative and user-friendly web applications that deliver dynamic, high-quality experiences across various platforms.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
        {/*right side*/}
        <div className="">
          <img src={image1}
            className="max-w-sm max-h-80 rounded-lg mr-20" />
        </div>

      </div>

    </>

  );
}

export default WhatWeOffer;