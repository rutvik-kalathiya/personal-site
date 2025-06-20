import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import Job from './Experience/Job';

// Group jobs by company
const groupJobsByCompany = (jobs) => {
  const companies = {};

  jobs.forEach((job) => {
    if (!companies[job.name]) {
      companies[job.name] = {
        name: job.name,
        url: job.url,
        roles: [],
      };
    }
    companies[job.name].roles.push(job);
  });

  // Sort roles within each company by start date (newest first)
  Object.values(companies).forEach((company) => {
    company.roles.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateB - dateA;
    });
  });

  return Object.values(companies);
};

const Experience = ({ data, title }) => {
  const groupedCompanies = groupJobsByCompany(data);

  return (
    <div className="experience">
      <div className="link-to" id="experience" />
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="experience-list">
        {groupedCompanies.map((company) => (
          <div key={company.name} className="company-item">
            <div className="company-header">
              <div className="company-title-section">
                <h1 className="company-name">
                  <a href={company.url} target="_blank" rel="noopener noreferrer">
                    {company.name}
                  </a>
                </h1>
                <div className="company-duration">
                  {dayjs(company.roles[company.roles.length - 1].startDate).format('MMMM YYYY')} -{' '}
                  {company.roles[0].endDate ? dayjs(company.roles[0].endDate).format('MMMM YYYY') : 'PRESENT'}
                </div>
              </div>
            </div>

            <div className="roles-container">
              {company.roles.map((role) => (
                <Job key={`${role.name}-${role.position}-${role.startDate}`} data={role} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
