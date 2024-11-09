import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-10 ">
            <div className="container max-w-screen-xl mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 hover:text-orange-400">ABOUT</h3>
                        <p>Since 1960, has built a reputation for producing high-quality precision fabricated products for use in a variety of industries.</p>
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
                    <a href="#" className="text-orange-500 hover:text-orange-600 mr-4"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-orange-500 hover:text-orange-600 mr-4"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-orange-500 hover:text-orange-600 mr-4"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-orange-500 hover:text-orange-600"><i className="fab fa-google-plus-g"></i></a>
                </div>
                <div className="text-center mt-4">
                    © 2024 Factorship. All Rights Reserved. WordPress Theme by <span className='text-orange-400'>W3Layouts.</span> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;