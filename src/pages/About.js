import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const { t } = useTranslation();

  const allContent = [
    t('pages.about.content.greeting'),
    t('pages.about.content.currently'),
    t('pages.about.content.whatIDo'),
    t('pages.about.content.skillsFooter'),
    t('pages.about.content.background'),
    t('pages.about.content.interests'),
    t('pages.about.content.philosophy'),
    t('pages.about.content.connect'),
  ].join(' ');

  const count = allContent
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title={t('pages.about.title')} description={t('pages.about.description')}>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">{t('pages.about.title')}</Link>
            </h2>
            <p>{t('pages.about.wordCount', { count })}</p>
          </div>
        </header>
        <div className="about-content">
          <p><Markdown>{t('pages.about.content.greeting')}</Markdown></p>
          <h1>{t('pages.about.content.currentlyTitle')}</h1>
          <p><Markdown>{t('pages.about.content.currently')}</Markdown></p>
          <h1>{t('pages.about.content.whatIDoTitle')}</h1>
          <p>{t('pages.about.content.whatIDo')}</p>
          <ul>
            {t('pages.about.content.skills', { returnObjects: true }).map((skill, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}><Markdown>{skill}</Markdown></li>
            ))}
          </ul>
          <p><Markdown>{t('pages.about.content.skillsFooter')}</Markdown></p>
          {/* Hide background for now */}
          {/* <h1>{t('pages.about.content.backgroundTitle')}</h1> */}
          {/* <p><Markdown>{t('pages.about.content.background')}</Markdown></p> */}
          <h1>{t('pages.about.content.interestsTitle')}</h1>
          <p>{t('pages.about.content.interests')}</p>
          <ul>
            {t('pages.about.content.interestsList', { returnObjects: true }).map((interest, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <h1>{t('pages.about.content.philosophyTitle')}</h1>
          <p>{t('pages.about.content.philosophy')}</p>
          <h1>{t('pages.about.content.connectTitle')}</h1>
          <p>{t('pages.about.content.connect')}</p>
          <hr />
          <p><em>{t('pages.about.content.quote')}</em></p>
        </div>
      </article>
    </Main>
  );
};

export default About;
