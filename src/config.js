module.exports = {
  email: 'advayb2018@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://www.github.com',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/advay-bajpai-71389a244/',
    },
    {
      name: 'Codewars',
      url: 'https://www.codewars.com/users/Ady%20',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#FF5F1F',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
