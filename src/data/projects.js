import { icons } from './icons.js'

export const projects = [
  {
    title: 'Geo Tone',
    label: 'geo-tone',
    description:
      'Geo Tone is an audio sequencer made for the browser with user creativity and accessibility in mind. Built with React 18, Tone.js, and Framer Motion on the front-end and a custom back-end with Express and Node.',
    imageUrl: '/gifs/geotone.gif',
    links: [
      {
        content: 'Live Deploy',
        url: 'https://geo-tone.netlify.app/',
        src: 'netlify',
        icon: icons.netlify,
      },
      {
        content: 'Frontend Repo',
        url: 'https://github.com/geo-tone/geo-tone-frontend',
        src: 'github',
        icon: icons.github,
      },
      {
        content: 'Backend Repo',
        url: 'https://github.com/geo-tone/geo-tone-backend',
        src: 'github',
        icon: icons.github,
      },
    ],
  },
  {
    title: 'Sprout',
    label: 'sprout',
    description:
      'Sprout makes it easy to be a proud new plant parent. Browse a list of beginner-friendly houseplants, then build your budding relationship with our plant-specific caretaking guide. Made mobile-first, desktop-responsive with JavaScript, CSS, and HTML.',
    imageUrl: '/gifs/sprout.gif',
    links: [
      {
        content: 'Live Deploy',
        url: 'https://alchemy-plant-app.github.io/plant-app/',
        src: 'github',
        icon: icons.githubPages,
      },
      {
        content: 'Frontend Repo',
        url: 'https://github.com/plant-pardy/sprout',
        src: 'github',
        icon: icons.github,
      },
    ],
  },
  {
    title: 'Beginning Maker Tech',
    label: 'beginning-maker-tech',
    description:
      'Taught from January to March 2019, Beginning Maker Techniques and Technologies introduced students to programming and microelectronics with Arduino, CNC laser cutting, and graphic design with Adobe Illustrator.',
    imageUrl: '/images/bmtech.jpg',
    links: [
      {
        content: 'Archived Course',
        url: 'https://jlaurentpdx.github.io/beginning-maker-tech/',
        src: 'github',
        icon: icons.githubPages,
      },
    ],
  },
]
