import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => {
  const { t } = useTranslation();

  return (
    <Main
      title={t('pages.stats.title')}
      description={t('pages.stats.description')}
    >
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2>
              <Link to="/stats">{t('pages.stats.title')}</Link>
            </h2>
          </div>
        </header>
        <Personal />
        <Site />
      </article>
    </Main>
  );
};

export default Stats;
