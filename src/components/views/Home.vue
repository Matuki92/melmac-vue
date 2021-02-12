<template>
<div>

  <app-landing-section
    :id="'home'"
    :title="'DISFRUTÁ TU ROPA DE TRABAJO'"
    :size="'full'"
    :imagesConfig="imagesConfig"
  ></app-landing-section>

  <app-section-divider
    :title="'NUESTRA MISIÓN'"
    :text="['Queremos generar una relación a largo plazo, conociendo las necesidades de nuestros clientes, para brindarles un diseño ad hoc, con la mejor relación precio calidad y un estilo acorde a la marca.']"
    :align="'center'"
  ></app-section-divider>

  <app-items></app-items>

  <app-section-divider
    :id="'about-us'"
    :title="'QUIENES SOMOS'"
    :text="['Somos emprendedores que se juntaron para crear diseños con estilo propio y exclusivos para cada cliente. Apostamos a brindar atención personalizada, productos terminados de excelente calidad y prendas a la moda.']"
    :align="'left'"
    :src="aboutUsImageSrc"
  >
    <div class="mt-6">      
      <router-link
        to="/about"
        class="uppercase underline text-2xl"
      >Get to know us ></router-link>
    </div>
  </app-section-divider>

  <app-section-divider
    :id="'productos'"
    :title="'NUESTRO TRABAJO'"
    :text="['Estos son algunos de los trabajos que realizamos día a día.']"
    :align="'center'"
  ></app-section-divider>

  <app-gallery
    :config="galleryConfig"
  ></app-gallery>

  <app-section-divider
    :id="'alianzas'"
    :title="'ALIANZAS'"
    :align="'center'"
  >
    <app-carousel
      :logos="clientLogos"
    ></app-carousel>
  </app-section-divider>

</div>
</template>

<script>
// components
import SectionDividerVue from '../common/SectionDivider.vue';
import ItemsVue from '../common/Items.vue';
import LandingVue from '../main/Landing.vue';
import GalleryVue from '../common/Gallery.vue';
import CarouselVue from '../common/Carousel.vue';
import {
  landing,
  clientLogos,
  aboutUsImageSrc,
  galleryConfig,
} from '../../utils/homeImagesConfig';

export default {
  name: 'Home',
  components: {
    'app-section-divider': SectionDividerVue,
    'app-items': ItemsVue,
    'app-landing-section': LandingVue,
    'app-gallery': GalleryVue,
    'app-carousel': CarouselVue,
  },
  setup() {
    return {
      imagesConfig: landing,
      clientLogos,
      aboutUsImageSrc,
      galleryConfig,
    };
  },
}
</script>
