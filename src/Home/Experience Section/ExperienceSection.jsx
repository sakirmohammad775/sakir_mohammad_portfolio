import React from 'react';
import ProfileSection from '../ProfileSection/ProfileSection';
import profilePic from '../../assets/IMG_20220920_231109_884.jpg';

const ExperienceSection = () => {
    return (
        <div className="bg-black py-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
                About <span className="text-orange-400">Me</span>
            </h2>

            {/* Main container with responsive grid */}
            <div className="grid gap-8 lg:grid-cols-2 py-10">
                
                {/* Profile Section */}
                <div>
                    <ProfileSection />
                </div>

                {/* About Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between p-5 mt-10 bg-[#1e1e1e] text-white rounded-lg shadow-lg">
                    
                    {/* Left side text information */}
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold">
                            HI THERE! I AM <br />
                            <span className="text-orange-500 text-2xl">Sakir Mohammad</span>
                        </h2>
                        <h3 className="text-sm text-gray-400 mt-2">Subtitle color</h3>
                        <p className="text-lg text-gray-400 mt-4">
                            As a passionate web developer, I specialize in JavaScript, Node.js, React.js, and modern front-end technologies, crafting innovative and user-friendly web applications that deliver dynamic, high-quality experiences across various platforms.
                        </p>
                    </div>

                    {/* Right side image */}
                    <div className="flex flex-none w-64 h-64 lg:w-72 lg:h-72 justify-center items-center mt-8 lg:mt-0">
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
