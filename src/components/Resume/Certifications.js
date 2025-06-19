import React from 'react';
import PropTypes from 'prop-types';

import Certification from './Certifications/Certification';

const getRows = (certifications) => certifications
  .sort((a, b) => {
    // Sort by date (newest first), then by title
    const dateA = new Date(a.issueDate);
    const dateB = new Date(b.issueDate);
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  })
  .map((certification) => (
    <Certification
      data={certification}
      key={certification.title + certification.issuer}
    />
  ));

const Certifications = ({ data, title }) => (
  <div className="certifications">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="certification-list">{getRows(data)}</div>
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      issuer: PropTypes.string,
      issueDate: PropTypes.string,
      credentialId: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};

Certifications.defaultProps = {
  data: [],
  title: 'Zertifikate',
};

export default Certifications;
