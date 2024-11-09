import React from 'react';
import image1 from "../../assets/kevin-wang-JwR6ajxeShU-unsplash.jpg"

const WhatWeOffer = () => {

  return (
    <>
      <div className='bg-black ' >
        <div className='grid grid-cols-2 max-w-screen-xl mx-auto py-20' >
          {/* left side menu */}
        <div>
                        <h1 className='text-gray-300 py-6'>WELCOME</h1>
                        <h1 className="text-5xl font-bold text-white">We Help Build On Past & Prepare For Your Future.</h1>
                        <p className="py-6 text-gray-300" >
                            As a passionate web developer, I specialize in JavaScript,<br /> Node.js, React.js, and modern front-end technologies, <br />crafting  innovative and user-friendly web applications <br />that deliver dynamic, high-quality experiences <br />across various platforms.
                        </p>
                        <div className='flex gap-3'>
                        <button className="bg-orange-500 rounded-lg text-white font-bold px-8 py-3 hover:bg-white hover:text-black ">Read More</button>
                        <button className="text-orange-500 border-2 font-bold border-orange-400 rounded-xl py-3 px-10 hover:bg-orange-500 hover:text-white">Services</button>

                        </div>
                    </div>
        {/*right side*/}
        <div className="">
          <img src={image1}
            className="" />
        </div>

        </div>
      </div>

    </>

  );
}

export default WhatWeOffer;