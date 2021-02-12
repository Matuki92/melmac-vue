export const landing = [
  {
    src: '/melmac-vue/img/backgrounds/about-bg.jpeg',
  }
];

export const members = [
  {
    src: '/melmac-vue/img/images/member-pablo.jpg',
    name: 'Pablo Zabala',
  },
  {
    src: '/melmac-vue/img/images/member-pipi.jpg',
    name: 'Pipi Pierretti',
  },
];

export const aboutImgSources = [
  ...landing,
  ...members,
].map((i) => i.src);