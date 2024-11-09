import React, { useState } from 'react';

const Newsletter=() =>{
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here, e.g., send to an API or display a success message
    console.log('Submitting email:', email);
    setEmail(''); // Clear the input field
  };

  return (
    <div className="bg-gray-800 text-white p-10">
      <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="text-lg mb-6">Stay updated with the latest news and offers.</p>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 bg-gray-700 text-white p-3 rounded-l-md"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-r-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;