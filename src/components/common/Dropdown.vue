<template>
  <div ref="dropdownRef" class="relative">
    <div
      @click="toggleDropdown()"
      class="h-12 w-10 flex justify-center cursor-pointer"
    >
      <img
        class="h-full w-8 opacity-75 block"
        :src="`/melmac-vue/img/icons/${dropdownIconName}.svg`"
        alt="menu"
      >
    </div>

    <div
      class="dropdown absolute top-0 right-0 text-center z-10 bg-white p-2 rounded-sm whitespace-no-wrap shadow-lg w-56"
      v-if="show"
    >
      <app-nav-link
        @click="toggleDropdown()"
      ></app-nav-link>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
// components
import NavLinkVue from './NavLink.vue';
// state
import useDocumentClick from '../../state/useDocumentClick';

export default {
  components: {
    'app-nav-link': NavLinkVue,
  },
  setup() {
    const dropdownRef = ref(null);
    const show = ref(false);

    const dropdownIconName = computed(() => show.value ? 'cross' : 'menu');

    const { target } = useDocumentClick();

    const toggleDropdown = (val) => {
      if (val !== undefined) {
        show.value = val;
      } else {
        show.value = !show.value;
      }
    };

    watch(target, (tgt) => {
      if (dropdownRef.value && !dropdownRef.value.contains(tgt)) {
        toggleDropdown(false);
      }
    });

    return {
      dropdownRef,
      show,
      toggleDropdown,
      dropdownIconName,
    };
  },
}
</script>

<style scoped>
.dropdown {
  transform: translateY(3.8rem);
}
</style>