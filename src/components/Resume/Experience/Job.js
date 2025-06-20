import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    position, startDate, endDate, summary, highlights,
  },
}) => (
  <div className="job-item">
    <div className="job-header">
      <div className="job-title-section">
        <h2 className="job-title">{position}</h2>
      </div>
      <div className="job-date">
        {dayjs(startDate).format('MMMM YYYY')} -{' '}
        {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
      </div>
    </div>

    {summary && (
      <div className="job-summary">
        <Markdown
          options={{
            overrides: {
              p: {
                props: {
                  className: 'summary-text',
                },
              },
            },
          }}
        >
          {summary}
        </Markdown>
      </div>
    )}

    {highlights && highlights.length > 0 && (
      <div className="job-highlights">
        <ul className="highlights-list">
          {highlights.map((highlight) => (
            <li key={highlight} className="highlight-item">{highlight}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

Job.propTypes = {
  data: PropTypes.shape({
    position: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
