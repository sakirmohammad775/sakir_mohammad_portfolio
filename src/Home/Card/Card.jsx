import React from 'react';

const Card = () => {
    return (
        <>
            <div style={{ backgroundColor: 'var(--bg-grey)' }} className="hero bg-gra min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1>WELCOME</h1>
                        <h1 className="text-5xl font-bold">We Help Build On Past & Prepare For Your Future.</h1>
                        <p className="py-6">
                            
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;