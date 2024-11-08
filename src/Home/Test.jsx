// Banner.js
import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative h-screen bg-gray-900">
      <Slider {...settings} className="h-full">
        {/* Slide 1 */}
        <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('path-to-image-1.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-5xl font-bold mb-4">
              Reliable Engineering Takes Many Forms
            </h1>
            <p className="text-gray-300 mb-6 max-w-xl">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo. Ultrices in ligula, semper at tempufddfel.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition">
              Read More
            </button>
          </div>
        </div>
        
        {/* Slide 2 */}
        <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('path-to-image-2.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-5xl font-bold mb-4">
              Advanced Solutions for Your Industry
            </h1>
            <p className="text-gray-300 mb-6 max-w-xl">
              From concept to completion, we provide quality services for your business.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('path-to-image-3.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-5xl font-bold mb-4">
              Innovation That Inspires
            </h1>
            <p className="text-gray-300 mb-6 max-w-xl">
              Pushing boundaries to bring new ideas to life in the industry.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition">
              Discover More
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
