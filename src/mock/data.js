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
  paragraphOne:
    'The Sebastions are a neo-grunge, post-punk band from Alexandria, VA. Band frontman Joey Yusician recorded and released the band’s Here for Now EP in March, 2021. He then recruited and has been working with Peter, Patrick, Steve, and Corron to prepare to perform the band’s material in the greater DC area. The band’s eclectic background has converged into a show-stopping  sound that rivals and is reminiscent of The Strokes, The Smiths, and Velvet Underground.',
  paragraphTwo: '',
  paragraphThree: '',
};

export const membersData = [
  {
    name: 'Joey Yusician',
    bio:
      'Joey began playing guitar while studying at the University of Virginia. Inspired by the CDs he found of acts such as The Who, The Strokes, and The Grateful Dead, he recorded The Sebastions first EP, Here for Now, with the help of his fellow musicians in Kendall Street Company. He’s hoping to bring the energy of his favorite acts to the live performances of The Sebastions',
    role: 'Singer/Songwriter',
  },
  {
    name: 'Peter VanderHoeven',
    role: 'Guitar',
    bio:
      'Peter is a great guitarist. His imaginative riffs and unrivaled tones over-drive The Sebastions into a realm beyond the current recorded work. He is currently studying at community college while maintaining his music and guitar studies.',
  },
  {
    name: 'Patrick Horner',
    role: 'Drums',
    bio:
      'Patrick is a seasoned drummer with decades of experience behind the kit. His precision and imagination land him amongst the top drummers in the area, and his knowledge of music and rhythm has expanded The Sebastions creative potential since he joined the group.',
  },
  {
    name: 'Steve Attix',
    role: 'Lead Guitar',
    bio:
      'Steve is a seasoned, multi-instrumentalist and lead guitarist of The Sebastions. He has decades of experience performing and teaching music. He decided to join forces with Joey and The Sebastions after hearing the Here for Now EP.',
  },
  {
    name: 'Corron Stewart',
    role: 'Bass',
    bio:
      'DC native and Maryland resident Corron Stewart is the bassist of The Sebastions. His Reggae background and love of The Red Hot Chili Peppers has injected fresh blood into The Sebastions’ original work. He is ardent about music and its theory, and his fat, fat bass tone glues The Sebastions together.',
  },
];
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
      name: 'youtube',
      icon: 'youtube',
      url: 'https://www.youtube.com/channel/UCd2JJUL3GyiaofPcjAI5o0Q',
    },
    {
      id: nanoid(),
      name: 'instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/the_sebastions/',
    },
    {
      id: nanoid(),
      name: 'deezer',
      icon: 'music',
      url: 'https://deezer.page.link/uYkZfD9yQ1Aj2fWV7',
    },
    {
      id: nanoid(),
      name: 'apple music',
      icon: 'apple',
      url: 'https://music.apple.com/us/artist/the-sebastions/1559732336',
    },
  ],
};

export const photoData = [
  {
    filename: 'singer.jpeg',
    alt: 'Singer',
  },
  {
    filename: 'guitarist.jpeg',
    alt: 'Guitarist',
  },
  {
    filename: 'solo.jpeg',
    alt: 'Guitar Solo',
  },
  {
    filename: 'thesnake.jpeg',
    alt: 'Concert at The Snake',
  },
  {
    filename: 'podcast.jpeg',
    alt: 'Podcast',
  },
];

export const videoData = [
  {
    url: 'https://s3.amazonaws.com/sebastions.com/videos/03+Peregrine.mp4',
    name: 'Peregrine',
  },
  {
    url: 'https://s3.amazonaws.com/sebastions.com/videos/alexandria-video.mov',
    name: 'Alexandria',
  },
];

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
