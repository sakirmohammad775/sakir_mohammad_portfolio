import React, { useState, useEffect } from 'react';
import './ProfileSection.css';
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
    <div className="profile-section px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14 sm:mr-10">
      {/* Tabs */}
      <div className="tabs flex justify-center space-x-4 mb-6 text-lg md:text-xl lg:text-2xl font-medium text-white">
        <span
          className={`tab cursor-pointer ${activeTab === 'Skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
        </span>

        <span
          className={`tab cursor-pointer ${activeTab === 'Certifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('Certifications')}
        >
          Certifications
        </span>

        <span
          className={`tab cursor-pointer ${activeTab === 'Experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('Experience')}
        >
          Experience
        </span>

        <span
          className={`tab cursor-pointer ${activeTab === 'Education' ? 'active' : ''}`}
          onClick={() => setActiveTab('Education')}
        >
          Education
        </span>
      </div>

      {/* Experience Section */}
      {activeTab === 'Experience' && experience.map((exp, index) => (
        <div key={index} className="profile-card mb-4 p-4 rounded-lg shadow-lg bg-[#1e1e1e] text-white">
          <h4 className="text-xl md:text-2xl lg:text-3xl">{exp.company} <span>({exp.duration})</span></h4>
          <h3 className="text-lg md:text-xl lg:text-2xl text-gray-300">{exp.title}</h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-400">{exp.description}</p>
        </div>
      ))}

      {/* Certifications Section */}
      {activeTab === 'Certifications' && certifications.map((cert, index) => (
        <div key={index} className="profile-card mb-4 p-4 rounded-lg shadow-lg bg-[#1e1e1e] text-white flex items-center justify-between">
          <h3 className="text-xl md:text-2xl lg:text-3xl">{cert.title}</h3>
          <a 
            href={cert.description} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-orange-500 hover:text-white ml-2"
          >
            <CiLink size={30} />
          </a>
        </div>
      ))}

      {/* Education Section */}
      {activeTab === 'Education' && education.map((edu, index) => (
        <div key={index} className="profile-card mb-4 p-4 rounded-lg shadow-lg bg-[#1e1e1e] text-white">
          <h4 className="text-xl md:text-2xl lg:text-3xl">{edu.institution} <span>({edu.duration})</span></h4>
          <h3 className="text-lg md:text-xl lg:text-2xl text-gray-300">{edu.title}</h3>
        </div>
      ))}

      {/* Skills Section */}
      {activeTab === 'Skills' && (
        <div className="skills-list grid gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name text-base md:text-lg lg:text-xl text-white">{skill.name}</span>
              <div className="progress-bar bg-gray-700 w-full h-4 rounded-lg mt-1 overflow-hidden">
                <div
                  className="progress bg-orange-500 h-full"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="progress-level text-xs md:text-sm lg:text-base text-white px-2">
                    {skill.level}%
                  </span>
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
