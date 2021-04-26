import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'The Sebations', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'The Sebastions',
  subtitle: '',
  cta: 'Discover',
};

// ABOUT DATA
export const aboutData = {
  img: 'sebastions-img.jpeg',
  paragraphOne: 'The Sebastions is a project based out of Virginia, USA',
  paragraphTwo: '',
  paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Music',
    section: 'music',
    info: 'The Sebastions released their first EP in 2021. Stay tuned for the latest updates.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Short Stories',
  //   section: 'stories',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: '#', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in Touch',
  btn: '',
  email: 'jyusician@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
