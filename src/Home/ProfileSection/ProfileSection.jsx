import React, { useState, useEffect } from 'react';
import './ProfileSection.css';
import data from '../../../public/data.json'
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
    <div className="profile-section">
      {/* Tabs */}
      <div className="tabs">
        <span
          className={`tab ${activeTab === 'Skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
        </span>

        <span
          className={ ` tab ${activeTab === 'Certifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('Certifications')}
        >Certifications</span>

        <span
          className={`tab ${activeTab === 'Experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('Experience')}
        >
          Experience
        </span>

        <span
          className={`tab ${activeTab === 'Education' ? 'active' : ''}`}
          onClick={() => setActiveTab('Education')}
        >
          Education
        </span>

      </div>

      {/* Experience Section */}
      {activeTab === 'Experience' && experience.map((exp, index) => (
        <div key={index} className="profile-card">
          <h4>{exp.company} <span>({exp.duration})</span></h4>
          <h3>{exp.title}</h3>
          <p>{exp.description}</p>
        </div>
      ))}
      {/* Certifications Section */}
      {activeTab === 'Certifications' && certifications.map((cert, index) => (
        <div key={index} className="profile-card">
          <div className='flex justify-between'>
            <h3>{cert.title}</h3>
           {/* Clickable CiLink Icon */}
          <a 
            href={cert.description} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-orange-500 hover:text-white ml-2"
          >
            <CiLink size={30} />
          </a>
          </div>
        </div>
      ))}

      {/* Education Section */}
      {activeTab === 'Education' && education.map((edu, index) => (
        <div key={index} className="profile-card">
          <h4 className='text-4xl'>{edu.institution} <span>({edu.duration})</span></h4>
          <h3 className='font-thin'>{edu.title}</h3>
        </div>
      ))}
      {/* Skills Section */}
      {activeTab === 'Skills' && (
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="progress-level">{skill.level}%</span>
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
