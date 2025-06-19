import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ data, title }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h2>{title}</h2>
    </div>
    {data.map((job) => (
      <Job data={job} key={`${job.name}-${job.position}`} />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      position: PropTypes.string,
      url: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      summary: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};

Experience.defaultProps = {
  data: [],
  title: 'Experience',
};

export default Experience;
