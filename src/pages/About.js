import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const { t } = useTranslation();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  const count = markdown
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
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  );
};

export default About;
