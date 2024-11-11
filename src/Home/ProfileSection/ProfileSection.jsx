import React, { useState, useEffect } from 'react';
import './ProfileSection.css';
import data from '../../../public/data.json'

const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState('Experience');
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Load data from JSON file
    setExperience(data.experience);
    setEducation(data.education);
    setSkills(data.skills);
  }, []);

  return (
    <div className="profile-section">
      {/* Tabs */}
      <div className="tabs">
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
        <span
          className={`tab ${activeTab === 'Skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
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

      {/* Education Section */}
      {activeTab === 'Education' && education.map((edu, index) => (
        <div key={index} className="profile-card">
          <h4>{edu.institution} <span>({edu.duration})</span></h4>
          <h3>{edu.title}</h3>
          <p>{edu.description}</p>
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
