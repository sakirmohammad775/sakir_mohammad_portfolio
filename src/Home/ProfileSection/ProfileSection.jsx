import React, { useState, useEffect } from 'react';
import data from '../../../public/data.json';
import { CiLink } from 'react-icons/ci';

const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState('Skills');
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Load data from JSON file
    setExperience(data.experience);
    setEducation(data.education);
    setSkills(data.skills);
    setCertifications(data.certifications);
  }, []);

  return (
    <div className="text-gray-200 max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Tabs */}
      <div className="tabs flex justify-center gap-4 mb-6 text-lg md:text-xl lg:text-2xl font-medium text-white">
        {['Skills', 'Certifications', 'Experience', 'Education'].map(tab => (
          <span
            key={tab}
            className={`tab cursor-pointer ${activeTab === tab ? 'text-white font-bold' : 'text-gray-400'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Experience Section */}
      {activeTab === 'Experience' && experience.map((exp, index) => (
        <div key={index} className="bg-gray-800 p-6 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-lg md:text-xl lg:text-2xl font-bold flex justify-between text-gray-100 mb-2">
            {exp.company} <span className="text-gray-400">({exp.duration})</span>
          </h4>
          <h3 className="text-md md:text-lg lg:text-xl text-gray-300">{exp.title}</h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-400">{exp.description}</p>
        </div>
      ))}

      {/* Certifications Section */}
      {activeTab === 'Certifications' && certifications.map((cert, index) => (
        <div key={index} className="bg-gray-800 p-6 mb-4 rounded-lg shadow-md hover:shadow-lg flex justify-between items-center">
          <h3 className="text-lg md:text-xl lg:text-2xl text-white">{cert.title}</h3>
          <a href={cert.description} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-white">
            <CiLink size={30} />
          </a>
        </div>
      ))}

      {/* Education Section */}
      {activeTab === 'Education' && education.map((edu, index) => (
        <div key={index} className="bg-gray-800 p-6 mb-4 rounded-lg shadow-md hover:shadow-lg">
          <h4 className="text-lg font-bold flex justify-between text-gray-100 mb-2">
            {edu.institution} <span className="text-gray-400">({edu.duration})</span>
          </h4>
          <h3 className="text-md text-gray-300">{edu.title}</h3>
        </div>
      ))}

      {/* Skills Section */}
      {activeTab === 'Skills' && (
        <div className="grid gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-1">
              <span className="text-base md:text-lg lg:text-xl text-white">{skill.name}</span>
              <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden">
                <div className="bg-orange-500 h-full flex items-center justify-end text-xs md:text-sm lg:text-base text-white pr-2" style={{ width: `${skill.level}%` }}>
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
