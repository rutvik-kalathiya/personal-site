import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data }) => (
  <div className="project-item">
    <div className="project-header">
      <div className="project-title-section">
        <h1 className="project-title">{data.title}</h1>
        <div className="project-issuer">{data.issuer}
          <span>
            {data.link && (
              <span className="project-credential">
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="credential-link">
                  Show certificate
                </a>
              </span>
            )}
          </span>
        </div>
      </div>
      <div className="project-date">{data.issueDate}</div>
    </div>

    {data.description && (
      // eslint-disable-next-line react/no-danger
      <div className="project-description" dangerouslySetInnerHTML={{ __html: data.description }} />
    )}
    {data.skills && data.skills.length > 0 && (
      <div className="project-skills">
        <span className="skills-label">Skills: </span>
        <span className="skills-list">{data.skills.join(' · ')}</span>
      </div>
    )}
  </div>
);

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    issueDate: PropTypes.string.isRequired,
    credentialId: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Project;
