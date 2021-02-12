<template>
  <div
    class="flex flex-col md:flex-row items-center justify-around"
  >
    <img
      v-for="(logo, i) in logos"
      :key="i"
      :src="logo.src"
      class="h-20 mt-10"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    logos: Array,
  },
}
</script>