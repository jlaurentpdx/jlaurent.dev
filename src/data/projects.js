import { icons } from './icons.js'

export const projects = [
  {
    title: 'Geo Tone',
    label: 'geo-tone',
    description:
      '<strong>Geo Tone</strong> is an audio sequencer made for the browser with user creativity and accessibility in mind. Built with React 18, Tone.js, and Framer Motion on the front-end and a custom back-end with Express and Node.',
    imageUrl: '/gifs/geotone.gif',
    imageAlt:
      'A musical sequencer with vibrant colors is used by a performer, changing properties of the sequencer like which notes and instruments are being played and at what volume.',
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
      '<strong>Sprout</strong> makes it easy to be a proud new plant parent. Browse a list of beginner-friendly houseplants, then build your budding relationship with our plant-specific caretaking guide. Made mobile-first, desktop-responsive with JavaScript, CSS, and HTML.',
    imageUrl: '/gifs/sprout.gif',
    imageAlt:
      'A mobile phone displays a user selecting houseplants from a list of beginner-friendly options, such as the Peace Lily and String of Hearts. The user navigates to a page that shows important caretaking information for their selected plants.',
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
      'Taught from January to March 2019, <strong>Beginning Maker Techniques and Technologies</strong> introduced students to programming and microelectronics with Arduino, CNC laser cutting, and graphic design with Adobe Illustrator.',
    imageUrl: '/images/bmtech.jpg',
    imageAlt:
      'A web page displays a lesson about understanding code, featuring a distinction between high-level and low-level programming languages, a simple chart on what binary digits can be used represent, and a connection to solving complex problems with simple logic.',
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
