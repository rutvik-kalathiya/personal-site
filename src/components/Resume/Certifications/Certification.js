import React from 'react';
import PropTypes from 'prop-types';

const Certification = ({ data }) => (
  <div className="certification-item">
    <div className="certification-header">
      <div className="certification-title-section">
        <h4 className="certification-title">{data.title}</h4>
        <div className="certification-issuer">{data.issuer},
          <span>
            {data.link && (
              <span className="certification-credential">
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="credential-link">
                  Show certificate
                </a>
              </span>
            )}
          </span>
        </div>
      </div>
      <div className="certification-date">{data.issueDate}</div>
    </div>

    {data.description && (
      // eslint-disable-next-line react/no-danger
      <div className="certification-description" dangerouslySetInnerHTML={{ __html: data.description }} />
    )}
    {data.skills && data.skills.length > 0 && (
      <div className="certification-skills">
        <span className="skills-label">Skills: </span>
        <span className="skills-list">{data.skills.join(' · ')}</span>
      </div>
    )}
  </div>
);

Certification.propTypes = {
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

export default Certification;
