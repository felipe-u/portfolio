export const experience = [
  {
    id: 'exp1',
    occupationKey: 'exp.exp1.occupation',
    companyKey: 'exp.exp1.company',
    dateKey: 'exp.exp1.date',
    descKey: 'exp.exp1.desc',
  },
  {
    id: 'exp2',
    occupationKey: 'exp.exp2.occupation',
    companyKey: 'exp.exp2.company',
    dateKey: 'exp.exp2.date',
    descKey: 'exp.exp2.desc',
  },
] as const

export const projects = [
  {
    id: 1,
    name: 'FinApp',
    descKey: 'projects.proj1',
    tags: ['Angular', 'Node.js', 'MongoDB'],
    repoUrl: 'https://github.com/felipe-u/finapp',
    demoUrl: 'https://finapp-mocha.vercel.app',
    imgLoc: '/projects/finapp.png',
  },
  {
    id: 2,
    name: 'Forge',
    descKey: 'projects.proj2',
    tags: ['React', 'TypeScript', 'React Router', 'IndexedDB'],
    repoUrl: 'https://github.com/felipe-u/Forge',
    demoUrl: 'https://forge-ivory.vercel.app',
    imgLoc: '/projects/forge.png',
  },
  {
    id: 3,
    name: 'Simple ToDo',
    descKey: 'projects.proj3',
    tags: ['React', 'Context', 'UI/UX'],
    repoUrl: 'https://github.com/felipe-u/simple-todo-app',
    demoUrl: 'https://simple-todo-delta-seven.vercel.app/',
    imgLoc: '/projects/simple-todo.png',
  },
  {
    id: 4,
    name: 'Inventory Redux',
    descKey: 'projects.proj4',
    tags: ['React', 'Redux', 'TypeScript', 'Chakra-UI'],
    repoUrl: 'https://github.com/felipe-u/inventory-redux',
    demoUrl: 'https://inventory-redux.vercel.app/',
    imgLoc: '/projects/redux.png',
  },
] as const

export const skills = {
  tech: [
    {
      name: 'React',
      imgLoc: '/skills/react.svg',
    },
    {
      name: 'React Router',
      imgLoc: '/skills/react-router.svg',
    },
    {
      name: 'TypeScript',
      imgLoc: '/skills/typescript.svg',
    },
    {
      name: 'Angular',
      imgLoc: '/skills/angular.svg',
    },
    {
      name: 'Responsive Design',
      imgLoc: '/skills/responsive-design.svg',
    },
    {
      name: 'Java',
      imgLoc: '/skills/java.svg',
    },
    {
      name: 'Node.js',
      imgLoc: '/skills/node-js.svg',
    },
    {
      name: 'Unit Testing',
      imgLoc: '/skills/unit-testing.svg',
    },
    {
      name: 'Git',
      imgLoc: '/skills/git.svg',
    },
    {
      name: 'MongoDB',
      imgLoc: '/skills/mongo.svg',
    },
  ],
  softKeys: [
    'soft-skills.sf1',
    'soft-skills.sf2',
    'soft-skills.sf3',
    'soft-skills.sf4',
    'soft-skills.sf5',
  ],
} as const
