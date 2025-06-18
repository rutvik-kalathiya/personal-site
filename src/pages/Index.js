import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Main from '../layouts/Main';

const Index = () => {
  const { t } = useTranslation();

  return (
    <Main
      description={
        "Rutvik Kalathiya's personal website. Chemnitz based TU Chemnitz graduate, "
        + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
      }
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">{t('pages.index.title')}</Link>
            </h2>
            <p>
              {t('pages.index.description')}
            </p>
          </div>
        </header>
        <p>
          {t('pages.index.welcome')}{' '}
          <Link to="/about">{t('pages.index.aboutMe')}</Link>
          {t('pages.index.checkOut')}{' '}
          <Link to="/resume">{t('nav.resume')}</Link>, <Link to="/projects">{t('nav.projects')}</Link>,{' '}
          {t('pages.index.view')} <Link to="/stats">{t('pages.index.siteStats')}</Link>
          {t('pages.index.orContact')}{' '}
          <Link to="/contact">{t('pages.index.contactMe')}</Link> {t('pages.index.me')}.
        </p>
        <p>
          {t('pages.index.sourceAvailable')}{' '}
          <a href="https://github.com/rutvik-kalathiya/personal-site" target="_blank" rel="noopener noreferrer">{t('pages.index.here')}</a>.
        </p>
      </article>
    </Main>
  );
};

export default Index;
