<template>
  <div class="flex container flex-wrap justify-evenly py-10">
    <div
      v-for="(item, idx) in itemsConfig"
      :key="idx"
      class="card-item my-10 w-11/12 md:w-80 lg:w-1/3"
    >
      <div>
        <div class="h-10 flex items-center">
          <div class="h-3 w-3 bg-black mr-2 rounded-full"></div>
          <p class="text-xl font-medium leading-loose">{{item.title}}</p>
        </div>
        <div class="mt-2 px-5">
          <p class="text-l font-light">{{item.text}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import itemsConfig from '../../utils/itemsConfig';

export default {
  setup() {
    return {
      itemsConfig,
    };
  },
}
</script>
