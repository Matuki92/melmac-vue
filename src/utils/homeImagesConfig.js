export const landing = [
  {
    src: '../../img/backgrounds/home-bg-1.jpg',
    position: 'top',
  },
  {
    src: '../../img/backgrounds/home-bg-2.jpg',
    position: 'left',
  },
  {
    src: '../../img/backgrounds/home-bg-3.jpg',
    position: 'top',
  }
];

export const aboutUsImageSrc = '../../img/backgrounds/about-us.jpg';

export const clientLogos = [
  {
    src: '../../img/logo/cookin-logo.png',
  },
  {
    src: '../../img/logo/santista-logo.png',
  },
  {
    src: '../../img/logo/salvaje-logo.png',
  },
];

export const galleryConfig = [
  {
    name: 'cowi',
    src: '../../img/gallery/cowi_show.jpg',
  },
  {
    name: 'santista',
    src: '../../img/gallery/santista_1_show.jpg',
  },
  {
    name: 'campari',
    src: '../../img/gallery/campari_show.jpg',
  },
  {
    name: 'duca',
    src: '../../img/gallery/duca_show.jpg',
  },
  {
    name: 'salvaje bakery',
    src: '../../img/gallery/salvaje_show.jpg',
  },
  {
    name: 'galvan & nuñez',
    src: '../../img/gallery/galvan_show.jpg',
  },
  {
    name: 'deniro',
    src: '../../img/gallery/deniro_show.jpg',
  },
  {
    name: 'comunal',
    src: '../../img/gallery/comunal_show.jpg',
  },
  {
    name: 'la vuelta',
    src: '../../img/gallery/lavuelta_show.jpg',
  },
  {
    name: 'surry hills',
    src: '../../img/gallery/surryhills_show.jpg',
  },
  {
    name: 'santa cebada',
    src: '../../img/gallery/santacebada_show.jpg',
  },
  {
    name: 'alen delon',
    src: '../../img/gallery/alen_delon_1_show.jpg',
  },
  {
    name: 'alen delon',
    src: '../../img/gallery/alen_delon_2_show.jpg',
  }
];

export const homeImgSources = [
  { src: aboutUsImageSrc },
  ...landing,
  ...clientLogos,
  ...galleryConfig,
].map((i) => i.src);