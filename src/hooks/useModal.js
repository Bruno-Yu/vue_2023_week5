
import { ref } from "vue";

export const useApi = () => { 
  // 當前產品
  const currentItem = ref({});

  // 訊息視窗
  const infoModal = ref(null);
      const messageContent = ref({
      title: '提示',
      message: '',
      status: '',
    });
        function hideInfoModal() {
      infoModal.value.hideModal();
      messageContent.value.title = '提示';
      messageContent.value.message = '';
      messageContent.value.status = '';
    }

//  判別是 新增還是編輯視窗
      const isNew = ref(false);

     // 刪除視窗
    function openDeleteModal(item) {
      currentItem.value = item;
      messageContent.value.title = '刪除提示';
      messageContent.value.message = '請確認是否要刪除!';
      messageContent.value.status = 'delete';
      infoModal.value.openModal();
    }

        // 編輯 & 新增視窗 & 邏輯
    const modal = ref(null);
    function openModal(item) {
      currentItem.value = item;
      isNew.value = false;
      modal.value.openModal();
    }
    function hideModal() {
      modal.value.hideModal();
    }
    function openNewModal() {
      isNew.value = true;
      modal.value.openModal();
    }

  return { messageContent,infoModal, hideInfoModal, isNew , openDeleteModal, openModal,  hideModal, openNewModal  };
};
