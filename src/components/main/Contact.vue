<template>
  <div class="flex container flex-wrap md:flex-no-wrap">

    <div class="w-full wrapper">
      <div class="text-center">
        <p class="text-xl mb-10">GET IN TOUCH</p>
        <app-contact-form></app-contact-form>
      </div>
    </div>

    <div class="text-center w-full wrapper">
      <p class="text-xl">CONTACTO</p>

      <div class="h-full flex flex-col justify-evenly py-10 md:mt-0">
        <div>
          <p>TELÉFONO</p>
          <app-hr></app-hr>
          <div
            v-for="item in contactConfig.phoneNumbers"
            :key="item.num"
            class="flex justify-center items-center mb-2"
          >
            <div class="w-5 h-5 mr-2">
              <img class="w-full h-full" :src="`/melmac-vue/img/icons/${item.flag}.svg`" :alt="item.flag">
            </div>
            <div
              class="text-gray-700 font-light"
            >
              <p
              >{{item.num}}</p>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <p>EMAIL</p>
          <app-hr></app-hr>
          <a
            target="_blank"
            :href="`mailto:${contactConfig.email}`"
            class="text-gray-700 font-light"
          >{{ contactConfig.email }}</a>
        </div>

        <div class="mt-6">
          <p>REDES</p>
          <app-hr></app-hr>
          <app-social></app-social>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import HrVue from '../common/Hr.vue'
import contactConfig from '../../utils/contactConfig';
import ContactFormVue from './ContactForm.vue';
import SocialVue from '../common/Social.vue';

export default {
  components: {
    'app-hr': HrVue,
    'app-contact-form': ContactFormVue,
    'app-social': SocialVue,
  },
  setup() {
    return {
      contactConfig,
    };
  },
}
</script>