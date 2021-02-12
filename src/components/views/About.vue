<template>
  <div class="mt-16">

    <app-landing-section
      :size="'half'"
      :imagesConfig="imagesConfig"
    ></app-landing-section>

    <app-section-divider
      :title="'QUÉ HACEMOS'"
      :text="[
        'Universo Melmac se formó para crear un nuevo concepto dentro del área de indumentaria laboral. Nace con la idea de proponer y asesorar en el área visual de cada marca y ayudar a desarrollar el concepto específico de cada cliente.',
        'Con un ámplio recorrido previo trabajando para grandes marcas, nuestra experiencia se desarrolla al máximo en Universo Melmac. Surgimos en un momento de necesidad de ideas nuevas e innovadoras, resurgiendo la moda en el sector comercial: cada acción es comunicación de marca y así lo entendemos nosotros.',
        'Por eso en Universo Melmac creemos que trabajando en equipo con materiales de primera calidad y aplicando diseños originales para cada uno de nuestros clientes, podemos lograr hacer la diferencia.',
      ]"
      :align="'left'"
    >
      <div class="flex flex-wrap justify-evenly items-center mt-10">
        <div
          v-for="(member, i) in members"
          :key="i"
        >
          <div class="text-center p-4">
            <div
              class="h-56 w-56 rounded-full border border-gray-300 border-solid bg-center bg-cover"
              :style="{ backgroundImage: `url(${member.src})` }"
            ></div>
            <p class="uppercase text leading-loose font-semibold">{{ member.name }}</p>
          </div>
        </div>
      </div>
    </app-section-divider>
    
  </div>
</template>

<script>
import LandingVue from '../main/Landing.vue';
import { landing, members } from '../../utils/aboutImagesConfig';
import SectionDividerVue from '../common/SectionDivider.vue';

export default {
  name: 'About',
  components: {
    'app-landing-section': LandingVue,
    'app-section-divider': SectionDividerVue,
  },
  setup() {
    return {
      members,
      imagesConfig: landing,
    };
  },
}
</script>
