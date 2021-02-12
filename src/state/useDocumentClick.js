import { ref, onMounted, onUnmounted } from "vue";

let expose;

const useDocumentClick = () => {
  if (expose) {
    return expose;
  }

  const target = ref(null);

  function onDocumentClick(e) {
    target.value = e.target;
  }

  onMounted(() => {
    document.body.addEventListener('click', onDocumentClick);
  });

  onUnmounted(() => {
    document.body.removeEventListener('click', onDocumentClick);
  });

  expose = { target };

  return expose;
};

export default useDocumentClick;
