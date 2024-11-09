import React, { useRef, useState } from 'react';
import  video1 from "../assets/invideo-ai-1080 Unlock the Power of JavaScript Developme 2024-11-08 (1).mp4"

const InfoSection = () => {
  // Use a ref to control the video
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-black text-center py-12">
      {/* Top Section Info */}
      <p className="text-gray-400 uppercase tracking-wider mb-2">Our Info</p>
      <h2 className="text-white text-3xl font-bold mb-4">
        We Are Not Your Regular Design Agency
        <br />
        We Take The Time To Go Further
      </h2>
      <p className="text-gray-400 mb-8 mx-auto max-w-xl">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
      </p>

      {/* Video Section with Overlay Play Button */}
      <div className="relative max-w-3xl mx-auto">
        <video
          ref={videoRef}
          src={video1} // Add your video path here
          className="w-full rounded-lg object-cover"
          controls={false} // Remove default controls for custom play button
        />

        {/* Custom Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-300 transition duration-300">
            {isPlaying ? (
              // Pause icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 4a1 1 0 00-1 1v10a1 1 0 102 0V5a1 1 0 00-1-1zm7 0a1 1 0 00-1 1v10a1 1 0 102 0V5a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              // Play icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.2 4.55l7.25 4.42a1 1 0 010 1.66l-7.25 4.42A1 1 0 015 14.42V5.58a1 1 0 011.2-.83z" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default InfoSection;
