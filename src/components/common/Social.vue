<template>
  <div class="flex items-center justify-center">
    <a
      v-for="(item, i) in config"
      :key="i"
      :href="item.link"
      target="_blank"
    >    
      <img
        :src="item.src"
        :alt="item.name"
        class="h-8 w-8 mx-2 opacity-50 hover:opacity-90 cursor-pointer"
      >
    </a>
  </div>
</template>

<script>
export default {
  setup() {
    const config = [
      {
        name: 'Instagram',
        src: '/img/icons/instagram.svg',
        link: 'https://www.instagram.com/universo_melmac/',
      },
      {
        name: 'Facebook',
        src: '/img/icons/facebook.svg',
        link: 'https://www.facebook.com/UniversoMelmac',
      },
    ];

    return {
      config,
    };
  },
}
</script>