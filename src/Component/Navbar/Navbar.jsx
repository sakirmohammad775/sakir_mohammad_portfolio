import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiHome, FiUser, FiFileText, FiBriefcase, FiLayers, FiMail } from 'react-icons/fi';
import bgImage from "../../assets/20210925_120006.jpg";
import { Link as ScrollLink } from 'react-scroll';
import { SiCodeforces } from 'react-icons/si';

const Navbar = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 bg-black text-white p-4 flex-shrink-0">
                <div className="flex flex-col items-center mt-6">
                    <img
                        src={bgImage}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-gray-700 mb-2 object-cover"
                    />

                    <h2 className="text-lg font-bold">Sakir Mohammad</h2>
                    <p className="text-sm text-gray-400">Web Developer</p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center mt-4 space-x-4">
                    <a href="https://github.com/sakirmohammad775" className="text-gray-400 hover:text-white"><FaGithub size={20} /></a>
                    <a href="https://www.linkedin.com/in/sakir-mohammad-safayet/" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
                    <a href="https://www.facebook.com/sakirmohammad.safayat/" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
                    <a href="https://www.instagram.com/sakir_mohammad_/" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
                    <a href="https://codeforces.com/profile/sakirmohammad775" className="text-gray-400 hover:text-white"><SiCodeforces size={20} /></a>
                </div>

                {/* Navigation Links */}
                <nav className="mt-10 space-y-2 text-center lg:text-left">
                    <ScrollLink to="home" smooth={true} duration={1000} className="flex items-center justify-center lg:justify-start p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FiHome className="mr-3" /> Home
                    </ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={1000} className="flex items-center justify-center lg:justify-start p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FiUser className="mr-3" /> About
                    </ScrollLink>

                    {/* Download link */}
                    <div className="flex items-center justify-center lg:justify-start p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FiFileText className="mr-3" />
                        <a
                            href="https://drive.google.com/file/d/1NTcAHPgYZ5UJt6I20gI3ccgPtjZQOceO/view?usp=sharing"
                            download
                            className="text-white hover:text-gray-300"
                        >
                            Resume
                        </a>
                    </div>

                    <ScrollLink to="myProject" smooth={true} duration={1000} className="flex items-center justify-center lg:justify-start p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FiBriefcase className="mr-3" /> My Project
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={1000} className="flex items-center justify-center lg:justify-start p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FiLayers className="mr-3" /> Services
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={1000} className="flex items-center justify-center lg:justify-start p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FiMail className="mr-3" /> Contact
                    </ScrollLink>
                </nav>
            </aside>

            {/* Main Section */}
            <main
                className="flex-1 flex flex-col bg-cover bg-center p-4 sm:p-6 md:p-8 lg:p-12 relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-center lg:text-left text-white my-auto p-4 sm:my-36 md:my-48">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Sakir Mohammad</h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Web Developer</p>
                </div>
            </main>
        </div>
    );
};

export default Navbar;
