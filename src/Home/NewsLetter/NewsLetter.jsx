import React, { useState } from 'react';
import bgImage from "../../assets/kevin-wang-JwR6ajxeShU-unsplash.jpg";

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting email:', email);
    setEmail('');
  };

  return (
    <div 
      className="bg-gray-800 text-white p-6 sm:p-8 md:p-10 lg:p-12" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-screen-xl mx-auto grid gap-6 lg:grid-cols-2 items-center">
        {/* Left side */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            Stay updated with the latest news and offers.
          </p>
        </div>
        {/* Right side */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-gray-700 text-white p-3 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-b-md sm:rounded-r-md sm:rounded-b-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
