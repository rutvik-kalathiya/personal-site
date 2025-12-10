import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Main from '../layouts/Main';

const Index = () => {
  const { t } = useTranslation();

  return (
    <Main
      title="Rutvik Kalathiya - Full Stack Developer & Software Engineer"
      description="Rutvik Kalathiya - Senior Software Engineer & Full Stack Developer with 3+ years experience. TU Chemnitz graduate specializing in React, Next.js, Node.js, and cloud-based SaaS platforms. Currently leading development of NetzPortal at prp project:people for the energy sector."
      keywords="Rutvik Kalathiya, Software Developer, Software Engineer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, TU Chemnitz, prp project:people, NetzPortal, Energy Sector, Web Development, SaaS Platform, JavaScript Developer, TypeScript, AWS, Frontend Developer, Backend Developer, Chemnitz, Germany"
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h1>
              <Link to="/">Rutvik Kalathiya</Link>
            </h1>
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
