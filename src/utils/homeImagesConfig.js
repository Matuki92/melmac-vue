export const landing = [
  {
    src: '/melmac-vue/img/backgrounds/home-bg-1.jpg',
    position: 'top',
  },
  {
    src: '/melmac-vue/img/backgrounds/home-bg-2.jpg',
    position: 'left',
  },
  {
    src: '/melmac-vue/img/backgrounds/home-bg-3.jpg',
    position: 'top',
  }
];

export const aboutUsImageSrc = '/melmac-vue/img/backgrounds/about-us.jpg';

export const clientLogos = [
  {
    src: '/melmac-vue/img/logo/cookin-logo.png',
  },
  {
    src: '/melmac-vue/img/logo/santista-logo.png',
  },
  {
    src: '/melmac-vue/img/logo/salvaje-logo.png',
  },
];

export const galleryConfig = [
  {
    name: 'cowi',
    src: '/melmac-vue/img/gallery/cowi_show.jpg',
  },
  {
    name: 'santista',
    src: '/melmac-vue/img/gallery/santista_1_show.jpg',
  },
  {
    name: 'campari',
    src: '/melmac-vue/img/gallery/campari_show.jpg',
  },
  {
    name: 'duca',
    src: '/melmac-vue/img/gallery/duca_show.jpg',
  },
  {
    name: 'salvaje bakery',
    src: '/melmac-vue/img/gallery/salvaje_show.jpg',
  },
  {
    name: 'galvan & nuñez',
    src: '/melmac-vue/img/gallery/galvan_show.jpg',
  },
  {
    name: 'deniro',
    src: '/melmac-vue/img/gallery/deniro_show.jpg',
  },
  {
    name: 'comunal',
    src: '/melmac-vue/img/gallery/comunal_show.jpg',
  },
  {
    name: 'la vuelta',
    src: '/melmac-vue/img/gallery/lavuelta_show.jpg',
  },
  {
    name: 'surry hills',
    src: '/melmac-vue/img/gallery/surryhills_show.jpg',
  },
  {
    name: 'santa cebada',
    src: '/melmac-vue/img/gallery/santacebada_show.jpg',
  },
  {
    name: 'alen delon',
    src: '/melmac-vue/img/gallery/alen_delon_1_show.jpg',
  },
  {
    name: 'alen delon',
    src: '/melmac-vue/img/gallery/alen_delon_2_show.jpg',
  }
];

export const homeImgSources = [
  { src: aboutUsImageSrc },
  ...landing,
  ...clientLogos,
  ...galleryConfig,
].map((i) => i.src);