import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Table from './Table';
import getSiteData from '../../data/stats/site';

const Stats = () => {
  const { t } = useTranslation();
  const initialData = getSiteData(t);
  const [data, setResponseData] = useState(initialData);

  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      'https://api.github.com/repos/rutvik-kalathiya/personal-site',
    );
    const resData = await res.json();
    setResponseData(
      initialData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );
  }, [initialData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h3>{t('pages.stats.siteTitle')}</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
