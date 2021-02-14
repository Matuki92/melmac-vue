export const landing = [
  {
    src: '../../img/backgrounds/about-bg.jpeg',
  }
];

export const members = [
  {
    src: '../../img/images/member-pablo.jpg',
    name: 'Pablo Zabala',
  },
  {
    src: '../../img/images/member-pipi.jpg',
    name: 'Pipi Pierretti',
  },
];

export const aboutImgSources = [
  ...landing,
  ...members,
].map((i) => i.src);