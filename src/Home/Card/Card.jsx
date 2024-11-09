import React from 'react';
import image1 from "../../assets/360_F_886125544_wBvif49GTjzATx3VbzzaiDSMYieGee0C.jpg"

const Card = () => {
    return (
        <>
            <div style={{ backgroundColor: 'var(--bg-grey)' }} className="hero bg-gra min-h-screen">
                <div className="hero-content grid lg:grid-cols-2">
                    <div>
                        <h1 className='text-gray-300 py-6'>WELCOME</h1>
                        <h1 className="text-5xl font-bold text-white">We Help Build On Past & Prepare For Your Future.</h1>
                        <p className="py-6 text-gray-300" >
                            As a passionate web developer, I specialize in JavaScript, Node.js, React.js, and modern front-end technologies, crafting innovative and user-friendly web applications that deliver dynamic, high-quality experiences across various platforms.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    {/*right side*/}
                    <div className="grid grid-cols gap-50 ml-20 mr-20">
                        <img src={image1}
                            className="max-w-sm max-h-80 rounded-lg mr-20" />
                        <img src={image1}
                            className="max-w-sm rounded-lg shadow-2xl ml-20" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Card;