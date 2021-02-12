<template>
  <div
    :class="[
      'w-full relative',
      { 'h-screen': size === 'full' },
      { 'h-half-screen': size === 'half' },
    ]"   
  >
  <div
    v-for="(image, i) in images"
    :key="i"
    :class="[
      'h-full w-full absolute bg-cover bg-no-repeat transition-all ease-in-out duration-1000',
      { 'opacity-0': !image.current },
      { 'bg-top': image.position === 'top' },
      { 'bg-center': image.position === 'center' },
      { 'bg-left': image.position === 'left' },
      { 'bg-right': image.position === 'right' },
    ]"
    :style="{ backgroundImage: `url(${image.src})` }"
  >

  </div>
    <div
      v-if="title"
      class="absolute bottom-0 w-full bg-black bg-opacity-25 text-center py-4 z-10"
    >
      <p class="text-xl md:text-3xl text-white font-light">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onUnmounted } from 'vue';

export default {
  props: {
    title: String,
    size: String,
    imagesConfig: Array,
  },
  setup(props) {
    const currentImgIndex = ref(0);

    let slideshowInterval;

    const images = computed(() => props.imagesConfig.map((img, i) => ({
      ...img,
      current: i === currentImgIndex.value,
    })));

    if (props.imagesConfig.length > 1) {
      slideshowInterval = setInterval(() => {
        const newVal = currentImgIndex.value + 1;

        currentImgIndex.value = props.imagesConfig[newVal]
          ? newVal
          : 0;

      }, 5000);
    }

    onUnmounted(() => clearInterval(slideshowInterval))

    return {
      images,
    };
  },
}
</script>