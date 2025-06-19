import React from 'react';
import PropTypes from 'prop-types';

import Project from './Projects/Project';

const getRows = (projects) => projects
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
  .map((project) => (
    <Project
      data={project}
      key={project.title + project.issuer}
    />
  ));

const Projects = ({ data, title }) => (
  <div className="projects">
    <div className="link-to" id="projects" />
    <div className="title">
      <h2>{title}</h2>
    </div>
    <div className="project-list">{getRows(data)}</div>
  </div>
);

Projects.propTypes = {
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

Projects.defaultProps = {
  data: [],
  title: 'Projects',
};

export default Projects;
