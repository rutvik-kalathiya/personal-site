import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const getSiteData = (t) => [
  // {
  //   label: 'Stars this repository has on github',
  //   key: 'stargazers_count',
  //   link: 'https://github.com/rutvik-kalathiya/personal-site/stargazers',
  // },
  // {
  //   label: 'Number of people watching this repository',
  //   key: 'subscribers_count',
  //   link: 'https://github.com/rutvik-kalathiya/personal-site/stargazers',
  // },
  // {
  //   label: 'Number of forks',
  //   key: 'forks',
  //   link: 'https://github.com/rutvik-kalathiya/personal-site/network',
  // },
  // {
  //   label: 'Number of spoons',
  //   value: '0',
  // },
  // {
  //   label: 'Number of linter warnings',
  //   value: '0', // enforced via github workflow
  // },
  // {
  //   label: 'Open github issues',
  //   key: 'open_issues_count',
  //   link: 'https://github.com/rutvik-kalathiya/personal-site/issues',
  // },
  {
    label: t('pages.stats.labels.lastUpdatedAt'),
    key: 'pushed_at',
    link: 'https://github.com/rutvik-kalathiya/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: t('pages.stats.labels.linesOfJavascript'),
    value: '2150',
    link: 'https://github.com/rutvik-kalathiya/personal-site/graphs/contributors',
  },
];

export default getSiteData;
