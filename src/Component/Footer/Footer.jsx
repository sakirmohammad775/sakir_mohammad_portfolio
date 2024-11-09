import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-10 ">
            <div className="container max-w-screen-xl mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 hover:text-orange-400">ABOUT</h3>
                        <p className='text-gray-300 '> A collaborative team player who thrives in diverse and dynamic environments.
                        A strong communicator, able to build rapport and work effectively with others.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4  hover:text-orange-400">SERVICES</h3>
                        {/* Add your service links here */}
                        <ul>
                            <li><a href="#">Service 1</a></li>
                            <li><a href="#">Service 2</a></li>
                            <li><a href="#">Service 3</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4  hover:text-orange-400">OUR LINKS</h3>
                        {/* Add your link items here */}
                        <ul>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4  hover:text-orange-400">RECENT POSTS</h3>
                        {/* Add your recent posts here */}
                        <ul>
                            <li><a href="#">Post 1</a></li>
                            <li><a href="#">Post 2</a></li>
                            <li><a href="#">Post 3</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <a  href="https://github.com/sakirmohammad775" className="p-3 rounded-lg bg-orange-400 text-white-500 hover:text-black mr-4"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/sakir-mohammad-safayet/" className="p-3 rounded-lg bg-orange-400 text-white-500 hover:text-black mr-4" ><FaLinkedin /></a>
                    <a href="https://www.facebook.com/sakirmohammad.safayat/"  className="p-3 rounded-lg bg-orange-400 text-white-500 hover:text-black mr-4"><FaFacebook /></a>
                    <a href="https://www.instagram.com/sakir_mohammad_/"  className="p-3 rounded-lg bg-orange-400 text-white-500 hover:text-black mr-4"><FaInstagram /></a>
                </div>
                <div className="text-center mt-4">
                    © 2024 Factorship. All Rights Reserved. WordPress Theme by <span className='text-orange-400'>W3Layouts.</span> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;