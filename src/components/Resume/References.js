import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const References = ({ title }) => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <Link to="/contact">
        <h3>{title}</h3>
      </Link>
    </div>
  </div>
);

References.propTypes = {
  title: PropTypes.string,
};

References.defaultProps = {
  title: 'References are available upon request',
};

export default References;
