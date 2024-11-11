import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-10 ">
            <div className="container max-w-screen-xl mx-auto ">
                <div className="text-center gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 hover:text-orange-400">ABOUT</h3>
                        <p className='text-gray-300 '> A collaborative team player who thrives in diverse and dynamic environments.
                        A strong communicator, able to build rapport and work effectively with others.</p>
                    </div>
                    
                </div>
                <div className="flex justify-center mt-6">
                    <a  href="https://github.com/sakirmohammad775" className="p-3 rounded-lg bg-orange-400 text-white-500 hover:text-black mr-4"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/sakir-mohammad-safayet/" className="p-3 rounded-lg bg-orange-400 text-white-500 hover:text-black mr-4" ><FaLinkedin /></a>
                    <a href="https://www.facebook.com/sakirmohammad.safayat/"  className="p-3 rounded-lg bg-orange-400 text-white-500 hover:text-black mr-4"><FaFacebook /></a>
                    <a href="https://www.instagram.com/sakir_mohammad_/"  className="p-3 rounded-lg bg-orange-400 text-white-500 hover:text-black mr-4"><FaInstagram /></a>
                </div>
                <div className="text-center mt-4">
                    © 2024 CopyRight. All Rights  <span className='text-orange-400'>Reserved.</span> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;