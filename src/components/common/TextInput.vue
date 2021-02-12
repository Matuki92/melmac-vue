<template>
  <input
    v-if="type === 'text'"
    :class="inputClass"
  >
  <textarea
    v-else-if="type === 'textarea'"
    cols="30"
    rows="10"
    :class="inputClass"
  ></textarea>
</template>

<script>
export default {
  props: {
    type: String,
  },
  setup() {
    const inputClass = 'w-full focus:outline-none border-b focus:border-gray-500 transition-colors duration-300 ease-in-out';

    return {
      inputClass,
    };
  },
}
</script>

<style scoped>
textarea {
  resize: none;
}
</style>