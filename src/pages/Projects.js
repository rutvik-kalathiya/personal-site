import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const Projects = () => {
  const { t } = useTranslation();

  // Get projects data from translations
  const projectsData = t('projectsData', { returnObjects: true });

  return (
    <Main
      title={t('pages.projects.title')}
      description={t('pages.projects.description')}
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">{t('pages.projects.title')}</Link>
            </h2>
            <p>{t('pages.projects.subtitle')}</p>
          </div>
        </header>
        {projectsData.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
