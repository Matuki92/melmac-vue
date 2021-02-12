<template>
  <div class="navlink">
    <template v-if="currentRoute.name === 'Home'">      
      <a
        v-for="link in navigationLinksConfig"
        :key="link.name"
        href="#"
        @click="(e) => handleClick(e, link.scrollTo)"
        class="leading-loose hover:underline"
      >
        <div class="w-full p-2">
          {{ link.name }}
        </div>
      </a>
    </template>

    <template v-else>
      <router-link
        :to="'/'"
        class="leading-loose hover:underline"
      >
        <div class="w-full p-2">
          &#60; Volver
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
import navigationLinksConfig from '../../utils/navigationLinksConfig';
import { getCurrentInstance } from 'vue';

export default {
  setup(props, { emit }) {
    const app = getCurrentInstance();
    const { currentRoute } = app.appContext.config.globalProperties.$router;

    const handleClick = (e, scrollTo) => {
      e.preventDefault();
      emit('click');
      document.querySelector(scrollTo)
        .scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
    };

    return {
      navigationLinksConfig,
      currentRoute,
      handleClick,
    }
  },
}
</script>

<style scoped>
.navlink {
  display: inherit;
}
</style>