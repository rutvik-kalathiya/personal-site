import React from 'react';
import PropTypes from 'prop-types';

const Achievement = ({ data }) => {
  // Split the title at the first comma to separate the achievement type from details
  const titleParts = data.title.split(',');
  const achievementType = titleParts[0]; // "Runner-up"
  const achievementDetails = titleParts.slice(1).join(',').trim(); // Everything after the first comma

  return (
    <li className="achievement-item">
      <div className="achievement-year">{data.year}</div>
      <div className="achievement-content">
        <span className="achievement-type">{achievementType}</span>
        {achievementDetails && <span className="achievement-details">, {achievementDetails}</span>}
      </div>
    </li>
  );
};

Achievement.propTypes = {
  data: PropTypes.shape({
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    organization: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Achievement;
