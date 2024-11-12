import React from 'react';
import ProfileSection from '../ProfileSection/ProfileSection';
import profilePic from '../../assets/IMG_20220920_231109_884.jpg';

const ExperienceSection = () => {
    return (
        <div className="bg-black py-10 max-w-screen-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                About <span className="text-orange-400">Me</span>
            </h2>

            {/* Main container with responsive grid */}
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 py-8 px-4 md:px-8 lg:px-10">
                
                {/* Profile Section */}
                <div className="flex justify-center">
                    <ProfileSection />
                </div>

                {/* About Section */}
                <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between p-5 mt-10 bg-[#1e1e1e] text-white rounded-lg shadow-lg">
                    
                    {/* Left side text information */}
                    <div className="flex-1 px-2">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                            HI THERE! I AM <br />
                            <span className="text-orange-500 text-2xl md:text-3xl lg:text-4xl">Sakir Mohammad</span>
                        </h2>
                        <h3 className="text-sm md:text-md text-gray-400 mt-2">Web Developer</h3>
                        <p className="text-md md:text-lg text-gray-400 mt-4">
                            As a passionate web developer, I specialize in 
                            JavaScript, Node.js, React.js, and modern
                            front-end technologies, crafting innovative and user-friendly web applications that deliver dynamic, high-quality experiences across various platforms.
                        </p>
                    </div>

                    {/* Right side image */}
                    <div className="flex-none w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 justify-center items-center mt-8 lg:mt-0">
                        <img 
                            src={profilePic} 
                            alt="Sakir" 
                            className="w-full h-full rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
