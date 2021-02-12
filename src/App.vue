<template>
<div
  class="leading-snug antialiased"
  v-if="!loading"
>
  <app-header
    :navigationLinksConfig="navigationLinksConfig"
  ></app-header>
  <router-view></router-view>
  <app-contact></app-contact>
  <app-footer></app-footer>
</div>
<app-loader v-else>
</app-loader>
</template>

<script>
// components
import HeaderVue from './components/main/Header.vue';
import FooterVue from './components/main/Footer.vue';
// utils
import navigationLinksConfig from './utils/navigationLinksConfig';
import ContactVue from './components/main/Contact.vue';
import LoaderVue from './components/main/Loader.vue';
// state
import useMainState from './state/useMainState';

export default {
  name: 'App',
  components: {
    'app-header': HeaderVue,
    'app-footer': FooterVue,
    'app-contact': ContactVue,
    'app-loader': LoaderVue,
  },
  setup() {
    const { loading } = useMainState();

    return {
      navigationLinksConfig,
      loading,
    };
  },
}
</script>
