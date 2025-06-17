/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'PurpleLeafStrategy GmbH',
    position: 'Full Stack Developer',
    url: 'https://enavia.io',
    startDate: '2024-02-01',
    summary:
      'PurpleLeafStrategy builds Enavia, a B2B cloud-based SaaS platform for pharmaceutical brand planning and regulatory workflows.',
    highlights: [
      'Leading development of Enavia features and infrastructure, focused on performance and scalability.',
      'Implemented secure authentication via Keycloak and improved CI/CD with GitHub Actions.',
      'Refactored legacy codebase to boost maintainability and developer onboarding.',
      'Integrated third-party APIs for real-time data visualization and regulatory updates.',
    ],
  },
  {
    name: 'PurpleLeafStrategy GmbH',
    position: 'Full Stack Developer (Working Student)',
    url: 'https://enavia.io',
    startDate: '2023-02-01',
    endDate: '2024-01-31',
    summary:
      'Worked on modernizing the Enavia platform frontend and enhancing development workflows across teams.',
    highlights: [
      'Migrated legacy frontend to Next.js, significantly improving SEO and performance.',
      'Built a custom UI component library to ensure consistency and speed up development.',
      'Developed end-to-end testing infrastructure using Playwright for better QA and fewer production bugs.',
    ],
  },
  {
    name: 'PurpleLeafStrategy GmbH',
    position: 'Full Stack Intern',
    url: 'https://enavia.io',
    startDate: '2022-09-01',
    endDate: '2023-02-01',
    summary:
      'Contributed to early-stage feature development and client customizations within the Enavia platform.',
    highlights: [
      'Built a real-time presentation system with dynamic data integration.',
      'Customized product theming and branding for multiple pharmaceutical clients.',
    ],
  },
];

export default work;
