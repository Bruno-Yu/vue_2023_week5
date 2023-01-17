// import Modal from 'tw-elements/dist/src/js/bs/dist/modal';
import Modal from 'tw-elements/dist/src/js/bs/src/modal';
import { ref, onMounted } from 'vue';

// 若放在被掛載modal 處
export default {
  setup() {
    const modal = ref(null);
    const bsModal = ref(null);
    function openModal() {
      bsModal.value.show();
    }
    function hideModal() { 
      bsModal.value.hide();
    }
    onMounted(() => {
      bsModal.value = new Modal(modal.value);
    })
    return {
      openModal,
      hideModal,
    }
  }
};
