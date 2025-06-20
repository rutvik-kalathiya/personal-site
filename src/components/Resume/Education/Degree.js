import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <div className="degree-item">
    <div className="degree-header">
      <div className="degree-title-section">
        <h1 className="degree-title">{data.degree}</h1>
        <div className="degree-school">
          <a href={data.link} target="_blank" rel="noopener noreferrer">{data.school}</a>
        </div>
      </div>
      <div className="degree-date">{data.year}</div>
    </div>

    <div className="degree-details">
      <span className="grade-label">GRADE: </span>
      <span className="grade-value">{data.grade}</span>
    </div>
  </div>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    grade: PropTypes.string.isRequired,
  }).isRequired,
};

export default Degree;
