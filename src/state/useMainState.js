import { ref } from "vue";

const loading = ref(true);
const homeReady = ref(false);
const aboutReady = ref(false);

export default () => ({
  loading,
  homeReady,
  aboutReady,
});
