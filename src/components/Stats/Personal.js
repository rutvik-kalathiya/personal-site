import React from 'react';
import { useTranslation } from 'react-i18next';
import Table from './Table';
import getPersonalData from '../../data/stats/personal';

const PersonalStats = () => {
  const { t } = useTranslation();
  const data = getPersonalData(t);

  return (
    <>
      <h3>{t('pages.stats.personalTitle')}</h3>
      <Table data={data} />
    </>
  );
};

export default PersonalStats;
