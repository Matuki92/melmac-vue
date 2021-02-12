<template>
  <div class="section-divider flex flex-wrap lg:flex-no-wrap border-gray-400 border-solid">

    <div :class="`container wrapper px-4 text-${align}`">
      <p class="text-2xl font-medium">{{ title }}</p>
      <app-hr
        :align="align"
      ></app-hr>
      <template v-if="text && text.length">
        <p
          v-for="(paragraph, i) in text"
          :key="i"
          class="text-base md:text-xl font-light text-gray-800"
          >{{ paragraph }}</p>
      </template>
      <slot></slot>
    </div>

    <div
      class="divider-image h-32 md:h-72 lg:h-auto w-full bg-center bg-cover"
      v-if="src"
      :style="{ backgroundImage: `url(${src})` }"
    >
    </div>

  </div>
</template>

<script>
import HrVue from './Hr.vue'
export default {
  props: {
    title: String,
    text: Array,
    align: String,
    src: String,
    odd: Boolean,
  },
  components: {
    'app-hr': HrVue,
  },
}
</script>

<style scoped>
 .section-divider {
   background-color: rgb(240, 240, 240);
 }
</style>