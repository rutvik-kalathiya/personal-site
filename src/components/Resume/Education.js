import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data, title }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="degree-main-container">
      {data.map((degree) => (
        <Degree data={degree} key={degree.school} />
      ))}
    </div>
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number,
    }),
  ),
  title: PropTypes.string,
};

Education.defaultProps = {
  data: [],
  title: 'Education',
};

export default Education;
