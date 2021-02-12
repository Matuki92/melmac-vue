<template>
  <hr :class="`w-16 my-4 border-1 border-black opacity-25 ${align === 'center' ? 'm-auto' : ''}`">
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: () => 'center',
    },
  },
}
</script>