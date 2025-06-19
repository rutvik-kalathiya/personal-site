import React from 'react';
import PropTypes from 'prop-types';

import Achievement from './Achievements/Achievement';

const getRows = (achievements) => achievements
  .sort((a, b) => {
    let ret = 0;
    if (a.year > b.year) ret = -1;
    else if (a.year < b.year) ret = 1;
    else if (a.title > b.title) ret = 1;
    else if (a.title < b.title) ret = -1;
    return ret;
  })
  .map((achievement) => (
    <Achievement
      data={achievement}
      key={achievement.title}
    />
  ));

const Achievements = ({ data, title }) => (
  <div className="achievements">
    <div className="link-to" id="achievements" />
    <div className="title">
      <h2>{title}</h2>
    </div>
    <ul className="achievement-list">{getRows(data)}</ul>
  </div>
);

Achievements.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      year: PropTypes.number,
      organization: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};

Achievements.defaultProps = {
  data: [],
  title: 'Achievements',
};

export default Achievements;
