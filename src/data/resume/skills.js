const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Redux',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Tailwind CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Express.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Mongoose',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Tensorflow',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'GitHub Actions',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Keycloak',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Playwright',
    competency: 5,
    category: ['Tools', 'Testing'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Jira',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Puppeteer',
    competency: 3,
    category: ['Tools', 'Testing'],
  },
  {
    title: 'Selenium',
    competency: 2,
    category: ['Tools', 'Testing'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Postman',
    competency: 5,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Heroku',
    competency: 5,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Bootstrap',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'PHP',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Stripe',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Storybook',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'jQuery',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Languages'],
  },
  {
    title: 'Material UI',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React Native',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Context API',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
