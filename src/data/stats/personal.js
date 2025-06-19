import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-09-15T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const getPersonalData = (t) => [
  {
    key: 'age',
    label: t('pages.stats.labels.currentAge'),
    value: <Age />,
  },
  {
    key: 'countries',
    label: t('pages.stats.labels.countriesVisited'),
    value: 6,
    link: 'https://www.google.com/maps/d/u/0/edit?mid=1dhhB7Af4olxhA-vA71t3HafBKNB2lAA&usp=sharing',
  },
  {
    key: 'location',
    label: t('pages.stats.labels.currentCity'),
    value: 'Chemnitz, Germany',
  },
];

export default getPersonalData;
