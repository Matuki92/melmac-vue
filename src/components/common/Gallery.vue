<template>
  <div class="gallery container pt-8">
    <div
      v-for="(image, idx) in config"
      :key="idx"
      class="mb-8 text-center inline-block"
      data-aos="fade-up"
    >
      <img
        :src="image.src"
        :alt="image.name"
        class="rounded-sm shadow-2xl"
      >
      <p class="text-xl uppercase mt-4">{{image.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: Array,
  },
}
</script>

<style scoped>
.gallery {
  -webkit-column-gap: 1rem;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
}

@media (max-width: 640px) {
  .gallery {
    padding: 1rem;
  }
}

@screen lg {
  .gallery {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}

</style>

